function ucFirst(string) {
  if (string.length > 0) {
    return string[0].toUpperCase() + string.substring(1);
  } else {
    return string;
  }
}

function capitalize(string) {
   return string.replace(/\w\S*/g, function(txt){
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   });
}


function camelCase(string) {
   result = capitalize(string);
   return result.replace(/\s/g, '');
}


function snake_case(string){
  if (typeof string === 'string')
    {
    return string.replace(/\s/g,'_').toLowerCase();
    }
    else 
    {
      return "";
    }
}


function leet(string){
 let data = "";
 if(typeof string === "string") {
     let tabCryptage = { "A" : "4", "E" : "3", "I": "1", "O": "0", "U" : "(_)", "Y" : "7"};
     for (let i = 0; i < string.length; i++){
         if(typeof tabCryptage[string[i].toUpperCase()] === 'undefined') {
             data += string[i];
         }
         else {
             data += tabCryptage[string[i].toUpperCase()];
         }
     }
 }else{
   data = null;
 }
 return data;
}





console.log(ucFirst('test'));
console.log(capitalize('super genial'));
console.log(camelCase('super genial'));
console.log(snake_case('super Genial'));
console.log(snake_case(808));
console.log(leet('leetspeak'));