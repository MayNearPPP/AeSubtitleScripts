textFillRect();

function textFillRect() {
  //////////info////////////
  var scriptName = "textFillRect";
  var alertTitle = "Warning:";

  var curComp = app.project.activeItem;
  var selectedTextLayers = [];

  function main() {
    if (!judge()) {
      return;
    }

    app.beginUndoGroup(scriptName);
    var curCompRect = new Rect(0, 0, curComp.width, curComp.height);
    curCompRect.getAllRects(3);
    for (var i = 0; i < selectedTextLayers.length; i++) {
      selectedTextLayers[i].enabled = false;
    }
    app.endUndoGroup;
  }

  // class Rect
  function Rect(l, t, w, h) {
    this.left = ~~l;
    this.top = ~~t;
    this.width = ~~w;
    this.height = ~~h;

    this.childrenRect = [];
  }

  Rect.prototype.splitRect = function () {
    var cRect = [
      [
        [0, 0, 0.6, 0.6],
        [0.6, 0, 0.2, 0.6],
        [0.8, 0, 0.2, 1],
        [0, 0.6, 0.3, 0.4],
        [0.3, 0.6, 0.5, 0.2],
        [0.3, 0.8, 0.5, 0.2],
      ],
      [
        [0, 0, 0.3, 1],
        [0.3, 0, 0.7, 0.4],
        [0.3, 0.4, 0.5, 0.6],
        [0.8, 0.4, 0.2, 0.6],
      ],
      [
        [0, 0, 0.3, 0.85],
        [0.3, 0, 0.7, 0.2],
        [0.3, 0.2, 0.45, 0.65],
        [0.75, 0.2, 0.25, 0.8],
        [0, 0.85, 0.75, 0.15],
      ],
    ];
    var coe = cRect[Math.floor(Math.random() * cRect.length)];

    for (var i = 0; i < coe.length; i++) {
      this.childrenRect.push(
        new Rect(
          this.left + this.width * coe[i][0],
          this.top + this.height * coe[i][1],
          this.width * coe[i][2],
          this.height * coe[i][3]
        )
      );
    }
    return this.childrenRect;
  };
  Rect.prototype.getAllRects = function (count) {
    count--;
    if (count == 0) {
      this.createText();
      return;
    }
    this.childrenRect = this.splitRect();
    for (var i = 0; i < this.childrenRect.length; i++) {
      this.childrenRect[i].getAllRects(count);
    }
  };
  Rect.prototype.createSolid = function () {
    var rectSolidLayer = curComp.layers.addSolid(
      [1, 0, 0],
      "rect",
      this.width - 2,
      this.height - 2,
      1
    );
    rectSolidLayer.position.setValue([
      this.left + this.width / 2,
      this.top + this.height / 2,
      0,
    ]);
  };
  Rect.prototype.createText = function () {
    var textLayer = selectedTextLayers[
      Math.floor(Math.random() * selectedTextLayers.length)
    ].duplicate();
    var l = textLayer.sourceRectAtTime(curComp.time, true).left;
    var t = textLayer.sourceRectAtTime(curComp.time, true).top;
    var w = textLayer.sourceRectAtTime(curComp.time, true).width;
    var h = textLayer.sourceRectAtTime(curComp.time, true).height;

    // 锚点居中
    var curAnchor = textLayer.anchorPoint.value;
    var position = textLayer.position.value;
    var centerPoint = [l + w / 2, t + h / 2];

    textLayer.anchorPoint.setValue([centerPoint[0], centerPoint[1], 0]);
    textLayer.position.setValue([
      position[0] + centerPoint[0],
      position[1] + centerPoint[1],
      0,
    ]);

    // 选中的第一个文字层 锚点居中 时
    textLayer.position.setValue([
      this.left + this.width / 2,
      this.top + this.height / 2,
      0,
    ]);
    textLayer.scale.setValue([this.width / w, this.height / h, 0] * 100);
  };

  main();

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
    }

    //writeLn(selectedTextLayers.toString());

    return true;
  }
}
