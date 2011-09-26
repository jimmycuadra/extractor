{spawn, exec} = require "child_process"
watch         = require "nodewatch"
fs            = require "fs"

task "test", "Runs the test suite.", ->
  jasmine = spawn "node", ["node_modules/jasmine-node/lib/jasmine-node/cli.js", "--coffee", "-i", "src", "spec"]
  jasmine.stdout.on "data", (data) ->
    process.stdout.write data
  jasmine.stderr.on "data", (data) ->
    process.stderr.write data
  jasmine.stdin.end()

task "test:watch", "Watches source files and runs the test suite any time they change.", ->
  divider = "------------"
  watch.add("src").add("spec").onChange (file, prev, cur) ->
    console.log divider, new Date, divider
    invoke "test"

task "build", "Builds the minified JavaScript file.", ->
  fs.rmdir "build", (error) ->
    fs.mkdir "build", "755", (error) ->
      exec "coffee -c -o build src", (error, stdout, stderr) ->
        if error?
          console.error "Coffee failed."
          throw error
        exec "uglifyjs build/extractor.js | awk 1 - > build/extractor.min.js", (error, stdout, stderr) ->
          if error?
            console.error "Uglify failed."
            throw error
          console.log "Built project to ./build."
