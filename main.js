import {ItemContainer} from './classes/itemcontainer.js';

var app = new PIXI.Application(
    {backgroundColor: 0x1099bb}
);
document.body.appendChild(app.view);

var data = [
    {
        position_x: 100,
        position_y: 100,
        skillicon: "pictures/skillicon.jpg",
        skillborder: "pictures/skillborder.png",
    },
    {
        position_x: 100,
        position_y: 400,
        skillicon: "pictures/skillicon.jpg",
        skillborder: "pictures/skillborder.png",
    },
];
for (var i = 0; i < data.length; ++i) {
    var itemcontainer = new ItemContainer(data[i].position_x, data[i].position_y, data[i].skillicon, data[i].skillborder);
    app.stage.addChild(itemcontainer.container);
}
