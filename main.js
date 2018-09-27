// fps counter
(function () { var script = document.createElement('script'); script.onload = function () { var stats = new Stats(); document.body.appendChild(stats.dom); requestAnimationFrame(function loop() { stats.update(); requestAnimationFrame(loop) }); }; script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js'; document.head.appendChild(script); })()

import { ItemContainer } from './classes/itemcontainer.js';

var data = dataJson;

var app = new PIXI.Application(
    {
        view: pixiCanvas,
        width: window.innerWidth,
        height: window.innerHeight,
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
    .on('pointermove', onDragMove);

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
<<<<<<< HEAD

=======
        console.log(treeContainer.getGlobalPosition());
>>>>>>> 35155d954641fd2e6e2e4d114e7dbaff3e8faaec
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
                    connection.lineStyle(3, 0xffffff);
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
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    //this.alpha = 0.5;
    this.dragging = true;
<<<<<<< HEAD
    this.firstDrag = 0;
=======

>>>>>>> 35155d954641fd2e6e2e4d114e7dbaff3e8faaec
}

function onDragEnd() {
    //this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
<<<<<<< HEAD
        var sx = this.data.getLocalPosition(treeContainer).x - maxwidth;
=======
<<<<<<< HEAD

        //console.log(this.data.getLocalPosition(this.parent) );

        var newPosition = this.data.getLocalPosition(this.parent);
        //console.log(this.x);
        //console.log(this.y);
        this.x = newPosition.x - maxwidth - this.width / 2;
        this.y = newPosition.y - this.height / 2;
        
        //console.log(this.x);
        //console.log(this.y);
=======
        //this.sx = this.data.getLocalPosition(treeContainer).x - maxwidth;
>>>>>>> 275def65b2feaf22f27aed90231df49b9f646e3c
        //this.sy = this.data.getLocalPosition(treeContainer).y;
        console.log(sx)
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x - maxwidth - this.width / 2 + sx;
        this.y = newPosition.y - this.height / 2;
>>>>>>> 35155d954641fd2e6e2e4d114e7dbaff3e8faaec

    }
}