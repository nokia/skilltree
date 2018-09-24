// IMPORT CLASSES ???? TO-DO
/*
import Item from './classes/Item'; 
import Link from './classes/Link';


const Item = require('./classes/item');
const Link = require('./classes/link');

*/


//INITIALIZE ----

// fps counter
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()

//renders the stage (when we want it, with renderer.render(stage); for animations we need requestAnimationFrame() too)
var renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight, {
    antialias: true,
    backgroundColor: 0x000000
});
document.body.appendChild(renderer.view);

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;

var stage = new PIXI.display.Stage();
stage.group.enableSort = true;

//Load images/resources
PIXI.loader
    .add("a.png") // load all the images
    .load(main);

var itemData = itemsJson;


//Layering for Z-order
var itemLayer = new PIXI.display.Layer();
itemLayer.group.enableSort = true;
    
var connectionGroup = new PIXI.display.Group(-1, false); // draw connection lines between item



/*
window.onresize = function () {
    renderer.resize(window.innerWidth, window.innerHeight);
    renderer.autoResize = true;
    renderer.render(app.stage);
};
*/






function main () {
    //creates the items

    for (var i = 0; i < itemData.length; ++i) {
        for (var j = 0; j < itemData[i].length; ++j) {
            itemData[i][j].disp = new Item(itemData[i][j], i, itemData[i].length, j);
        }
    }
    stage.addChild(itemLayer);

    //the canvas will be a bit bigger than the biggest details page in the last row

    var endOfDetails = 0;
    for (var i = 0; i < itemData[itemData.length - 1].length; ++i) {
        if (itemData[itemData.length - 1][i].disp.item.position.y + itemData[itemData.length - 1][i].disp.details.position.y + itemData[itemData.length - 1][i].disp.details.height > endOfDetails) {
            endOfDetails = itemData[itemData.length - 1][i].disp.item.position.y + itemData[itemData.length - 1][i].disp.details.position.y + itemData[itemData.length - 1][i].disp.details.height;
        }
    }
    if (endOfDetails > window.innerHeight) {
        renderer.resize(window.innerWidth, endOfDetails + 10);
    }

    // draws all the connection lines

    for (var i = 0; i < itemData.length; ++i) {
        for (var j = 0; j < itemData[i].length; ++j) {
            drawConnection(i, j);
        }
    }
    stage.addChild(new PIXI.display.Layer(connectionGroup));

    var t = new Link("nokia.com", "https://nokia.com", {fontSize: 12, fill: 0xff0000}, true); // (text, url, text style, underline)
    t.link.position.set(10, 50);
    stage.addChild(t.link);

    renderer.render(stage);
}

function drawConnection (i, j) { // draws connection lines
    if (itemData[i][j].children !== undefined) {
        for (var k = 0; k < itemData[i][j].children.length; ++k) {
            var child = itemData[itemData[i][j].children[k].level][itemData[i][j].children[k].i];
            var connection = new PIXI.Graphics();
            connection.lineStyle(3, 0xffffff);
            connection.moveTo(itemData[i][j].disp.item.position.x + itemData[i][j].disp.item.width / 2, itemData[i][j].disp.item.position.y + itemData[i][j].disp.item.height - 2);
            connection.lineTo(child.disp.item.position.x + child.disp.item.width / 2, child.disp.item.position.y + 2);
            stage.addChild(connection);
            connection.parentGroup = connectionGroup;

            child.disp.disable();
        }
    }
}

function enableChildren (i, j) {
    if (itemData[i][j].children !== undefined) {
        for (var k = 0; k < itemData[i][j].children.length; ++k) {
            var child = itemData[itemData[i][j].children[k].level][itemData[i][j].children[k].i];
            child.disp.enable();
        }
    }
}


//EVERYTHING BELOW THIS TO BE DELETED WHEN WE FIGURE OUT HOW TO IMPORT CLASSES PROPERLY ---------------------


class Link /*extends PIXI.Text*/ { // .link: container, .btn: interactive rectangle, .text; no wordwrap
    constructor (textString, url, style, underline) {
        var link = new PIXI.Container();

        //var text = super(text, style, canvas);
        var text = new PIXI.Text(textString, style);
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


