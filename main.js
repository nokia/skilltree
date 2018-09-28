import { ItemContainer } from './classes/itemcontainer.js';

var allData = dataJson;

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

app.stage.buttonMode = true;

class Tree {
    constructor (data, posX, posY) {
        this.data = data;
        this.treeContainer = new PIXI.Container();

        this.treeContainer.interactive = true;

        this.treeContainer
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        var skillLayer = new PIXI.display.Layer();
        skillLayer.group.enableSort = true;
        this.treeContainer.addChild(skillLayer);

        for (var level = 0; level < data.length; ++level) {
            for (var i = 0; i < data[level].length; ++i) {
                data[level][i].itemcontainer = new ItemContainer(data, level, i);

                // Positioning of the containers dynamically by level and by index inside level
                data[level][i].itemcontainer.container.position.x = i * 130 + (app.renderer.width - data[level].length * 130) / 2 + posX;
                data[level][i].itemcontainer.container.position.y = level * 150 + posY;

                data[level][i].itemcontainer.container.parentLayer = skillLayer;
                this.treeContainer.addChild(data[level][i].itemcontainer.container);
            }
        }

        this.drawConnectionLines();

        app.stage.addChild(this.treeContainer);
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
                        connection.moveTo(this.data[level][i].itemcontainer.container.x + this.data[level][i].itemcontainer.container.getLocalBounds().x, this.data[level][i].itemcontainer.container.position.y + this.data[level][i].itemcontainer.container.getLocalBounds().y * 2 - 3);
                        connection.lineTo(child.itemcontainer.container.position.x + child.itemcontainer.container.getLocalBounds().x, child.itemcontainer.container.position.y + 2);

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

        this.treeContainer.addChild(new PIXI.display.Layer(connectionGroup));
    }
}

for (var i = 0; i < allData.length; ++i) {
    new Tree(allData[i], i * 100, i * 100);
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
}

function onDragMove(event) {
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