 var services = {
     "стрижка": 60,
     "гоління": 80,
     "Миття голови": 100
 };

 function price(obj) {
     let sum = 0;
     for (let key in obj) {
         sum += obj[key];
     }
     return sum;
 }

 function minPrice(obj) {
     let min = Infinity;
     for (let key in obj) {
         if (obj[key] < min) {
             min = obj[key];
         }
     }
     return min;
 }

 function maxPrice(obj) {
     let max = 0;
     for (let key in obj) {
         if (obj[key] > max) {
             max = obj[key];
         }
     }
     return max;
 }
 services["фарбування олівцем"] = 120;
 console.log(price(services));
 console.log(minPrice(services));
 console.log(maxPrice(services));