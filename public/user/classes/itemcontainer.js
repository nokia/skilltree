  // a quick note on filters: filters will have 2 element, the 0th element is
  // reserved for hover animations, the 1st element is reserved for more permanent
  // effect, eg. green glowfilters for maxed out skills. Keep in mind that .filters
  // should NEVER be nulled, only modified. If you want to empty a slot, apply
  // nullFilter there, it does nothing, it's kind of a placeholder filter.
  var nullFilter = new PIXI.filters.AlphaFilter(1);
  var maxPointFilter = new PIXI.filters.GlowFilter(8,3,2, 0x007F0E, 1);
  var notNullPointFilter = new PIXI.filters.GlowFilter(8,3,2, 0xCCAA00, 1);
  var hoverFilter = new PIXI.filters.GlowFilter(8,3,2, 0xFFBF00, 1);

class ItemContainer {
    constructor(app, skills, skillName, owner) {
        this.app = app;
        this.skills = skills;
        this.skill = skills.find(obj => obj.name == skillName);
        this.self = owner.self;
        this.username = owner.username;

        //Creating images
        this.skillicon = new PIXI.Sprite(PIXI.loader.resources[this.skill.skillIcon].texture); //100x100
        this.skillborder = new PIXI.Sprite(PIXI.loader.resources["pictures/skillborder.png"].texture); //116x116

        //Level info
        this.skillborder.levelinfo = new PIXI.Text(this.skill.achievedPoint + "/" + this.skill.maxPoint);
        this.skillborder.levelinfo.scale.set(.5);

        // Endorse points
        if (this.skill.endorsement != undefined && this.skill.endorsement.length > 0)
            this.skillborder.endorsement = new PIXI.Text("+" + this.skill.endorsement.length);
        else this.skillborder.endorsement = new PIXI.Text("");

        this.skillborder.endorsement.scale.set(.5);
        this.skillborder.endorsement.position.set(10, 50);
        this.skillborder.endorsement.style.fill = 0xFFFFFF;

        // Creating details page
        var detailsWidth = 300;
        this.detailsMargin = 10;
        var nameFontSize = 20;
        var descriptionFontSize = 12;

        // whole details (foreground and backg)
        this.details = new PIXI.Container();

        // container for texts, buttons
        this.detailsForeground = new PIXI.Container();

        // name of the skill
        var name = new PIXI.Text(this.skill.name, {fontSize: nameFontSize, fill: 0x000000});
        name.position.set(this.detailsMargin, this.detailsMargin);
        this.detailsForeground.addChild(name);

        // description of the skill (shortened)
        var skillDescShortened = this.readMoreSplit(this.skill.description, true);
        this.description = new PIXI.Text(skillDescShortened, {fontSize: descriptionFontSize, fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - this.detailsMargin * 2 });
        this.description.position.set(this.detailsMargin, this.detailsMargin * 2 + nameFontSize);
        this.detailsForeground.addChild(this.description);
        this.detailsForeground.zOrder = 1;

        // description of the current level (shortened)
        this.curlvlDesc = new PIXI.Text("", {fontSize: descriptionFontSize, fontStyle: 'italic', fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - this.detailsMargin * 2});
        this.curlvlDesc.enabled = false;
        if (this.skill.achievedPoint > 0) {
            this.curlvlDesc.text = "Current level: " + this.readMoreSplit(this.skill.pointDescription[this.skill.achievedPoint - 1]);
            this.curlvlDesc.enabled = true;
        }
        this.curlvlDesc.position.set(this.detailsMargin, this.description.position.y + this.description.height + 10);
        this.curlvlDesc.interactive = true;
        this.curlvlDesc.buttonMode = true;
        this.curlvlDesc.parentObj = this;
        this.curlvlDesc.click = function () {this.parentObj.toggleSkillInfoPage()};
        this.detailsForeground.addChild(this.curlvlDesc);

        // description of the next level (shortened)
        this.nextlvlDesc = new PIXI.Text("", {fontSize: descriptionFontSize, fontStyle: 'italic', fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - this.detailsMargin * 2});
        this.nextlvlDesc.enabled = false;
        if (this.skill.achievedPoint < this.skill.maxPoint) {
            this.nextlvlDesc.text = "Next level: " + this.readMoreSplit(this.skill.pointDescription[this.skill.achievedPoint]);
            this.nextlvlDesc.enabled = true;
        }
        if (this.skill.achievedPoint == 0) this.nextlvlDesc.position.set(this.detailsMargin, this.description.position.y + this.description.height + 10);
        else this.nextlvlDesc.position.set(this.detailsMargin, this.curlvlDesc.position.y + this.curlvlDesc.height + 5);
        this.nextlvlDesc.interactive = true;
        this.nextlvlDesc.buttonMode = true;
        this.nextlvlDesc.parentObj = this;
        this.nextlvlDesc.click = function () {this.parentObj.toggleSkillInfoPage()};
        this.detailsForeground.addChild(this.nextlvlDesc);

        this.btnPosY = this.description.position.y + this.description.height + 10;
        if (this.nextlvlDesc.enabled) this.btnPosY = this.nextlvlDesc.position.y + this.nextlvlDesc.height + 15;
        else if (this.curlvlDesc.enabled) this.btnPosY = this.curlvlDesc.position.y + this.curlvlDesc.height + 15;

        var btnG = new PIXI.Graphics();
        btnG.lineStyle(1, 0x888888);
        btnG.beginFill(0x44cc44);
        btnG.drawRect(0, 0, 70, 26);
        btnG.endFill();

        var btnGHover = new PIXI.Graphics();
        btnGHover.lineStyle(1, 0x888888);
        btnGHover.beginFill(0x217821);
        btnGHover.drawRect(0, 0, 70, 26);
        btnGHover.endFill();

        // check if need to show endorse button
        var base64Url = localStorage.getItem("loginToken").split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var payload = JSON.parse(window.atob(base64));

        var showEndorseBtn = false;
        if (!this.self && this.skill.endorsement.find(obj => obj == payload.username) == undefined) showEndorseBtn = true;

        var btnInfoPosX = 0;
        var btnOffersPosX = 0;
        if (showEndorseBtn) {
            var btnEndorse = new PIXI.Sprite(btnG.generateTexture());

            var txtEndorse = new PIXI.Text("ENDORSE", {fontSize: 14, fill: 0x000000});
            txtEndorse.anchor.set(0.5, 0.5);
            txtEndorse.position.set(35,13);

            this.btnEndorseContainer = new PIXI.Container();
            this.btnEndorseContainer.addChild(btnEndorse, txtEndorse);
            this.btnEndorseContainer.position.set(detailsWidth - this.btnEndorseContainer.width - 10, this.btnPosY);
            this.btnEndorseContainer.interactive = true;
            this.btnEndorseContainer.buttonMode = true;
            this.btnEndorseContainer.parentObj = this;
            this.btnEndorseContainer
            .on('pointerover', function () {
                btnEndorse.texture = btnGHover.generateTexture();
                app.renderer.render(app.stage);
            })
            .on('pointerout', function () {
                btnEndorse.texture = btnG.generateTexture();
                app.renderer.render(app.stage);
            })
            .on('click', this.endorse);
            this.detailsForeground.addChild(this.btnEndorseContainer);
        }

        var btnInfo = new PIXI.Sprite(btnG.generateTexture());

        var txtInfo = new PIXI.Text("INFO", {fontSize: 14, fill: 0x000000});
        txtInfo.anchor.set(0.5, 0.5);
        txtInfo.position.set(35,13);

        this.btnInfoContainer = new PIXI.Container();
        this.btnInfoContainer.addChild(btnInfo, txtInfo);
        if (!showEndorseBtn) btnInfoPosX = (detailsWidth - this.btnInfoContainer.width) / 4;
        else btnInfoPosX = 10;
        this.btnInfoContainer.position.set(btnInfoPosX, this.btnPosY);
        this.detailsForeground.addChild(this.btnInfoContainer);

        var btnOffers = new PIXI.Sprite(btnG.generateTexture());

        var txtOffers = new PIXI.Text("OFFERS", {fontSize: 14, fill: 0x000000});
        txtOffers.anchor.set(0.5, 0.5);
        txtOffers.position.set(35,13);

        this.btnOffersContainer = new PIXI.Container();
        this.btnOffersContainer.addChild(btnOffers, txtOffers);
        if (!showEndorseBtn) btnOffersPosX = (detailsWidth - this.btnOffersContainer.width) * .75;
        else btnOffersPosX = (detailsWidth - this.btnOffersContainer.width) / 2;
        this.btnOffersContainer.position.set(btnOffersPosX, this.btnPosY);
        this.detailsForeground.addChild(this.btnOffersContainer);

        this.detailsBackground = new PIXI.Graphics();
        this.detailsBackground.beginFill(0xffffff);
        this.detailsBackground.drawRoundedRect(0, 0, detailsWidth, this.detailsForeground.height + this.detailsMargin * 2, 4);
        this.detailsBackground.endFill();

        this.details.addChild(this.detailsBackground);
        this.details.addChild(this.detailsForeground);

        //Initilaizing container
        this.container = new PIXI.Container();
        this.container.addChild(this.skillicon);

        this.container.addChild(this.skillborder);
        this.container.addChild(this.skillborder.levelinfo);
        if (this.skill.endorsement != undefined && this.skill.endorsement.length > 0) this.container.addChild(this.skillborder.endorsement);
        this.container.zOrder = 3;

        //setting size, position of objects in container
        this.skillicon.anchor.set(0.5, 0.5);
        this.skillborder.anchor.set(0.5, 0.5);
        this.skillborder.levelinfo.anchor.set(0.5, 0.5);

        this.skillicon.position.set(38.5, 38.5);
        this.skillborder.position.set(38.5, 38.5);

        this.skillborder.levelinfo.position.set(61, 63);
        this.skillborder.levelinfo.style.fill = 0xFFFFFF;

        this.details.position.set(74, 0);

        if (this.skill.achievedPoint == this.skill.maxPoint) {
          this.setFilter(this, nullFilter, maxPointFilter);
        } else if (this.skill.achievedPoint > 0){
          this.setFilter(this, nullFilter, notNullPointFilter);
        } else{
          this.setFilter(this, nullFilter, nullFilter);
        }

        //Adding events
        this.btnInfoContainer.interactive = true;
        this.btnInfoContainer.buttonMode = true;
        this.btnInfoContainer.parentObj = this;
        this.btnInfoContainer
                .on('pointerover', function () {
                        btnInfo.texture = btnGHover.generateTexture();
                        app.renderer.render(app.stage);
                        })
                .on('pointerout', function () {
                        btnInfo.texture = btnG.generateTexture();
                        app.renderer.render(app.stage);
                        })
                .on('click', function () {
                        this.parentObj.toggleSkillInfoPage();
                        });
        this.btnOffersContainer.interactive = true;
        this.btnOffersContainer.buttonMode = true;
        this.btnOffersContainer.parentObj = this;
        this.btnOffersContainer
                .on('pointerover', function () {
                        btnOffers.texture = btnGHover.generateTexture();
                        app.renderer.render(app.stage);
                        })
                .on('pointerout', function () {
                        btnOffers.texture = btnG.generateTexture();
                        app.renderer.render(app.stage);
                        })
                .on('click', function () {
                        this.parentObj.toggleSkillOffersPage();
                        });
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;
        this.skillborder.parentObj = this;
        this.skillborder
            .on('click', this.onClick)
            .on('rightclick', this.onRightClick);

        this.container.parentObj = this;
        this.container.interactive = true;
        this.container
            .on('pointerover', this.onButtonOver)
            .on('pointerout', this.onButtonOut);
    }

