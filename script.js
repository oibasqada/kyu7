function isValidWalk(walk) {
    if ( walk.length > 10 || walk.length < 10) {
        return false
    } else {
        return true
    }
}

console.log(isValidWalk([1,2,3,4,5,6,7,8,9,10,1]))