(function() {
  var Extractor, modules;
  if (window.Extractor != null) {
    throw "Extractor has already been loaded.";
  }
  modules = {};
  Extractor = {
    register: function(name, mod) {
      if (modules[name]) {
        throw "Module \"" + name + "\" already registered.";
      }
      return modules[name] = mod;
    },
    extract: function(name) {
      if (!modules[name]) {
        throw "Module \"" + name + "\" not registered.";
      }
      return modules[name];
    }
  };
  Extractor.require = Extractor.extract;
  window.Extractor = Extractor;
}).call(this);
