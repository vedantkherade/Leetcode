/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let people = [];

    for (let i = 0; i < names.length; i++) {
        people.push([names[i], heights[i]]);
    }

    people.sort((a, b) => b[1] - a[1]);

    return people.map(person => person[0]);
};