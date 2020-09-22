const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];

function zipList(first, second) {
    const newArr = [];
    for (let i = 0; i < first.length; i++) {
        newArr.push(first[i], second[i]);
    }
    return newArr;
}
console.log(zipList(listOne, listTwo));

function zipListTheSimpleWay(first, second) {
    return _.flatten(_.zip(first, second));
}
console.log(zipListTheSimpleWay(listOne, listTwo));