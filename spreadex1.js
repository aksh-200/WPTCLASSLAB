let obj = {
            song : "Dekh na hi re",
            singer : "kishore kumar",
            album : {
                        movie : "xyz",
                        year : "1980"
                    }
        }
       // let obj2 =obj  //this will just create two references pointing to same obj  
        //        output----dekha na hai re socha na hai re
        //  dekha na hai re socha na hai re
        //  2022
        //   2022
        //let obj2 ={...obj}  //this will create a copy of obj -- it is shallow copy 
        // output----Dekh na hi re
        //             Satranga
        //             2022
        //             2022

       let obj2 ={...obj, album:{...obj.album}}//
    // output
    // Dekh na hi re
    // Satranga
    // 1980
    // 2022 
    
    



        obj2.song ="Satranga"
        console.log(obj.song,"\n",obj2.song)
        
        obj2.album.year=2022
        console.log(obj.album.year,"\n",obj2.album.year)
        
        