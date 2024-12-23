console.log("Hello World!");


let arr1 = [49 , 54, 43 , 32, 67, 82, 77]
let ans = arr1.filter((val) => {
    return val % 2 == 0
});
console.log(ans);


let arr2 = [49 , 54, 43 , 32, 67, 82, 77]
let ans2 =  arr2.map ((val) => {
    return val * 2
})
console.log(ans2);