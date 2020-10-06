// 既能满足孩子，还能消耗最少，较小的饼干分配给胃口较小的孩子
// 将饼干数组和孩子数组做升序排序。遍历饼干数组，找到能满足第一个孩子的饼干
// 继续遍历饼干数组，找到满足第二，三，四...n个孩子的饼干

var findContentChildren = function(g, s) {
    // 使用sort进行排序，将胃口数组和饼干尺寸数组进行升序排列
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let total = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[total]) {  // 当第一块饼干的大小满足第一个小孩的胃口则返回该饼干值
            total ++
        }
        if (total === g.length) {  // 当饼干已满足匹配完所有小孩胃口时结束循环，不再继续循环之后的饼干大小
            return total
        }
    }
    return total
};