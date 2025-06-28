const crypto = require('crypto')
const fs = require('fs')

/**
 * Generate Keypair And Save Files
 */
function generateKeypairAndSaveFiles() {
  const keypairResult = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' })
  const privateKeyContent = keypairResult.privateKey.export({ type: 'pkcs8', format: 'pem' })
  const publicKeyContent = keypairResult.publicKey.export({ type: 'spki', format: 'pem' })
  fs.writeFileSync('./example/private.pem', privateKeyContent)
  fs.writeFileSync('./example/public.pem', publicKeyContent)
  console.log('Keypair generated: private.pem, public.pem')
}

generateKeypairAndSaveFiles()