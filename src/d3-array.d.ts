// eslint-disable-next-line
import * as d3 from 'd3-array'

declare module 'd3-array' {
  /**
   * Groups the specified array of values into a Map from key to array of value.
   * @param a The array to group.
   * @param key The key function.
   */
  export function group<TObject, TKey>(
    a: ArrayLike<TObject>,
    key: (value: TObject) => TKey
  ): Map<TKey, TObject[]>

  /**
   * Groups and reduces the specified array of values into a Map from key to value.
   *
   * @param a The array to group.
   * @param reduce The reduce function.
   * @param key The key function.
   */
  export function rollup<TObject, TKey, TReduce>(
    a: ArrayLike<TObject>,
    reduce: (value: TObject[]) => TReduce,
    key: (value: TObject) => TKey
  ): Map<TKey, TReduce>
}
