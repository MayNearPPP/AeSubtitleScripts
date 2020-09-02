//#include './library/colorPicker.js'
(function importText(thisObj) {
  var scriptName = "importText v2.0";
  function throwError(msg) {
    msg = msg || "Alert!";
    alert(msg, "Warning!");
  }

  var importMethods = ["Line By Line", "Interlace"];

  var UI = buildUI();
  UI.center();
  UI.show();

  function buildUI() {
    var palette;

    palette = new Window("palette", "ImportText", undefined, {
      resizeable: true,
    });
    palette.orientation = "column";
    palette.alignChildren = "left";

    //////////File Select Part//////////
    var fileSelectGroup = palette.add("group");
    fileSelectGroup.orientation = "row";
    var fileSelectText = fileSelectGroup.add(
      "edittext",
      undefined,
      "Select your file"
    );
    fileSelectText.size = [166, 25];
    var fileSelectButton = fileSelectGroup.add(
      "button",
      undefined,
      "Select File"
    );
    fileSelectButton.size = [70, 25];
    fileSelectButton.helpTip = "You can select a .txt file";

    palette.add("panel", []);

    //////////Import Method Part//////////
    var importMethodGroup = palette.add("group");
    importMethodGroup.orientation = "row";
    importMethodGroup.add("statictext", undefined, "Import Method");
    var importMethodDropdown = importMethodGroup.add("dropdownlist");
    importMethodDropdown.size = [160, 25];
    popDropdown(importMethodDropdown, importMethods);

    //////////Choose Character Part//////////
    var CharacterGroup = palette.add("group");
    CharacterGroup.orientation = "column";
    //Row1 Get Font
    var row1 = CharacterGroup.add("group");
    row1.orientation = "row";
    var fontFamily = row1.add("edittext");
    fontFamily.size = [133, 25];
    var getFontButton = row1.add("button", undefined, "Get Current Font");
    getFontButton.size = [103, 25];
    //Row2 Choose Character Color
    var row2 = CharacterGroup.add("group");
    row2.orientation = "row";
    var fontColor = row2.add("edittext");
    fontColor.size = [101, 25];
    var chooseCharacterColorButton = row2.add(
      "button",
      undefined,
      "Choose Character Color"
    );
    chooseCharacterColorButton.size = [135, 25];
    //Row3 Font Size
    var row3 = CharacterGroup.add("group");
    row3.orientation = "row";
    row3.add("statictext", undefined, "Font Size");
    var fontSize = row3.add("edittext", undefined, "90");
    fontSize.size = [190, 25];
    //Row4 Choose Leading & Stroke
    var row4 = CharacterGroup.add("group");
    row4.orientation = "row";
    row4.alignChildren = "buttom";
    var checkBox01 = row4.add("checkbox", undefined, "Leading");
    checkBox01.value = false;
    var leadingSize = row4.add("edittext");
    leadingSize.size = [52, 20];
    var checkBox02 = row4.add("checkbox", undefined, "Stroke");
    checkBox02.value = false;
    var strokeWidth = row4.add("edittext");
    strokeWidth.size = [52, 20];
    //Row5 Choose Stroke Color
    var row5 = CharacterGroup.add("group");
    row5.orientation = "row";
    var strokeColor = row5.add("edittext");
    strokeColor.size = [101, 25];
    var chooseStrokeColorButton = row5.add(
      "button",
      undefined,
      "Choose Storke Color"
    );
    chooseStrokeColorButton.size = [135, 25];
    // var resultColor = colorPicker();
    // resultColor;

    return palette;
  }

  //Get Dropdown List
  function popDropdown(dropDown, dataArray) {
    dropDown.removeAll();
    for (var i = 0; i < dataArray.length; i++) {
      dropDown.add("item", dataArray[i]);
    }
    dropDown.selection = 0;
  }
})(this);
