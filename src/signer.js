import crypto from 'crypto'
import fs from 'fs'

/**
 * Sign File Data
 * Params: filePath, privateKeyPem
 */
export function signFileData(filePath, privateKeyPem) {
  const fileContent = fs.readFileSync(filePath)
  const signInstance = crypto.createSign('SHA256')
  signInstance.update(fileContent)
  signInstance.end()
  return signInstance.sign(privateKeyPem, 'base64')
}

/**
 * Sign String Data
 * Params: dataContent, privateKeyPem
 */
export function signStringData(dataContent, privateKeyPem) {
  const signInstance = crypto.createSign('SHA256')
  signInstance.update(dataContent)
  signInstance.end()
  return signInstance.sign(privateKeyPem, 'base64')
}

/**
 * Verify File Data
 * Params: filePath, signatureContent, publicKeyPem
 */
export function verifyFileData(filePath, signatureContent, publicKeyPem) {
  const fileContent = fs.readFileSync(filePath)
  const verifyInstance = crypto.createVerify('SHA256')
  verifyInstance.update(fileContent)
  verifyInstance.end()
  return verifyInstance.verify(publicKeyPem, signatureContent, 'base64')
}

/**
 * Verify String Data
 * Params: dataContent, signatureContent, publicKeyPem
 */
export function verifyStringData(dataContent, signatureContent, publicKeyPem) {
  const verifyInstance = crypto.createVerify('SHA256')
  verifyInstance.update(dataContent)
  verifyInstance.end()
  return verifyInstance.verify(publicKeyPem, signatureContent, 'base64')
}