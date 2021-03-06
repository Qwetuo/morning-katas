const decodeMessage = require("../src/decodeMessage");
const assertEquals = require("../assert-helper");

assertEquals(decodeMessage("z" ),"a")
assertEquals(decodeMessage("y"),"b")
assertEquals(decodeMessage("ab"), "zy")
assertEquals(decodeMessage("gsrh nvhhztv"), "this message")
assertEquals(decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv"), "i hope nobody decodes this message")


// Test cases: actual --> expected
// decodeMessage("a") --> "z"
// decodeMessage("z") --> "a"
// decodeMessage("b") --> "y"
// decodeMessage("y") --> "b"
// decodeMessage("ab") --> "zy"
// decodeMessage("sr") --> "hi"
// decodeMessage("svool") --> "hello"

// decodeMessage("gsrh nvhhztv") --> "this message"
// decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv") --> "i hope nobody decodes this message"
