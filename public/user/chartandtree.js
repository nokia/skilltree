var data = undefined;

initData();

// get data from server
function initData(){
  var dataRequest = new XMLHttpRequest();
  dataRequest.open('GET', '/get/userdata', true);
  dataRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  dataRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
  dataRequest.responseType = "json";
  dataRequest.onreadystatechange = function() {
      if(dataRequest.readyState == 4 && dataRequest.status == 200) {
          data = dataRequest.response;
          if (data.admin) document.getElementById('openAdminMenu').style.display = "block";
          checkFirstLogin();
          initUI(true, data);

          document.getElementById("home").onclick = function () {showTree(data.mainTree, data); initUI(true, data)};
      }
  }
  dataRequest.send();
}

// creates the pixi app
var app = new PIXI.Application({
        view: pixiCanvas,
        width: window.innerWidth,
        height: window.innerHeight - 60,
        backgroundColor: 0x000000,
        antialias: true,
        autoStart: false,
        autoResize: true
});

// initializes the data of the card on the top-left corner of the page.
function initCard(){
  var treeCount = document.getElementById('treeCount');
  var skillCount = document.getElementById('skillCount');
  var pointCount = document.getElementById('pointCount');
  var cardUserName = document.getElementById('cardUserName');
  var cardMainTree = document.getElementById('cardMainTree');

  treeCount.innerHTML = data.trees.length + "<br>trees";
  skillCount.innerHTML = data.skills.length + "<br>skills";
  pointCount.innerHTML = data.skills.sum("achievedPoint") + "<br>points";
  cardUserName.innerHTML = data.username;
  cardMainTree.innerHTML = data.mainTree;
}

// initializes tge data of the card on the top-right corner of the page.
function initUI(self, _data){
  var card_username = document.getElementById('card_username');
  var treeOperationTitle = document.getElementById('treeOperationTitle');
  var searchedTree = document.getElementById('searchedTree');
  var addsearchedTree = document.getElementById('addsearchedTree');
  if (self) {
    card_username.innerHTML = "Welcome " + _data.username + "!";
    treeOperationTitle.innerHTML = "Add existing trees!";
    searchedTree.onkeyup = searchTreesByName;
    addsearchedTree.value = "Add!";
    addsearchedTree.onclick = addTreeToUser;
  }
  else {
    card_username.innerHTML = "You're now viewing " + _data.username + "'s data.";
    treeOperationTitle.innerHTML = "Browse " + _data.username + "'s public trees!";
    searchedTree.onkeyup = searchTreesByName;
    addsearchedTree.value = "Search!";
    addsearchedTree.onclick = function(){
      showTree(searchedTree.value, _data);
    }
  }
}

// TOP BAR

// get username from token and show it
var tokenPayload = parseJwt(localStorage.getItem("loginToken"));

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


            var firstLoginData = {
                    mainTree: mainTree.value,
                    teachingDay: teachingDay,
                    teachingTime: teachingTime,
                    location: location
            };

            request('POST', '/set/firstlogindata', firstLoginData, function() {
                if(this.readyState == 4 && this.status == 200) {
                  window.open("/user/", "_self");
                }
            });
        }

        var span = document.getElementsByClassName("modalClose")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

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

// loads the user's public and private trees.
function loadAddedTrees(){
  var treeList = document.getElementById('treeList');
  treeList.innerHTML = "";
  for (var i = 0; i < data.trees.length; i++) {
    var tn = data.trees[i].name;
    var ithtree = document.createElement('a');
    ithtree.innerHTML = tn;
    ithtree.className = "dropdown-item";
    ithtree.onclick = function() {
      showTree(this.innerHTML, data);
    }
    treeList.appendChild(ithtree);
  }
}

// searches users by the string provided.
function searchUsersByName(){
  var userToSearch = {value: document.getElementById('searchedUser').value};
  var UserSearchResult = document.getElementById('UserSearchResult');

  if (userToSearch !== "") {
    request('POST', '/set/searchUsersByName', userToSearch, function() {
        if(this.readyState == 4 && this.status == 200) {
          UserSearchResult.innerHTML = "";
          for (var i = 0; i < this.response.length; i++) {
            var mya = document.createElement('option');
            mya.value = this.response[i].name;
            UserSearchResult.appendChild(mya);
          }
        }
    });
  }
}

// searches skills by provided name
function searchSkillsByName(element){
    var skillToSearch = {value: element.value};
    var skillSearchResult = document.getElementById('skillSearchResult');
    request('POST', '/set/searchSkillsByName', skillToSearch, function () {
        if (this.readyState == 4 && this.status == 200) {
            skillSearchResult.innerText = "";
            for (var i = 0; i < this.response.length; i++) {
                var mya = document.createElement('option');
                mya.value = this.response[i].name;
                skillSearchResult.appendChild(mya);
            }
        }
    });
}

