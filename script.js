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


// const mergeAlternately = function(word1, word2) {
//
//     let res = ''
//     let i = 0, j = 0
//
//     while (i < word1.length || j < word2.length){
//         if (i < word1.length) {
//             res += word1[i]
//             i++
//         }
//         if (j < word2.length) {
//             res += word2[j]
//             j++
//         }
//     }
//     return res
// };
//
// console.log(mergeAlternately('abc','qwe'))


// const alternateStrings = (str1, str2) => {
//
//     let res = ''
//     let i = 0, j =0
//
//     while ( i < str1.length || j < str2.length) {
//         if (i < str1.length) {
//             res += str1[i]
//             i++
//         }
//         if (j < str2.length) {
//             res += str2[j]
//             j++
//         }
//     }
//     return res
// }
//
// console.log(alternateStrings('abc', 'def'))

// function MaxFind (arr) {
//     return arr.sort(function (a,b){
//         return b - a
//     })[0]
//
//     // let max;
//     // let min = arr[0]
//     // for (let i = 0; i < arr.length; i++){
//     //     if((arr[i]) < min) {
//     //         min = arr[i];
//     //     } else {
//     //         max = arr[i]
//     //     }
//     // }
//     // return max
// }
//
// console.log(MaxFind([3,4,5,6,700,8,9,234]))

// const gcdOfStrings = function(str1, str2) {
//     if(str1 + str2 !== str2 + str1) return '';
//
//     const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//     const gcdLength = gcd(str1.length, str2.length);
//
//     return str1.slice(0, gcdLength);
// };
//
//
// console.log(gcdOfStrings('abcdef','abc'))

// const kidsWithCandies = function(candies, extraCandies) {
//
//         const max = Math.max(...candies);
//         return candies.map(candy => candy + extraCandies >= max);

    // let sortedCandies = candies.slice().sort(function (a, b) {
    //     return b - a
    // })
    //
    // for (let i = 0; i < candies.length; i++) {
    //     if (candies[i] + extraCandies >= sortedCandies[0]) {
    //         candies[i] = true
    //     } else {
    //         candies[i] = false
    //     }
    // }
    //
    // return candies
// };

// console.log(kidsWithCandies([4,3,1,5,6,], 3))

// function domainName(url){
//     return  url.substring(
//         url.indexOf('/') +2,
//         url.lastIndexOf('.')
//     )
//     if ()
// }
//
// console.log(domainName("https://www.google.co.jp")) //return later!!!

// const canPlaceFlowers = function(flowerbed, n) {
//
//     for (let i = 0; i < flowerbed.length && n !== 0; i++) {
//         //прохожу по длине массива, если n не равен 0
//         if (
//             flowerbed[i] === 0 && //проверяю если текущий элемент массива равен 0 и..
//             flowerbed[i - 1] !== 1 && //впереди стоящий текущему элементу, элемент не равен 1 и..
//             flowerbed[i + 1] !== 1 //стоящий после текущего элемента, элемент не равен 1
//         ) {
//             n-- //уменьшаю значение n (количество оставшихся цветов для посадки)
//             i++ //инкрементирую i на 1, чтобы пропустить следущий участок грядки, так как цветок уже размещен.
//         }
//     }
//     return n === 0 //после завершения цикла проверяю условие n === 0. Если === то все цветы посажены и возвращается true else false
// };
//
// console.log(canPlaceFlowers([1,0,0,0,1,0,0,0,1], 2))

// const reverseVowels = function(s) {
//
//     const vowels = {}; //создаю объект, где будут храниться все гласные
//     for (const char of 'aeiouAEIOU') {
//         vowels[char] = true
//     }
//
//     const characters = s.split('');
//
//     let left = 0;
//     let right = s.length -1;
//
//     while (left < right) {
//         while (left < right && !(s[left] in vowels)) {
//             left += 1;
//         }
//
//         while (left < right && !(s[right] in vowels)) {
//             right -= 1;
//         }
//
//         swap(characters, left, right);
//         left += 1
//         right -= 1
//     }
//
//     return characters.join('')
// };
//
// const swap = (arr, i, j) => {
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
//
// console.log(reverseVowels('hello'))

// const reverseWords = function(s) {
//     const words = s.split(' ').filter(word => word !== '')
//     words.reverse()
//
//     // let left = 0
//     // let right = s.length -1
//     //
//     // while (left < right){
//     //     const temp = words[left]
//     //     words[left] = words[right]
//     //     words[right] = temp
//     //     left++
//     //     right--
//     // }
//     return words.join(' ')
// };
//
//
// console.log(reverseWords('the sky is blue   1'))


// const reverseWords = function(s) {
//     let words = s.split(' ')
//     let reverseStr = ''
//     for (let i = words.length -1; i >= 0; i--){
//         if (words[i] === '') continue
//         if (reverseStr.length > 0) reverseStr += ' '
//         reverseStr += words[i]
//     }
//     return reverseStr
// };
//
// console.log(reverseWords('the sky is blue   1'))

// const productExceptSelf = function(nums) {
//
//     let left = []
//     let right = []
//     let leftMult = 1
//     let rightMult = 1
//
//     for (let i = 0; i < nums.length; i++) {
//         left[i] = leftMult
//         leftMult *= nums[i]
//     }
//     for (let i = nums.length -1; i >= 0; i--) {
//         right[i] = rightMult
//         rightMult *= nums[i]
//         right[i] *= left[i]
//     }
//
//     return right
// };
//
// console.log(productExceptSelf([1,2,3,4]))


