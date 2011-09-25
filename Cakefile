{spawn} = require "child_process"

task "watch", "Watches the src directories for changes and compiles them.", ->
  console.log "Watching for changes to CoffeeScript files... press control-C to quit."

  process.on "SIGINT", ->
    process.stdout.write "\n"

  writeToStdout = (data) -> process.stdout.write data

  watchDirs = [
    ["src", "lib"],
    ["spec/src", "spec/specs"]
  ]

  watchDirs.forEach (watchDir) ->
    child = spawn "coffee", ["-w", "-c", "-o", watchDir[1], watchDir[0]]
    child.stdout.setEncoding "utf8"
    child.stdout.on "data", writeToStdout
