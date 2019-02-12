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

// searches skills by provided name
function searchUserSkillsByName(element){
    let skillToSearch = {value: element.value};
    let skillSearchResult = document.getElementById('skillSearchResult');
    request('POST', '/protected/searchUserSkillsByName', skillToSearch, function () {
        if (this.readyState == 4 && this.status == 200) {
            skillSearchResult.innerText = "";
            for (var i = 0; i < this.response.length; i++) {
                let mya = document.createElement('option');
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
          let forest = document.getElementById("treeList");
          let nt = document.createElement('div');
          nt.innerText = this.response.name;
          nt.className = "listedTree";
          forest.appendChild(nt);
          showBottomAlert('success', "Selected tree successfully added");
          initData();
          loadAddedTrees();
      } else if (this.response.message == "existing") showBottomAlert('warning', "Selected tree is already added");
        else if (this.response.message == "notfound") showBottomAlert('danger', "The tree is not found");
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
    let submitData = [];
    for (var i = 0; i < data.skills.length; ++i) {
        let temp = {
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
        let ratio = chartContainer.width / chartContainer.height;
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

    let modal = document.getElementById("addTrainingModal");
    modal.style.display = "block";

    let span = document.getElementById("closeTrainingModal");

    span.onclick = function() {
        modal.style.display = "none";
    }

    closeModal(modal);

    let save = document.getElementById("saveTrainingsBtn");
    save.onclick = function () {
        let trainingsTable = document.getElementById('addTrainingsTable');
        let trainings = [];
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

        let trainingData = {
            skillName: document.getElementById('trainingSkillName').value,
            trainings: trainings
        };

        request('POST', '/protected/newtraining', trainingData, function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response.success) {
                //reset table
                let trainingsTable = document.getElementById('addTrainingsTable');
                let i=trainingsTable.rows.length-1;
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

    let modal = document.getElementById("newSkillModal");
    modal.style.display = "block";

    let span = document.getElementById("closeSkillModal");

    span.onclick = function() {
        modal.style.display = "none";
    }

    closeModal(modal);

    document.getElementById("loadSkill").style.display = "none";
    document.getElementById("childrenDiv").style.display = "none";

    let catSelect = document.getElementById("newSkillCat");
    catSelect.innerHTML = "";
    for (var i = 0; i < data.categories.length; ++i) {
        let option = document.createElement("option");
        option.text = data.categories[i].name;
        option.value = data.categories[i].name;
        catSelect.add(option);
    }

    let save = document.getElementById("saveSkillBtn");
    save.onclick = function () {
        let pointsTable = document.getElementById('pointsTable');
        let pointsNum = pointsTable.rows.length - 1;
        let pointDescription = [];
        for (i = 1; i < pointsNum + 1; ++i) pointDescription.push(pointsTable.rows[i].cells[1].children[0].value);

        let parentsTable = document.getElementById('parentsTable');
        let parents = [];
        for (i = 1; i < parentsTable.rows.length; ++i) {
            parents.push({
                name: parentsTable.rows[i].cells[0].children[0].value,
                minPoint: parentsTable.rows[i].cells[1].children[0].value,
                recommended: !parentsTable.rows[i].cells[2].children[0].checked
            });
        }

        /*var childrenTable = document.getElementById('childrenTable');
        let children = [];
        for (i = 1; i < childrenTable.rows.length; ++i) {
            children.push({
                name: childrenTable.rows[i].cells[0].children[0].value,
                minPoint: childrenTable.rows[i].cells[1].children[0].value,
                recommended: !childrenTable.rows[i].cells[2].children[0].checked
            });
        }*/

        let trainingsTable = document.getElementById('trainingsTable');
        let trainings = [];
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

        let skillData = {
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

    let modal = document.getElementById("newSkillModal");
    modal.style.display = "block";

    let span = document.getElementById("closeSkillModal");

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

    let catSelect = document.getElementById("newSkillCat");
    catSelect.innerHTML = "";
    for (var i = 0; i < data.categories.length; ++i) {
        let option = document.createElement("option");
        option.text = option.value = data.categories[i].name;
        catSelect.add(option);
    }

    let skillName = document.getElementById("newSkillName");
    skillName.setAttribute('list', 'skillSearchResult');
    skillName.onkeyup = function() {searchSkillsByName(this, false)};

    let loadSkill = document.getElementById("loadSkill");
    loadSkill.onclick = function(){
        //request for the skill to load data from
        skillName = document.getElementById('newSkillName').value;

        if (data.skills.find(obj => obj.name == skillName) !== undefined) {
            let skill = data.skills.find(obj => obj.name == skillName);

            loadSkillToEditor(skill, false);
        }
    }

    //get the save skill button, write the onclick function
    let save = document.getElementById("saveSkillBtn");
    save.onclick = function () {
        let pointsTable = document.getElementById('pointsTable');
        let pointsNum = pointsTable.rows.length - 1;
        let pointDescription = [];
        for (i = 1; i < pointsNum + 1; ++i) pointDescription.push(pointsTable.rows[i].cells[1].children[0].value);

        let parentsTable = document.getElementById('parentsTable');
        let parents = [];
        for (i = 1; i < parentsTable.rows.length; ++i) {
            parents.push({
                name: parentsTable.rows[i].cells[0].children[0].value,
                minPoint: parentsTable.rows[i].cells[1].children[0].value,
                recommended: !parentsTable.rows[i].cells[2].children[0].checked
            });
        }

        let childrenTable = document.getElementById('childrenTable');
        let children = [];
        for (i = 1; i < childrenTable.rows.length; ++i) {
            children.push({
                name: childrenTable.rows[i].cells[0].children[0].value,
                minPoint: childrenTable.rows[i].cells[1].children[0].value,
                recommended: !childrenTable.rows[i].cells[2].children[0].checked
            });
        }

        let trainingsTable = document.getElementById('trainingsTable');
        let trainings = [];
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

        let skillData = {
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

    let modal = document.getElementById("newSkillModal");
    modal.style.display = "block";

    let span = document.getElementById("closeSkillModal");

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

    let catSelect = document.getElementById("newSkillCat");
    catSelect.innerHTML = "";
    for (var i = 0; i < data.categories.length; ++i) {
        let option = document.createElement("option");
        option.text = option.value = data.categories[i].name;
        catSelect.add(option);
    }

    let skillName = document.getElementById("newSkillName");
    skillName.setAttribute('list', 'skillSearchResult');
    skillName.onkeyup = function() {searchSkillsByName(this, true)};

    let loadSkill = document.getElementById("loadSkill");
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
    let save = document.getElementById("saveSkillBtn");
    save.onclick = function () {
        let pointsTable = document.getElementById('pointsTable');
        let pointsNum = pointsTable.rows.length - 1;
        let pointDescription = [];
        for (i = 1; i < pointsNum + 1; ++i) pointDescription.push(pointsTable.rows[i].cells[1].children[0].value);

        let parentsTable = document.getElementById('parentsTable');
        let parents = [];
        for (i = 1; i < parentsTable.rows.length; ++i) {
            parents.push({
                name: parentsTable.rows[i].cells[0].children[0].value,
                minPoint: parentsTable.rows[i].cells[1].children[0].value,
                recommended: !parentsTable.rows[i].cells[2].children[0].checked
            });
        }

        let childrenTable = document.getElementById('childrenTable');
        let children = [];
        for (i = 1; i < childrenTable.rows.length; ++i) {
            children.push({
                name: childrenTable.rows[i].cells[0].children[0].value,
                minPoint: childrenTable.rows[i].cells[1].children[0].value,
                recommended: !childrenTable.rows[i].cells[2].children[0].checked
            });
        }

        let trainingsTable = document.getElementById('trainingsTable');
        let trainings = [];
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

        let skillData = {
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

    let pointsTable = document.getElementById('pointsTable');

    for (var i = pointsTable.rows.length - 1; i > 1; --i) pointsTable.deleteRow(i);

    pointsTable.rows[1].cells[1].children[0].value = "";

    for (var i = 0; i < skill.pointDescription.length; ++i) {
        if (i < skill.pointDescription.length - 1) addRow("pointsTable");

        pointsTable.rows[i + 1].cells[1].children[0].value = skill.pointDescription[i];
    }


    //Dropping data from parentsTable
    let parentsTable = document.getElementById('parentsTable');
    let i = parentsTable.rows.length - 1;
    while (i > 1) {
        parentsTable.deleteRow(i);
        --i;
    }
    parentsTable.rows[1].cells[0].children[0].value = "";
    parentsTable.rows[1].cells[1].children[0].value = "";
    parentsTable.rows[1].cells[2].children[0].checked = false;

    for (var i = 0; i < skill.parents.length; ++i) {
        if (i < skill.parents.length - 1) addRow("parentsTable");

        let parent = undefined;
        if (global) {
            let req = new XMLHttpRequest();
            req.open('POST', '/protected/getskill', false);
            req.setRequestHeader('Content-type', 'application/json');
            req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
            //req.responseType = "json";
            req.send(JSON.stringify({value: skill.parents[i]}));

            if (req.readyState == 4 && req.status == 200) {
                let response = JSON.parse(req.response);
                parent = response.skill;
            }
        } else {
            parent = data.skills.find(obj => obj.name == skill.parents[i]);
        }

        let skillAtParent = parent.children.find(obj => obj.name == skill.name);
        parentsTable.rows[i + 1].cells[0].children[0].value = parent.name;
        parentsTable.rows[i + 1].cells[1].children[0].value = skillAtParent.minPoint;
        parentsTable.rows[i + 1].cells[2].children[0].checked = !skillAtParent.recommended;
    }

    let childrenTable = document.getElementById('childrenTable');
    let i = childrenTable.rows.length - 1;
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
    let trainingsTable = document.getElementById('trainingsTable');
    let i = trainingsTable.rows.length - 1;

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
    let skillList = document.getElementById("skillList");
    skillList.innerHTML = "";
    hideMenus();

    let treeName = document.getElementById("treeName");
    treeName.setAttribute('list', '');
    treeName.onkeyup = undefined;

    let creator = document.getElementById("creator");
    creator.style.display = "grid";

    let loadTree = document.getElementById("loadTree");
    loadTree.style.display = "none";

    let canvas = document.getElementById("pixiCanvas");

    creator.style.width = canvas.style.width;
    creator.style.height = canvas.style.height;

    let addBtn = document.getElementById("addToTree");
    let skillList = document.getElementById("skillList");
    skillsToAdd = [];
    addBtn.onclick = addSkillToList;

    let createSkillBtn = document.getElementById("createSkill");
    createSkillBtn.onclick = createSkill;

    let deleteBtn = document.getElementById("deleteFromList");
    deleteBtn.onclick = deleteSkillFromList;

    let createBtn = document.getElementById("createTree");
    createBtn.onclick = function () {
        if (document.getElementById('treeName').value.length > 0) {
            if (skillsToAdd.length > 0) {
                /*var skillNames = [];
                for (var i = 0; i < skillsToAdd.length; ++i) skillNames.push(skillsToAdd[i].name);*/

                let treeData = {
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
            } else showBottomAlert("danger", "Please add at least one skill to the tree");
        } else showBottomAlert("danger", "Please provide a name to the tree");
    };
}

// deletes a row from a table
function deleteRow(table, row) {
  let i = row.parentNode.parentNode.rowIndex;
  document.getElementById(table).deleteRow(i);
}

// adds a row to a table
function addRow(table) {
  let x = document.getElementById(table);
  let new_row = x.rows[1].cloneNode(true);
  let len = x.rows.length;
  if (table == 'pointsTable') new_row.cells[0].innerText = len;

  let inp1 = new_row.cells[1].getElementsByTagName('input')[0];
  inp1.id += len;
  inp1.value = '';
  x.appendChild(new_row);
}

// opens tree creator, user can edit her/his own trees
function editMyTree () {
    $('.clear').find('input:text').val('');
    $('.clear').find('textarea').val('');
    let skillList = document.getElementById("skillList");
    skillList.innerHTML = "";
    hideMenus();

    let treeName = document.getElementById("treeName");
    treeName.setAttribute('list', 'TreeSearchResult');
    treeName.onkeyup = function() {searchTreesByName(treeName, false)};

    let loadTree = document.getElementById("loadTree");
    loadTree.style.display = "block";

    let creator = document.getElementById("creator");
    creator.style.display = "grid";

    let canvas = document.getElementById("pixiCanvas");

    creator.style.width = canvas.style.width;
    creator.style.height = canvas.style.height;

    skillsToAdd = [];
    loadTree.onclick = function () {
        let tree = data.trees.find(obj => obj.name == document.getElementById("treeName").value);

        if (tree == undefined) alert("Tree is not found");
        else {
            document.getElementById("focusarea").value = tree.focusArea;
            document.getElementById("treeDesc").value = tree.description;
            for (var i = 0; i < tree.skillNames.length; ++i) {
                skillsToAdd.push(data.skills.find(obj => obj.name == tree.skillNames[i]));
                let option = document.createElement("option");
                option.text = tree.skillNames[i];
                skillList.add(option);
            }

            if (skillList.length > 1) skillList.size = skillList.length;
            else skillList.size = 2;
        }
    };

    let addBtn = document.getElementById("addToTree");
    addBtn.onclick = addSkillToList;

    let createSkillBtn = document.getElementById("createSkill");
    createSkillBtn.onclick = createSkill;

    let deleteBtn = document.getElementById("deleteFromList");
    deleteBtn.onclick = deleteSkillFromList;

    let createBtn = document.getElementById("createTree");
    createBtn.onclick = function () {
        if (document.getElementById('treeName').value.length > 0) {
            if (skillsToAdd.length > 0) {
                for (var i = 0; i < skillsToAdd.length; ++i) {
                    delete skillsToAdd[i].itemcontainer;
                }

                let treeData = {
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

    let treeName = document.getElementById("treeName");
    treeName.setAttribute('list', 'TreeSearchResult');
    treeName.onkeyup = function() {searchTreesByName(treeName, true)};

    let loadTree = document.getElementById("loadTree");
    loadTree.style.display = "block";

    let creator = document.getElementById("creator");
    creator.style.display = "grid";

    let canvas = document.getElementById("pixiCanvas");

    creator.style.width = canvas.style.width;
    creator.style.height = canvas.style.height;

    let skillList = document.getElementById("skillList");
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
                    let req = new XMLHttpRequest();
                    req.open('POST', '/protected/getskill', false);
                    req.setRequestHeader('Content-type', 'application/json');
                    req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
                    //req.responseType = "json";
                    req.send(JSON.stringify({value: this.response.skillNames[i]}));

                    if (req.readyState == 4 && req.status == 200) {
                        let response = JSON.parse(req.response);

                        skillsToAdd.push(response.skill);
                        let option = document.createElement("option");
                        option.text = this.response.skillNames[i];
                        skillList.add(option);
                    }
                }

                if (skillList.length > 1) skillList.size = skillList.length;
                else skillList.size = 2;
            }
        });
    };

    let addBtn = document.getElementById("addToTree");
    addBtn.onclick = addSkillToList;

    let createSkillBtn = document.getElementById("createSkill");
    createSkillBtn.onclick = createSkill;

    let deleteBtn = document.getElementById("deleteFromList");
    deleteBtn.onclick = deleteSkillFromList;

    let createBtn = document.getElementById("createTree");
    createBtn.onclick = function () {
        if (document.getElementById('treeName').value.length > 0) {
            if (skillsToAdd.length > 0) {
                for (var i = 0; i < skillsToAdd.length; ++i) {
                    delete skillsToAdd[i].itemcontainer;
                }

                let treeData = {
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
    let skill = {value: document.getElementById('skillSearchTree').value};
    let skillList = document.getElementById("skillList");

    request('POST', '/protected/getskill', skill, function() {
        if(this.readyState == 4 && this.status == 200) {
            if (this.response.success) {
                if (skillsToAdd.find(obj => obj.name == this.response.skill.name) == undefined) {
                    if (this.response.dependency.length > 0) {
                        let text = "The selected skill depends on the following skills. Do you want to add these?\n";
                        for (var i = 0; i < this.response.dependency.length; ++i) {
                            text += this.response.dependency[i].name + "\n";
                        }
                        if (confirm(text)) {
                            skillsToAdd.push(this.response.skill);
                            let option = document.createElement("option");
                            option.text = this.response.skill.name;
                            skillList.add(option);
                            for (var i = 0; i < this.response.dependency.length; ++i) {
                                if (skillsToAdd.find(obj => obj.name == this.response.dependency[i].name) == undefined) {
                                    skillsToAdd.push(this.response.dependency[i]);
                                    let option = document.createElement("option");
                                    option.text = this.response.dependency[i].name;
                                    skillList.add(option);
                                }
                            }
                        }
                    } else {
                        skillsToAdd.push(this.response.skill);
                        let option = document.createElement("option");
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
    let skillList = document.getElementById("skillList");
    let children = [];
    getChildren(skillsToAdd, skillsToAdd.find(obj => obj.name == skillList.options[skillList.selectedIndex].text), children);

    if (children.length == 0) {
        skillsToAdd = skillsToAdd.filter(obj => obj.name != skillList.options[skillList.selectedIndex].text);
        skillList.remove(skillList.selectedIndex);
    } else {
        let text = "The following skills depend on the selected. Do you want to delete them?\n";
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
        let child = skills.find(obj => obj.name == skill.children[i].name);

        if (child != undefined) {
            temp.push(child);
            children.push(child);
        }
	}

	for (var i = 0; i < temp.length; ++i) {
        if (skills.find(obj => obj.name == temp[i].name) != undefined) getChildren(skills, temp[i], children);
	}
}

function delTree(element) {
    request('POST', '/protected/deletemytree', {name: element.parentElement.text}, function () {
        if (this.readyState == 4 && this.status == 200) {
            element.parentElement.outerHTML = '';
            showBottomAlert('success', element.parentElement.text + ' successfully removed');
        }
    })
}

// make trees globally available
function approveTrees() {
    hideMenus();

    let approveTrees = document.getElementById("approveTrees");
    approveTrees.style.display = "block";

    let btn = document.getElementById('approveTreesBtn');
    let select = document.getElementById('apprTreeSel');

    for (var i = 0; i < data.apprTrees.length; ++i) {
        let text = data.apprTrees[i].name + " (" + data.apprTrees[i].username + ")";
        let option = document.createElement('option');
        option.value = "ss";
        /*option.value = */option.text = text;
        option.name = data.apprTrees[i].name;
        option.username = data.apprTrees[i].username;
        select.add(option);
    }

    btn.onclick = function () {
        let selectedTraining = select.options[select.selectedIndex]
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

    let approveSkills = document.getElementById("approveSkills");

    approveSkills.style.display = "block";

    let approveSkillsSelect = document.getElementById('apprSkillSel');
    let skillsforapproval = undefined;

    request('GET', '/protected/skillsforapproval', undefined, function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response !== undefined) {
                approveSkillsSelect.innerHTML = "";

                skillsforapproval = this.response;
                for (var i = 0; i < skillsforapproval.length; i++) {
                    let text = skillsforapproval[i].name + " (" + skillsforapproval[i].username + ")";
                    let option = document.createElement('option');
                    option.value = skillsforapproval[i];
                    option.text = text;
                    approveSkillsSelect.add(option);
                }

            }
        }
    });

    let approveButton = document.getElementById("approvebtn");
    approveButton.onclick = function() {
        let selectedSkill = approveSkillsSelect.options[approveSkillsSelect.selectedIndex].text;

        let skillforapproval = skillsforapproval.find(obj => obj.name == selectedSkill);

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
        let text = data.apprSkills[i].name + " (" + data.apprSkills[i].username + ")";
        let option = document.createElement('option');
        option.value = option.text = text;
        document.getElementById('apprSkillSel').add(option);
    }
*/
   //Making the approve page visible

}

// makes trainings for skills globally available
function approveTrainings () {
    hideMenus();

    let approveTrees = document.getElementById("approveTrainings");
    approveTrees.style.display = "block";

    let select = document.getElementById('apprTrainingSel');
    let btn = document.getElementById('approveTrainingsBtn');

    for (var i = 0; i < data.apprTrainings.length; ++i) {
        let text = data.apprTrainings[i].name + " (" + data.apprTrainings[i].skillName + ", " +  data.apprTrainings[i].username + ")";
        let option = document.createElement('option');
        option.name = data.apprTrainings[i].name;
        option.skillName = data.apprTrainings[i].skillName;
        option.username = data.apprTrainings[i].username;
        option.text = text;
        select.add(option);
    }

    btn.onclick = function () {
        let selectedTraining = select.options[select.selectedIndex]
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
  let divToAdd = document.createElement('div');
  divToAdd.className = "advSearchDetailsItem";
  let spanToAdd = document.createElement('span');
  let boxToAdd = document.createElement('input');
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

function setAdmin () {
    hideMenus();

    let approveTrees = document.getElementById("setAdmin");
    approveTrees.style.display = "block";

    let giveBtn = document.getElementById('setAdminBtn');
    giveBtn.onclick = function () {
        let username = document.getElementById('newAdminUser').value;

        request('POST', '/admin/setadmin', {
            username: username,
            give: true
        }, function () {
            if (this.readyState == 4 && this.status == 200) {
                window.open("/user/", "_self");
            }
        });
    };

    let revokeBtn = document.getElementById('delAdminBtn');
    revokeBtn.onclick = function () {
        let username = document.getElementById('newAdminUser').value;

        request('POST', '/admin/setadmin', {
            username: username,
            give: false
        }, function () {
            if (this.readyState == 4 && this.status == 200) {
                window.open("/user/", "_self");
            }
        });
    };
}

// hides skill, tree creator, editor menu
function hideMenus () {
    document.getElementById('submitBtn').style.display = "none";

    let elements = document.getElementsByClassName("hide");

    for (var i = 0; i < elements.length; ++i) {
        elements[i].style.display = "none";
    }
}

function hideCardsAndAlerts (event) {
    if (!event.target.matches("#userCard, .float-right *")) $(".hide-on-click").collapse("hide");
    if (!event.target.matches("#createTree")) $(".alert").hide();
}

document.body.addEventListener('click', hideCardsAndAlerts);

function validateNewPwd() {
	var oldPassword = document.getElementById("curPassword");
	var password1 = document.getElementById("newPassword1");
	var password2 = document.getElementById("newPassword2");

    if (oldPassword.value != "" && password1.value != "" && password2.value != "") {
        if (password1.value == password2.value) {
            if (checkPassword(password1.value)) {
                request('POST', '/protected/newpassword', {
                    oldPassword: oldPassword.value,
                    newPassword: password1.value
                }, function () {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.response.success) showBottomAlert('success', "Password changed successfully!");
                        else showBottomAlert("danger", "Wrong password!");
                    }
                });
            } else showBottomAlert('danger', "The new password is not valid! It has to contain at least one digit, one lowercase and one uppercase character. The minimum password length is 8 characters.");
        } else showBottomAlert('danger', "Incorrect credentials! Passwords don't match!");
    } else showBottomAlert('danger', "Incorrect credentials!");
}

function savePlace () {
    let place = document.getElementById("place");

    if (place.value != '') {
        request('POST', '/protected/newplace', {
            location: place.value,
        }, function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response.success) showBottomAlert('success', "Place changed successfully!");
            }
        });
    } else showBottomAlert('danger', "Incorrect data!");
}

function saveEmail () {
    let email = document.getElementById("email");

    if (email.value != '') {
        request('POST', '/protected/newemail', {
            email: email.value,
        }, function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.response.success) showBottomAlert('success', "Email changed successfully!");
            }
        });
    } else showBottomAlert('danger', "Incorrect data!");
}
