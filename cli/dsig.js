#!/usr/bin/env node
import fs from 'fs'
import { signFileData, verifyFileData } from '../src/signer.js'
import { loadKeyContent } from '../src/utils.js'

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
  const privateKeyContent = loadKeyContent(privateKeyPath)
  const fileSignature = signFileData(filePath, privateKeyContent)
  console.log(fileSignature)
}

/**
 * Verify File Command
 * Params: filePath, publicKeyPath, signaturePath
 */
function verifyCommand(filePath, publicKeyPath, signaturePath) {
  const publicKeyContent = loadKeyContent(publicKeyPath)
  const signatureContent = fs.readFileSync(signaturePath, 'utf8').trim()
  const isSignatureValid = verifyFileData(filePath, signatureContent, publicKeyContent)
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