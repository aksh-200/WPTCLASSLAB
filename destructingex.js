let obj={ProductName:"maggi",cost:"30"}
let {ProductName:a,cost:b}= obj
//console.log(ProductName)
console.log(a,b)


// Array destructing---------

let arr  = [10,20,14,84]

//let x = arr[1]
//let y = arr[2]

let[,x,y]=arr
console.log(x,y)