return if window? && "Extractor" of window

mods = {}

Extractor =
  register: (name, mod) ->
    throw "Module \"#{name}\" already registered." if mods[name]
    mods[name] = mod

  extract: (name) ->
    throw "Module \"#{name}\" not registered." unless mods[name]
    mods[name]

  reset: ->
    mods = {}
    this

Extractor.require = Extractor.extract

window.Extractor = Extractor if window?
module.exports = Extractor if module?
