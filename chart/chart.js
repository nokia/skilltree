var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xFFFFFF,
    transparent: true,
    antialias: true,
    autoStart: true,

});

document.body.appendChild(app.view);

var percent = 0.7;
var constant = 250;

var pixiCircle1 = new PIXI.Graphics();
pixiCircle1.lineStyle(constant, 0x000000);  //(thickness, color)
//pixiCircle.drawCircle(window.innerWidth/2, window.innerHeight/2, 200);   //(x,y,radius)
pixiCircle1.arc(window.innerWidth/2, window.innerHeight/2, constant/2 + 50, 0, Math.PI/8);
app.stage.addChild(pixiCircle1);

var pixiCircle2 = new PIXI.Graphics();
pixiCircle2.lineStyle(constant*percent, 0xFF0000);  //(thickness, color)
//pixiCircle.drawCircle(window.innerWidth/2, window.innerHeight/2, 200);   //(x,y,radius)
pixiCircle2.arc(window.innerWidth/2, window.innerHeight/2, (constant*percent)/2 + 50, Math.PI/8, Math.PI/8*2);


app.stage.addChild(pixiCircle2);




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
