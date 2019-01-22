class EditorTree {
    constructor (app, _treeData, posX, posY) {
        this.treeData = _treeData; // contains only this tree's data
        this.treeContainer = new PIXI.Container();
        this.treeContainer.enableSort = true;

        var skillGroup = new PIXI.display.Group(0, true);
        var skillLayer = new PIXI.display.Layer(skillGroup);
        skillLayer.group.enableSort = true;
        app.stage.addChild(skillLayer);

        var level = 0;
        var tmpChildren = [];

        for(var i = 0; i < this.treeData.skills.length; i++){
          if(tmpChildren.find(obj => obj.id == this.treeData.skills[i].id) !== undefined){
            level += 1;
            tmpChildren = [];
          }
          this.treeData.skills[i].level = level;
          for(var j = 0; j < this.treeData.skills[i].children.length; j++){
            tmpChildren.push(this.treeData.skills[i].children[j].id);
          }


          this.treeData.skills[i].itemcontainer = new EditorItemContainer(app, this.treeData, this.treeData.skills[i].id);
          this.treeData.skills[i].itemcontainer.container.position.x = i * 130 + (app.renderer.width - levelLength * 130) / 2 + posX;
          this.treeData.skills[i].itemcontainer.container.position.y = this.treeData.skills[j].level * 150 + posY;

          this.treeData.skills[i].itemcontainer.container.parentLayer = skillLayer;
          this.treeContainer.addChild(this.treeData.skills[i].itemcontainer.container);
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
                }
            }
        }

        app.stage.addChild(new PIXI.display.Layer(connectionGroup));
    }
}
