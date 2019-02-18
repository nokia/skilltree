// recursive function for dependency determinating
async function getDependency (userSkills, skill, dependency) {
    var parents = [];
    for (var i = 0; skill.parents != undefined && i < skill.parents.length; ++i) {
        var parent = userSkills.find(obj => obj.name == skill.parents[i]);
        if (parent == undefined) {
            parent = await findSkillByName(skill.parents[i]);
        }

        parents.push(parent);
        dependency.push(parent);
    }

    for (var i = 0; i < parents.length; ++i) {
        await getDependency(userSkills, parents[i], dependency);
    }
}

async function insertSkill(skillToInsert, skillMatrix) {
    for (var component = 0; component < skillMatrix.length; component++) {
        for (var child = 0; child < skillToInsert.children.length; child++) {
            for (var row = 0; row < skillMatrix[component].length; row++) {
                if ((skillMatrix[component][row].map(obj => obj.name)).includes(skillToInsert.children[child].name)) {
                    if (row == 0) {
                        await addRowToComponent(skillMatrix, component);
                        skillMatrix[component][0].push(skillToInsert);
                        // console.log(skillToInsert.name + " added to root(skills child found in tree)"); // for debugging reasons
                        // this checks if the row found was the root level.
                        // if yes, it adds another row to the top, and inserts the skill there.
                        return;
                    }
                    else {
                        skillMatrix[component][row - 1].push(skillToInsert);
                        // console.log(skillToInsert.name + " added to the row above(skills child found in tree)"); // for debugging reasons
                        // if no, it inserts the skill to the row above.
                        return;
                    }
                }
            }
        }
        for (var par = 0; par < skillToInsert.parents.length; par++) {
            for (var row = 0; row < skillMatrix[component].length; row++) {
                if ((skillMatrix[component][row].map(obj => obj.name)).includes(skillToInsert.parents[par])) {
                    if (skillMatrix[component][row + 1] == undefined) skillMatrix[component].push([]);
                    skillMatrix[component][row + 1].push(skillToInsert);
                    // console.log(skillToInsert.name + " added to the row below(skills parent found in tree.)"); // for debugging reasons
                    // this checks if the skill has any parents in any row in any component,
                    // if yes, then it inserts the skill to the row below.
                    return;
                }
            }
        }
    }
    skillMatrix.push([[skillToInsert]]);
    // console.log(skillToInsert.name + " added to a new component."); // for debugging reasons
    // this inits the first element of every component
    return;
}

async function addRowToComponent(skillMatrix, component){
    skillMatrix[component].push([]);
    for (var i = skillMatrix[component].length - 2; i >= 0; i--) {
        skillMatrix[component][i + 1] = skillMatrix[component][i];
    }
    skillMatrix[component][0] = [];
}

async function assembleTree(skillMatrix){
    var assembledTree = [];
    var l = true;
    var j = 0;
    while (l) {
        l = false;
        for (var component = 0; component < skillMatrix.length; component++) {
            if (skillMatrix[component][j] != undefined) {
                l = true;
                assembledTree = assembledTree.concat(skillMatrix[component][j]);
            }
        }
        j++;
    }
    return assembledTree;
}

// gets the skillnames of a skillarray.
async function extractNames(skillArray){
    return skillArray.map(obj => obj.name);
}

// creates an ordered tree from an array of skills.
async function sortTree(skillArray){
    var sortedArray = []; // output array
    var skillMatrix = []; // 3d array, represents the components, the rows, and the elements of rows in the graph.
    for (var i = 0; i < skillArray.length; i++) {
        await insertSkill(skillArray[i], skillMatrix);
    }
    sortedArray = await assembleTree(skillMatrix);
    skillArray = await extractNames(sortedArray);
    return skillArray;
}

async function sortAndAddTreeToUser(treeToSort, user){
    var skills = await Skill.find({
        name: treeToSort.skillNames,
    }, function (err, skills) {
        if (err) throw err;
        return skills;
    });

    var sn = await sortTree(skills);
    user.trees.push({
        name: treeToSort.name,
        focusArea: treeToSort.focusArea,
        description: treeToSort.description,
        skillNames: sn
    });

    await skills.forEach(function (skill) {
        skill.achievedPoint = 0;
        if (user.skills.find(obj => obj.name == skill.name) == undefined){
            user.skills.push(skill);
        }});

    user.save(function (err) {if (err) throw err;});
    return;
}

module.exports = {
    getDependency: getDependency,
    sortTree: sortTree,
    sortAndAddTreeToUser: sortAndAddTreeToUser
};
