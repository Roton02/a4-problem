function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return "Invalid Number"
    }
    const ticketPrice=120;
    wacthMan = 500;
    stap = 8;
    const pay= ( ticketSale * ticketPrice) - ( wacthMan + (stap * 50) ) 
    return pay
    }

    function checkName(name) {
        if(typeof name !== "string"){
            return "invalid";
        }
        name = name.toLowerCase();
        const len = name.length - 1;
        const lastWord = name[len];
        if(lastWord==="a" || lastWord==="y" || lastWord==="i" || lastWord==="e" || lastWord==="o" || lastWord==="u" || lastWord==="w"){
            return "good Name";
        }
        return "Bad Name";
    }

    function deleteInvalids(array) {
        if(!Array.isArray((array))){
            return "Invalid Array"
        }
        const numbers = [];
        for(let i =0; i<array.length; i++){
            if(typeof array[i]==="number" && !isNaN(array[i])){
                numbers.push(array[i]);
            }
        }
        return numbers;
        }


        function password(obj) {
            if(!obj.name || !obj.siteName || !obj.birthYear || obj.birthYear.toString().length !==4 ){
                return 'invalid';
            }
            const userName= obj.name;
            const userSiteName= obj.siteName;
            const userBirthyear= obj.birthYear;
        
            const str =userSiteName.split("");
            str[0] = str[0].toUpperCase();
            const site = str.join("");
            const result = site+ "#"+userName+"@"+userBirthyear;
            return result;
            }

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