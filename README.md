# 🚀 Digital Signature

Generate And Verify Digital Signatures Using The ECDSA Prime256v1 Elliptic Curve. Supports Signing And Verifying Both String Data And Files. Ideal For Applications Requiring Strong Data Authenticity And Integrity Verification—Including Contracts, Documents, And Message Signing—With Flexible Offline And Online Usage.

---

## ✨ Features
- ✅ Sign And Verify String And File Data
- 🔐 ECDSA Prime256v1 Curve
- 🖥️ CLI And Programmatic Usage
- ⚙️ CI Integration With GitHub Actions
- 📄 Unit Test Coverage
- 🔑 Keypair Generation Example
- 📂 Clean Project Structure

---

## 📦 Installation
```bash
npm install
```

## 💻 CLI Usage
```bash
node cli/dsig.js sign <file> <privateKey> > signature.txt
node cli/dsig.js verify <file> <publicKey> <signatureFile>
```

## 🔑 Keypair Generation
```bash
node example/genkey.js
```
Generates `private.pem` and `public.pem` inside `example/` folder.

## 🧪 Run Test
```bash
npm test
```

---

## 📂 Project Structure
```
.
├── cli
│   └── dsig.js
├── example
│   ├── demo.js
│   ├── genkey.js
│   ├── private.pem
│   ├── public.pem
│   ├── sample1.txt
│   ├── sample2.txt
│   └── testfile.txt
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── signer.js
│   ├── utils.js
│   └── verifier.js
└── test
    └── signer.test.js
```

---

## 📌 License

MIT © [NeaByteLab](https://github.com/NeaByteLab)