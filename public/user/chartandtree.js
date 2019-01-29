var data = undefined;
var change = false;

// creates the pixi app
var app = new PIXI.Application({
        view: pixiCanvas,
        width: window.innerWidth,
        height: window.innerHeight - 60,
        //backgroundColor: 0x000000,
        transparent: true,
        antialias: true,
        autoStart: false,
        autoResize: true
});

var tokenPayload = parseJwt(localStorage.getItem("loginToken"));
var selectedTreeName;
var tree = undefined;

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;

document.getElementById("openchart").onclick = showChart;
var chartContainer = new PIXI.Container();

/*function toggleSkillDetailsPage() {
    var modal = document.getElementById('skillpage');

    modal.style.display = "block";

}*/

// searches skills by provided name
function searchUserSkillsByName(element){
    var skillToSearch = {value: element.value};
    var skillSearchResult = document.getElementById('skillSearchResult');
    request('POST', '/protected/searchUserSkillsByName', skillToSearch, function () {
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

// adds a public tree to the user
function addTreeToUser(treeToAdd){
  request('POST', '/protected/addTreeToUser', treeToAdd, function() {
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

function closeModal(modal){
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

// confirm the changes made to skill levels.
function submit() {
    var submitData = [];
    for (var i = 0; i < data.skills.length; ++i) {
        var temp = {
            name: data.skills[i].name,
            achievedPoint: data.skills[i].achievedPoint
        };

        submitData.push(temp);
    }

    request('POST', '/protected/submitall', submitData, function() {
        if(this.readyState == 4 && this.status == 200) {
          initCard();
        }
    });
}

window.setInterval(function () {
    if (change) {
        submit();
        change = false;
        document.getElementById('submitBtn').innerText = "Saved";
        document.getElementById('submitBtn').removeAttribute('href');
    }
}, 10000);

// logout.
function logout(){
    localStorage.setItem("loginToken", "");
    window.open("/", "_self");
}

window.onresize = function () {
    app.renderer.resize(window.innerWidth, window.innerHeight - 60);

    if (chartContainer != undefined) {
        var ratio = chartContainer.width / chartContainer.height;
        if (window.innerWidth < window.innerHeight - 90) {
            chartContainer.width = window.innerWidth - 40;
            chartContainer.height = (window.innerWidth - 40) / ratio;
        } else {
            chartContainer.width = (window.innerHeight - 90) * ratio;
            chartContainer.height = window.innerHeight - 90;
        }

        chartContainer.position.set((window.innerWidth) / 2, (window.innerHeight - 64) / 2);
    }

    if (tree != undefined) {
        tree.treeContainer.position.set(app.renderer.width / 2 + tree.treeContainer.width / 2, app.renderer.height / 2);
    }

    app.renderer.render(app.stage);
};

// TREE

// app.localLoader is a loader for skillicons (when a tree is opened, we load only that tree's skillicons)
// PIXI.loader is global, it loads the back button, skillborder, tree,...

function addTraining () {
    document.getElementById('addTrainingForm').reset();

    var modal = document.getElementById("addTrainingModal");
    modal.style.display = "block";

    var span = document.getElementById("closeTrainingModal");

    span.onclick = function() {
        modal.style.display = "none";
    }

    closeModal(modal);

    var save = document.getElementById("saveTrainingsBtn");
    save.onclick = function () {
        var trainingsTable = document.getElementById('addTrainingsTable');
        var trainings = [];
        for (i = 1; i < trainingsTable.rows.length; ++i) {
            trainings.push({
                name: trainingsTable.rows[i].cells[0].children[0].value,
                level: trainingsTable.rows[i].cells[1].children[0].value,
                shortDescription: trainingsTable.rows[i].cells[2].children[0].value,
                URL: trainingsTable.rows[i].cells[3].children[0].value,
                goal: trainingsTable.rows[i].cells[4].children[0].value,
                length: trainingsTable.rows[i].cells[5].children[0].value,
                language: trainingsTable.rows[i].cells[6].children[0].value
            });
        }

        var trainingData = {
            skillName: document.getElementById('trainingSkillName').value,
            trainings: trainings
        };

        request('POST', '/protected/newtraining', trainingData, function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response.success) {
                //reset table
                var trainingsTable = document.getElementById('addTrainingsTable');
                var i=trainingsTable.rows.length-1;
                while(i>1)
                {
                    trainingsTable.deleteRow(i);
                    i--;
                }
                trainingsTable.rows[1].cells[0].children[0].value = "";
                trainingsTable.rows[1].cells[1].children[0].value = "";
                trainingsTable.rows[1].cells[2].children[0].value = "";
                trainingsTable.rows[1].cells[3].children[0].value = "";
                trainingsTable.rows[1].cells[4].children[0].value = "";
                trainingsTable.rows[1].cells[5].children[0].value = "";
                trainingsTable.rows[1].cells[6].children[0].value = "";

                alert("Succes");

            } /*else if (this.response.message == "skillnotexists") {
                    alert("Skill not found");
                }*/
            }
        });
    };
}

// opens skill creation modal and saves the new skill to the database (user and for approval)
function createSkill () {
    //$('#newSkillForm').reset();
    document.getElementById('newSkillForm').reset();

    var modal = document.getElementById("newSkillModal");
    modal.style.display = "block";

    var span = document.getElementById("closeSkillModal");

    span.onclick = function() {
        modal.style.display = "none";
    }

    closeModal(modal);

    document.getElementById("loadSkill").style.display = "none";
    document.getElementById("childrenDiv").style.display = "none";

    var catSelect = document.getElementById("newSkillCat");
    catSelect.innerHTML = "";
    for (var i = 0; i < data.categories.length; ++i) {
        var option = document.createElement("option");
        option.text = data.categories[i].name;
        option.value = data.categories[i].name;
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
                shortDescription: trainingsTable.rows[i].cells[2].children[0].value,
                URL: trainingsTable.rows[i].cells[3].children[0].value,
                goal: trainingsTable.rows[i].cells[4].children[0].value,
                length: trainingsTable.rows[i].cells[5].children[0].value,
                language: trainingsTable.rows[i].cells[6].children[0].value
            });
        }

        var skillData = {
            name: document.getElementById('newSkillName').value,
            description: document.getElementById('newSkillDesc').value,
            descriptionWikipediaURL: document.getElementById('newSkillWiki').value,
            skillIcon: document.getElementById('newSkillIcon').value,
            categoryName: catSelect.value,
            maxPoint: pointsNum,
            pointDescription: pointDescription,
            parents: parents,
            //children: children,
            trainings: trainings
        };

        request('POST', '/protected/newskill', skillData, function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response.success) {
                    modal.style.display = "none";
                }
            }
        });
    };
}

