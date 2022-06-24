var sample = 1
{
    let sample = 2
    console.log("inside = ", sample)
}
console.log("out = ", sample)

// let is more restricted = keeps the local scope.
// If there's not "sample" inside, JS will return and display only the global:

var sample = 1
{
    let sampless = 2
    console.log("inside, look at that now! = ", sample)
    // Will look for "sample" evrywhere and will find it globally.
}
console.log("out = ", sample)