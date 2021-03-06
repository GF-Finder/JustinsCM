/*
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//   //max volume found
//   var maxVolume = 0;
//   //loop through the possible start
//   for (var i = 0; i < height.length; i++) {
//       var startHeight = height[i];
//       //loop through the possible end
//       for (var j = i + 1; j < height.length; j++) {
//           var endHeight = height[j];
//           //calculate the volumes
//           var containerHeight = height[i] < height[j] ? height[i] : height[j];
//           var containerLength = j - i;
//           var volume = containerHeight * containerLength;
//           //compare to max volume found (so far)
//           maxVolume = volume > maxVolume ? volume : maxVolume;
//       }
//   }
//   return maxVolume;
// };

var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left ++;
    } else {
      right --;
    }
  }
  return max;
}