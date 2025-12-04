// const vegetables = [
//     {
//         id : 1,
//         name: "carrot"
//     },
//     {
//         id : 2,
//         name: "brocolli"
//     },
//     {
//         id : 3,
//         name: "tulip"
//     },
//     {
//         id : 4,
//         name: "cauliflower"
//     },
//     {
//         id : 5,
//         name: "mushroom"
//     },
//     {
//         id : 6,
//         name: "potato"
//     },
//     {
//         id : 7,
//         name: "pork"
//     },
// ]

// const filterVeg = vegetables.filter((item, index)=>item.name != "potato" || "brocolli")
// console.log(filterVeg);
// console.log(vegetables);

// const vegetables = ["carrot","brocolli","potato","spianch","tulip","mushroom"]

// const mappedVegetables = vegetables.map((item, index) => {
//     return {
//         id : index + 1,
//         name : item
//     }
// })
// console.log(mappedVegetables);

// const filteredVeg = mappedVegetables.filter((item) => item.id % 2 == 1)
// const spread = [...mappedVegetables]

const arr = [1,2,3]
const newArr = [0, ...arr, 4]
console.log(newArr);
