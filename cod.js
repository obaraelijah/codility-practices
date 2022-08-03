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