(function importText(thisObj) {
  //////////info////////////
  var scriptName = "importText ver1.0";
  var alertTitle = "Warning:";

  var file = new File();
  var _selected = false;
  var _option = 0;

  function throwError(msg) {
    alert(msg, alertTitle);
  }

  function buildUI(thisObj) {
    var palette;

    if (thisObj instanceof Panel) {
      palette = thisObj;
    } else {
      palette = new Window("palette", "ImportText", undefined, {
        resizeable: true,
      });
    }

    palette.orientation = "column";
    palette.alignChildren = "left";

    // File Select Module
    var textImportBox = palette.add("group", undefined, "textImportBox");
    textImportBox.orientation = "row";
    var fileSelectBox = textImportBox.add(
      "edittext",
      undefined,
      "Select your file"
    );
    fileSelectBox.size = [160, 20];
    var fileSelectButton = textImportBox.add("button", undefined, "Select");
    fileSelectButton.helpTip = "Select a .txt file.";
    fileSelectButton.onClick = selectFile;
    // Option Module
    var optionGroup = palette.add("group", undefined, "optionGroup");
    optionGroup.orientation = "row";
    var selectGroup = optionGroup.add("group", undefined, "selectGroup");
    selectGroup.orientation = "column";
    selectGroup.alignChildren = "left";
    var checkBox01 = selectGroup.add("checkbox", undefined, "line by line");
    checkBox01.value = false;
    var checkBox02 = selectGroup.add("checkbox", undefined, "interlace");
    checkBox02.value = false;
    var buttonGroup = optionGroup.add("group", undefined, "buttonGroup");
    buttonGroup.orientation = "column";
    var createTextButton = buttonGroup.add("button", undefined, "Create Text!");
    createTextButton.onClick = function create() {
      if (checkBox01.value == true && checkBox02.value != true) {
        _option = 1;
      } else if (checkBox01.value != true && checkBox02.value == true) {
        _option = 2;
      } else if (checkBox01.value == true && checkBox02.value == true) {
        _option = -1;
      }
      main();
    };

    if (palette instanceof Window) {
      palette.layout.layout(true);
      return palette;
    } else {
      throwError("error");
    }

    function selectFile() {
      file = file.openDlg("Open your file", "Acceptable Files:*.txt");
      fileSelectBox.text = file.fsName;
      _selected = true;
    }
  }

  function main() {
    var curComp = app.project.activeItem;
    if (!(curComp instanceof CompItem)) {
      throwError("Please open a comp!");
      return;
    }

    app.beginUndoGroup(scriptName);
    createTextLayers(curComp);
    app.endUndoGroup;
  }

  function createTextLayers(curComp) {
    if (!_selected) {
      throwError("Please select a file!");
      return;
    }
    if (_option == 0) {
      throwError("Please select an option!");
      return;
    } else if (_option == -1) {
      throwError("Please just select one option!");
      return;
    }
    var fileData = readTXT();
    for (var i = Math.floor(_option / 2); i < fileData.length; i += _option) {
      curComp.layers.addText(fileData[i]);
    }
  }

  function readTXT() {
    var currentLine;
    var textArray = [];
    file.open("r");
    while (!file.eof) {
      currentLine = file.readln();
      textArray.push(currentLine);
    }
    file.close();
    return textArray;
  }

  var UI = buildUI(thisObj);
  if (UI != null && UI instanceof Window) {
    UI.center();
    UI.show();
  }
})(this);
