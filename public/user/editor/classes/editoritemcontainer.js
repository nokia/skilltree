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

        this.container.interactive = true;
        this.container
            .on('pointerdown', this.onDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);
    }

    onClick(event) {
        if (!event.drag) {
            this.parentObj.app.renderer.render(this.parentObj.app.stage);
        }
    }

    onRightClick() {

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
            obj.position.x = obj.dragObjStart.x + (dragPointerEnd.x - obj.dragPointerStart.x);

            if (Math.abs(obj.position.y - obj.dragObjStart.y + (dragPointerEnd.y - obj.dragPointerStart.y)) > 75) {
                var levelChange = Math.floor(((obj.position.y - obj.dragObjStart.y + (dragPointerEnd.y - obj.dragPointerStart.y)) + 75) / 150);
                if (levelChange < 0) levelChange++;

                obj.position.y += levelChange * 150;
            }
        }
    }
}
