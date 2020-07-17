(function splitText(thisObj) {
  //////////info////////////
  var scriptName = "splitText";
  var alertTitle = "Warning:";

  var curComp = app.project.activeItem;

  function throwError(msg) {
    alert(msg, alertTitle);
  }

  // function buildUI(thisObj) {
  //   var palette;

  //   if (thisObj instanceof Panel) {
  //     palette = thisObj;
  //   } else {
  //     palette = new Window("palette", "", undefined, { resizeable: true });
  //   }

  //   palette.orientation = "";
  //   palette.alignChildren = "";

  //   if (palette instanceof Window) {
  //     palette.layout.layout(true);
  //     return palette;
  //   } else {
  //     throwError("error");
  //   }
  // }

  function main() {
    if (!(curComp instanceof CompItem)) {
      throwError("Please open a comp!");
      return;
    }
    var textLayer = curComp.selectedLayers[0];

    app.beginUndoGroup(scriptName);
    split(textLayer);
    app.endUndoGroup;
  }

  function split(textLayer) {
    var sourceText = textLayer.property("Source Text").value.text;
    var sourceTextArray = sourceText.split("");
    for (var i = 0; i < sourceTextArray.length; i++) {
      curComp.layers.addText(sourceTextArray[i]);
    }
  }

  // var UI = buildUI(thisObj);
  // if (UI != null && UI instanceof Window) {
  //   UI.center();
  //   UI.show();
  // }
  main();
})(this);
