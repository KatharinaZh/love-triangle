/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [2, 3, 1]) {
  let result = 0;
  preferences.forEach((elem,index) => {
    let firstElement = index; //0
    let secondElement = preferences[index]-1; //1
    let thirdElement = preferences[secondElement]-1; //2
    if (preferences[thirdElement]-1 === firstElement) {
      result++
    }
  })
  return Math.floor(result/3);
};
