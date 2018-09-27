export class ItemContainer {
    constructor(data, level, i) {
        this.data = data;
        this.skillData = data[level][i];
        this.level = level;
        this.i = i;

        //Loading images
        this.skillicon = new PIXI.Sprite.fromImage(this.skillData.skillicon); //100x100
        this.skillborder = new PIXI.Sprite.fromImage(this.skillData.skillborder); //116x116
        this.levelborder = new PIXI.Sprite.fromImage(this.skillData.levelborder);

        //Setting border variables
        this.skillborder.skill_level = this.skillData.skill_level;
        this.skillborder.max_skill_level = this.skillData.max_skill_level;
        this.skillborder.levelinfo = new PIXI.Text(this.skillData.skill_level + " / " + this.skillData.max_skill_level);

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
        var link = this.createLink("Nokia website", "https://nokia.com", {fontSize: 12, fill: 0xff0000}, true);
        link.position.set(detailsMargin, description.position.y + description.height + 10);
        detailsForeground.addChild(link);
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
        this.container.addChild(this.levelborder);
        this.container.addChild(this.skillborder);
        this.container.addChild(this.skillborder.levelinfo);
        this.container.zOrder = 1;

        //Setting size, position of objects in container
        this.skillicon.anchor.set(0.5, 0.5);
        this.skillborder.anchor.set(0.5, 0.5);
        this.levelborder.anchor.set(1,0);
        this.skillborder.levelinfo.anchor.set(1,0);

        this.skillicon.position.set(58, 58);
        this.skillborder.position.set(58, 58);
        this.levelborder.position.set(115,1);
        this.skillborder.levelinfo.position.set(105, 15);
        this.skillborder.levelinfo.scale.set(0.5);

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

    onClick() {
        // Enable children which doesn't have other parents
        var children = this.parentObj.skillData.children;
        if (children !== undefined) {
            for (var k = 0; k < children.length; ++k) {
                var child = this.parentObj.data[children[k].level][children[k].i];

                for (var j = 0; j < child.parents.length; ++j) {
                    console.log(child.parents);
                    if (child.parents[j].level == this.parentObj.level && child.parents[j].i == this.parentObj.i) {
                        child.parents.splice(j, 1);

                        if (child.parents.length == 0) {
                            child.itemcontainer.container.filters = null;
                            child.itemcontainer.container.interactive = true;
                            child.itemcontainer.skillborder.interactive = true;
                            child.itemcontainer.skillborder.buttonMode = true;
                        }
                    }
                }
            }
        }

        // Increase skill level
        if(this.skill_level<this.max_skill_level)
        {
            this.skill_level ++;
            this.levelinfo.text = (this.skill_level + " / " + this.max_skill_level);
            if(this.skill_level==this.max_skill_level) {
                this.filters = [new PIXI.filters.GlowFilter(10,2,2, 0xFF4000, 1)];
            }
        }
    }

    onRightClick() {
        // Disable children which doesn't have other parents
        if (this.skill_level == 1) {
            var children = this.parentObj.skillData.children;

            if (children !== undefined) {
                for (var k = 0; k < children.length; ++k) {
                    var child = this.parentObj.data[children[k].level][children[k].i];

                    if (child.parents === undefined) {
                        child.parents = new Array();
                    }

                    if (child.parents.length <= 1) {
                        var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
                        colorMatrixFilter.brightness(0.4);
                        child.itemcontainer.container.filters = [colorMatrixFilter];
                        child.itemcontainer.container.interactive = false;
                        child.itemcontainer.skillborder.interactive = false;
                        child.itemcontainer.skillborder.buttonMode = false;
                    }

                    var newParent = true;
                    for (var j = 0; j < child.parents.length; ++j) {
                        if (child.parents[j].level == this.parentObj.level && child.parents[j].i == this.parentObj.i) {
                            newParent = false;
                        }
                    }
                    if (newParent) {
                        var parent = {level: this.parentObj.level, i: this.parentObj.i};
                        child.parents.push(parent);
                    }
                }
            }
        }

        // Decrease skill level
        if(this.skill_level>0)
        {
            this.skill_level --;
            this.levelinfo.text = (this.skill_level + " / " + this.max_skill_level);
        } else return;

        this.filters = [new PIXI.filters.GlowFilter(10,2,2, 0xFFBF00, 1)];
    }

    onButtonOver() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        // Brings up hovered container
        container.addChild(details);
        container.zOrder = 0;

        if(skillborder.skill_level == skillborder.max_skill_level) return;
        skillborder.filters = [new PIXI.filters.GlowFilter(6,2,2, 0xFFBF00, 1)];
    }

    onButtonOut() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        container.removeChild(details);
        container.zOrder = 1;

        if(skillborder.skill_level == skillborder.max_skill_level) return;
        skillborder.filters = null;
    }

    enable () {
        this.container.filters = null;
        this.container.interactive = true;
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;
    }

    disable () {
        var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
        colorMatrixFilter.brightness(0.4);
        this.container.filters = [colorMatrixFilter];
        this.container.interactive = false;
        this.skillborder.interactive = false;
        this.skillborder.buttonMode = false;
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