// searches trees by the provided name
function searchTreesByName(){
  var treeToSearch = {value: document.getElementById('searchedTree').value};
  var TreeSearchResult = document.getElementById('TreeSearchResult');

  request('POST', '/set/searchTreesByName', treeToSearch, function() {
      if(this.readyState == 4 && this.status == 200) {
        TreeSearchResult.innerHTML = "";
        for (var i = 0; i < this.response.length; i++) {
          var mya = document.createElement('option');
          mya.value = this.response[i].name;
          TreeSearchResult.appendChild(mya);
        }
      }
  });
}

// gets the username, trees, skills and maintree of the user.
function getPublicUserData(){
  var userToSearch = {value: document.getElementById('searchedUser').value};

  request('POST', '/set/getPublicUserData', userToSearch, function() {
      if(this.readyState == 4 && this.status == 200) {
        showTree(this.response.mainTree, this.response);
        initUI(false, this.response);
      }
  });
}

// adds a public tree to the user
function addTreeToUser(){
  var treeToAdd = {value: document.getElementById('searchedTree').value};

  request('POST', '/set/addTreeToUser', treeToAdd, function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.response.success){
          var forest = document.getElementById("treeList");
          var nt = document.createElement('div');
          nt.innerText = this.response.name;
          nt.className = "listedTree";
          forest.appendChild(nt);
          alert("Selected tree successfully added.");
          initData();
          loadAddedTrees();
        } else if (this.response.message == "existing") alert("Selected tree is already added.");
        else if (this.response.message == "notfound") alert("The tree is not found.");
      }
  });
}

// confirm the changes made to skill levels.
function submit(){
    var submitData = data.skills;
    for (var i = 0; i < submitData.length; ++i) {
        delete submitData[i].itemcontainer;
    }
    request('POST', '/set/submitall', submitData, function() {
        if(this.readyState == 4 && this.status == 200) {
          initData();
        }
    });
}

// logout.
function logout(){
    localStorage.setItem("loginToken", "");
    window.open("/", "_self");
}

// loads the needed pics for the tree, then loads the tree.
function startLoader () {
    PIXI.loader.reset();

    PIXI.loader.add("pictures/skillborder.png")
                .add("pictures/bg.jpg")
                .add("pictures/tree.png")
                .add("pictures/tick.png");
    for (var i = 0; i < data.skills.length; ++i) {
        PIXI.loader.add(data.skills[i].skillIcon.toString());
    }
    PIXI.loader.load(function () {
        showTree(data.mainTree, data);
    });
    loadAddedTrees();
}

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;

// CHART

document.getElementById("openchart").onclick = showChart;

var chartContainer = new PIXI.Container();

// hides tree, shows chart.
function showChart() {
    document.getElementById('creator').style.display = "none";
    document.getElementById('approveTrees').style.display = "none";
    document.getElementById('approveSkills').style.display = "none";
    document.getElementById('pixiCanvas').style.display = "block";

    document.getElementById("openchart").onclick = showTree(data.mainTree, data);

    if (tree != undefined) {
        app.stage.removeChild(tree.treeContainer);
        tree = undefined;
    }

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
    logo.position.set(window.innerWidth / 2, window.innerHeight / 2);
    logo.scale.set(0.42);
    app.stage.addChild(logo);
    chartContainer.addChild(logo);*/

    chartContainer.position.set((window.innerWidth) / 2, (window.innerHeight - 64) / 2);
    app.stage.addChild(chartContainer);

    // scale chart
    var ratio = chartContainer.width / chartContainer.height;
    if (window.innerWidth < window.innerHeight - 64) {
        chartContainer.width = window.innerWidth - 40;
        chartContainer.height = (window.innerWidth - 40) / ratio;
    } else {
        chartContainer.width = (window.innerHeight - 64) * ratio;
        chartContainer.height = window.innerHeight - 64;
    }

    //app.renderer.render(app.stage);
}

