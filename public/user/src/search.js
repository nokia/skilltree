// searches users by the string provided.
function searchUsersByName(){
  var userToSearch = {value: document.getElementById('cardSearchBar').value};
  var UserSearchResult = document.getElementById('UserSearchResult');

  if (userToSearch !== "") {
    request('POST', '/protected/searchUsersByName', userToSearch, function() {
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

// searches trees by the provided name
function searchTreesByName (element, global) {
    var treeToSearch = {value: element.value};
    var TreeSearchResult = document.getElementById('TreeSearchResult');

    if (global) {
        request('POST', '/protected/searchTreesByName', treeToSearch, function() {
            if(this.readyState == 4 && this.status == 200) {
                TreeSearchResult.innerHTML = "";
                for (var i = 0; i < this.response.length; ++i) {
                    var mya = document.createElement('option');
                    mya.value = this.response[i].name;
                    TreeSearchResult.appendChild(mya);
                }
            }
        });
    } else {
        TreeSearchResult.innerHTML = "";
        var res = data.trees.filter(obj => (new RegExp(".*" + treeToSearch + ".*", "i")).test(obj.name));
        for (var i = 0; i < res.length; ++i) {
            var mya = document.createElement('option');
            mya.value = res[i].name;
            TreeSearchResult.appendChild(mya);
        }
    }
}

// searches skills by provided name
function searchSkillsByName(element, global){
    var skillToSearch = {value: element.value};
    var skillSearchResult = document.getElementById('skillSearchResult');
    if (global) {
        request('POST', '/protected/searchSkillsByName', skillToSearch, function () {
            if (this.readyState == 4 && this.status == 200) {
                skillSearchResult.innerText = "";
                for (var i = 0; i < this.response.length; i++) {
                    var mya = document.createElement('option');
                    mya.value = this.response[i].name;
                    skillSearchResult.appendChild(mya);
                }
            }
        });
    } else {
        skillSearchResult.innerHTML = "";
        var res = data.skills.filter(obj => (new RegExp(".*" + skillToSearch + ".*", "i")).test(obj.name));
        for (var i = 0; i < res.length; ++i) {
            var mya = document.createElement('option');
            mya.value = res[i].name;
            skillSearchResult.appendChild(mya);
        }
    }
}

// gets the username, trees, skills and maintree of the user.
function getPublicUserData(){
  var userToSearch = {value: document.getElementById('cardSearchBar').value};
  request('POST', '/protected/getPublicUserData', userToSearch, function() {
      if(this.readyState == 4 && this.status == 200) {
        var modal = document.getElementById('searchModal');
        var searchModalBody = document.getElementById('searchModalBody');
        var searchModalHeader = document.getElementById('searchModalHeader');
        document.getElementById('closeSearchModal').onclick = function() {
          modal.style.display = "none";
        };
        closeModal(modal);
        searchModalHeader.innerHTML = '<th scope="col">#</th><th scope="col">Name</th><th scope="col">MainTree</th><th scope="col">Willing to help</th>';
        searchModalBody.innerHTML = "";
        for (var i = 0; i < this.response.length; i++) {
          var row = document.createElement('tr');
          row.className = "foundElementRow";
          row.innerHTML += "<th>" + (i+1) + "</th>";
          row.innerHTML += "<td>" + this.response[i].username + "</td>";
          row.innerHTML += "<td>" + this.response[i].mainTree + "</td>";
          row.innerHTML += "<td>" + this.response[i].willingToTeach + "</td>";
          row.data = this.response[i];
          row.onclick = function(){
            var searchedUserModal = document.getElementById('searchedUserModal');
            var closeSearchedUserModal = document.getElementById('closeSearchedUserModal');
            var searchedUserModalHeader = document.getElementById('searchedUserModalHeader');
            var searchedUserlModalInfo = document.getElementById('searchedUserlModalInfo');
            var searchedUserlModalAdress = document.getElementById('searchedUserlModalAdress');
            var userSkillsModalHeader = document.getElementById('userSkillsModalHeader');
            var userSkillsModalBody = document.getElementById('userSkillsModalBody');

            searchedUserModalHeader.innerHTML = this.data.username;
            searchedUserlModalInfo.innerHTML = this.data.username + " focus area is " + this.data.focusArea.name + " and main Tree is " + this.data.mainTree + ". ";
            searchedUserlModalAdress.innerHTML = "<h2>Availability</h2><br><b>Preferred day(s)</b>: " + this.data.teachingDay + " " + this.data.teachingTime + "<br><b>Place</b>: <a href=" + this.data.location + ">" + this.data.location + "</a><br>";
            userSkillsModalHeader.innerHTML = '<th scope="col">#</th><th scope="col">Name</th><th scope="col">Level</th><th scope="col">Endorsement</th>';
            userSkillsModalBody.innerHTML = "";
            for (var i = 0; i < this.data.skills.length; i++) {
              var row = document.createElement('tr');
              row.className = "foundElementRow";
              row.innerHTML += "<th>" + (i+1) + "</th>";
              row.innerHTML += "<th>" + this.data.skills[i].name + "</th>";
              row.innerHTML += "<th>" + this.data.skills[i].achievedPoint + "</th>";
              row.innerHTML += "<th>" + this.data.skills[i].endorsement.length + "</th>";
              var sv = {skillName: this.data.skills[i].name, username: this.data.username};
              row.onclick = function(){
                request('POST', '/protected/endorse', sv, function() {
                    if(this.readyState == 4 && this.status == 200) {
                      alert(this.response.message);
                    }
                });
              }
              userSkillsModalBody.appendChild(row);
            }
            closeSearchedUserModal.onclick = function(){
              searchedUserModal.style.display = "none";
            }
            searchedUserModal.style.display = "block";
          }
          searchModalBody.appendChild(row);
        }
        modal.style.display = "block";
      }
  });
}

// gets the name, skillnames, focusarea of a tree.
function getPublicTreeData(){
  var treeToSearch = {value: document.getElementById('cardSearchBar').value};
  request('POST', '/protected/getPublicTreeData', treeToSearch, function() {
      if(this.readyState == 4 && this.status == 200) {
        var modal = document.getElementById('searchModal');
        var searchModalBody = document.getElementById('searchModalBody');
        var searchModalHeader = document.getElementById('searchModalHeader');
        document.getElementById('closeSearchModal').onclick = function() {
          modal.style.display = "none";
        };
        closeModal(modal);
        searchModalHeader.innerHTML = '<th scope="col">#</th><th scope="col">Name</th><th scope="col">Focus Area</th>';
        searchModalBody.innerHTML = "";
        for (var i = 0; i < this.response.length; i++) {
          var row = document.createElement('tr');
          row.className = "foundElementRow";
          row.innerHTML += "<th>" + (i+1) + "</th>";
          row.innerHTML += "<td>" + this.response[i].name + "</td>";
          row.innerHTML += "<td>" + this.response[i].focusArea + "</td>";
          row.treeName = this.response[i].name;
          row.onclick = function() {
            addTreeToUser({value: this.treeName});
          }
          searchModalBody.appendChild(row);
        }
        modal.style.display = "block";
      }
  });
}

// gets the name, caterory, desc, relations and training data of a skill.
function getPublicSkillData(){
  var skillToSearch = {value: document.getElementById('cardSearchBar').value};
  request('POST', '/protected/getPublicSkillData', skillToSearch, function() {
      if(this.readyState == 4 && this.status == 200) {
        var modal = document.getElementById('searchModal');
        var searchModalBody = document.getElementById('searchModalBody');
        var searchModalHeader = document.getElementById('searchModalHeader');
        document.getElementById('closeSearchModal').onclick = function() {
          modal.style.display = "none";
        };
        closeModal(modal);
        searchModalHeader.innerHTML = '<th scope="col">#</th><th scope="col">Name</th><th scope="col">Category</th><th scope="col">Description</th>';
        searchModalBody.innerHTML = "";
        for (var i = 0; i < this.response.length; i++) {
          var row = document.createElement('tr');
          row.className = "foundElementRow";
          row.innerHTML += "<th>" + (i+1) + "</th>";
          row.innerHTML += "<td>" + this.response[i].name + "</td>";
          row.innerHTML += "<td>" + this.response[i].categoryName + "</td>";
          row.innerHTML += "<td>" + this.response[i].description + "</td>";
          row.data = {
            name: this.response[i].name,
            categoryName: this.response[i].categoryName,
            description: this.response[i].description,
            pointDescription: this.response[i].pointDescription,
            descriptionWikipediaURL: this.response[i].descriptionWikipediaURL
          }
          row.onclick = function(){
            var foundmodal = document.getElementById('searchedSkillModal');
            var header = document.getElementById('searchedSkillModalHeader');
            var category = document.getElementById('searchedSkillModalCategory');
            var pdesc = document.getElementById('searchedSkillModalPDesc');
            var desc = document.getElementById('searchedSkillModalDesc');
            var wiki = document.getElementById('searchedSkillModalWiki');
            var closer = document.getElementById('closeSearchedSkillModal');
            header.innerHTML = this.data.name;
            category.innerHTML = "<b>Category</b>: " + this.data.categoryName;
            pdesc.innerHTML = "<b>Description by points</b>: <br> 1: " + this.data.pointDescription[0] + "<br>" +
                                                          "2: " + this.data.pointDescription[1] + "<br>" +
                                                          "3: " + this.data.pointDescription[2] + "<br>" +
                                                          "4: " + this.data.pointDescription[3] + "<br>" +
                                                          "5: " + this.data.pointDescription[4];
            desc.innerHTML = "<b>Description</b>: " + this.data.description;
            wiki.innerHTML = "<b>Wiki link</b>: <a href=" + this.data.descriptionWikipediaURL + ">" + this.data.descriptionWikipediaURL + "</a>";
            foundmodal.style.display = "block";
            closer.onclick = function(){
              foundmodal.style.display = "none";
            }
          }
          searchModalBody.appendChild(row);
        }
        modal.style.display = "block";
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
