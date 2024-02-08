/*function signature/sample */
function monthlySavings(arr , livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "Invalid input";
      }
    let sum = 0;
    for (const income of arr) {
       if(income>=3000){
        const tax =income*20/100;
        const taxs = income-tax;
        sum += taxs;
       }else{
        sum += income;
       }
       }
    const saving=sum-livingCost;
    if(saving>=0){
        return saving;
    }else if(saving<0){
        return "earn More";
     }  
    }
   console.log( monthlySavings([ 1000 , 2000 , 3000 ] , 5400));