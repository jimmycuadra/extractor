(function() {
  var Extractor, mods;
  if (this.Extractor != null) {
    return;
  }
  mods = {};
  Extractor = {
    exports: function(name, mod) {
      if (mods[name]) {
        throw "Module \"" + name + "\" already registered.";
      }
      return mods[name] = mod;
    },
    require: function(name) {
      if (!mods[name]) {
        throw "Module \"" + name + "\" not registered.";
      }
      return mods[name];
    },
    reset: function() {
      mods = {};
      return this;
    },
    listModules: function() {
      var name;
      return ((function() {
        var _results;
        _results = [];
        for (name in mods) {
          _results.push(name);
        }
        return _results;
      })()).sort();
    }
  };
  if (typeof module !== "undefined" && module !== null) {
    module.exports = Extractor;
  } else {
    this.Extractor = Extractor;
  }
}).call(this);
