var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    transparent: true,
});

document.body.appendChild(app.view);

app.stage.interactive = true;

var slices = new Array();

var levelNum = 5;
var sliceNum = 8;
var k = 0;
for (var i = 0; i < levelNum; ++i) {
    //var level = new Array();
    for (var j = 0; j < sliceNum; ++j) {
        slices[k] = new PIXI.Graphics();
        slices[k].lineStyle(30, 0x000000);
        slices[k].arc(window.innerWidth / 2, window.innerHeight / 2, 32 * i + 60, j * Math.PI * 2 / sliceNum + Math.PI * 2 / (200 + i * 80), (j + 1) * Math.PI * 2 / sliceNum - + Math.PI * 2 / (200 + i * 80));
        slices[k].interactive = true;
        slices[k].hitArea = slices[k].getBounds();

        slices[k].mouseover = function (event) {
            event.currentTarget.filters = [new PIXI.filters.GlowFilter(6, 2, 2, 0xFF0000, 1)];
        };

        slices[k].mouseout = function (event) {
            event.currentTarget.filters = null;
        };

        /*slice.on(`pointerover`, function () {
            slice = new PIXI.Graphics();
            slice.lineStyle(30, 0xff0000);
            slice.arc(window.innerWidth / 2, window.innerHeight / 2, 32 * i + 60, j * Math.PI * 2 / sliceNum + Math.PI * 2 / 110, (j + 1) * Math.PI * 2 / sliceNum - + Math.PI * 2 / 110);
        });*/

        app.stage.addChild(slices[k]);
        //slices.push(slice);

        ++k;
    }
    //slices.push(level);
}

/*for (var j = 0; j < sliceNum; ++j) {
    var divider = new PIXI.Graphics();
    divider.lineStyle(2, 0xff0000);
    divider.moveTo(window.innerWidth / 2, window.innerHeight / 2);
    divider.lineTo(window.innerWidth / 2 + 32 * levelNum + 60, window.innerHeight / 2);
    divider.pivot.x = 0;
    divider.pivot.y = 0;
    divider.rotation = 1;
    app.stage.addChild(divider);
}*/
