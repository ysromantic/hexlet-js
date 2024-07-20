import _ from 'lodash';
  
  const getMax = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

export default getMax;
