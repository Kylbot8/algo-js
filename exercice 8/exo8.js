let me = {
    name: "Kylian",
    favoriteFood: "Crepes",
    City: "Paris"
}

let result = 0
let values = Object.values(me)

values.forEach((value) => {
    result += value.length
})

console.log(result)

if (result % 2) {
    console.log("pair.")
} else {
    console.log("impair.")
}