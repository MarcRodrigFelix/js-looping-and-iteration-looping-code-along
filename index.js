// Code your solutions in this file
function writeCards(stringsArr, event){
  let newStrings = []

  for(let i = 0; i < stringsArr.length; i++){
    newStrings.push(`Thank you, ${stringsArr[i]}, for the wonderful ${event} gift!`)
  }

  return newStrings
}


function countDown(int){
  let i = int;

  while (i >= 0){
    console.log(i--)
  }
}
