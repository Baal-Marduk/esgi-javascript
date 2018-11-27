
function type_check_v1(arg1, arg2){
    if(typeof arg1 === typeof arg2 || typeof arg2 === null || typeof arg1 === 'object'){
        return true;
    } else if(typeof arg1 && typeof arg2 || arg1 === typeof arg2 || arg2 === arg1) {
        return true;
    } else {
        return false;
   }
}

const type_check_v2 = (check, type) => {
    switch (true) {
        case type.hasOwnProperty('type') && !type.hasOwnProperty('value') && !type.hasOwnProperty('enum'):
            return type_check_v1(check, type.type);
        case type.hasOwnProperty('type') && type.hasOwnProperty('value') && !type.hasOwnProperty('enum'):
            return type_check_v1(check, type.type) && JSON.stringify(check) === JSON.stringify(type.value);
        case !type.hasOwnProperty('type') && !type.hasOwnProperty('value') && type.hasOwnProperty('enum'):
            return check === type.enum.length;
        default:
            return false;
    }

}

  console.log(type_check_v1());
  