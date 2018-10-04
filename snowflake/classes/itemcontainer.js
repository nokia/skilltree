export class ItemContainer {
    constructor(app, data, level, i) {
        this.app = app;
        this.data = data;
        this.skillData = data[level][i];
        this.level = level;
        this.i = i;

        //Creating images
        this.skillicon = new PIXI.Sprite(PIXI.loader.resources[this.skillData.skillicon].texture); //100x100
        this.skillborder = new PIXI.Sprite(PIXI.loader.resources["pictures/skillborder.png"].texture); //116x116

        //Setting border variables
        this.skillborder.skill_level = this.skillData.skill_level;
        this.skillborder.max_skill_level = this.skillData.max_skill_level;
        this.skillborder.levelinfo = new PIXI.Text(this.skillData.skill_level + "/" + this.skillData.max_skill_level);

        //Creating details page
        var detailsWidth = 200;
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

        // Temporary hardcoded link
        if (level == 0 && i == 0) {
            var link = this.createLink("Nokia website", "https://nokia.com", {fontSize: 12, fill: 0x0000ff}, true);
            link.position.set(detailsMargin, description.position.y + description.height + 10);
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
            // Enable children which doesn't have other parents with 0 skill level
            var children = this.parentObj.skillData.children;

            for (var k = 0; children !== undefined && k < children.length; ++k) {
                var child = this.parentObj.data[children[k].level][children[k].i];

                for (var j = 0; child.zeroSLParents !== undefined && j < child.zeroSLParents.length; ++j) {
                    if (child.zeroSLParents[j].level == this.parentObj.level && child.zeroSLParents[j].i == this.parentObj.i) {
                        child.zeroSLParents.splice(j, 1);

                        if (child.zeroSLParents.length == 0) {
                            child.itemcontainer.container.filters = null;
                            child.itemcontainer.container.interactive = true;
                            child.itemcontainer.skillborder.interactive = true;
                            child.itemcontainer.skillborder.buttonMode = true;
                        }
                    }
                }
            }

            // Increase skill level
            if (this.skill_level < this.max_skill_level) {
                this.skill_level++;
                this.levelinfo.text = (this.skill_level + "/" + this.max_skill_level);
                if (this.skill_level == this.max_skill_level) {
                    this.filters = [new PIXI.filters.GlowFilter(10, 4, 4, 0xFF4000, 1)];
                    this.parentObj.app.stage.removeChild(this.parentObj.details);
                }
            }

            this.parentObj.app.renderer.render(this.parentObj.app.stage);
        }
    }

    onRightClick() {
        // Disable children which doesn't have other parents with 0 skill level
        if (this.skill_level == 1) {
            var children = this.parentObj.skillData.children;

            if (children !== undefined) {
                for (var k = 0; k < children.length; ++k) {
                    var child = this.parentObj.data[children[k].level][children[k].i];

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
                        if (child.zeroSLParents[j].level == this.parentObj.level && child.zeroSLParents[j].i == this.parentObj.i) {
                            newParent = false;
                        }
                    }
                    if (newParent) {
                        var parent = {level: this.parentObj.level, i: this.parentObj.i};
                        child.zeroSLParents.push(parent);
                    }
                }
            }
        }

        // Decrease skill level
        if(this.skill_level>0)
        {
            this.skill_level --;
            this.levelinfo.text = (this.skill_level + "/" + this.max_skill_level);
        } else return;

        this.filters = [new PIXI.filters.GlowFilter(10,4,4, 0xFFBF00, 1)];

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }

    onButtonOver() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        // Brings up hovered container
        container.addChild(details);
        container.zOrder = 0;

        if(skillborder.skill_level == skillborder.max_skill_level) return;
        skillborder.filters = [new PIXI.filters.GlowFilter(10,4,4, 0xFFBF00, 1)];

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }

    onButtonOut() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        container.removeChild(details);
        container.zOrder = 1;

        if(skillborder.skill_level == skillborder.max_skill_level) return;
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

    // TODO Can it be in separate class???
    createLink (textString, url, style, underline) {
        var link = new PIXI.Container();

        var text = new PIXI.Text(textString, style);
        link.addChild(text);

        if (underline && style !== undefined && style.wordWrap !== true) {
            var line = new PIXI.Graphics();
            line.lineStyle(text.height / 10, style.fill);
            line.moveTo(0, text.height * 11 / 12);
            line.lineTo(text.width, text.height * 11 / 12);
            link.addChild(line);
        }

        var buttonRect = new PIXI.Graphics();
        buttonRect.drawRect(0, 0, text.width, text.height);
        var button = new PIXI.Sprite(buttonRect.generateTexture());
        button.interactive = true;
        button.buttonMode = true;
        button.on("pointerdown", function () {
            window.open(url, '_self');
        });
        link.addChild(button);

        this.button = button;

        return link;
    }
}
