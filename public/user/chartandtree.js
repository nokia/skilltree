var treeData = undefined;
var userData = undefined;

// get user's data (skilllevels) from server
var userDataRequest = new XMLHttpRequest();
userDataRequest.open('GET', '/get/userdata', true);
userDataRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
userDataRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
userDataRequest.responseType = "json";
userDataRequest.onreadystatechange = function() {
    if(userDataRequest.readyState == 4 && userDataRequest.status == 200) {
        userData = userDataRequest.response;
        if (userData.length == 0) alert("Please add some trees.");
        else initChart();
    }
}
userDataRequest.send();

// get the data of all trees (treeID, name, skills(level(in the tree), maxSkillLevel, ...))
var treeDataRequest = new XMLHttpRequest();
treeDataRequest.open('GET', '/get/treedata', true);
treeDataRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
treeDataRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
treeDataRequest.responseType = "json";
treeDataRequest.onreadystatechange = function() {
    if(treeDataRequest.readyState == 4 && treeDataRequest.status == 200) {
        treeData = treeDataRequest.response;
        initChart();
    }
}
treeDataRequest.send();

var app = new PIXI.Application({
        view: pixiCanvas,
        width: window.innerWidth - 20,
        height: window.innerHeight - 50,
        backgroundColor: 0x183693,
        antialias: true,
        autoStart: false,
});

// TOP BAR

// get username from token and show it
var tokenPayload = parseJwt(localStorage.getItem("loginToken"));
document.getElementById("welcome").innerHTML = "Hello " + tokenPayload.username + "!";

var cid;
function listTrees(){
  //console.log("a");
  var dtc = document.getElementById("dropDownContent");
  dtc.innerHTML = "";
  for(i = 0; i < treeData.length; i++){
    if(!userData.find(obj => obj.treeID == treeData[i].treeID)){
      dtc.innerHTML += "<a>" + treeData[i].treeName + "</a>";
      cid = dtc.choiceID = treeData[i].treeID;
      dtc.addEventListener("click", choiceClick);
    }
  }
}

function choiceClick () {
    var req = new XMLHttpRequest();
    var data = new Array();
    data.push(cid);

    req.open('POST', '/set/mytrees', true);
    req.setRequestHeader('Content-type', 'application/json');
    req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){
            window.reload();
        }
    }
    req.send(JSON.stringify(data));
}

function logout(){
    localStorage.setItem("loginToken", "");
    window.open("/", "_self");
}

PIXI.loader.add("pictures/skillborder.png")
            .add("tree.png")
            .add("pictures/back.png")
            .add("pictures/tick.png");
PIXI.loader.load(initChart);

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;

// CHART

var sliceContainer;
var logo;

var counter = 0;                // ?????
function initChart() {
    counter++;                  // ????? initChart waits for pixi loader, tree data and user data, only runs when we have all these
    if (counter < 3) {          // ?????
        return;                 // ?????
    }

    var sliceCount = userData.length;
    sliceContainer = new Array(sliceCount);

    document.getElementById("pixiCanvas").style.visibility = "visible";

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;

    var width = 240;
    var h1 = 60;
    var h2 = h1 + width;

    for (var i = 0; i < sliceCount; i++) {
        var currentLevelSum = 0;
        var maxLevelSum = 0;
        var percent = 0;

        for (var j = 0; j < treeData.find(obj => obj.treeID == userData[i].treeID).skills.length; ++j) {
            var skill = treeData.find(obj => obj.treeID == userData[i].treeID).skills[j];
            currentLevelSum += getSkillLevel(i, skill.skillID);
            maxLevelSum += skill.maxSkillLevel;
        }

        percent = currentLevelSum / maxLevelSum;

        var tempContainer = new PIXI.Container();
        tempContainer.id = i;

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

        sliceContainer[i] = tempContainer;
        sliceContainer[i].buttonMode = true;
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
                    });

        app.stage.addChild(sliceContainer[i]);

        // creates tree name at the chart
        var text = new PIXI.Text(treeData.find(obj => obj.treeID == userData[i].treeID).treeName, {fill: '#ffffff', wordWrap: true, wordWrapWidth: 200, align: 'center'});

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
        app.stage.addChild(rope);
        rope.position.set(window.innerWidth / 2, window.innerHeight / 2);
        sliceContainer[i].title = rope;
    }

    logo = new PIXI.Sprite(PIXI.loader.resources["tree.png"].texture);
    logo.anchor.set(0.5, 0.5);
    logo.position.set(window.innerWidth / 2, window.innerHeight / 2);
    logo.scale.set(0.42);
    app.stage.addChild(logo);

    app.renderer.render(app.stage);
}

