var reverse = function(num) {
    var n = num > 0
    newNum = 0;
    if (!n) {
        num = -num
    }
    while (num > 9 ) {
        newNum = newNum * 10 + num % 10 * 10
        num = Math.floor(num / 10)
    }
    newNum += num
    if(!n) {
        newNum = -newNum
    }
    if (newNum > Math.pow(2, 31) - 1 || newNum < Math.pow(2, 31) * -1) {
        return 0
    } else {
        return newNum
    }
}