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