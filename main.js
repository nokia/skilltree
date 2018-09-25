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
        levelborder: "pictures/levelborder.jpg",
        skill_level: 2,
        max_skill_level: 5
    },
    {
        position_x: 100,
        position_y: 400,
        skillicon: "pictures/skillicon.jpg",
        skillborder: "pictures/skillborder.png",
        levelborder: "pictures/levelborder.jpg",
        skill_level: 0,
        max_skill_level: 5
    },
];
for (var i = 0; i < data.length; ++i) {
    var itemcontainer = new ItemContainer(data[i].position_x, data[i].position_y, data[i].skillicon, data[i].skillborder, data[i].levelborder, data[i].skill_level, data[i].max_skill_level);
    app.stage.addChild(itemcontainer.container);
}
