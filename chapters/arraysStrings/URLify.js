// URLify
// Write a methiod to replace all spaces in a string with "%20".

function URLify(str){
  return str.split(" ").join("%20") // O(n) + O(n)
} // O(n)

console.log(URLify("my cat is cool")) // my%20cat%20is%20cool
console.log(URLify("catsarecool")) // catsarecool