var addTwoNumbers = function(l1, l2) {
    // 定义一个空链表
    const head = new ListNode(0)
    // 
    let push = 0, h = head
    while (l1 || l2 || pushh) {   // 当l1,l2,push 三者中有一个是有值非空时
        // 通过xx.next = new ListNode(x) 赋值
        h = h.next = new ListNode()
        // 计算
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + push
        // 判断取整
        h.val = sum > 9 ? sum % 10 : sum
        // push 复位
        push = sum > 9 ? 1 : 0
        // 依照顺序继续执行下去
        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
    }
    return head.next?head.next:head
};