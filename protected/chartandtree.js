var ItemContainer = require('./classes/itemcontainer.js');
//import { ItemContainer } from './classes/itemcontainer.js';

var allData = dataJson;

var app = new PIXI.Application(
    {
        view: pixiCanvas,
        width: window.innerWidth,
        height: window.innerHeight - 30,
        backgroundColor: 0x183693,
        antialias: true,
        autoStart: false,
    }
);

PIXI.loader.add("pictures/skillborder.png")
            .add("tree.png")
            .add("pictures/back.png")
            .add("pictures/tick.png");
PIXI.loader.load(initChart);

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;

// CHART

var sliceCount = 8;
var sliceContainer = new Array(sliceCount);
var logo;

function initChart() {
    document.getElementById("pixiCanvas").style.visibility = "visible";

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;


    var width = 240;
    var h1 = 60;
    var h2 = h1 + width;

    var titles = ['Management', 'Web Development', 'Communication', 'Wellbeing', 'Mobile', 'Server Administration', 'Databases', 'Category'];

    for (var i = 0; i < sliceCount; i++) {
        var currentLevelSum = 0;
        var maxLevelSum = 0;
        var percent = 0;

        if (i < 2) { // temporary, we have only 2 trees
            for (var level = 0; level < allData[i].length; ++level) {
                for (var j = 0; j < allData[i][level].length; ++j) {
                    currentLevelSum += allData[i][level][j].skill_level;
                    maxLevelSum += allData[i][level][j].max_skill_level;
                }
            }

            percent = currentLevelSum / maxLevelSum;
        } else percent = 0;

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

        h2 = h1 + (width * percent);
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
                    .on('pointerover', function() {
                        this.alpha = 0.75;
                        app.renderer.render(app.stage);
                    })
                    .on('pointerout', function() {
                        this.alpha = 1;
                        app.renderer.render(app.stage);
                    })
                    .on('pointerdown', function() {
                        hideChart();
                        showTree(this.id);
                    });

        app.stage.addChild(sliceContainer[i]);

        /*
        *
        *
        *  WIP titles
        *
        *
         */

        var text = new PIXI.Text(titles[i], {fill: '#ffffff', wordWrap: true, wordWrapWidth: 200, align: 'center'});

        var points = [];
        var radius = 320 + (text.height / 29 - 1) * 15;
        var pointsCount = 20;
        if (Math.floor(sliceCount / 2) <= i) {
            for (var j = 0; j < pointsCount; j++) {
                var px = radius * Math.cos(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                var py = radius * Math.sin(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                points.push(new PIXI.Point(px, py));
            }
        } else {
            for (var j = pointsCount - 1; j > 0; --j) {
                var px = radius * Math.cos(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                var py = radius * Math.sin(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                points.push(new PIXI.Point(px, py));
            }
        }

        var rope = new PIXI.mesh.Rope(text.texture, points);
        rope.rotation = (Math.PI * 2 / sliceCount - text.width / (250 * 8 / sliceCount) * Math.PI * 2 / sliceCount * 0.95) / 2;
        app.stage.addChild(rope);
        rope.position.set(window.innerWidth / 2, window.innerHeight / 2);
        sliceContainer[i].title = rope;

        /*
        *
        *
        *
        *
        *
         */
    }

    logo = new PIXI.Sprite(PIXI.loader.resources["tree.png"].texture);
    logo.anchor.set(0.5, 0.5);
    logo.position.set(window.innerWidth / 2, window.innerHeight / 2);
    logo.scale.set(0.42);
    app.stage.addChild(logo);

    app.renderer.render(app.stage);
}

function hideChart () {
    for (var i = 0; i < sliceContainer.length; ++i) {
        app.stage.removeChild(sliceContainer[i]);
        app.stage.removeChild(sliceContainer[i].title);
    }
    app.stage.removeChild(logo);
}

function showChart () {
    for (var i = 0; i < sliceContainer.length; ++i) {
        app.stage.addChild(sliceContainer[i]);
        app.stage.addChild(sliceContainer[i].title);
    }
    app.stage.addChild(logo);
}

// TREE

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

// app.localLoader is a loader for skillicons (when a tree is opened, we load only that tree's skillicons)
// PIXI.loader is global, it loads the back button, skillborder, tree, ...

var tree = undefined;

function showTree (treeID) {
    app.localLoader = new PIXI.loaders.Loader();
    for (var level = 0; level < allData[treeID].length; ++level) {
        for (var i = 0; i < allData[treeID][level].length; ++i) {
            app.localLoader.add(allData[treeID][level][i].skillicon.toString());
        }
    }

    app.localLoader.load(function () {
        tree = new Tree(allData[treeID], 0, 30);
        app.stage.addChild(tree.treeContainer);

        // back button
        var backButton = new PIXI.Sprite(PIXI.loader.resources["pictures/back.png"].texture);
        backButton.interactive = true;
        backButton.buttonMode = true;
        backButton.on('pointerdown', function() {
            // hide tree and show chart
            app.stage.removeChild(tree.treeContainer);
            app.stage.removeChild(backButton);
            app.localLoader.destroy();
            tree = undefined;
            //showChart();
            initChart(); // we need to create the chart again because the levels could have chaged
            app.renderer.render(app.stage);
        });

        app.stage.addChild(backButton);

        app.renderer.render(app.stage);
    });
}
// zooming
/*
var handleWheel = function (event)
{
    var e = window.event || event;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

    if (tree !== undefined) {
        if (delta == 1 && tree.treeContainer.scale.x < 1) {
            tree.treeContainer.scale.x += 0.05;
            tree.treeContainer.scale.y += 0.05;
        } else if (tree.treeContainer.scale.x > 0.5) {
            tree.treeContainer.scale.x -= 0.05;
            tree.treeContainer.scale.y -= 0.05;
        }

        app.renderer.render(app.stage);
    }

    e.preventDefault();
};

var addMouseWheelEventListener = function (scrollHandler)
{
    if (window.addEventListener) {
        window.addEventListener("mousewheel", scrollHandler, false);
        window.addEventListener("DOMMouseScroll", scrollHandler, false);
    } else {
        window.attachEvent("onmousewheel", scrollHandler);
    }
}

addMouseWheelEventListener(handleWheel);
*/