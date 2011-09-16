(function() {
  describe("Extractor", function() {
    it("attaches to the global object", function() {
      return expect(typeof Extractor).toEqual("object");
    });
    describe(".register", function() {
      var registerTest;
      registerTest = function() {};
      it("registers modules under the provided name", function() {
        var fn;
        fn = function() {
          return Extractor.register("registerTest", registerTest);
        };
        return expect(fn).not.toThrow();
      });
      return it("throws if the module has already been registered", function() {
        var fn;
        fn = function() {
          return Extractor.register("registerTest", registerTest);
        };
        return expect(fn).toThrow();
      });
    });
    return describe(".extract", function() {
      var extractTest;
      extractTest = function() {};
      it("throws if the module with the provided name is not registered", function() {
        var result;
        result = function() {
          return Extractor.extract("extractTest");
        };
        return expect(result).toThrow();
      });
      return it("returns the module with the provided name", function() {
        Extractor.register("extractTest", extractTest);
        return expect(Extractor.extract("extractTest")).toBe(extractTest);
      });
    });
  });
}).call(this);
