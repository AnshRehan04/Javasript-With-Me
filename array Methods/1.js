let arr=[100,300,455,600,700];
let i=1;
// for(let j of arr){
//     console.log(j-(10/100*j));
//     // console.log(i-(0.1*i));
//     // arr[j]=arr-(0.1*j);
//     // i++;
//     // console.log(j)
// }
for(let key in arr){
    arr[key]-=.1*arr[key];
    // console.log(arr[key]);
}
console.log(arr)