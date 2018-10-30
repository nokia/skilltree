class ItemContainer {
    constructor(app, treeData, userData, treeID, skillID) {
        this.app = app;
        this.treeData = treeData; // only this tree's data
        this.userData = userData;
        this.skillData = treeData.skills[skillID];
        this.skillData.treeID = treeID;
        this.skillData.skillLevel = this.getSkillLevel(userData, skillID);

        //Creating images
        this.skillicon = new PIXI.Sprite(app.localLoader.resources[this.skillData.skillIcon].texture); //100x100
        this.skillborder = new PIXI.Sprite(PIXI.loader.resources["pictures/skillborder.png"].texture); //116x116
        this.tick = new PIXI.Sprite(PIXI.loader.resources["pictures/tick.png"].texture);

        //Setting border variables
        this.skillborder.levelinfo = new PIXI.Text(this.skillData.skillLevel + "/" + this.skillData.maxSkillLevel);

        //Creating details page
        var detailsWidth = 240;
        var detailsMargin = 10;
        var nameFontSize = 20;
        var descriptionFontSize = 12;

        this.details = new PIXI.Container();

        var detailsForeground = new PIXI.Container();
        var name = new PIXI.Text(this.skillData.name, {fontSize: nameFontSize, fill: 0x000000});
        name.position.set(10, 10);
        detailsForeground.addChild(name);

        var description = new PIXI.Text(this.skillData.description, {fontSize: descriptionFontSize, fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - detailsMargin * 2 });
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

        var txt1 = new PIXI.Text("OFFER", {fontSize: 14, fill: 0x000000});
        txt1.anchor.set(0.5, 0.5);
        txt1.position.set(35,13);

        var btn1Container = new PIXI.Container();
        btn1Container.addChild(btn1, txt1);
        btn1Container.position.set(detailsMargin + 20, description.position.y + description.height + 10);
        btn1Container.interactive = true;
        btn1Container.buttonMode = true;
        btn1Container.on('pointerover', function () {
            btn1.texture = btnGHover.generateTexture();
            app.renderer.render(app.stage);
        });
        btn1Container.on('pointerout', function () {
            btn1.texture = btnG.generateTexture();
            app.renderer.render(app.stage);
        });
        detailsForeground.addChild(btn1Container);

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
            console.log(btn2);
            btn2.texture = btnGHover.generateTexture();
            app.renderer.render(app.stage);
        });
        btn2Container.on('pointerout', function () {
            btn2.texture = btnG.generateTexture();
            app.renderer.render(app.stage);
        });
        detailsForeground.addChild(btn2Container);

        // Temporary link
        if (skillID == 0) {
            var link = new Link("Nokia website", "https://nokia.com", {fontSize: 12, fill: 0x0000ff}, true);
            link.position.set(detailsMargin, btn1Container.position.y + btn1Container.height + 7);
            detailsForeground.addChild(link);
        }
        //

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
        if (this.skillData.skillLevel == this.skillData.maxSkillLevel) {
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
            .on('pointerout', this.onButtonOut)
            .on('pointerdown', this.onDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);
    }

    onClick(event) {
        if (!event.drag) {
            // Enable children which doesn't have other parents with 0 skill level
            var children = this.parentObj.skillData.children;

            this.parentObj.toggleChildren(children, true);

            // Increase skill level
            if (this.parentObj.skillData.skillLevel < this.parentObj.skillData.maxSkillLevel) {
                this.parentObj.skillData.skillLevel++;
                this.levelinfo.text = (this.parentObj.skillData.skillLevel + "/" + this.parentObj.skillData.maxSkillLevel);
                if (this.parentObj.skillData.skillLevel == this.parentObj.skillData.maxSkillLevel) {
                    //this.filters = [new PIXI.filters.GlowFilter(10, 4, 4, 0xFF4000, 1)];
                    //this.parentObj.container.removeChild(this.parentObj.details);
                    this.parentObj.tick.alpha = 1;
                    this.parentObj.skillborder.filters = null;
                }

                //save level change
                if (this.parentObj.userData.skills.find(obj => obj.skillID == this.parentObj.skillData.skillID) == undefined) {
                    this.parentObj.userData.skills.push({skillID: this.parentObj.skillData.skillID, skillLevel: 0});
                }
                this.parentObj.userData.skills.find(obj => obj.skillID == this.parentObj.skillData.skillID).skillLevel++;

                // sending new skillLevel to server
                var httpRequest = new XMLHttpRequest();
                var data = new Array();
                data.push({treeID: this.parentObj.skillData.treeID, skillID: this.parentObj.skillData.skillID, skillLevel: this.parentObj.skillData.skillLevel});

                httpRequest.open('POST', '/set/skilllevel', true);
                httpRequest.setRequestHeader('Content-type', 'application/json');
                httpRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));

                httpRequest.onreadystatechange = function() {
                    if(httpRequest.readyState == 4 && httpRequest.status == 200) {
                        this.parentObj.app.renderer.render(this.parentObj.app.stage);
                    }
                }
                httpRequest.send(JSON.stringify(data));
            }

            this.parentObj.app.renderer.render(this.parentObj.app.stage);
        }
    }

    onRightClick() {
        // Disable children which doesn't have other parents with 0 skill level
        if (this.parentObj.skillData.skillLevel == 1) {
            var children = this.parentObj.skillData.children;

            this.parentObj.toggleChildren(children, false);
        }

        // Decrease skill level
        if(this.parentObj.skillData.skillLevel > 0)
        {
            this.parentObj.skillData.skillLevel--;
            this.levelinfo.text = (this.parentObj.skillData.skillLevel + "/" + this.parentObj.skillData.maxSkillLevel);

            //save level change
            this.parentObj.userData.skills.find(obj => obj.skillID == this.parentObj.skillData.skillID).skillLevel--;

            // sending new skillLevel to server
            var httpRequest = new XMLHttpRequest();
            var data = new Array();
            data.push({treeID: this.parentObj.skillData.treeID, skillID: this.parentObj.skillData.skillID, skillLevel: this.parentObj.skillData.skillLevel});

            httpRequest.open('POST', '/set/skilllevel', true);
            httpRequest.setRequestHeader('Content-type', 'application/json');
            httpRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));

            httpRequest.onreadystatechange = function() {
                if(httpRequest.readyState == 4 && httpRequest.status == 200) {
                    this.parentObj.app.renderer.render(this.parentObj.app.stage);
                }
            }
            httpRequest.send(JSON.stringify(data));
        } else return;
        this.parentObj.tick.alpha = 0;
        this.filters = [new PIXI.filters.GlowFilter(10,4,4, 0xFFBF00, 1)];

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }

    toggleChildren (children, enable) {
        if (children !== undefined) {
            for (var k = 0; k < children.length; ++k) {
                var child = this.treeData.skills[children[k].skillID];

                if (enable) {
                    for (var j = 0; child.zeroSLParents !== undefined && j < child.zeroSLParents.length; ++j) {
                        if (child.zeroSLParents[j].skillID == this.skillData.skillID) {
                            child.zeroSLParents.splice(j, 1);

                            if (child.zeroSLParents.length == 0) {
                                child.itemcontainer.container.filters = null;
                                child.itemcontainer.container.interactive = true;
                                child.itemcontainer.skillborder.interactive = true;
                                child.itemcontainer.skillborder.buttonMode = true;
                            }
                        }
                    }
                } else {
                    if (child.zeroSLParents === undefined) {
                        child.zeroSLParents = new Array();
                    }

                    if (child.zeroSLParents.length <= 1) {
                        var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
                        colorMatrixFilter.brightness(0.4);
                        child.itemcontainer.container.filters = [colorMatrixFilter];
                        child.itemcontainer.container.interactive = false;
                        child.itemcontainer.skillborder.interactive = false;
                        child.itemcontainer.skillborder.buttonMode = false;
                    }

                    var newParent = true;
                    for (var j = 0; j < child.zeroSLParents.length; ++j) {
                        if (child.zeroSLParents[j].skillID == this.skillData.skillID) {
                            newParent = false;
                        }
                    }
                    if (newParent) {
                        var parent = {skillID: this.skillData.skillID};
                        child.zeroSLParents.push(parent);
                    }
                }

                this.toggleChildren (child.children, enable)
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

        if(this.parentObj.skillData.skillLevel == this.parentObj.skillData.maxSkillLevel) return;
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

        if(this.parentObj.skillData.skillLevel == this.parentObj.skillData.maxSkillLevel) return;
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

    getSkillLevel (userData, skillID) {
        if (userData != undefined) {
            if (userData.skills.find(obj => obj.skillID == skillID) != undefined) return userData.skills.find(obj => obj.skillID == skillID).skillLevel;
            else return 0;
        } else return 0;
    }

    onDragStart(event) {
        event.drag = false;
        var obj = event.currentTarget;
        obj.dragData = event.data;
        obj.dragging = 1;
        obj.dragPointerStart = event.data.getLocalPosition(obj.parent);
        obj.dragObjStart = new PIXI.Point();
        obj.dragObjStart.copy(obj.position);
        obj.dragGlobalStart = new PIXI.Point();
        obj.dragGlobalStart.copy(event.data.global);

        app.start();
    }

    onDragEnd(event) {
        var obj = event.currentTarget;
        if (!obj.dragging) return;

        obj.dragging = 0;
        obj.dragData = null;

        app.stop();
    }

    onDragMove(event) {
        var obj = event.currentTarget;
        if (!obj.dragging) return;
        var data = obj.dragData;
        if (obj.dragging == 1) {

            // click or drag?
            if (Math.abs(data.global.x - obj.dragGlobalStart.x) +
                Math.abs(data.global.y - obj.dragGlobalStart.y) >= 5) {
                // DRAG
                obj.dragging = 2;
            }
        }
        if (obj.dragging == 2) {
            event.drag = true;
            var dragPointerEnd = data.getLocalPosition(obj.parent);
            // DRAG
            obj.position.set(
                obj.dragObjStart.x + (dragPointerEnd.x - obj.dragPointerStart.x),
                //obj.dragObjStart.y + (dragPointerEnd.y - obj.dragPointerStart.y)
            );
        }
    }
}
