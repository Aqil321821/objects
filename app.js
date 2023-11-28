var cars = {

    honda: {
        suv: {
            hrv: {
                name: "Honda-HRV",
                year: 2023,
                price: 2000,
                colors: ["red", "black", "grey"]

                /*
                  company:honda
                  variant:suv
                  model:hrv,crv


                */
            },
            crv: {
                name: "Passport",
                year: 2021,
                price: 5000,
                colors: ["red", "black", "grey"]

                   
            },
        },
        sedans: {

             /*
                  company:honda
                  variant:sedans
                  model:civic,accord


                */
            civic: {
                name: "honda-civic",
                year: 2003,
                price: 2500,
                colors: ["red", "black", "grey"]
            },

            accord: {
                name: "Honda-accord",
                year: 2023,
                price: 2000,
                colors: ["red", "black", "grey"]
            }
        }
    },






    chervolt: {
        crossrover: {
            blazzer: {
                name: "blazer",
                year: 2019,
                price: 2000,
                colors: ["red", "black", "grey"]
            },
            captiva: {
                name: "captiva",
                year: 2006,
                price: 1000,
                colors: ["red", "black", "grey"]
            }

        },
        onframe: {
            Suburban: {
                name: "Suburban",
                year: 2017,
                price: 8000,
                colors: ["red", "black", "grey"]
            },
            Tahoe: {
                name: "Tahoe",
                year: 2012,
                price: 7000,
                colors: ["red", "black", "grey"]
            }
        },
        pickup: {
            Montana: {
                name: "Montana",
                year: 2014,
                price: 3000,
                colors: ["red", "black", "grey"]
            },
            Silverado: {
                name: "Silverado",
                year: 2017,
                price: 4000,
                colors: ["red", "black", "grey"]
            }
        }
    },


    toyota: {
        hatchback: {
            Passo: {
                name: "passo",
                year: 2016,
                price: 4000,
                colors: ["red", "black", "grey"]
            },
            Yaris: {
                name: "yaris",
                year: 2017,
                price: 4000,
                colors: ["red", "black", "grey"]
            }
        },
        minvans: {
            Avanza: {
                name: "avanza",
                year: 2017,
                price: 4000,
                colors: ["red", "black", "grey"]
            },
            Veloz: {
                name: "veloz",
                year: 2017,
                price: 4000,
                colors: ["red", "black", "grey"]
            }
        }


    }



}
           /********************some ops on above data*************/
/*
console.log(cars);
console.log(cars.honda);
console.log(cars.honda.sedans);
console.log(cars.honda.sedans.civic);
console.log(cars.honda.sedans.accord);
console.log(cars.honda.sedans.accord.name);
console.log(cars.honda.sedans.accord.colors[0]);
*/


                 //*********************/ dynamic data get in objects***********/
 
  /*
   var company="honda";
   var variant="sedans";
   var model="civic";
   console.log(cars[company][variant][model]);
  */


                //*********************/ loop thorough data in objects***********/
//sample exapmle
/*
var car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue'
};

for (var key in car) {
    console.log(key + ': ' + car[key]);
}
*/







            /****Nested Loop ****/

// for(var key in cars){
//     console.log(key);
// }


for(var company in cars){
    for(var variant in cars[company]){
        for(var model in cars[company][variant]){
                console.log(cars[company][variant][model]);
        }
    }
}



/*
Here's a dry run of the loop:
1st loop 3 baar chalay ga ek ek bar cycle through ho kar
1st loop jab pehli bar chaly ga to 2nd loop 2 bar chaly ga q k 2 keys hen ek suv or sedan
1st loop jab 1st run hoga to 3rd loop 4 bar chaly ga q k cars[Honda][suv]=>2
                                                         cars[Honda][sedans]=>2

                             First Iteration (company: honda):
variant: suv
model: hrv
Prints details of the Honda HRV.
model: crv
Prints details of the Honda CRV.

variant: sedans
model: civic
Prints details of the Honda Civic.
model: accord
Prints details of the Honda Accord.

           **************************************************

                      Second Iteration (company: chervolt):

    variant: crossrover

model: blazzer
Prints details of the Chevrolet Blazer.
model: captiva
Prints details of the Chevrolet Captiva.
variant: onframe

model: Suburban
Prints details of the Chevrolet Suburban.
model: Tahoe
Prints details of the Chevrolet Tahoe.
variant: pickup

model: Montana
Prints details of the Chevrolet Montana.
model: Silverado
Prints details of the Chevrolet Silverado.
              
                  **********************************************

                       Third Iteration (company: toyota):
variant: hatchback

model: Passo
Prints details of the Toyota Passo.
model: Yaris
Prints details of the Toyota Yaris.
variant: minvans

model: Avanza
Prints details of the Toyota Avanza.
model: Veloz
Prints details of the Toyota Veloz.






*/






























