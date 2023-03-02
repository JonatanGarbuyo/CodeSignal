function solution(cell1 = '', cell2 = '') {
  return (
    (cell1.charCodeAt(0) % 2 === cell1.charCodeAt(1) % 2) ===
    (cell2.charCodeAt(0) % 2 === cell2.charCodeAt(1) % 2)
  )
}
