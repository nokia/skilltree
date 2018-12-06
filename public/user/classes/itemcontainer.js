class ItemContainer {
    constructor(app, skills, skillName) {
        this.app = app;
        this.skills = skills;
        this.skill = skills.find(obj => obj.name == skillName);

        //Creating images
        this.skillicon = new PIXI.Sprite(PIXI.loader.resources[this.skill.skillIcon].texture); //100x100
        this.skillborder = new PIXI.Sprite(PIXI.loader.resources["pictures/skillborder.png"].texture); //116x116
        this.tick = new PIXI.Sprite(PIXI.loader.resources["pictures/tick.png"].texture);

        //Setting border variables
        this.skillborder.levelinfo = new PIXI.Text(this.skill.achievedPoint + "/" + this.skill.maxPoint);
        this.skillborder.levelinfo.scale.set(.5);

        //Creating details page
        var detailsWidth = 240;
        var detailsMargin = 10;
        var nameFontSize = 20;
        var descriptionFontSize = 12;

        this.details = new PIXI.Container();

        var detailsForeground = new PIXI.Container();
        var name = new PIXI.Text(this.skill.name, {fontSize: nameFontSize, fill: 0x000000});
        name.position.set(10, 10);
        detailsForeground.addChild(name);

        var description = new PIXI.Text(this.skill.description, {fontSize: descriptionFontSize, fill: 0x000000, wordWrap: true, wordWrapWidth: detailsWidth - detailsMargin * 2 });
        description.position.set(detailsMargin, detailsMargin * 2 + nameFontSize);
        detailsForeground.addChild(description);
        detailsForeground.zOrder = 1;

        var btnG = new PIXI.Graphics();
        btnG.lineStyle(1, 0x888888);
        btnG.beginFill(0x44cc44);
        btnG.drawRect(0, 0, 70, 26);
        btnG.endFill();

        var btnGHover = new PIXI.Graphics();
        btnGHover.lineStyle(1, 0x888888);
        btnGHover.beginFill(0x217821);
        btnGHover.drawRect(0, 0, 70, 26);
        btnGHover.endFill();

        var btn1 = new PIXI.Sprite(btnG.generateTexture());

        var txt1 = new PIXI.Text("TRAINING", {fontSize: 14, fill: 0x000000});
        txt1.anchor.set(0.5, 0.5);
        txt1.position.set(35,13);

        var btn1Container = new PIXI.Container();
        btn1Container.addChild(btn1, txt1);
        btn1Container.position.set(  (detailsWidth - btn1Container.width)/2  , description.position.y + description.height + 10);
        btn1Container.interactive = true;
        btn1Container.buttonMode = true;
        btn1Container.parentObj = this;
        btn1Container
                .on('pointerover', function () {
                        btn1.texture = btnGHover.generateTexture();
                        app.renderer.render(app.stage);
                        })
                .on('pointerout', function () {
                        btn1.texture = btnG.generateTexture();
                        app.renderer.render(app.stage);
                        })
                .on('click', function () {
                        this.parentObj.toggleSkillDetailsPage();
                        });
        detailsForeground.addChild(btn1Container);

        /*
        var btn2 = new PIXI.Sprite(btnG.generateTexture());

        var txt2 = new PIXI.Text("REQUEST", {fontSize: 14, fill: 0x000000});
        txt2.anchor.set(0.5, 0.5);
        txt2.position.set(35, 13);

        var btn2Container = new PIXI.Container();
        btn2Container.addChild(btn2, txt2);
        btn2Container.position.set(detailsWidth - detailsMargin - 20 - btn2Container.width, description.position.y + description.height + 10);
        btn2Container.interactive = true;
        btn2Container.buttonMode = true;
        btn2Container.on('pointerover', function () {
            btn2.texture = btnGHover.generateTexture();
            app.renderer.render(app.stage);
        });
        btn2Container.on('pointerout', function () {
            btn2.texture = btnG.generateTexture();
            app.renderer.render(app.stage);
        });
        detailsForeground.addChild(btn2Container);
        */
        /*// Temporary link
        if (skillName == 0) {
            var link = new Link("Nokia website", "https://nokia.com", {fontSize: 12, fill: 0x0000ff}, true);
            link.position.set(detailsMargin, btn1Container.position.y + btn1Container.height + 7);
            detailsForeground.addChild(link);
        }
        //*/

        var detailsBackground = new PIXI.Graphics();
        detailsBackground.beginFill(0xffffff);
        detailsBackground.drawRoundedRect(0, 0, detailsWidth, detailsForeground.height + detailsMargin * 2, 4);
        detailsBackground.endFill();

        this.details.addChild(detailsBackground);
        this.details.addChild(detailsForeground);

        //Initilaizing container
        this.container = new PIXI.Container();
        this.container.addChild(this.skillicon);

        this.container.addChild(this.tick);
        this.container.addChild(this.skillborder);
        this.container.addChild(this.skillborder.levelinfo);
        this.container.zOrder = 3;

        //Setting size, position of objects in container
        this.skillicon.anchor.set(0.5, 0.5);
        this.skillborder.anchor.set(0.5, 0.5);
        this.skillborder.levelinfo.anchor.set(0.5, 0.5);

        this.skillicon.position.set(38.5, 38.5);
        this.skillborder.position.set(38.5, 38.5);

        this.skillborder.levelinfo.position.set(61, 63);
        this.skillborder.levelinfo.style.fill = 0xFFFFFF;

        this.details.position.set(74, 0);

        // if it's already maxed out add the tick
        if (this.skill.achievedPoint == this.skill.maxPoint) {
            //this.skillborder.filters = [new PIXI.filters.GlowFilter(10, 4, 4, 0xFF4000, 1)];
            this.tick.alpha = 1;
        } else this.tick.alpha = 0;


        this.tick.anchor.set(0.5, 0.5);
        this.tick.position.set(38.5, 38.5);

        //Adding events
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;
        this.skillborder.parentObj = this;
        this.skillborder
            .on('click', this.onClick)
            .on('rightclick', this.onRightClick);

        this.container.parentObj = this;
        this.container.interactive = true;
        this.container
            .on('pointerover', this.onButtonOver)
            .on('pointerout', this.onButtonOut);
    }



    onClick(event) {
        if (!event.drag) {
            var children = this.parentObj.skill.children;

            // Increase skill level
            if (this.parentObj.skill.achievedPoint < this.parentObj.skill.maxPoint) {
                this.parentObj.skill.achievedPoint++;
                this.levelinfo.text = (this.parentObj.skill.achievedPoint + "/" + this.parentObj.skill.maxPoint);
                if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint) {
                    this.parentObj.tick.alpha = 1;
                    this.parentObj.skillborder.filters = null;
                }

                //save level change (kell?)
                //this.parentObj.skills.find(obj => obj.name == this.parentObj.skill.name).achievedPoint++;
            }

            this.parentObj.app.renderer.render(this.parentObj.app.stage);
            this.parentObj.refreshAvaliability();
        }
    }

    onRightClick() {
        var children = this.parentObj.skill.children;


        // Decrease skill level
        if(this.parentObj.skill.achievedPoint > 0)
        {
            this.parentObj.skill.achievedPoint--;
            this.levelinfo.text = (this.parentObj.skill.achievedPoint + "/" + this.parentObj.skill.maxPoint);

            //save level change (kell?)
            //this.parentObj.skills.find(obj => obj.name == this.parentObj.skill.name).achievedPoint--;
        } else return;
        this.parentObj.tick.alpha = 0;
        this.filters = [new PIXI.filters.GlowFilter(10,4,4, 0xFFBF00, 1)];

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
        this.parentObj.refreshAvaliability();
    }

    refreshAvaliability(){
      for (var i = 0; i < this.skills.length; i++) {
        for (var j = 0; j < this.skills[i].parents.length; j++) {
          var par = this.skills.find(obj => obj.name == this.skills[i].parents[j]);
          if(par !== undefined){
            if(par.children.find(obj => obj.name == this.skills[i].name).minPoint > par.achievedPoint || par.itemcontainer.container.interactive == false){
              var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
              colorMatrixFilter.brightness(0.4);
              this.skills[i].itemcontainer.container.filters = [colorMatrixFilter];
              this.skills[i].itemcontainer.container.interactive = false;
              this.skills[i].itemcontainer.skillborder.interactive = false;
              this.skills[i].itemcontainer.skillborder.buttonMode = false;
            }
            else{
              this.skills[i].itemcontainer.container.filters = null;
              this.skills[i].itemcontainer.container.interactive = true;
              this.skills[i].itemcontainer.skillborder.interactive = true;
              this.skills[i].itemcontainer.skillborder.buttonMode = true;
            }
          }
        }
      }
    }

    onButtonOver() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        // Brings up hovered container
        container.addChild(details);
        container.zOrder = 2;

        this.parentObj.app.renderer.render(this.parentObj.app.stage);

        if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint) return;
        skillborder.filters = [new PIXI.filters.GlowFilter(10,4,4, 0xFFBF00, 1)];

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }

    onButtonOut() {
        var skillborder = this.parentObj.skillborder;
        var details = this.parentObj.details;
        var container = this;

        container.removeChild(details);
        container.zOrder = 4;

        this.parentObj.app.renderer.render(this.parentObj.app.stage);

        if (this.parentObj.skill.achievedPoint == this.parentObj.skill.maxPoint) return;
        skillborder.filters = null;

        this.parentObj.app.renderer.render(this.parentObj.app.stage);
    }


    enable () {
        this.container.filters = null;
        this.container.interactive = true;
        this.skillborder.interactive = true;
        this.skillborder.buttonMode = true;

        this.app.renderer.render(this.app.stage);
    }

    disable () {
        var colorMatrixFilter = new PIXI.filters.ColorMatrixFilter;
        colorMatrixFilter.brightness(0.4);
        this.container.filters = [colorMatrixFilter];
        this.container.interactive = false;
        this.skillborder.interactive = false;
        this.skillborder.buttonMode = false;

        this.app.renderer.render(this.app.stage);
    }

    toggleSkillDetailsPage(){
                var modal = document.getElementById('skillpage');
        var header = document.getElementById('skillnameHeader');
        var span = document.getElementById("closeORModal");
        var globalskill = undefined;

        var skillname = this.skill.name;
        
        //HTTP Request for offer data
        var offerHttpRequest = new XMLHttpRequest();
            offerHttpRequest.open('POST', '/set/skilldata', true);
            offerHttpRequest.setRequestHeader('Content-type', 'application/json');
            offerHttpRequest.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
            offerHttpRequest.responseType = "json";

				
				//Listener, if response comes, it runs.
				offerHttpRequest.onreadystatechange = function() {
		    		if(offerHttpRequest.readyState == 4 && offerHttpRequest.status == 200) {
						if (offerHttpRequest.response !== undefined) {
                            //Got the offer data, fill the offers table

                            //Initialize table variables
                            globalskill = offerHttpRequest.response;
                            var offerTable = document.getElementById('offerTableBody');

                            //Empty the table
                            offerTable.innerHTML = "";

                            
                            offerTable.appendChild( createTableRow( "Name", 
                                                                    "Location", 
                                                                    "Teaching Day",
                                                                    "Teaching Time",
                                                                    "Level",
                                                                    "divTableHead") );

                            
                            //Filling the table
                            for(var i=0; i<globalskill.offers.length; i++ )
                                {
                                if(true) //TODO, only higher level offers should appear
                                    {
                                    offerTable.appendChild( createTableRow( globalskill.offers[i].username,
                                                                            globalskill.offers[i].location,   
                                                                            globalskill.offers[i].teachingDay,
                                                                            globalskill.offers[i].teachingTime,  
                                                                            globalskill.offers[i].achievedPoint,
                                                                            "divTableCell") );
                                    }
                                }

                            var addBeginnerRequest = document.getElementById('addBeginnerCount');
                            addBeginnerRequest.onclick = function() {
                                //request for requests
                                var requestforrequests = new XMLHttpRequest();
                                    requestforrequests.open('POST', '/set/skilldata', true);
                                    requestforrequests.setRequestHeader('Content-type', 'application/json');
                                    requestforrequests.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
                                    requestforrequests.responseType = "json";
                                
                                //if it returns
                                requestforrequests.onreadystatechange = function() {
                                    if(requestforrequests.readyState == 4 && requestforrequests.status == 200) {
                                        console.log(requestforrequests.response.message);
                                    }
                                }

                                requestforrequests.send(
                                    JSON.stringify({
                                        name: skillname
                                    })
                                );



                            }
                            

                            //Display the tables Window if all table has been loaded
                            displayWindow();

						} 
					}
                }

				offerHttpRequest.send(
					JSON.stringify({
						name: skillname
					})
				);


        



        //Adding trainings to table
        var trainingTable = document.getElementById('trainingTableBody');
        var requestTable = document.getElementById('requestTableBody');


        function createTableRow( data1, data2, data3, data4, data5, classname )
        {
            //Creating an offer tablerow
            var Row = document.createElement('div');
            Row.className = "divTableRow";
            
            
            if(data1 !== undefined)
            {
            var Column1 = document.createElement('div');
            Column1.className = classname;
            Column1.innerHTML = data1;
            Row.appendChild(Column1);
            }

            if(data2 !== undefined)
            {
            var Column2 = document.createElement('div');
            Column2.className = classname;
            Column2.innerHTML = data2;
            Row.appendChild(Column2);
            }

            if(data3 !== undefined)
            {
            var Column3 = document.createElement('div');
            Column3.className = classname;
            Column3.innerHTML = data3;
            Row.appendChild(Column3);
            }

            if(data4 !== undefined)
            {
            var Column4 = document.createElement('div');
            Column4.className = classname;
            Column4.innerHTML = data4;
            Row.appendChild(Column4);
            }

            if(data5 !== undefined)
            {
            var Column5 = document.createElement('div');
            Column5.className = classname;
            Column5.innerHTML = data5;
            Row.appendChild(Column5);
            }

            return Row;
        }

        header.innerText = this.skill.name;

        


        span.onclick = function() {
            modal.style.display = "none";
        }

        //  When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        function displayWindow(){
            modal.style.display = "block";
        }


        
    }

    addBeginnerRequest()
        {
            console.log("clicked");
        }
}
