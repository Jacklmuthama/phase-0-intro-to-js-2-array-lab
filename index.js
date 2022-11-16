let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function  destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    let temp=cats.slice()
    temp.push(name)
    return temp
}
function prependCat(name) {
    let temp=[...cats]
    temp.unshift(name)
    return temp
}
function removeLastCat() {
    let temp=cats.slice()
    temp.pop()
    return temp
}
function removeFirstCat(){
    let temp=cats.slice()
    temp.shift()
    return temp
}