// var lengthOfLongestSubstring = function(s) {
//     let arr = []
//     let max = 0
//    for (let i = 0; i < s.length; i ++) {
//        // 使用indexOf判断是否在数组中出现过
//        let index = arrindexOf(s[i])
//        if (index !== -1) {
//            // 截去开头到当前字符串
//            arr.splice(0, index + 1)
//        }
//        // 放入剩下字符串到数组
//        arr.push(s.charAt(i))
//        // 取max最大值
//        max = Math.max(arr.length, max)
//    }
//    return max
// }

var lengthOfLongestSubstring = function (s) {
  let map = new Map(),
    max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }
  return max;
};
