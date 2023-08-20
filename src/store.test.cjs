"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/d3-array/dist/d3-array.js
var require_d3_array = __commonJS({
  "node_modules/d3-array/dist/d3-array.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.d3 = global.d3 || {}));
    })(exports, function(exports2) {
      "use strict";
      function ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
      }
      function bisector(compare) {
        if (compare.length === 1)
          compare = ascendingComparator(compare);
        return {
          left: function(a, x, lo, hi) {
            if (lo == null)
              lo = 0;
            if (hi == null)
              hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) < 0)
                lo = mid + 1;
              else
                hi = mid;
            }
            return lo;
          },
          right: function(a, x, lo, hi) {
            if (lo == null)
              lo = 0;
            if (hi == null)
              hi = a.length;
            while (lo < hi) {
              var mid = lo + hi >>> 1;
              if (compare(a[mid], x) > 0)
                hi = mid;
              else
                lo = mid + 1;
            }
            return lo;
          }
        };
      }
      function ascendingComparator(f) {
        return function(d, x) {
          return ascending(f(d), x);
        };
      }
      var ascendingBisect = bisector(ascending);
      var bisectRight = ascendingBisect.right;
      var bisectLeft = ascendingBisect.left;
      function count(values, valueof) {
        let count2 = 0;
        if (valueof === void 0) {
          for (let value of values) {
            if (value != null && (value = +value) >= value) {
              ++count2;
            }
          }
        } else {
          let index = -1;
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
              ++count2;
            }
          }
        }
        return count2;
      }
      function length(array2) {
        return array2.length | 0;
      }
      function empty(length2) {
        return !(length2 > 0);
      }
      function arrayify(values) {
        return typeof values !== "object" || "length" in values ? values : Array.from(values);
      }
      function reducer(reduce) {
        return (values) => reduce(...values);
      }
      function cross(...values) {
        const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
        values = values.map(arrayify);
        const lengths = values.map(length);
        const j = values.length - 1;
        const index = new Array(j + 1).fill(0);
        const product = [];
        if (j < 0 || lengths.some(empty))
          return product;
        while (true) {
          product.push(index.map((j2, i2) => values[i2][j2]));
          let i = j;
          while (++index[i] === lengths[i]) {
            if (i === 0)
              return reduce ? product.map(reduce) : product;
            index[i--] = 0;
          }
        }
      }
      function descending(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
      }
      function variance(values, valueof) {
        let count2 = 0;
        let delta;
        let mean2 = 0;
        let sum2 = 0;
        if (valueof === void 0) {
          for (let value of values) {
            if (value != null && (value = +value) >= value) {
              delta = value - mean2;
              mean2 += delta / ++count2;
              sum2 += delta * (value - mean2);
            }
          }
        } else {
          let index = -1;
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
              delta = value - mean2;
              mean2 += delta / ++count2;
              sum2 += delta * (value - mean2);
            }
          }
        }
        if (count2 > 1)
          return sum2 / (count2 - 1);
      }
      function deviation(values, valueof) {
        const v = variance(values, valueof);
        return v ? Math.sqrt(v) : v;
      }
      function extent(values, valueof) {
        let min2;
        let max2;
        if (valueof === void 0) {
          for (const value of values) {
            if (value != null) {
              if (min2 === void 0) {
                if (value >= value)
                  min2 = max2 = value;
              } else {
                if (min2 > value)
                  min2 = value;
                if (max2 < value)
                  max2 = value;
              }
            }
          }
        } else {
          let index = -1;
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null) {
              if (min2 === void 0) {
                if (value >= value)
                  min2 = max2 = value;
              } else {
                if (min2 > value)
                  min2 = value;
                if (max2 < value)
                  max2 = value;
              }
            }
          }
        }
        return [min2, max2];
      }
      function identity(x) {
        return x;
      }
      function group(values, ...keys) {
        return nest(values, identity, identity, keys);
      }
      function groups(values, ...keys) {
        return nest(values, Array.from, identity, keys);
      }
      function rollup2(values, reduce, ...keys) {
        return nest(values, identity, reduce, keys);
      }
      function rollups(values, reduce, ...keys) {
        return nest(values, Array.from, reduce, keys);
      }
      function nest(values, map, reduce, keys) {
        return function regroup(values2, i) {
          if (i >= keys.length)
            return reduce(values2);
          const groups2 = /* @__PURE__ */ new Map();
          const keyof = keys[i++];
          let index = -1;
          for (const value of values2) {
            const key = keyof(value, ++index, values2);
            const group2 = groups2.get(key);
            if (group2)
              group2.push(value);
            else
              groups2.set(key, [value]);
          }
          for (const [key, values3] of groups2) {
            groups2.set(key, regroup(values3, i));
          }
          return map(groups2);
        }(values, 0);
      }
      var array = Array.prototype;
      var slice = array.slice;
      function constant(x) {
        return function() {
          return x;
        };
      }
      function range(start, stop, step) {
        start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
        var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range2 = new Array(n);
        while (++i < n) {
          range2[i] = start + i * step;
        }
        return range2;
      }
      var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
      function ticks(start, stop, count2) {
        var reverse, i = -1, n, ticks2, step;
        stop = +stop, start = +start, count2 = +count2;
        if (start === stop && count2 > 0)
          return [start];
        if (reverse = stop < start)
          n = start, start = stop, stop = n;
        if ((step = tickIncrement(start, stop, count2)) === 0 || !isFinite(step))
          return [];
        if (step > 0) {
          start = Math.ceil(start / step);
          stop = Math.floor(stop / step);
          ticks2 = new Array(n = Math.ceil(stop - start + 1));
          while (++i < n)
            ticks2[i] = (start + i) * step;
        } else {
          start = Math.floor(start * step);
          stop = Math.ceil(stop * step);
          ticks2 = new Array(n = Math.ceil(start - stop + 1));
          while (++i < n)
            ticks2[i] = (start - i) / step;
        }
        if (reverse)
          ticks2.reverse();
        return ticks2;
      }
      function tickIncrement(start, stop, count2) {
        var step = (stop - start) / Math.max(0, count2), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
        return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
      }
      function tickStep(start, stop, count2) {
        var step0 = Math.abs(stop - start) / Math.max(0, count2), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
        if (error >= e10)
          step1 *= 10;
        else if (error >= e5)
          step1 *= 5;
        else if (error >= e2)
          step1 *= 2;
        return stop < start ? -step1 : step1;
      }
      function sturges(values) {
        return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;
      }
      function bin() {
        var value = identity, domain = extent, threshold = sturges;
        function histogram(data) {
          if (!Array.isArray(data))
            data = Array.from(data);
          var i, n = data.length, x, values = new Array(n);
          for (i = 0; i < n; ++i) {
            values[i] = value(data[i], i, data);
          }
          var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
          if (!Array.isArray(tz)) {
            tz = tickStep(x0, x1, tz);
            tz = range(Math.ceil(x0 / tz) * tz, x1, tz);
          }
          var m = tz.length;
          while (tz[0] <= x0)
            tz.shift(), --m;
          while (tz[m - 1] > x1)
            tz.pop(), --m;
          var bins = new Array(m + 1), bin2;
          for (i = 0; i <= m; ++i) {
            bin2 = bins[i] = [];
            bin2.x0 = i > 0 ? tz[i - 1] : x0;
            bin2.x1 = i < m ? tz[i] : x1;
          }
          for (i = 0; i < n; ++i) {
            x = values[i];
            if (x0 <= x && x <= x1) {
              bins[bisectRight(tz, x, 0, m)].push(data[i]);
            }
          }
          return bins;
        }
        histogram.value = function(_) {
          return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
        };
        histogram.domain = function(_) {
          return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
        };
        histogram.thresholds = function(_) {
          return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
        };
        return histogram;
      }
      function number(x) {
        return x === null ? NaN : +x;
      }
      function* numbers(values, valueof) {
        if (valueof === void 0) {
          for (let value of values) {
            if (value != null && (value = +value) >= value) {
              yield value;
            }
          }
        } else {
          let index = -1;
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
              yield value;
            }
          }
        }
      }
      function quantile(values, p, valueof) {
        values = Float64Array.from(numbers(values, valueof));
        values.sort(ascending);
        return quantileSorted(values, p);
      }
      function quantileSorted(values, p, valueof = number) {
        if (!(n = values.length))
          return;
        if ((p = +p) <= 0 || n < 2)
          return +valueof(values[0], 0, values);
        if (p >= 1)
          return +valueof(values[n - 1], n - 1, values);
        var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
        return value0 + (value1 - value0) * (i - i0);
      }
      function freedmanDiaconis(values, min2, max2) {
        return Math.ceil((max2 - min2) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(count(values), -1 / 3)));
      }
      function scott(values, min2, max2) {
        return Math.ceil((max2 - min2) / (3.5 * deviation(values) * Math.pow(count(values), -1 / 3)));
      }
      function max(values, valueof) {
        let max2;
        if (valueof === void 0) {
          for (const value of values) {
            if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
              max2 = value;
            }
          }
        } else {
          let index = -1;
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null && (max2 < value || max2 === void 0 && value >= value)) {
              max2 = value;
            }
          }
        }
        return max2;
      }
      function maxIndex(values, valueof) {
        let max2;
        let maxIndex2 = -1;
        let index = -1;
        if (valueof === void 0) {
          for (const value of values) {
            ++index;
            if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
              max2 = value, maxIndex2 = index;
            }
          }
        } else {
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null && (max2 < value || max2 === void 0 && value >= value)) {
              max2 = value, maxIndex2 = index;
            }
          }
        }
        return maxIndex2;
      }
      function mean(values, valueof) {
        let count2 = 0;
        let sum2 = 0;
        if (valueof === void 0) {
          for (let value of values) {
            if (value != null && (value = +value) >= value) {
              ++count2, sum2 += value;
            }
          }
        } else {
          let index = -1;
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
              ++count2, sum2 += value;
            }
          }
        }
        if (count2)
          return sum2 / count2;
      }
      function quickselect(array2, k, left = 0, right = array2.length - 1, compare = ascending) {
        while (right > left) {
          if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s2 = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s2 * (n - s2) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s2 / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s2 / n + sd));
            quickselect(array2, k, newLeft, newRight, compare);
          }
          const t2 = array2[k];
          let i = left;
          let j = right;
          swap(array2, left, k);
          if (compare(array2[right], t2) > 0)
            swap(array2, left, right);
          while (i < j) {
            swap(array2, i, j), ++i, --j;
            while (compare(array2[i], t2) < 0)
              ++i;
            while (compare(array2[j], t2) > 0)
              --j;
          }
          if (compare(array2[left], t2) === 0)
            swap(array2, left, j);
          else
            ++j, swap(array2, j, right);
          if (j <= k)
            left = j + 1;
          if (k <= j)
            right = j - 1;
        }
        return array2;
      }
      function swap(array2, i, j) {
        const t2 = array2[i];
        array2[i] = array2[j];
        array2[j] = t2;
      }
      function median(values, valueof) {
        values = Float64Array.from(numbers(values, valueof));
        if (!values.length)
          return;
        const n = values.length;
        const i = n >> 1;
        quickselect(values, i - 1, 0);
        if ((n & 1) === 0)
          quickselect(values, i, i);
        return quantile(values, 0.5);
      }
      function* flatten(arrays) {
        for (const array2 of arrays) {
          yield* array2;
        }
      }
      function merge(arrays) {
        return Array.from(flatten(arrays));
      }
      function min(values, valueof) {
        let min2;
        if (valueof === void 0) {
          for (const value of values) {
            if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
              min2 = value;
            }
          }
        } else {
          let index = -1;
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null && (min2 > value || min2 === void 0 && value >= value)) {
              min2 = value;
            }
          }
        }
        return min2;
      }
      function minIndex(values, valueof) {
        let min2;
        let minIndex2 = -1;
        let index = -1;
        if (valueof === void 0) {
          for (const value of values) {
            ++index;
            if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
              min2 = value, minIndex2 = index;
            }
          }
        } else {
          for (let value of values) {
            if ((value = valueof(value, ++index, values)) != null && (min2 > value || min2 === void 0 && value >= value)) {
              min2 = value, minIndex2 = index;
            }
          }
        }
        return minIndex2;
      }
      function pairs(values, pairof = pair) {
        const pairs2 = [];
        let previous;
        let first = false;
        for (const value of values) {
          if (first)
            pairs2.push(pairof(previous, value));
          previous = value;
          first = true;
        }
        return pairs2;
      }
      function pair(a, b) {
        return [a, b];
      }
      function permute(source, keys) {
        return Array.from(keys, (key) => source[key]);
      }
      function least(values, compare = ascending) {
        let min2;
        let defined = false;
        if (compare.length === 1) {
          let minValue;
          for (const element of values) {
            const value = compare(element);
            if (defined ? ascending(value, minValue) < 0 : ascending(value, value) === 0) {
              min2 = element;
              minValue = value;
              defined = true;
            }
          }
        } else {
          for (const value of values) {
            if (defined ? compare(value, min2) < 0 : compare(value, value) === 0) {
              min2 = value;
              defined = true;
            }
          }
        }
        return min2;
      }
      function leastIndex(values, compare = ascending) {
        if (compare.length === 1)
          return minIndex(values, compare);
        let minValue;
        let min2 = -1;
        let index = -1;
        for (const value of values) {
          ++index;
          if (min2 < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
            minValue = value;
            min2 = index;
          }
        }
        return min2;
      }
      function greatest(values, compare = ascending) {
        let max2;
        let defined = false;
        if (compare.length === 1) {
          let maxValue;
          for (const element of values) {
            const value = compare(element);
            if (defined ? ascending(value, maxValue) > 0 : ascending(value, value) === 0) {
              max2 = element;
              maxValue = value;
              defined = true;
            }
          }
        } else {
          for (const value of values) {
            if (defined ? compare(value, max2) > 0 : compare(value, value) === 0) {
              max2 = value;
              defined = true;
            }
          }
        }
        return max2;
      }
      function greatestIndex(values, compare = ascending) {
        if (compare.length === 1)
          return maxIndex(values, compare);
        let maxValue;
        let max2 = -1;
        let index = -1;
        for (const value of values) {
          ++index;
          if (max2 < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
            maxValue = value;
            max2 = index;
          }
        }
        return max2;
      }
      function scan(values, compare) {
        const index = leastIndex(values, compare);
        return index < 0 ? void 0 : index;
      }
      function shuffle(array2, i0 = 0, i1 = array2.length) {
        var m = i1 - (i0 = +i0), t2, i;
        while (m) {
          i = Math.random() * m-- | 0;
          t2 = array2[m + i0];
          array2[m + i0] = array2[i + i0];
          array2[i + i0] = t2;
        }
        return array2;
      }
      function sum(values, valueof) {
        let sum2 = 0;
        if (valueof === void 0) {
          for (let value of values) {
            if (value = +value) {
              sum2 += value;
            }
          }
        } else {
          let index = -1;
          for (let value of values) {
            if (value = +valueof(value, ++index, values)) {
              sum2 += value;
            }
          }
        }
        return sum2;
      }
      function transpose(matrix) {
        if (!(n = matrix.length))
          return [];
        for (var i = -1, m = min(matrix, length$1), transpose2 = new Array(m); ++i < m; ) {
          for (var j = -1, n, row = transpose2[i] = new Array(n); ++j < n; ) {
            row[j] = matrix[j][i];
          }
        }
        return transpose2;
      }
      function length$1(d) {
        return d.length;
      }
      function zip() {
        return transpose(arguments);
      }
      exports2.ascending = ascending;
      exports2.bin = bin;
      exports2.bisect = bisectRight;
      exports2.bisectLeft = bisectLeft;
      exports2.bisectRight = bisectRight;
      exports2.bisector = bisector;
      exports2.count = count;
      exports2.cross = cross;
      exports2.descending = descending;
      exports2.deviation = deviation;
      exports2.extent = extent;
      exports2.greatest = greatest;
      exports2.greatestIndex = greatestIndex;
      exports2.group = group;
      exports2.groups = groups;
      exports2.histogram = bin;
      exports2.least = least;
      exports2.leastIndex = leastIndex;
      exports2.max = max;
      exports2.maxIndex = maxIndex;
      exports2.mean = mean;
      exports2.median = median;
      exports2.merge = merge;
      exports2.min = min;
      exports2.minIndex = minIndex;
      exports2.pairs = pairs;
      exports2.permute = permute;
      exports2.quantile = quantile;
      exports2.quantileSorted = quantileSorted;
      exports2.quickselect = quickselect;
      exports2.range = range;
      exports2.rollup = rollup2;
      exports2.rollups = rollups;
      exports2.scan = scan;
      exports2.shuffle = shuffle;
      exports2.sum = sum;
      exports2.thresholdFreedmanDiaconis = freedmanDiaconis;
      exports2.thresholdScott = scott;
      exports2.thresholdSturges = sturges;
      exports2.tickIncrement = tickIncrement;
      exports2.tickStep = tickStep;
      exports2.ticks = ticks;
      exports2.transpose = transpose;
      exports2.variance = variance;
      exports2.zip = zip;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/proxy-compare/dist/index.modern.js