window.onresize = function () {
    app.renderer.resize(window.innerWidth, window.innerHeight - 30);

    if (chartContainer != undefined) {
        var ratio = chartContainer.width / chartContainer.height;
        if (window.innerWidth < window.innerHeight - 30) {
            chartContainer.width = window.innerWidth - 40;
            chartContainer.height = (window.innerWidth - 40) / ratio;
        } else {
            chartContainer.width = (window.innerHeight - 64) * ratio;
            chartContainer.height = window.innerHeight - 64;
        }

        chartContainer.position.set((window.innerWidth) / 2, (window.innerHeight - 30) / 2);
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

// hides chart, shows tree
function showTree (treeName, _data) {
    document.getElementById('creator').style.display = "none";
    document.getElementById('approveTrees').style.display = "none";
    document.getElementById('approveSkills').style.display = "none";
    document.getElementById('pixiCanvas').style.display = "block";

    if (tree != undefined) {
        app.stage.removeChild(tree.treeContainer);
        tree = undefined;
    }
    selectedTreeName = treeName;

    var skills = new Array();
    for (var j = 0; j < _data.trees.find(obj => obj.name == treeName).skillNames.length; ++j) {
        var skillName = _data.trees.find(obj => obj.name == treeName).skillNames[j];
        var skill = _data.skills.find(obj => obj.name == skillName);

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
    tree.skills[0].itemcontainer.refreshAvaliability();
    app.renderer.render(app.stage);
    document.getElementById("pixiCanvas").style.visibility = "visible";
    app.start();

    // fading animation, disabled for now.
    /*var fadein = function (delta) {
        tree.treeContainer.alpha += .05;
        if (tree.treeContainer.alpha == 1) {
            app.ticker.remove(fadein);
            app.stop();
        }
    };
    app.ticker.add(fadein);*/
}

// opens skill creation, and manages it.
function createSkill () {
    var modal = document.getElementById("newSkillModal");
    modal.style.display = "block";

    var span = document.getElementById("closeSkillModal");

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var catSelect = document.getElementById("newSkillCat");
    for (var i = 0; i < data.categories.length; ++i) {
        var option = document.createElement("option");
        option.text = data.categories[i].name;
        catSelect.add(option);
    }

    var save = document.getElementById("saveSkillBtn");
    save.onclick = function () {
        var pointsTable = document.getElementById('pointsTable');
        var pointsNum = pointsTable.rows.length - 1;
        var pointDescription = [];
        for (i = 1; i < pointsNum + 1; ++i) pointDescription.push(pointsTable.rows[i].cells[1].children[0].value);

        var parentsTable = document.getElementById('parentsTable');
        var parents = [];
        for (i = 1; i < parentsTable.rows.length; ++i) {
            parents.push({
                name: parentsTable.rows[i].cells[0].children[0].value,
                minPoint: parentsTable.rows[i].cells[1].children[0].value,
                recommended: !parentsTable.rows[i].cells[2].children[0].checked
            });
        }

        /*var childrenTable = document.getElementById('childrenTable');
        var children = [];
        for (i = 1; i < childrenTable.rows.length; ++i) {
            children.push({
                name: childrenTable.rows[i].cells[0].children[0].value,
                minPoint: childrenTable.rows[i].cells[1].children[0].value,
                recommended: !childrenTable.rows[i].cells[2].children[0].checked
            });
        }*/

        var trainingsTable = document.getElementById('trainingsTable');
        var trainings = [];
        for (i = 1; i < trainingsTable.rows.length; ++i) {
            trainings.push({
                name: trainingsTable.rows[i].cells[0].children[0].value,
                level: trainingsTable.rows[i].cells[1].children[0].value,
                description: trainingsTable.rows[i].cells[2].children[0].value,
                url: trainingsTable.rows[i].cells[3].children[0].value
            });
        }

        var skillData = {
            name: document.getElementById('newSkillName').value,
            description: document.getElementById('newSkillDesc').value,
            skillIcon: document.getElementById('newSkillIcon').value,
            categoryName: catSelect.value,
            maxPoint: pointsNum,
            pointDescription: pointDescription,
            parents: parents,
            //children: children,
            trainings: trainings,
            forApprove: document.getElementById('forApprove').checked
        };

        request('POST', '/set/newskill', skillData, function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response.success) {
                    modal.style.display = "none";
                }
            }
        });
    };
};

