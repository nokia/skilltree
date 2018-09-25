export class ItemContainer {
    constructor(position_x, position_y, skillicon, skillborder, levelborder, skill_level, max_skill_level) {
        //Loading images
        this.skillicon = new PIXI.Sprite.fromImage(skillicon); //100x100
        this.skillborder = new PIXI.Sprite.fromImage(skillborder); //116x116
        this.levelborder = new PIXI.Sprite.fromImage(levelborder);

        //Setting border variables
        this.skillborder.skill_level = skill_level;
        this.skillborder.max_skill_level = max_skill_level;
        this.skillborder.levelinfo = new PIXI.Text(skill_level + " / "+ max_skill_level);

        //Initilaizing container
        this.container = new PIXI.Container();
        this.container.addChild(this.skillicon);
        this.container.addChild(this.levelborder);
        this.container.addChild(this.skillborder);
        this.container.addChild(this.skillborder.levelinfo);
        

        //Setting size, position of objects in container
        this.skillicon.anchor.set(0.5, 0.5);
        this.skillborder.anchor.set(0.5, 0.5);
        this.levelborder.anchor.set(1,0);
        this.skillborder.levelinfo.anchor.set(1,0);

        this.skillicon.position.set(58, 58);
        this.skillborder.position.set(58, 58);
        this.levelborder.position.set(115,1);
        this.skillborder.levelinfo.position.set(105, 15);
        this.skillborder.levelinfo.scale.set(0.5);

        //Adding events to the container (to border, covers it all)
        this.skillborder.interactive = true;
        this.skillborder
            .on('click', this.onClick)
            .on('pointerover', this.onButtonOver)
            .on('pointerout', this.onButtonOut)
            .on('rightclick', this.onRightClick);

        //Moving container to its spot.
        this.container.position.set(position_x, position_y);

        
        

    }

    onClick()
    {
        
        if(this.skill_level<this.max_skill_level)
        {
            this.skill_level ++;
            this.levelinfo.text = (this.skill_level + " / " + this.max_skill_level);
            console.log(this.skill_level);
            if(this.skill_level==this.max_skill_level)
            {
                this.isdown = true;
                this.filters = [new PIXI.filters.GlowFilter(6,2,2, 0xFF4000, 1)];
            }
        }
        
        
        
        
    }

    onButtonOver()
    {
        if(this.skill_level == this.max_skill_level) return;
        this.filters = [new PIXI.filters.GlowFilter(6,2,2, 0xFFBF00, 1)];
    }

    onButtonOut()
    {
        if(this.skill_level == this.max_skill_level) return;
        this.filters = null;
    }

    onRightClick()
    {
        if(this.skill_level>0)
        {
            this.skill_level --;
            this.levelinfo.text = (this.skill_level + " / " + this.max_skill_level);
        } else return;

            this.filters = [new PIXI.filters.GlowFilter(6,2,2, 0xFFBF00, 1)];
    }

    addHoverContainer(hovercontainer) //Sets hover containers position to the itemcontainer
    {
        //TODO
    }

}