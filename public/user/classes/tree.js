class Tree {
    constructor (app, skills) {
        this.skills = skills;
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

        var level = 0;
        var tmpChildren = [];
        var n = 1;
        var levelLength = [];

        for(var i = 0; i < this.skills.length; i++){
          if(tmpChildren.includes(this.skills[i].name)){
            level += 1;
            tmpChildren = [];
            n = 1;
            levelLength[level] = n;
          }
          else { levelLength[level] = n;}
          this.skills[i].level = level;
          this.skills[i].place = n;
          for (var j = 0; j < this.skills[i].children.length; ++j){
            tmpChildren.push(this.skills[i].children[j].name);
          }
          n++;
        }

        for(var i = 0; i < this.skills.length; i++){
          this.skills[i].itemcontainer = new ItemContainer(app, this.skills, this.skills[i].name);

          this.skills[i].itemcontainer.container.position.x = (this.skills[i].place - 1) * 100 - (levelLength[this.skills[i].level] * 100) / 2;
          this.skills[i].itemcontainer.container.position.y = this.skills[i].level * 115;

          this.skills[i].itemcontainer.container.parentLayer = skillLayer;
          this.treeContainer.addChild(this.skills[i].itemcontainer.container);
        }

        this.drawConnectionLines();
    }

    // not ready yet
    // this needs to be in an array, that parses through
    // the parents of the addedSkill, and we have to cover
    // the cases of the added skill being a root skill or
    // being in a new line.


    // not ready yet

    drawConnectionLines() {
        var connectionGroup = new PIXI.display.Group(100, false);

        for (var j = 0; j < this.skills.length; j++) {
            if (this.skills[j].children !== undefined) {
                for (var k = 0; k < this.skills[j].children.length; k++) {
                    var child = this.skills.find(obj => obj.name == this.skills[j].children[k].name);
                    if (child != undefined && !this.skills[j].children[k].recommended) {
                        var minPoint = this.skills[j].children[k].minPoint;

                        // Draw the line
                        var connection = new PIXI.Graphics();
                        connection.lineStyle(4, 0xffffff);
                        //connection.zOrder = 10;
                        connection.moveTo(this.skills[j].itemcontainer.container.x + this.skills[j].itemcontainer.skillborder.width / 2, this.skills[j].itemcontainer.container.position.y + this.skills[j].itemcontainer.skillborder.height - 8);
                        connection.lineTo(child.itemcontainer.container.position.x + child.itemcontainer.skillborder.width / 2, child.itemcontainer.container.position.y + 5);

                        // Add the line
                        this.treeContainer.addChild(connection);
                        connection.parentGroup = connectionGroup;

                        if (this.skills[j].achievedPoint < minPoint || child.lowAPParents != undefined) {
                            child.itemcontainer.disable();

                            if (child.lowAPParents === undefined) {
                                child.lowAPParents = new Array();
                            }
                            child.lowAPParents.push(this.skills[j].name);
                        }
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
