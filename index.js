const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin (record) {
  let result = record.find( i => i.result === "W")
  if (result) {
    return result.year
  }
}



// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }