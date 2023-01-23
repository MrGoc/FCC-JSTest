function steamrollArray(arr) {
  let newArr = [];
  function flat(arr) {
    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (Array.isArray(arr[i]))
      flat(arr[i]);
    else
      newArr.push(arr[i]);
    }
  } 
  flat(arr);
  return newArr;
}
  
  steamrollArray([1, [2], [3, [[4]]]]);