

interface Array<T> {
  groupBy(prop: string /*| ((value: T, index: number, array: T[]) => Array<any>)*/, fields?: string | Function | any): T[];
  aggregate(querys:any): T[];
  first(): T;
  last(): T;
  count(field?: (value: T, index: number, array: T[]) => Array<any>): number;
  min(field?: string | ((value: T, index: number, array: T[]) => Array<any>)): number;
  max(field?: string | ((value: T, index: number, array: T[]) => Array<any>)): number;
  sum(field?: string | ((value: T, index: number, array: T[]) => Array<any>)): number;
  average(field?: string | ((value: T, index: number, array: T[]) => Array<any>)): number;
  unique(field?: string | ((value: T, index: number, array: T[]) => Array<any>) | string): string[] /*| T[]*/;
  by(field?: string |  ((value: T, index: number, array: T[]) => Array<any>)): T[];
  flatten(depth?: number): T[];
  flatMap<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  take(number?: number): T[];
  includes(searchElement?: any): boolean;
  find(callbackfn: (value: T, index: number, array: Array<T>) => boolean, thisArg?: any): T;
  findIndex(callbackfn: (value: T, index: number, array: Array<T>) => boolean, thisArg?: any): number;
  fill(value:T, start?: number, end?: number): T[];
  //static isArray(arg:any): boolean;
}

if (!Array.prototype.groupBy) { 
  Array.prototype.groupBy = function(prop, fields) {
    var key;
    var result = this.reduce((grouped: any, item: any) => {
      key = /*(typeof prop === 'function') ? prop.apply(this, [item]) :*/ item[prop];
      grouped[key] = grouped[key] || [];
      var obj;
      switch (typeof fields) {
        case 'function':
          obj = fields(item);
          break;
        case 'string':
          obj = {};
          obj[fields] = item[fields];
          break;
        case 'object':
          if (Array.isArray(fields)) {
            obj = fields.reduce((prev, curr) => { prev[curr] = item[curr]; return prev }, {})
          }
          break;
        default:
          obj = item;
          break;
      }
      grouped[key].push(obj);
      return grouped;
    }, {});
    var ret = [];
    for (var row in result) {
      console.log(row)
      var item: any = {};
      var cat = (typeof prop === 'function') ? 'key' : prop;
      item[cat] = row;
      item.group = result[row];
      ret.push(item);
    }
    return ret;
  }
}

if (!Array.prototype.aggregate) { 
  Array.prototype.aggregate = function(querys) {
    return this.map(row=> {
      for (var query in querys) {
        let func = querys[query];
        let data = row.group.map(group => group[query]);
        let value;
        let name = '';
        if (typeof func === 'string') {
          value = Array.prototype[func].call(data);
          name = func;
        } else {
          value = func.call(data);
        }
        row[name + '_' + query] = value;
      }
      //console.log('row:', row.category, row)
      delete row.group;
      return row
    })
  };
}

if (!Array.prototype.first) { 
  Array.prototype.first = function() {
    return this[0];
  };
}

if (!Array.prototype.last) { 
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
}

if (!Array.prototype.count) { 
  Array.prototype.count = function() {
    return this.length;
  };
}

function typeArg(arg, arr) {
  var that;
  switch (typeof arg) {
    case 'function':
      that = arr.map(arg);
      break;
    case 'string':
      that = arr.map(o=> o[arg]);
      break;
    default:
      that = arr;
      break;
  }
  return that
}

if (!Array.prototype.min) { 
  Array.prototype.min = function(field) {
    return Math.min.apply(null, this.by(field));
  };
}

if (!Array.prototype.max) { 
  Array.prototype.max = function(field) {
    return Math.max.apply(null, this.by(field));
  };
}

if (!Array.prototype.sum) { 
  Array.prototype.sum = function(field) {
    return this.by(field).reduce((prev, current) => (+(current) + prev), 0); //parseFloat
  }
}

if (!Array.prototype.average) {
  Array.prototype.average = function(field) {
    var that = typeArg(field, this);
    var count = that.length;
    var total = that.reduce((prev, current) => (+(current) + prev), 0); //parseFloat
    return total / count;
  }
}

if (!Array.prototype.unique) { 
  Array.prototype.unique = function(field) {
    var that = typeArg(field, this);
    var o = {}, i, l = that.length, r = [];
    for (i = 0; i < l; i += 1) { o[JSON.stringify(that[i])] = that[i]; }
    for (i in o) { r.push(o[i]); }
    return r;
  };
}


function flatten(list: Array<any>, depth?: number, mapperFn?: Function, mapperCtx?: any) {
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
};

if (!Array.prototype.flatten) { 
  Array.prototype.flatten = function(depth = Infinity) {
    return flatten(this, depth)
  };
}

if (!Array.prototype.flatMap) { 
  Array.prototype.flatMap = function(fn, ctx) {
    return flatten(this, 1, fn, ctx)
  };
}

if (!Array.prototype.by) { 
  Array.prototype.by = function(field) {
    return typeArg(field, this);
  };
}

if (!Array.prototype.take) { 
  Array.prototype.take = function(number) {
    let begin, end;
    if (number >= 0) { 
      begin = 0;
      end = number;
    } else {
      begin = number;
      end = this.length;
    }
    return this.slice(begin, end)
  };
}
  
if (!Array.prototype.includes) {  
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
          (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  }; 
} 

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) {

    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
      len : end >> 0;

    // Step 11.
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Step 13.
    return O;
  };
}

/*if (!Array.isArray) {
  Array.isArray = function(arg){
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}*/


interface ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}
