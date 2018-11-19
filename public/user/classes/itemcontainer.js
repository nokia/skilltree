/*
*   togglechildren not working
*/

class ItemContainer {
    constructor(app, skills, skillName) {
        this.app = app;
        this.skills = skills;
        this.skill = skills.find(obj => obj.name == skillName);

        //Creating images
        this.skillicon = new PIXI.Sprite(PIXI.loader.resources[this.skill.skillIcon].texture); //100x100
        this.skillborder = new PIXI.Sprite(PIXI.loader.resources["pictures/skillborder.png"].texture); //116x116
        this.tick = new PIXI.Sprite(PIXI.loader.resources["pictures/tick.png"].texture);

        //Setting border variables
        this.skillborder.levelinfo = new PIXI.Text(this.skill.achievedPoint + "/" + this.skill.maxPoint);

        //Creating details page
        var detailsWidth = 240;
        var detailsMargin = 10;
        var nameFontSize = 20;
        var descriptionFontSize = 12;

        this.details = new PIXI.Container();

        var detailsForeground = new PIXI.Container();
        var name = new PIXI.Text(this.skill.name, {fontSize: nameFontSize, fill: 0x000000});
        name.position.set(10, 10);
        detailsForeground.addChild(name);

        var description = new PIXI.Text(this.skill.description, {fontSize: descriptionFontSize, fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - detailsMargin * 2 });
        description.position.set(detailsMargin, detailsMargin * 2 + nameFontSize);
        detailsForeground.addChild(description);

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

        var btn1 = new PIXI.Sprite(btnG.generateTexture());

        var txt1 = new PIXI.Text("TRAINING", {fontSize: 14, fill: 0x000000});
        txt1.anchor.set(0.5, 0.5);
        txt1.position.set(35,13);

        var btn1Container = new PIXI.Container();
        btn1Container.addChild(btn1, txt1);
        btn1Container.position.set(  (detailsWidth - btn1Container.width)/2  , description.position.y + description.height + 10);
        btn1Container.interactive = true;
        btn1Container.buttonMode = true;
        btn1Container.parentObj = this;
        btn1Container
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
        detailsForeground.addChild(btn1Container);

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

        var detailsBackground = new PIXI.Graphics();
        detailsBackground.beginFill(0xffffff);
        detailsBackground.drawRoundedRect(0, 0, detailsWidth, detailsForeground.height + detailsMargin * 2, 4);
        detailsBackground.endFill();

        this.details.addChild(detailsBackground);
        this.details.addChild(detailsForeground);

        //Initilaizing container
        this.container = new PIXI.Container();
        this.container.addChild(this.skillicon);

        this.container.addChild(this.tick);
        this.container.addChild(this.skillborder);
        this.container.addChild(this.skillborder.levelinfo);
        this.container.zOrder = 1;

        //Setting size, position of objects in container
        this.skillicon.anchor.set(0.5, 0.5);
        this.skillborder.anchor.set(0.5, 0.5);
        this.skillborder.levelinfo.anchor.set(0.5,0.5);

        this.skillicon.position.set(60, 60);
        this.skillborder.position.set(60, 60);

        this.skillborder.levelinfo.position.set(96, 100);
        this.skillborder.levelinfo.scale.set(0.6);
        this.skillborder.levelinfo.style.fill = 0xFFFFFF;

        this.details.position.set(116, 0);

        // if it's already maxed out add the tick
        if (this.skill.achievedPoint == this.skill.maxPoint) {
            //this.skillborder.filters = [new PIXI.filters.GlowFilter(10, 4, 4, 0xFF4000, 1)];
            this.tick.alpha = 1;
        } else this.tick.alpha = 0;


        this.tick.anchor.set(0.5,0.5);
        this.tick.position.set(60,60);

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



    onClick(event) {
        if (!event.drag) {
            var children = this.parentObj.skill.children;
            this.parentObj.refreshAvaliability();
            //this.parentObj.toggleChildren(children, this.parentObj.skill.achievedPoint, true);

            // Increase skill level
            if (this.parentObj.skill.achievedPoint < this.parentObj.skill.maxPoint) {
                this.parentObj.skill.achievedPoint++;
                this.levelinfo.text = (this.parentObj.skill.achievedPoint + "/" + this.parentObj.skill.maxPoint);
                if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint) {
                    this.parentObj.tick.alpha = 1;
                    this.parentObj.skillborder.filters = null;
                }

                //save level change (kell?)
                //this.parentObj.skills.find(obj => obj.name == this.parentObj.skill.name).achievedPoint++;
            }

            this.parentObj.app.renderer.render(this.parentObj.app.stage);
        }
    }

