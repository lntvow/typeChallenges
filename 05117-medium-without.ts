// ============= Test Cases =============
import { Includes } from './00898-easy-includes'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

// ============= Your Code Here =============
type Without<T, U> = T extends [infer R, ...infer F]
  ? Includes<U extends any[] ? U : [U], R> extends true
    ? Without<F, U>
    : [R, ...Without<F, U>]
  : []