// opens skill editor, user can edit (only) her/his own skills
function editMySkill () {
    document.getElementById('newSkillForm').reset();

    var modal = document.getElementById("newSkillModal");
    modal.style.display = "block";

    var span = document.getElementById("closeSkillModal");

    span.onclick = function() {
        modal.style.display = "none";
    }

    document.getElementById("loadSkill").style.display = "block";
    document.getElementById("newSkillModalTitle").innerText = "Edit your skill";
    document.getElementById("childrenDiv").style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("newSkillModalTitle").innerText = "Create your own skill";
        }
    }

    var catSelect = document.getElementById("newSkillCat");
    catSelect.innerHTML = "";
    for (var i = 0; i < data.categories.length; ++i) {
        var option = document.createElement("option");
        option.text = option.value = data.categories[i].name;
        catSelect.add(option);
    }

    var skillName = document.getElementById("newSkillName");
    skillName.setAttribute('list', 'skillSearchResult');
    skillName.onkeyup = function() {searchSkillsByName(this, false)};

    var loadSkill = document.getElementById("loadSkill");
    loadSkill.onclick = function(){
        //request for the skill to load data from
        skillName = document.getElementById('newSkillName').value;

        if (data.skills.find(obj => obj.name == skillName) !== undefined) {
            var skill = data.skills.find(obj => obj.name == skillName);

            loadSkillToEditor(skill, false);
        }
    }

    //get the save skill button, write the onclick function
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

        var childrenTable = document.getElementById('childrenTable');
        var children = [];
        for (i = 1; i < childrenTable.rows.length; ++i) {
            children.push({
                name: childrenTable.rows[i].cells[0].children[0].value,
                minPoint: childrenTable.rows[i].cells[1].children[0].value,
                recommended: !childrenTable.rows[i].cells[2].children[0].checked
            });
        }

        var trainingsTable = document.getElementById('trainingsTable');
        var trainings = [];
        for (i = 1; i < trainingsTable.rows.length; ++i) {
            trainings.push({
                name: trainingsTable.rows[i].cells[0].children[0].value,
                level: trainingsTable.rows[i].cells[1].children[0].value,
                shortDescription: trainingsTable.rows[i].cells[2].children[0].value,
                URL: trainingsTable.rows[i].cells[3].children[0].value,
                goal: trainingsTable.rows[i].cells[4].children[0].value,
                length: trainingsTable.rows[i].cells[5].children[0].value,
                language: trainingsTable.rows[i].cells[6].children[0].value
            });
        }

        var skillData = {
            name: document.getElementById('newSkillName').value,
            description: document.getElementById('newSkillDesc').value,
            skillIcon: document.getElementById('newSkillIcon').value,
            descriptionWikipediaURL: document.getElementById('newSkillWiki').value,
            categoryName: catSelect.value,
            maxPoint: pointsNum,
            pointDescription: pointDescription,
            parents: parents,
            children: children,
            trainings: trainings
        };

        request('POST', '/protected/editmyskill', skillData, function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response.success) {
                    modal.style.display = "none";
                    window.open("/user/", "_self");
                }
            }
        });
    };
}

