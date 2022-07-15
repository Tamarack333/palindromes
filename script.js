function palindrome(str) {
  var origional = str.toUpperCase().split('');
  var forward = [];
  var backward = [];
  for(let i = 0; i < origional.length; i++){
    // if character is alphanumeric
    if(/[a-z0-9]/i.test(origional[i])){
      // push to forward
      forward.push(origional[i]);
      // unshift to backward
      backward.unshift(origional[i]);
    }
  }
  // if forward === backward return true
  if(forward.join('') === backward.join('')){
  return true;
  }
  // in all other cases...
  return false
}

palindrome("eyes");
palindrome("A man, a plan, a canal. Panama");