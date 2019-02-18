// returns the skill data of the skillname provided
async function findSkillByName(qname){
    var skillToReturn = await Skill.findOne({
        "name": qname
    }, function (err, parent) {
        if (err) throw err;
        return skillToReturn;
    });
    return skillToReturn;
}

exports.findSkillByName = findSkillByName;
