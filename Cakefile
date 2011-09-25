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
  [oldname, newname] = ["extractor.min.js", "extractor.min.new.js"]
  exec "coffee -p -c src/extractor.coffee | uglifyjs", (error, stdout, stderr) ->
    throw error if error?
    fs.writeFileSync newname, stdout + "\n"
    oldsize = fs.statSync(oldname).size
    newsize = fs.statSync(newname).size
    change = newsize - oldsize
    exec "mv #{newname} #{oldname}", (error, stdout, stderr) ->
      throw error if error?
      plural = if change is 1 or change is -1 then "" else "s"
      console.log "Built minified JavaScript file.", "Change in size since last version: #{change} byte#{plural}."
