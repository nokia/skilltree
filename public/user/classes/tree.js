class Tree {
    constructor (app, skills, owner) {
        this.skills = skills;
        this.treeContainer = new PIXI.Container();
        this.treeContainer.enableSort = true;
        this.treeContainer.interactive = true;

        this.treeContainer
            .on('pointerdown', this.onDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);

        let skillGroup = new PIXI.display.Group(0, true);
        let skillLayer = new PIXI.display.Layer(skillGroup);
        skillLayer.group.enableSort = true;
        app.stage.addChild(skillLayer);

        let level = 0;
        let tmpChildren = [];
        let n = 1;
        let levelLength = [];

        for(let i = 0; i < this.skills.length; i++){
          if(tmpChildren.includes(this.skills[i].name)){
            level += 1;
            tmpChildren = [];
            n = 1;
            levelLength[level] = n;
          }
          else { levelLength[level] = n;}
          this.skills[i].level = level;
          this.skills[i].place = n;
          for (let j = 0; j < this.skills[i].children.length; ++j){
            tmpChildren.push(this.skills[i].children[j].name);
          }
          n++;
        }

        for (let i = 0; i < this.skills.length; i++) {
            this.skills[i].itemcontainer = new ItemContainer(app, this.skills, this.skills[i].name, owner);

            this.skills[i].itemcontainer.container.position.x = (this.skills[i].place - 1) * 100 - (levelLength[this.skills[i].level] * 100) / 2;
            this.skills[i].itemcontainer.container.position.y = this.skills[i].level * 115;

            this.skills[i].itemcontainer.container.parentLayer = skillLayer;
            this.treeContainer.addChild(this.skills[i].itemcontainer.container);
        }

        this.drawConnectionLines();
    }

    drawConnectionLines() {
        let connectionGroup = new PIXI.display.Group(-1, false);

        for (let j = 0; j < this.skills.length; j++) {
            if (this.skills[j].children !== undefined) {
                for (let k = 0; k < this.skills[j].children.length; k++) {
                    let child = this.skills.find(obj => obj.name == this.skills[j].children[k].name);
                    if (child != undefined) {
                        let minPoint = this.skills[j].children[k].minPoint;

                        // Draw the line
                        let connection = new PIXI.Graphics();
                        connection.lineStyle(4, 0x000000);
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
}
