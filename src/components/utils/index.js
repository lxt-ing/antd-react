export function deepClone(o, n){
  for(let i in o){
    if(o.hasOwnProperty(i)){
      if(typeof o[i] === 'object'){
        console.log('对象', i);
        // deepClone(o[i], n[i])
      }else{
        console.log(i, n, o[i]);
        n[i] = o[i]
      }
    }  
  }
  return n
}
export function ArrayDeepClone(o){
  const newArr = []
  const newObj = {}
  for(let i = 0 ; i < o.length; i++){
    const a =  deepClone(o[i], newObj)
    console.log(a);
//     newArr.push(newObj)
  }
  return newArr;
}