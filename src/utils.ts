/* eslint-disable */

function flatten<U>(
  list: any[],
  depth: number,
  mapperFn?: (value: any, index: number, array: any[]) => U | ReadonlyArray<U>,
  mapperCtx?: any
): any {
  if (depth === 0) {
    return list
  }
  return list.reduce((accumulator, item, i) => {
    if (mapperFn) {
      item = mapperFn.call(mapperCtx || list, item, i, list)
    }
    if (Array.isArray(item)) {
      accumulator.push(...flatten(item, depth - 1))
    } else {
      accumulator.push(item)
    }
    return accumulator
  }, [])
}

if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth: number | undefined = Infinity) {
    return flatten(this, depth)
  }
}

if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function<U, This>(
    callback: (value: any, index: number, array: any[]) => U | ReadonlyArray<U>,
    thisArg?: This | undefined
  ): U[] {
    return flatten(this, 1, callback, thisArg)
  }
}

export {}