// some tasks from chatGPT for covering current topic

// const sumArray = (arr) => {
//     return arr.reduce((acc, el)=> acc + el,0)
// }
//
// console.log(sumArray([2,3,4,5,6,7,8,9]))

// const findMax = (arr) => {
//     // arr.sort(function (a, b){
//     //     return b - a
//     // })
//
//     // let max = arr[0] || null
//     // let num = null
//     // for (let i = 0; i < arr.length; i++) {
//     //     num = arr[i]
//     //     max = Math.max(max, num)
//     // }
//
//     if (arr.length === 0) {
//         return null
//     }
//     let max = arr[0]
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//
//     return max
// }
// console.log(findMax([2,3,4,5,6,7,8,9]))

// const reverseArray = function (arr){
//     if (arr.length === 0){
//         return null
//     }
//     // return arr.reverse()
//     let res = new Array
//     for (let i = arr.length -1; i >= 0; i--) {
//         res.push(arr[i])
//     }
//     return res
// }
// console.log(reverseArray([1,2,3,4,5,6]))

// const uniqueElements = function (arr) {
//     if (arr.length === 0) {
//         return null
//     }
//     return arr.filter((val, idx, array) => array.indexOf(val) === idx)
//
//     // let uniq = []
//     //
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (uniq.indexOf(arr[i]) === -1) {
//     //         uniq.push(arr[i])
//     //     }
//     // }
//     // return uniq
//
//     // let uniq = [...new Set(arr)]
//     // return uniq
// }
// console.log(uniqueElements([1,1,2,3,4,5,5,5,6,'unique', 'unique','world']))

// const multiplyByFactor = function (array, n) {
//     if (array.length === 0) {
//         return null
//     }
//     let res = new Array(array.length)
//     for (let i = 0; i < array.length; i++) {
//         res[i] = array[i] * n
//     }
//     return res
//
//     // return array.map((el) => el * n, 0)
// }
//
// console.log(multiplyByFactor([1,2,3,4,5,6], 4))

//13th of leetcode streak

// const increasingTriplet = function(nums) {
//     let first = Infinity
//     let second = Infinity
//
//     for (let num of nums) {
//         if (num <= first) {
//             first = num
//         } else if (num <= second) {
//             second = num
//         } else {
//             return true
//         }
//     }
//     return false


    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length -1; j++) {
    //         if (nums[i] < nums[j]) {
    //             for (let k = j+1; k < nums.length; k++) {
    //                 if (nums[j] < nums[k]) {
    //                     return true
    //                 }
    //             }
    //         }
    //     }
    // }
    // return false

    // for (let i = 0; i < nums.length; i++) {
    //     if (
    //         nums[i] > nums[i - 1] &&
    //         nums[i] < nums[i + 1] &&
    //         nums[i] > nums[i - 2] &&
    //         nums[i] < nums[i + 2]
    //     ) {
    //         return true
    //     }
    // }
    // return false
// };

// console.log(increasingTriplet([3,2,3]))


// const twoSum = (nums, target) => {
//     // let start = 0;
//     // let end = nums.length - 1;
//     //
//     // while (start < end) {
//     //     if (nums[start] + nums[end] === target) {
//     //         return [start, end];
//     //     } else if (nums[start] + nums[end] < target) {
//     //         start++;
//     //     } else {
//     //         end--;
//     //     }
//     // }
//     // return []
//
//     const n = nums.length
//     let match = false
//     for (let i = 0, j = n-1; i <= j && !match; i++, j--) {
//         let diff1 = target - nums[i]
//         let idx1 = nums.indexOf(diff1)
//         let diff2 = target - nums[j]
//         let idx2 = nums.indexOf(diff2)
//
//         if (idx1 > -1 && idx1 !== i) {
//             match = true
//             return [i, idx1]
//         }
//         if (idx2 > -1 && idx2 !== j) {
//             match = true
//             return [j, idx2]
//         }
//     }
// };
//
// console.log(twoSum([-1,-2,-3,-4,-5], -8));
//
// /**
//  * @param {number[]} nums
//  */
// class ArrayWrapper {
//     constructor(nums, operator) {
//         this.nums = nums
//         this.operator = operator
//     }
//     if (operator = 'Add') {
//         return nums.valueOf()
//     }
//     if (operator = 'String') {
//         return nums.toString()
//     }
//
// };
//
// ArrayWrapper.prototype.valueOf = function() {
//     return nums++
// }
//
// ArrayWrapper.prototype.toString = function() {
//     return nums
// }
//
// /**
//  * const obj1 = new ArrayWrapper([1,2]);
//  * const obj2 = new ArrayWrapper([3,4]);
//  * obj1 + obj2; // 10
//  * String(obj1); // "[1,2]"
//  * String(obj2); // "[3,4]"
//  */

// function narcissistic(value) {
//     // Code me to return true or false
//     let res = 0
//     let strValue = value.toString()
//     let grade = strValue.length
//     for (let i = 0; i < grade; i++) {
//         const digit = parseInt(strValue[i])
//         res+= digit ** grade
//     }
//     return res === value
// }
//
// console.log(narcissistic(153))


















