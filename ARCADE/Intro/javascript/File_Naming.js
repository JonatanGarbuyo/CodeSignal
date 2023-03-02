function solution(names) {
  return names.reduce((listnames, currName) => {
    let name = currName
    let i = 1
    while (listnames.includes(name)) {
      name = `${currName}(${i})`
      i++
    }
    listnames.push(name)
    return listnames
  }, [])
}

console.log(solution(['doc', 'doc', 'image', 'doc(1)', 'doc']))
// Expected_Output = ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
