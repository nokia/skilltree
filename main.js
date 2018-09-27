// fps counter
(function () { var script = document.createElement('script'); script.onload = function () { var stats = new Stats(); document.body.appendChild(stats.dom); requestAnimationFrame(function loop() { stats.update(); requestAnimationFrame(loop) }); }; script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js'; document.head.appendChild(script); })()

import { ItemContainer } from './classes/itemcontainer.js';

var data = dataJson;

var app = new PIXI.Application(
    {
        view: pixiCanvas,
        width: 1000,
        height: 600,
        backgroundColor: 0x000000,
        antialias: true,
        autoStart: true, // TODO false and rendering only when needed
    }
);

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;

//dragging stage with mouse ?can only be done if it has a parent?
/*
app.stage.interactive = true;

app.stage
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove);

app.stage.buttonMode=true;*/

var skillLayer = new PIXI.display.Layer();
skillLayer.group.enableSort = true;
app.stage.addChild(skillLayer);

for (var level = 0; level < data.length; ++level) {
    for (var i = 0; i < data[level].length; ++i) {
        data[level][i].itemcontainer = new ItemContainer(data, level, i);

        // Positioning of the containers dynamically by level and by index inside level
        console.log(app.width);
        data[level][i].itemcontainer.container.position.x = i * 130 + (app.renderer.width - data[level].length * 130) / 2;
        data[level][i].itemcontainer.container.position.y = level * 150 + 10;

        data[level][i].itemcontainer.container.parentLayer = skillLayer;
        app.stage.addChild(data[level][i].itemcontainer.container);
    }
}

drawConnectionLines();

function drawConnectionLines() {
    var connectionGroup = new PIXI.display.Group(-1, false);

    for (var level = 0; level < data.length; ++level) {
        for (var i = 0; i < data[level].length; ++i) {
            if (data[level][i].children !== undefined) {

                for (var k = 0; k < data[level][i].children.length; ++k) {
                    var child = data[data[level][i].children[k].level][data[level][i].children[k].i];

                    // Draw the line
                    var connection = new PIXI.Graphics();
                    connection.lineStyle(3, 0xffffff);
                    connection.moveTo(data[level][i].itemcontainer.container.position.x + data[level][i].itemcontainer.container.width, data[level][i].itemcontainer.container.position.y + data[level][i].itemcontainer.container.height * 2 - 2);
                    connection.lineTo(child.itemcontainer.container.position.x + child.itemcontainer.container.width, child.itemcontainer.container.position.y + 2);

                    // Add the line
                    app.stage.addChild(connection);
                    connection.parentGroup = connectionGroup;

                    // Saving child's zero skill level parents
                    if (data[level][i].skill_level == 0) {
                        child.itemcontainer.disable();

                        if (child.zeroSLParents === undefined) {
                            child.zeroSLParents = new Array();
                        }
                        child.zeroSLParents.push({ level: level, i: i });
                    }
                }
            }
        }
    }

    app.stage.addChild(new PIXI.display.Layer(connectionGroup));


}


function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}