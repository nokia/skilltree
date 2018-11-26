var data = undefined;

// get data from server
var dataRequest = new XMLHttpRequest();
dataRequest.open('GET', '/get/userdata', true);
dataRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
dataRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
dataRequest.responseType = "json";
dataRequest.onreadystatechange = function() {
    if(dataRequest.readyState == 4 && dataRequest.status == 200) {
        data = dataRequest.response;
        checkFirstLogin();
    }
}
dataRequest.send();

var app = new PIXI.Application({
        view: pixiCanvas,
        width: window.innerWidth - 160,
        height: window.innerHeight - 30,
        backgroundColor: 0x183693,
        antialias: true,
        autoStart: false,
        autoResize: true
});

// TOP BAR

// get username from token and show it
var tokenPayload = parseJwt(localStorage.getItem("loginToken"));
document.getElementById("welcome").innerText = "Hello " + tokenPayload.username + "!";

function checkFirstLogin() {
    if (data.mainTree != undefined) startLoader();
    else {
        var modal = document.getElementById('firstLogin');
        var btn = document.getElementById('savebtn');
        var mainTree = document.getElementById('maintree');

        btn.onclick = function() {
            var location = document.getElementById('location').value;
            var teachingDay = document.getElementById('day').value;
            var teachingTime = document.getElementById('timeStart').value + ' - ' + document.getElementById('timeEnd').value;
            var location = document.getElementById('location').value;

            var firstLoginData = {
                    mainTree: mainTree.value,
                    teachingDay: teachingDay,
                    teachingTime: teachingTime,
                    location: location
            };

            var saveMain = new XMLHttpRequest();
            saveMain.open('POST', '/set/firstlogindata', true);
            saveMain.setRequestHeader('Content-type', 'application/json');
            saveMain.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
            saveMain.onreadystatechange = function() {
                if(saveMain.readyState == 4 && saveMain.status == 200) {
                  window.open("/user/", "_self");
                }
            }
            saveMain.send(JSON.stringify(firstLoginData));
        }

        /*var span = document.getElementsByClassName("modalClose")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }*/

        for (var i = 0; i < data.focusArea.treeNames.length; ++i) {
            var option = document.createElement('option');
            option.value = option.text = data.focusArea.treeNames[i];
            mainTree.add(option);
        }

        if (!data.willingToTeach) document.getElementById('teachingSettings').style.display = 'none';

        modal.style.display = "block";
    }
}

/*function toggleSkillDetailsPage() {
    var modal = document.getElementById('skillpage');

    modal.style.display = "block";

}*/

// ???

function searchTreesByName(){
  var treeToSearch = {value: document.getElementById('searchedTree').value};
  var sideBarSearchResult = document.getElementById('sideBarSearchResult');
  var sch = new XMLHttpRequest();
  sch.open('POST', '/set/searchTreesByName', true);
  sch.setRequestHeader('Content-type', 'application/json');
  sch.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
  sch.responseType = "json";
  sch.onreadystatechange = function() {
      if(sch.readyState == 4 && sch.status == 200) {
        var mya = document.createElement('option');
        sideBarSearchResult.innerHTML = "";
        for (var i = 0; i < sch.response.length; i++) {
          mya.value = sch.response[i].name;
          sideBarSearchResult.appendChild(mya);
        }
      }
  }
  sch.send(JSON.stringify(treeToSearch));
}

function addTreeToUser(){
  var treeToAdd = {value: document.getElementById('searchedTree').value};

  var adt = new XMLHttpRequest();
  adt.open('POST', '/set/addTreeToUser');
  adt.setRequestHeader('Content-type', 'application/json');
  adt.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
  adt.responseType = "json";
  adt.onreadystatechange = function() {
      if (adt.readyState == 4 && adt.status == 200) {
        if (adt.response.success){
          var forest = document.getElementById("forest");
          var nt = document.createElement('div');
          nt.innerText = adt.response.name;
          nt.className = "listedTree";
          forest.appendChild(nt);
        } else if (adt.response.message == "existing") alert("Selected tree is already added.");
        else if (adt.response.message == "notfound") alert("The tree is not found.");
      }
  }
  adt.send(JSON.stringify(treeToAdd));
}

function submit(){
  var sub = new XMLHttpRequest();
  sub.open('POST', '/set/submitall', true);
  sub.setRequestHeader('Content-type', 'application/json');
  sub.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
  sub.onreadystatechange = function() {
      if(sub.readyState == 4 && sub.status == 200) {
        window.open("/user/", "_self");
      }
  }

  var submitData = data.skills;
  for (var i = 0; i < submitData.length; ++i) {
      delete submitData[i].itemcontainer;
  }

  sub.send(JSON.stringify(submitData));
}

