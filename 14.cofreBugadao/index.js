function processData(input) {
  const getWords = input.trim().split('\n')
  const correctPw = getWords[0]
  const incorrectPw = getWords[1]
  let i = 0
  for (const letter of incorrectPw) {
    if(letter === correctPw[i]) {
        i++
    }if(i === correctPw.length) {
        break
    }
  }

  return i === correctPw.length ? console.log('SIM') : console.log('NAO')
}

const input = `cubos\ncuggbyos`;
processData(input);