    onRightClick() {
        var children = this.parentObj.skill.children;
        //this.parentObj.toggleChildren(children, this.parentObj.skill.achievedPoint, false);
        this.parentObj.refreshAvaliability();

        // Decrease skill level
        if(this.parentObj.skill.achievedPoint > 0)
        {
            this.parentObj.skill.achievedPoint--;
            this.levelinfo.text = (this.parentObj.skill.achievedPoint + "/" + this.parentObj.skill.maxPoint);

            //save level change (kell?)
            //this.parentObj.skills.find(obj => obj.name == this.parentObj.skill.name).achievedPoint--;
        } else return;
        this.parentObj.tick.alpha = 0;
        this.filters = [new PIXI.filters.GlowFilter(10,4,4, 0xFFBF00, 1)];

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }

    refreshAvaliability(){
      for (var i = 0; i < skills.length; i++) {
        for (var j = 0; j < skills[i].parents.length; j++) {
          if(skills.find(obj => obj.name == skills[i].parents[j].name)){
            if(skills[i].parents[j].children.find(obj => obj.name == skills[i].name).minPoint > skills[i].achievedPoint){
              var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
              colorMatrixFilter.brightness(0.4);
              skills[i].itemcontainer.container.filters = [colorMatrixFilter];
              skills[i].itemcontainer.container.interactive = false;
              skills[i].itemcontainer.skillborder.interactive = false;
              skills[i].itemcontainer.skillborder.buttonMode = false;
            }
            else{
              skills[i].itemcontainer.container.filters = null;
              skills[i].itemcontainer.container.interactive = true;
              skills[i].itemcontainer.skillborder.interactive = true;
              skills[i].itemcontainer.skillborder.buttonMode = true;
            }
          }
        }
      }
    }

    toggleChildren (children, achievedPoint, enable) {
        if (children !== undefined) {
            for (var k = 0; k < children.length; ++k) {
                var child = this.skills.find(obj => obj.name == children[k].name);

                if (child != undefined && !children[k].recommended) {
                    var change = false;
                    if (enable && achievedPoint == children[k].minPoint - 1) {
                        for (var j = 0; child.lowAPParents !== undefined && j < child.lowAPParents.length; ++j) {
                            if (child.lowAPParents[j] == this.skill.name) {
                                child.lowAPParents.splice(j, 1);

                                if (child.lowAPParents.length == 0) {
                                    child.itemcontainer.container.filters = null;
                                    child.itemcontainer.container.interactive = true;
                                    child.itemcontainer.skillborder.interactive = true;
                                    child.itemcontainer.skillborder.buttonMode = true;
                                }
                            }
                        }
                        change = true;
                    } else if (!enable && achievedPoint == children[k].minPoint) {
                        if (child.lowAPParents === undefined) {
                            child.lowAPParents = new Array();
                        }

                        if (child.lowAPParents.length == 0) {
                            var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
                            colorMatrixFilter.brightness(0.4);
                            child.itemcontainer.container.filters = [colorMatrixFilter];
                            child.itemcontainer.container.interactive = false;
                            child.itemcontainer.skillborder.interactive = false;
                            child.itemcontainer.skillborder.buttonMode = false;
                        }

                        if (child.lowAPParents.find(obj => obj == this.skill.name) == undefined) {
                            child.lowAPParents.push(this.skill.name);
                        }
                        change = true;
                    }

                    if (change) this.toggleChildren(child.children, enable);
                }
            }
        }
    }

    onButtonOver() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        // Brings up hovered container
        container.addChild(details);
        container.zOrder = 0;

        this.parentObj.app.renderer.render(this.parentObj.app.stage);

        if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint) return;
        skillborder.filters = [new PIXI.filters.GlowFilter(10,4,4, 0xFFBF00, 1)];

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }

    onButtonOut() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        container.removeChild(details);
        container.zOrder = 1;

        this.parentObj.app.renderer.render(this.parentObj.app.stage);

        if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint) return;
        skillborder.filters = null;

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }


    enable () {
        this.container.filters = null;
        this.container.interactive = true;
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;

        this.app.renderer.render(this.app.stage);
    }

    disable () {
        var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
        colorMatrixFilter.brightness(0.4);
        this.container.filters = [colorMatrixFilter];
        this.container.interactive = false;
        this.skillborder.interactive = false;
        this.skillborder.buttonMode = false;

        this.app.renderer.render(this.app.stage);
    }

    toggleSkillDetailsPage(){
        var modal = document.getElementById('skillpage');
        var header = document.getElementById('skillnameHeader');
        var span = document.getElementsByClassName("modalClose")[0];

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

        modal.style.display = "block";
    }
}
