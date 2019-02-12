// get data from server
function initData(){
  let dataRequest = new XMLHttpRequest();
  dataRequest.open('GET', '/protected/userdata', true);
  dataRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  dataRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
  dataRequest.responseType = "json";
  dataRequest.onreadystatechange = function() {
      if(dataRequest.readyState == 4 && dataRequest.status == 200) {
          data = dataRequest.response;
          if (data.admin) document.getElementById('openAdminMenu').style.display = "block";
          checkFirstLogin();
          initUI(true, data);

          document.getElementById("home").onclick = function () {
              document.getElementById('submitBtn').style.display = "block";
              showTree(data.mainTree, data, true);
              initUI(true, data);
          };
      }
  }
  dataRequest.send();
}

// initializes the data of the card on the top-right corner of the page.
function initUI(self, _data){
  let card_username = document.getElementById('card_username');
  if (card_username) {
    if (self) {
      card_username.innerHTML = "Welcome " + _data.username + "!";
    }
    else {
      card_username.innerHTML = "You're now viewing " + _data.username + "'s data.";
    }
  }
  initCard();
  switchSearch("Skill");
}

// initalizes the card on the top left corner of the screen
function initCard(){
  let treeCount = document.getElementById('treeCount');
  let skillCount = document.getElementById('skillCount');
  let pointCount = document.getElementById('pointCount');
  let cardUserName = document.getElementById('cardUserName');
  let cardMainTree = document.getElementById('cardMainTree');

  treeCount.innerHTML = data.trees.length + "<br>trees";
  skillCount.innerHTML = data.skills.length + "<br>skills";
  pointCount.innerHTML = data.skills.sum("achievedPoint") + "<br>points";
  cardUserName.innerHTML = data.username;
  cardMainTree.innerHTML = data.mainTree;

  let username = document.getElementById('username');
  let place = document.getElementById('place');
  let email = document.getElementById('email');

  username.innerText = data.username;
  place.value = data.location;
  email.value = data.email;
}

// checks if the login is 1st time and shows first login modal if yes
function checkFirstLogin() {
    if (data.mainTree != undefined) startLoader();
    else {
        let modal = document.getElementById('firstLogin');
        let btn = document.getElementById('savebtn');
        let focusArea = document.getElementById('focusareasel');
        let mainTree = document.getElementById('maintree');

        btn.onclick = function() {
            let firstLoginData = {
                    focusArea: focusArea.value,
                    mainTree: mainTree.value
            };

            request('POST', '/protected/firstlogindata', firstLoginData, function() {
                if(this.readyState == 4 && this.status == 200) {
                  window.open("/user/", "_self");
                }
            });
        }

        modal.style.display = "block";
    }
}

function selectMainTree () {
    let mainTree = document.getElementById('maintree');
    let focusArea = document.getElementById('focusareasel');

    let focusAreaTrees = data.allTreeNames.filter(obj => obj.focusArea == focusArea.value);

    mainTree.innerHTML = '';
    for (var i = 0; i < focusAreaTrees.length; ++i) {
        let option = document.createElement('option');
        option.value = option.text = focusAreaTrees[i].name;
        mainTree.add(option);
    }

    document.getElementById('maintreediv').style.display = 'block';
}

// loads the needed pics for the tree, then loads the tree.
function startLoader () {
    PIXI.loader.reset();

    PIXI.loader.add("pictures/skillborder.png")
                //.add("pictures/tree_bg/art-background-blank-951240.jpg")
                .add("pictures/tree.png")
                .add("pictures/tick.png");
    for (var i = 0; i < data.skills.length; ++i) {
        PIXI.loader.add(data.skills[i].skillIcon.toString());
    }
    PIXI.loader.load(function () {
        showTree(data.mainTree, data, true);
    });
    loadAddedTrees();
}

// loads the user's public and private trees.
function loadAddedTrees(){
  let treeList = document.getElementById('treeList');
  treeList.innerHTML = "";
  for (var i = 0; i < data.trees.length; i++) {
    let tn = data.trees[i].name;
    let ithtree = document.createElement('a');
    if (tn == data.mainTree) ithtree.innerHTML = tn;
    else ithtree.innerHTML = '<i class = "fa fa-trash" id = "delTreeBtn" onclick = "delTree(this)"></i>' + tn;
    ithtree.className = "dropdown-item";
    ithtree.onclick = function (event) {
        if (event.target.id != 'delTreeBtn') {
            document.getElementById('submitBtn').style.display = "block";
            showTree(this.text, data, true);
        }
    }
    treeList.appendChild(ithtree);
  }
}

window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                $('.invalid-alert').show();
            } else $('.invalid-alert').hide();
            form.classList.add('was-validated');
        }, false);
    });

    initData();
}, false);
