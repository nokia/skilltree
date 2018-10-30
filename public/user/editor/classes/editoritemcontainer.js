class EditorItemContainer {
    constructor(app, treeData, treeID, skillID) {
        this.app = app;
        this.treeData = treeData; // only this tree's data
        this.skillData = treeData.skills[skillID];
        this.skillData.treeID = treeID;

        //Creating images
        this.skillicon = new PIXI.Sprite(app.localLoader.resources[this.skillData.skillIcon].texture); //100x100
        this.skillborder = new PIXI.Sprite(PIXI.loader.resources["pictures/skillborder.png"].texture); //116x116

        //Setting border variables
        this.skillborder.levelinfo = new PIXI.Text(this.skillData.maxSkillLevel);

        //Initilaizing container
        this.container = new PIXI.Container();
        this.container.addChild(this.skillicon);

        this.container.addChild(this.skillborder);
        this.container.addChild(this.skillborder.levelinfo);
        this.container.zOrder = 1;

        //Setting size, position of objects in container
        this.skillicon.anchor.set(0.5, 0.5);
        this.skillborder.anchor.set(0.5, 0.5);
        this.skillborder.levelinfo.anchor.set(0.5,0.5);

        this.skillicon.position.set(60, 60);
        this.skillborder.position.set(60, 60);

        this.skillborder.levelinfo.position.set(96, 100);
        this.skillborder.levelinfo.scale.set(0.6);
        this.skillborder.levelinfo.style.fill = 0xFFFFFF;

        //Adding events
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;
        this.skillborder.parentObj = this;
        this.skillborder
            .on('click', this.onClick)
            .on('rightclick', this.onRightClick);
    }

    onClick(event) {
        if (!event.drag) {
            this.parentObj.app.renderer.render(this.parentObj.app.stage);
        }
    }

    onRightClick() {

    }
}