// opens tree creator and manages it.
function createTree() {
    document.getElementById('approveTrees').style.display = "none";
    document.getElementById('approveSkills').style.display = "none";

    var canvas = document.getElementById("pixiCanvas");
    canvas.style.display = "none";

    var creator = document.getElementById("creator");
    creator.style.display = "grid";

    creator.style.width = canvas.style.width;
    creator.style.height = canvas.style.height;

    var addBtn = document.getElementById("addToTree");
    var skillList = document.getElementById("skillList");
    var skillsToAdd = [];
    addBtn.onclick = function () {
        var skill = {value: document.getElementById('skillSearchTree').value};

        request('POST', '/set/getskill', skill, function() {
            if(this.readyState == 4 && this.status == 200) {
                if (this.response.success) {
                    if (skillsToAdd.find(obj => obj.name == this.response.skill.name) == undefined) {
                        if (this.response.dependency.length > 0) {
                            var text = "The selected skill depends on the following skills. Do you want to add these?\n";
                            for (var i = 0; i < this.response.dependency.length; ++i) {
                                text += this.response.dependency[i].name + "\n";
                            }
                            if (confirm(text)) {
                                skillsToAdd.push(this.response.skill);
                                var option = document.createElement("option");
                                option.text = this.response.skill.name;
                                skillList.add(option);
                                for (var i = 0; i < this.response.dependency.length; ++i) {
                                    if (skillsToAdd.find(obj => obj.name == this.response.dependency[i].name) == undefined) {
                                        skillsToAdd.push(this.response.dependency[i]);
                                        var option = document.createElement("option");
                                        option.text = this.response.dependency[i].name;
                                        skillList.add(option);
                                    }
                                }
                            }
                        } else {
                            skillsToAdd.push(this.response.skill);
                            var option = document.createElement("option");
                            option.text = this.response.skill.name;
                            skillList.add(option);
                        }
                    } else alert("You have already added this skill");
                } else alert("Skill is not found");
                /*skillSearchResult.innerText = "";
                for (var i = 0; i < sch.response.length; i++) {
                    var mya = document.createElement('option');
                    mya.value = sch.response[i].name;
                    skillSearchResult.appendChild(mya);
                }*/
            }
        });
    };

    var createSkillBtn = document.getElementById("createSkill");
    createSkillBtn.onclick = createSkill;

    var deleteBtn = document.getElementById("deleteFromList");
    deleteBtn.onclick = function () {
        skillsToAdd = skillsToAdd.filter(obj => obj.name != skillList.options[skillList.selectedIndex].text);
        skillList.remove(skillList.selectedIndex);
        // nem kene engednie, hogy torolje a dependecyt vagy mashol kell ezt ellenorizni
    };

    var createBtn = document.getElementById("createTree");
    createBtn.onclick = function () {
        if (document.getElementById('treeName').value.length > 0) {
            if (skillsToAdd.length > 0) {
                /*var skillNames = [];
                for (var i = 0; i < skillsToAdd.length; ++i) skillNames.push(skillsToAdd[i].name);*/

                var treeData = {
                    name: document.getElementById('treeName').value,
                    focusArea: document.getElementById('focusarea').value,
                    forApprove: document.getElementById('treeAppr').checked,
                    skills: skillsToAdd
                };

                request('POST', '/set/newtree', treeData, function () {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.response.success) window.open("/user/", "_self");
                        else if (this.response.message == "treeexists") alert("There is already a tree with this name");
                    }
                });
            } else alert("Please add at least one skill to the tree");
        } else alert("Please provide a name to the tree");
    };
}

// deletes a row from a table
function deleteRow(table, row) {
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementById(table).deleteRow(i);
}

// adds a row to a table
function addRow(table) {
  var x = document.getElementById(table);
  var new_row = x.rows[1].cloneNode(true);
  var len = x.rows.length;
  if (table == 'pointsTable') new_row.cells[0].innerText = len;

  var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
  inp1.id += len;
  inp1.value = '';
  x.appendChild(new_row);
}

/*
*   TREE CREATOR END
*/

/*
*   Approve menu for admins
*/

// adds trees to approve.
function approveTrees() {
    document.getElementById('creator').style.display = "none";
    document.getElementById('approveSkills').style.display = "none";

    var canvas = document.getElementById("pixiCanvas");
    canvas.style.display = "none";

    var approveTrees = document.getElementById("approveTrees");
    approveTrees.style.display = "block";

    for (var i = 0; i < data.apprTrees.length; ++i) {
        var text = data.apprTrees[i].name + " (" + data.apprTrees[i].username + ")";
        var option = document.createElement('option');
        option.value = option.text = text;
        document.getElementById('apprTreeSel').add(option);
    }
}

// adds skills to approve
function approveSkills() {
    document.getElementById('creator').style.display = "none";
    document.getElementById('approveTrees').style.display = "none";

    var canvas = document.getElementById("pixiCanvas");
    canvas.style.display = "none";

    var approveSkills = document.getElementById("approveSkills");
    //approveSkills.style.display = "grid";


    for (var i = 0; i < data.apprSkills.length; ++i) {
        var text = data.apprSkills[i].name + " (" + data.apprSkills[i].username + ")";
        var option = document.createElement('option');
        option.value = option.text = text;
        document.getElementById('apprSkillSel').add(option);
    }
}

// drops all offers from all users (used for dev)
function dropoffers() {
    request('POST', '/set/dropoffers', {} , function () {
        if (this.readyState == 4 && this.status == 200) {
            window.open("/user/", "_self");
        }
    });

}

/*
*   Approve menu for admins end
*/

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

function request (type, url, sendData, callback) {
    var req = new XMLHttpRequest();
    req.open(type, url, true);
    req.setRequestHeader('Content-type', 'application/json');
    req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
    req.responseType = "json";
    req.onreadystatechange = callback;
    req.send(JSON.stringify(sendData));
}
