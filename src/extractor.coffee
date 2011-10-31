return if @Extractor?

mods = {}

Extractor =
  exports: (name, mod) ->
    throw "Module \"#{name}\" already registered." if mods[name]
    mods[name] = mod

  require: (name) ->
    throw "Module \"#{name}\" not registered." unless mods[name]
    mods[name]

  reset: ->
    mods = {}
    this

if module? then module.exports = Extractor else @Extractor = Extractor
