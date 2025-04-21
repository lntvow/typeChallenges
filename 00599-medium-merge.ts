// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >
]

// ============= Your Code Here =============
type Merge<F, S> = Merge2<
  {
    [P in Exclude<keyof F, keyof S>]: F[P]
  } & S
>

type Merge2<T> = {
  [P in keyof T]: T[P]
}
