// import { solution } from '../isAdmissibleOverpayment'
const { expect, test } = require('@jest/globals')
const solution = require('./isAdmissibleOverpayment')

// Run the test
test('Test one', function () {
  const prices = [110, 95, 70]
  const notes = [
    '10.0% higher than in-store',
    '5.0% lower than in-store',
    'Same as in-store',
  ]
  const x = 5

  expect(solution(prices, notes, x)).toBe(true)
})

test('Test two', function () {
  const prices = [48, 165]
  const notes = ['20.00% lower than in-store', '10.00% higher than in-store']
  const x = 2

  expect(solution(prices, notes, x)).toBe(false)
})

test('Test three', function () {
  const prices = [24.42, 24.42, 24.2424, 85.23]
  const notes = [
    '13.157% higher than in-store',
    '13.157% lower than in-store',
    'Same as in-store',
    '19.24% higher than in-store',
  ]
  const x = 24.24

  expect(solution(prices, notes, x)).toBe(true)
})

test('Test four', function () {
  const prices = [220]
  const notes = ['120.0000% higher than in-store']
  const x = 120

  expect(solution(prices, notes, x)).toBe(true)
})

test('Test five', function () {
  const prices = [40, 40, 40, 40]
  const notes = [
    '10.0% higher than in-store',
    '10.0% lower than in-store',
    '10.0% higher than in-store',
    '10.0% lower than in-store',
  ]
  const x = 0

  expect(solution(prices, notes, x)).toBe(true)
})

test('Test six', function () {
  const prices = [40, 40, 40, 40]
  const notes = [
    '0.001% higher than in-store',
    '0.0% lower than in-store',
    '0.0% higher than in-store',
    '0.0% lower than in-store',
  ]
  const x = 0

  expect(solution(prices, notes, x)).toBe(false)
})

test('Test seven', function () {
  const prices = [110, 110, 110, 110, 110, 110, 110, 110, 110, 160]
  const notes = [
    '10.0% higher than in-store',
    '10.0% higher than in-store',
    '10.0% higher than in-store',
    '10.0% higher than in-store',
    '10.0% higher than in-store',
    '10.0% higher than in-store',
    '10.0% higher than in-store',
    '10.0% higher than in-store',
    '10.0% higher than in-store',
    '60.0% higher than in-store',
  ]
  const x = 150

  expect(solution(prices, notes, x)).toBe(true)
})

test('Test eight', function () {
  const prices = [20]
  const notes = ['100.0% higher than in-store']
  const x = 9

  expect(solution(prices, notes, x)).toBe(false)
})

test('Test nine', function () {
  const prices = [35000, 35000]
  const notes = [
    '35000.0% higher than in-store',
    '10000.0% lower than in-store',
  ]
  const x = 150

  expect(solution(prices, notes, x)).toBe(false)
})

test('Test ten', function () {
  const prices = [20, 20]
  const notes = ['20.0% higher than in-store', '20.0% lower than in-store']
  const x = 0

  expect(solution(prices, notes, x)).toBe(true)
})