    // sets the filters
    setFilter(target, filter1, filter2){
      target.skillborder.filters = [filter1, filter2];
    }

    checkPoints(target){
      if (target.skill.achievedPoint == target.skill.maxPoint) {
        target.setFilter(target, nullFilter, maxPointFilter);
      } else if (this.skill.achievedPoint > 0) {
        target.setFilter(target, target.skillborder.filters[0], notNullPointFilter);
      } else{
        target.setFilter(target, target.skillborder.filters[0], nullFilter);
      }
    }

    // Increases skill level, if it hits max skill level, it resets the filter, and adds green glow to it (filter)
    onClick(event) {
        var that = this.parentObj; // that is the class
        if (!event.drag) {
            if (that.self) {
                var children = that.skill.children;

                // Increase skill level
                if (that.skill.achievedPoint < that.skill.maxPoint) {
                    change = true;
                    document.getElementById('submitBtn').innerText = "Save";
                    document.getElementById('submitBtn').href = "";
                    that.skill.achievedPoint++;
                    that.skillborder.levelinfo.text = (that.skill.achievedPoint + "/" + that.skill.maxPoint);

                    that.curlvlDesc.text = "Current level: " + that.readMoreSplit(that.skill.pointDescription[that.skill.achievedPoint - 1]);
                    if (that.skill.achievedPoint == 1) that.curlvlDesc.enabled = true;

                    if (that.skill.achievedPoint < that.skill.maxPoint) that.nextlvlDesc.text = "Next level: " + that.readMoreSplit(that.skill.pointDescription[that.skill.achievedPoint]);
                    else  {
                        that.nextlvlDesc.text = "";
                        that.nextlvlDesc.enabled = false;
                    }

                    that.nextlvlDesc.position.y = that.curlvlDesc.position.y + that.curlvlDesc.height + 5;

                    that.btnPosY = that.description.position.y + that.description.height + 10;
                    if (that.nextlvlDesc.enabled) that.btnPosY = that.nextlvlDesc.position.y + that.nextlvlDesc.height + 15;
                    else if (that.curlvlDesc.enabled) that.btnPosY = that.curlvlDesc.position.y + that.curlvlDesc.height + 15;

                    if (that.btnEndorseContainer != undefined) that.btnEndorseContainer.position.y = that.btnPosY;
                    that.btnInfoContainer.position.y = that.btnPosY;
                    that.btnOffersContainer.position.y = that.btnPosY;

                    that.detailsBackground.height = that.detailsForeground.height + that.detailsMargin * 2;
                }
                that.app.renderer.render(that.app.stage);
                that.refreshAvaliability();
            }
        }
    }

