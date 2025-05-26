// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
]

// ============= Your Code Here =============
type Fibonacci<
  T extends number,
  R extends number[] = [1],
  K extends number[] = [1],
  V extends number[] = [1]
> = T extends R['length'] ? K['length'] : Fibonacci<T, [...R, 1], [...V], [...K, ...V]>