function logout(){
    localStorage.setItem("loginToken", "");
    window.open("/", "_self");
}

function startLoader () {
    PIXI.loader.add("pictures/skillborder.png")
                //.add("tree.png")
                .add("pictures/back.png")
                .add("pictures/tick.png");
    for (var i = 0; i < data.skills.length; ++i) {
        PIXI.loader.add(data.skills[i].skillIcon.toString());
    }
    PIXI.loader.load(function () {
        showTree(data.mainTree);
    });
}

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;

// CHART

document.getElementById("openchart").onclick = showChart;

var chartContainer = new PIXI.Container();

function showChart() {
    if (tree != undefined) {
        app.stage.removeChild(tree.treeContainer);
        tree = undefined;
    }

    document.getElementById("openchart").value = "Close Chart";
    document.getElementById("openchart").onclick = function() {
        showTree(selectedTreeName);
    };

    chartContainer = new PIXI.Container();

    var sliceCount = data.categories.length;

    //initialize chart variables
    var x = 0;
    var y = 0;
    var width = 240;
    var h1 = 60;
    var h2 = h1 + width;

    for (var i = 0; i < sliceCount; i++) {
        var tempContainer = new PIXI.Container();

        var skills = data.skills.filter(obj => obj.categoryName == data.categories[i].name);
        var sumAP = skills.sum("achievedPoint");
        var sumMP = skills.sum("maxPoint");
        var percent = 0;
        if (sumMP != 0) percent = sumAP / sumMP;

        h2 = h1 + width;
        var s = (i * (360 / sliceCount) * Math.PI) / 180;
        var e = ((i + 1) * (360 / sliceCount) * Math.PI) / 180;

        var slice = new PIXI.Graphics();
        slice.lineStyle(3, 0x000000);

        slice.moveTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        slice.beginFill(0xFFFFFF);
        slice.arc(x, y, h1, e, s, true);
        slice.arc(x, y, h2, s, e, false);
        slice.lineTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        slice.endFill();

        tempContainer.addChild(slice);

        h2 = h1 + (width * percent);
        var innerSlice = new PIXI.Graphics();
        innerSlice.lineStyle(3, 0x000000);
        innerSlice.moveTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        innerSlice.beginFill(0xFF0000);
        innerSlice.arc(x, y, h1, e, s, true);
        innerSlice.arc(x, y, h2, s, e, false);
        innerSlice.lineTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        innerSlice.endFill();

        tempContainer.addChild(innerSlice);


        //Clickabke slices ----------------------------
        /*sliceContainer[i].buttonMode = true;
        sliceContainer[i].interactive = true;

        sliceContainer[i]
                    .on('pointerover', function() {
                        this.alpha = 0.75;
                        app.renderer.render(app.stage);
                    })
                    .on('pointerout', function() {
                        this.alpha = 1;
                        app.renderer.render(app.stage);
                    })
                    .on('pointerdown', function() {
                        hideChart();
                        showTree(this.id);
                    });*/

        // creates tree name at the chart
        //var text = new PIXI.Text(treeData.find(obj => obj.treeID == userData[i].treeID).treeName, {fill: '#ffffff', wordWrap: true, wordWrapWidth: 200, align: 'center'});

        //Write category names
        var text = new PIXI.Text(data.categories[i].name, {fill: '#ffffff', wordWrap: true, wordWrapWidth: 200, align: 'center'});
        var points = [];
        var radius = 320 + (text.height / 29 - 1) * 15;
        var pointsCount = 20;
        if (Math.floor(sliceCount / 2) <= i) {
            for (var j = 0; j < pointsCount; j++) {
                var px = radius * Math.cos(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                var py = radius * Math.sin(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                points.push(new PIXI.Point(px, py));
            }
        } else {
            for (var j = pointsCount - 1; j > 0; --j) {
                var px = radius * Math.cos(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                var py = radius * Math.sin(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                points.push(new PIXI.Point(px, py));
            }
        }

        var rope = new PIXI.mesh.Rope(text.texture, points);
        rope.rotation = (Math.PI * 2 / sliceCount - text.width / (240 * 8 / sliceCount) * Math.PI * 2 / sliceCount * 0.95) / 2;
        tempContainer.addChild(rope);

        chartContainer.addChild(tempContainer);
    }

    /*var logo = new PIXI.Sprite(PIXI.loader.resources["tree.png"].texture);
    logo.anchor.set(0.5, 0.5);
    //logo.position.set(window.innerWidth / 2, window.innerHeight / 2);
    logo.scale.set(0.42);
    //app.stage.addChild(logo);
    chartContainer.addChild(logo);*/

    chartContainer.position.set((window.innerWidth - 160) / 2, (window.innerHeight - 30) / 2);
    app.stage.addChild(chartContainer);

    // scale chart
    var ratio = chartContainer.width / chartContainer.height;
    if (window.innerWidth - 160 < window.innerHeight - 30) {
        chartContainer.width = window.innerWidth - 200;
        chartContainer.height = (window.innerWidth - 200) / ratio;
    } else {
        chartContainer.width = (window.innerHeight - 70) * ratio;
        chartContainer.height = window.innerHeight - 70;
    }

    //app.renderer.render(app.stage);
}

window.onresize = function () {
    app.renderer.resize(window.innerWidth - 160, window.innerHeight - 30);

    if (chartContainer != undefined) {
        var ratio = chartContainer.width / chartContainer.height;
        if (window.innerWidth - 160 < window.innerHeight - 30) {
            chartContainer.width = window.innerWidth - 200;
            chartContainer.height = (window.innerWidth - 200) / ratio;
        } else {
            chartContainer.width = (window.innerHeight - 70) * ratio;
            chartContainer.height = window.innerHeight - 70;
        }

        chartContainer.position.set((window.innerWidth - 160) / 2, (window.innerHeight - 30) / 2);
    }

    if (tree != undefined) {
        tree.treeContainer.position.set(app.renderer.width / 2 + tree.treeContainer.width / 2, app.renderer.height / 2);
    }

    app.renderer.render(app.stage);
};

// TREE

// app.localLoader is a loader for skillicons (when a tree is opened, we load only that tree's skillicons)
// PIXI.loader is global, it loads the back button, skillborder, tree,...

var selectedTreeName;
var tree = undefined;

function showTree (treeName) {
    // load the tree's pictures
    selectedTreeName = treeName;

    var skills = new Array();
    for (var j = 0; j < data.trees.find(obj => obj.name == treeName).skillNames.length; ++j) {
        var skillName = data.trees.find(obj => obj.name == treeName).skillNames[j];
        var skill = data.skills.find(obj => obj.name == skillName);

        skills.push(skill);
    }

    if (chartContainer != undefined) {
        app.stage.removeChild(chartContainer);
        chartContainer = undefined;
    }

    document.getElementById("openchart").value = "Open Chart";
    document.getElementById("openchart").onclick = showChart;

    tree = new Tree(app, skills);
    app.stage.addChild(tree.treeContainer);
    tree.treeContainer.pivot.set(tree.treeContainer.width / 2, tree.treeContainer.height / 2);
    tree.treeContainer.position.set(app.renderer.width / 2 + tree.treeContainer.width / 2, app.renderer.height / 2);

    tree.treeContainer.alpha = 1;
    app.renderer.render(app.stage);
    document.getElementById("pixiCanvas").style.visibility = "visible";
    app.start();
    /*var fadein = function (delta) {
        tree.treeContainer.alpha += .05;
        if (tree.treeContainer.alpha == 1) {
            app.ticker.remove(fadein);
            app.stop();
        }
    };
    app.ticker.add(fadein);*/
}



/*function openEditor () {
    app.stage.removeChild(tree.treeContainer);
    app.localLoader.destroy();
    tree = undefined;

    // load the tree's pictures
    app.localLoader = new PIXI.loaders.Loader();
    var treeID2 = 0;
    var editedTree = data.trees.find(obj => obj.id == treeID2);
    for(var i = 0; i < editedTree.skillIDs.length; i++){
      var skill = data.skills.find(obj => obj.id == editedTree.skillIDs[i]);
      app.localLoader.add(skill.skillIcon.toString());
    }

    app.localLoader.load(function () {
        app.renderer.resize(.75 * window.innerWidth - 150, window.innerHeight - 30);

        // passes the details of the skills used by the tree.
        for(var i = 0; i < editedTree.skillIDs.length; i++){
          editedTree.skills[i] = data.skills.find(obj => obj.id == editedTree.skillIDs[i]);
        }
        //tree = new EditorTree(app, treeID2, treeData.find(obj => obj.treeID == treeID2), 150, 30);
        // needs a new constructor, where we pass the expanded editedTree, the app, and xy.
        tree = new EditorTree(app, editedTree, 150, 30);

        app.stage.addChild(tree.treeContainer);

        app.renderer.render(app.stage);
    });
}*/

// helper functions

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

Array.prototype.sum = function (prop) {
    var total = 0;

    for (var i = 0; i < this.length; ++i) {
        total += this[i][prop];
    }

    return total;
}