    // Decreases skill level
    onRightClick() {
        var that = this.parentObj;
        if (that.self) {
            var children = that.skill.children;

            // Decrease skill level
            if(that.skill.achievedPoint > 0)
            {
                change = true;
                document.getElementById('submitBtn').innerText = "Save";
                document.getElementById('submitBtn').href = "";
                that.skill.achievedPoint--;
                that.skillborder.levelinfo.text = (that.skill.achievedPoint + "/" + that.skill.maxPoint);

                if (that.skill.achievedPoint > 0) that.curlvlDesc.text = "Current level: " + that.readMoreSplit(that.skill.pointDescription[that.skill.achievedPoint - 1]);
                else {
                    that.curlvlDesc.text = "";
                    that.curlvlDesc.enabled = false;
                }

                that.nextlvlDesc.text = "Next level: " + that.readMoreSplit(that.skill.pointDescription[that.skill.achievedPoint]);
                if (that.skill.achievedPoint == that.skill.maxPoint - 1) that.nextlvlDesc.enabled = true;

                if (that.curlvlDesc.enabled) that.nextlvlDesc.position.y = that.curlvlDesc.position.y + that.curlvlDesc.height + 5;
                else that.nextlvlDesc.position.y = that.curlvlDesc.position.y;

                that.btnPosY = that.description.position.y + that.description.height + 10;
                if (that.nextlvlDesc.enabled) that.btnPosY = that.nextlvlDesc.position.y + that.nextlvlDesc.height + 15;
                else if (that.curlvlDesc.enabled) that.btnPosY = that.curlvlDesc.position.y + that.curlvlDesc.height + 15;

                if (that.btnEndorseContainer != undefined) that.btnEndorseContainer.position.y = that.btnPosY;
                that.btnInfoContainer.position.y = that.btnPosY;
                that.btnOffersContainer.position.y = that.btnPosY;

                that.detailsBackground.height = that.detailsForeground.height + that.detailsMargin * 2;
            }
            that.app.renderer.render(that.app.stage);
            that.refreshAvaliability();
        }
    }

