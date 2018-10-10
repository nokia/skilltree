import { ItemContainer } from './tree/classes/itemcontainer.js';

var allData = dataJson;
var sliceCount = 8;
var sliceContainer = new Array(sliceCount);

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
PIXI.loader.add("pictures/skillborder.png")
            .add("tree.png")
            .add("pictures/back.png");
PIXI.loader.load(showChart);

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;
// CHART

function showChart() {
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;


    var width = 240;
    var h1 = 60;
    var h2 = h1 + width;


    for (i = 0; i < sliceCount; i++) {

      var tempContainer = new PIXI.Container();
      tempContainer.id = i;

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
        slice.endFill();

        tempContainer.addChild(slice);

        //generating random percent
        var percent = Math.random();

        h2 = h1 + (width * percent);
        console.log(h2);
        var innerSlice = new PIXI.Graphics();
        innerSlice.lineStyle(3, 0x000000);
        innerSlice.moveTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        innerSlice.beginFill(0xFF0000);
        innerSlice.arc(x, y, h1, e, s, true);
        innerSlice.arc(x, y, h2, s, e, false);
        innerSlice.lineTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        innerSlice.endFill();

        tempContainer.addChild(innerSlice);

        sliceContainer[i] = tempContainer;
        sliceContainer[i].buttonMode = true;
        sliceContainer[i].interactive = true;



        sliceContainer[i]
                    .on('pointerover', function() { this.alpha = 1.2 })
                    .on('pointerout', function() { this.alpha = 0.9; })
                    .on('pointerdown', function() {showTree(this.id);})
                    //.on('pointerdown', function() { console.log(this.id); })

        app.stage.addChild(sliceContainer[i]);

    }

    var logo = new PIXI.Sprite(PIXI.loader.resources["tree.png"].texture);
    logo.anchor.set(0.5, 0.5);
    logo.position.set(window.innerWidth / 2, window.innerHeight / 2);
    logo.scale.set(0.42);
    app.stage.addChild(logo);


}

// TREE

app.stage.buttonMode = true;

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

function showTree (treeID) {
    var tree = new Tree(allData[treeID], 0, 30);
    app.stage.addChild(tree.treeContainer);

    // back button
    var backButton = new PIXI.Sprite(PIXI.loader.resources["pictures/back.png"].texture);
    backButton.interactive = true;
    backButton.buttonMode = true;
    backButton.on('pointerdown', function() {
        app.stage.removeChild(tree.treeContainer);
        app.stage.removeChild(backButton);
    });

    app.stage.addChild(backButton);




    app.renderer.render(app.stage);
}
