function Dev(a){
    var sum=0; 
    for(var i=0;i<=1000;i++){
     if(a[i]%4==0) {
       sum+=a[i]; 
     }
    }
    return sum
  }
  console.log(Dev([-6,-91,-100,84,-22,0,1,473]))


/// time complexity: NlogN + MlogM
//given two strings s and t , return true if t is an anagram of s, and false otherwise
// anagram -> merge every letter between two words eg. caat and taca
//sort the strings

//sCount[ch] - tCount[ch] === 0 -> anagram
 
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  const N = s.length;
  for (let i = 0; i < N; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    if (!count[t[i]]) count[t[i]] = 0;
    count[s[i]]++;
    count[t[i]]--;
  }
  for (let ch in count) {
    if (count[ch] !== count[ch]) return false;
  }
  return true;
};


//given an array of integers nums and an integer target ,  return indices of the two numbers such that they add up to target.you may assume tahta each input would have exactlyone solution and you may not use the same element twice. return answwer in any order
/*

 nums = [1, 5, 9]
 target = 10
  
 [0, 2]

 i =1
 j=2

 time complexity: 0(N^2) -> 0(N)
 space complexity: 0(1) -> constant -> 0(N)

 Hashmap
 nums = [1, 5, 9]
 target = 10

 map ={1}
i = 0
value = 1, 5, 2
complement_pair = 10 -1 = 9
[0, 2]
map[1]
*/

var twoSum = function(nums, target) {
  var map = {};
  for(var i = 0; i < nums.length; i++) {
    var value = nums[i];
    var complementPair = target - value;
    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
} 


//given an array of integers , 1 < a[i]  < n(n = size of array) some elements appear twice and others appear once.find all the elemnts that appear twice in an array.do it in 0(n) time
//finding duplicates in an array
//example [4, 3, 2, 7, 8, 2, 3, 1]
/* 
[4, 3, 2, 2, 3, 1]
[1, 1, 1, 1, 0, 0] 

result = [2,3],


nums = [4, 3, -2, -2, 3, 1]

result = [],

i = 0
value=4
index = 4-1 = 3, 3-1 = 2
nums[index] * =-1

nums[2] * = -1
*/
var findDuplicates = function(nums) {
  var result = [];
  for( var i =0; i < nums.length; i++) {
    var value = Math.abs(nums[i]);
      var index = value -1;
      if(nums[index] < 0) {
        result.push(value);
      } else {nums[index] *= -1}
  }
  return result;
}