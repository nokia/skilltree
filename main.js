var app = new PIXI.Application({
    width: window.innerWidth, 
    height: window.innerHeight,
    antialias: true
});

document.body.appendChild(app.view);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;

app.stage = new PIXI.display.Stage(); // for zOrder
app.stage.group.enableSort = true;

/*window.onresize = function () {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    app.renderer.autoResize = true;
    app.renderer.render(app.stage);
};*/

PIXI.loader.add("a.png") // load all the images
    .load(main);

var itemLayer = new PIXI.display.Layer();
var connectionGroup = new PIXI.display.Group(-1, false); // draw connection lines between items

var itemData = itemsJson;

function main () {
    for (var i = 0; i < itemData.length; ++i) {
        for (var j = 0; j < itemData[i].length; ++j) {
            itemData[i][j].disp = new Item(itemData[i][j], i, itemData[i].length, j);
        }
    }
    itemLayer.group.enableSort = true;
    app.stage.addChild(itemLayer);

    var endOfDetails = 0;
    for (var i = 0; i < itemData[itemData.length - 1].length; ++i) {
        if (itemData[itemData.length - 1][i].disp.item.position.y + itemData[itemData.length - 1][i].disp.details.position.y + itemData[itemData.length - 1][i].disp.details.height > endOfDetails) {
            endOfDetails = itemData[itemData.length - 1][i].disp.item.position.y + itemData[itemData.length - 1][i].disp.details.position.y + itemData[itemData.length - 1][i].disp.details.height;
        }
    }
    if (endOfDetails > window.innerHeight) {
        app.renderer.resize(window.innerWidth, endOfDetails + 10);
    }
    app.renderer.autoResize = true;
    app.renderer.render(app.stage);
    //app.height = itemData[itemData.length - 1][0].disp.item.position.y + itemData[itemData.length - 1][0].disp.item.height;

    for (var i = 0; i < itemData.length; ++i) {
        for (var j = 0; j < itemData[i].length; ++j) {
            children(i, j, true);
        }
    }
    app.stage.addChild(new PIXI.display.Layer(connectionGroup));

    var t = new Link("nokia.com", "https://nokia.com", {fontSize: 12, fill: 0xff0000}, true); // (text, url, text style, underline)
    t.link.position.set(20, 20);
    app.stage.addChild(t.link);
}

function children (i, j, draw) {
    if (itemData[i][j].children !== undefined) {
        for (var k = 0; k < itemData[i][j].children.length; ++k) {
            var child = itemData[itemData[i][j].children[k].level][itemData[i][j].children[k].i];
            if (draw) {
                var connection = new PIXI.Graphics();
                connection.lineStyle(3, 0xffffff);
                connection.moveTo(itemData[i][j].disp.item.position.x + itemData[i][j].disp.item.width / 2, itemData[i][j].disp.item.position.y + itemData[i][j].disp.item.height - 2);
                connection.lineTo(child.disp.item.position.x + child.disp.item.width / 2, child.disp.item.position.y + 2);
                app.stage.addChild(connection);
                connection.parentGroup = connectionGroup;

                child.disp.disable();
            } else {
                child.disp.enable();
            }
        }
    }
}

class Item {
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

        var item = new PIXI.Container();

        var mask = new PIXI.Graphics(); // hides image corners
        mask.beginFill();
        mask.drawRoundedRect(0, 0, imgSize, imgSize, 12);
        mask.endFill();
        item.addChild(mask);

        var glowHover = new PIXI.filters.GlowFilter(10, 5, 5, 0xff0000, 1);
        //var outlineClick = new PIXI.filters.OutlineFilter(5, 0x)s

        var image = new PIXI.Sprite(PIXI.loader.resources[data.image].texture); // item image
        item.addChild(image);
        image.mask = mask;
        //image.filters = [outlineDefault];
        image.filters = [outlineHover];

        var rect = new PIXI.Graphics(); // border of image
        rect.lineStyle(2, 0xffffff);
        rect.drawRoundedRect(2, 2, imgSize, imgSize, 10);
        var rectSprite = new PIXI.Sprite(rect.generateTexture()); // need a sprite for interactivity
        rectSprite.interactive = true;
        rectSprite.buttonMode = true; // sets the cursor

        rectSprite.on("pointerdown", function () { // click on image (and border)
            rect = new PIXI.Graphics();
            rect.lineStyle(4, 0xaa44aa);
            rect.drawRoundedRect(4, 4, imgSize, imgSize, 10);
            rectSprite.texture = rect.generateTexture();
            item.interactive = false;
            item.buttonMode = false;
            rectSprite.interactive = false;
            rectSprite.buttonMode = false;
            item.removeChild(details);

            children(level, i, false);
        });

        //item.addChild(rectSprite);

        var details = new PIXI.Container(); // details page

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

        var space = new PIXI.Graphics(); // space between the image and the details page (hover)
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
            rect.drawRoundedRect(2, 2, imgSize, imgSize, 10);
            rectSprite.texture = rect.generateTexture();
            rectSprite.filters = [glowHover];

            item.addChild(details);
        });
        item.on("mouseout", function () {
            rect = new PIXI.Graphics();
            rect.lineStyle(2, 0xffffff);
            rect.drawRoundedRect(2, 2, imgSize, imgSize, 10);
            rectSprite.texture = rect.generateTexture();

            item.removeChild(details);
        });

        app.stage.addChild(item);

        this.item = item;
        this.rectSprite = rectSprite;
        this.details = details;
        this.imgSize = imgSize;
    }

    disable () {
        var rect = new PIXI.Graphics();
        rect.lineStyle(2, 0x555555);
        rect.drawRoundedRect(2, 2, this.imgSize, this.imgSize, 10);
        this.rectSprite.texture = rect.generateTexture();
        this.item.interactive = false;
        this.item.buttonMode = false;
        this.rectSprite.interactive = false;
        this.rectSprite.buttonMode = false;
        this.item.removeChild(this.details);
    }

    enable () {
        var rect = new PIXI.Graphics();
        rect.lineStyle(2, 0xffffff);
        rect.drawRoundedRect(2, 2, this.imgSize, this.imgSize, 10);
        this.rectSprite.texture = rect.generateTexture();
        this.item.interactive = true;
        this.item.buttonMode = true;
        this.rectSprite.interactive = true;
        this.rectSprite.buttonMode = true;
    }
}

class Link /*extends PIXI.Text*/ { // .link: container, .btn: interactive rectangle, .text; no wordwrap
    constructor (text, url, style, underline) {
        var link = new PIXI.Container();

        //var text = super(text, style, canvas);
        var text = new PIXI.Text(text, style);
        link.addChild(text);
        this.text = text;

        if (underline && style !== undefined && style.wordWrap !== true) {
            var line = new PIXI.Graphics();
            line.lineStyle(text.height / 10, style.fill);
            line.moveTo(0, text.height * 11 / 12);
            line.lineTo(text.width, text.height * 11 / 12);
            link.addChild(line);
        } else if (style.wordWrap === true) {
            console.log("Can't underline multiline text");
        }

        var btnRect = new PIXI.Graphics();
        btnRect.drawRect(0, 0, text.width, text.height);
        var btn = new PIXI.Sprite(btnRect.generateTexture());
        btn.interactive = true;
        btn.buttonMode = true;
        btn.on("pointerdown", function () {
            window.open(url, '_self');
        });
        link.addChild(btn);
        this.btn = btn;

        this.link = link;
    }

    enable () {
        this.btn.interactive = true;
        this.btn.buttonMode = true;
    }

    disable () {
        this.btn.interactive = false;
        this.btn.buttonMode = false;
    }
}