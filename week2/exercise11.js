//function XO

function XO(str){

    var xString = (str.match(/x/gi) || []).length;
    var oString = (str.match(/o/gi) || []).length;
  
    return xString == oString
  }
XO("xooxxo")