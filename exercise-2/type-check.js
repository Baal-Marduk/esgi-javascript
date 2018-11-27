
function type_check_v1(arg1, arg2){
    if(typeof arg1 === typeof arg2 || typeof arg1 === arg2 || typeof arg2 === arg1){
  return true;
} else {
    return false;
}

}

  console.log(type_check_v1());