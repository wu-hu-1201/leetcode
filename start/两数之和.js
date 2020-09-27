var twoSum = function(nums, target) {
    const len = nums.length; // 数组长度
    // 使用Map记录nums数组元素值和对应下标
    const map = new Map();  
    for (let i = 0; i < len; i++) {
        if (map.has(target - nums[i])) {
            // 当map中有指定元素即存在存在某个元素＝ target-nums数组中某个(i)元素的值，用has()方法 返回出这个值和i
            return [map.get(target - nums[i]), i];
            // 读取上一步if判断中拿到的指定元素值并以数组形式返回
        }
        map.set(nums[i], i);
        // 为Map对象添加一个指定键和值的新元素，即上一步所返回的
    }
};