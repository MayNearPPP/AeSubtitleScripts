(function name(thisObj) {
  //////////info////////////
  var scriptName = "exportSubtitle";
  var alertTitle = "Warning:";

  function throwError(msg) {
    alert(msg, alertTitle);
  }

  function buildUI(thisObj) {
    var palette;

    if (thisObj instanceof Panel) {
      palette = thisObj;
    } else {
      palette = new Window("palette", "", undefined, { resizeable: true });
    }

    palette.orientation = "";
    palette.alignChildren = "";

    if (palette instanceof Window) {
      palette.layout.layout(true);
      return palette;
    } else {
      throwError("error");
    }
  }

  function main() {
    var curComp = app.project.activeItem;
    if (!(curComp instanceof CompItem)) {
      throwError("Please open a comp!");
      return;
    }

    app.beginUndoGroup(scriptName);
    app.endUndoGroup;
  }

  var UI = buildUI(thisObj);
  if (UI != null && UI instanceof Window) {
    UI.center();
    UI.show();
  }
})(this);
