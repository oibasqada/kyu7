// function isValidWalk(walk) {
//     let previous = null
//     const targetSeqOne = ['n','e','s','w'];
//     const targetSeqTwo = []
//     const oppsite = ['n','s']
//     if ( walk.length !== 10) {
//         return false;
//     } else {
//        for (let i = 0; i < walk.length; i++) {
//            if (walk[i] === previous) {
//                return false
//            }
//            previous = walk[i];
//        }
//        return true;
//     }
// }
//
// console.log(isValidWalk([1,2,1,4,5,6,2,8,9,10]))

//



// function vowel2index(str) {
//
//     const vowels = 'aeiouAEIOU'
//     let result = '';
//
//     for (let i = 0; i < str.length; i++) {
//         const el = str[i]
//         if ( vowels.includes(el)) {
//             result += (i + 1)
//         } else {
//             result += el
//         }
//     }
//     return result
// }
// console.log(vowel2index('ehEhe'))

// function reversed(str) {
//     let rev = '';
//     for (let i = str.length -1; i >= 0; i--) {
//         rev += str[i];
//     }
//     return rev;
// }
//
// console.log(reversed('ohayo!'))

// function createPhoneNumber(numbers){
//     return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
// }
//
// console.log((createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])))

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
//
//     for(var i = 0; i < numbers.length; i++)
//     {
//         format = format.replace('x', numbers[i]);
//     }
//
//     return format;
// }


// function isPangram(string){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     const letters = new Set()
//
//     for (let c = 0; c < string.length; c++) {
//         const char = string[c].toLowerCase()
//         if (alphabet.includes(char)) {
//             letters.add(char)
//         }
//     }
//     return letters.size === alphabet.length
// }

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
}

console.log(isPangram("The quick brown fox jumps over the lazy0++ 999 dog."))