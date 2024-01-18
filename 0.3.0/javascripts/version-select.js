window.addEventListener("DOMContentLoaded", function() {
    function expandPath(path) {
      // Get the base directory components.
      var expanded = window.location.pathname.split("/");
      expanded.pop();
      var isSubdir = false;

      path.split("/").forEach(function(bit, i) {
        if (bit === "" && i === 0) {
          isSubdir = false;
          expanded = [""];
        } else if (bit === "." || bit === "") {
          isSubdir = true;
        } else if (bit === "..") {
          if (expanded.length === 1) {
            // We must be trying to .. past the root!
            throw new Error("invalid path");
          } else {
            isSubdir = true;
            expanded.pop();
          }
        } else {
          isSubdir = false;
          expanded.push(bit);
        }
      });

      if (isSubdir)
        expanded.push("");
      return expanded.join("/");
    }

  // ABS_BASE_URL is the URL minus the domain name
  // e.g. /acquire-docs/dev/get_started/
  var ABS_BASE_URL = expandPath(".");
  var CURRENT_VERSION = ABS_BASE_URL.split("/")[2];
  var ROOT_NODE = document.baseURI;
  var root = ROOT_NODE.substring(0, ROOT_NODE.indexOf(CURRENT_VERSION));

  function makeSelect(options) {
    var select = document.createElement("select");
    select.classList.add("form-control");

    options.forEach(function(i) {
      var option = new Option(i.text, i.value, undefined,
                              i.selected);
      select.add(option);
    });

    return select;
  }

  fetch(root+"versions.json").then((response) => {
    return response.json();
  }).then((versions) => {
    var realVersion = versions.find(function(i) {
      return i.version === CURRENT_VERSION ||
             i.aliases.includes(CURRENT_VERSION);
    }).version;

    var select = makeSelect(versions.filter(function(i) {
      return i.version === realVersion || !i.properties || !i.properties.hidden;
    }).map(function(i) {
      return {text: i.title, value: i.version,
              selected: i.version === realVersion};
    }));
    select.addEventListener("change", function(event) {
      window.location.href = root + this.value + "/";
    });

    var container = document.getElementById("version-selector");
    container.appendChild(select)
    var title = document.getElementById("site-title");
    if (title.parentNode.classList.contains("md-header__title")) {
      var height = window.getComputedStyle(title).getPropertyValue("height");
      container.style.height = height;
    }

    title.parentNode.insertBefore(container, title.nextElementSibling);
  });
});
