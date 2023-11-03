//Using Filter Method: 
//Output:[ { name: 'Lenny', age: 51, occupation: 'programmer' }, 
//         { name: 'Anna', age: 47, occupation: 'programmer' }, 
//         { name: 'Albert', age: 76, occupation: 'programmer' },
//		] 
  

let users = [ 

    { name: 'John', age: 25, occupation: 'gardener' }, 

    { name: 'Lenny', age: 51, occupation: 'programmer' }, 

    { name: 'Andrew', age: 43, occupation: 'teacher' }, 

    { name: 'Peter', age: 81, occupation: 'teacher' }, 

    { name: 'Anna', age: 47, occupation: 'programmer' }, 

    { name: 'Albert', age: 76, occupation: 'programmer' }, 

] 

  let ans=users.filter((e)=>{
	  return e.occupation=="programmer"
  })
  console.log(ans)
  