// opens skill editor, user can edit (only) her/his own skills
function editSkill () {
    document.getElementById('newSkillForm').reset();

    var modal = document.getElementById("newSkillModal");
    modal.style.display = "block";

    var span = document.getElementById("closeSkillModal");

    span.onclick = function() {
        modal.style.display = "none";
    }

    document.getElementById("loadSkill").style.display = "block";
    document.getElementById("newSkillModalTitle").innerText = "Edit skill";
    document.getElementById("childrenDiv").style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("newSkillModalTitle").innerText = "Create your own skill";
        }
    }

    var catSelect = document.getElementById("newSkillCat");
    catSelect.innerHTML = "";
    for (var i = 0; i < data.categories.length; ++i) {
        var option = document.createElement("option");
        option.text = option.value = data.categories[i].name;
        catSelect.add(option);
    }

    var skillName = document.getElementById("newSkillName");
    skillName.setAttribute('list', 'skillSearchResult');
    skillName.onkeyup = function() {searchSkillsByName(this, true)};

    var loadSkill = document.getElementById("loadSkill");
    loadSkill.onclick = function(){
        //request for the skill to load data from
        request('POST', '/protected/getskill', {value: document.getElementById("newSkillName").value}, function() {
            if(this.readyState == 4 && this.status == 200) {
                skillSearchResult.innerHTML = "";

                loadSkillToEditor(this.response.skill, true);
            }
        });
    }

    //get the save skill button, write the onclick function
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

        var childrenTable = document.getElementById('childrenTable');
        var children = [];
        for (i = 1; i < childrenTable.rows.length; ++i) {
            children.push({
                name: childrenTable.rows[i].cells[0].children[0].value,
                minPoint: childrenTable.rows[i].cells[1].children[0].value,
                recommended: !childrenTable.rows[i].cells[2].children[0].checked
            });
        }

        var trainingsTable = document.getElementById('trainingsTable');
        var trainings = [];
        for (i = 1; i < trainingsTable.rows.length; ++i) {
            trainings.push({
                name: trainingsTable.rows[i].cells[0].children[0].value,
                level: trainingsTable.rows[i].cells[1].children[0].value,
                shortDescription: trainingsTable.rows[i].cells[2].children[0].value,
                URL: trainingsTable.rows[i].cells[3].children[0].value,
                goal: trainingsTable.rows[i].cells[4].children[0].value,
                length: trainingsTable.rows[i].cells[5].children[0].value,
                language: trainingsTable.rows[i].cells[6].children[0].value
            });
        }

        var skillData = {
            name: document.getElementById('newSkillName').value,
            description: document.getElementById('newSkillDesc').value,
            skillIcon: document.getElementById('newSkillIcon').value,
            descriptionWikipediaURL: document.getElementById('newSkillWiki').value,
            categoryName: catSelect.value,
            maxPoint: pointsNum,
            pointDescription: pointDescription,
            parents: parents,
            children: children,
            trainings: trainings
        };

        request('POST', '/admin/editskill', skillData, function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response.success) {
                    modal.style.display = "none";
                    window.open("/user/", "_self");
                }
            }
        });
    };
}

