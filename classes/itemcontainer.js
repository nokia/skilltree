export class ItemContainer {
    constructor(data, level, i) {
        this.data = data;

        //Loading images
        this.skillicon = new PIXI.Sprite.fromImage(data.skillicon); //100x100
        this.skillborder = new PIXI.Sprite.fromImage(data.skillborder); //116x116
        this.levelborder = new PIXI.Sprite.fromImage(data.levelborder);

        //Setting border variables
        this.skillborder.skill_level = data.skill_level;
        this.skillborder.max_skill_level = data.max_skill_level;
        this.skillborder.levelinfo = new PIXI.Text(data.skill_level + " / "+ data.max_skill_level);

        //Creating details page
        var detailsWidth = 200;
        var detailsMargin = 10;
        var nameFontSize = 20;
        var descriptionFontSize = 12;

        this.details = new PIXI.Container();

        var detailsForeground = new PIXI.Container();
        var name = new PIXI.Text(data.name, {fontSize: nameFontSize, fill: 0x000000});
        name.position.set(10, 10);
        detailsForeground.addChild(name);

        var description = new PIXI.Text(data.description, {fontSize: descriptionFontSize, fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - detailsMargin * 2 });
        description.position.set(detailsMargin, detailsMargin * 2 + nameFontSize);
        detailsForeground.addChild(description);

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

        // Setting z index of container

        //Adding events to the container
        // TODO pointerover and poninterout should be the event of the container
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;
        this.skillborder
            .on('click', this.onClick)
            .on('pointerover', this.onButtonOver)
            .on('pointerout', this.onButtonOut)
            .on('rightclick', this.onRightClick);
    }

    onClick()
    {
        // TODO enable children

        if(this.skill_level<this.max_skill_level)
        {
            this.skill_level ++;
            this.levelinfo.text = (this.skill_level + " / " + this.max_skill_level);
            if(this.skill_level==this.max_skill_level) {
                this.filters = [new PIXI.filters.GlowFilter(10,2,2, 0xFF4000, 1)];
            }
        }
    }

    onButtonOver() {
        // TODO add details

        if(this.skill_level == this.max_skill_level) return;
        this.filters = [new PIXI.filters.GlowFilter(6,2,2, 0xFFBF00, 1)];
    }

    onButtonOut() {
        // TODO remove details

        if(this.skill_level == this.max_skill_level) return;
        this.filters = null;
    }

    onRightClick() {
        if(this.skill_level>0)
        {
            this.skill_level --;
            this.levelinfo.text = (this.skill_level + " / " + this.max_skill_level);
        } else {
            // TODO disable children
            return;
        }

        this.filters = [new PIXI.filters.GlowFilter(10,2,2, 0xFFBF00, 1)];
    }

    enable () {
        this.container.filters = null;
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;
    }

    disable () {
        var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
        colorMatrixFilter.brightness(0.4);
        this.container.filters = [colorMatrixFilter];
        this.skillborder.interactive = false;
        this.skillborder.buttonMode = false;
    }
}