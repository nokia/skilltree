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
var treeContainer = new PIXI.Container();
app.stage.addChild(treeContainer);
app.stage.group.enableSort = true;




//dragging stage with mouse ?can only be done if it has a parent?

treeContainer.interactive = true;


treeContainer
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove)

app.stage.buttonMode = true;

var skillLayer = new PIXI.display.Layer();
skillLayer.group.enableSort = true;
app.stage.addChild(skillLayer);

var maxwidth = 0;
for (var level = 0; level < data.length; ++level) {
    if (data[level].length > maxwidth) maxwidth = data[level].length;
    for (var i = 0; i < data[level].length; ++i) {
        data[level][i].itemcontainer = new ItemContainer(data, level, i);

        // Positioning of the containers dynamically by level and by index inside level
        data[level][i].itemcontainer.container.position.x = i * 130 + (app.renderer.width - data[level].length * 130) / 2;
        data[level][i].itemcontainer.container.position.y = level * 150 + 10;

        data[level][i].itemcontainer.container.parentLayer = skillLayer;
        treeContainer.addChild(data[level][i].itemcontainer.container);
    }
}
maxwidth = (app.renderer.width - maxwidth * 130) / 2;

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
                    connection.lineStyle(5, 0xffffff);
                    connection.moveTo(data[level][i].itemcontainer.container.x + data[level][i].itemcontainer.container.getLocalBounds().x, data[level][i].itemcontainer.container.position.y + data[level][i].itemcontainer.container.getLocalBounds().y * 2 - 7);
                    connection.lineTo(child.itemcontainer.container.position.x + child.itemcontainer.container.getLocalBounds().x, child.itemcontainer.container.position.y + 4);

                    // Add the line
                    treeContainer.addChild(connection);
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

    treeContainer.addChild(new PIXI.display.Layer(connectionGroup));
}




function onDragStart(event) {
    event.drag = false;
    var obj = event.currentTarget;
    obj.dragData = event.data;
    obj.dragging = 1;
    obj.dragPointerStart = event.data.getLocalPosition(obj.parent);
    obj.dragObjStart = new PIXI.Point();
    obj.dragObjStart.copy(obj.position);
    obj.dragGlobalStart = new PIXI.Point();
    obj.dragGlobalStart.copy(event.data.global);
}

function onDragEnd(event) {
    var obj = event.currentTarget;
    if (!obj.dragging) return;

    obj.dragging = 0;
    obj.dragData = null;
    // set the interaction data to null
}

function onDragMove(event) {
    var obj = event.currentTarget;
    if (!obj.dragging) return;
    var data = obj.dragData; // it can be different pointer!
    if (obj.dragging == 1) {

        // click or drag?
        if (Math.abs(data.global.x - obj.dragGlobalStart.x) +
            Math.abs(data.global.y - obj.dragGlobalStart.y) >= 5) {
            // DRAG
            obj.dragging = 2;
        }
    }
    if (obj.dragging == 2) {
        event.drag = true;
        var dragPointerEnd = data.getLocalPosition(obj.parent);
        // DRAG
        obj.position.set(
            obj.dragObjStart.x + (dragPointerEnd.x - obj.dragPointerStart.x),
            obj.dragObjStart.y + (dragPointerEnd.y - obj.dragPointerStart.y)
        );
    }
}