function loadSkillToEditor (skill, global) {
    document.getElementById('newSkillName').value = skill.name;
    document.getElementById('newSkillDesc').value = skill.description;
    document.getElementById('newSkillIcon').value = skill.skillIcon;
    document.getElementById('newSkillWiki').value = skill.descriptionWikipediaURL;
    document.getElementById("newSkillCat").value = skill.categoryName;

    var pointsTable = document.getElementById('pointsTable');

    for (var i = pointsTable.rows.length - 1; i > 1; --i) pointsTable.deleteRow(i);

    pointsTable.rows[1].cells[1].children[0].value = "";

    for (var i = 0; i < skill.pointDescription.length; ++i) {
        if (i < skill.pointDescription.length - 1) addRow("pointsTable");

        pointsTable.rows[i + 1].cells[1].children[0].value = skill.pointDescription[i];
    }


    //Dropping data from parentsTable
    var parentsTable = document.getElementById('parentsTable');
    var i = parentsTable.rows.length - 1;
    while (i > 1) {
        parentsTable.deleteRow(i);
        --i;
    }
    parentsTable.rows[1].cells[0].children[0].value = "";
    parentsTable.rows[1].cells[1].children[0].value = "";
    parentsTable.rows[1].cells[2].children[0].checked = false;

    for (var i = 0; i < skill.parents.length; ++i) {
        if (i < skill.parents.length - 1) addRow("parentsTable");

        var parent = undefined;
        if (global) {
            var req = new XMLHttpRequest();
            req.open('POST', '/protected/getskill', false);
            req.setRequestHeader('Content-type', 'application/json');
            req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
            //req.responseType = "json";
            req.send(JSON.stringify({value: skill.parents[i]}));

            if (req.readyState == 4 && req.status == 200) {
                var response = JSON.parse(req.response);
                parent = response.skill;
            }
        } else {
            parent = data.skills.find(obj => obj.name == skill.parents[i]);
        }

        var skillAtParent = parent.children.find(obj => obj.name == skill.name);
        parentsTable.rows[i + 1].cells[0].children[0].value = parent.name;
        parentsTable.rows[i + 1].cells[1].children[0].value = skillAtParent.minPoint;
        parentsTable.rows[i + 1].cells[2].children[0].checked = !skillAtParent.recommended;
    }

    var childrenTable = document.getElementById('childrenTable');
    var i = childrenTable.rows.length - 1;
    while(i > 1) {
        childrenTable.deleteRow(i);
        --i;
    }
    childrenTable.rows[1].cells[0].children[0].value = "";
    childrenTable.rows[1].cells[1].children[0].value = "";
    childrenTable.rows[1].cells[2].children[0].checked = false;

    for (var i = 0; i < skill.children.length; ++i) {
        if (i < skill.children.length - 1) addRow("childrenTable");

        childrenTable.rows[i + 1].cells[0].children[0].value = skill.children[i].name;
        childrenTable.rows[i + 1].cells[1].children[0].value = skill.children[i].minPoint;
        childrenTable.rows[i + 1].cells[2].children[0].checked = !skill.children[i].recommended;
    }

    //Dropping data from trainingsTable
    var trainingsTable = document.getElementById('trainingsTable');
    var i = trainingsTable.rows.length - 1;

    while (i > 1) {
        trainingsTable.deleteRow(i);
        --i;
    }
    for (var j = 0; j < 7; j++) {
      trainingsTable.rows[1].cells[j].children[0].value = "";
    }


    for (var i = 0; i < skill.trainings.length; ++i) {
        if (i < skill.trainings.length - 1) addRow("trainingsTable");

        trainingsTable.rows[i + 1].cells[0].children[0].value = skill.trainings[i].name;
        trainingsTable.rows[i + 1].cells[1].children[0].value = skill.trainings[i].level;
        trainingsTable.rows[i + 1].cells[2].children[0].value = skill.trainings[i].shortDescription;
        trainingsTable.rows[i + 1].cells[3].children[0].value = skill.trainings[i].URL;
        trainingsTable.rows[i + 1].cells[4].children[0].value = skill.trainings[i].goal;
        trainingsTable.rows[i + 1].cells[5].children[0].value = skill.trainings[i].length;
        trainingsTable.rows[i + 1].cells[6].children[0].value = skill.trainings[i].language;
    }
}

