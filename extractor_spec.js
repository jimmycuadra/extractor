(function() {
  describe("Extractor", function() {
    beforeEach(function() {
      return Extractor.reset();
    });
    describe(".register", function() {
      var registerTest;
      registerTest = function() {};
      it("registers modules under the provided name", function() {
        return expect(function() {
          return Extractor.register("registerTest", registerTest);
        }).not.toThrow();
      });
      return it("throws if the module has already been registered", function() {
        var fn;
        fn = function() {
          return Extractor.register("registerTest", registerTest);
        };
        fn();
        return expect(fn).toThrow();
      });
    });
    describe(".extract", function() {
      var extractTest;
      extractTest = function() {};
      it("throws if the module with the provided name is not registered", function() {
        return expect(function() {
          return Extractor.extract("extractTest");
        }).toThrow();
      });
      return it("returns the module with the provided name", function() {
        Extractor.register("extractTest", extractTest);
        return expect(Extractor.extract("extractTest")).toBe(extractTest);
      });
    });
    return describe(".reset", function() {
      return it("removes all registered modules", function() {
        Extractor.register("fn", function() {});
        return expect(function() {
          return Extractor.reset().extract("fn");
        }).toThrow();
      });
    });
  });
}).call(this);
