import {ItemContainer} from './classes/itemcontainer.js';

var app = new PIXI.Application(
    {backgroundColor: 0x1099bb}
);
document.body.appendChild(app.view);

<<<<<<< HEAD
var data = [
    {
        skillicon: "skillicon.jpg",
        skillborder: "skillborder.png",
    },
    {
        skillicon: "skillicon.jpg",
        skillborder: "skillborder.png",
    },
];
for (var i = 0; i < data.length; ++i) {
    var itemcontainer = new ItemContainer(data.skillicon, data.skillborder);
    app.stage.addChild(itemcontainer.sprite);
}
=======
var itemcontainer = new ItemContainer('pictures/skillicon.jpg', "pictures/skillborder.png" );


app.stage.addChild( itemcontainer.container );
>>>>>>> 2747b86c71da662afa8cecc10d7587adcf6ca3a3
