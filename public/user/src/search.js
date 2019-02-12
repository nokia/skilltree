// searches users by the string provided.
function searchUsersByName(){
  let userToSearch = {value: document.getElementById('cardSearchBar').value};
  let UserSearchResult = document.getElementById('UserSearchResult');
  if (userToSearch !== "") {
    request('POST', '/protected/searchUsersByName', userToSearch, function() {
        if(this.readyState == 4 && this.status == 200) {
          UserSearchResult.innerHTML = "";
          for (var i = 0; i < this.response.length; i++) {
            let mya = document.createElement('option');
            mya.value = this.response[i].name;
            UserSearchResult.appendChild(mya);
          }
        }
    });
  }
}

// searches trees by the provided name
function searchTreesByName (element, global) {
    let treeToSearch = {value: element.value};
    let TreeSearchResult = document.getElementById('TreeSearchResult');
    if (global) {
        request('POST', '/protected/searchTreesByName', treeToSearch, function() {
            if(this.readyState == 4 && this.status == 200) {
                TreeSearchResult.innerHTML = "";
                for (var i = 0; i < this.response.length; ++i) {
                    let mya = document.createElement('option');
                    mya.value = this.response[i].name;
                    TreeSearchResult.appendChild(mya);
                }
            }
        });
    } else {
        TreeSearchResult.innerHTML = "";
        let res = data.trees.filter(obj => (new RegExp(".*" + treeToSearch + ".*", "i")).test(obj.name));
        for (var i = 0; i < res.length; ++i) {
            let mya = document.createElement('option');
            mya.value = res[i].name;
            TreeSearchResult.appendChild(mya);
        }
    }
}

// searches skills by provided name
function searchSkillsByName(element, global){
    let skillToSearch = {value: element.value};
    let skillSearchResult = document.getElementById('skillSearchResult');
    if (global) {
        request('POST', '/protected/searchSkillsByName', skillToSearch, function () {
            if (this.readyState == 4 && this.status == 200) {
                skillSearchResult.innerText = "";
                for (var i = 0; i < this.response.length; i++) {
                    let mya = document.createElement('option');
                    mya.value = this.response[i].name;
                    skillSearchResult.appendChild(mya);
                }
            }
        });
    } else {
        skillSearchResult.innerHTML = "";
        let res = data.skills.filter(obj => (new RegExp(".*" + skillToSearch + ".*", "i")).test(obj.name));
        for (var i = 0; i < res.length; ++i) {
            let mya = document.createElement('option');
            mya.value = res[i].name;
            skillSearchResult.appendChild(mya);
        }
    }
}

// gets the username, trees, skills and maintree of the user.
function getPublicUserData(){
  let userToSearch = {value: document.getElementById('cardSearchBar').value};
  document.getElementById("searchModalTitle").innerHTML = "Click on a user, to view his/her main tree!";
  request('POST', '/protected/getPublicUserData', userToSearch, function() {
      if(this.readyState == 4 && this.status == 200) {
        let modal = document.getElementById('searchModal');
        let searchModalBody = document.getElementById('searchModalBody');
        let searchModalHeader = document.getElementById('searchModalHeader');
        document.getElementById('closeSearchModal').onclick = function() {
          modal.style.display = "none";
        };
        closeModal(modal);
        searchModalHeader.innerHTML = '<th scope="col">#</th><th scope="col">Name</th><th scope="col">MainTree</th><th scope="col">Willing to help</th>';
        searchModalBody.innerHTML = "";
        for (var i = 0; i < this.response.length; i++) {
          let row = document.createElement('tr');
          row.className = "foundElementRow";
          row.innerHTML += "<th>" + (i+1) + "</th>";
          row.innerHTML += "<td>" + this.response[i].username + "</td>";
          row.innerHTML += "<td>" + this.response[i].mainTree + "</td>";
          row.innerHTML += "<td>" + this.response[i].willingToTeach + "</td>";
          row.data = this.response[i];
          row.onclick = function(){
            try {
              showTree(this.data.mainTree, this.data, false);
              modal.style.display = "none";
            } catch (e) {
              alert("The user has not yet set his/her maintree, or his/her maintree is wrong.");
            }
          }
          searchModalBody.appendChild(row);
        }
        modal.style.display = "block";
      }
  });
}

