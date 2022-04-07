function subTabFunction(component) {
  if (component.classList.contains("subTab")) {
    for (var tab of $("#subTabContainer").children()) {
      $(tab).removeClass("subTabSelected");
      $(tab).addClass("subTab");
    }
    $(component).addClass("subTabSelected");
    $(component).removeClass("subTab");
  }
}
