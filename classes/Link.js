export default class Link /*extends PIXI.Text*/ { // .link: container, .btn: interactive rectangle, .text; no wordwrap
    constructor (textString, url, style, underline) {
        var link = new PIXI.Container();

        //var text = super(text, style, canvas);
        var text = new PIXI.Text(textString, style);
        link.addChild(text);
        this.text = text;

        if (underline && style !== undefined && style.wordWrap !== true) {
            var line = new PIXI.Graphics();
            line.lineStyle(text.height / 10, style.fill);
            line.moveTo(0, text.height * 11 / 12);
            line.lineTo(text.width, text.height * 11 / 12);
            link.addChild(line);
        } else if (style.wordWrap === true) {
            console.log("Can't underline multiline text");
        }

        var btnRect = new PIXI.Graphics();
        btnRect.drawRect(0, 0, text.width, text.height);
        var btn = new PIXI.Sprite(btnRect.generateTexture());
        btn.interactive = true;
        btn.buttonMode = true;
        btn.on("pointerdown", function () {
            window.open(url, '_self');
        });
        link.addChild(btn);
        this.btn = btn;

        this.link = link;
    }

    enable () {
        this.btn.interactive = true;
        this.btn.buttonMode = true;
    }

    disable () {
        this.btn.interactive = false;
        this.btn.buttonMode = false;
    }
}

