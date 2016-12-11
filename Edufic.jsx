function eduScript(thisObj){
    function eduScript_buildUI(thisObj){
        var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Edufic", undefined, {resizeable:true});
        if(myPanel != null){
           var res = "group {orientation:'column',\
                grp1: Group {orientation:'row',\
                        RadioButton1: RadioButton{text:'MIT'},\
                        RadioButton2: RadioButton{text:'Columbia'},\
                        about: Button{text:'?', preferredSize:[30, -1]}\
                       },\
                        finalButton: Button{text:'Make a PIP'}\
                        endText: StaticText{text:'Made with Love by KRiSH for Edufic'}\
                }";
           myPanel.grp = myPanel.add(res);
                                   
           myPanel.layout.layout(true);
           myPanel.grp.minimumSize = myPanel.grp.size;
           myPanel.layout.resize();
           myPanel.onResizing = myPanel.onResize = function () {this.layout.resize();}
           
           var mitButton = myPanel.grp.grp1.RadioButton1;
           var columbiaButton = myPanel.grp.grp1.RadioButton2;
           var run = myPanel.grp.finalButton;
           var aboutBtn = myPanel.grp.grp1.about;
           
           aboutBtn.onClick = function (){
                var awin = new Window("dialog", "About", undefined);
                var ares = "group{orientation:'column', alignment:['fill', 'fill'],\
                about: StaticText{text:'', properties:{multiline:true}}\
                }";
                awin.grp = awin.add(ares);
                awin.grp.about.text = "Hi, am Krishnamoorthy"+
                "\nDeveloper of this script"+
                "\n\nvisit me at: be.net/thevfxkrish"+
                "\n\n\nStay Hungry"+
                "\nStay Foolish";
                
                awin.grp.layout.layout(true);
                awin.center();
                awin.show();
           }
       
           run.onClick = function (){
            var proj = app.project; // Active Project
            var myComp = proj.activeItem;
            var selectedLayer = myComp.selectedLayers[0].index;
            myComp.layer(selectedLayer).duplicate(); // Source String Duplicated
            var selectedLayer = myComp.selectedLayers[0].index;
            myComp.layers.precompose([selectedLayer-1], "PIP"); // Duplicated layer is precomposed as PIP
            var pipComp;
            for (var i = 1; i <= app.project.numItems; i ++) { // Loop for finding the comp "PIP" in project window
            if ((app.project.item(i) instanceof CompItem) && (app.project.item(i).name == 'PIP')) {
                pipComp = app.project.item(i); // "PIP" comp is assigned to pipComp
                break;
            }
        }
        var shapeLayer = pipComp.layers.addShape(); // adding a shape layer to the pipComp
        var contents = shapeLayer.property("ADBE Root Vectors Group"); // Accessing the contents of the shape layer
        var shapeRect = contents.addProperty("ADBE Vector Shape - Rect"); // Adding a rectangle to the shape layer
        var shapeFill = contents.addProperty("ADBE Vector Graphic - Fill");
            pipComp.layer("Shape Layer 1").content("Rectangle Path 1").size.setValue([600, 400]);
            pipComp.layer("Shape Layer 1").content("Rectangle Path 1").position.setValue([0.0, -90]);
            pipComp.layer("Shape Layer 1").content("Rectangle Path 1").roundness.setValue(10);
            pipComp.layers[2].trackMatteType = TrackMatteType.ALPHA
         var pipLayer = myComp.layer(selectedLayer-1);
            pipLayer.threeDLayer = true;
            pipLayer.transform.yRotation.setValue(-35);
            pipLayer.transform.position.setValue([380, 500, 0]);
            if(columbiaButton.value = true){
            app.executeCommand(9000);
            pipLayer.layerStyle.dropShadow.opacity.setValue(30);
            pipLayer.layerStyle.dropShadow.angle.setValue(50);
            pipLayer.layerStyle.dropShadow.distance.setValue(15);
            pipLayer.layerStyle.dropShadow.size.setValue(10);

            }

           }           
           return myPanel;
        }
      }
 
    var myPal = eduScript_buildUI(thisObj);
    if(myPal != null){
        if(myPal instanceof Window){
            myPal.center();
            myPal.show();
           }
       }
   
}

eduScript(this);
