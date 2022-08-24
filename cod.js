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


// REVERSING A LINK LIsts

// given the head of a singlly linked list, reverse the list and return reversed list

const reversedList = (head) => {
  let previous = null
  let current = head
  while(current) {
    const next = current.next
    current.next = previous
    previous = current
    current = next
  }
  return previous
}

//given the head of a singlgly linked list, return true if it is a palindrome
//linear space solution
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    const stack = [];
    while(fast) {
      if(!fast.next) {
        slow = slow.next
        break;
      }
        stack.push(slow.val);
      slow =slow.next;
      fast= fast.next.next;

    }
    while(slow) {
      if(stack.pop() !== slow.val) return false; 
      slow = slow.next;
    }
    return true;
}

//optimal solution

const findMidpoint = (head) => {
  let slow = head;
  let fast = head;
  while(fast && fast.next) {
    slow =slow.next;
    fast = fast.next.next;
  }
  return slow;
}

const reverse = (head) => {
  let previous =null;
  let cur = head;
  while(cur) {
  const next = cur.next;
    cur.next =prev;
    prev= cur;
    cur = next;
  }
  return prev;
}

const compare =(list1, list2) => {
  while(list1 && list2) {
    if(list1.val !== list2.val) return false;
    list1= list1.next;
    list2 = list2.next;
  }
  return true;
}


var isPalindrome =(head) => {
   const midpoint = findMidpoint(head);
    const tail = reverse(midpoint);
    return compare(head, tail);
}

//determine if a 9 x 9 sudoku board is valid .only the filled cells need to be validated according to the rules : each row must contain the digits 1-9 without repetition.Each column must contain the digits 1-9 without repetition
//each of the 3 x 3 sub-boxes of the grid must contain the digits 1-9 wuthout repetition

var isValidSudoku = function(board) {

  for(let i = 0; i < board.length; i++ ) {
    const set = new Set();
    for(let j = 0; j < board[i].length; j++){
      const cell = board[i][j];
      if(cell === '.') continue
      if(set.has(cell)) return false;
      set.add(cell);
    }   
  }

  for(let i = 0; i < board.length; i++ ) {
    const set = new Set();
    for(let j = 0; j < board[i].length; j++){
      const cell = board[j][i];
      if(cell === '.') continue
      if(set.has(cell)) return false;
      set.add(cell);
    }   
  }

  for(let i =0; i< 3; i++ ) {
    for(let j =0; j < 3; j++) {
      const set = new Set();
      for(let  k = 0; k < 3; k++) {
        for(let l = 0; l < 3; l++) {
          const cell = board[3 * i + k][3 * j + l];
          if(cell === '.') continue
          if(set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }

  return true;
}

// method 2


var isValidSudoku = function(board) {

  const rows = [], cols = [], boxes = [];
  for(let i = 0; i < board.length; i++) {
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
  }

  for(let i = 0; i < board.length; i++ ) {
    for(let j = 0; j < board[i].length; j++){
      if(cell === '.') continue;
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if(rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell))
       return false;
      rows[i].add(cell);
      cols[j].add(cell);
      boxes[boxNum].add(cell);
    }
  }
  
  return true;
}

//remove elements
//given an array nums and a value val, remove all instances of that value in-place and return the new length .Do not allocate extra space for another space , yyou must do this by modifying the input array iplace with 0(1) extra memory.

function removeElement (nums, val) {
  if(!nums) return 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === val) {
      nums.splice(i, 1);
      i--
    }
  }
  return nums.length;
}; 

//method 2
function removeElement (nums, val) {
  if(!nums) return 0;
  let pointer =0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i]!== val) {
      nums[pointer] = nums[i];
      pointer++
    }
  }
  return pointer;
}; 

// given an array of integers of the two numbers such that they add up to a specific target.you may assume that each input would have exactly one solution and you may not use the same element twice.
function twoSum(nums, target) {
 var map = {};
 for(var i=0; i < nums.length; i++){
  var value = nums[i];
  var complementPair = target - value;
  if(map[complementPair] !== undefined) {
    return [map[complementPair], i] 
  } else {
    map[value] = i;
  }
 }
};