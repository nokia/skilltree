import {ItemContainer} from './classes/itemcontainer.js';

var app = new PIXI.Application(
    {backgroundColor: 0x1099bb}
);
document.body.appendChild(app.view);

var itemcontainer = new ItemContainer("pictures/square.png");
app.stage.addChild( itemcontainer.sprite );