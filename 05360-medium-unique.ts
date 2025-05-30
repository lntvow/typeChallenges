// ============= Test Cases =============
import { Includes } from './00898-easy-includes'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>
]

// ============= Your Code Here =============
type Unique<T, U = never> = T extends [infer F, ...infer R]
  ? true extends (U extends U ? Equal<U, [F]> : never)
    ? Unique<R, U>
    : [F, ...Unique<R, U | [F]>]
  : []
