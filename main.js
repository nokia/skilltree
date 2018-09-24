import {ItemContainer} from './classes/itemcontainer.js';

var app = new PIXI.Application(
    {backgroundColor: 0x1099bb}
);
document.body.appendChild(app.view);

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