    // Refreshes the clickable property of all the tree except for the root level, and sets the resets the filter to null (this blocks the functionality of the green filter on 5/5 skills for now on every level except the root, fix will be needed)
    refreshAvaliability(){
        for (var i = 0; i < this.skills.length; i++) {
            for (var j = 0; j < this.skills[i].parents.length; j++) {

                var par = this.skills.find(obj => obj.name == this.skills[i].parents[j]);
                if(par !== undefined) {
                    if(par.children.find(obj => obj.name == this.skills[i].name).minPoint > par.achievedPoint || par.itemcontainer.container.interactive == false){
                        var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
                        colorMatrixFilter.brightness(0.4);
                        this.skills[i].itemcontainer.skillicon.filters = [colorMatrixFilter];
                        this.skills[i].itemcontainer.skillborder.levelinfo.filters = [colorMatrixFilter];
                        this.setFilter(this.skills[i].itemcontainer, colorMatrixFilter, this.skills[i].itemcontainer.skillborder.filters[1]);
                        if (this.skills[i].itemcontainer.skillborder.endorsement != undefined) this.skills[i].itemcontainer.skillborder.endorsement.filters = [colorMatrixFilter];
                        this.skills[i].itemcontainer.skillborder.interactive = false;
                        this.skills[i].itemcontainer.skillborder.buttonMode = false;

                        this.skills[i].disabled = true;
                    }
                    else {
                        this.skills[i].itemcontainer.skillicon.filters = null;
                        this.skills[i].itemcontainer.skillborder.levelinfo.filters = null;
                        this.setFilter(this.skills[i].itemcontainer, nullFilter, this.skills[i].itemcontainer.skillborder.filters[1]);
                        if (this.skills[i].itemcontainer.skillborder.endorsement != undefined) this.skills[i].itemcontainer.skillborder.endorsement.filters = null;
                        this.skills[i].itemcontainer.container.interactive = true;
                        this.skills[i].itemcontainer.skillborder.interactive = true;
                        this.skills[i].itemcontainer.skillborder.buttonMode = true;

                        this.skills[i].disabled = false;
                    }
                }
            }
        }
        this.checkPoints(this);
    }

