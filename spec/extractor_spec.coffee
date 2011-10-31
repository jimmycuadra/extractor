Extractor = require "extractor"

describe "Extractor", ->
  beforeEach ->
    Extractor.reset()

  describe ".exports", ->
    exportsTest = ->

    it "registers modules under the provided name", ->
      expect ->
        Extractor.exports "exportsTest", exportsTest
      .not.toThrow()

    it "throws if the module has already been registered", ->
      fn = ->
        Extractor.exports "exportsTest", exportsTest

      fn()
      expect(fn).toThrow()

  describe ".require", ->
    requireTest = ->

    it "throws if the module with the provided name is not registered", ->
      expect ->
        Extractor.require "requireTest"
      .toThrow()

    it "returns the module with the provided name", ->
      Extractor.exports "requireTest", requireTest

      expect(Extractor.require "requireTest").toBe requireTest

  describe ".reset", ->
    it "removes all registered modules", ->
      Extractor.exports "fn", ->
      expect ->
        Extractor.reset().require "fn"
      .toThrow()

  describe ".listModules", ->
    it "lists all registered modules in alphabetical order", ->
      modules = ["foo", "bar", "baz"]
      Extractor.exports module for module in modules
      expect(Extractor.listModules()).toEqual ["bar", "baz", "foo"]
