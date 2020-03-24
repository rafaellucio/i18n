const fs = require("fs")
const path = require("path")

module.exports = function(migration) {
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file === "index.js") {
      return
    }
    require(path.join(__dirname, file))(migration)
  })
}
