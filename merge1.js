function merge(arr1, arr2){ //MERGE 1
  const results = [];
  let i=0;
  let j=0;

while(i<arr1.length && j<arr2.length){

      if(arr1[i]< arr2[j]){
      results.push(arr1[i]);
      i++;
      } else {
      results.push(arr2[j]);
      j++;
    }
    while(i< arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }
} return results;
} 
let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]
console.log(merge(arr1,arr2));

function merge(arr3, arr4){       //MERGE 2
     const result2 =[];
     let a=0;
     let b=0;
  while(a<arr3.length && b<arr4.length){

      if(arr3[a]< arr4[b]){
      result2.push(arr3[a]);
      a++;
      } else {
      result2.push(arr4[b]);
      b++;
    }
}
    while(a< arr3.length){
        result2.push(arr3[a]);
        a++;
    }
    while(b<arr4.length){
        result2.push(arr4[b]);
        b++;
    } return result2;  
     }
    
 let arr3 = [-2,-1,0,4,5,6]; 
let arr4 = [-3,-2,-1,2,3,5,7,8];
merge(arr3,arr4) // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

console.log(merge(arr3,arr4));
  
function merge(arr5, arr6){       //MERGE 3
     const result3 =[];
     let n=0;
     let m=0;
  while(n<arr5.length && m<arr6.length){

      if(arr5[n]< arr6[m]){
      result3.push(arr5[n]);
      n++;
      } else {
      result3.push(arr6[m]);
      m++;
    }
}
    while(n< arr5.length){
        result3.push(arr5[n]);
        n++;
    }
    while(m<arr6.length){
        result3.push(arr6[m]);
        m++;
    } return result3;  
     }
let arr5 = [3,4,5]
let arr6 = [1,2]

merge(arr5,arr6) // [1,2,3,4,5]
console.log((merge(arr5,arr6)));
