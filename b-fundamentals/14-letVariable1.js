var sample = 1

{
    let sample = 2
    console.log("inside = ", sample)
}
console.log("out = ", sample)

// let is more restricted = keeps the local scope.
// If there's not "sample" inside, JS will return and display only the global:

{
    let sampless = 2
    console.log("What's inside,now? No variable named sampless. So, JS will look for a variable named sample in a larger scope, globally, untill JS finds way up in the code a variable named sample. = ", sample)
    // 
}
console.log("Here outside the function a variable named sample is easily found: ", sample)
console.log("In short:")
console.log("Pay attention:")
console.log("var has 2 scopes: function and global")
console.log("let has 3 scopes: BLOCK, function and global. Is that all? Let's study more and check...")