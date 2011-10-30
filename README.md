# Extractor.js

**Extractor** is a tiny JavaScript library for managing variables in the global namespace. Instead of attaching themselves to the global object, libraries may register with Extractor. Developers can then retrieve registered libraries from Extractor and assign them to a variable of their choice. It achieves an effect similar to jQuery's `noConflict` function with CommonJS terminology.

## Usage

For library authors:

```javascript
// Assuming Extractor.js has been included

(function () {
  var MyLibrary = {
    foo: "bar"
  };

  Extractor.exports("MyLibrary", MyLibrary);
})();
```

For developers:

### Extracting a library

```javascript
var FooBar = Extractor.require("MyLibrary");
```

### Extracting a single property/function from a library

```javascript
var barify = Extractor.extract("MyLibrary").fooify;
```

This allows developers to extract any module (or any property of a module) into a variable with a name of their choosing.

If, for some reason, you need to programmatically reset Extractor's registry, use `Extract.reset()`.

## Development

To work on Extractor or to run the included Jasmine specs, you must have Node and NPM installed. Clone the repository and run `npm install` inside the directory to install the Node dependencies. You should also install CoffeeScript globally with `npm install coffee-script -g` to get command line access to the Cake tasks. Run `cake` for a list of available tasks.

## License

Extractor is available under the MIT license. See the included `LICENSE`.
