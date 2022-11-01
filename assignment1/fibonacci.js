const fibs=(n)=>{
  let a=0;
  let b=1;
  
  let arr=[];
  for (let i=0;i<n;i++){
    if (i===0||i===1){ arr.push(i)}
      else {
       let c=a+b;
       arr.push(c);
       a=b;
       b=c;
      }
  }
  return arr
}
//console.log(fibs(15));

const fibsRec=(n)=>{
  let arr=[] 
  const fib=(n)=>{
    return (n===0 || n===1)? n : fib(n-1)+fib(n-2);
    }
  
     for(let i=0;i<n;i++){
      arr.push(fib(i))

     }
  
    
    return arr;
  }
  //console.log(fibsRec(15));




