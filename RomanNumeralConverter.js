function convertToRoman(num) {
    const romans = [{roman: 1, arabic: "I"}, 
                    {roman: 4, arabic: "IV"},
                    {roman: 5, arabic: "V"},
                    {roman: 9, arabic: "IX"},
                    {roman: 10, arabic: "X"},
                    {roman: 40, arabic: "XL"},
                    {roman: 50, arabic: "L"},
                    {roman: 90, arabic: "XC"},
                    {roman: 100, arabic: "C"},
                    {roman: 400, arabic: "CD"},
                    {roman: 500, arabic: "D"},
                    {roman: 900, arabic: "CM"},
                    {roman: 1000, arabic: "M"}]; 

    let res = "";
    let done = false;
    function cycleRomans(val) {
        for (let i = romans.length - 1; i >= 0; i--) {
            if (romans[i].roman === val) {
                res += romans[i].arabic;
                done = true;
                break;
            }
            else if (romans[i].roman < val) {
                res += romans[i].arabic;
                cycleRomans(val - romans[i].roman);
                if (done)
                    break;
            }
        }
    }
    cycleRomans(num)
    //console.log(res);
    return res;
   }
   
   console.log(convertToRoman(1004));
   //convertToRoman(36);