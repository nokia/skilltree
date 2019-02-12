// hides chart, shows tree
function showTree (treeName, _data, self) {
    document.getElementById('creator').style.display = "none";
    document.getElementById('approveTrees').style.display = "none";
    document.getElementById('approveSkills').style.display = "none";
    document.getElementById('pixiCanvas').style.display = "block";

    if (tree != undefined) {
        app.stage.removeChild(tree.treeContainer);
        tree = undefined;
    }
    selectedTreeName = treeName;

    let skills = new Array();
    for (var j = 0; j < _data.trees.find(obj => obj.name == treeName).skillNames.length; ++j) {
        let skillName = _data.trees.find(obj => obj.name == treeName).skillNames[j];
        let skill = _data.skills.find(obj => obj.name == skillName);

        skills.push(skill);
    }

    if (chartContainer != undefined) {
        app.stage.removeChild(chartContainer);
        chartContainer = undefined;
    }

    document.getElementById("openchart").value = "Open Chart";
    document.getElementById("openchart").onclick = showChart;

    let owner = {self: self, username: _data.username};
    tree = new Tree(app, skills, owner);
    app.stage.addChild(tree.treeContainer);
    tree.treeContainer.pivot.set(tree.treeContainer.width / 2, tree.treeContainer.height / 2);
    tree.treeContainer.position.set(app.renderer.width / 2 + tree.treeContainer.width / 2, app.renderer.height / 2);

    tree.treeContainer.alpha = 1;
    tree.skills[0].itemcontainer.refreshAvaliability();
    app.renderer.render(app.stage);
    document.getElementById("pixiCanvas").style.visibility = "visible";
    app.start();

    // fading animation, disabled for now.
    /*var fadein = function (delta) {
        tree.treeContainer.alpha += .05;
        if (tree.treeContainer.alpha == 1) {
            app.ticker.remove(fadein);
            app.stop();
        }
    };
    app.ticker.add(fadein);*/
}

// hides tree, shows chart.
function showChart() {
    document.getElementById('creator').style.display = "none";
    document.getElementById('approveTrees').style.display = "none";
    document.getElementById('approveSkills').style.display = "none";
    document.getElementById('pixiCanvas').style.display = "block";

    document.getElementById("openchart").onclick = showTree(data.mainTree, data, true);

    if (tree != undefined) {
        app.stage.removeChild(tree.treeContainer);
        tree = undefined;
    }

    chartContainer = new PIXI.Container();

    let sliceCount = data.categories.length;

    //initialize chart variables
    let x = 0;
    let y = 0;
    let width = 240;
    let h1 = 60;
    let h2 = h1 + width;

    for (var i = 0; i < sliceCount; i++) {
        let tempContainer = new PIXI.Container();

        let skills = data.skills.filter(obj => obj.categoryName == data.categories[i].name);
        let sumAP = skills.sum("achievedPoint");
        let sumMP = skills.sum("maxPoint");
        let percent = 0;
        if (sumMP != 0) percent = sumAP / sumMP;

        h2 = h1 + width;
        let s = (i * (360 / sliceCount) * Math.PI) / 180;
        let e = ((i + 1) * (360 / sliceCount) * Math.PI) / 180;

        let slice = new PIXI.Graphics();
        slice.lineStyle(3, 0x000000);

        slice.moveTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        slice.beginFill(0xFFFFFF);
        slice.arc(x, y, h1, e, s, true);
        slice.arc(x, y, h2, s, e, false);
        slice.lineTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        slice.endFill();

        tempContainer.addChild(slice);

        h2 = h1 + (width * percent);
        let innerSlice = new PIXI.Graphics();
        innerSlice.lineStyle(3, 0x000000);
        innerSlice.moveTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        innerSlice.beginFill(0x5cb85c);
        innerSlice.arc(x, y, h1, e, s, true);
        innerSlice.arc(x, y, h2, s, e, false);
        innerSlice.lineTo(x + Math.cos(e) * h1, y + Math.sin(e) * h1);
        innerSlice.endFill();

        tempContainer.addChild(innerSlice);

        //Clickabke slices ----------------------------
        /*sliceContainer[i].buttonMode = true;
        sliceContainer[i].interactive = true;

        sliceContainer[i]
                    .on('pointerover', function() {
                        this.alpha = 0.75;
                        app.renderer.render(app.stage);
                    })
                    .on('pointerout', function() {
                        this.alpha = 1;
                        app.renderer.render(app.stage);
                    })
                    .on('pointerdown', function() {
                        hideChart();
                        showTree(this.id);
                    });*/

        // creates tree name at the chart
        //var text = new PIXI.Text(treeData.find(obj => obj.treeID == userData[i].treeID).treeName, {fill: '#ffffff', wordWrap: true, wordWrapWidth: 200, align: 'center'});

        //Write category names
        let text = new PIXI.Text(data.categories[i].name, {fill: '#000000', wordWrap: true, wordWrapWidth: 200, align: 'center'});
        let points = [];
        let radius = 320 + (text.height / 29 - 1) * 15;
        let pointsCount = 20;
        if (Math.floor(sliceCount / 2) <= i) {
            for (var j = 0; j < pointsCount; j++) {
                let px = radius * Math.cos(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                let py = radius * Math.sin(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                points.push(new PIXI.Point(px, py));
            }
        } else {
            for (var j = pointsCount - 1; j > 0; --j) {
                let px = radius * Math.cos(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                let py = radius * Math.sin(j * Math.PI * 2 * text.width / (250 * 8 / sliceCount) / pointsCount / sliceCount + s);
                points.push(new PIXI.Point(px, py));
            }
        }

        let rope = new PIXI.mesh.Rope(text.texture, points);
        rope.rotation = (Math.PI * 2 / sliceCount - text.width / (240 * 8 / sliceCount) * Math.PI * 2 / sliceCount * 0.95) / 2;
        tempContainer.addChild(rope);

        chartContainer.addChild(tempContainer);
    }

    /*var logo = new PIXI.Sprite(PIXI.loader.resources["tree.png"].texture);
    logo.anchor.set(0.5, 0.5);
    logo.position.set(window.innerWidth / 2, window.innerHeight / 2);
    logo.scale.set(0.42);
    app.stage.addChild(logo);
    chartContainer.addChild(logo);*/

    chartContainer.position.set((window.innerWidth) / 2, (window.innerHeight - 64) / 2);
    app.stage.addChild(chartContainer);

    // scale chart
    let ratio = chartContainer.width / chartContainer.height;
    if (window.innerWidth < window.innerHeight - 90) {
        chartContainer.width = window.innerWidth - 40;
        chartContainer.height = (window.innerWidth - 40) / ratio;
    } else {
        chartContainer.width = (window.innerHeight - 90) * ratio;
        chartContainer.height = window.innerHeight - 90;
    }

    //app.renderer.render(app.stage);
}
