const crypto = require('crypto')
const fs = require('fs')

/**
 * Verify File Content
 * Params: filePath, signatureContent, publicKeyPem
 */
function verifyFileContent(filePath, signatureContent, publicKeyPem) {
  const fileContent = fs.readFileSync(filePath)
  const verifyInstance = crypto.createVerify('SHA256')
  verifyInstance.update(fileContent)
  verifyInstance.end()
  return verifyInstance.verify(publicKeyPem, signatureContent, 'base64')
}

/**
 * Verify String Content
 * Params: dataContent, signatureContent, publicKeyPem
 */
function verifyStringContent(dataContent, signatureContent, publicKeyPem) {
  const verifyInstance = crypto.createVerify('SHA256')
  verifyInstance.update(dataContent)
  verifyInstance.end()
  return verifyInstance.verify(publicKeyPem, signatureContent, 'base64')
}

module.exports = {
  verifyFileContent,
  verifyStringContent
}