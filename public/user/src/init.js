// get data from server
function initData(){
  var dataRequest = new XMLHttpRequest();
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
  var card_username = document.getElementById('card_username');
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

// checks if the login is 1st time and shows first login modal if yes
function checkFirstLogin() {
    if (data.mainTree != undefined) startLoader();
    else {
        var modal = document.getElementById('firstLogin');
        var btn = document.getElementById('savebtn');
        var mainTree = document.getElementById('maintree');

        console.log("b");
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

            request('POST', '/protected/firstlogindata', firstLoginData, function() {
                if(this.readyState == 4 && this.status == 200) {
                  window.open("/user/", "_self");
                }
            });
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
  var treeList = document.getElementById('treeList');
  treeList.innerHTML = "";
  for (var i = 0; i < data.trees.length; i++) {
    var tn = data.trees[i].name;
    var ithtree = document.createElement('a');
    ithtree.innerHTML = tn + '&emsp;<i class = "fa fa-trash" onclick = "alert()"></i>';
    ithtree.className = "dropdown-item";
    ithtree.onclick = function() {
        document.getElementById('submitBtn').style.display = "block";
        showTree(this.innerHTML, data, true); // bator?
    }
    treeList.appendChild(ithtree);
  }
}

window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
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
