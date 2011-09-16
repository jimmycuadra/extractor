# Extractor.js

**Extractor** is a tiny (&cong;300 bytes minified) JavaScript library for managing variables in the global namespace. Instead of attaching themselves to the global object, libraries may register with Extractor. Developers can then retrieve registered libraries from Extractor and assign them to a variable of their choice. It achieves an effect similar to jQuery's `noConflict` function with a syntax more akin to Node's `require`. In fact, Extractor's `extract` method is aliased to `require` for convenience.

## Usage

For library authors:

```javascript
// Assuming Extractor.js has been included

(function () {
  var MyLibrary = {
    foo: "bar"
  };

  Extractor.register("MyLibrary", MyLibrary);
})();
```

For developers:

### Extracting a library

```javascript
var FooBar = Extractor.extract("MyLibrary");
```

Or, alternatively:

```javascript
var FooBar = Extractor.require("MyLibrary");
```

### Extracting a single property/function from a library

```javascript
var barify = Extractor.extract("MyLibrary").fooify;
```

This allows developers to extract any module (or any property of a module) into a variable with a name of their choosing.

## Tests

Extractor includes Jasmine specs. Simply open `spec-runner.html` in a browser to run them.

## License

Extractor is available under the MIT license. See the included `LICENSE`.
