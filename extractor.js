(function() {
  var Extractor, modules;
  if (window.Extractor != null) {
    return;
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
    },
    reset: function() {
      modules = {};
      return this;
    }
  };
  Extractor.require = Extractor.extract;
  window.Extractor = Extractor;
}).call(this);
