// palindrome

function palindrome(str){
    var reversed = str.split('').reverse().join('');
    if(reversed === str){
        console.log("kata ini palindrome");
    }
    else{
        console.log("kata ini tidak palindrome");
    }
}
palindrome("eye");
