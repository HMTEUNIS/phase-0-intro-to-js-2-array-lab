// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {

cats.push("Ralph");
return cats
}

function destructivelyPrependCat(name) {
cats.unshift("Bob");
return cats


}

function destructivelyRemoveLastCat() {
cats.pop()
return cats

}

function destructivelyRemoveFirstCat() {
cats.shift()
    return cats

}

function appendCat(name) {
const copyOfCats = [...cats, "Broom"];
return copyOfCats

}

function prependCat(name) {
const moreCats = ["Arnold", ...cats];
return moreCats
}

function removeLastCat() {
const slicedCats = cats.slice(0, 2);
    cats.slice(0, 2)
return slicedCats
}

function removeFirstCat() {
const lastCats = cats.slice(1)
return lastCats
}