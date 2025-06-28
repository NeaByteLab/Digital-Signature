import fs from 'fs'

/**
 * Load Key Content
 * Params: keyPath
 */
export function loadKeyContent(keyPath) {
  return fs.readFileSync(keyPath, 'utf8')
}