    // Adds hover animation to the skill, and shows the details box
    onButtonOver() {
        var that = this.parentObj;
        var skillborder = that.skillborder;
        var details = that.details;
        var container = this;

        // Brings up hovered container
        container.addChild(details);
        container.zOrder = 2;

        /*if (details.savedPosY != undefined) details.position.y = details.savedPosY;

        if (details.canvas != undefined) console.log(details.canvas.h);
        console.log(document.getElementById("pixiCanvas").height);
        if (details.savedPosY == undefined || details.canvasHeight != document.getElementById("pixiCanvas").height) {
            details.canvasHeight = document.getElementById("pixiCanvas").height;

            var bottomOfDetails = details.getGlobalPosition().y + details.height;

            if (bottomOfDetails > document.getElementById("pixiCanvas").height) {
                details.position.y = -(bottomOfDetails - document.getElementById("pixiCanvas").height + 10);
                if (details.getGlobalPosition().y < 10) details.position.y += 10 - details.getGlobalPosition().y;
                details.savedPosY = details.position.y;
            }
        }


        //if (bottomOfDetails > height) details.position.y = (details.initPos.y - details.getGlobalPosition().y) - (bottomOfDetails - this.parentObj.app.height + 10);
        //if (details.getGlobalPosition().y < 10) details.position.y = 10;

        var rightOfDetails = details.getGlobalPosition().x + details.width;
        if (rightOfDetails > this.parentObj.app.width) details.position.x = -details.width;*/

        that.app.renderer.render(that.app.stage);

        if (that.skill.achievedPoint == that.skill.maxPoint || that.skill.disabled) return;

        that.setFilter(that, hoverFilter, that.skillborder.filters[1]);

        that.app.renderer.render(that.app.stage);
    }

