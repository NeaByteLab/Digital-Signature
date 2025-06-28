const { signFile, verifyFile } = require('../src/signer')
const { loadKey } = require('../src/utils')

/**
 * Execute Digital Signature Example
 */
function executeDigitalSignatureExample() {
  const privateKeyContent = loadKey('./example/private.pem')
  const publicKeyContent = loadKey('./example/public.pem')
  const fileSignature = signFile('./example/sample1.txt', privateKeyContent)
  console.log('Signature:', fileSignature)

  const isSampleOneValid = verifyFile('./example/sample1.txt', fileSignature, publicKeyContent)
  console.log('sample1.txt: valid signature?', isSampleOneValid)

  const isSampleTwoValid = verifyFile('./example/sample2.txt', fileSignature, publicKeyContent)
  console.log('sample2.txt: valid signature?', isSampleTwoValid)
}

executeDigitalSignatureExample()