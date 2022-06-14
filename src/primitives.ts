import { Parser } from './types'

export const anyChar: Parser<string> = (input) => {
  if (input.length <= 0) {
    return { result: 'fail' }
  }

  const [data, ...rest] = input
  return {
    result: 'success',
    data,
    rest
  }
}
