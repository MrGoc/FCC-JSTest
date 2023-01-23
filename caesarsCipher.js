function rot13(str) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let strArr = str.split("");
    let newStrArr = strArr.map(el => {
        let ix = alphabet.indexOf(el);
        if (ix > -1) {
            if (ix >= 13)
                return alphabet[ix - 13];
            else
                return alphabet[alphabet.length - (13 - ix)];
        } else 
            return el;
    });
    console.log(newStrArr);
    
    return newStrArr.join("");
  }
  //console.log(rot13("N"));
  console.log(rot13("SERR PBQR PNZC"));