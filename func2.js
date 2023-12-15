 function dojob(f1,f2) {
    for(let i=0; i<3; i++)
    {
        f1();
        f2();
    }   
}

let f1 = function()
{
    console.log("hi")
}


let f2 = () =>{
    console.log("in arrow fun")
}
dojob(f1,f2);