    // removes filters (this wrechs the green filter too) of the skill and removes the details box.
    onButtonOut() {
        var that = this.parentObj;
        var skillborder = that.skillborder;
        var details = that.details;
        var container = this;

        container.removeChild(details);
        container.zOrder = 4;

        that.app.renderer.render(that.app.stage);

        if (that.skill.achievedPoint == that.skill.maxPoint || that.skill.disabled) return;

        that.setFilter(that, nullFilter, that.skillborder.filters[1]);

        that.app.renderer.render(that.app.stage);
    }

    // enables the access to this skill (click and hover)
    enable () {
        this.skillborder.filters = [nullFilter, this.skillborder.filters[1]];
        this.skillicon.filters = null;
        this.skillborder.levelinfo.filters = null;
        if (this.skillborder.endorsement != undefined) this.skillborder.endorsement.filters = null;
        this.container.interactive = true;
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;

        this.app.renderer.render(this.app.stage);
    }

    // disables the access to this skill (click and hover)
    disable () {
        var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
        colorMatrixFilter.brightness(0.4);
        this.skillborder.filters = [colorMatrixFilter, this.skillborder.filters[1]];
        this.skillicon.filters = [colorMatrixFilter];
        this.skillborder.levelinfo.filters = [colorMatrixFilter];
        if (this.skillborder.endorsement != undefined) this.skillborder.endorsement.filters = [colorMatrixFilter];
        this.skillborder.interactive = false;
        this.skillborder.buttonMode = false;

        this.app.renderer.render(this.app.stage);
    }

