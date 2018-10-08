var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x183693,
    antialias: true,
    autoStart: true,

});

document.body.appendChild(app.view);


var container = new PIXI.Container();



// set a fill and line style



// draw a shape
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var sliceCount = 8;

var width = 240;
var h1 = 60;
var h2 = h1 + width;

var sliceContainer = new Array(sliceCount);

for (var i = 0; i < sliceCount; i++) {

    var tempContainer = new PIXI.Container();

    h2 = h1 + width;
    var s = (i * (360 / sliceCount) * Math.PI) / 180;
    var e = ((i + 1) * (360 / sliceCount) * Math.PI) / 180;

    var slice = new PIXI.Graphics();
    slice.lineStyle(3, 0x000000);

    slice.moveTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
    slice.beginFill(0xFFFFFF);
    slice.arc(x, y, h1, e, s, true);
    slice.arc(x, y, h2, s, e, false);
    slice.lineTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
    slice.alpha = 0.9;
    slice.endFill();

    tempContainer.addChild(slice);
    

    //app.stage.addChild(slice);

    //generating random percent
    var percent = Math.random();

    h2 = h1 + (width * percent);
    var innerSlice = new PIXI.Graphics();
    innerSlice.lineStyle(3, 0x000000);
    innerSlice.moveTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
    innerSlice.beginFill(0xFF0000);
    innerSlice.arc(x, y, h1, e, s, true);
    innerSlice.arc(x, y, h2, s, e, false);
    innerSlice.lineTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
    innerSlice.alpha = 0.9;
    innerSlice.endFill();

    tempContainer.addChild(innerSlice);

    //app.stage.addChild(innerSlice);
    sliceContainer[i] = tempContainer;
    sliceContainer[i].buttonMode = true;
    sliceContainer[i].interactive = true;

    sliceContainer[i]
                .on('pointerover', function() { this.alpha = 1.2 })
                .on('pointerout', function() { this.alpha = 0.9; })
                .on('pointerdown', function() { window.open('../tree/tree.html', '_self') })

    app.stage.addChild(sliceContainer[i]);
}







var logo = new PIXI.Sprite.fromImage("../tree.png");
logo.anchor.set(0.5, 0.5);
logo.position.set(window.innerWidth / 2, window.innerHeight / 2);
logo.scale.set(0.42);
app.stage.addChild(logo);








//var backButton = new PIXI.Sprite.fromImage("pictures/back.png");

/*
var levelNum = 5;
var sliceNum = 8;
var slices = new Array(sliceNum);
var k = 0;
for (var i = 0; i < 1; ++i) {
    for (var j = 3; j < 4; ++j) {
        if (i == 0) slices[j] = new Array(levelNum);

        var sliceG = new PIXI.Graphics();
        sliceG.lineStyle(30, 0x000000);
        sliceG.arc(window.innerWidth / 2, window.innerHeight / 2, 32 * i + 60, j * Math.PI * 2 / sliceNum + Math.PI * 2 / (200 + i * 80), (j + 1) * Math.PI * 2 / sliceNum - Math.PI * 2 / (200 + i * 80));

        var sliceT = sliceG.generateTexture();

        var sliceGClick = new PIXI.Graphics();
        sliceG.lineStyle(30, 0xff0000);
        sliceG.arc(window.innerWidth / 2, window.innerHeight / 2, 32 * i + 60, j * Math.PI * 2 / sliceNum + Math.PI * 2 / (200 + i * 80), (j + 1) * Math.PI * 2 / sliceNum - Math.PI * 2 / (200 + i * 80));

        var sliceTClick = sliceGClick.generateTexture();

        slices[j][i] = new PIXI.Sprite(sliceT);

        slice.anchor.x = - bounds.x / sliceT.width; //????????????????????????????????????????????
        slices[j][i].position.set(sliceG.getBounds().x, sliceG.getBounds().y);
        slices[j][i].interactive = true;
        slices[j][i].buttonMode = true;

        slices[j][i].on(`pointerdown`, function () {
            this.texture = sliceTClick;
        });

        app.stage.addChild(slices[j][i]);
        ++k;
    }
    slices.push(level);
}

for (var j = 0; j < sliceNum; ++j) {
    var divider = new PIXI.Graphics();
    divider.lineStyle(2, 0xff0000);
    divider.moveTo(window.innerWidth / 2, window.innerHeight / 2);
    divider.lineTo(window.innerWidth / 2 + 32 * levelNum + 60, window.innerHeight / 2);
    divider.pivot.x = 0;
    divider.pivot.y = 0;
    divider.rotation = 1;
    app.stage.addChild(divider);
}
*/
