/* #Small Enough ? Beginner Solution */


/* Method 1 */
function smallEnough(a, limit){
 if (Math.max(...a) <= limit) return true;
  else
    return false;
}

/* or */
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

/* Method 2 */
function smallEnough(a, limit){
 return a.every(el => el <= limit)
}

/* Method 3*/
function smallEnough(a, limit){
  for(var i of a){
    if(i > limit)
      return false;
  }
  return true;
}

/* Method 4 */
function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}
