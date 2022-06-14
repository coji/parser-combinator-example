import { describe, expect, test } from 'vitest'
import { anyChar } from './primitives'
import type { ParserOutput } from './types'

describe('anyChar', () => {
  const parser = anyChar

  test('Empty input', () => {
    const input = [] as const
    const output = parser(input)
    expect(output).toEqual<ParserOutput<string>>({ result: 'fail' })
  })

  test('1 character input', () => {
    const input = [...'a']
    const output = parser(input)
    expect(output).toEqual<ParserOutput<string>>({
      result: 'success',
      data: 'a',
      rest: []
    })
  })

  test('Many character input', () => {
    const input = [...'hoge']
    const output = parser(input)
    expect(output).toEqual<ParserOutput<string>>({
      result: 'success',
      data: 'h',
      rest: [...'oge']
    })
  })
})
