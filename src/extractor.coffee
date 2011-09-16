modules = {}

window.Extractor =
  register: (name, mod) ->
    throw "Module \"#{name}\" already registered." if modules[name]
    modules[name] = mod

  extract: (name) ->
    throw "Module \"#{name}\" not registered." unless modules[name]
    modules[name]