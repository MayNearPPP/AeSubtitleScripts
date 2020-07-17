subtitleScript01();

function subtitleScript01() {
  //////////info////////////
  var scriptName = "textFillRect";
  var alertTitle = "Warning:";

  var curComp = app.project.activeItem;
  var frameRate = 1 / curComp.frameDuration;
  var selectedTextLayers = [];

  function main() {
    if (!judge()) {
      return;
    }

    app.beginUndoGroup(scriptName);
    for (var i = 0; i < selectedTextLayers.length; i++) {
      startAnimation(selectedTextLayers[i], i);
      endAnimation(selectedTextLayers[i]);
      setEase(selectedTextLayers[i]);
    }
    // startAnimation(selectedTextLayers[0], 0);
    // endAnimation(selectedTextLayers[0]);
    // setEase(selectedTextLayers[0]);
    app.endUndoGroup;
  }

  function judge() {
    // 判断是否选中合成
    if (!(curComp instanceof CompItem)) {
      alert("Please open a comp!", alertTitle);
      return false;
    }

    // 判断是否选中层
    var selectedLayers = curComp.selectedLayers;
    if (selectedLayers.length == 0) {
      alert("Please select a layer!", alertTitle);
      return false;
    }

    // 判断选中层是否为文字层
    for (var i = 0; i < selectedLayers.length; i++) {
      if (!(selectedLayers[i] instanceof TextLayer)) {
        alert(
          "The " + selectedLayers[i].index + " layer is not a textLayer!",
          alertTitle
        );
        continue;
      }
      selectedTextLayers.push(selectedLayers[i]);

      // 排序
      for (var i = 0; i < selectedTextLayers.length - 1; i++) {
        for (var j = 0; j < selectedTextLayers.length - 1 - i; j++) {
          if (
            Number(selectedTextLayers[j].index) >
            Number(selectedTextLayers[j + 1].index)
          ) {
            var temp = selectedTextLayers[j];
            selectedTextLayers[j] = selectedTextLayers[j + 1];
            selectedTextLayers[j + 1] = temp;
          }
        }
      }
    }

    //writeLn(selectedTextLayers.toString());

    return true;
  }

  function startAnimation(thislayer, index) {
    var i = 0;
    if (index == 1) {
      i = 6;
    } else if (index > 1) {
      i = 5 + index;
    }
    var startTime = thislayer.inPoint + i / frameRate;
    var endTime = startTime + 13 / frameRate;

    var opacity = thislayer.opacity;
    opacity.setValueAtTime(startTime, 0);
    opacity.setValueAtTime(endTime, 100);

    var position = thislayer.position;
    var curPosition = position.value;
    position.setValueAtTime(startTime, [
      curPosition[0],
      curPosition[1] + 100 + index * 10,
      curPosition[2],
    ]);
    position.setValueAtTime(endTime, curPosition);
  }

  function endAnimation(thislayer) {
    var endTime = thislayer.outPoint;
    var startTime = endTime - 13 / frameRate;
    var opacity = thislayer.opacity;
    opacity.setValueAtTime(startTime, 100);
    opacity.setValueAtTime(endTime, 0);
  }

  function setEase(thislayer) {
    var positionProperty = thislayer.property("Position");
    var opacityProperty = thislayer.property("Opacity");

    var positionEaseIn1 = new KeyframeEase(0.75, 85);
    positionProperty.setTemporalEaseAtKey(1, [positionEaseIn1]);

    var opacityEaseIn1 = new KeyframeEase(0.75, 85);
    opacityProperty.setTemporalEaseAtKey(1, [opacityEaseIn1]);

    var opacityEaseOut4 = new KeyframeEase(0.75, 20);
    opacityProperty.setTemporalEaseAtKey(4, [opacityEaseOut4]);
  }

  main();
}
