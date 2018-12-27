/* BASIC IDEA IS GET THE CHAR CODE FOR EACH LETTER AND GET THE SUM OF EACH LETTERS CODE
 * AFTER GETTING THE SUM, DIVIDE THAT BY THE CHAR CODE ITSELF WHICH WILL GIVE THE TOTAL
 * NUMBER OF THAT CHARACTER. THEN ENSURE THAT THE CHARACTERS THAT COME AFTER DO NOT HAVE
 * A COUNT GREATER THAN THE ONE BEFORE IT.
 * E.G.
 * 'aabbb'
 * charCode of 'a' = 97. THERE ARE 2 'a' CHARS SO THE SUM OF THE CHAR CODE WOULD BE
 * 97 + 97 = 194. 194 / 97 = 2. WHICH IS THE TOTAL NUMBER OF 'a' CHARS.
 * charCode of 'b' = 98. THERE ARE 3 'b' CHARS SO THE SUM OF THE CHAR CODE WOULD BE
 * 98 + 98 + 98 = 294 / 98 = 3. WHICH IS THE TOTAL NUMBER OF 'b' CHARS.
 * SINCE 3 > 2 THIS STRING IS NOT BEAUTIFUL.
 * THERE ARE SOME OTHER SUBTLETIES LIKE NEEDING TO ENSURE THE NEXT CHAR IN THE STRING
 * IS THE NEXT LETTER IN THE ALPHABET, I.E. NO SKIPPED LETTERS. ETC
 */

function isBeautifulString(inputString) {
    let sortedString = inputString.split('').sort().join('');
    let charCodeCountSum = 0
    let totalCharCount = 0;
    let previousCount = 0;
    
    // First letter has to be an 'a' otherwise there can be no other letters
    if(sortedString.charCodeAt(0) !== 97){
          return false;
    }
    
    // set sum to start at 97
    // since charCode of 'a' is 97
    charCodeCountSum += 97;
 
    for(let i=1; i <= sortedString.length; i++){
       if(sortedString.charCodeAt(i) === sortedString.charCodeAt(i-1)){
          charCodeCountSum += sortedString.charCodeAt(i);
       }else if(sortedString.charCodeAt(i) != sortedString.charCodeAt(i-1) + 1 && !isNaN(sortedString.charCodeAt(i))){
          return false;
       }else{
          totalCharCount = charCodeCountSum / sortedString.charCodeAt(i-1);
          if(previousCount != 0 && totalCharCount > previousCount){
             return false;
          }
          previousCount = totalCharCount;
          charCodeCountSum = sortedString.charCodeAt(i);
       }
    }
 
    return true;
 }