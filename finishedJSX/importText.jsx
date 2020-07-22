(function importText(thisObj) {
  //////////info////////////
  var scriptName = "importText ver1.0";
  var alertTitle = "Warning:";

  var file = new File();
  var _selected = false;
  var _option = 0;
  var _export = false;

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
    var checkBox03 = selectGroup.add(
      "checkbox",
      undefined,
      "export subtitle to PNG"
    );
    checkBox03.value = false;
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
      if (checkBox03.value == true) {
        _export = true;
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
    if (!_export && !(curComp instanceof CompItem)) {
      throwError("Please open a comp!");
      return;
    }

    app.beginUndoGroup(scriptName);
    if (_export == true) {
      exportTextToPNG();
    } else {
      createTextLayers(curComp);
    }
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

  function exportTextToPNG() {
    if (!_selected) {
      throwError("Please select a file!");
      return;
    }
    var fileData = readTXT();
    var project = app.project;
    for (var i = 0; i < fileData.length; i++) {
      var newComp = project.items.addComp(i.toString(), 1920, 1080, 1, 1, 1.0);
      newComp.layers.addText(fileData[i]);
      ////////// Character Modify Start //////////
      ////////// Character Modify End   //////////
      var item = app.project.renderQueue.items.add(newComp);
      var RQItem = item.outputModule(1);
      var file_name = File.decode(RQItem.file.name);
      var new_path = "/Users";
      var separator = "/";
      if ($.os.indexOf("Mac") == -1) {
        new_path =
          "D:\\Programming\\AeSubtitleScripts\\AeSubtitleScripts\\output";
        separator = "\\";
      }
      var new_data = {
        "Output File Info": {
          "Full Flat Path": new_path + separator + file_name,
        },
      };

      RQItem.setSettings(new_data);
      RQItem.applyTemplate("PNGSingle");
    }
  }

  // var textProp = myTextL ayer.property("Source Text");
  // var textDocument = textProp.value;
  // myString = "Happy holidays!";
  // textDocument.resetCharStyle();
  // textDocument.fontSize = 60;
  // textDocument.fillColor = [1, 0, 0];
  // textDocument.strokeColor = [0, 1, 0];
  // textDocument.strokeWidth = 2;
  // textDocument.font = "TimesNewRomanPSMT";
  // textDocument.strokeOverFill = true;
  // textDocument.applyStroke = true;
  // textDocument.applyFill = true;
  // textDocument.text = myString;
  // textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
  // textDocument.tracking = 50;
  // textProp.setValue(textDocument);

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
