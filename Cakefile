{spawn} = require "child_process"
watch   = require "nodewatch"

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
