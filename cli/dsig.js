#!/usr/bin/env node
const fs = require('fs')
const { signFile, verifyFile } = require('../src/signer')
const { loadKey } = require('../src/utils')

/**
 * Print Usage Information
 * Params: None
 */
function printUsage() {
  console.log('Usage:\n  dsig sign <file> <privateKey> > signature.txt\n  dsig verify <file> <publicKey> <signatureFile>')
}

/**
 * Sign File Command
 * Params: filePath, privateKeyPath
 */
function signCommand(filePath, privateKeyPath) {
  const privateKeyContent = loadKey(privateKeyPath)
  const fileSignature = signFile(filePath, privateKeyContent)
  console.log(fileSignature)
}

/**
 * Verify File Command
 * Params: filePath, publicKeyPath, signaturePath
 */
function verifyCommand(filePath, publicKeyPath, signaturePath) {
  const publicKeyContent = loadKey(publicKeyPath)
  const signatureContent = fs.readFileSync(signaturePath, 'utf8').trim()
  const isSignatureValid = verifyFile(filePath, signatureContent, publicKeyContent)
  console.log('Valid:', isSignatureValid)
}

/**
 * Main Execution
 * Params: None
 */
function main() {
  const argsList = process.argv
  const commandName = argsList[2]
  const filePath = argsList[3]
  const keyPath = argsList[4]
  const signaturePath = argsList[5]
  if (commandName === 'sign') {
    if (!(filePath) || !(keyPath)) {
      printUsage()
    } else {
      signCommand(filePath, keyPath)
    }
  } else {
    if (commandName === 'verify') {
      if (!(filePath) || !(keyPath) || !(signaturePath)) {
        printUsage()
      } else {
        verifyCommand(filePath, keyPath, signaturePath)
      }
    } else {
      printUsage()
    }
  }
}

main()