var e = Symbol();
var t = Symbol();
var s = Object.getPrototypeOf;
var c = /* @__PURE__ */ new WeakMap();
var l = (e2) => e2 && (c.has(e2) ? c.get(e2) : s(e2) === Object.prototype || s(e2) === Array.prototype);
var y = (e2) => l(e2) && e2[t] || null;
var h = (e2, t2 = true) => {
  c.set(e2, t2);
};

// node_modules/valtio/esm/vanilla.mjs
var import_meta = {};
var isObject = (x) => typeof x === "object" && x !== null;
var proxyStateMap = /* @__PURE__ */ new WeakMap();
var refSet = /* @__PURE__ */ new WeakSet();
var buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
  switch (promise.status) {
    case "fulfilled":
      return promise.value;
    case "rejected":
      throw promise.reason;
    default:
      throw promise;
  }
}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap2 = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  h(snap2, true);
  snapCache.set(target, [version, snap2]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap2, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const desc = {
      value,
      enumerable: true,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      h(value, false);
    } else if (value instanceof Promise) {
      delete desc.value;
      desc.get = () => handlePromise(value);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshot(
        target2,
        ensureVersion(),
        handlePromise
      );
    }
    Object.defineProperty(snap2, key, desc);
  });
  return Object.preventExtensions(snap2);
}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
  if (!isObject(initialObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(initialObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propProxyState) => {
    if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
      throw new Error("prop listener already exists");
    }
    if (listeners.size) {
      const remove = propProxyState[3](createPropListener(prop));
      propProxyStates.set(prop, [propProxyState, remove]);
    } else {
      propProxyStates.set(prop, [propProxyState]);
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  const handler = {
    deleteProperty(target, prop) {
      const prevValue = Reflect.get(target, prop);
      removePropListener(prop);
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(["delete", [prop], prevValue]);
      }
      return deleted;
    },
    set(target, prop, value, receiver) {
      const hasPrevValue = Reflect.has(target, prop);
      const prevValue = Reflect.get(target, prop, receiver);
      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
        return true;
      }
      removePropListener(prop);
      if (isObject(value)) {
        value = y(value) || value;
      }
      let nextValue = value;
      if (value instanceof Promise) {
        value.then((v) => {
          value.status = "fulfilled";
          value.value = v;
          notifyUpdate(["resolve", [prop], v]);
        }).catch((e2) => {
          value.status = "rejected";
          value.reason = e2;
          notifyUpdate(["reject", [prop], e2]);
        });
      } else {
        if (!proxyStateMap.has(value) && canProxy(value)) {
          nextValue = proxyFunction(value);
        }
        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
        if (childProxyState) {
          addPropListener(prop, childProxyState);
        }
      }
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  };
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(initialObject, proxyObject);
  const proxyState = [
    baseObject,
    ensureVersion,
    createSnapshot,
    addListener
  ];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(initialObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      initialObject,
      key
    );
    if ("value" in desc) {
      proxyObject[key] = initialObject[key];
      delete desc.value;
      delete desc.writable;
    }
    Object.defineProperty(baseObject, key, desc);
  });
  return proxyObject;
}) => [
  // public functions
  proxyFunction,
  // shared state
  proxyStateMap,
  refSet,
  // internal things
  objectIs,
  newProxy,
  canProxy,
  defaultHandlePromise,
  snapCache,
  createSnapshot,
  proxyCache,
  versionHolder
];
var [defaultProxyFunction] = buildProxyFunction();
function proxy(initialObject = {}) {
  return defaultProxyFunction(initialObject);
}

