class Tree {
    constructor (app, treeID, _treeData, _userData, posX, posY) {
        this.treeData = _treeData; // contains only this tree's data
        this.userData = _userData; // contains user's data for this tree
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

        var level = 0;                                                                      // ????? for positioning itemcontainers horizontlly
        var i = 0;                                                                          // ?????
        var levelLength = this.treeData.skills.filter(obj => obj.level == level).length;    // ?????
        for (var j = 0; j < this.treeData.skills.length; ++j) {
            if (j > 0) {                                                                    // ?????
                if (level == this.treeData.skills[j].level) ++i;                            // ?????
                else {                                                                      // ?????
                    ++level;                                                                // ?????
                    i = 0;                                                                  // ?????
                    levelLength = this.treeData.skills.filter(obj => obj.level == level).length;    // ?????
                }                                                                           // ?????
            }                                                                               // ?????

            this.treeData.skills[j].itemcontainer = new ItemContainer(app, this.treeData, this.userData, treeID, this.treeData.skills[j].skillID);

            // Positioning of the containers dynamically by level and by index inside level
            this.treeData.skills[j].itemcontainer.container.position.x = i * 130 + (app.renderer.width - levelLength * 130) / 2 + posX; // ?????
            this.treeData.skills[j].itemcontainer.container.position.y = this.treeData.skills[j].level * 150 + posY;

            this.treeData.skills[j].itemcontainer.container.parentLayer = skillLayer;
            this.treeContainer.addChild(this.treeData.skills[j].itemcontainer.container);
        }

        this.drawConnectionLines();
    }

    drawConnectionLines() {
        var connectionGroup = new PIXI.display.Group(-1, false);

        for (var j = 0; j < this.treeData.skills.length; ++j) {
            if (this.treeData.skills[j].children !== undefined) {
                for (var k = 0; k < this.treeData.skills[j].children.length; ++k) {
                    var child = this.treeData.skills.find(obj => obj.skillID == this.treeData.skills[j].children[k].skillID);

                    // Draw the line
                    var connection = new PIXI.Graphics();
                    connection.lineStyle(4, 0xffffff);
                    connection.moveTo(this.treeData.skills[j].itemcontainer.container.x + this.treeData.skills[j].itemcontainer.skillborder.width / 2, this.treeData.skills[j].itemcontainer.container.position.y + this.treeData.skills[j].itemcontainer.skillborder.height - 8);
                    connection.lineTo(child.itemcontainer.container.position.x + child.itemcontainer.skillborder.width / 2, child.itemcontainer.container.position.y + 5);

                    // Add the line
                    this.treeContainer.addChild(connection);
                    connection.parentGroup = connectionGroup;

                    // Saving child's zero skill level parents
                    if (this.treeData.skills[j].skillLevel == 0 || this.treeData.skills[j].zeroSLParents != undefined) {
                        child.itemcontainer.disable();

                        if (child.zeroSLParents === undefined) {
                            child.zeroSLParents = new Array();
                        }
                        child.zeroSLParents.push({skillID: this.treeData.skills[j].skillID});
                    }
                }
            }
        }

        app.stage.addChild(new PIXI.display.Layer(connectionGroup));
    }

    /*onDragStart(event) {
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

    // not sure if we need dragging
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
    }*/
}