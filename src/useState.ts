import { proxy, useSnapshot } from 'valtio'

export function useState<T extends object>(store: T) {
    const snapshot = useSnapshot(store)
    return new Proxy(store, {
      set(target, prop, value, receiver) {
        Reflect.set(target, prop, value, receiver)
        return true
      }, 
      get: function (target, prop, receiver) {
        const value = Reflect.get(snapshot, prop, receiver)
         if (typeof value === 'function') {
          return function (...args: any) {
            //Reflect.apply(target, target, argumentsList) 
            //@ts-ignore
            return target[prop].apply(store, args) 
          }
        } else {
          return value
        } 
      },
    })
  }

  export {proxy} 