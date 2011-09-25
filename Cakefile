{spawn} = require "child_process"

task "test", "Runs test suite.", ->
  jasmine = spawn "node", ["node_modules/jasmine-node/lib/jasmine-node/cli.js", "--coffee", "-i", "src", "spec"]
  jasmine.stdout.on "data", (data) ->
    process.stdout.write data
  jasmine.stdin.end()
