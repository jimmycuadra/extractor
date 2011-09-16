describe "Extractor", ->
  it "attaches to the global object", ->
    expect(typeof Extractor).toEqual "object"

  describe ".register", ->
    registerTest = ->

    it "registers modules under the provided name", ->
      fn = ->
        Extractor.register "registerTest", registerTest

      expect(fn).not.toThrow()

    it "throws if the module has already been registered", ->
      fn = ->
        Extractor.register "registerTest", registerTest

      expect(fn).toThrow()

  describe ".extract", ->
    extractTest = ->

    it "throws if the module with the provided name is not registered", ->
      result = ->
        Extractor.extract "extractTest"

      expect(result).toThrow()

    it "returns the module with the provided name", ->
      Extractor.register "extractTest", extractTest

      expect(Extractor.extract "extractTest").toBe extractTest
