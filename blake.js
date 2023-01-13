let blake = require("blakejs")
let a = "hash-be170557d9100704b63dc5de6039373dfdc8649cc467bf2f74ea14812d233def";
let b = "11";
function strToBytes(str) {
  const bytes = [];
  for (ii = 0; ii < str.length; ii++) {
    const code = str.charCodeAt(ii); // x00-xFFFF
    bytes.push(code & 255); // low, high
  }
  return bytes;
}

let aBytes = strToBytes(a)
let bBytes = strToBytes(b)
let finalS1 = aBytes.concat(bBytes)
let finalS2 = bBytes.concat(aBytes)
console.log('finalS1', Buffer.from(finalS1).toString('hex'), finalS1.length)
console.log('finalS1', Buffer.from(finalS2).toString('hex'))
console.log(a.length)



let h1 = blake.blake2b(Buffer.from(finalS1), null, 32)
let h2 = blake.blake2b(Buffer.from(finalS2), null, 32)



console.log('h1', Buffer.from(h1).toString('hex'))
console.log('h2', Buffer.from(h2).toString('hex'))