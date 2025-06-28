const fs = require('fs')

/**
 * Load Key Content
 * Params: keyPath
 */
function loadKeyContent(keyPath) {
  return fs.readFileSync(keyPath, 'utf8')
}

module.exports = {
  loadKeyContent
}