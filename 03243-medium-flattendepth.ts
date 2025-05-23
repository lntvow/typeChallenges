// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>
]

// ============= Your Code Here =============
type FlattenDepth<T extends any[], D = 1, C extends any[] = []> = D extends C['length']
  ? T
  : T extends [infer R, ...infer U]
  ? R extends any[]
    ? [...FlattenDepth<R, D, [...C, 1]>, ...FlattenDepth<U, D, C>]
    : [R, ...FlattenDepth<U, D, C>]
  : T

type a = FlattenDepth<[1, [2]]>
