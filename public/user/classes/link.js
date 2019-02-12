class Link {
    constructor (textString, url, style, underline) {
        let link = new PIXI.Container();

        let text = new PIXI.Text(textString, style);
        link.addChild(text);

        if (underline && style !== undefined && style.wordWrap !== true) {
            let line = new PIXI.Graphics();
            line.lineStyle(text.height / 10, style.fill);
            line.moveTo(0, text.height * 11 / 12);
            line.lineTo(text.width, text.height * 11 / 12);
            link.addChild(line);
        }

        let buttonRect = new PIXI.Graphics();
        buttonRect.drawRect(0, 0, text.width, text.height);
        let button = new PIXI.Sprite(buttonRect.generateTexture());
        button.interactive = true;
        button.buttonMode = true;
        button.on("pointerdown", function () {
            window.open(url, '_self');
        });
        link.addChild(button);

        this.button = button;

        return link;
    }

    enable () {
        this.button.interactive = true;
        this.button.buttonMode = true;
    }

    disable () {
        this.button.interactive = false;
        this.button.buttonMode = false;
    }
}
