
function type_check_v1(arg1, arg2){
    if(typeof arg1 === typeof arg2 || typeof arg1 === arg2 || typeof arg2 === arg1){
        return true;
    } else if(arg1 === null && arg2 === null || arg1 === 'null' && arg2 ==='null') {
        return true;
    } else {
        return false;
    }
}

function type_check_v2(arg1, arg2){

}

  console.log(type_check_v1());
  