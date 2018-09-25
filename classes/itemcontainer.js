export class ItemContainer {
    constructor(position_x, position_y, skillicon, skillborder) {
        //Loading images
        this.skillicon = new PIXI.Sprite.fromImage(skillicon);
        this.skillborder = new PIXI.Sprite.fromImage(skillborder);

        //Initilaizing container
        this.container = new PIXI.Container();
        this.container.addChild(this.skillicon);
        this.container.addChild(this.skillborder);

        this.skillicon.anchor.set(0.5, 0.5);
        this.skillborder.anchor.set(0.5, 0.5);

        this.skillicon.position.set(65, 65);
        this.skillborder.position.set(65, 65);

        this.skillborder.interactive = true;
        this.skillborder
            .on("pointerdown", this.onButtonDown)
            .on('pointerover', this.onButtonOver)
            .on('pointerout', this.onButtonOut)
            .on('rightdown', this.onRightDown);

        //Moving container to its spot.
        this.container.position.set(position_x, position_y);

    }

    onButtonDown()
    {
        this.isdown = true;
        this.filters = [new PIXI.filters.GlowFilter(6,2,2, 0xFF4000, 1)];
    }

    onButtonOver()
    {
        this.isOver = true;
        if(this.isdown) return;
        this.filters = [new PIXI.filters.GlowFilter(6,2,2, 0xFFBF00, 1)];
    }

    onButtonOut()
    {
        this.isOver = false;
        if(this.isdown) return;
        this.filters = null;
    }

    onRightDown()
    {
        
        this.filters = [new PIXI.filters.GlowFilter(6,2,2, 0xFFFFFF, 1)];
    }


}