// src/dbRegras.ts
var regras = [
  //MOSCA-DA-CARAMBOLA
  {
    desc: "DE UF sem ocorr\xEAncia de Mosca-da-carambola PARA UF sem ocorr\xEAncia de Mosca-da-carambola",
    part: ["frutos"],
    orig: ["AC", "AL", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Bactrocera carambolae",
    exig: [
      "Se a partida tiver que transitar por \xE1rea sob quarentena: \na) PTV;\nb) os frutos devem estar acondicionados em embalagens que n\xE3o permitam o contato do produto com a praga;\nc) os frutos devem ser transportados em ve\xEDculos fechados ou, quando abertos, protegidos com tela de malha de 2 mm",
      "Consulte a lista de \xE1rea sob quarentena, \xE1rea erradicada, \xE1rea sem ocorr\xEAncia e de zona tamp\xE3o nas Resolu\xE7\xF5es acima"
    ]
  },
  {
    desc: "DE UF com ocorr\xEAncia de Mosca-da-carambola PARA qualquer UF",
    part: ["frutos"],
    orig: ["AP", "PA", "RR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Bactrocera carambolae",
    exig: [
      "Se a partida for procedente DE \xE1rea sob quarentena e de \xE1rea protegida PARA local sem ocorr\xEAncia: TR\xC2NSITO PROIBIDO.",
      'Se a partida for procedente DE zona tamp\xE3o, de \xE1reas erradicadas e de \xE1reas sem detec\xE7\xE3o: PTV com a seguinte DA: "A partida est\xE1 livre de Bactrocera carambolae\u201D',
      "Consulte a lista de \xE1rea sob quarentena, \xE1rea erradicada, \xE1rea sem ocorr\xEAncia e de zona tamp\xE3o nas Resolu\xE7\xF5es acima"
    ]
  },
  //ÁCARO HINDU
  {
    desc: "DE UF com ocorr\xEAncia de \xC1caro-hindu-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de \xC1caro-hindu-dos-citros",
    part: ["plantas", "mudas", "ra\xEDzes", "caules", "ramos", "folhas", "flores", "frutos"],
    orig: ["RR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Schizotetranychus hindustanicus",
    exig: [
      "TR\xC2NSITO PROIBIDO.\nMotivo: Aus\xEAncia de \xE1rea livre de \xE1caro-hindu-dos-citros, na origem da partida.",
      'Para  frutos de Citrus spp. o tr\xE2nsito \xE9 permitido com PTV com a declara\xE7\xE3o adicional: "A partida atende \xE0s exig\xEAncias constantes da Instru\xE7\xE3o Normativa MAPA n\xBA 8, de 17 de abril de 2012, encontra-se livre do \xC1caro Hindu dos Citros";',
      "Estas exig\xEAncias fitossanit\xE1rias n\xE3o se aplicam a material in vitro, madeira serrada e, ainda, frutos de coco (Cocus nucifera) secos e descascados;"
    ]
  },
  //BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS
  {
    desc: "DE qualquer UF PARA qualquer UF",
    part: ["mudas"],
    orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "BSV e CMV",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "A partida encontra-se livre dos v\xEDrus Banana streak virus (BSV) e Cucumber mosaic virus (CMV), de acordo com o laudo laboratorial [n\xBA do laudo], [nome do laborat\xF3rio] -[munic\xEDpio e UF de localiza\xE7\xE3o do laborat\xF3rio]";',
      "As mudas de bananeira que transitarem em desrespeito \xE0s determina\xE7\xF5es deste artigo ficam sujeitas \xE0 intercepta\xE7\xE3o, caso em que ser\xE1 determinado o retorno das mesmas ao local de origem e comunicado ao \xF3rg\xE3o fiscalizador da produ\xE7\xE3o e com\xE9rcio, para ado\xE7\xE3o das provid\xEAncias cab\xEDveis, conforme o art. 13, \xA7 2\xBA., da Instru\xE7\xE3o Normativa MAPA n\xBA. 46, de 27 de dezembro de 2010."
    ]
  },
  //CANCRO-DA-VIDEIRA
  {
    desc: "DE UF com ocorr\xEAncia de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Cancro-da-videira",
    part: ["mudas"],
    orig: ["BA", "CE", "PE", "RR"],
    dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas campestris pv. viticola",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "As mudas foram obtidas por micropropaga\xE7\xE3o e indexadas para Xanthomonas campestris pv. viticola".'
    ]
  },
  {
    desc: "DE UF com ocorr\xEAncia de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Cancro-da-videira",
    part: ["frutos"],
    orig: ["BA", "CE", "PE", "RR"],
    dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas campestris pv. viticola",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "Os frutos foram produzidos em propriedade onde s\xE3o adotadas as medidas de preven\xE7\xE3o e controle do cancro bacteriano da videira, previstas na legisla\xE7\xE3o fitossanit\xE1ria";',
      "Estas exig\xEAncias fitossanit\xE1rias s\xF3 se aplicam a frutos, quando destinados a consumo in natura."
    ]
  },
  {
    desc: "DE UF com ocorr\xEAncia de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Cancro-da-videira",
    part: ["material para pesquisa"],
    orig: ["BA", "CE", "PE", "RR"],
    dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas campestris pv. viticola",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "O material foi lacrado na origem, sob n\xFAmero de lacre X, e embalado de maneira a garantir a n\xE3o dispers\xE3o da praga".'
    ]
  },
  //CANCRO EUROPEU DAS POMÁCEAS
  {
    desc: "DE UF com ocorr\xEAncia de Cancro-europeu-das-pom\xE1ceas PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Cancro-europeu-das-pom\xE1ceas",
    part: ["mudas", "sementes", "estacas", "bulbos", "tub\xE9rculos", "manivas", "toletes", "gemas", "ramas", "rizomas", "material de propaga\xE7\xE3o"],
    orig: ["PR", "RS", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "SP", "TO"],
    prag: "Neonectria ditissima (Neonectria galligena)",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "A Unidade de produ\xE7\xE3o foi inspecionada oficialmente durante o per\xEDodo de produ\xE7\xE3o e n\xE3o foi constatada a presen\xE7a de sintomas de infec\xE7\xE3o pela praga Neonectria galligena";',
      "Esta exig\xEAncia fitossanit\xE1ria n\xE3o se aplica a material propagativo in vitro."
    ]
  },
  {
    desc: "DE UF com ocorr\xEAncia de Cancro-europeu-das-pom\xE1ceas PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Cancro-europeu-das-pom\xE1ceas",
    part: ["frutos"],
    orig: ["PR", "RS", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "SP", "TO"],
    prag: "Neonectria ditissima (Neonectria galligena)",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "Na unidade de produ\xE7\xE3o e Unidade de Consolida\xE7\xE3o - UC foram adotados os procedimentos de controle e preven\xE7\xE3o previstos nesta norma (Instru\xE7\xE3o Normativa n\xBA 20, de 20 de junho de 2013) e os frutos n\xE3o apresentam sintomas de Neonectria galligena".'
    ]
  },
  //GREENING
  {
    desc: "DE UF com ocorr\xEAncia de Greening PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Greening",
    part: ["mudas", "estacas", "gemas", "ramas", "ra\xEDzes", "material de propaga\xE7\xE3o", "plantas"],
    orig: ["MG", "PR", "SP"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "TO"],
    prag: "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    exig: [
      "PTV; \n Obs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em\ndesacordo com o previsto nesta Instru\xE7\xE3o Normativa, ser\xE1 sumariamente destru\xEDda, n\xE3o cabendo ao infrator qualquer tipo de indeniza\xE7\xE3o, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o estadual e federal de defesa sanit\xE1ria vegetal, conforme o art. 5\xBA, da Instru\xE7\xE3o Normativa MAPA n\xBA. 53, de 16 de outubro de 2010."
    ]
  },
  //GORGULHO DA MANGA
  {
    desc: "DE UF com ocorr\xEAncia PARA qualquer UF",
    part: ["frutos"],
    orig: ["RJ"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Sternochetus mangiferae",
    exig: [
      'PTV com a seguinte Declara\xE7\xE3o Adicional: "A partida foi produzida fora da zona interditada e encontra-se livre de Sternochetus mangiferae".'
    ]
  },
  //PINTA-PRETA-DOS-CITROS
  {
    desc: "DE UF com ocorr\xEAncia de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Pinta-preta-dos-citros",
    part: ["mudas", "estacas", "gemas", "material de propaga\xE7\xE3o", "plantas"],
    orig: ["AM", "ES", "MT", "MS", "MG", "PE", "PR", "RJ", "RS", "SC", "SP", "BA", "GO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Phyllosticta citricarpa (Guinardia citricarpa)",
    exig: [
      "PTV;",
      "A partida deve ser transportada em ve\xEDculos fechados ou totalmente protegidos por lona."
    ]
  },
  {
    desc: "DE UF com ocorr\xEAncia de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Pinta-preta-dos-citros",
    part: ["frutos"],
    orig: ["AM", "ES", "MT", "MS", "MG", "PE", "PR", "RJ", "RS", "SC", "SP", "BA", "GO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Phyllosticta citricarpa (Guinardia citricarpa)",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "Os frutos foram produzidos sob Manejo Integrado de Guignardia citricarpa e submetidos a processo de sele\xE7\xE3o para a retirada de folhas e partes de ramos";',
      "Os frutos devem estar isentos de material vegetativo."
    ]
  },
  //MOKO-DA-BANANEIRA
  {
    desc: "Material para pesquisa DE qualquer UF PARA UF sem ocorr\xEAncia",
    //ok
    part: ["material para pesquisa"],
    orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "SC", "SP", "TO"],
    prag: "Ralstonia solanacearum ra\xE7a 2",
    exig: [
      "Autoriza\xE7\xE3o da Superintend\xEAncia Federal de Agricultura, Pecu\xE1ria e Abastecimento (SFA), da UF de origem da partida;",
      "A partida deve ser transportada em recipiente lacrado;"
    ]
  },
  {
    desc: "DE UF com ocorr\xEAncia de Moko-da-bananeira PARA todas as UFs",
    part: ["mudas", "rizomas"],
    orig: ["AL", "AM", "AP", "PA", "RO", "RR", "SE"],
    dest: ["AC", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Ralstonia solanacearum ra\xE7a 2",
    exig: [
      "TR\xC2NSITO PROIBIDO, exceto para mudas transportadas en vitro ou micropropagadas. \nObs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em desacordo com estas exig\xEAncias, ser\xE1 sumariamente destru\xEDda ou retornada \xE0 origem, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o pr\xF3pria, conforme o art. 11 da Instru\xE7\xE3o Normativa SDA n\xBA. 17, de 27 de maio de 2009",
      'Para mudas transportadas en vitro ou micropropagadas, ser\xE1 exigido: \na)PTV com a seguinte declara\xE7\xE3o adicional: "As mudas encontram- se livres de Ralstonia solanacearum ra\xE7a 2". \nb) A carga dever\xE1 estar lacrada e o n\xFAmero do lacre constar na PTV. \nc) Na PTV deve constar se as mudas s\xE3o in vitro ou micropropagadas;'
    ]
  },
  {
    desc: "DE \xC1rea Livre de Moko-da-bananeira PARA todas as UFs",
    part: ["mudas", "rizomas"],
    orig: ["CE", "PE", "PI", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Ralstonia solanacearum ra\xE7a 2",
    exig: [
      'PTV com  a seguinte declara\xE7\xE3o adicional: "As mudas foram produzidas em \xC1rea Livre de Ralstonia solanacearum ra\xE7a 2, oficialmente reconhecida pelo Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento.".  \nObs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em desacordo com estas exig\xEAncias, ser\xE1 sumariamente destru\xEDda ou retornada \xE0 origem, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o pr\xF3pria, conforme o art. 11 da Instru\xE7\xE3o Normativa SDA n\xBA. 17, de 27 de maio de 2009.',
      "A carga dever\xE1 estar lacrada e o n\xFAmero do lacre constar na PTV."
    ]
  },
  {
    desc: "DE UF sem ocorr\xEAncia de Moko-da-bananeira PARA todas as UFs",
    part: ["mudas", "rizomas"],
    orig: ["AC", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Ralstonia solanacearum ra\xE7a 2",
    exig: [
      'PTV com  a seguinte declara\xE7\xE3o adicional: "As mudas se encontram livres de Ralstonia solanacearum ra\xE7a 2.".  \nObs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em desacordo com estas exig\xEAncias, ser\xE1 sumariamente destru\xEDda ou retornada \xE0 origem, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o pr\xF3pria, conforme o art. 11 da Instru\xE7\xE3o Normativa SDA n\xBA. 17, de 27 de maio de 2009.',
      "Quando transitar pelas UFs AM, AP, PA, RO, RR e SE, onde ocorre a praga, a carga dever\xE1 estar lacrada e o n\xFAmero do lacre constar na PTV."
    ]
  },
  {
    desc: "DE UF com ocorr\xEAncia de Moko-da-bananeira PARA \xE1rea livre de Moko-da-bananeira",
    part: ["frutos", "flores"],
    orig: ["AL", "AM", "AP", "PA", "RO", "RR", "SE"],
    dest: ["CE", "PE", "PI", "SC"],
    prag: "Ralstonia solanacearum ra\xE7a 2",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "Os frutos ou infloresc\xEAncias foram produzidos sob aplica\xE7\xE3o de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum ra\xE7a 2"; \nObs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em desacordo com estas exig\xEAncias, ser\xE1 sumariamente destru\xEDda ou retornada \xE0 origem, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o pr\xF3pria, conforme o art. 11 da Instru\xE7\xE3o Normativa SDA n\xBA. 17, de 27 de maio de 2009.'
    ]
  },
  {
    desc: "DE \xE1rea livre de Moko-da-bananeira PARA \xE1rea livre de Moko-da-bananeira",
    part: ["frutos", "flores"],
    orig: ["CE", "PE", "PI", "SC"],
    dest: ["CE", "PE", "PI", "SC"],
    prag: "Ralstonia solanacearum ra\xE7a 2",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "As mudas foram produzidas em \xE1rea livre de Ralstonia solanacearum ra\xE7a 2, oficialmente reconhecida pelo Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento". \nObs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em desacordo com estas exig\xEAncias, ser\xE1 sumariamente destru\xEDda ou retornada \xE0 origem, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o pr\xF3pria, conforme o art. 11 da Instru\xE7\xE3o Normativa SDA n\xBA. 17, de 27 de maio de 2009.'
    ]
  },
  {
    desc: "DE UF sem ocorr\xEAncia de Moko-da-bananeira PARA todas as UFs",
    part: ["frutos", "flores"],
    orig: ["AC", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "SC", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Ralstonia solanacearum ra\xE7a 2",
    exig: [
      "PTV para comprovar a origem. \nObs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em desacordo com estas exig\xEAncias, ser\xE1 sumariamente destru\xEDda ou retornada \xE0 origem, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o pr\xF3pria, conforme o art. 11 da Instru\xE7\xE3o Normativa SDA n\xBA. 17, de 27 de maio de 2009;"
    ]
  },
  {
    desc: "DE UF com ocorr\xEAncia de Moko-da-bananeira PARA UF sem ocorr\xEAncia de Moko-da-bananeira",
    part: ["frutos", "flores"],
    orig: ["AL", "AM", "AP", "PA", "RO", "RR", "SE"],
    dest: ["AC", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"],
    prag: "Ralstonia solanacearum ra\xE7a 2",
    exig: [
      'OU PTV com a seguinte declara\xE7\xE3o adicional: "Os frutos ou infloresc\xEAncias foram produzidos em UP onde n\xE3o foi observada a presen\xE7a de Ralstonia solanacearum ra\xE7a 2, nos \xFAltimos doze meses"; OU \nPTV com a seguinte declara\xE7\xE3o adicional: "Os frutos ou infloresc\xEAncias foram produzidos sob aplica\xE7\xE3o de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum ra\xE7a 2"; \nObs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em desacordo com estas exig\xEAncias, ser\xE1 sumariamente destru\xEDda ou retornada \xE0 origem, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o pr\xF3pria, conforme o art. 11 da Instru\xE7\xE3o Normativa SDA n\xBA. 17, de 27 de maio de 2009.'
    ]
  },
  //SIGATOKA NEGRA
  {
    desc: "Mudas Micropropagadas DE qualquer UF PARA qualquer UF",
    part: ["mudas"],
    orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV;",
      "As mudas devem ser transportadas in vitro;",
      "A exig\xEAncia de PTV n\xE3o se aplica \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exig\xEAncias s\xF3 se aplicam a mudas micropropagadas; Para outras mudas que n\xE3o sejam micropropagadas, o tr\xE2nsito \xE9 proibido"
    ]
  },
  {
    desc: "Material para pesquisa DE qualquer UF PARA qualquer UF",
    part: ["material para pesquisa"],
    orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "Autoriza\xE7\xE3o Declarat\xF3ria emitida pela \xC1rea de Sanidade Vegetal da Superintend\xEAncia Federal da Agricultura - SFA, na Unidade da Federa\xE7\xE3o de origem do material gen\xE9tico;",
      "O material gen\xE9tico deve ser transportado em recipiente lacrado, devendo o n\xFAmero do lacre constar da Autoriza\xE7\xE3o Declarat\xF3ria;",
      "O interessado deve comunicar a SFA de destino da partida, quando do recebimento do material, para inspe\xE7\xE3o fitossanit\xE1ria;",
      "Estas exig\xEAncias fitossanit\xE1rias s\xF3 se aplicam a material gen\xE9tico;"
    ]
  },
  {
    desc: "DE \xE1rea livre de Sigatoka Negra PARA \xE1rea com ocorr\xEAncia de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["AL", "CE", "DF", "GO", "PB", "PE", "PI", "RN", "SE"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a declara\xE7\xE3o adicional de que a partida \xE9 origin\xE1ria de \xE1rea livre de Sigatoka Negra;",
      "As bananas n\xE3o podem transitar em cacho, em todo o territ\xF3rio nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "GO \xE9 \xE1rea livre de Sigatoka Negra, EXCETO os seguintes munic\xEDpios: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE \xE1rea livre de Sigatoka Negra PARA \xE1rea com ocorr\xEAncia de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["MG"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a declara\xE7\xE3o adicional de que a partida \xE9 origin\xE1ria de \xE1rea livre de Sigatoka Negra;",
      "As bananas n\xE3o podem transitar em cacho, em todo o territ\xF3rio nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exig\xEAncias s\xF3 se aplicam a partida proveniente do munic\xEDpios livres de Sigatoka Negra em MG: \xC1guas Vermelhas, Ara\xE7ua\xED, Araguari, Arapor\xE3, Bocai\xFAva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Can\xE1polis, Capin\xF3polis, Capit\xE3o En\xE9ias, Carmo do Parana\xEDba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Po\xE7\xF5es, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco S\xE1, Franscisco Dumont, Frutal, Guaraciama, Gurinhat\xE3, Indian\xF3polis, Ipia\xE7u, Ira\xED de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Ja\xEDba, Jana\xFAba, Janu\xE1ria, Jequita\xED, Jequitinhonha, Joa\xEDma, Jo\xE3o Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patroc\xEDnio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Oleg\xE1rio, Rio Parana\xEDba, Sacramento, Santa Rosa da Serra, Santa Vit\xF3ria, Santo Antonio do Retiro, S\xE3o Francisco, S\xE3o Gon\xE7alo do Abaet\xE9, S\xE3o Gotardo, S\xE3o Jo\xE3o das Miss\xF5es, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberl\xE2ndia, Una\xED, Varj\xE3o de Minas, V\xE1rzea da Palma, Vazante, Verdel\xE2ndia e Ver\xEDssimo; ",
      "Munic\xEDpios de GO com ocorr\xEAncia de Sigatoka Negra: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia"
    ]
  },
  {
    desc: "DE \xE1rea livre de Sigatoka Negra PARA \xE1rea com ocorr\xEAncia de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["MS"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a declara\xE7\xE3o adicional de que a partida \xE9 origin\xE1ria de \xE1rea livre de Sigatoka Negra;",
      "As bananas n\xE3o podem transitar em cacho, em todo o territ\xF3rio nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exig\xEAncias s\xF3 se aplicam a partida proveniente de munic\xEDpios livres de Sigatoka Negra de MS: Anauril\xE2ndia, Aparecida do Taboado, Bataguass\xFA,Bataypor\xE3, Cassil\xE2ndia, Chapad\xE3o do Sul, Inoc\xEAncia, Nova Andradina, Parana\xEDba,   Selv\xEDria, Taquaruss\xFA e Tr\xEAs Lagoas;",
      "Munic\xEDpios de GO com ocorr\xEAncia de Sigatoka Negra: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia"
    ]
  },
  {
    desc: "DE \xE1rea livre de Sigatoka Negra PARA \xE1rea livre de Sigatoka Negra ",
    part: ["frutos", "flores"],
    orig: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a declara\xE7\xE3o adicional de que a partida \xE9 origin\xE1ria de \xE1rea livre de Sigatoka Negra;",
      "A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos munic\xEDpios listados no item 6.1), MS (exceto pelos munic\xEDpios listados no item 6.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;",
      "As bananas n\xE3o podem transitar em cacho, em todo o territ\xF3rio nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Nas UFs de GO, MG e de MS estas exig\xEAncias s\xF3 se aplicam a partida proveniente e destinada a munic\xEDpio livre de Sigatoka Negra: \n\n6.1 - Munic\xEDpios livres de Sigatoka Negra de MG: \xC1guas Vermelhas, Ara\xE7ua\xED, Araguari, Arapor\xE3, Bocai\xFAva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Can\xE1polis, Capin\xF3polis, Capit\xE3o En\xE9ias, Carmo do Parana\xEDba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Po\xE7\xF5es, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco S\xE1, Franscisco Dumont, Frutal, Guaraciama, Gurinhat\xE3, Indian\xF3polis, Ipia\xE7u, Ira\xED de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Ja\xEDba, Jana\xFAba, Janu\xE1ria, Jequita\xED, Jequitinhonha, Joa\xEDma, Jo\xE3o Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patroc\xEDnio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Oleg\xE1rio, Rio Parana\xEDba, Sacramento, Santa Rosa da Serra, Santa Vit\xF3ria, Santo Antonio do Retiro, S\xE3o Francisco, S\xE3o Gon\xE7alo do Abaet\xE9, S\xE3o Gotardo, S\xE3o Jo\xE3o das Miss\xF5es, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberl\xE2ndia, Una\xED, Varj\xE3o de Minas, V\xE1rzea da Palma, Vazante, Verdel\xE2ndia e Ver\xEDssimo; \n\n6.2 - Munic\xEDpios livres de Sigatoka Negra de MS: Anauril\xE2ndia, Aparecida do Taboado, Bataguass\xFA,Bataypor\xE3, Cassil\xE2ndia, Chapad\xE3o do Sul, Inoc\xEAncia, Nova Andradina, Parana\xEDba,   Selv\xEDria, Taquaruss\xFA e Tr\xEAs Lagoas;",
      "GO \xE9 livre de Sigatoka Negra, EXCETO os seguintes munic\xEDpios: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE \xE1rea com ocorr\xEAncia de Sigatoka Negra PARA \xE1rea livre de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      'PTV com a seguinte declara\xE7\xE3o adicional: "A partida \xE9 origin\xE1ria de Unidade de Produ\xE7\xE3o onde foi implantado o Sistema de Mitiga\xE7\xE3o de Risco para Sigatoka Negra";',
      "As bananas n\xE3o podem transitar em cacho, em todo o territ\xF3rio nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Para as UFs de GO, MG e de MS estas exig\xEAncias s\xF3 se aplicam a partida destinada a munic\xEDpio livre de Sigatoka Negra: \n\n5.1 - Munic\xEDpios livres de Sigatoka Negra de MG: \xC1guas Vermelhas, Ara\xE7ua\xED, Araguari, Arapor\xE3, Bocai\xFAva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Can\xE1polis, Capin\xF3polis, Capit\xE3o En\xE9ias, Carmo do Parana\xEDba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Po\xE7\xF5es, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco S\xE1, Franscisco Dumont, Frutal, Guaraciama, Gurinhat\xE3, Indian\xF3polis, Ipia\xE7u, Ira\xED de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Ja\xEDba, Jana\xFAba, Janu\xE1ria, Jequita\xED, Jequitinhonha, Joa\xEDma, Jo\xE3o Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patroc\xEDnio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Oleg\xE1rio, Rio Parana\xEDba, Sacramento, Santa Rosa da Serra, Santa Vit\xF3ria, Santo Antonio do Retiro, S\xE3o Francisco, S\xE3o Gon\xE7alo do Abaet\xE9, S\xE3o Gotardo, S\xE3o Jo\xE3o das Miss\xF5es, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberl\xE2ndia, Una\xED, Varj\xE3o de Minas, V\xE1rzea da Palma, Vazante, Verdel\xE2ndia e Ver\xEDssimo; \n\n5.2 - Munic\xEDpios livres de Sigatoka Negra de MS: Anauril\xE2ndia, Aparecida do Taboado, Bataguass\xFA,Bataypor\xE3, Cassil\xE2ndia, Chapad\xE3o do Sul, Inoc\xEAncia, Nova Andradina, Parana\xEDba,   Selv\xEDria, Taquaruss\xFA e Tr\xEAs Lagoas;",
      "GO \xE9 livre de Sigatoka Negra, EXCETO os seguintes munic\xEDpios: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE \xE1rea com ocorr\xEAncia de Sigatoka Negra PARA \xE1rea com ocorr\xEAncia de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      'OU Partida isenta de PTV, sendo por\xE9m PROIBIDO o tr\xE2nsito por \xC1rea Livre de Sigatoka Negra, listadas no Item 2; OU PTV com a seguinte declara\xE7\xE3o adicional: "A partida \xE9 origin\xE1ria de Unidade de Produ\xE7\xE3o onde foi implantado o Sistema de Mitiga\xE7\xE3o de Risco para Sigatoka Negra", sendo permitido o tr\xE2nsito por \xC1rea Livre de Sigatoka Negra;',
      "\xC1REAS LIVRE DE SIGATOKA NEGRA: Unidades da Federa\xE7\xE3o AL, CE, DF, GO, PB, PE, PI, RN, SE, bem como pelos munic\xEDpios livres de Sigatoka Negra de MG e de MS: \na) Munic\xEDpios livres de Sigatoka Negra de MG: \xC1guas Vermelhas, Ara\xE7ua\xED, Araguari, Arapor\xE3, Bocai\xFAva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Can\xE1polis, Capin\xF3polis, Capit\xE3o En\xE9ias, Carmo do Parana\xEDba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Po\xE7\xF5es, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco S\xE1, Franscisco Dumont, Frutal, Guaraciama, Gurinhat\xE3, Indian\xF3polis, Ipia\xE7u, Ira\xED de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Ja\xEDba, Jana\xFAba, Janu\xE1ria, Jequita\xED, Jequitinhonha, Joa\xEDma, Jo\xE3o Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patroc\xEDnio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Oleg\xE1rio, Rio Parana\xEDba, Sacramento, Santa Rosa da Serra, Santa Vit\xF3ria, Santo Antonio do Retiro, S\xE3o Francisco, S\xE3o Gon\xE7alo do Abaet\xE9, S\xE3o Gotardo, S\xE3o Jo\xE3o das Miss\xF5es, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberl\xE2ndia, Una\xED, Varj\xE3o de Minas, V\xE1rzea da Palma, Vazante, Verdel\xE2ndia e Ver\xEDssimo; \nb)Munic\xEDpios livres de Sigatoka Negra de MS: Anauril\xE2ndia, Aparecida do Taboado, Bataguass\xFA, Bataypor\xE3, Cassil\xE2ndia, Chapad\xE3o do Sul, Inoc\xEAncia, Nova Andradina, Parana\xEDba,   Selv\xEDria, Taquaruss\xFA e Tr\xEAs Lagoas;",
      "Munic\xEDpios de GO com ocorr\xEAncia de Sigatoka Negra: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia.",
      "As bananas n\xE3o podem transitar em cacho, em todo o territ\xF3rio nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"
    ]
  },
  {
    desc: "DE \xE1rea livre de Sigatoka Negra PARA \xE1rea com ocorr\xEAncia de Sigatoka Negra",
    part: ["mudas"],
    orig: ["AL", "CE", "DF", "GO", "PB", "PE", "PI", "RN", "SE"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a Declara\xE7\xE3o Adicional constando que a partida \xE9 origin\xE1ria de \xE1rea livre da Sigatoka Negra;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "GO \xE9 livre de Sigatoka Negra, EXCETO os seguintes munic\xEDpios: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE \xE1rea livre de Sigatoka Negra PARA \xE1rea com ocorr\xEAncia de Sigatoka Negra",
    part: ["mudas"],
    orig: ["MG"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a Declara\xE7\xE3o Adicional constando que a partida \xE9 origin\xE1ria de \xE1rea livre da Sigatoka Negra;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exig\xEAncias s\xF3 se aplicam a partida proveniente de munic\xEDpios livres de Sigatoka Negra de MG: \xC1guas Vermelhas, Ara\xE7ua\xED, Araguari, Arapor\xE3, Bocai\xFAva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Can\xE1polis, Capin\xF3polis, Capit\xE3o En\xE9ias, Carmo do Parana\xEDba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Po\xE7\xF5es, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco S\xE1, Franscisco Dumont, Frutal, Guaraciama, Gurinhat\xE3, Indian\xF3polis, Ipia\xE7u, Ira\xED de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Ja\xEDba, Jana\xFAba, Janu\xE1ria, Jequita\xED, Jequitinhonha, Joa\xEDma, Jo\xE3o Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patroc\xEDnio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Oleg\xE1rio, Rio Parana\xEDba, Sacramento, Santa Rosa da Serra, Santa Vit\xF3ria, Santo Antonio do Retiro, S\xE3o Francisco, S\xE3o Gon\xE7alo do Abaet\xE9, S\xE3o Gotardo, S\xE3o Jo\xE3o das Miss\xF5es, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberl\xE2ndia, Una\xED, Varj\xE3o de Minas, V\xE1rzea da Palma, Vazante, Verdel\xE2ndia e Ver\xEDssimo;",
      "GO livre de Sigatoka Negra, EXCETO os seguintes munic\xEDpios: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE \xE1rea livre de Sigatoka Negra PARA \xE1rea com ocorr\xEAncia de Sigatoka Negra",
    part: ["mudas"],
    orig: ["MS"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a Declara\xE7\xE3o Adicional constando que a partida \xE9 origin\xE1ria de \xE1rea livre da Sigatoka Negra;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
      "exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exig\xEAncias s\xF3 se aplicam a partida proveniente de munic\xEDpios livres de Sigatoka Negra de MS: Anauril\xE2ndia, Aparecida do Taboado, Bataguass\xFA,Bataypor\xE3, Cassil\xE2ndia, Chapad\xE3o do Sul, Inoc\xEAncia, Nova Andradina, Parana\xEDba,   Selv\xEDria, Taquaruss\xFA e Tr\xEAs Lagoas;",
      "GO \xE9 livre de Sigatoka Negra, EXCETO os seguintes munic\xEDpios: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE \xE1rea livre de Sigatoka Negra PARA \xE1rea livre de Sigatoka Negra",
    part: ["mudas"],
    orig: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a Declara\xE7\xE3o Adicional constando que a partida \xE9 origin\xE1ria de \xE1rea livre da Sigatoka Negra.",
      "A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos munic\xEDpios listados no item 5.1), MS (exceto pelos munic\xEDpios listados no item 5.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
      "Estas exig\xEAncias n\xE3o se aplicam \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Para as Ufs de MG e MS estas exig\xEAncias s\xF3 se aplicam a partida proveniente e destinada a munic\xEDpio livre de Sigatoka Negra: \n\n5.1 -  Munic\xEDpios livres de Sigatoka Negra de MG: \xC1guas Vermelhas, Ara\xE7ua\xED, Araguari, Arapor\xE3, Bocai\xFAva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Can\xE1polis, Capin\xF3polis, Capit\xE3o En\xE9ias, Carmo do Parana\xEDba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Po\xE7\xF5es, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco S\xE1, Franscisco Dumont, Frutal, Guaraciama, Gurinhat\xE3, Indian\xF3polis, Ipia\xE7u, Ira\xED de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba, Iturama, Ja\xEDba, Jana\xFAba, Janu\xE1ria, Jequita\xED, Jequitinhonha, Joa\xEDma, Jo\xE3o Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patroc\xEDnio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Oleg\xE1rio, Rio Parana\xEDba, Sacramento, Santa Rosa da Serra, Santa Vit\xF3ria, Santo Antonio do Retiro, S\xE3o Francisco, S\xE3o Gon\xE7alo do Abaet\xE9, S\xE3o Gotardo, S\xE3o Jo\xE3o das Miss\xF5es, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberl\xE2ndia, Una\xED, Varj\xE3o de Minas, V\xE1rzea da Palma, Vazante, Verdel\xE2ndia e Ver\xEDssimo; \n\n5.2 - Munic\xEDpios livres de Sigatoka Negra de MS: Anauril\xE2ndia, Aparecida do Taboado, Bataguass\xFA, Bataypor\xE3, Cassil\xE2ndia, Chapad\xE3o do Sul, Inoc\xEAncia, Nova Andradina, Parana\xEDba,   Selv\xEDria, Taquaruss\xFA e Tr\xEAs Lagoas;",
      "Estas exig\xEAncias s\xF3 se aplicam a mudas n\xE3o micropopagadas;",
      "GO \xE9 livre de Sigatoka Negra, EXCETO os seguintes munic\xEDpios: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia"
    ]
  },
  {
    desc: "DE \xE1rea com ocorr\xEAncia de Sigatoka Negra PARA \xE1rea livre de Sigatoka Negra",
    part: ["mudas"],
    orig: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "TR\xC2NSITO PROIBIDO para mudas convencionais. Esta proibi\xE7\xE3o n\xE3o se aplica \xE0 mudas micropopagadas;",
      "Esta proibi\xE7\xE3o n\xE3o se aplica \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Para as UFs de MG e MS, esta proibi\xE7\xE3o s\xF3 se aplica a partida destinada a munic\xEDpio livre de Sigatoka Negra:\n\n3.1 - Munic\xEDpios livres de Sigatoka Negra de MG: \xC1guas Vermelhas, Ara\xE7ua\xED, Araguari, Arapor\xE3, Bocai\xFAva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Can\xE1polis, Capin\xF3polis, Capit\xE3o En\xE9ias, Carmo do Parana\xEDba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Po\xE7\xF5es, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco S\xE1, Franscisco Dumont, Frutal, Guaraciama, Gurinhat\xE3, Indian\xF3polis, Ipia\xE7u, Ira\xED de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Ja\xEDba, Jana\xFAba, Janu\xE1ria, Jequita\xED, Jequitinhonha, Joa\xEDma, Jo\xE3o Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patroc\xEDnio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Oleg\xE1rio, Rio Parana\xEDba, Sacramento, Santa Rosa da Serra, Santa Vit\xF3ria, Santo Antonio do Retiro, S\xE3o Francisco, S\xE3o Gon\xE7alo do Abaet\xE9, S\xE3o Gotardo, S\xE3o Jo\xE3o das Miss\xF5es, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberl\xE2ndia, Una\xED, Varj\xE3o de Minas, V\xE1rzea da Palma, Vazante, Verdel\xE2ndia e Ver\xEDssimo;\n\n3.2 - Munic\xEDpios livres de Sigatoka Negra de MS: Anauril\xE2ndia, Aparecida do Taboado, Bataguass\xFA,Bataypor\xE3, Cassil\xE2ndia, Chapad\xE3o do Sul, Inoc\xEAncia, Nova Andradina, Parana\xEDba,   Selv\xEDria, Taquaruss\xFA e Tr\xEAs Lagoas;",
      "GO \xE9 livre de Sigatoka Negra, EXCETO os seguintes munic\xEDpios: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE \xE1rea com ocorr\xEAncia de Sigatoka Negra PARA \xE1rea com ocorr\xEAncia de Sigatoka Negra",
    part: ["mudas"],
    orig: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "TR\xC2NSITO PROIBIDO para mudas convencionais. Esta proibi\xE7\xE3o n\xE3o se aplica \xE0 mudas micropopagadas;",
      "Esta proibi\xE7\xE3o n\xE3o se aplica a partida proveniente de munic\xEDpio livre de Sigatoka Negra de MG e de MS: \n\na)Munic\xEDpios livres de Sigatoka Negra de MG: \xC1guas Vermelhas, Ara\xE7ua\xED, Araguari, Arapor\xE3, Bocai\xFAva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Can\xE1polis, Capin\xF3polis, Capit\xE3o En\xE9ias, Carmo do Parana\xEDba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Po\xE7\xF5es, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco S\xE1, Franscisco Dumont, Frutal, Guaraciama, Gurinhat\xE3, Indian\xF3polis, Ipia\xE7u, Ira\xED de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Ja\xEDba, Jana\xFAba, Janu\xE1ria, Jequita\xED, Jequitinhonha, Joa\xEDma, Jo\xE3o Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patroc\xEDnio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Oleg\xE1rio, Rio Parana\xEDba, Sacramento, Santa Rosa da Serra, Santa Vit\xF3ria, Santo Antonio do Retiro, S\xE3o Francisco, S\xE3o Gon\xE7alo do Abaet\xE9, S\xE3o Gotardo, S\xE3o Jo\xE3o das Miss\xF5es, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberl\xE2ndia, Una\xED, Varj\xE3o de Minas, V\xE1rzea da Palma, Vazante, Verdel\xE2ndia e Ver\xEDssimo; \n\nb)Munic\xEDpios livres de Sigatoka Negra de MS: Anauril\xE2ndia, Aparecida do Taboado, Bataguass\xFA,Bataypor\xE3, Cassil\xE2ndia, Chapad\xE3o do Sul, Inoc\xEAncia, Nova Andradina, Parana\xEDba,   Selv\xEDria, Taquaruss\xFA e Tr\xEAs Lagoas;",
      "Esta proibi\xE7\xE3o n\xE3o se aplica \xE0s esp\xE9cies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Munic\xEDpios de GO com ocorr\xEAncia de Sigatoka Negra: Amorin\xF3polis, Aragar\xE7as, Aren\xF3polis, Baliza, Bom Jardim de Goi\xE1s, Caiap\xF4nia, Diorama, Doverl\xE2ndia, Fazenda Nova, Ipor\xE1, Israel\xE2ndia, Ivol\xE2ndia, Jaupaci, Jussara, Mineiros, Moipor\xE1, Montes Claros de Goi\xE1s, Palestina de Goi\xE1s, Piranhas, Santa F\xE9 de Goi\xE1s e Santa Rita do Araguaia;",
      "Esta proibi\xE7\xE3o s\xF3 se aplica a mudas n\xE3o micropopagadas;"
    ]
  },
  //ANTHONOMUS TOMENTOSUS
  {
    desc: "DE UF com ocorr\xEAncia de Anthonomus tomentosus PARA UF sem a ocorr\xEAncia de Anthonomus tomentosus",
    part: ["frutos"],
    orig: ["AP", "RR"],
    dest: ["AC", "AL", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Anthonomus tomentosus",
    exig: [
      "Se a partida for proveniente de Boa Vista, Mucaja\xED e Pacaraima: TR\xC2NSITO PROIBIDO;",
      'Se a partida n\xE3o for proveniente dos munic\xEDpios de Boa Vista, Mucaja\xED e Pacaraima: PTV com a seguinte declara\xE7\xE3o adicional: "A partida foi inspecionada e encontra-se livre de Anthonomus tomentosus"; ',
      "Estas exig\xEAncias fitossanit\xE1rias s\xF3 se aplicam a frutos frescos;"
    ]
  },
  //CANCRO CÍTRICO
  {
    //1
    desc: "DE UF de status fitossanit\xE1rio desconhecido para Cancro C\xEDtrico PARA \xC1rea Sem Ocorr\xEAncia, \xC1rea Livre de Praga \u2013 ALP, \xC1rea sob Sistema de Mitiga\xE7\xE3o de Risco - SMR e \xC1rea sob Erradica\xE7\xE3o",
    part: ["frutos", "material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["AC", "AL", "AP", "MA", "PI", "RN"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "MT", "PA", "PB", "PE", "PR", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: ["Proibida a emiss\xE3o de PTV. TR\xC2NSITO PROIBIDO."]
  },
  {
    //1-PR
    desc: "DE UF de status fitossanit\xE1rio desconhecido para Cancro C\xEDtrico PARA \xC1rea Sem Ocorr\xEAncia, \xC1rea Livre de Praga \u2013 ALP, \xC1rea sob Sistema de Mitiga\xE7\xE3o de Risco - SMR e \xC1rea sob Erradica\xE7\xE3o",
    part: ["frutos", "material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["PR"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "MT", "PA", "PB", "PE", "PR", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: ["Se a partida tiver origem os munic\xEDpios de Adrian\xF3polis, Agudos do Sul, Almirante Tamandar\xE9, Arauc\xE1ria, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraque\xE7aba, Guaratuba, Itaperu\xE7u, Mandirituba, Matinhos, Morretes, Paranagu\xE1, Pinhais, Piraquara, Pontal do Paran\xE1, Quatro Barras, Rio Branco do Sul, S\xE3o Jos\xE9 dos Pinhais, Tijucas do Sul e Tunas do Paran\xE1: Proibida a emiss\xE3o de PTV. TR\xC2NSITO PROIBIDO."]
  },
  {
    //2
    desc: "DE \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico PARA \xC1rea Sem Ocorr\xEAncia, \xC1rea Livre de Praga, \xC1rea sob Sistema de Mitiga\xE7\xE3o de Risco ou \xC1rea sob Erradica\xE7\xE3o",
    part: ["frutos"],
    orig: ["AM", "BA", "DF", "ES", "GO", "PB", "PE", "RO", "RJ", "SE", "TO"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MT", "MS", "PA", "PB", "PE", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "Os frutos s\xE3o origin\xE1rios de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico (Xanthomonas citri subsp. citri), oficialmente reconhecida".'
    ]
  },
  {
    //3
    desc: "DE \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico PARA \xC1rea Sem Ocorr\xEAncia, \xC1rea Livre de Praga, \xC1rea sob Sistema de Mitiga\xE7\xE3o de Risco ou \xC1rea sob Erradica\xE7\xE3o",
    part: ["material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["AM", "BA", "DF", "ES", "GO", "PB", "PE", "RO", "RJ", "SE", "TO"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MT", "MS", "PA", "PB", "PE", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 origin\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico (Xanthomonas citri subsp. citri), oficialmente reconhecida".'
    ]
  },
  {
    //2 - Destino PR
    desc: "DE \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico PARA o Estado do Paran\xE1",
    part: ["frutos"],
    orig: ["AM", "BA", "DF", "ES", "GO", "PB", "PE", "RO", "RJ", "SE", "TO"],
    dest: ["PR"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida tiver como destino qualquer  munic\xEDpio que N\xC3O seja Adrian\xF3polis, Agudos do Sul, Almirante Tamandar\xE9, Arauc\xE1ria, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraque\xE7aba, Guaratuba, Itaperu\xE7u, Mandirituba, Matinhos, Morretes, Paranagu\xE1, Pinhais, Piraquara, Pontal do Paran\xE1, Quatro Barras, Rio Branco do Sul, S\xE3o Jos\xE9 dos Pinhais, Tijucas do Sul e Tunas do Paran\xE1: PTV com a seguinte DA: "Os frutos s\xE3o origin\xE1rios de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico (Xanthomonas citri subsp. citri), oficialmente reconhecida".'
    ]
  },
  {
    //3 - Destino PR
    desc: "DE \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico PARA o Estado do Paran\xE1",
    part: ["material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["AM", "BA", "DF", "ES", "GO", "PB", "PE", "RO", "RJ", "SE", "TO"],
    dest: ["PR"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida tiver como destino qualquer  munic\xEDpio que N\xC3O seja Adrian\xF3polis, Agudos do Sul, Almirante Tamandar\xE9, Arauc\xE1ria, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraque\xE7aba, Guaratuba, Itaperu\xE7u, Mandirituba, Matinhos, Morretes, Paranagu\xE1, Pinhais, Piraquara, Pontal do Paran\xE1, Quatro Barras, Rio Branco do Sul, S\xE3o Jos\xE9 dos Pinhais, Tijucas do Sul e Tunas do Paran\xE1: PTV com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 origin\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico (Xanthomonas citri subsp. citri), oficialmente reconhecida".'
    ]
  },
  {
    // 4
    desc: "DE \xC1rea Livre de Cancro C\xEDtrico PARA qualquer \xC1rea Sem Ocorr\xEAncia, \xC1rea Livre de Praga, \xC1rea sob Sistema de Mitiga\xE7\xE3o de Risco ou \xC1rea sob Erradica\xE7\xE3o",
    part: ["frutos"],
    orig: ["PA"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MT", "MS", "PB", "PE", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "Os frutos s\xE3o origin\xE1rios de \xC1rea Livre de Praga para o Cancro C\xEDtrico (Xanthomonas citri subsp. citri) oficialmente reconhecida".'
    ]
  },
  {
    // 5
    desc: "DE \xC1rea Livre de Cancro C\xEDtrico PARA qualquer \xC1rea Sem Ocorr\xEAncia, \xC1rea Livre de Praga, \xC1rea sob Sistema de Mitiga\xE7\xE3o de Risco ou \xC1rea sob Erradica\xE7\xE3o",
    part: ["material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["PA"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MT", "MS", "PB", "PE", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 origin\xE1rio de \xC1rea Livre de Praga para o Cancro C\xEDtrico (Xanthomonas citri subsp. citri) oficialmente reconhecida".'
    ]
  },
  {
    //4 - Destino PR
    desc: "DE \xC1rea Livre de Cancro C\xEDtrico PARA o Estado do Paran\xE1",
    part: ["frutos"],
    orig: ["PA"],
    dest: ["PR"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida tiver como destino qualquer  munic\xEDpio que N\xC3O seja Adrian\xF3polis, Agudos do Sul, Almirante Tamandar\xE9, Arauc\xE1ria, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraque\xE7aba, Guaratuba, Itaperu\xE7u, Mandirituba, Matinhos, Morretes, Paranagu\xE1, Pinhais, Piraquara, Pontal do Paran\xE1, Quatro Barras, Rio Branco do Sul, S\xE3o Jos\xE9 dos Pinhais, Tijucas do Sul e Tunas do Paran\xE1: PTV com a seguinte DA: "Os frutos s\xE3o origin\xE1rios de \xC1rea Livre de Praga para o Cancro C\xEDtrico (Xanthomonas citri subsp. citri) oficialmente reconhecida".'
    ]
  },
  {
    //5 - Destino PR
    desc: "DE \xC1rea Livre de Cancro C\xEDtrico PARA o Estado do Paran\xE1",
    part: ["material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["PA"],
    dest: ["PR"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida tiver como destino qualquer  munic\xEDpio que N\xC3O seja Adrian\xF3polis, Agudos do Sul, Almirante Tamandar\xE9, Arauc\xE1ria, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraque\xE7aba, Guaratuba, Itaperu\xE7u, Mandirituba, Matinhos, Morretes, Paranagu\xE1, Pinhais, Piraquara, Pontal do Paran\xE1, Quatro Barras, Rio Branco do Sul, S\xE3o Jos\xE9 dos Pinhais, Tijucas do Sul e Tunas do Paran\xE1: PTV com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 origin\xE1rio de \xC1rea Livre de Praga para o Cancro C\xEDtrico (Xanthomonas citri subsp. citri) oficialmente reconhecida".'
    ]
  },
  {
    // 6
    desc: "DE \xC1rea de Sistema de Manejo de Risco (SMR) de Cancro C\xEDtrico PARA qualquer UF",
    part: ["material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["MT", "MS", "RS", "SP", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 proveniente de \xC1rea sob SMR, se encontra livre de Cancro C\xEDtrico (Xanthomonas citri subsp. citri) e foi produzido conforme preconiza a legisla\xE7\xE3o espec\xEDfica em vigor".'
    ]
  },
  {
    // 6 - Origem PR
    desc: "DE \xC1rea de Sistema de Manejo de Risco (SMR) de Cancro C\xEDtrico PARA qualquer UF",
    part: ["material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["PR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      "SE A PARTIDA TIVER COMO ORIGEM UM DOS MUNIC\xCDPIOS DE RISCO DESCONHECIDO (Adrian\xF3polis, Agudos do Sul, Almirante Tamandar\xE9, Arauc\xE1ria, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraque\xE7aba, Guaratuba, Itaperu\xE7u, Mandirituba, Matinhos, Morretes, Paranagu\xE1, Pinhais, Piraquara, Pontal do Paran\xE1, Quatro Barras, Rio Branco do Sul, S\xE3o Jos\xE9 dos Pinhais, Tijucas do Sul e Tunas do Paran\xE1): Proibida a emiss\xE3o de PTV. TR\xC2NSITO PROIBIDO.",
      'SE A PARTIDA TIVER COMO ORIGEM OS DEMAIS MUNIC\xCDPIOS, QUE S\xC3O \xC1REAS DE MITIGA\xC7\xC3O DE RISCO: PTV com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 proveniente de \xC1rea sob SMR, se encontra livre de Cancro C\xEDtrico (Xanthomonas citri subsp. citri) e foi produzido conforme preconiza a legisla\xE7\xE3o espec\xEDfica em vigor".'
    ]
  },
  {
    desc: "DE Sistema de Manejo de Risco (SMR) de Cancro C\xEDtrico PARA qualquer UF",
    part: ["frutos"],
    orig: ["MT", "MS", "PR", "RS", "SP", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida cont\xE9m frutos infestados oriundos de im\xF3vel sob Sistema de Mitiga\xE7\xE3o de Risco (SMR), e tem como destino Ind\xFAstria de suco, localizada em UF lim\xEDtrofe, que n\xE3o est\xE1 localizada em ALP ou em \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico: \na)PTV com a seguinte DA: "Frutos contaminados com Cancro C\xEDtrico (Xanthomonas citri subsp. citri) destinados exclusivamente \xE0 ind\xFAstria". \nb)Os frutos devem ser transportados em ve\xEDculo fechado ou coberto, e lacrado',
      'Se a partida N\xC3O cont\xE9m frutos infestados e \xE9 oriunda de im\xF3vel cadastrado no SMR para o Cancro C\xEDtrico e tem como destino	UC ou ind\xFAstria localizada em UF lim\xEDtrofe:  \na) PTV com uma das seguintes DAs: \n- "Os frutos foram produzidos em UP, de im\xF3vel cadastrado no SMR para o Cancro C\xEDtrico, que apresentou at\xE9 um por cento de frutos com sintomas de Cancro C\xEDtrico (Xanthomonas citri subsp. citri) e se destinam a ind\xFAstria"; OU \n- "Os frutos foram produzidos em UP, de im\xF3vel cadastrado no SMR para o Cancro C\xEDtrico, que apresentou at\xE9 um por cento de frutos com sintomas de Cancro C\xEDtrico (Xanthomonas citri subsp. citri) e se destinam ao beneficiamento em Unidade de Consolida\xE7\xE3o". \nb) Os frutos devem ser transportados em ve\xEDculo fechado ou coberto e lacrado',
      'Se a partida for formada por frutos oriundos de im\xF3vel sem ocorr\xEAncia do Cancro C\xEDtrico, localizado em \xC1rea sob SMR, com destino para UC ou ind\xFAstria, localizada em qualquer UF: 	\na) PTV com uma das seguintes DAs: \n- "Os frutos s\xE3o provenientes de im\xF3vel sem ocorr\xEAncia do Cancro C\xEDtrico (Xanthomonas citri subsp. citri), localizado em \xC1rea sob SMR, e se destinam a ind\xFAstria"; OU \n- "Os frutos s\xE3o provenientes de im\xF3vel sem ocorr\xEAncia do Cancro C\xEDtrico (Xanthomonas citri subsp. citri), localizado em \xC1rea sob SMR, e se destinam ao beneficiamento em Unidade de Consolida\xE7\xE3o". \nb) Os frutos devem ser transportados em ve\xEDculo fechado ou coberto',
      'Para todas as demais situa\xE7\xF5es de produtos oriundos de \xC1rea de SMR: \na) PTV com as seguintes DAs: \n- "Os frutos s\xE3o origin\xE1rios de Unidade de Produ\xE7\xE3o onde foi implantado o Sistema de Mitiga\xE7\xE3o de Risco (SMR) reconhecido oficialmente, foram higienizados por imers\xE3o em solu\xE7\xE3o com Hipoclorito de S\xF3dio a duzentos ppm, pH sete, durante dois minutos e se encontram sem sintomas de Cancro C\xEDtrico (Xanthomonas citri subsp. citri)". \n- Se as embalagens descart\xE1veis ou em caixas pl\xE1sticas retorn\xE1veis forem higienizadas por PULVERIZA\xC7\xC3O, adicionar a seguinte DA: "As caixas pl\xE1sticas retorn\xE1veis foram higienizadas por pulveriza\xE7\xE3o em solu\xE7\xE3o de cloreto de benzalc\xF4nio (am\xF4nio quatern\xE1rio) 125 (cento e vinte e cinco) gramas/litro, na concentra\xE7\xE3o de 0,1% (um d\xE9cimo percentual)". \n- Se as embalagens descart\xE1veis ou em caixas pl\xE1sticas retorn\xE1veis forem higienizadas por IMERS\xC3O, adicionar a seguinte DA: "As caixas pl\xE1sticas retorn\xE1veis foram higienizadas por imers\xE3o em solu\xE7\xE3o de cloreto de benzalc\xF4nio (am\xF4nio quatern\xE1rio) 125 (cento e vinte e cinco) gramas/litro, na concentra\xE7\xE3o de 0,1% (um d\xE9cimo percentual)" \nb) Os frutos devem ser transportados em ve\xEDculo fechado ou coberto, seja para transporte a granel, em embalagens descart\xE1veis ou em caixas pl\xE1sticas retorn\xE1veis'
    ]
  },
  {
    desc: "DE \xC1rea sob Erradica\xE7\xE3o de Cancro C\xEDtrico PARA qualquer UF",
    part: ["frutos"],
    orig: ["CE", "MG", "RR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com uma das seguintes DAs: \n -"Os frutos s\xE3o provenientes de plantas sadias de im\xF3vel sob supervis\xE3o oficial, localizado em \xC1rea sob Erradica\xE7\xE3o, foram higienizados com Hipoclorito de S\xF3dio a duzentos ppm, pH sete, durante dois minutos e encontram-se livres de Xanthomonas citri subsp. citri".\n -"Os frutos s\xE3o provenientes de plantas sadias de im\xF3vel sob supervis\xE3o oficial, localizado em \xC1rea sob Erradica\xE7\xE3o, e se destinam \xE0 ind\xFAstria".\n -"Os frutos s\xE3o provenientes de im\xF3vel sem ocorr\xEAncia do Cancro C\xEDtrico (Xanthomonas citri subsp. citri), localizado em \xC1rea sob Erradica\xE7\xE3o".'
    ]
  },
  {
    desc: "DE \xC1rea sob Erradica\xE7\xE3o de Cancro C\xEDtrico PARA qualquer UF",
    part: ["material de propaga\xE7\xE3o", "mudas", "estacas", "gemas", "plantas"],
    orig: ["CE", "MG", "RR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 proveniente de \xC1rea sob Erradica\xE7\xE3o e foi produzido em im\xF3vel sem ocorr\xEAncia de Cancro C\xEDtrico (Xanthomonas citri subsp. citri), conforme preconiza a legisla\xE7\xE3o espec\xEDfica vigente".'
    ]
  }
];

// src/dbPragas.ts
var pragas = [
  {
    prag: "Bactrocera carambolae",
    pragc: "MOSCA-DA-CARAMBOLA",
    hosp: [
      "Anacardium occidentale",
      "Arenga pinnata",
      "Artocarpus altilis",
      "Artocarpus integrifolia",
      "Averrhoa bilimbi",
      "Averrhoa carambola",
      "Capsicum annuum",
      "Chrysobalanus icaco",
      "Citrus aurantium",
      "Citrus paradisi",
      "Citrus reticulata",
      "Citrus sinensis",
      "Eugenia uniflora",
      "Garcinia dulcis",
      "Licopersicum esculentum",
      "Malpighia emarginata",
      "Mangifera indica",
      "Manilkara zapota",
      "Psidium guajava",
      "Spondias mombin",
      "Spondias lutea",
      "Syzygium aqueum",
      "Syzygium jambos",
      "Syzygium malaccense",
      "Syzygium samarangense",
      "Terminalia catappa",
      "Ziziphus jujuba",
      "Ziziphus mauritiana",
      "Bysonima crassifolia",
      "Capsicum chinense",
      "Chrysophyllum cainito",
      "Eugenia stipitata",
      "Licania sp.",
      "Pouteria caimito",
      "Pouteria macrophylla",
      "Psidium guineense",
      "Rollinia omucosa",
      "Syzygium cumini"
    ],
    files: [
      { leg: "Instru\xE7\xE3o Normativa n\xBA 28, de 20 de julho de 2017", link: "IN28-2017.pdf" },
      { leg: "Resolu\xE7\xE3o n\xBA 04, de 29 de mar\xE7o de 2019 [Par\xE1]", link: "RES04-2019.pdf" },
      { leg: "Resolu\xE7\xE3o n\xBA 06, de 13 de junho de 2019 [Roraima]", link: "RES06-2019.pdf" }
    ]
  },
  {
    prag: "Schizotetranychus hindustanicus",
    pragc: "\xC1CARO HINDU",
    hosp: [
      "Cocos nucifera",
      "Azadirachta indica",
      "Sorghum bicolor",
      "Acacia spp.",
      "Melia azedarach",
      "Citrus spp."
    ],
    files: [
      { leg: "Instru\xE7\xE3o Normativa MAPA n\xBA 8, de 17 de abril de 2012", link: "IN08-2012.pdf" }
    ]
  },
  {
    prag: "Sternochetus mangiferae",
    pragc: "GORGULHO DA MANGA",
    hosp: ["Mangifera indica"],
    files: [
      {
        leg: "Instru\xE7\xE3o Normativa MAPA/SDA n\xBA. 34, de 05 de setembro de 2017",
        link: "IN34-2017.pdf"
      }
    ]
  },
  {
    prag: "BSV e CMV",
    pragc: "BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS",
    hosp: ["Musa spp."],
    files: [
      { leg: "Instru\xE7\xE3o Normativa MAPA n\xBA 46, de 27 de dezembro de 2010", link: "IN46-2010.pdf" }
    ]
  },
  {
    prag: "Xanthomonas campestris pv. viticola",
    pragc: "CANCRO-DA-VIDEIRA",
    hosp: ["Vitis spp. e seus h\xEDbridos"],
    files: [
      { leg: "Instru\xE7\xE3o Normativa MAPA n\xBA 2, de 6 de fevereiro de 2014", link: "IN02-2014.pdf" }
    ]
  },
  {
    prag: "Neonectria ditissima (Neonectria galligena)",
    pragc: "CANCRO EUROPEU DAS POM\xC1CEAS",
    hosp: ["Malus sp."],
    files: [{ leg: "Instru\xE7\xE3o Normativa n\xBA 20, de 20 de junho de 2013", link: "IN20-2013.pdf" }]
  },
  {
    prag: "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    pragc: "GREENING",
    hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp.", "Murraya paniculata"],
    files: [{ leg: "Instru\xE7\xE3o Normativa n\xBA 53, de 16 de outubro de 2008", link: "IN53-2008.pdf" }]
  },
  {
    prag: "Phyllosticta citricarpa (Guinardia citricarpa)",
    pragc: "PINTA-PRETA-DOS-CITROS",
    hosp: ["Citrus spp."],
    files: [
      { leg: "Instru\xE7\xE3o Normativa MAPA n\xBA 3, de 8 de janeiro de 2008", link: "IN03-2008.pdf" }
    ]
  },
  {
    prag: "Ralstonia solanacearum ra\xE7a 2",
    pragc: "MOKO-DA-BANANEIRA",
    hosp: ["Musa spp.", "Heliconia spp."],
    files: [
      { leg: "Instru\xE7\xE3o Normativa SDA/MAPA n\xBA 17, de 27 de maio de 2009", link: "IN17-2009.pdf" }
    ]
  },
  {
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    pragc: "SIGATOKA NEGRA",
    hosp: ["Musa spp.", "Heliconia spp."],
    files: [
      { leg: "Instru\xE7\xE3o Normativa SDA/MAPA n\xBA 17, de 31 de maio de 2005", link: "IN17-2005.pdf" }
    ]
  },
  {
    prag: "Anthonomus tomentosus",
    pragc: "ANTHONOMUS TOMENTOSUS",
    hosp: ["Malpighia spp."],
    files: [
      {
        leg: "Instru\xE7\xE3o Normativa MAPA/SDA n\xBA. 38, de 01 de outubro de 2018",
        link: "IN38-2018.pdf"
      }
    ]
  },
  {
    prag: "Xanthomonas citri subsp. citri",
    pragc: "CANCRO C\xCDTRICO",
    hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."],
    files: [{ leg: "Instru\xE7\xE3o Normativa n\xBA 21, de 25 de abril de 2018", link: "IN21-2018.pdf" }]
  }
];

// src/dbHospedeiros.ts
var hospedeiros = [
  { nomeVul: "Abacate (Persea gratissima)", nomeSci: "Persea gratissima", count: 1 },
  { nomeVul: "Abeto Europeu", nomeSci: "Picea abies", count: 1 },
  { nomeVul: "Abeto Vermelho Comum", nomeSci: "Picea abies", count: 1 },
  { nomeVul: "Abiu (C. cainito)", nomeSci: "Chrysophyllum cainito", count: 1 },
  { nomeVul: "Abiu (P. cainito)", nomeSci: "Pouteria caimito", count: 1 },
  { nomeVul: "Ac\xE1cia", nomeSci: "Acacia spp.", count: 2 },
  { nomeVul: "Acerola(qualquer esp\xE9cie)", nomeSci: "Malpighia spp.", count: 1 },
  { nomeVul: "Acerola (M. punicifolia)", nomeSci: "Malpighia punicifolia", count: 1 },
  { nomeVul: "Acerola (M. emarginata)", nomeSci: "Malpighia emarginata", count: 1 },
  { nomeVul: "Ajuru", nomeSci: "Chrysobalanus icaco", count: 1 },
  { nomeVul: "\xC1lamo (Populus x canadensis)", nomeSci: "Populus x canadensis", count: 1 },
  { nomeVul: "\xC1lamo Americano", nomeSci: "Tilia americana", count: 1 },
  { nomeVul: "\xC1lamo Branco", nomeSci: "Populus alba", count: 1 },
  { nomeVul: "\xC1lamo Grande Dente", nomeSci: "Populus grandidenta", count: 1 },
  { nomeVul: "\xC1lamo", nomeSci: "Populus spp.", count: 1 },
  { nomeVul: "Alb\xEDzia", nomeSci: "Albizia lebbeck", count: 1 },
  { nomeVul: "Alder Cinza", nomeSci: "Alnus incana", count: 1 },
  { nomeVul: "Alder Japon\xEAs", nomeSci: "Alnus japonica", count: 1 },
  { nomeVul: "Alder Negro", nomeSci: "Alnus glutinosa", count: 1 },
  { nomeVul: "Alder Vermelha", nomeSci: "Alnus rubra", count: 1 },
  { nomeVul: "Alder", nomeSci: "Alnus sp.", count: 1 },
  { nomeVul: "Algod\xE3o Americano", nomeSci: "Populus wislizeni", count: 1 },
  { nomeVul: "Ameixa", nomeSci: "Prunus spp.", count: 1 },
  { nomeVul: "Ameixa-roxa", nomeSci: "Syzygium cumini", count: 0 },
  { nomeVul: "Ameixeira-japonesa", nomeSci: "Prunus salicina", count: 1 },
  { nomeVul: "Amelanchier", nomeSci: "Amelanchier laevis", count: 1 },
  { nomeVul: "Amendoeira", nomeSci: "Terminalia catappa", count: 1 },
  { nomeVul: "Amieiro Negro", nomeSci: "Frangula almus", count: 1 },
  { nomeVul: "Amieiro", nomeSci: "Alnus glutinosa", count: 1 },
  { nomeVul: "Angico", nomeSci: "Acacia spp.", count: 2 },
  { nomeVul: "Ara\xE7\xE1-Boi", nomeSci: "Eugenia stipitata", count: 0 },
  { nomeVul: "Arapaju", nomeSci: "Manilkara zapota", count: 1 },
  {
    nomeVul: "Arbusto Espinheiro do Bosque",
    nomeSci: "Crataegus oxyacanthoides (syn: oxyacantha)",
    count: 1
  },
  { nomeVul: "Arbusto Espinhento", nomeSci: "Craetaegus monogyna", count: 1 },
  { nomeVul: "\xC1rvore Preta", nomeSci: "Fraxinus nigra (syn. sambucifolia)", count: 1 },
  { nomeVul: "Aveia", nomeSci: "Avena sativa", count: 1 },
  { nomeVul: "Avel\xE3", nomeSci: "Corylus avellana", count: 1 },
  { nomeVul: "Aveleira Japonesa", nomeSci: "Corylus sieboldiana", count: 1 },
  { nomeVul: "Aveleira Siberiana", nomeSci: "Corylus heterophylla var. thunbergiii", count: 1 },
  { nomeVul: "Azevinho", nomeSci: "Ilex aquifolium", count: 1 },
  { nomeVul: "Bacupari", nomeSci: "Garcinia dulcis", count: 1 },
  { nomeVul: "B\xE1lsamo", nomeSci: "Myroxylon balsamum", count: 1 },
  { nomeVul: "Banana", nomeSci: "Musa spp.", count: 3 },
  { nomeVul: "Bergamota", nomeSci: "Citrus reticulata", count: 1 },
  { nomeVul: "B\xE9tula Branca (B.papyrifera)", nomeSci: "Betula papyrifera", count: 1 },
  { nomeVul: "B\xE9tula Branca (B.pendula)", nomeSci: "Betula pendula (syn:verrucosa)", count: 1 },
  { nomeVul: "B\xE9tula Branca (B.pubescens)", nomeSci: "Betula pubescens", count: 1 },
  { nomeVul: "B\xE9tula Cinza", nomeSci: "Betula populifolia", count: 1 },
  { nomeVul: "B\xE9tula Lenta", nomeSci: "Betula lenta", count: 1 },
  { nomeVul: "B\xE9tula lenta", nomeSci: "Betula nigra", count: 1 },
  { nomeVul: "B\xE9tula Lutea", nomeSci: "Betula lutea (synonym: alleghaniensis)", count: 1 },
  { nomeVul: "B\xE9tula Monarca", nomeSci: "Betula maximowicziana", count: 1 },
  { nomeVul: "B\xE9tula Negra", nomeSci: "Betula nigra", count: 1 },
  { nomeVul: "B\xE9tula Papel", nomeSci: "Betula papyrifera", count: 1 },
  { nomeVul: "B\xE9tula", nomeSci: "Betula sp.", count: 1 },
  { nomeVul: "Bilimbi (A. bilimbi)", nomeSci: "Averrhoa bilimbi", count: 1 },
  { nomeVul: "Bilimbi (C. cainito)", nomeSci: "Chrysophyllum cainito", count: 1 },
  { nomeVul: "Birib\xE1", nomeSci: "Rollinia omucosa", count: 0 },
  { nomeVul: "Bordo Japon\xEAs", nomeSci: "Acer palmatum", count: 1 },
  { nomeVul: "Bordo Vermelho (A.macrophyllum)", nomeSci: "Acer macrophyllum", count: 1 },
  { nomeVul: "Bordo Vermelho (A.rubrum)", nomeSci: "Acer rubrum", count: 1 },
  { nomeVul: "Bordo (A.mono)", nomeSci: "Acer mono subsp. Heterophyllum", count: 1 },
  { nomeVul: "Bordo (A.negundo)", nomeSci: "Acer negundo", count: 1 },
  { nomeVul: "Bordo (A.sacharum)", nomeSci: "Acer saccharum", count: 1 },
  { nomeVul: "Bordo (A.spicatum)", nomeSci: "Acer spicatum", count: 1 },
  { nomeVul: "Bordo (Acer pennsylvanicum)", nomeSci: "Acer pennsylvanicum", count: 1 },
  { nomeVul: "Bordo (Acer pseudoplatanus)", nomeSci: "Acer pseudoplatanus", count: 1 },
  { nomeVul: "Bordo", nomeSci: "Acer sp.", count: 1 },
  { nomeVul: "Bordo-da-videira", nomeSci: "Acer circinatum", count: 1 },
  { nomeVul: "Broto Vermelho Oriental", nomeSci: "Cercis canadensis", count: 1 },
  { nomeVul: "Cabe\xE7a-de-negro", nomeSci: "Albizia lebbeck", count: 1 },
  { nomeVul: "Caimito", nomeSci: "Chrysophyllum cainito", count: 1 },
  { nomeVul: "Caj\xE1 (S. lutea)", nomeSci: "Spondias lutea", count: 1 },
  { nomeVul: "Caj\xE1 (S. mombin)", nomeSci: "Spondias mombin", count: 1 },
  { nomeVul: "Caj\xE1-mirim (S. lutea)", nomeSci: "Spondias lutea", count: 1 },
  { nomeVul: "Caj\xE1-mirim (S. mombin)", nomeSci: "Spondias mombin", count: 1 },
  { nomeVul: "Cajazeiro (S. lutea)", nomeSci: "Spondias lutea", count: 1 },
  { nomeVul: "Cajazeiro (S. mombin)", nomeSci: "Spondias mombin", count: 1 },
  { nomeVul: "Caju", nomeSci: "Anacardium occidentale", count: 2 },
  { nomeVul: "Carambola Amarela (A. bilimbi)", nomeSci: "Averrhoa bilimbi", count: 1 },
  { nomeVul: "Carambola amarela (C. cainito)", nomeSci: "Chrysophyllum cainito", count: 1 },
  { nomeVul: "Carambola", nomeSci: "Averrhoa carambola", count: 1 },
  { nomeVul: "C\xE1rpino Betulas", nomeSci: "Carpinus betulas", count: 1 },
  { nomeVul: "C\xE1rpino", nomeSci: "Carpinus sp.", count: 1 },
  { nomeVul: "Carvalho \xC1gua", nomeSci: "Quercus laurifolia", count: 1 },
  { nomeVul: "Carvalho Branco do Brejo", nomeSci: "Quercus bicolor", count: 1 },
  { nomeVul: "Carvalho Branco Oregon", nomeSci: "Quercus garryana", count: 1 },
  { nomeVul: "Carvalho Branco", nomeSci: "Quercus alba", count: 1 },
  { nomeVul: "Carvalho Campe\xE3o(Q.borealis)", nomeSci: "Quercus borealis (syn: rubra)", count: 1 },
  { nomeVul: "Carvalho Campe\xE3o(Q.rubra)", nomeSci: "Quercus rubra", count: 1 },
  { nomeVul: "Carvalho Castanheiro", nomeSci: "Quercus montana", count: 1 },
  { nomeVul: "Carvalho Escarlata", nomeSci: "Quercus coccinea", count: 1 },
  { nomeVul: "Carvalho Folha Diamante", nomeSci: "Quercus laurifolia", count: 1 },
  { nomeVul: "Carvalho Glorioso do Brejo", nomeSci: "Quercus laurifolia", count: 1 },
  { nomeVul: "Carvalho Glorioso", nomeSci: "Quercus laurifolia", count: 1 },
  { nomeVul: "Carvalho Konara", nomeSci: "Quercus glandulifera", count: 1 },
  { nomeVul: "Carvalho Koreano", nomeSci: "Quercus glandulifera", count: 1 },
  { nomeVul: "Carvalho Mongoliano", nomeSci: "Quercus mongolica var grosserrata", count: 1 },
  { nomeVul: "Carvalho Obtuso", nomeSci: "Quercus laurifolia", count: 1 },
  { nomeVul: "Carvalho Oregon", nomeSci: "Quercus garryana", count: 1 },
  { nomeVul: "Carvalho Preto", nomeSci: "Quercus velutina", count: 1 },
  {
    nomeVul: "Carvalho Vermelho do Norte (Q.borealis)",
    nomeSci: "Quercus borealis (syn: rubra)",
    count: 1
  },
  { nomeVul: "Carvalho Vermelho do Norte (Q.rubra)", nomeSci: "Quercus rubra", count: 1 },
  { nomeVul: "Carvalho", nomeSci: "Quercus sp.", count: 1 },
  { nomeVul: "Carvalho-alvarinho", nomeSci: "Quercus robur", count: 1 },
  { nomeVul: "Carvalho-roble", nomeSci: "Quercus robur", count: 1 },
  { nomeVul: "Carvalho-vermelho", nomeSci: "Quercus robur", count: 1 },
  { nomeVul: "Castanha-da-\xCDndia(A.hippocastanum)", nomeSci: "Aesculus hippocastanum", count: 1 },
  { nomeVul: "Castanha-da-\xCDndia", nomeSci: "Aesculus sp.", count: 1 },
  { nomeVul: "Castanheiro Europeu", nomeSci: "Castanea dentata", count: 1 },
  { nomeVul: "Cereja de P\xE1ssaro Virginia", nomeSci: "Prunus virginiana", count: 1 },
  { nomeVul: "Cereja de P\xE1ssaro", nomeSci: "Prunus ssiori", count: 1 },
  { nomeVul: "Cerejeira Chorona", nomeSci: "Prunus subhirtella var. pendula", count: 1 },
  { nomeVul: "Cerejeira Negra", nomeSci: "Prunus serotina", count: 1 },
  { nomeVul: "Cerejeira", nomeSci: "Prunus avium", count: 1 },
  { nomeVul: "Ch\xE1-da-\xCDndia", nomeSci: "Camellia sinensis", count: 1 },
  { nomeVul: "Choupo Branco", nomeSci: "Populus alba", count: 1 },
  { nomeVul: "Choupo Tremedor", nomeSci: "Populus tremula", count: 1 },
  { nomeVul: "Choupo Tr\xEAmulo", nomeSci: "Populus tremuloides", count: 1 },
  { nomeVul: "Choupo(P.x canadensis)", nomeSci: "Populus x canadensis", count: 1 },
  { nomeVul: "Choupo", nomeSci: "Populus spp.", count: 1 },
  { nomeVul: "Choupo-b\xE1lsamo", nomeSci: "Populus balsamifera", count: 1 },
  { nomeVul: "Chuva-de-ouro", nomeSci: "Laburnum anagyrioides", count: 1 },
  { nomeVul: "Cinamomo", nomeSci: "Melia azedarach", count: 1 },
  { nomeVul: "Cinza Japon\xEAs", nomeSci: "Fraxinus mandshurica var. Japonica", count: 1 },
  { nomeVul: "Cinza-da-montanha", nomeSci: "Sorbus sp.", count: 1 },
  { nomeVul: "Citros", nomeSci: "Citrus spp.", count: 4 },
  { nomeVul: "Coprosma Frondoso Fino", nomeSci: "Coprosma areolata", count: 1 },
  { nomeVul: "Coqueiro", nomeSci: "Cocos nucifera", count: 1 },
  { nomeVul: "Corrente-de-ouro", nomeSci: "Laburnum anagyrioides", count: 1 },
  { nomeVul: "Cutite", nomeSci: "Pouteria macrophylla", count: 0 },
  { nomeVul: "Espinho Branco", nomeSci: "Craetaegus monogyna", count: 1 },
  { nomeVul: "Faia Americana", nomeSci: "Fagus americana", count: 1 },
  { nomeVul: "Faia Cobre", nomeSci: "Fagus sylvantica", count: 1 },
  { nomeVul: "Faia do Oriente", nomeSci: "Fagus orientalis", count: 1 },
  { nomeVul: "Faia Japonesa", nomeSci: "Fagus crenata f. grandifolia (syn. Americana)", count: 1 },
  { nomeVul: "Faia Roxa", nomeSci: "Fagus silvatica f. purpurea", count: 1 },
  { nomeVul: "Faia", nomeSci: "Fagus sp.", count: 1 },
  { nomeVul: "Falso Castanho Japon\xEAs", nomeSci: "Aesculus turbinata", count: 1 },
  { nomeVul: "Faveiro", nomeSci: "Albizia lebbeck", count: 1 },
  { nomeVul: "Feixe Branco", nomeSci: "Sorbus aria", count: 1 },
  { nomeVul: "Flamboyant", nomeSci: "Delonix regia", count: 1 },
  { nomeVul: "Fortunela", nomeSci: "Fortunella spp.", count: 2 },
  { nomeVul: "Freixo (F.bungeana)", nomeSci: "Fraxinus bungeana", count: 1 },
  { nomeVul: "Freixo (F.excelsior)", nomeSci: "Fraxinus excelsior", count: 1 },
  { nomeVul: "Fruta P\xE3o", nomeSci: "Artocarpus altilis", count: 1 },
  { nomeVul: "Gafanhoto Preto", nomeSci: "Robinia pseudoacacia", count: 1 },
  { nomeVul: "Goiaba", nomeSci: "Psidium guajava", count: 1 },
  { nomeVul: "Goiaba-ara\xE7\xE1", nomeSci: "Psidium guineense", count: 0 },
  { nomeVul: "Goma Preta", nomeSci: "Nyssa sylvatica", count: 1 },
  { nomeVul: "Gomuto", nomeSci: "Arenga pinnata", count: 1 },
  { nomeVul: "Gr\xE3o Amargo", nomeSci: "Prunus virginiana", count: 1 },
  { nomeVul: "Helic\xF4nia", nomeSci: "Heliconia spp.", count: 2 },
  { nomeVul: "Jaca", nomeSci: "Artocarpus integrifolia", count: 1 },
  { nomeVul: "Jambo D'\xE1gua", nomeSci: "Syzygium aqueum", count: 1 },
  { nomeVul: "Jambo Amarelo", nomeSci: "Syzygium jambos", count: 1 },
  { nomeVul: "Jambo Branco (S.aqueum)", nomeSci: "Syzygium aqueum", count: 1 },
  { nomeVul: "Jambo Branco (S.samarangense)", nomeSci: "Syzygium samarangense", count: 1 },
  { nomeVul: "Jambo Rosa (S. jambos)", nomeSci: "Syzygium jambos", count: 1 },
  { nomeVul: "Jambo Rosa (S. samarangese)", nomeSci: "Syzygium samarangense", count: 1 },
  { nomeVul: "Jambo Vermelho", nomeSci: "Syzygium malaccense", count: 1 },
  { nomeVul: "Jambosa", nomeSci: "Syzygium aqueum", count: 1 },
  { nomeVul: "Juglans", nomeSci: "Juglans sp.", count: 1 },
  { nomeVul: "Jujuba (Z. jujuba)", nomeSci: "Ziziphus jujuba", count: 1 },
  { nomeVul: "Jujuba (Z. mauritiana)", nomeSci: "Ziziphus mauritiana", count: 1 },
  { nomeVul: "Jujuba Chinesa", nomeSci: "Ziziphus jujuba", count: 1 },
  { nomeVul: "Jurema", nomeSci: "Acacia spp.", count: 2 },
  { nomeVul: "Karamu", nomeSci: "Coprosma lucida", count: 1 },
  { nomeVul: "Kowhai", nomeSci: "Sophora microphylla", count: 1 },
  { nomeVul: "Laranja Azeda", nomeSci: "Citrus aurantium", count: 1 },
  { nomeVul: "Laranja Caipira", nomeSci: "Citrus aurantium", count: 1 },
  { nomeVul: "Laranja da Terra", nomeSci: "Citrus aurantium", count: 1 },
  { nomeVul: "Laranja Doce", nomeSci: "Citrus sinensis", count: 2 },
  { nomeVul: "Laranja", nomeSci: "Citrus sinensis", count: 2 },
  { nomeVul: "Licania", nomeSci: "Licania sp.", count: 0 },
  { nomeVul: "Lim\xE3o Cayena", nomeSci: "Averrhoa bilimbi", count: 1 },
  { nomeVul: "Linda-dos-jardins", nomeSci: "Rhus typhina", count: 1 },
  { nomeVul: "Louro Calif\xF3rnia", nomeSci: "Umbelluraria californica", count: 1 },
  { nomeVul: "Ma\xE7\xE3 (M. communis)", nomeSci: "Malus communis", count: 1 },
  { nomeVul: "Ma\xE7\xE3 (M. pumila var domestica)", nomeSci: "Malus pumila var domestica", count: 1 },
  { nomeVul: "Ma\xE7\xE3 (M. pumila)", nomeSci: "Malus pumila", count: 1 },
  { nomeVul: "Ma\xE7\xE3 (M. x domestica)", nomeSci: "Malus x domestica", count: 1 },
  { nomeVul: "Ma\xE7\xE3 (Pyrus malus)", nomeSci: "Pyrus malus", count: 1 },
  { nomeVul: "Ma\xE7\xE3 Silvestre", nomeSci: "Malus sylvestris", count: 1 },
  { nomeVul: "Ma\xE7a", nomeSci: "Malus sp.", count: 1 },
  { nomeVul: "Ma\xE7\xE3-de-pobre ", nomeSci: "Ziziphus mauritiana", count: 1 },
  { nomeVul: "Ma\xE7aranduba", nomeSci: "Manilkara zapota", count: 1 },
  { nomeVul: "Manchu Cinza", nomeSci: "Fraxinus mandshurica", count: 1 },
  { nomeVul: "Mandarina,", nomeSci: "Citrus reticulata", count: 1 },
  { nomeVul: "Mandioca", nomeSci: "Manihot esculenta", count: 1 },
  { nomeVul: "Manga", nomeSci: "Mangifera indica", count: 2 },
  { nomeVul: "Mararaju", nomeSci: "Manilkara zapota", count: 1 },
  { nomeVul: "Mexerica", nomeSci: "Citrus reticulata", count: 1 },
  { nomeVul: "Mogno Indiano Ocidental", nomeSci: "Swietenia mahagoni", count: 1 },
  { nomeVul: "Mogno", nomeSci: "Switenia macrophyla", count: 1 },
  { nomeVul: "Murici ou Muruci", nomeSci: "Bysonima crassifolia", count: 0 },
  { nomeVul: "Murta", nomeSci: "Murraya paniculata", count: 1 },
  { nomeVul: "Nespereira", nomeSci: "Eriobotrya japonica", count: 1 },
  { nomeVul: "Nim", nomeSci: "Azadirachta indica", count: 1 },
  { nomeVul: "Nogueira Amarga Casca de Pel\xFAcia", nomeSci: "Carya ovata", count: 1 },
  { nomeVul: "Nogueira Amarga Cora\xE7\xE3o Branco", nomeSci: "Carya tomentosa", count: 1 },
  { nomeVul: "Nogueira Amarga de Porco", nomeSci: "Carya glabra", count: 1 },
  { nomeVul: "Nogueira Amarga spp", nomeSci: "Carya spp.", count: 0 },
  { nomeVul: "Nogueira Amarga", nomeSci: "Carya cordiformis", count: 2 },
  { nomeVul: "Nogueira Branca", nomeSci: "Juglans cinerea", count: 1 },
  { nomeVul: "Nogueira Comum", nomeSci: "Juglans regia", count: 1 },
  { nomeVul: "Nogueira europeia", nomeSci: "Juglans regia", count: 1 },
  { nomeVul: "Nogueira Pec\xE3", nomeSci: "Carya illinoensis", count: 1 },
  { nomeVul: "Nogueira Preta", nomeSci: "Juglans nigra", count: 1 },
  { nomeVul: "Nogueira", nomeSci: "Juglans sp.", count: 1 },
  { nomeVul: "Noruega Abeto", nomeSci: "Picea abies", count: 1 },
  { nomeVul: "Olmo Americano", nomeSci: "Ulmus americana", count: 1 },
  { nomeVul: "Olmo Escoc\xEAs", nomeSci: "Ulmus glabra (syn. montana)", count: 1 },
  { nomeVul: "Olmo", nomeSci: "Ulmus sp.", count: 1 },
  { nomeVul: "Padreiro", nomeSci: "Acer pseudoplatanus", count: 1 },
  { nomeVul: "Palma forrageira", nomeSci: "Opuntia cochenillifera", count: 1 },
  { nomeVul: "Pau Cachorro do Pac\xEDfico", nomeSci: "Cornus muttallii", count: 1 },
  { nomeVul: "Pau Cachorro", nomeSci: "Cornus sp.", count: 1 },
  { nomeVul: "Pera Asi\xE1tica", nomeSci: "Pyrus pyrifolia", count: 1 },
  { nomeVul: "Pera Nashi", nomeSci: "Pyrus pyrifolia", count: 1 },
  { nomeVul: "Pereira Europeia", nomeSci: "Pyrus communis", count: 1 },
  { nomeVul: "Pereira Japonesa", nomeSci: "Pyrus pyrifolia var culta", count: 1 },
  { nomeVul: "Pimenta Picante", nomeSci: "Capsicum annuum", count: 1 },
  { nomeVul: "Pimenta-de-Cheiro", nomeSci: "Capsicum chinense", count: 0 },
  { nomeVul: "Pimenta-do-diabo", nomeSci: "Capsicum annuum", count: 1 },
  { nomeVul: "Pitanga Vermelha", nomeSci: "Eugenia uniflora", count: 1 },
  { nomeVul: "Pl\xE1tano Oriental", nomeSci: "Platanus orientalis", count: 1 },
  { nomeVul: "Pl\xE1tano", nomeSci: "Platanus orientalis", count: 1 },
  { nomeVul: "Pomelo", nomeSci: "Citrus paradisi", count: 1 },
  { nomeVul: "Poncirus", nomeSci: "Poncirus spp.", count: 2 },
  { nomeVul: "Ponkan", nomeSci: "Citrus reticulata", count: 1 },
  { nomeVul: "Ribes", nomeSci: "Ribes sp.", count: 1 },
  { nomeVul: "Rosa", nomeSci: "Rosa spp.", count: 1 },
  { nomeVul: "Rustifina Rus", nomeSci: "Rhus typhina", count: 1 },
  { nomeVul: "Salgueiro Branco", nomeSci: "Salix alba", count: 1 },
  { nomeVul: "Salgueiro Cinza", nomeSci: "Salix cinerea", count: 1 },
  { nomeVul: "Salgueiro Dourado", nomeSci: "Salix alba var Vitelina", count: 1 },
  { nomeVul: "Salgueiro Preto", nomeSci: "Salix nigricans", count: 1 },
  { nomeVul: "Salgueiro P\xFArpura", nomeSci: "Salix purpurea", count: 1 },
  { nomeVul: "Salgueiro Velho Mundo", nomeSci: "Salix amygdalina", count: 1 },
  { nomeVul: "Salgueiro-folha-de-p\xEAssego", nomeSci: "Salix amygdaloides", count: 1 },
  { nomeVul: "Salgueiro-taco-de-cr\xEDquete", nomeSci: "Salix alba L. Coerulea", count: 1 },
  { nomeVul: "Salix", nomeSci: "Salix spp.", count: 1 },
  { nomeVul: "Sanguinho", nomeSci: "Frangula almus", count: 1 },
  { nomeVul: "Sapoti", nomeSci: "Manilkara zapota", count: 1 },
  { nomeVul: "Sapotilha", nomeSci: "Manilkara zapota", count: 1 },
  { nomeVul: "Seringueira", nomeSci: "Hevea brasiliensis", count: 1 },
  { nomeVul: "Sete Copas", nomeSci: "Terminalia catappa", count: 1 },
  { nomeVul: "S\xF3fora", nomeSci: "Sophora microphylla", count: 1 },
  { nomeVul: "Sorgo", nomeSci: "Sorghum bicolor", count: 1 },
  { nomeVul: "Sorva (S. domestica)", nomeSci: "Sorbus domestica", count: 1 },
  { nomeVul: "Sorva", nomeSci: "Sorbus sp.", count: 1 },
  { nomeVul: "Sumac Staghorn", nomeSci: "Rhus typhina", count: 1 },
  { nomeVul: "Tangerina", nomeSci: "Citrus reticulata", count: 1 },
  { nomeVul: "Tapereb\xE1 (S. lutea)", nomeSci: "Spondias lutea", count: 1 },
  { nomeVul: "Tapereb\xE1 (S. mombin)", nomeSci: "Spondias mombin", count: 1 },
  { nomeVul: "Teca", nomeSci: "Tectona grandis", count: 1 },
  { nomeVul: "Teja", nomeSci: "Tilia cordata", count: 1 },
  { nomeVul: "Tejo", nomeSci: "Tilia cordata", count: 1 },
  { nomeVul: "Tella", nomeSci: "Tilia cordata", count: 1 },
  { nomeVul: "Texa", nomeSci: "Tilia cordata", count: 1 },
  { nomeVul: "Tilha", nomeSci: "Tilia cordata", count: 1 },
  { nomeVul: "T\xEDlia", nomeSci: "Tilia sp.", count: 1 },
  { nomeVul: "Tillera", nomeSci: "Tilia cordata", count: 1 },
  { nomeVul: "Tilo", nomeSci: "Tilia americana", count: 1 },
  { nomeVul: "Tomate", nomeSci: "Licopersicum esculentum", count: 1 },
  { nomeVul: "Toranja", nomeSci: "Citrus paradisi", count: 1 },
  { nomeVul: "Tramazeira", nomeSci: "Sorbus aucuparia", count: 1 },
  { nomeVul: "Tulipeiro", nomeSci: "Liriodendron tulipifera", count: 1 },
  { nomeVul: "Tupelo", nomeSci: "Nyssa sylvatica", count: 1 },
  { nomeVul: "Ulmeiro", nomeSci: "Ulmus sp.", count: 1 },
  { nomeVul: "Unha-de-gato", nomeSci: "Acacia spp.", count: 2 },
  { nomeVul: "Uva", nomeSci: "Vitis spp. e seus h\xEDbridos", count: 1 },
  { nomeVul: "Videira e seus h\xEDbridos", nomeSci: "Vitis spp. e seus h\xEDbridos", count: 1 },
  { nomeVul: "Vimeiro P\xFArpura", nomeSci: "Salix purpurea", count: 1 },
  { nomeVul: "Viola", nomeSci: "Viola sp.", count: 1 }
];

// src/estados.ts
var estados = [
  { estado: "", UF: "" },
  { estado: "Acre", UF: "AC" },
  { estado: "Alagoas", UF: "AL" },
  { estado: "Amazonas", UF: "AM" },
  { estado: "Amap\xE1", UF: "AP" },
  { estado: "Bahia", UF: "BA" },
  { estado: "Cear\xE1", UF: "CE" },
  { estado: "Distrito Federal", UF: "DF" },
  { estado: "Espirito Santo", UF: "ES" },
  { estado: "Goi\xE1s", UF: "GO" },
  { estado: "Maranh\xE3o", UF: "MA" },
  { estado: "Minas Gerais", UF: "MG" },
  { estado: "Mato Grosso do Sul", UF: "MS" },
  { estado: "Mato Grosso", UF: "MT" },
  { estado: "Par\xE1", UF: "PA" },
  { estado: "Para\xEDba", UF: "PB" },
  { estado: "Pernambuco", UF: "PE" },
  { estado: "Piau\xED", UF: "PI" },
  { estado: "Paran\xE1", UF: "PR" },
  { estado: "Rio de janeiro", UF: "RJ" },
  { estado: "Rio Grande do Norte", UF: "RN" },
  { estado: "Rond\xF4nia", UF: "RO" },
  { estado: "Roraima", UF: "RR" },
  { estado: "Rio Grande do Sul", UF: "RS" },
  { estado: "Santa Catarina", UF: "SC" },
  { estado: "Sergipe", UF: "SE" },
  { estado: "S\xE3o Paulo", UF: "SP" },
  { estado: "Tocantins", UF: "TO" }
];

// src/store.ts
var Store = class {
  constructor() {
    this.dbRegras = regras;
    this.dbHospedeiros = hospedeiros;
    this.dbPragas = pragas;
    this.estados = estados;
    this.db = this.dbRegras.map((regra) => ({
      ...this.dbPragas.find((item) => item.prag === regra.prag),
      ...regra
    }));
    this.dados = { hospSci: "", hospVul: "", prod: "", orig: "", dest: "" };
  }
  get hospedeirosPragas() {
    return this.dbPragas.flatMap((praga) => praga.hosp);
  }
  get hospedeirosRegulamentados() {
    return this.dbHospedeiros.filter(
      (hospedeiro) => this.hospedeirosPragas.includes(hospedeiro.nomeSci)
    );
  }
  get listaNomesSci() {
    return this.hospedeirosRegulamentados.map((v) => v.nomeSci).filter((i, x, a) => a.indexOf(i) === x).sort((a, b) => a.localeCompare(b));
  }
  get listaNomesVul() {
    return this.hospedeirosRegulamentados.map((v) => v.nomeVul).filter((i, x, a) => a.indexOf(i) === x).sort((a, b) => a.localeCompare(b));
  }
  get empty() {
    return this.result.length === 0;
  }
  get origem() {
    return this.estados.filter((estado) => estado.UF !== this.dados.dest || estado.UF === "");
  }
  get destino() {
    return this.estados.filter((estado) => estado.UF !== this.dados.orig || estado.UF === "");
  }
  get gender() {
    return this.dados.hospSci.split(" ")[0];
  }
  get completed() {
    return Boolean(this.dados.hospSci) && Boolean(this.dados.hospVul) && Boolean(this.dados.prod) && Boolean(this.dados.orig) && Boolean(this.dados.dest);
  }
  get partes() {
    return this.db.filter(
      (exigen) => exigen.hosp.includes(this.dados.hospSci) || exigen.hosp.includes(`${this.gender} sp.`) || exigen.hosp.includes(`${this.gender} spp.`)
    ).flatMap((v) => v.part).filter((i, x, a) => a.indexOf(i) === x).concat([""]).sort((a, b) => a.localeCompare(b));
  }
  get result() {
    return this.db.filter((exigen) => {
      return (exigen.hosp.includes(this.dados.hospSci) || exigen.hosp.includes(`${this.gender} sp.`) || exigen.hosp.includes(`${this.gender} spp.`)) && exigen.orig.includes(this.dados.orig) && exigen.dest.includes(this.dados.dest) && exigen.part.includes(this.dados.prod);
    });
  }
  handleChanges(event) {
    console.log(this.completed);
    const target = event.currentTarget;
    switch (target.name) {
      case "hospSci":
        const hospVulg = this.dbHospedeiros.find((hosp) => hosp.nomeSci === target.value);
        this.dados.hospVul = hospVulg ? hospVulg.nomeVul : "";
        break;
      case "hospVul":
        const hospSci = this.dbHospedeiros.find((hosp) => hosp.nomeVul === target.value);
        this.dados.hospSci = hospSci ? hospSci.nomeSci : "";
        break;
      default:
        break;
    }
    this.dados[target.name] = target.value;
    console.log(this.dados);
  }
  clean() {
    this.dados.hospSci = "";
    this.dados.hospVul = "";
    this.dados.prod = "";
    this.dados.orig = "";
    this.dados.dest = "";
  }
};
var store = proxy(new Store());

// src/store.test.ts
var d3 = __toESM(require_d3_array());
var import_node_test = require("node:test");
var import_node_assert = __toESM(require("node:assert"));
var estadosSemAC = [
  { estado: "", UF: "" },
  //{estado: 'Acre', UF: 'AC'},
  { estado: "Alagoas", UF: "AL" },
  { estado: "Amazonas", UF: "AM" },
  { estado: "Amap\xE1", UF: "AP" },
  { estado: "Bahia", UF: "BA" },
  { estado: "Cear\xE1", UF: "CE" },
  { estado: "Distrito Federal", UF: "DF" },
  { estado: "Espirito Santo", UF: "ES" },
  { estado: "Goi\xE1s", UF: "GO" },
  { estado: "Maranh\xE3o", UF: "MA" },
  { estado: "Minas Gerais", UF: "MG" },
  { estado: "Mato Grosso do Sul", UF: "MS" },
  { estado: "Mato Grosso", UF: "MT" },
  { estado: "Par\xE1", UF: "PA" },
  { estado: "Para\xEDba", UF: "PB" },
  { estado: "Pernambuco", UF: "PE" },
  { estado: "Piau\xED", UF: "PI" },
  { estado: "Paran\xE1", UF: "PR" },
  { estado: "Rio de janeiro", UF: "RJ" },
  { estado: "Rio Grande do Norte", UF: "RN" },
  { estado: "Rond\xF4nia", UF: "RO" },
  { estado: "Roraima", UF: "RR" },
  { estado: "Rio Grande do Sul", UF: "RS" },
  { estado: "Santa Catarina", UF: "SC" },
  { estado: "Sergipe", UF: "SE" },
  { estado: "S\xE3o Paulo", UF: "SP" },
  { estado: "Tocantins", UF: "TO" }
];
(0, import_node_test.describe)("Store origem e destino", () => {
  (0, import_node_test.it)("origem AC", () => {
    store.dados.orig = "AC";
    import_node_assert.default.deepEqual(store.destino, estadosSemAC);
  });
  (0, import_node_test.it)("origem MT", () => {
    store.dados.orig = "MT";
    import_node_assert.default.deepEqual(store.destino, estadosSemAC);
  });
  (0, import_node_test.it)("destino AC", () => {
    store.dados.dest = "AC";
    import_node_assert.default.deepEqual(store.origem, estadosSemAC);
  });
  (0, import_node_test.it)("destino MT", () => {
    store.dados.dest = "MT";
    import_node_assert.default.deepEqual(store.origem, estadosSemAC);
  });
});
(0, import_node_test.describe)("Store hospedeiros nomeSci", () => {
  (0, import_node_test.it)("unique values Nome Vulgar", () => {
    import_node_assert.default.strictEqual(hospedeiros.map((v) => v.nomeVul).filter((i, x, a) => a.indexOf(i) !== x), []);
    import_node_assert.default.strictEqual(
      hospedeiros.map((v) => v.nomeVul).filter((i, x, a) => a.indexOf(i) === x).length,
      hospedeiros.length
    );
  });
});
(0, import_node_test.describe)("Store partes", () => {
  (0, import_node_test.it)("de Acerola", () => {
    debugger;
    store.dados.hospSci = "Malpighia spp.";
    import_node_assert.default.strictEqual(store.partes, ["", "frutos"]);
  });
  (0, import_node_test.it)("de Banana", () => {
    store.dados.hospSci = "Musa spp.";
    import_node_assert.default.strictEqual(store.partes, [
      "",
      "flores",
      "frutos",
      "material para pesquisa",
      "mudas",
      "rizomas"
    ]);
  });
  (0, import_node_test.it)("de Citrus", () => {
    store.dados.hospSci = "Citrus spp.";
    import_node_assert.default.strictEqual(store.partes, [
      "",
      "caules",
      "estacas",
      "flores",
      "folhas",
      "frutos",
      "gemas",
      "material de propaga\xE7\xE3o",
      "mudas",
      "plantas",
      "ra\xEDzes",
      "ramas",
      "ramos"
    ]);
  });
});
(0, import_node_test.describe)("Store: gender", () => {
  (0, import_node_test.it)("Acacia sp.", () => {
    store.dados.hospSci = "Acacia sp.";
    import_node_assert.default.strictEqual(store.gender, "Acacia");
  });
  (0, import_node_test.it)("Acer macrophyllum", () => {
    store.dados.hospSci = "Acer macrophyllum";
    import_node_assert.default.strictEqual(store.gender, "Acer");
  });
  (0, import_node_test.it)("Betula lutea (synonym: alleghaniensis) ", () => {
    store.dados.hospSci = "Betula lutea (synonym: alleghaniensis)";
    import_node_assert.default.strictEqual(store.gender, "Betula");
  });
});
(0, import_node_test.describe)("Store filtro geral", () => {
  (0, import_node_test.before)(() => {
    store.dados.hospSci = "Musa spp.";
    store.dados.prod = "frutos";
    store.dados.orig = "MG";
    store.dados.dest = "MT";
  });
  (0, import_node_test.it)("Musa spp. count", () => {
    import_node_assert.default.strictEqual(store.result.length, 3);
  });
  (0, import_node_test.it)("Musa spp. legis", () => {
    import_node_assert.default.strictEqual(store.result.flatMap((v) => v.files).map((v) => v.link), [
      "IN17-2009.pdf",
      "IN17-2005.pdf",
      "IN17-2005.pdf"
    ]);
  });
  (0, import_node_test.it)("Musa spp. pragas", () => {
    import_node_assert.default.strictEqual(store.result.map((v) => v.pragc), [
      "MOKO-DA-BANANEIRA",
      "SIGATOKA NEGRA",
      "SIGATOKA NEGRA"
    ]);
  });
  (0, import_node_test.it)("Eugenia uniflora", () => {
    store.dados.hospSci = "Eugenia uniflora";
    store.dados.prod = "frutos";
    store.dados.orig = "PI";
    store.dados.dest = "DF";
    import_node_assert.default.strictEqual(store.result.length, 1);
  });
  (0, import_node_test.it)("Malus spp.", () => {
    store.dados.hospSci = "Malus spp.";
    store.dados.prod = "frutos";
    store.dados.orig = "SC";
    store.dados.dest = "MT";
    import_node_assert.default.strictEqual(store.result.length, 1);
    import_node_assert.default.strictEqual(store.result.flatMap((v) => v.files).map((v) => v.link), ["IN20-2013.pdf"]);
    import_node_assert.default.strictEqual(store.result.map((v) => v.pragc), ["CANCRO EUROPEU DAS POM\xC1CEAS"]);
  });
  (0, import_node_test.it)("Citrus sinensis sementes SP->ES", () => {
    store.dados.hospSci = "Citrus sinensis";
    store.dados.prod = "sementes";
    store.dados.orig = "SP";
    store.dados.dest = "ES";
    import_node_assert.default.strictEqual(store.result.length, 0);
  });
  (0, import_node_test.it)("Citrus sinensis sementes RS->ES", () => {
    store.dados.hospSci = "Citrus sinensis";
    store.dados.prod = "material de propaga\xE7\xE3o";
    store.dados.orig = "RS";
    store.dados.dest = "ES";
    import_node_assert.default.strictEqual(store.result.length, 2);
    import_node_assert.default.strictEqual(store.result.flatMap((v) => v.files).map((v) => v.link), [
      "IN03-2008.pdf",
      "IN21-2018.pdf"
    ]);
    import_node_assert.default.strictEqual(store.result.map((v) => v.pragc), ["PINTA-PRETA-DOS-CITROS", "CANCRO C\xCDTRICO"]);
  });
  (0, import_node_test.it)("Citrus sinensis mudas SP->ES", () => {
    store.dados.hospSci = "Citrus sinensis";
    store.dados.prod = "mudas";
    store.dados.orig = "SP";
    store.dados.dest = "ES";
    import_node_assert.default.strictEqual(store.result.length, 3);
    import_node_assert.default.strictEqual(store.result.flatMap((v) => v.files).map((v) => v.link), [
      "IN53-2008.pdf",
      "IN03-2008.pdf",
      "IN21-2018.pdf"
    ]);
    import_node_assert.default.strictEqual(store.result.map((v) => v.pragc), [
      "GREENING",
      "PINTA-PRETA-DOS-CITROS",
      "CANCRO C\xCDTRICO"
    ]);
    import_node_assert.default.deepStrictEqual(store.result, snap);
  });
});
(0, import_node_test.describe)("Sync between NomeVulg and NomeSci", () => {
  (0, import_node_test.it)("should define NomeVulg based in NomeSci", () => {
    const e2 = { currentTarget: { name: "hospSci", value: "Musa spp." } };
    store.handleChanges(e2);
    import_node_assert.default.strictEqual(store.dados.hospVul, "Banana");
  });
  (0, import_node_test.it)("should define NomeSci  based in NomeVulg ", () => {
    store.handleChanges({ currentTarget: { name: "hospVul", value: "Banana" } });
    import_node_assert.default.strictEqual(store.dados.hospSci, "Musa spp.");
  });
});
(0, import_node_test.test)("Check normalization of db ", () => {
  regras.map((regra) => {
    const praga = pragas.find((item) => item.prag === regra.prag);
    if (!praga) {
      import_node_assert.default.strictEqual(regra.prag, praga);
    }
    return regra;
  });
});
(0, import_node_test.test)("duplicates nomeVul", () => {
  const countDupli = Array.from(
    d3.rollup(
      hospedeiros,
      (v) => ({ countNomeVulg: v.length }),
      (k) => k.nomeVul
    ),
    ([key, values]) => ({ nomeVulg: key, ...values })
  );
  import_node_assert.default.strictEqual(countDupli.filter((v) => !v.countNomeVulg), []);
});
(0, import_node_test.test)("should join Pragas and Regras", () => {
  regras.forEach((regra) => {
    const praga = pragas.find((item) => item.prag === regra.prag);
    import_node_assert.default.notStrictEqual(praga, void 0);
  });
});
var snap = [
  {
    "desc": "DE UF com ocorr\xEAncia de Greening PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Greening",
    "dest": [
      "AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MS",
      "MT",
      "PA",
      "PB",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RO",
      "RR",
      "RS",
      "SC",
      "SE",
      "TO"
    ],
    "exig": [
      "PTV;\n Obs.: Partida apreendida pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em \ndesacordo com o previsto nesta Instru\xE7\xE3o Normativa, ser\xE1 sumariamente destru\xEDda, n\xE3o cabendo ao infrator qualquer tipo de indeniza\xE7\xE3o, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o estadual e federal de defesa sanit\xE1ria vegetal, conforme o art. 5\xBA, da Instru\xE7\xE3o Normativa MAPA n\xBA. 53, de 16 de outubro de 2010."
    ],
    "files": [
      {
        "leg": "Instru\xE7\xE3o Normativa n\xBA 53, de 16 de outubro de 2008",
        "link": "IN53-2008.pdf"
      }
    ],
    "hosp": [
      "Citrus spp.",
      "Fortunella spp.",
      "Poncirus spp.",
      "Murraya paniculata"
    ],
    "orig": [
      "MG",
      "PR",
      "SP"
    ],
    "part": [
      "mudas",
      "estacas",
      "gemas",
      "ramas",
      "ra\xEDzes",
      "material de propaga\xE7\xE3o",
      "plantas"
    ],
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "pragc": "GREENING"
  },
  {
    "desc": "DE UF com ocorr\xEAncia de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorr\xEAncia de Pinta-preta-dos-citros",
    "dest": [
      "AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MG",
      "MS",
      "MT",
      "PA",
      "PB",
      "PE",
      "PI",
      "PR",
      "RN",
      "RO",
      "RR",
      "RS",
      "SC",
      "SE",
      "SP",
      "TO"
    ],
    "exig": [
      "PTV;",
      "A partida deve ser transportada em ve\xEDculos fechados ou totalmente protegidos por lona."
    ],
    "files": [
      {
        "leg": "Instru\xE7\xE3o Normativa MAPA n\xBA 3, de 8 de janeiro de 2008",
        "link": "IN03-2008.pdf"
      }
    ],
    "hosp": [
      "Citrus spp."
    ],
    "orig": [
      "AM",
      "ES",
      "MT",
      "MS",
      "MG",
      "PE",
      "PR",
      "RJ",
      "RS",
      "SC",
      "SP",
      "BA",
      "GO"
    ],
    "part": [
      "mudas",
      "estacas",
      "gemas",
      "material de propaga\xE7\xE3o",
      "plantas"
    ],
    "prag": "Phyllosticta citricarpa (Guinardia citricarpa)",
    "pragc": "PINTA-PRETA-DOS-CITROS"
  },
  {
    "desc": "DE \xC1rea de Sistema de Manejo de Risco (SMR) de Cancro C\xEDtrico PARA qualquer UF",
    "dest": [
      "AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MG",
      "MS",
      "MT",
      "PA",
      "PB",
      "PE",
      "PI",
      "PR",
      "RJ",
      "RN",
      "RO",
      "RR",
      "RS",
      "SC",
      "SE",
      "SP",
      "TO"
    ],
    "exig": [
      'PTV com a seguinte DA: \\"O material de propaga\xE7\xE3o \xE9 proveniente de \xC1rea sob SMR, se encontra livre de Cancro C\xEDtrico (Xanthomonas citri subsp. citri) e foi produzido conforme preconiza a legisla\xE7\xE3o espec\xEDfica em vigor\\".'
    ],
    "files": [
      {
        "leg": "Instru\xE7\xE3o Normativa n\xBA 21, de 25 de abril de 2018",
        "link": "IN21-2018.pdf"
      }
    ],
    "hosp": [
      "Citrus spp.",
      "Fortunella spp.",
      "Poncirus spp."
    ],
    "orig": [
      "MT",
      "MS",
      "RS",
      "SP",
      "SC"
    ],
    "part": [
      "material de propaga\xE7\xE3o",
      "mudas",
      "estacas",
      "gemas",
      "plantas"
    ],
    "prag": "Xanthomonas citri subsp. citri",
    "pragc": "CANCRO C\xCDTRICO"
  }
];