// gets the name, skillnames, focusarea of a tree.
function getPublicTreeData(){
  let treeToSearch = {value: document.getElementById('cardSearchBar').value};
  document.getElementById("searchModalTitle").innerHTML = "Click on a tree, to add it to your trees!";
  request('POST', '/protected/getPublicTreeData', treeToSearch, function() {
      if(this.readyState == 4 && this.status == 200) {
        let modal = document.getElementById('searchModal');
        let searchModalBody = document.getElementById('searchModalBody');
        let searchModalHeader = document.getElementById('searchModalHeader');
        document.getElementById('closeSearchModal').onclick = function() {
          modal.style.display = "none";
        };
        closeModal(modal);
        searchModalHeader.innerHTML = '<th scope="col">#</th><th scope="col">Name</th><th scope="col">Focus Area</th>';
        searchModalBody.innerHTML = "";
        for (var i = 0; i < this.response.length; i++) {
          let row = document.createElement('tr');
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
  let skillToSearch = {value: document.getElementById('cardSearchBar').value};
  document.getElementById("searchModalTitle").innerHTML = "Click on a skill, to view its details!";
  request('POST', '/protected/getPublicSkillData', skillToSearch, function() {
      if(this.readyState == 4 && this.status == 200) {
        let modal = document.getElementById('searchModal');
        let searchModalBody = document.getElementById('searchModalBody');
        let searchModalHeader = document.getElementById('searchModalHeader');
        document.getElementById('closeSearchModal').onclick = function() {
          modal.style.display = "none";
        };
        closeModal(modal);
        searchModalHeader.innerHTML = '<th scope="col">#</th><th scope="col">Name</th><th scope="col">Category</th><th scope="col">Description</th>';
        searchModalBody.innerHTML = "";
        for (var i = 0; i < this.response.length; i++) {
          let row = document.createElement('tr');
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
            descriptionWikipediaURL: this.response[i].descriptionWikipediaURL,
            users: this.response[i].users
          }
          row.onclick = function(){
            let foundmodal = document.getElementById('searchedSkillModal');
            let header = document.getElementById('searchedSkillModalHeader');
            let category = document.getElementById('searchedSkillModalCategory');
            let pdesc = document.getElementById('searchedSkillModalPDesc');
            let desc = document.getElementById('searchedSkillModalDesc');
            let wiki = document.getElementById('searchedSkillModalWiki');
            let closer = document.getElementById('closeSearchedSkillModal');
            let tableheader = document.getElementById('searchedSkillModalTableHeader');
            let tablebody = document.getElementById('searchedSkillModalTableBody');

            header.innerHTML = this.data.name;
            category.innerHTML = "<b>Category</b>: " + this.data.categoryName;
            pdesc.innerHTML = "<b>Description by levels</b>: <br> 1: " + this.data.pointDescription[0] + "<br>" +
                                                          "2: " + this.data.pointDescription[1] + "<br>" +
                                                          "3: " + this.data.pointDescription[2] + "<br>" +
                                                          "4: " + this.data.pointDescription[3] + "<br>" +
                                                          "5: " + this.data.pointDescription[4];
            desc.innerHTML = "<b>Description</b>: " + this.data.description;
            wiki.innerHTML = "<b>Wiki link</b>: <a href=" + this.data.descriptionWikipediaURL + ">" + this.data.descriptionWikipediaURL + "</a>";
            tableheader.innerHTML = '<th scope="col">#</th><th scope="col">Name</th><th scope="col">Level</th>';
            tablebody.innerHTML = "";
            for (var j = 0; j < this.data.users.length; j++) {
              let row2 = document.createElement('tr');
              row2.className = "foundElementRow";
              row2.innerHTML += "<th>" + (j+1) + "</th>";
              row2.innerHTML += "<td>" + this.data.users[j].username + "</td>";
              row2.innerHTML += "<td>" + this.data.users[j].skill.achievedPoint + "</td>";
              tablebody.appendChild(row2);
            }
            foundmodal.style.display = "block";
            closer.onclick = function(){
              foundmodal.style.display = "none";
            }
            closeModal(foundmodal);
          }
          searchModalBody.appendChild(row);
        }
        modal.style.display = "block";
      }
  });
}

// switches the advanced search card to the requested type
function switchSearch(type){
  document.getElementById('advSearchDetails').innerHTML = "";
  if (type === "Skill") {
    document.getElementById('cardSearchBar').onkeyup = function(){
      if (Array.from(document.getElementById('skillSearchResult').options).find(obj => obj.value == document.getElementById('cardSearchBar').value) == undefined){
        searchSkillsByName(this, true);
      }
    };
    document.getElementById('cardSearchBar').setAttribute('list', "skillSearchResult");
    document.getElementById('cardSearch').onclick = getPublicSkillData;
  }
  else if (type === "Tree") {
    document.getElementById('cardSearchBar').onkeyup = function() {
      if (Array.from(document.getElementById('TreeSearchResult').options).find(obj => obj.value == document.getElementById('cardSearchBar').value) == undefined) {
        searchTreesByName(document.getElementById('cardSearchBar'), true);
      }
    };
    document.getElementById('cardSearchBar').setAttribute('list', "TreeSearchResult");
    document.getElementById('cardSearch').onclick = getPublicTreeData;
  }
  else if (type === "User"){
    document.getElementById('cardSearchBar').onkeyup = function() {
      if (Array.from(document.getElementById('UserSearchResult').options).find(obj => obj.value == document.getElementById('cardSearchBar').value) == undefined) {
        searchUsersByName();
      }
    };
    document.getElementById('cardSearchBar').setAttribute('list', "UserSearchResult");
    document.getElementById('cardSearch').onclick = getPublicUserData;
  }
}