var skillsToAdd = [];

// opens tree creator and manages it, saving for the user and for approval
function createTree () {
    $('.clear').find('input:text').val('');
    $('.clear').find('textarea').val('');
    var skillList = document.getElementById("skillList");
    skillList.innerHTML = "";
    hideMenus();

    var treeName = document.getElementById("treeName");
    treeName.setAttribute('list', '');
    treeName.onkeyup = undefined;

    var creator = document.getElementById("creator");
    creator.style.display = "grid";

    var loadTree = document.getElementById("loadTree");
    loadTree.style.display = "none";

    var canvas = document.getElementById("pixiCanvas");

    creator.style.width = canvas.style.width;
    creator.style.height = canvas.style.height;

    var addBtn = document.getElementById("addToTree");
    var skillList = document.getElementById("skillList");
    skillsToAdd = [];
    addBtn.onclick = addSkillToList;

    var createSkillBtn = document.getElementById("createSkill");
    createSkillBtn.onclick = createSkill;

    var deleteBtn = document.getElementById("deleteFromList");
    deleteBtn.onclick = deleteSkillFromList;

    var createBtn = document.getElementById("createTree");
    createBtn.onclick = function () {
        if (document.getElementById('treeName').value.length > 0) {
            if (skillsToAdd.length > 0) {
                /*var skillNames = [];
                for (var i = 0; i < skillsToAdd.length; ++i) skillNames.push(skillsToAdd[i].name);*/

                var treeData = {
                    name: document.getElementById('treeName').value,
                    focusArea: document.getElementById('focusarea').value,
                    description: document.getElementById('treeDesc').value,
                    skills: skillsToAdd
                };

                request('POST', '/protected/newtree', treeData, function () {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.response.success) window.open("/user/", "_self");
                        else if (this.response.message == "treeexists") alert("There is already a tree with this name");
                    }
                });
            } else showBottomAlert("Please add at least one skill to the tree");
        } else showBottomAlert("Please provide a name to the tree");
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

