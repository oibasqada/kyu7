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

// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//         return string.indexOf(x) !== -1;
//     });
// }

// console.log(isPangram("The quick brown fox jumps over the lazy0++ 999 dog."))

 // * @param {number} x
 // * @return {boolean}

// const isPalindrome = function(x) {
//     const str = x.toString().split("").reverse().join("")
//     if (x.toString() === str) {
//         return true
//     } else {
//         return false
//     }
// };
// console.log(isPalindrome('axa'))



// function likes(names) {
//     if (!names.length) {
//         return 'no one likes this'
//     } else {
//         if (names.length === 1) {
//             return `${names[0]} likes this`
//         }
//         else if (names.length === 2) {
//             return `${names[0]} and ${names[1]} like this`
//         } else if (names.length === 3){
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`
//         }   else if (names.length >= 4) {
//                 return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
//         }
//     }
// }
//
// console.log(likes([]))

// function boolToWord( bool ){
//     if (bool === true) {
//         return 'Yes'
//     } else {
//         return 'No'
//     }
// }
//
// console.log(boolToWord(true))

// function countBy(x, n) {
//     let z = [];
//     for (c = 0; c < n; c++) {
//         res += n[c];
//     }
//
//     return res;
// }
//
// console.log(countBy(1,10)) DIDNT SOLVE YET

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const romanToInt = (s) => {
//     const I = 1
//     const V = 5
//
//     console.log(V)
//     // s.map((el) => {
//     //
//     // })
// };
//
// console.log(romanToInt('LVIII'))

// function romanToDecimal(romanNumeral) {
//     let decimal = 0;
//     const romanNumerals = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };
//
//     for (let i = 0; i < romanNumeral.length; i++) {
//         let currentSymbolValue = romanNumerals[romanNumeral[i]];
//         let nextSymbolValue = romanNumerals[romanNumeral[i+1]];
//
//         if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
//             decimal -= currentSymbolValue;
//         } else {
//             decimal += currentSymbolValue;
//         }
//     }
//
//     return decimal;
// }
//
// let romanNumeral = "MCMXCIV";
// let decimalNum = romanToDecimal(romanNumeral);
// console.log(decimalNum); // выводит 5

// const romanToInt = function(s) {
//     let decimal = 0
//     const objRome = {
//         I:1,
//         V:5,
//         X:10,
//         L:50,
//         C:100,
//         D:500,
//         M:1000,
//     };
//
//     for (let i = 0; i < s.length; i++) {
//         let currentRes = objRome[s[i]]
//         let nextRes = objRome[s[i+1]]
//
//         if (nextRes && currentRes < nextRes) {
//             decimal -= currentRes
//         } else {
//             decimal += currentRes
//         }
//     }
//
//     return decimal
// };
//
// // let s = "MCMXCIV";
// let decimalNum = romanToInt(s)
// console.log(decimalNum)

// let res = 0


// const once = function(fn) {
//     let oneCall = false
//     let res
//
//     return function(...args){
//
//         if (!oneCall){
//             oneCall = true
//             res = fn.apply(this, args)
//             return res
//         } else {
//             return undefined
//         }
//     }
// };


// const compose = function(functions) {
//     return function(x) {
//         if (functions.length === 0){
//             return x
//         } else {
//             functions.reverse().forEach(fn => {
//                 x = fn(x)
//             })
//             return x
//         }
//     }
// };
//
// console.log(compose([x => x + 1, x => x * x, x => 2 * x], x = 4))

// const twoSum = (nums, target) => {
//     let res = 0
//     for (let i = 0; i < nums.length; i++){
//         const num = nums[i]
//         const diff = target - num
//         for (let c = 0; c < nums.length;  c++){
//             const isIt = diff[c]
//             if (isIt + num === target) {
//                 return res = [nums[i], nums[c]]
//             }
//         }
//         return res
//     }
//
// };

// console.log(twoSum([2,3,8,9], 6))


const mergeAlternately = function(word1, word2) {

    let res = ''
    let i = 0, j = 0

    while (i < word1.length || j < word2.length){
        if (i < word1.length) {
            res += word1[i]
            i++
        }
        if (j < word2.length) {
            res += word2[j]
            j++
        }
    }
    return res
};

console.log(mergeAlternately('abc','qwe'))