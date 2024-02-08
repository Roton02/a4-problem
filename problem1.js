
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
    console.log(calculateMoney(-1));