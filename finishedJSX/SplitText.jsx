(function splitText(thisObj) {
  //////////info////////////
  var scriptName = "splitText";
  var alertTitle = "Warning:";

  var curComp = app.project.activeItem;

  function throwError(msg) {
    alert(msg, alertTitle);
  }

  function buildUI(thisObj) {
    var palette;

    if (thisObj instanceof Panel) {
      palette = thisObj;
    } else {
      palette = new Window("palette", scriptName, undefined, {
        resizeable: true,
      });
    }

    palette.orientation = "column";
    palette.alignChildren = "center";

    var split = palette.add("button", undefined, "Split Text!");
    split.onClick = function create() {
      main();
    };

    if (palette instanceof Window) {
      palette.layout.layout(true);
      return palette;
    } else {
      throwError("error");
    }
  }

  function main() {
    if (!(curComp instanceof CompItem)) {
      throwError("Please open a comp!");
      return;
    }
    var textLayer = curComp.selectedLayers;

    app.beginUndoGroup(scriptName);
    for (var i = 0; i < textLayer.length; i++) {
      split(textLayer[i]);
    }
    app.endUndoGroup;
  }

  function split(textLayer) {
    var sourceText = textLayer.property("Source Text").value.text;
    var sourceTextArray = sourceText.split("");
    var nullLayer = curComp.layers.addNull();
    var string = nullLayer.property("Layer Name").value;
    throwError(string);
    for (var i = 0; i < sourceTextArray.length; i++) {
      var textSplitLayer = curComp.layers.addText(sourceTextArray[i]);
      textSplitLayer.setParentWithJump(nullLayer);
      var position = textSplitLayer.property("Position");
      var positionValue = position.value;
      var distance = calculate(textLayer, i);
      positionValue = [distance, 0];
      position.setValue(positionValue);
      textSplitLayer.selected = false;
    }
    nullLayer
      .property("Position")
      .setValue(textLayer.property("Position").value);
    nullLayer.selected = true;
  }

  function changeParagraph(textLayer) {
    var sourceText = textLayer.property("Source Text").value;
    sourceText.justification = ParagraphJustification.RIGHT_JUSTIFY;
    textLayer.property("Source Text").setValue(sourceText);
    return textLayer;
  }

  function calculate(textLayer, count) {
    var newTextLayer = changeParagraph(textLayer.duplicate());
    var time = textLayer.inPoint;
    var data = [];
    data.push(textLayer.sourceRectAtTime(time, true).left);
    data.push(newTextLayer.sourceRectAtTime(time, true).left);
    var position = newTextLayer.position.value;
    position[0] = position[0] + data[0] - data[1];
    newTextLayer.property("Position").setValue(position);

    var sourceText = newTextLayer.property("Source Text").value;
    sourceText.text = sourceText.text.substr(count);
    newTextLayer.property("Source Text").setValue(sourceText);
    data.push(newTextLayer.sourceRectAtTime(time, true).left);
    var distance = data[2] - data[1];
    newTextLayer.remove();
    return distance;
  }

  var UI = buildUI(thisObj);
  if (UI != null && UI instanceof Window) {
    UI.center();
    UI.show();
  }
})(this);
