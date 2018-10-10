//import { Tree } from './classes/treeClass.js';
import { ItemContainer } from './classes/itemcontainer.js';

var allData = dataJson;

var app = new PIXI.Application(
    {
        view: pixiCanvas,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x183693,
        antialias: true,
        autoStart: true, // TODO false and rendering only when needed
    }
);

var imgs = new Array();
for (var i = 0; i < allData.length; ++i) {
    for (var j = 0; j < allData[i].length; ++j) {
        for (var k = 0; k < allData[i][j].length; ++k) {
            if (!imgs.includes(allData[i][j][k].skillicon)) {
                imgs.push(allData[i][j][k].skillicon);
                PIXI.loader.add(allData[i][j][k].skillicon.toString());
            }
        }
    }
}
PIXI.loader.add("pictures/skillborder.png");
PIXI.loader.load(init);

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;

app.stage.buttonMode = true;


//TO BE MOVED AND REMOVED
class Tree {
    constructor (data, posX, posY) {
        this.data = data;
        this.treeContainer = new PIXI.Container();
        this.treeContainer.enableSort = true;

        this.treeContainer.interactive = true;

        this.treeContainer
            .on('pointerdown', this.onDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);

        var skillGroup = new PIXI.display.Group(0, true);
        var skillLayer = new PIXI.display.Layer(skillGroup);
        skillLayer.group.enableSort = true;
        app.stage.addChild(skillLayer);

        for (var level = 0; level < data.length; ++level) {
            for (var i = 0; i < data[level].length; ++i) {
                data[level][i].itemcontainer = new ItemContainer(app, data, level, i);

                // Positioning of the containers dynamically by level and by index inside level
                data[level][i].itemcontainer.container.position.x = i * 130 + (app.renderer.width - data[level].length * 130) / 2 + posX;
                data[level][i].itemcontainer.container.position.y = level * 150 + posY;

                data[level][i].itemcontainer.container.parentLayer = skillLayer;
                this.treeContainer.addChild(data[level][i].itemcontainer.container);
            }
        }

        this.drawConnectionLines();
    }

    drawConnectionLines() {
        var connectionGroup = new PIXI.display.Group(-1, false);

        for (var level = 0; level < this.data.length; ++level) {
            for (var i = 0; i < this.data[level].length; ++i) {
                if (this.data[level][i].children !== undefined) {
                    for (var k = 0; k < this.data[level][i].children.length; ++k) {
                        var child = this.data[this.data[level][i].children[k].level][this.data[level][i].children[k].i];

                        // Draw the line
                        var connection = new PIXI.Graphics();
                        connection.lineStyle(4, 0xffffff);
                        connection.moveTo(this.data[level][i].itemcontainer.container.x + this.data[level][i].itemcontainer.skillborder.width / 2, this.data[level][i].itemcontainer.container.position.y + this.data[level][i].itemcontainer.skillborder.height  - 8);
                        connection.lineTo(child.itemcontainer.container.position.x + child.itemcontainer.skillborder.width / 2, child.itemcontainer.container.position.y + 5);

                        // Add the line
                        this.treeContainer.addChild(connection);
                        connection.parentGroup = connectionGroup;

                        // Saving child's zero skill level parents
                        if (this.data[level][i].skill_level == 0) {
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

    onDragStart(event) {
        event.drag = false;
        var obj = event.currentTarget;
        obj.dragData = event.data;
        obj.dragging = 1;
        obj.dragPointerStart = event.data.getLocalPosition(obj.parent);
        obj.dragObjStart = new PIXI.Point();
        obj.dragObjStart.copy(obj.position);
        obj.dragGlobalStart = new PIXI.Point();
        obj.dragGlobalStart.copy(event.data.global);

        app.start();
    }

    onDragEnd(event) {
        var obj = event.currentTarget;
        if (!obj.dragging) return;

        obj.dragging = 0;
        obj.dragData = null;

        app.stop();
    }

    onDragMove(event) {
        var obj = event.currentTarget;
        if (!obj.dragging) return;
        var data = obj.dragData;
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
}

function init () {
    var tree = new Tree(allData[1], 0, 30, app.stage);
    app.stage.addChild(tree.treeContainer);

    // back button
    var backButton = new PIXI.Sprite.fromImage("pictures/back.png");
    backButton.interactive = true;
    backButton.buttonMode = true;
    backButton.on('pointerdown', function() { window.open('../chart/chart.html', "_self"); })

    app.stage.addChild(backButton);


    app.renderer.render(app.stage);
}



// Shows and then removes welcome message
function showToast() {
    var toast = document.getElementById("toast");

    toast.className = "show";

    setTimeout(function(){
        toast.className = ""
    }, 3000);
}
