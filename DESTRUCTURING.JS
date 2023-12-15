let obj ={
    product : "chair",
    price:"100"
}


let {product:a , price :b} = obj;

let {product , price }= obj ;

//console.log(obj.product , obj.price)
//console.log(a,b)

console.log(product , price)

arr = [10,20,30,40]

let [,,,x,y] = arr;
console.log(x, y )