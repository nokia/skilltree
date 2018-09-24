export default class Item {
    constructor (data, level, levelLength, i) {
        var imgSize = 100;
        var detailsMargin = 5;
        var imgVerMargin = 50;
        var imgHorMargin = 15;
        var topMargin = 10;
        var detailsWidth = 200;
        var detailsNameSize = 20;
        var detailsDescSize = 12;
        var detailsTextMargin = 10;
        var borderSizeDefault = 2;
        var borderSizeHover = 2;
        var borderSizeClick = 4;
        var borderSizeDisabled = 2;

        var item = new PIXI.Container();

        var mask = new PIXI.Graphics(); // hides image corners
        mask.beginFill();
        mask.drawRoundedRect(0, 0, imgSize, imgSize, 14);
        mask.endFill();
        item.addChild(mask);

        // item image

        var image = new PIXI.Sprite(PIXI.loader.resources[data.image].texture);
        item.addChild(image);
        image.mask = mask;

        // border of image (clickable)

        var rect = new PIXI.Graphics();
        rect.lineStyle(borderSizeDefault, 0xffffff);
        rect.drawRoundedRect(borderSizeClick, borderSizeClick, imgSize - 2, imgSize - 2, 10);
        var rectSprite = new PIXI.Sprite(rect.generateTexture()); // need a sprite for interactivity
        rectSprite.interactive = true;
        rectSprite.buttonMode = true; // sets the cursor

        rectSprite.on("pointerdown", function () { // click on image
            rect = new PIXI.Graphics();
            rect.lineStyle(4, 0xaa44aa);
            rect.drawRoundedRect(borderSizeClick, borderSizeClick, imgSize - borderSizeClick, imgSize - borderSizeClick, 10);
            rectSprite.texture = rect.generateTexture();
            item.interactive = false;
            item.buttonMode = false;
            rectSprite.interactive = false;
            rectSprite.buttonMode = false;
            item.removeChild(details);

            enableChildren(level, i);

            renderer.render(stage);
        });

        item.addChild(rectSprite);

        // details page

        var details = new PIXI.Container();

        var detailsForeground = new PIXI.Container(); // everything on details page except the bg rectangle
        var detailsName = new PIXI.Text(data.name, { fontSize: detailsNameSize, fill: 0x000000 });
        detailsName.position.set(detailsTextMargin, detailsTextMargin);
        detailsForeground.addChild(detailsName);

        var detailsDesc = new PIXI.Text(data.description, { fontSize: detailsDescSize, fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - detailsTextMargin * 2 });
        detailsDesc.position.set(detailsTextMargin, detailsTextMargin * 2 + detailsNameSize);
        detailsForeground.addChild(detailsDesc);

        var detailsBackground = new PIXI.Graphics(); // bg rectangle
        detailsBackground.beginFill(0x009999);
        detailsBackground.drawRoundedRect(0, 0, detailsWidth, detailsForeground.height + detailsTextMargin * 2, 10);
        detailsBackground.endFill();
        details.addChild(detailsBackground);

        details.addChild(detailsForeground);

        details.position.set(rectSprite.width + detailsMargin, 0);

        // space between the image and the details page (for hover)

        var space = new PIXI.Graphics();
        space.beginFill();
        space.drawRect(rectSprite.width, 0, detailsMargin, rectSprite.height);
        space.endFill();
        space.alpha = 0;
        item.addChild(space);

        item.position.x = i * (imgSize + imgHorMargin) + window.innerWidth / 2 - (levelLength * (imgSize + imgHorMargin)) / 2;
        item.position.y = level * (imgSize + imgVerMargin) + topMargin;
        item.interactive = true;
        item.parentLayer = itemLayer;
        item.zOrder = i;

        item.on("mouseover", function () {
            rect = new PIXI.Graphics();
            rect.lineStyle(2, 0xff0000);
            rect.drawRoundedRect(borderSizeHover, borderSizeHover, imgSize - borderSizeHover, imgSize - borderSizeHover, 10);
            rectSprite.texture = rect.generateTexture();

            item.addChild(details);

            renderer.render(stage);
        });
        item.on("mouseout", function () {
            rect = new PIXI.Graphics();
            rect.lineStyle(2, 0xffffff);
            rect.drawRoundedRect(borderSizeDefault, borderSizeDefault, imgSize - borderSizeDefault, imgSize - borderSizeDefault, 10);
            rectSprite.texture = rect.generateTexture();

            item.removeChild(details);

            renderer.render(stage);
        });

        stage.addChild(item);

        this.item = item;
        this.rectSprite = rectSprite;
        this.details = details;
        this.imgSize = imgSize;
        this.borderSizeDefault = borderSizeDefault;
        this.borderSizeDisabled = borderSizeDisabled;
    }

    disable () {
        var rect = new PIXI.Graphics();
        rect.lineStyle(this.borderSizeDisabled, 0x555555);
        rect.drawRoundedRect(this.borderSizeDisabled, this.borderSizeDisabled, this.imgSize - this.borderSizeDisabled, this.imgSize - this.borderSizeDisabled, 10);
        this.rectSprite.texture = rect.generateTexture();
        this.item.interactive = false;
        this.item.buttonMode = false;
        this.rectSprite.interactive = false;
        this.rectSprite.buttonMode = false;
        this.item.removeChild(this.details);
    }

    enable () {
        var rect = new PIXI.Graphics();
        rect.lineStyle(this.borderSizeDefault, 0xffffff);
        rect.drawRoundedRect(this.borderSizeDefault, this.borderSizeDefault, this.imgSize - this.borderSizeDefault, this.imgSize - this.borderSizeDefault, 10);
        this.rectSprite.texture = rect.generateTexture();
        this.item.interactive = true;
        this.item.buttonMode = true;
        this.rectSprite.interactive = true;
        this.rectSprite.buttonMode = true;
    }
}
