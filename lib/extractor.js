(function() {
  var Extractor, mods;
  if ("Extractor" in this) {
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
    }
  };
  if (module) {
    module.exports = Extractor;
  } else {
    this.Extractor = Extractor;
  }
}).call(this);
