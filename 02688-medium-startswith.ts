// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>
]

// ============= Your Code Here =============
type StartsWith<T extends string, U extends string> = T extends `${U}${infer P}` ? true : false
