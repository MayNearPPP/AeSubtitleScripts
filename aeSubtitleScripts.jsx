textFillRect();

function textFillRect() {
  //////////info////////////
  var scriptName = "textFillRect";
  var alertTitle = "Warning:";

  function main() {
    if (!(app.project.activeItem instanceof CompItem)) {
      alert("Please open a comp!", alertTitle);
      return;
    }
  }

  main();
}
