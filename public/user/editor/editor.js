function openEditor () {
    app.stage.removeChild(tree.treeContainer);
    app.localLoader.destroy();
    tree = undefined;

    // load the tree's pictures
    app.localLoader = new PIXI.loaders.Loader();
    for (var j = 0; j < treeData.find(obj => obj.treeID == treeID).skills.length; ++j) {
        var skill = treeData.find(obj => obj.treeID == treeID).skills[j];
        app.localLoader.add(skill.skillIcon.toString());
    }

    app.localLoader.load(function () {
        tree = new EditorTree(app, treeID, treeData.find(obj => obj.treeID == treeID), userData.find(obj => obj.treeID == treeID), 0, 30);
        app.stage.addChild(tree.treeContainer);

        app.renderer.render(app.stage);
    });
}