// opens tree creator, user can edit her/his own trees
function editMyTree () {
    $('.clear').find('input:text').val('');
    $('.clear').find('textarea').val('');
    var skillList = document.getElementById("skillList");
    skillList.innerHTML = "";
    hideMenus();

    var treeName = document.getElementById("treeName");
    treeName.setAttribute('list', 'TreeSearchResult');
    treeName.onkeyup = function() {searchTreesByName(treeName, false)};

    var loadTree = document.getElementById("loadTree");
    loadTree.style.display = "block";

    var creator = document.getElementById("creator");
    creator.style.display = "grid";

    var canvas = document.getElementById("pixiCanvas");

    creator.style.width = canvas.style.width;
    creator.style.height = canvas.style.height;

    skillsToAdd = [];
    loadTree.onclick = function () {
        var tree = data.trees.find(obj => obj.name == document.getElementById("treeName").value);

        if (tree == undefined) alert("Tree is not found");
        else {
            document.getElementById("focusarea").value = tree.focusArea;
            document.getElementById("treeDesc").value = tree.description;
            for (var i = 0; i < tree.skillNames.length; ++i) {
                skillsToAdd.push(data.skills.find(obj => obj.name == tree.skillNames[i]));
                var option = document.createElement("option");
                option.text = tree.skillNames[i];
                skillList.add(option);
            }

            if (skillList.length > 1) skillList.size = skillList.length;
            else skillList.size = 2;
        }
    };

    var addBtn = document.getElementById("addToTree");
    addBtn.onclick = addSkillToList;

    var createSkillBtn = document.getElementById("createSkill");
    createSkillBtn.onclick = createSkill;

    var deleteBtn = document.getElementById("deleteFromList");
    deleteBtn.onclick = deleteSkillFromList;

    var createBtn = document.getElementById("createTree");
    createBtn.onclick = function () {
        if (document.getElementById('treeName').value.length > 0) {
            if (skillsToAdd.length > 0) {
                for (var i = 0; i < skillsToAdd.length; ++i) {
                    delete skillsToAdd[i].itemcontainer;
                }

                var treeData = {
                    name: document.getElementById('treeName').value,
                    focusArea: document.getElementById('focusarea').value,
                    description: document.getElementById('treeDesc').value,
                    skills: skillsToAdd
                };

                request('POST', '/protected/editmytree', treeData, function () {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.response.success) window.open("/user/", "_self");
                    }
                });
            } else alert("Please add at least one skill to the tree");
        } else alert("Please provide a name to the tree");
    };
}

// admins can edit any tree, it will be changed for every user
function editTree () {
    $('.clear').find('input:text').val('');
    $('.clear').find('textarea').val('');
    hideMenus();

    var treeName = document.getElementById("treeName");
    treeName.setAttribute('list', 'TreeSearchResult');
    treeName.onkeyup = function() {searchTreesByName(treeName, true)};

    var loadTree = document.getElementById("loadTree");
    loadTree.style.display = "block";

    var creator = document.getElementById("creator");
    creator.style.display = "grid";

    var canvas = document.getElementById("pixiCanvas");

    creator.style.width = canvas.style.width;
    creator.style.height = canvas.style.height;

    var skillList = document.getElementById("skillList");
    skillsToAdd = [];
    loadTree.onclick = function () {
        skillsToAdd = [];
        skillList.innerHTML = "";

        request('POST', '/protected/gettree', {name: document.getElementById("treeName").value}, function() {
            if(this.readyState == 4 && this.status == 200) {
                TreeSearchResult.innerHTML = "";
                document.getElementById("focusarea").value = this.response.focusArea;
                document.getElementById("treeDesc").value = this.response.description;
                for (var i = 0; i < this.response.skillNames.length; ++i) {
                    var req = new XMLHttpRequest();
                    req.open('POST', '/protected/getskill', false);
                    req.setRequestHeader('Content-type', 'application/json');
                    req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
                    //req.responseType = "json";
                    req.send(JSON.stringify({value: this.response.skillNames[i]}));

                    if (req.readyState == 4 && req.status == 200) {
                        var response = JSON.parse(req.response);

                        skillsToAdd.push(response.skill);
                        var option = document.createElement("option");
                        option.text = this.response.skillNames[i];
                        skillList.add(option);
                    }
                }

                if (skillList.length > 1) skillList.size = skillList.length;
                else skillList.size = 2;
            }
        });
    };

    var addBtn = document.getElementById("addToTree");
    addBtn.onclick = addSkillToList;

    var createSkillBtn = document.getElementById("createSkill");
    createSkillBtn.onclick = createSkill;

    var deleteBtn = document.getElementById("deleteFromList");
    deleteBtn.onclick = deleteSkillFromList;

    var createBtn = document.getElementById("createTree");
    createBtn.onclick = function () {
        if (document.getElementById('treeName').value.length > 0) {
            if (skillsToAdd.length > 0) {
                for (var i = 0; i < skillsToAdd.length; ++i) {
                    delete skillsToAdd[i].itemcontainer;
                }

                var treeData = {
                    name: document.getElementById('treeName').value,
                    focusArea: document.getElementById('focusarea').value,
                    description: document.getElementById('treeDesc').value,
                    skills: skillsToAdd
                };

                request('POST', '/admin/edittree', treeData, function () {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.response.success) window.open("/user/", "_self");
                    }
                });
            } else alert("Please add at least one skill to the tree");
        } else alert("Please provide a name to the tree");
    };
}

