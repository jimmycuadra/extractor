describe "Extractor", ->
  beforeEach ->
    Extractor.reset()

  describe ".register", ->
    registerTest = ->

    it "registers modules under the provided name", ->
      expect ->
        Extractor.register "registerTest", registerTest
      .not.toThrow()

    it "throws if the module has already been registered", ->
      fn = ->
        Extractor.register "registerTest", registerTest

      fn();
      expect(fn).toThrow()

  describe ".extract", ->
    extractTest = ->

    it "throws if the module with the provided name is not registered", ->
      expect ->
        Extractor.extract "extractTest"
      .toThrow()

    it "returns the module with the provided name", ->
      Extractor.register "extractTest", extractTest

      expect(Extractor.extract "extractTest").toBe extractTest

  describe ".reset", ->
    it "removes all registered modules", ->
      Extractor.register "fn", ->
      expect ->
        Extractor.reset().extract "fn"
      .toThrow()
