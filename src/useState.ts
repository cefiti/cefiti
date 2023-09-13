import { proxy, useSnapshot } from 'valtio'

export function useState<T extends object>(store: T) {
  const snapshot = useSnapshot(store)
  return new Proxy(store, {
    set(target, prop, value) {
      Reflect.set(target, prop, value)
      return true
    }, 
    get(target, prop) {
      const value = Reflect.get(snapshot, prop)
       if (typeof value === 'function') {
        return  (...args: any) => value.apply(target, args) 
      } else {
        return value
      } 
    },
  })
}
