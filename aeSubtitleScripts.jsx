(function split() {
  function createWindow() {
    var w = new Window("palette");
    var m = w.add("statictext");
    m.text = "hello";
    return w;
  }

  var win = createWindow();
  win.show();
})();
