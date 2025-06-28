import { expect } from 'chai'
import crypto from 'crypto'
import fs from 'fs'
import { signStringData, verifyStringData, signFileData, verifyFileData } from '../src/signer.js'


/**
 * Test Digital Signature String
 */
function testDigitalSignatureString() {
  const keypairResult = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' })
  const privateKeyContent = keypairResult.privateKey.export({ type: 'pkcs8', format: 'pem' })
  const publicKeyContent = keypairResult.publicKey.export({ type: 'spki', format: 'pem' })
  const stringData = 'hello world'
  const stringSignature = signStringData(stringData, privateKeyContent)
  const isValidSignature = verifyStringData(stringData, stringSignature, publicKeyContent)
  expect(isValidSignature).to.be.true
}

/**
 * Test Digital Signature File
 */
function testDigitalSignatureFile() {
  const keypairResult = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' })
  const privateKeyContent = keypairResult.privateKey.export({ type: 'pkcs8', format: 'pem' })
  const publicKeyContent = keypairResult.publicKey.export({ type: 'spki', format: 'pem' })
  const filePath = './example/testfile.txt'
  fs.writeFileSync(filePath, 'file content')
  const fileSignature = signFileData(filePath, privateKeyContent)
  const isValidSignature = verifyFileData(filePath, fileSignature, publicKeyContent)
  expect(isValidSignature).to.be.true
}

/**
 * Test Invalid Signature Detection
 */
function testInvalidSignatureDetection() {
  const keypairResult = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' })
  const privateKeyContent = keypairResult.privateKey.export({ type: 'pkcs8', format: 'pem' })
  const publicKeyContent = keypairResult.publicKey.export({ type: 'spki', format: 'pem' })
  const stringData = 'hello world'
  const stringSignature = signStringData(stringData, privateKeyContent)
  const isValidSignature = verifyStringData('different data', stringSignature, publicKeyContent)
  expect(isValidSignature).to.be.false
}

describe('Digital Signature', function () {
  it('Should Sign And Verify String Data Correctly', function () {
    testDigitalSignatureString()
  })
  it('Should Sign And Verify File Data Correctly', function () {
    testDigitalSignatureFile()
  })
  it('Should Detect Invalid Signature', function () {
    testInvalidSignatureDetection()
  })
})