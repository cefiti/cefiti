import { spy, observable, computed, Reaction, runInAction, transaction, getDependencyTree } from './mobx.js';
import { r as react_18, a as react_17, b as react_15, c as react_11, d as react_9, e as react_13, f as react_8, g as react_6, h as react } from './common/index-92ad10f6.js';

if (!react_18) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!spy) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

function useObservable(initialValue) {
    var observableRef = react_17(null);
    if (!observableRef.current) {
        observableRef.current = observable(initialValue);
    }
    return observableRef.current;
}

function useComputed(func, inputs) {
    if (inputs === void 0) { inputs = []; }
    var computed$1 = react_15(function () { return computed(func); }, inputs);
    return computed$1.get();
}

var doNothingDisposer = function () {
    // empty
};
/**
 * Adds an observable effect (reaction, autorun, or anything else that returns a disposer) that will be registered upon component creation and disposed upon unmounting.
 * Returns the generated disposer for early disposal.
 *
 * @export
 * @template D
 * @param {() => D} disposerGenerator A function that returns the disposer of the wanted effect.
 * @param {ReadonlyArray<any>} [inputs=[]] If you want the effect to be automatically re-created when some variable(s) are changed then pass them in this array.
 * @returns {D}
 */
function useDisposable(disposerGenerator, inputs) {
    if (inputs === void 0) { inputs = []; }
    var disposerRef = react_17(null);
    var earlyDisposedRef = react_17(false);
    react_11(function () {
        return lazyCreateDisposer(false);
    }, inputs);
    function lazyCreateDisposer(earlyDisposal) {
        // ensure that we won't create a new disposer if it was early disposed
        if (earlyDisposedRef.current) {
            return doNothingDisposer;
        }
        if (!disposerRef.current) {
            var newDisposer = disposerGenerator();
            if (typeof newDisposer !== "function") {
                var error = new Error("generated disposer must be a function");
                {
                    // tslint:disable-next-line:no-console
                    console.error(error);
                    return doNothingDisposer;
                }
            }
            disposerRef.current = newDisposer;
        }
        return function () {
            if (disposerRef.current) {
                disposerRef.current();
                disposerRef.current = null;
            }
            if (earlyDisposal) {
                earlyDisposedRef.current = true;
            }
        };
    }
    return lazyCreateDisposer(true);
}

var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function printDebugValue(v) {
    if (!v.current) {
        return "<unknown>";
    }
    return getDependencyTree(v.current);
}

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    react_11(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read(react_18(0), 2), setTick = _a[1];
    var update = react_9(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}

var EMPTY_OBJECT = {};
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
    var forceUpdate = wantedForceUpdateHook();
    var reaction = react_17(null);
    if (!reaction.current) {
        reaction.current = new Reaction("observer(" + baseComponentName + ")", function () {
            forceUpdate();
        });
    }
    var dispose = function () {
        if (reaction.current && !reaction.current.isDisposed) {
            reaction.current.dispose();
        }
    };
    react_13(reaction, printDebugValue);
    useUnmount(function () {
        dispose();
    });
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.current.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        dispose();
        throw exception; // re-throw any exceptions catched during rendering
    }
    return rendering;
}

// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return useObserver(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not intested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = react_8(react_6(wrappedComponent));
    }
    else {
        memoComponent = react_8(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (base.hasOwnProperty(key) && !hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";
function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

function useAsObservableSourceInternal(current, usedByLocalStore) {
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    var _a = __read(react.useState(function () { return observable(current, {}, { deep: false }); }), 1), res = _a[0];
    runInAction(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}

function useLocalStore(initializer, current) {
    var source = useAsObservableSourceInternal(current, true);
    return react.useState(function () {
        var local = observable(initializer(source));
        if (isPlainObject(local)) {
            runInAction(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return transaction(function () { return fn.apply(context, args); });
    };
}

export { ObserverComponent as Observer, isUsingStaticRendering, observer, useAsObservableSource, useComputed, useDisposable, useForceUpdate, useLocalStore, useObservable, useObserver, useStaticRendering };