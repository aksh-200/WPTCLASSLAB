let arr = [10,45,25,36,55,89]

let callback = (element,ind,arr)=>console.log(element,ind)
arr.forEach(callback)

let square = arr.map(function(element) {console.log(element*element)})
console.log(square)