    // this is the toggler for the details box
    toggleSkillOffersPage(){
        var modal = document.getElementById('skillpage');
        var header = document.getElementById('skillnameHeader');
        var span = document.getElementById("closeORModal");
        var globalskill = undefined;

        var skillname = this.skill.name;

        //HTTP Request for offer data
        var offerHttpRequest = new XMLHttpRequest();
            offerHttpRequest.open('POST', '/protected/skilldata', true);
            offerHttpRequest.setRequestHeader('Content-type', 'application/json');
            offerHttpRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
            offerHttpRequest.responseType = "json";


				//Listener, if response comes, it runs.
        offerHttpRequest.onreadystatechange = function() {
          if(offerHttpRequest.readyState == 4 && offerHttpRequest.status == 200) {
            if (offerHttpRequest.response !== undefined) {
              //Got the offer data, fill the offers table

              //Initialize table variables
              globalskill = offerHttpRequest.response;
              var offerTable = document.getElementById('offerTableBody');
              //initialize the request counts
              var beginnerCount = document.getElementById('beginnerCount');
              beginnerCount.innerHTML = globalskill.beginnerRequests.length;
              var intermediateCount = document.getElementById('intermediateCount');
              intermediateCount.innerHTML = globalskill.intermediateRequests.length;
              var advancedCount = document.getElementById('advancedCount');
              advancedCount.innerHTML = globalskill.advancedRequests.length;

              //Empty the table
              offerTable.innerHTML = "";

              offerTable.appendChild(createTableRow(["<b>Name</b>",
              "<b>Location</b>",
              "<b>Day</b>",
              "<b>Time</b>",
              "<b>Level</b>"]));
              //Filling the table
              for(var i=0; i<globalskill.offers.length; i++ )
              {
                if(true) //TODO, only higher level offers should appear
                {
                  offerTable.appendChild(createTableRow([globalskill.offers[i].username,
                    globalskill.offers[i].location,
                    globalskill.offers[i].teachingDay,
                    globalskill.offers[i].teachingTime,
                    globalskill.offers[i].achievedPoint]));
                  }
                }

                var addBeginnerRequest = document.getElementById('addBeginnerCount');
                addBeginnerRequest.onclick = function() {
                  //request for requests
                  var requestforrequests = new XMLHttpRequest();
                  requestforrequests.open('POST', '/protected/request', true);
                  requestforrequests.setRequestHeader('Content-type', 'application/json');
                  requestforrequests.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
                  requestforrequests.responseType = "json";

                  //if it returns
                  requestforrequests.onreadystatechange = function() {
                    if(requestforrequests.readyState == 4 && requestforrequests.status == 200) {
                      if(requestforrequests.response !== undefined)
                      {
                        alert(requestforrequests.response.message);
                        beginnerCount.innerHTML = (requestforrequests.response.sumRequest);
                      }
                    }
                  }

                  requestforrequests.send(
                    JSON.stringify({
                      name: skillname,
                      requestType: "beginner"
                    })
                  );
                }

                var addIntermediateRequest = document.getElementById('addIntermediateCount');
                addIntermediateRequest.onclick = function() {
                  //request for requests
                  var requestforrequests = new XMLHttpRequest();
                  requestforrequests.open('POST', '/protected/request', true);
                  requestforrequests.setRequestHeader('Content-type', 'application/json');
                  requestforrequests.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
                  requestforrequests.responseType = "json";

                  //if it returns
                  requestforrequests.onreadystatechange = function() {
                    if(requestforrequests.readyState == 4 && requestforrequests.status == 200) {
                      if(requestforrequests.response !== undefined)
                      {
                        alert(requestforrequests.response.message);
                        //console.log(requestforrequests.response);
                        intermediateCount.innerHTML = (requestforrequests.response.sumRequest);

                      }
                    }
                  }

                  requestforrequests.send(
                    JSON.stringify({
                      name: skillname,
                      requestType: "intermediate"
                    })
                  );
                }

                var addAdvancedRequest = document.getElementById('addAdvancedCount');
                addAdvancedRequest.onclick = function() {
                  //request for requests
                  var requestforrequests = new XMLHttpRequest();
                  requestforrequests.open('POST', '/protected/request', true);
                  requestforrequests.setRequestHeader('Content-type', 'application/json');
                  requestforrequests.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
                  requestforrequests.responseType = "json";

                  //if it returns
                  requestforrequests.onreadystatechange = function() {
                    if(requestforrequests.readyState == 4 && requestforrequests.status == 200) {
                      if(requestforrequests.response !== undefined)
                      {
                        alert(requestforrequests.response.message);
                        //console.log(requestforrequests.response);
                        advancedCount.innerHTML = (requestforrequests.response.sumRequest);

                      }
                    }
                  }
                  requestforrequests.send(
                    JSON.stringify({
                      name: skillname,
                      requestType: "advanced"
                    })
                  );
                }

                //Display the tables Window if all table has been loaded
                modal.style.display = "block";
              }
            }
          }
				offerHttpRequest.send(
					JSON.stringify({
						name: skillname
					})
				);
        //Adding trainings to table
        var trainingTable = document.getElementById('trainingTableBody');
        var requestTable = document.getElementById('requestTableBody');


        function createTableRow(createTableData)
        {
            //Creating an offer tablerow
            let row = document.createElement('tr');
            for (var i = 0; i < createTableData.length; i++) {
              let col = document.createElement('td');
              col.innerHTML = createTableData[i];
              row.appendChild(col);
            }
            return row;
        }

        header.innerText = this.skill.name;

        span.onclick = function() {
            modal.style.display = "none";
        }
        //  When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // this is the toggler for the infomodal, this runs on "info" click.
    toggleSkillInfoPage () {
        var modal = document.getElementById('skillinfopage');
        var header = document.getElementById('infoSkillnameHeader');
        var span = document.getElementById("closeInfoModal");
        var desc = document.getElementById("imDesc");
        var wikiURL = document.getElementById("imWiki");
        var categ = document.getElementById("imCateg");
        var maxP = document.getElementById("imMaxPoint");
        var points = document.getElementById("imPoints");
        var parents = document.getElementById("imParents");
        var children = document.getElementById("imChildren");
        var trainings = document.getElementById("imTrainings");

        var skillname = this.skill.name;
        header.innerText = this.skill.name;

        desc.innerText = this.skill.description;
        wikiURL.href = this.skill.descriptionWikipediaURL;
        wikiURL.target = '_blank';
        categ.innerText = this.skill.categoryName;
        maxP.innerText = this.skill.maxPoint;

        var pointDesc = '';
        for (var i = 0; i < this.skill.pointDescription.length; ++i) {
            if (i + 1 == this.skill.achievedPoint) pointDesc += "<li><i>" + this.skill.pointDescription[i] + " (current)</i></li>";
            else pointDesc += "<li>" + this.skill.pointDescription[i] + "</li>";
        }
        //pointDesc = pointDesc.substring(0, pointDesc.length - 2);
        points.innerHTML = pointDesc;

        var parentNames = '';
        for (var i = 0; i < this.skill.parents.length; ++i) parentNames += this.skill.parents[i] + ', ';
        if (parentNames != '') {
            parentNames = parentNames.substring(0, parentNames.length - 2);
            parents.innerText = parentNames;
        } else {
            parents.innerText = '-';
        }

        var childNames = '';
        for (var i = 0; i < this.skill.children.length; ++i) {
            childNames += this.skill.children[i].name + ' (minimum point: ' + this.skill.children[i].minPoint;
            if (!this.skill.children[i].recommended) childNames += ', required), ';
            else childNames += '), ';
        }
        if (childNames != '') {
            childNames = childNames.substring(0, childNames.length - 2);
            children.innerText = childNames;
        } else children.innerText = '-';

        var trainingNames = '';
        for (var i = 0; i < this.skill.trainings.length; ++i) {
            if (this.skill.trainings[i].URL == undefined) trainingNames += this.skill.trainings[i].name + ', ';
            else trainingNames += "<a target='_blank' href = '" + this.skill.trainings[i].URL + "'>" + this.skill.trainings[i].name + '</a>, ';
        }
        if (trainingNames != '') {
            trainingNames = trainingNames.substring(0, trainingNames.length - 2);
            trainings.innerHTML = trainingNames;
        } else trainings.innerText = '-';

        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        modal.style.display = "block";
    }

    // endorses the skill of an other user. this runs on the "endorse" click.
    endorse () {
        var that = this.parentObj;

        var req = new XMLHttpRequest();
        req.open('POST', '/protected/endorse', true);
        req.setRequestHeader('Content-type', 'application/json');
        req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
        req.responseType = "json";
        req.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200) {
              if (this.response.success) {
                  that.showBottomAlert('success', "Skill endorsed.");

                  that.skill.endorsement = this.response.endorsement;
                  that.skillborder.endorsement.text = "+" + this.skill.endorsement.length;
              }
              else {that.showBottomAlert('warning', "Skill was already endorsed.");}
            }
        };

        var data = {
            skillName: that.skill.name,
            username: that.username
        };

        req.send(JSON.stringify(data));
    }

    readMoreSplit (text, long = false) {
        var spaceCount = 15;
        if (long) spaceCount = 25;

        if (text.split(" ", spaceCount) != undefined) {
            var index = text.split(" ", spaceCount).join(" ").length;
            text = text.substring(0, index) + "...";
        }

        return text;
    }

    // showing bootstrap alert line (every type except danger closes itself after 3 seconds)
    showBottomAlert (type, msg) { // type: success, danger, warning, ...
        document.getElementById('bottomAlert').className = 'alert alert-dismissible alert-' + type;
    	document.getElementById('bottomAlertMsg').innerText = msg;

    	$('#bottomAlert').show();

        if (type != 'danger') setTimeout(function () {$('#bottomAlert').hide();}, 3000);
    }
}
