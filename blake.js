const {
  utils,
  helpers,
  CasperContractClient,
} = require("casper-js-client-helper");

const {
  CLValueBuilder,
  CLStringBytesParser,
  CLPublicKey,
  CLKey,
  CLString,
  CasperClient,
  CLByteArray,
  RuntimeArgs,
  CLAccountHash,
  DeployUtil,
  Keys,
  CLTypeBuilder,
} = require("casper-js-sdk");
let blake = require("blakejs")
const BigNumber = require("bignumber.js")
let a1 = "e3f6bf7f868a25f7b84597009158a1c2cea8df9bbcb949e0405c55c1a2b55c0b";
let a = "f0f91595bc63e1ce2f015dbacdd816619f63053cdf5fb41f19d69ffecbba755f"
let b = "15";

function hexToBytes(hex) {
  let bytes = [];
  for (let c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

function strToBytes(str) {
  const bytes = [];
  for (ii = 0; ii < str.length; ii++) {
    const code = str.charCodeAt(ii); // x00-xFFFF
    bytes.push(code & 255); // low, high
  }
  return bytes;
}
function u256ToBytes(strx) {
  let a = new BigNumber(strx).toString(16)
  a = a.length % 2 == 0 ? a : "0" + a
  let b = Buffer.from(a, 'hex')
  const ret = [b.length, ...b]
  return ret;
}
console.log("aa test push")



// console.log(u256ToBytes(1000))
// let aBytes = Buffer.from("55884917f4107a59e8c06557baee7fdada631af6d1c105984d196a84562854eb", "hex")
// let a1Bytes = strToBytes(a1)
// let aBytes = strToBytes(a)

let a1Bytes = hexToBytes(a1)
console.log(a1Bytes)
let aBytes = hexToBytes(a)
// let x = new CLStringBytesParser().toBytes(new CLString("14")).val//.toBytes()
// console.log("x", x)
// let bBytes =  [2, 0, 0, 0, 49, 52 ]// strToBytes("23")
// let finalS1 = [0, ...aBytes, ...x]
let bBytes = strToBytes(b)
let finalS1 = a1Bytes.concat(aBytes)
let finalS2 = aBytes.concat(a1Bytes)
console.log('finalS1', Buffer.from(finalS1).toString('hex'), finalS1.length)
console.log('finalS1', Buffer.from(finalS2).toString('hex'))
console.log(a.length)



let h1 = blake.blake2b(Buffer.from(finalS1), null, 32)
let h2 = blake.blake2b(Buffer.from(finalS2), null, 32)



console.log('h1', Buffer.from(h1).toString('hex'))
console.log('h2', Buffer.from(h2).toString('hex'))
