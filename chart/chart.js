var app = new PIXI.Application(
    {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x000000,
        antialias: true,
        autoStart: true, // TODO false and rendering only when needed
    }
);

document.body.appendChild(app.view);