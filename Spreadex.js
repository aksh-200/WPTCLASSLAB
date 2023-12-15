let obj = { song :"dekha na hai re" , 
            singer:"kishore kumar",
            album :{
                  movie : "xyz",
                  year: 1980
            }
          }

let obj1 = obj;
obj1.song ="Animal"

console.log(obj.song , obj1.song)

obj1.album.year=2022
console.log(obj.album.year,"\n",obj1.album.year)



