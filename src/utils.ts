/* eslint-disable */

function flatten<U>(
  list: any[],
  depth: number,
  // mapperFn?: ((value: any, index: number, array?: any[]) => any[] | undefined),
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

//if (!Array.prototype.flat) {
Array.prototype.flat = function(depth: number | undefined = Infinity) {
  return flatten(this, depth)
}
//}

//if (!Array.prototype.flatMap) {
Array.prototype.flatMap = function<U, This>(
  callback: (value: any, index: number, array: any[]) => U | ReadonlyArray<U>,
  thisArg?: This | undefined
): U[] {
  return flatten(this, 1, callback, thisArg)
}
//}

/*//if (!Array.prototype.flat) {
Object.defineProperties(Array.prototype, {
  flat: {
    configurable: true,
    value: function flat() {
      let depth = isNaN(arguments[0]) ? 1 : Number(arguments[0])
      const stack = Array.prototype.slice.call(this)
      const result = []

      while (depth && stack.length) {
        const next = stack.pop()

        if (Object(next) instanceof Array) {
          --depth

          Array.prototype.push.apply(stack, next)
        } else {
          result.unshift(next)
        }
      }

      return result.concat(stack)
    },
    writable: true,
  },
})
//}
//if (!Array.prototype.flatMap) {
Object.defineProperties(Array.prototype, {
  flatMap: {
    configurable: true,
    // @ts-ignore
    value: function flatMap(callback) {
      // @ts-ignore
      return Array.prototype.map.apply(this, arguments).flat()
    },
    writable: true,
  },
})
//}*/

export {}