function addSkillToList () {
    var skill = {value: document.getElementById('skillSearchTree').value};
    var skillList = document.getElementById("skillList");

    request('POST', '/protected/getskill', skill, function() {
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

                    if (skillList.length > 1) skillList.size = skillList.length;
                    else skillList.size = 2;
                } else alert("You have already added this skill");
            } else alert("Skill is not found");
        }
    });
}

function deleteSkillFromList () {
    var skillList = document.getElementById("skillList");
    var children = [];
    getChildren(skillsToAdd, skillsToAdd.find(obj => obj.name == skillList.options[skillList.selectedIndex].text), children);

    if (children.length == 0) {
        skillsToAdd = skillsToAdd.filter(obj => obj.name != skillList.options[skillList.selectedIndex].text);
        skillList.remove(skillList.selectedIndex);
    } else {
        var text = "The following skills depend on the selected. Do you want to delete them?\n";
        for (var i = 0; i < children.length; ++i) {
            text += children[i].name + "\n";
        }
        if (confirm(text)) {
            skillsToAdd = skillsToAdd.filter(obj => obj.name != skillList.options[skillList.selectedIndex].text);
            skillList.remove(skillList.selectedIndex);
            for (var i = 0; i < children.length; ++i) {
                skillsToAdd = skillsToAdd.filter(obj => obj.name != children[i].name);
                for (var j = 0; j < skillList.options.length; ++j) {
                    if (skillList.options[j].text == children[i].name) skillList.remove(j);
                }
            }
        }
    }

    if (skillList.length > 1) skillList.size = skillList.length;
    else skillList.size = 2;
}

function getChildren (skills, skill, children) {
	var temp = [];
	for (var i = 0; skill.children != undefined && i < skill.children.length; ++i) {
        var child = skills.find(obj => obj.name == skill.children[i].name);

        if (child != undefined) {
            temp.push(child);
            children.push(child);
        }
	}

	for (var i = 0; i < temp.length; ++i) {
        if (skills.find(obj => obj.name == temp[i].name) != undefined) getChildren(skills, temp[i], children);
	}
}

function delTree(element, event) {
    event.stopPropagation;
    console.log(element.parentElement.text);
}

// make trees globally available
function approveTrees() {
    hideMenus();

    var approveTrees = document.getElementById("approveTrees");
    approveTrees.style.display = "block";

    var btn = document.getElementById('approveTreesBtn');
    var select = document.getElementById('apprTreeSel');

    for (var i = 0; i < data.apprTrees.length; ++i) {
        var text = data.apprTrees[i].name + " (" + data.apprTrees[i].username + ")";
        var option = document.createElement('option');
        option.value = "ss";
        /*option.value = */option.text = text;
        option.name = data.apprTrees[i].name;
        option.username = data.apprTrees[i].username;
        select.add(option);
    }

    btn.onclick = function () {
        var selectedTraining = select.options[select.selectedIndex]
        request('POST', '/admin/approvetree', {
            name: selectedTraining.name,
            username: selectedTraining.username
        }, function () {
            if (this.readyState == 4 && this.status == 200) {
                window.open("/user/", "_self");
            }
        });
    };
}

