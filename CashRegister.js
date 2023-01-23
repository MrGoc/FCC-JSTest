function checkCashRegister(price, cash, cid) {
    const currency = [{currency: "PENNY", value: 0.01},
                      {currency: "NICKEL", value: 0.05},
                      {currency: "DIME", value: 0.1},
                      {currency: "QUARTER", value: 0.25},
                      {currency: "ONE", value: 1},
                      {currency: "FIVE", value: 5},
                      {currency: "TEN", value: 10},
                      {currency: "TWENTY", value: 20},
                      {currency: "ONE HUNDRED", value: 100}];


    function roundToTwoDec(value) {
        return Math.round(( value + Number.EPSILON) * 100) / 100;
    }
                
    let sumInRegister = cid.reduce((acc, el) => acc += el[1], 0);
    sumInRegister = roundToTwoDec(sumInRegister);

    let cashBack = roundToTwoDec(cash - price);
    let resCash = [];
    let myStatus = "";


    function findCurreny2() {
        let curr;
        let noCoins = 0;
        let cashToReturn = 0;
        for (let i = cid.length - 1; i >= 0; i--) {
            curr = currency.find(el => el.currency === cid[i][0]); 
            if (cid[i][1] > 0 && cashBack > curr.value) {
                if (cashBack > cid[i][1]) {
                    resCash.push(cid[i]);
                    cashBack = roundToTwoDec(cashBack- cid[i][1]);
                } else if (cashBack < cid[i][1]) {
                    noCoins = Math.floor(cashBack / curr.value);
                    if (noCoins > 0) {
                        cashToReturn = roundToTwoDec(curr.value * noCoins);
                        if (cashToReturn <= cid[i][1]) {
                            resCash.push([curr.currency, cashToReturn]);
                            cashBack = roundToTwoDec(cashBack - cashToReturn);
                        }
                    }
                } else {

                }
            }
        }
    }

    if (sumInRegister < cashBack) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
        if (sumInRegister === cashBack) {
            return {status: "CLOSED", change: [...cid]}
        };
        findCurreny2();
        if (cashBack > 0)
            return {status: "INSUFFICIENT_FUNDS", change: []}
        else (cashBack === 0)
            return {status: "OPEN", change: resCash}

//        console.log(resCash);
//        return {status: myStatus, change: resCash}
    }

  }

/* console.log(
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], 
                                  ["DIME", 3.1], ["QUARTER", 4.25], 
                                  ["ONE", 90], ["FIVE", 55], 
                                  ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])  
);  
 */
// reza {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], 
                                 ["DIME", 0], ["QUARTER", 0], 
                                 ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  );