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
//      this.skillborder_maxpoint = new PIXI.Sprite(PIXI.loader.resources["pictures/skillborder_maxpoint.png"].texture); //116x116

        //setting border variables
        this.skillborder.levelinfo = new PIXI.Text(this.skill.achievedPoint + "/" + this.skill.maxPoint);
        this.skillborder.levelinfo.scale.set(.5);

//      this.skillborder_maxpoint.levelinfo = new PIXI.Text(this.skill.achievedPoint + "/" + this.skill.maxPoint);
//      this.skillborder_maxpoint.levelinfo.scale.set(.5);

        if (this.skill.endorsement != undefined && this.skill.endorsement.length > 0) {
            this.skillborder.endorsement = new PIXI.Text("+" + this.skill.endorsement.length);
            this.skillborder.endorsement.scale.set(.5);
            this.skillborder.endorsement.position.set(10, 50);
            this.skillborder.endorsement.style.fill = 0xFFFFFF;
        }

        // Creating details page
        var detailsWidth = 300;
        this.detailsMargin = 10;
        var nameFontSize = 20;
        var descriptionFontSize = 12;

        this.details = new PIXI.Container();

        this.detailsForeground = new PIXI.Container();
        var name = new PIXI.Text(this.skill.name, {fontSize: nameFontSize, fill: 0x000000});
        name.position.set(10, 10);
        this.detailsForeground.addChild(name);

        this.description = new PIXI.Text(this.skill.description, {fontSize: descriptionFontSize, fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - this.detailsMargin * 2 });
        this.description.position.set(this.detailsMargin, this.detailsMargin * 2 + nameFontSize);
        this.detailsForeground.addChild(this.description);
        this.detailsForeground.zOrder = 1;

        this.curlvlDesc = new PIXI.Text("", {fontSize: descriptionFontSize, fontStyle: 'italic', fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - this.detailsMargin * 2});
        this.curlvlDesc.enabled = false;
        if (this.skill.achievedPoint > 0) {
            this.curlvlDesc.text = "Current level: " + this.skill.pointDescription[this.skill.achievedPoint - 1];
            this.curlvlDesc.enabled = true;
        }
        this.curlvlDesc.position.set(this.detailsMargin, this.description.position.y + this.description.height + 10);
        this.detailsForeground.addChild(this.curlvlDesc);

        this.nextlvlDesc = new PIXI.Text("", {fontSize: descriptionFontSize, fontStyle: 'italic', fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - this.detailsMargin * 2});
        this.nextlvlDesc.enabled = false;
        if (this.skill.achievedPoint < this.skill.maxPoint) {
            this.nextlvlDesc.text = "Next level: " + this.skill.pointDescription[this.skill.achievedPoint];
            this.nextlvlDesc.enabled = true;
        }
        if (this.skill.achievedPoint == 0) this.nextlvlDesc.position.set(this.detailsMargin, this.description.position.y + this.description.height + 10);
        else this.nextlvlDesc.position.set(this.detailsMargin, this.curlvlDesc.position.y + this.curlvlDesc.height + 5);
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
        var btn1PosX = 0;
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
        this.detailsForeground.addChild(this.btnInfoContainer);

        var btn1 = new PIXI.Sprite(btnG.generateTexture());

        var txt1 = new PIXI.Text("OFFERS", {fontSize: 14, fill: 0x000000});
        txt1.anchor.set(0.5, 0.5);
        txt1.position.set(35,13);

        this.btn1Container = new PIXI.Container();
        this.btn1Container.addChild(btn1, txt1);
        if (this.self) btn1PosX = (detailsWidth - this.btn1Container.width) * .75;
        else btn1PosX = (detailsWidth - this.btn1Container.width) / 2;
        this.btn1Container.position.set(btn1PosX, this.btnPosY);
        this.btn1Container.interactive = true;
        this.btn1Container.buttonMode = true;
        this.btn1Container.parentObj = this;
        this.btn1Container
                .on('pointerover', function () {
                        btn1.texture = btnGHover.generateTexture();
                        app.renderer.render(app.stage);
                        })
                .on('pointerout', function () {
                        btn1.texture = btnG.generateTexture();
                        app.renderer.render(app.stage);
                        })
                .on('click', function () {
                        this.parentObj.toggleSkillDetailsPage();
                        });
        this.detailsForeground.addChild(this.btn1Container);

        /*
        var btn2 = new PIXI.Sprite(btnG.generateTexture());

        var txt2 = new PIXI.Text("REQUEST", {fontSize: 14, fill: 0x000000});
        txt2.anchor.set(0.5, 0.5);
        txt2.position.set(35, 13);

        var btn2Container = new PIXI.Container();
        btn2Container.addChild(btn2, txt2);
        btn2Container.position.set(detailsWidth - detailsMargin - 20 - btn2Container.width, description.position.y + description.height + 10);
        btn2Container.interactive = true;
        btn2Container.buttonMode = true;
        btn2Container.on('pointerover', function () {
            btn2.texture = btnGHover.generateTexture();
            app.renderer.render(app.stage);
        });
        btn2Container.on('pointerout', function () {
            btn2.texture = btnG.generateTexture();
            app.renderer.render(app.stage);
        });
        detailsForeground.addChild(btn2Container);
        */
        /*// Temporary link
        if (skillName == 0) {
            var link = new Link("Nokia website", "https://nokia.com", {fontSize: 12, fill: 0x0000ff}, true);
            link.position.set(detailsMargin, btn1Container.position.y + btn1Container.height + 7);
            detailsForeground.addChild(link);
        }
        //*/

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
        if (!event.drag) {
            if (this.parentObj.self) {
                var children = this.parentObj.skill.children;

                // Increase skill level
                if (this.parentObj.skill.achievedPoint < this.parentObj.skill.maxPoint) {
                    change = true;
                    document.getElementById('submitBtn').innerText = "Save";
                    document.getElementById('submitBtn').href = "";
                    this.parentObj.skill.achievedPoint++;
                    this.levelinfo.text = (this.parentObj.skill.achievedPoint + "/" + this.parentObj.skill.maxPoint);

                    this.parentObj.curlvlDesc.text = "Current level: " + this.parentObj.skill.pointDescription[this.parentObj.skill.achievedPoint - 1];
                    if (this.parentObj.skill.achievedPoint == 1) this.parentObj.curlvlDesc.enabled = true;

                    if (this.parentObj.skill.achievedPoint < this.parentObj.skill.maxPoint) this.parentObj.nextlvlDesc.text = "Next level: " + this.parentObj.skill.pointDescription[this.parentObj.skill.achievedPoint];
                    else  {
                        this.parentObj.nextlvlDesc.text = "";
                        this.parentObj.nextlvlDesc.enabled = false;
                    }

                    this.parentObj.nextlvlDesc.position.y = this.parentObj.curlvlDesc.position.y + this.parentObj.curlvlDesc.height + 5;

                    this.parentObj.btnPosY = this.parentObj.description.position.y + this.parentObj.description.height + 10;
                    if (this.parentObj.nextlvlDesc.enabled) this.parentObj.btnPosY = this.parentObj.nextlvlDesc.position.y + this.parentObj.nextlvlDesc.height + 15;
                    else if (this.parentObj.curlvlDesc.enabled) this.parentObj.btnPosY = this.parentObj.curlvlDesc.position.y + this.parentObj.curlvlDesc.height + 15;

                    if (this.parentObj.btnEndorseContainer != undefined) this.parentObj.btnEndorseContainer.position.y = this.parentObj.btnPosY;
                    this.parentObj.btnInfoContainer.position.y = this.parentObj.btnPosY;
                    this.parentObj.btn1Container.position.y = this.parentObj.btnPosY;

                    this.parentObj.detailsBackground.height = this.parentObj.detailsForeground.height + this.parentObj.detailsMargin * 2;
                }
                this.parentObj.app.renderer.render(this.parentObj.app.stage);
                this.parentObj.refreshAvaliability();
            }
        }
    }

    // Decreases skill level
    onRightClick() {
        if (this.parentObj.self) {
            var children = this.parentObj.skill.children;

            // Decrease skill level
            if(this.parentObj.skill.achievedPoint > 0)
            {
                change = true;
                document.getElementById('submitBtn').innerText = "Save";
                document.getElementById('submitBtn').href = "";
                this.parentObj.skill.achievedPoint--;
                this.levelinfo.text = (this.parentObj.skill.achievedPoint + "/" + this.parentObj.skill.maxPoint);

                if (this.parentObj.skill.achievedPoint > 0) this.parentObj.curlvlDesc.text = "Current level: " + this.parentObj.skill.pointDescription[this.parentObj.skill.achievedPoint - 1];
                else {
                    this.parentObj.curlvlDesc.text = "";
                    this.parentObj.curlvlDesc.enabled = false;
                }

                this.parentObj.nextlvlDesc.text = "Next level: " + this.parentObj.skill.pointDescription[this.parentObj.skill.achievedPoint];
                if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint - 1) this.parentObj.nextlvlDesc.enabled = true;

                if (this.parentObj.curlvlDesc.enabled) this.parentObj.nextlvlDesc.position.y = this.parentObj.curlvlDesc.position.y + this.parentObj.curlvlDesc.height + 5;
                else this.parentObj.nextlvlDesc.position.y = this.parentObj.curlvlDesc.position.y;

                this.parentObj.btnPosY = this.parentObj.description.position.y + this.parentObj.description.height + 10;
                if (this.parentObj.nextlvlDesc.enabled) this.parentObj.btnPosY = this.parentObj.nextlvlDesc.position.y + this.parentObj.nextlvlDesc.height + 15;
                else if (this.parentObj.curlvlDesc.enabled) this.parentObj.btnPosY = this.parentObj.curlvlDesc.position.y + this.parentObj.curlvlDesc.height + 15;

                if (this.parentObj.btnEndorseContainer != undefined) this.parentObj.btnEndorseContainer.position.y = this.parentObj.btnPosY;
                this.parentObj.btnInfoContainer.position.y = this.parentObj.btnPosY;
                this.parentObj.btn1Container.position.y = this.parentObj.btnPosY;

                this.parentObj.detailsBackground.height = this.parentObj.detailsForeground.height + this.parentObj.detailsMargin * 2;
            }
            this.parentObj.app.renderer.render(this.parentObj.app.stage);
            this.parentObj.refreshAvaliability();
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
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        // Brings up hovered container
        container.addChild(details);
        container.zOrder = 2;

        if (details.savedPos != undefined) details.position.y = details.savedPos.y;

        if (details.canvas != undefined) console.log(details.canvas.h);
        console.log(document.getElementById("pixiCanvas").height);
        if (details.savedPos == undefined || details.canvas.h != document.getElementById("pixiCanvas").height) {
            details.canvas.h = document.getElementById("pixiCanvas").height;

            var bottomOfDetails = details.getGlobalPosition().y + details.height;

            if (bottomOfDetails > document.getElementById("pixiCanvas").height) {
                details.position.y = -(bottomOfDetails - document.getElementById("pixiCanvas").height + 10);
                if (details.getGlobalPosition().y < 10) details.position.y += 10 - details.getGlobalPosition().y;
                details.savedPos.y = details.position.y;
            }
        }


        //if (bottomOfDetails > height) details.position.y = (details.initPos.y - details.getGlobalPosition().y) - (bottomOfDetails - this.parentObj.app.height + 10);
        //if (details.getGlobalPosition().y < 10) details.position.y = 10;

        var rightOfDetails = details.getGlobalPosition().x + details.width;
        if (rightOfDetails > this.parentObj.app.width) details.position.x = -details.width;

        this.parentObj.app.renderer.render(this.parentObj.app.stage);

        if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint || this.parentObj.skill.disabled) return;

        this.parentObj.setFilter(this.parentObj, hoverFilter, this.parentObj.skillborder.filters[1]);

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }

    // removes filters (this wrechs the green filter too) of the skill and removes the details box.
    onButtonOut() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        container.removeChild(details);
        container.zOrder = 4;

        this.parentObj.app.renderer.render(this.parentObj.app.stage);

        if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint || this.parentObj.skill.disabled) return;

        this.parentObj.setFilter(this.parentObj, nullFilter, this.parentObj.skillborder.filters[1]);

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
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
    toggleSkillDetailsPage(){
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

              offerTable.appendChild( createTableRow( "Name",
              "Location",
              "Day",
              "Time",
              "Level",
              "divTableHead") );
              //Filling the table
              for(var i=0; i<globalskill.offers.length; i++ )
              {
                if(true) //TODO, only higher level offers should appear
                {
                  offerTable.appendChild( createTableRow( globalskill.offers[i].username,
                    globalskill.offers[i].location,
                    globalskill.offers[i].teachingDay,
                    globalskill.offers[i].teachingTime,
                    globalskill.offers[i].achievedPoint,
                    "divTableCell") );
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
                displayWindow();

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


        function createTableRow( data1, data2, data3, data4, data5, classname )
        {
            //Creating an offer tablerow
            var Row = document.createElement('div');
            Row.className = "divTableRow";


            if(data1 !== undefined)
            {
            var Column1 = document.createElement('div');
            Column1.className = classname;
            Column1.innerHTML = data1;
            Row.appendChild(Column1);
            }

            if(data2 !== undefined)
            {
            var Column2 = document.createElement('div');
            Column2.className = classname;
            Column2.innerHTML = data2;
            Row.appendChild(Column2);
            }

            if(data3 !== undefined)
            {
            var Column3 = document.createElement('div');
            Column3.className = classname;
            Column3.innerHTML = data3;
            Row.appendChild(Column3);
            }

            if(data4 !== undefined)
            {
            var Column4 = document.createElement('div');
            Column4.className = classname;
            Column4.innerHTML = data4;
            Row.appendChild(Column4);
            }

            if(data5 !== undefined)
            {
            var Column5 = document.createElement('div');
            Column5.className = classname;
            Column5.innerHTML = data5;
            Row.appendChild(Column5);
            }

            return Row;
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
        function displayWindow(){
            modal.style.display = "block";
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
        for (var i = 0; i < this.skill.pointDescription.length; ++i) pointDesc += "<li>" + this.skill.pointDescription[i] + "</li>";
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

    addBeginnerRequest() {
        //console.log("clicked");
    }

    // endorses the skill of an other user. this runs on the "endorse" click.
    endorse () {
        var req = new XMLHttpRequest();
        req.open('POST', '/protected/endorse', true);
        req.setRequestHeader('Content-type', 'application/json');
        req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
        req.responseType = "json";
        req.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200) {

            }
        };

        var data = {
            skillName: this.parentObj.skill.name,
            username: this.parentObj.username
        };

        req.send(JSON.stringify(data));
    }
}
