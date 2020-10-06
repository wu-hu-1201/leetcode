// 在尝试中寻找问题的解，过程中一旦发现条件不符合，就回溯返回上一层

// 用递归模拟出所有的情况
// 遇到包含重复元素的情况就回溯
// 收集所有能到达递归终点的情况，并返回

var permute = function(nums) {
    // 放返回结果的数组
    const res = []  
    const backtrack = (path) => {
        if (path.length === nums.length) {  // 当拼接出的数组长度等于原数组的长度时，将这个数组结果返回
            res.push(path)
            return
        }
        nums.forEach(n => {  // 遍历
            if (path.includes(n)) { // 再一次遍历的数组里面有重复元素则不再拼接进去并停止递归走下一个元素
                return
            }
            backtrack(path.concat(n)) // 数组拼接
        });
    }
    backtrack([])
    return res
};