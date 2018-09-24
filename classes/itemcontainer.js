export class ItemContainer {
    ItemContainer(picturename)
    {
        //var container = new PIXI.Container();

        //container.addChild(new PIXI.Sprite.fromImage(picturename));
        this.sprite = new PIXI.Sprite.fromImage(picturename);

       

    }

    Sprite(){

        return this.sprite;
    }

    
    
    
}