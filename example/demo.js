import { signFileData, verifyFileData } from '../src/signer.js'
import { loadKeyContent } from '../src/utils.js'

/**
 * Execute Digital Signature Example
 */
function executeDigitalSignatureExample() {
  const privateKeyContent = loadKeyContent('./example/private.pem')
  const publicKeyContent = loadKeyContent('./example/public.pem')
  const fileSignature = signFileData('./example/sample1.txt', privateKeyContent)
  console.log('Signature:', fileSignature)

  const isSampleOneValid = verifyFileData('./example/sample1.txt', fileSignature, publicKeyContent)
  console.log('sample1.txt: valid signature?', isSampleOneValid)

  const isSampleTwoValid = verifyFileData('./example/sample2.txt', fileSignature, publicKeyContent)
  console.log('sample2.txt: valid signature?', isSampleTwoValid)
}

executeDigitalSignatureExample()