// make skills globally available
function approveSkills() {
    hideMenus();

    var approveSkills = document.getElementById("approveSkills");

    approveSkills.style.display = "block";

    var approveSkillsSelect = document.getElementById('apprSkillSel');
    var skillsforapproval = undefined;

    request('GET', '/protected/skillsforapproval', undefined, function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response !== undefined) {
                approveSkillsSelect.innerHTML = "";

                skillsforapproval = this.response;
                for (var i = 0; i < skillsforapproval.length; i++) {
                    var text = skillsforapproval[i].name + " (" + skillsforapproval[i].username + ")";
                    var option = document.createElement('option');
                    option.value = skillsforapproval[i];
                    option.text = text;
                    approveSkillsSelect.add(option);
                }

            }
        }
    });

    var approveButton = document.getElementById("approvebtn");
    approveButton.onclick = function() {
        var selectedSkill = approveSkillsSelect.options[approveSkillsSelect.selectedIndex].text;

        var skillforapproval = skillsforapproval.find(obj => obj.name == selectedSkill);

        request('POST', '/admin/approveskill', skillforapproval, function(){
            if(this.readyState == 4 && this.status == 200){
                if(this.response !== undefined){
                    alert(this.response.message);
                }
            }

        });
    }
/*
    for (var i = 0; i < data.apprSkills.length; ++i) {
        var text = data.apprSkills[i].name + " (" + data.apprSkills[i].username + ")";
        var option = document.createElement('option');
        option.value = option.text = text;
        document.getElementById('apprSkillSel').add(option);
    }
*/
   //Making the approve page visible

}

// makes trainings for skills globally available
function approveTrainings () {
    hideMenus();

    var approveTrees = document.getElementById("approveTrainings");
    approveTrees.style.display = "block";

    var select = document.getElementById('apprTrainingSel');
    var btn = document.getElementById('approveTrainingsBtn');

    for (var i = 0; i < data.apprTrainings.length; ++i) {
        var text = data.apprTrainings[i].name + " (" + data.apprTrainings[i].skillName + ", " +  data.apprTrainings[i].username + ")";
        var option = document.createElement('option');
        option.name = data.apprTrainings[i].name;
        option.skillName = data.apprTrainings[i].skillName;
        option.username = data.apprTrainings[i].username;
        option.text = text;
        select.add(option);
    }

    btn.onclick = function () {
        var selectedTraining = select.options[select.selectedIndex]
        request('POST', '/admin/approvetraining', {
            name: selectedTraining.name,
            skillName: selectedTraining.skillName,
            username: selectedTraining.username
        }, function () {
            if (this.readyState == 4 && this.status == 200) {
                window.open("/user/", "_self");
            }
        });
    };
}

function addCheckBox(id, boxText, parent){
  var divToAdd = document.createElement('div');
  divToAdd.className = "advSearchDetailsItem";
  var spanToAdd = document.createElement('span');
  var boxToAdd = document.createElement('input');
  boxToAdd.type = "checkbox";
  boxToAdd.id = id;
  spanToAdd.appendChild(boxToAdd);
  spanToAdd.innerHTML += boxText;
  divToAdd.appendChild(spanToAdd);
  document.getElementById(parent).appendChild(divToAdd);
}

// drops all offers from all users (used for dev)
function dropoffers() {
    request('POST', '/admin/dropoffers', {} , function () {
        if (this.readyState == 4 && this.status == 200) {
            window.open("/user/", "_self");
        }
    });
}

// hides skill, tree creator, editor menu
function hideMenus () {
    document.getElementById('submitBtn').style.display = "none";

    var elements = document.getElementsByClassName("hide");

    for (var i = 0; i < elements.length; ++i) {
        elements[i].style.display = "none";
    }
}

function hideCardsAndAlerts (event) {
    if (!event.target.matches("#userCard, .float-right *")) $(".hide-on-click").collapse("hide");
    if (!event.target.matches("#createTree")) $(".alert").hide();
}

document.body.addEventListener('click', hideCardsAndAlerts);

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

function showBottomAlert(msg) {
	document.getElementById('bottomAlertMsg').innerText = msg;
	$('#bottomAlert').show();
}

function request (type, url, sendData, callback) {
    var req = new XMLHttpRequest();
    req.open(type, url, true);
    req.setRequestHeader('Content-type', 'application/json');
    req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
    req.responseType = "json";
    req.onreadystatechange = callback;

    if (sendData !== undefined)
        req.send(JSON.stringify(sendData));
    else
        req.send();
}
