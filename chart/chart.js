var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    transparent: true,
});

document.body.appendChild(app.view);

var sliceNum = 8;
for (var i = 0; i < sliceNum; ++i) {
    var slice = new PIXI.Graphics();
    slice.lineStyle(20, 0x000000);
    slice.arc(window.innerWidth / 2, window.innerHeight / 2, 20, i * Math.PI * 2 / sliceNum + Math.PI / 60, (i + 1) * Math.PI * 2 / sliceNum - Math.PI / 60);

    app.stage.addChild(slice);
}