function hideChart () {
    for (var i = 0; i < sliceContainer.length; ++i) {
        app.stage.removeChild(sliceContainer[i]);
        app.stage.removeChild(sliceContainer[i].title);
    }
    app.stage.removeChild(logo);
}

function showChart () {
    for (var i = 0; i < sliceContainer.length; ++i) {
        app.stage.addChild(sliceContainer[i]);
        app.stage.addChild(sliceContainer[i].title);
    }
    app.stage.addChild(logo);
}

// TREE

// app.localLoader is a loader for skillicons (when a tree is opened, we load only that tree's skillicons)
// PIXI.loader is global, it loads the back button, skillborder, tree, ...

var tree = undefined;

function showTree (treeID) {
    // load the tree's pictures
    app.localLoader = new PIXI.loaders.Loader();
    for (var j = 0; j < treeData.find(obj => obj.treeID == treeID).skills.length; ++j) {
        var skill = treeData.find(obj => obj.treeID == treeID).skills[j];
        app.localLoader.add(skill.skillIcon.toString());
    }

    app.localLoader.load(function () {
        tree = new Tree(app, treeID, treeData.find(obj => obj.treeID == treeID), userData.find(obj => obj.treeID == treeID), 0, 30);
        app.stage.addChild(tree.treeContainer);

        // back button
        var backButton = new PIXI.Sprite(PIXI.loader.resources["pictures/back.png"].texture);
        backButton.interactive = true;
        backButton.buttonMode = true;
        backButton.on('pointerdown', function() {
            // hide tree and show chart
            app.stage.removeChild(tree.treeContainer);
            app.stage.removeChild(backButton);
            app.localLoader.destroy();
            tree = undefined;
            //showChart();
            initChart(); // we need to create the chart again because the levels could have chaged
            app.renderer.render(app.stage);
        });

        app.stage.addChild(backButton);

        app.renderer.render(app.stage);
    });
}

function openEditor () {
    app.stage.removeChild(tree.treeContainer);
    app.localLoader.destroy();
    tree = undefined;

    // load the tree's pictures
    app.localLoader = new PIXI.loaders.Loader();
    for (var j = 0; j < treeData.find(obj => obj.treeID == treeID).skills.length; ++j) {
        var skill = treeData.find(obj => obj.treeID == treeID).skills[j];
        app.localLoader.add(skill.skillIcon.toString());
    }

    app.localLoader.load(function () {
        tree = new EditorTree(app, treeID, treeData.find(obj => obj.treeID == treeID), userData.find(obj => obj.treeID == treeID), 0, 30);
        app.stage.addChild(tree.treeContainer);

        app.renderer.render(app.stage);
    });
}

// helper functions

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};

function getSkillLevel (treeID, skillID) {
    if (userData.find(obj => obj.treeID == treeID) != undefined) {
        if (userData.find(obj => obj.treeID == treeID).skills.find(obj => obj.skillID == skillID) != undefined) {
            return userData.find(obj => obj.treeID == treeID).skills.find(obj => obj.skillID == skillID).skillLevel;
        } else return 0;
    } else return 0;
}
