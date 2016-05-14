/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(2);
	var store_1 = __webpack_require__(3);
	var mapa_1 = __webpack_require__(7);
	var basex_1 = __webpack_require__(8);
	var menu_1 = __webpack_require__(9);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        return (React.createElement("div", {id: "container"}, 
	            React.createElement(menu_1.default, null), 
	            React.createElement(mapa_1.default, null), 
	            React.createElement(basex_1.default, {db: this.props.store.db})));
	    };
	    return App;
	}(React.Component));
	ReactDom.render(React.createElement(App, {store: store_1.default}), document.getElementById('app'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var mobx_1 = __webpack_require__(4);
	__webpack_require__(5);
	var db_1 = __webpack_require__(6);
	mobx_1.autorun(function () { console.log('autorun'); });
	var Store = (function () {
	    function Store() {
	        this.db = db_1.db;
	        this.hospedeiros = db_1.hospedeiros;
	        this.listaNomesSci = db_1.hospedeiros.unique('nomeSci');
	        this.exibeBase = false;
	        this.exibeMapa = false;
	        this.dados = {
	            hospSci: null,
	            hospVul: null,
	            prod: null,
	            orig: null,
	            dest: null
	        };
	        this.estados = [
	            { estado: 'Acre', UF: 'AC' }, { estado: 'Alagoas', UF: 'AL' }, { estado: 'Amazonas', UF: 'AM' },
	            { estado: 'Amapá', UF: 'AP' }, { estado: 'Bahia', UF: 'BA' }, { estado: 'Ceará', UF: 'CE' },
	            { estado: 'Distrito Federal', UF: 'DF' }, { estado: 'Espirito Santo', UF: 'ES' }, { estado: 'Goiás', UF: 'GO' },
	            { estado: 'Maranhão', UF: 'MA' }, { estado: 'Minas Gerais', UF: 'MG' }, { estado: 'Mato Grosso do Sul', UF: 'MS' },
	            { estado: 'Mato Grosso', UF: 'MT' }, { estado: 'Pará', UF: 'PA' }, { estado: 'Paraíba', UF: 'PB' },
	            { estado: 'Pernanbuco', UF: 'PE' }, { estado: 'Piauí', UF: 'PI' }, { estado: 'Paraná', UF: 'PR' },
	            { estado: 'Rio de janeiro', UF: 'RJ' }, { estado: 'Rio Grande do Norte', UF: 'RN' },
	            { estado: 'Rondônia', UF: 'RO' }, { estado: 'Roraima', UF: 'RR' }, { estado: 'Rio Grande do Sul', UF: 'RS' },
	            { estado: 'Santa Catarina', UF: 'SC' }, { estado: 'Sergipe', UF: 'SE' }, { estado: 'São Paulo', UF: 'SP' },
	            { estado: 'Tocantins', UF: 'TO' }
	        ];
	    }
	    Object.defineProperty(Store.prototype, "origem", {
	        get: function () {
	            var _this = this;
	            return this.estados.filter(function (estado) { return estado.UF !== _this.dados.dest; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(Store.prototype, "destino", {
	        get: function () {
	            var _this = this;
	            return this.estados.filter(function (estado) { return estado.UF !== _this.dados.orig; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(Store.prototype, "partes", {
	        get: function () {
	            var _this = this;
	            return db_1.db
	                .filter(function (exig) { return exig.hosp.includes(_this.dados.hospSci); })
	                .by('part')
	                .flatten()
	                .unique();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Store.prototype, "gender", {
	        get: function () { return this.dados.hospSci.split(' ')[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Store.prototype, "result", {
	        get: function () {
	            var _this = this;
	            return db_1.db.filter(function (exig) {
	                return ((exig.hosp.includes(_this.dados.hospSci) ||
	                    exig.hosp.includes(_this.gender + ' sp.') ||
	                    exig.hosp.includes(_this.gender + ' spp.')) &&
	                    exig.orig.includes(_this.dados.orig) &&
	                    exig.dest.includes(_this.dados.dest) &&
	                    exig.part.includes(_this.dados.prod));
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        mobx_1.observable
	    ], Store.prototype, "exibeBase", void 0);
	    __decorate([
	        mobx_1.observable
	    ], Store.prototype, "exibeMapa", void 0);
	    __decorate([
	        mobx_1.observable
	    ], Store.prototype, "dados", void 0);
	    __decorate([
	        mobx_1.computed
	    ], Store.prototype, "origem", null);
	    __decorate([
	        mobx_1.computed
	    ], Store.prototype, "destino", null);
	    __decorate([
	        mobx_1.computed
	    ], Store.prototype, "partes", null);
	    __decorate([
	        mobx_1.computed
	    ], Store.prototype, "gender", null);
	    __decorate([
	        mobx_1.computed
	    ], Store.prototype, "result", null);
	    return Store;
	}());
	exports.store = new Store();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.store;
	/*  var normalize = function(str) {
	    return str.toLowerCase().
	               replace(/\\s/g, "").
	               replace(/[àáâãäå]/g, "a").
	               replace(/æ/g, "ae").
	               replace(/ç/g, "c").
	               replace(/[èéêë]/g, "e").
	               replace(/[ìíîï]/g, "i").
	               replace(/ñ/g, "n").
	               replace(/[òóôõö]/g, "o").
	               replace(/œ/g, "oe").
	               replace(/[ùúûü]/g, "u").
	               replace(/[ýÿ]/g, "y").
	               replace(/\\W/g, "");
	  };
	  
	  this.normalizedName = function(item) {
	    return normalize(item.name);
	  };*/ 


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	registerGlobals();
	exports._ = {
	    quickDiff: quickDiff,
	    resetGlobalState: resetGlobalState
	};
	exports.extras = {
	    allowStateChanges: allowStateChanges,
	    getDependencyTree: getDependencyTree,
	    getObserverTree: getObserverTree,
	    isComputingDerivation: isComputingDerivation,
	    resetGlobalState: resetGlobalState,
	    trackTransitions: trackTransitions
	};
	function autorun(view, scope) {
	    assertUnwrapped(view, "autorun methods cannot have modifiers");
	    invariant(typeof view === "function", "autorun expects a function");
	    invariant(view.length === 0, "autorun expects a function without arguments");
	    if (scope)
	        view = view.bind(scope);
	    var reaction = new Reaction(view.name || "Autorun", function () {
	        this.track(view);
	    });
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	exports.autorun = autorun;
	function when(predicate, effect, scope) {
	    var disposeImmediately = false;
	    var disposer = autorun(function () {
	        if (predicate.call(scope)) {
	            if (disposer)
	                disposer();
	            else
	                disposeImmediately = true;
	            effect.call(scope);
	        }
	    });
	    if (disposeImmediately)
	        disposer();
	    return disposer;
	}
	exports.when = when;
	function autorunUntil(predicate, effect, scope) {
	    deprecated("`autorunUntil` is deprecated, please use `when`.");
	    return when.apply(null, arguments);
	}
	exports.autorunUntil = autorunUntil;
	function autorunAsync(func, delay, scope) {
	    if (delay === void 0) { delay = 1; }
	    if (scope)
	        func = func.bind(scope);
	    var isScheduled = false;
	    var r = new Reaction(func.name || "AutorunAsync", function () {
	        if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                if (!r.isDisposed)
	                    r.track(func);
	            }, delay);
	        }
	    });
	    r.schedule();
	    return r.getDisposer();
	}
	exports.autorunAsync = autorunAsync;
	function computed(targetOrExpr, keyOrScope, baseDescriptor, options) {
	    if (arguments.length < 3 && typeof targetOrExpr === "function")
	        return computedExpr(targetOrExpr, keyOrScope);
	    return computedDecorator.apply(null, arguments);
	}
	exports.computed = computed;
	function computedExpr(expr, scope) {
	    var _a = getValueModeFromValue(expr, ValueMode.Recursive), mode = _a[0], value = _a[1];
	    return new ComputedValue(value, scope, mode === ValueMode.Structure, value.name || "ComputedValue");
	}
	function computedDecorator(target, key, baseDescriptor, options) {
	    if (arguments.length === 1) {
	        var options_1 = target;
	        return function (target, key, baseDescriptor) { return computedDecorator.call(null, target, key, baseDescriptor, options_1); };
	    }
	    invariant(baseDescriptor && baseDescriptor.hasOwnProperty("get"), "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'");
	    assertPropertyConfigurable(target, key);
	    var descriptor = {};
	    var getter = baseDescriptor.get;
	    invariant(typeof target === "object", "The @observable decorator can only be used on objects", key);
	    invariant(typeof getter === "function", "@observable expects a getter function if used on a property.", key);
	    invariant(!baseDescriptor.set, "@observable properties cannot have a setter.", key);
	    invariant(getter.length === 0, "@observable getter functions should not take arguments.", key);
	    descriptor.configurable = true;
	    descriptor.enumerable = false;
	    descriptor.get = function () {
	        setObservableObjectProperty(asObservableObject(this, undefined, ValueMode.Recursive), key, options && options.asStructure === true ? asStructure(getter) : getter);
	        return this[key];
	    };
	    descriptor.set = throwingComputedValueSetter;
	    if (!baseDescriptor) {
	        Object.defineProperty(target, key, descriptor);
	    }
	    else {
	        return descriptor;
	    }
	}
	function throwingComputedValueSetter() {
	    throw new Error("[ComputedValue] It is not allowed to assign new values to computed properties.");
	}
	function createTransformer(transformer, onCleanup) {
	    invariant(typeof transformer === "function" && transformer.length === 1, "createTransformer expects a function that accepts one argument");
	    var objectCache = {};
	    var resetId = globalState.resetId;
	    var Transformer = (function (_super) {
	        __extends(Transformer, _super);
	        function Transformer(sourceIdentifier, sourceObject) {
	            _super.call(this, function () { return transformer(sourceObject); }, null, false, "Transformer-" + transformer.name + "-" + sourceIdentifier);
	            this.sourceIdentifier = sourceIdentifier;
	            this.sourceObject = sourceObject;
	        }
	        Transformer.prototype.onBecomeUnobserved = function () {
	            var lastValue = this.value;
	            _super.prototype.onBecomeUnobserved.call(this);
	            delete objectCache[this.sourceIdentifier];
	            if (onCleanup)
	                onCleanup(lastValue, this.sourceObject);
	        };
	        return Transformer;
	    }(ComputedValue));
	    return function (object) {
	        if (resetId !== globalState.resetId) {
	            objectCache = {};
	            resetId = globalState.resetId;
	        }
	        var identifier = getMemoizationId(object);
	        var reactiveTransformer = objectCache[identifier];
	        if (reactiveTransformer)
	            return reactiveTransformer.get();
	        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
	        return reactiveTransformer.get();
	    };
	}
	exports.createTransformer = createTransformer;
	function getMemoizationId(object) {
	    if (object === null || typeof object !== "object")
	        throw new Error("[mobx] transform expected some kind of object, got: " + object);
	    var tid = object.$transformId;
	    if (tid === undefined) {
	        tid = getNextId();
	        Object.defineProperty(object, '$transformId', {
	            configurable: true,
	            writable: true,
	            enumerable: false,
	            value: tid
	        });
	    }
	    return tid;
	}
	function expr(expr, scope) {
	    if (!isComputingDerivation())
	        console.warn("[mobx.expr] 'expr' should only be used inside other reactive functions.");
	    return computed(expr, scope).get();
	}
	exports.expr = expr;
	function extendObservable(target) {
	    var properties = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        properties[_i - 1] = arguments[_i];
	    }
	    invariant(arguments.length >= 2, "extendObservable expected 2 or more arguments");
	    invariant(typeof target === "object", "extendObservable expects an object as first argument");
	    invariant(!(target instanceof ObservableMap), "extendObservable should not be used on maps, use map.merge instead");
	    properties.forEach(function (propSet) {
	        invariant(typeof propSet === "object", "all arguments of extendObservable should be objects");
	        extendObservableHelper(target, propSet, ValueMode.Recursive, null);
	    });
	    return target;
	}
	exports.extendObservable = extendObservable;
	function extendObservableHelper(target, properties, mode, name) {
	    var adm = asObservableObject(target, name, mode);
	    for (var key in properties)
	        if (properties.hasOwnProperty(key)) {
	            if (target === properties && !isPropertyConfigurable(target, key))
	                continue;
	            setObservableObjectProperty(adm, key, properties[key]);
	        }
	    return target;
	}
	function allowStateChanges(allowStateChanges, func) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    var res = func();
	    globalState.allowStateChanges = prev;
	    return res;
	}
	var transitionTracker = null;
	function reportTransition(node, state, changed) {
	    if (changed === void 0) { changed = false; }
	    if (transitionTracker)
	        transitionTracker.emit({
	            id: node.id,
	            name: node.name + "@" + node.id,
	            node: node, state: state, changed: changed
	        });
	}
	function getDependencyTree(thing) {
	    return nodeToDependencyTree(thing);
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        id: node.id,
	        name: node.name + "@" + node.id
	    };
	    if (node.observing && node.observing.length)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	function getObserverTree(thing) {
	    return nodeToObserverTree(thing);
	}
	function nodeToObserverTree(node) {
	    var result = {
	        id: node.id,
	        name: node.name + "@" + node.id
	    };
	    if (node.observers && node.observers.length)
	        result.observers = unique(node.observers).map(nodeToObserverTree);
	    return result;
	}
	function createConsoleReporter(extensive) {
	    var lines = [];
	    var scheduled = false;
	    return function (line) {
	        if (extensive || line.changed)
	            lines.push(line);
	        if (!scheduled) {
	            scheduled = true;
	            setTimeout(function () {
	                console[console["table"] ? "table" : "dir"](lines);
	                lines = [];
	                scheduled = false;
	            }, 1);
	        }
	    };
	}
	function trackTransitions(extensive, onReport) {
	    if (extensive === void 0) { extensive = false; }
	    if (!transitionTracker)
	        transitionTracker = new SimpleEventEmitter();
	    var reporter = onReport
	        ? function (line) {
	            if (extensive || line.changed)
	                onReport(line);
	        }
	        : createConsoleReporter(extensive);
	    var disposer = transitionTracker.on(reporter);
	    return once(function () {
	        disposer();
	        if (transitionTracker.listeners.length === 0)
	            transitionTracker = null;
	    });
	}
	function isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (value instanceof ObservableMap || value instanceof ObservableArray)
	            throw new Error("[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
	        else if (isObservableObject(value)) {
	            var o = value.$mobx;
	            return o.values && !!o.values[property];
	        }
	        return false;
	    }
	    return !!value.$mobx || value instanceof Atom || value instanceof Reaction || value instanceof ComputedValue;
	}
	exports.isObservable = isObservable;
	function observableDecorator(target, key, baseDescriptor) {
	    invariant(arguments.length >= 2 && arguments.length <= 3, "Illegal decorator config", key);
	    assertPropertyConfigurable(target, key);
	    if (baseDescriptor && baseDescriptor.hasOwnProperty("get")) {
	        deprecated("Using @observable on computed values is deprecated. Use @computed instead.");
	        return computed.apply(null, arguments);
	    }
	    var descriptor = {};
	    invariant(typeof target === "object", "The @observable decorator can only be used on objects", key);
	    descriptor.configurable = true;
	    descriptor.enumerable = true;
	    descriptor.get = function () {
	        var _this = this;
	        var baseValue = undefined;
	        if (baseDescriptor && baseDescriptor.initializer) {
	            baseValue = baseDescriptor.initializer();
	            if (typeof baseValue === "function")
	                baseValue = asReference(baseValue);
	        }
	        allowStateChanges(true, function () {
	            setObservableObjectProperty(asObservableObject(_this, undefined, ValueMode.Recursive), key, baseValue);
	        });
	        return this[key];
	    };
	    descriptor.set = function (value) {
	        setObservableObjectProperty(asObservableObject(this, undefined, ValueMode.Recursive), key, typeof value === "function" ? asReference(value) : value);
	    };
	    if (!baseDescriptor) {
	        Object.defineProperty(target, key, descriptor);
	    }
	    else {
	        return descriptor;
	    }
	}
	function observable(v, keyOrScope) {
	    if (typeof arguments[1] === "string")
	        return observableDecorator.apply(null, arguments);
	    invariant(arguments.length === 1 || arguments.length === 2, "observable expects one or two arguments");
	    if (isObservable(v))
	        return v;
	    var _a = getValueModeFromValue(v, ValueMode.Recursive), mode = _a[0], value = _a[1];
	    var sourceType = mode === ValueMode.Reference ? ValueType.Reference : getTypeOfValue(value);
	    switch (sourceType) {
	        case ValueType.Array:
	        case ValueType.PlainObject:
	            return makeChildObservable(value, mode);
	        case ValueType.Reference:
	        case ValueType.ComplexObject:
	            return new ObservableValue(value, mode);
	        case ValueType.ComplexFunction:
	            throw new Error("[mobx.observable] To be able to make a function reactive it should not have arguments. If you need an observable reference to a function, use `observable(asReference(f))`");
	        case ValueType.ViewFunction:
	            deprecated("Use `computed(expr)` instead of `observable(expr)`");
	            return computed(v, keyOrScope);
	    }
	    invariant(false, "Illegal State");
	}
	exports.observable = observable;
	var ValueType;
	(function (ValueType) {
	    ValueType[ValueType["Reference"] = 0] = "Reference";
	    ValueType[ValueType["PlainObject"] = 1] = "PlainObject";
	    ValueType[ValueType["ComplexObject"] = 2] = "ComplexObject";
	    ValueType[ValueType["Array"] = 3] = "Array";
	    ValueType[ValueType["ViewFunction"] = 4] = "ViewFunction";
	    ValueType[ValueType["ComplexFunction"] = 5] = "ComplexFunction";
	})(ValueType || (ValueType = {}));
	function getTypeOfValue(value) {
	    if (value === null || value === undefined)
	        return ValueType.Reference;
	    if (typeof value === "function")
	        return value.length ? ValueType.ComplexFunction : ValueType.ViewFunction;
	    if (Array.isArray(value) || value instanceof ObservableArray)
	        return ValueType.Array;
	    if (typeof value === "object")
	        return isPlainObject(value) ? ValueType.PlainObject : ValueType.ComplexObject;
	    return ValueType.Reference;
	}
	function observe(thing, propOrCb, cbOrFire, fireImmediately) {
	    if (typeof cbOrFire === "function")
	        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
	    else
	        return observeObservable(thing, propOrCb, cbOrFire);
	}
	exports.observe = observe;
	function observeObservable(thing, listener, fireImmediately) {
	    if (isObservableArray(thing))
	        return thing.observe(listener);
	    if (isObservableMap(thing))
	        return thing.observe(listener);
	    if (isObservableObject(thing))
	        return observeObservableObject(thing, listener, fireImmediately);
	    if (thing instanceof ObservableValue || thing instanceof ComputedValue)
	        return thing.observe(listener, fireImmediately);
	    if (isPlainObject(thing))
	        return observeObservable(observable(thing), listener, fireImmediately);
	    invariant(false, "first argument of observe should be some observable value or plain object");
	}
	function observeObservableProperty(thing, property, listener, fireImmediately) {
	    var propError = "[mobx.observe] the provided observable map has no key with name: " + property;
	    if (isObservableMap(thing)) {
	        if (!thing._has(property))
	            throw new Error(propError);
	        return observe(thing._data[property], listener);
	    }
	    if (isObservableObject(thing)) {
	        if (!isObservable(thing, property))
	            throw new Error(propError);
	        return observe(thing.$mobx.values[property], listener, fireImmediately);
	    }
	    if (isPlainObject(thing)) {
	        extendObservable(thing, {
	            property: thing[property]
	        });
	        return observeObservableProperty(thing, property, listener, fireImmediately);
	    }
	    invariant(false, "first argument of observe should be an (observable)object or observableMap if a property name is given");
	}
	function toJSON(source, detectCycles, __alreadySeen) {
	    if (detectCycles === void 0) { detectCycles = true; }
	    if (__alreadySeen === void 0) { __alreadySeen = null; }
	    function cache(value) {
	        if (detectCycles)
	            __alreadySeen.push([source, value]);
	        return value;
	    }
	    if (detectCycles && __alreadySeen === null)
	        __alreadySeen = [];
	    if (detectCycles && source !== null && typeof source === "object") {
	        for (var i = 0, l = __alreadySeen.length; i < l; i++)
	            if (__alreadySeen[i][0] === source)
	                return __alreadySeen[i][1];
	    }
	    if (!source)
	        return source;
	    if (Array.isArray(source) || source instanceof ObservableArray) {
	        var res = cache([]);
	        res.push.apply(res, source.map(function (value) { return toJSON(value, detectCycles, __alreadySeen); }));
	        return res;
	    }
	    if (source instanceof ObservableMap) {
	        var res_1 = cache({});
	        source.forEach(function (value, key) { return res_1[key] = toJSON(value, detectCycles, __alreadySeen); });
	        return res_1;
	    }
	    if (typeof source === "object" && isPlainObject(source)) {
	        var res = cache({});
	        for (var key in source)
	            if (source.hasOwnProperty(key))
	                res[key] = toJSON(source[key], detectCycles, __alreadySeen);
	        return res;
	    }
	    if (isObservable(source) && source.$mobx instanceof ObservableValue)
	        return toJSON(source(), detectCycles, __alreadySeen);
	    return source;
	}
	exports.toJSON = toJSON;
	function propagateAtomReady(atom) {
	    invariant(atom.isDirty, "atom not dirty");
	    atom.isDirty = false;
	    reportTransition(atom, "READY", true);
	    propagateReadiness(atom, true);
	}
	var Atom = (function () {
	    function Atom(name, onBecomeObserved, onBecomeUnobserved) {
	        if (name === void 0) { name = "Atom"; }
	        if (onBecomeObserved === void 0) { onBecomeObserved = noop; }
	        if (onBecomeUnobserved === void 0) { onBecomeUnobserved = noop; }
	        this.name = name;
	        this.onBecomeObserved = onBecomeObserved;
	        this.onBecomeUnobserved = onBecomeUnobserved;
	        this.id = getNextId();
	        this.isDirty = false;
	        this.staleObservers = [];
	        this.observers = [];
	    }
	    Atom.prototype.reportObserved = function () {
	        reportObserved(this);
	    };
	    Atom.prototype.reportChanged = function () {
	        if (!this.isDirty) {
	            this.reportStale();
	            this.reportReady();
	        }
	    };
	    Atom.prototype.reportStale = function () {
	        if (!this.isDirty) {
	            this.isDirty = true;
	            reportTransition(this, "STALE");
	            propagateStaleness(this);
	        }
	    };
	    Atom.prototype.reportReady = function () {
	        invariant(this.isDirty, "atom not dirty");
	        if (globalState.inTransaction > 0)
	            globalState.changedAtoms.push(this);
	        else {
	            propagateAtomReady(this);
	            runReactions();
	        }
	    };
	    Atom.prototype.toString = function () {
	        return this.name + "@" + this.id;
	    };
	    return Atom;
	}());
	exports.Atom = Atom;
	var ComputedValue = (function () {
	    function ComputedValue(derivation, scope, compareStructural, name) {
	        var _this = this;
	        if (name === void 0) { name = "ComputedValue"; }
	        this.derivation = derivation;
	        this.scope = scope;
	        this.compareStructural = compareStructural;
	        this.name = name;
	        this.id = getNextId();
	        this.isLazy = true;
	        this.isComputing = false;
	        this.staleObservers = [];
	        this.observers = [];
	        this.observing = [];
	        this.dependencyChangeCount = 0;
	        this.dependencyStaleCount = 0;
	        this.value = undefined;
	        this.peek = function () {
	            _this.isComputing = true;
	            globalState.isComputingComputedValue++;
	            var prevAllowStateChanges = globalState.allowStateChanges;
	            globalState.allowStateChanges = false;
	            var res = derivation.call(scope);
	            globalState.allowStateChanges = prevAllowStateChanges;
	            globalState.isComputingComputedValue--;
	            _this.isComputing = false;
	            return res;
	        };
	    }
	    ComputedValue.prototype.onBecomeObserved = function () {
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () {
	        for (var i = 0, l = this.observing.length; i < l; i++)
	            removeObserver(this.observing[i], this);
	        this.observing = [];
	        this.isLazy = true;
	        this.value = undefined;
	    };
	    ComputedValue.prototype.onDependenciesReady = function () {
	        var changed = this.trackAndCompute();
	        reportTransition(this, "READY", changed);
	        return changed;
	    };
	    ComputedValue.prototype.get = function () {
	        invariant(!this.isComputing, "Cycle detected", this.derivation);
	        reportObserved(this);
	        if (this.dependencyStaleCount > 0) {
	            return this.peek();
	        }
	        if (this.isLazy) {
	            if (isComputingDerivation()) {
	                this.isLazy = false;
	                this.trackAndCompute();
	            }
	            else {
	                return this.peek();
	            }
	        }
	        return this.value;
	    };
	    ComputedValue.prototype.set = function (_) {
	        throw new Error("[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        var oldValue = this.value;
	        this.value = trackDerivedFunction(this, this.peek);
	        return valueDidChange(this.compareStructural, this.value, oldValue);
	    };
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                globalState.inUntracked++;
	                listener(newValue, prevValue);
	                globalState.inUntracked--;
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "@" + this.id + "[" + this.derivation.toString() + "]";
	    };
	    return ComputedValue;
	}());
	function isComputingDerivation() {
	    return globalState.derivationStack.length > 0;
	}
	function checkIfStateModificationsAreAllowed() {
	    invariant(globalState.allowStateChanges, "It is not allowed to change the state when a computed value is being evaluated. Use 'autorun' to create reactive functions with side-effects. Or use 'extras.allowStateChanges(true, block)' to supress this message.");
	}
	function notifyDependencyStale(derivation) {
	    if (++derivation.dependencyStaleCount === 1) {
	        reportTransition(derivation, "STALE");
	        propagateStaleness(derivation);
	    }
	}
	function notifyDependencyReady(derivation, dependencyDidChange) {
	    invariant(derivation.dependencyStaleCount > 0, "unexpected ready notification");
	    if (dependencyDidChange)
	        derivation.dependencyChangeCount += 1;
	    if (--derivation.dependencyStaleCount === 0) {
	        if (derivation.dependencyChangeCount > 0) {
	            derivation.dependencyChangeCount = 0;
	            reportTransition(derivation, "PENDING");
	            var changed = derivation.onDependenciesReady();
	            propagateReadiness(derivation, changed);
	        }
	        else {
	            reportTransition(derivation, "READY", false);
	            propagateReadiness(derivation, false);
	        }
	    }
	}
	function trackDerivedFunction(derivation, f) {
	    var hasException = true;
	    var prevObserving = derivation.observing;
	    derivation.observing = [];
	    globalState.derivationStack.push(derivation);
	    try {
	        var result = f();
	        hasException = false;
	        bindDependencies(derivation, prevObserving);
	        return result;
	    }
	    finally {
	        if (hasException) {
	            console.error("[mobx] An uncaught exception occurred while calculating your computed value, autorun or transformer. Or inside the render method of a React component. " +
	                "These methods should never throw exceptions as MobX will usually not be able to recover from them. " +
	                ("Please enable 'Pause on (caught) exceptions' in your debugger to find the root cause. In: '" + derivation.name + "#" + derivation.id + "'"));
	            resetGlobalState();
	        }
	    }
	}
	function bindDependencies(derivation, prevObserving) {
	    globalState.derivationStack.length -= 1;
	    var _a = quickDiff(derivation.observing, prevObserving), added = _a[0], removed = _a[1];
	    for (var i = 0, l = added.length; i < l; i++) {
	        var dependency = added[i];
	        invariant(!findCycle(derivation, dependency), "Cycle detected", derivation);
	        addObserver(added[i], derivation);
	    }
	    for (var i = 0, l = removed.length; i < l; i++)
	        removeObserver(removed[i], derivation);
	}
	function findCycle(needle, node) {
	    var obs = node.observing;
	    if (obs === undefined)
	        return false;
	    if (obs.indexOf(node) !== -1)
	        return true;
	    for (var l = obs.length, i = 0; i < l; i++)
	        if (findCycle(needle, obs[i]))
	            return true;
	    return false;
	}
	var MobXGlobals = (function () {
	    function MobXGlobals() {
	        this.version = 1;
	        this.derivationStack = [];
	        this.mobxGuid = 0;
	        this.inTransaction = 0;
	        this.inUntracked = 0;
	        this.isRunningReactions = false;
	        this.changedAtoms = [];
	        this.pendingReactions = [];
	        this.allowStateChanges = true;
	        this.resetId = 0;
	    }
	    return MobXGlobals;
	}());
	var globalState = (function () {
	    var res = new MobXGlobals();
	    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
	        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
	    if (global.__mobxGlobal && global.__mobxGlobal.version !== res.version)
	        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
	    if (global.__mobxGlobal)
	        return global.__mobxGlobal;
	    return global.__mobxGlobal = res;
	})();
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function registerGlobals() {
	}
	function resetGlobalState() {
	    globalState.resetId++;
	    var defaultGlobals = new MobXGlobals();
	    for (var key in defaultGlobals)
	        if (key !== "mobxGuid" && key !== "resetId")
	            globalState[key] = defaultGlobals[key];
	}
	function addObserver(observable, node) {
	    var obs = observable.observers, l = obs.length;
	    obs[l] = node;
	    if (l === 0)
	        observable.onBecomeObserved();
	}
	function removeObserver(observable, node) {
	    var obs = observable.observers, idx = obs.indexOf(node);
	    if (idx !== -1)
	        obs.splice(idx, 1);
	    if (obs.length === 0)
	        observable.onBecomeUnobserved();
	}
	function reportObserved(observable) {
	    if (globalState.inUntracked > 0)
	        return;
	    var derivationStack = globalState.derivationStack;
	    var l = derivationStack.length;
	    if (l > 0) {
	        var deps = derivationStack[l - 1].observing, depslength = deps.length;
	        if (deps[depslength - 1] !== observable && deps[depslength - 2] !== observable)
	            deps[depslength] = observable;
	    }
	}
	function propagateStaleness(observable) {
	    var os = observable.observers.slice();
	    os.forEach(notifyDependencyStale);
	    observable.staleObservers = observable.staleObservers.concat(os);
	}
	function propagateReadiness(observable, valueDidActuallyChange) {
	    observable.staleObservers.splice(0).forEach(function (o) { return notifyDependencyReady(o, valueDidActuallyChange); });
	}
	function untracked(action) {
	    deprecated("This feature is experimental and might be removed in a future minor release. Please report if you use this feature in production: https://github.com/mobxjs/mobx/issues/49");
	    globalState.inUntracked++;
	    var res = action();
	    globalState.inUntracked--;
	    return res;
	}
	exports.untracked = untracked;
	var Reaction = (function () {
	    function Reaction(name, onInvalidate) {
	        if (name === void 0) { name = "Reaction"; }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.id = getNextId();
	        this.staleObservers = EMPTY_ARRAY;
	        this.observers = EMPTY_ARRAY;
	        this.observing = [];
	        this.dependencyChangeCount = 0;
	        this.dependencyStaleCount = 0;
	        this.isDisposed = false;
	        this._isScheduled = false;
	    }
	    Reaction.prototype.onBecomeObserved = function () {
	    };
	    Reaction.prototype.onBecomeUnobserved = function () {
	    };
	    Reaction.prototype.onDependenciesReady = function () {
	        this.schedule();
	        return false;
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this.dependencyStaleCount > 0 || this._isScheduled;
	    };
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            this._isScheduled = false;
	            this.onInvalidate();
	            reportTransition(this, "READY", true);
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        trackDerivedFunction(this, fn);
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            var deps = this.observing.splice(0);
	            for (var i = 0, l = deps.length; i < l; i++)
	                removeObserver(deps[i], this);
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r.$mobx = this;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    return Reaction;
	}());
	exports.Reaction = Reaction;
	var MAX_REACTION_ITERATIONS = 100;
	function runReactions() {
	    if (globalState.isRunningReactions === true || globalState.inTransaction > 0)
	        return;
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS)
	            throw new Error("Reaction doesn't converge to a stable state. Probably there is a cycle in the reactive function: " + allReactions[0].toString());
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	function transaction(action, thisArg) {
	    globalState.inTransaction += 1;
	    var res = action.call(thisArg);
	    if (--globalState.inTransaction === 0) {
	        var values = globalState.changedAtoms.splice(0);
	        for (var i = 0, l = values.length; i < l; i++)
	            propagateAtomReady(values[i]);
	        runReactions();
	    }
	    return res;
	}
	exports.transaction = transaction;
	var ValueMode;
	(function (ValueMode) {
	    ValueMode[ValueMode["Recursive"] = 0] = "Recursive";
	    ValueMode[ValueMode["Reference"] = 1] = "Reference";
	    ValueMode[ValueMode["Structure"] = 2] = "Structure";
	    ValueMode[ValueMode["Flat"] = 3] = "Flat";
	})(ValueMode || (ValueMode = {}));
	function asReference(value) {
	    return new AsReference(value);
	}
	exports.asReference = asReference;
	function asStructure(value) {
	    return new AsStructure(value);
	}
	exports.asStructure = asStructure;
	function asFlat(value) {
	    return new AsFlat(value);
	}
	exports.asFlat = asFlat;
	var AsReference = (function () {
	    function AsReference(value) {
	        this.value = value;
	        assertUnwrapped(value, "Modifiers are not allowed to be nested");
	    }
	    return AsReference;
	}());
	var AsStructure = (function () {
	    function AsStructure(value) {
	        this.value = value;
	        assertUnwrapped(value, "Modifiers are not allowed to be nested");
	    }
	    return AsStructure;
	}());
	var AsFlat = (function () {
	    function AsFlat(value) {
	        this.value = value;
	        assertUnwrapped(value, "Modifiers are not allowed to be nested");
	    }
	    return AsFlat;
	}());
	function getValueModeFromValue(value, defaultMode) {
	    if (value instanceof AsReference)
	        return [ValueMode.Reference, value.value];
	    if (value instanceof AsStructure)
	        return [ValueMode.Structure, value.value];
	    if (value instanceof AsFlat)
	        return [ValueMode.Flat, value.value];
	    return [defaultMode, value];
	}
	function getValueModeFromModifierFunc(func) {
	    if (func === asReference)
	        return ValueMode.Reference;
	    else if (func === asStructure)
	        return ValueMode.Structure;
	    else if (func === asFlat)
	        return ValueMode.Flat;
	    invariant(func === undefined, "Cannot determine value mode from function. Please pass in one of these: mobx.asReference, mobx.asStructure or mobx.asFlat, got: " + func);
	    return ValueMode.Recursive;
	}
	function makeChildObservable(value, parentMode, name) {
	    var childMode;
	    if (isObservable(value))
	        return value;
	    switch (parentMode) {
	        case ValueMode.Reference:
	            return value;
	        case ValueMode.Flat:
	            assertUnwrapped(value, "Items inside 'asFlat' cannot have modifiers");
	            childMode = ValueMode.Reference;
	            break;
	        case ValueMode.Structure:
	            assertUnwrapped(value, "Items inside 'asStructure' cannot have modifiers");
	            childMode = ValueMode.Structure;
	            break;
	        case ValueMode.Recursive:
	            _a = getValueModeFromValue(value, ValueMode.Recursive), childMode = _a[0], value = _a[1];
	            break;
	        default:
	            invariant(false, "Illegal State");
	    }
	    if (Array.isArray(value) && Object.isExtensible(value))
	        return createObservableArray(value, childMode, name);
	    if (isPlainObject(value) && Object.isExtensible(value))
	        return extendObservableHelper(value, value, childMode, name);
	    return value;
	    var _a;
	}
	function assertUnwrapped(value, message) {
	    if (value instanceof AsReference || value instanceof AsStructure || value instanceof AsFlat)
	        throw new Error("[mobx] asStructure / asReference / asFlat cannot be used here. " + message);
	}
	var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
	var StubArray = (function () {
	    function StubArray() {
	    }
	    return StubArray;
	}());
	StubArray.prototype = [];
	function getArrayLength(adm) {
	    adm.atom.reportObserved();
	    return adm.values.length;
	}
	function setArrayLength(adm, newLength) {
	    if (typeof newLength !== "number" || newLength < 0)
	        throw new Error("[mobx.array] Out of range: " + newLength);
	    var currentLength = adm.values.length;
	    if (newLength === currentLength)
	        return;
	    else if (newLength > currentLength)
	        spliceWithArray(adm, currentLength, 0, new Array(newLength - currentLength));
	    else
	        spliceWithArray(adm, newLength, currentLength - newLength);
	}
	function updateArrayLength(adm, oldLength, delta) {
	    if (oldLength !== adm.lastKnownLength)
	        throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
	    checkIfStateModificationsAreAllowed();
	    adm.lastKnownLength += delta;
	    if (delta > 0 && oldLength + delta > OBSERVABLE_ARRAY_BUFFER_SIZE)
	        reserveArrayBuffer(oldLength + delta);
	}
	function spliceWithArray(adm, index, deleteCount, newItems) {
	    var length = adm.values.length;
	    if ((newItems === undefined || newItems.length === 0) && (deleteCount === 0 || length === 0))
	        return [];
	    if (index === undefined)
	        index = 0;
	    else if (index > length)
	        index = length;
	    else if (index < 0)
	        index = Math.max(0, length + index);
	    if (arguments.length === 2)
	        deleteCount = length - index;
	    else if (deleteCount === undefined || deleteCount === null)
	        deleteCount = 0;
	    else
	        deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	    if (newItems === undefined)
	        newItems = EMPTY_ARRAY;
	    else
	        newItems = newItems.map(adm.makeChildReactive);
	    var lengthDelta = newItems.length - deleteCount;
	    updateArrayLength(adm, length, lengthDelta);
	    var res = (_a = adm.values).splice.apply(_a, [index, deleteCount].concat(newItems));
	    notifyArraySplice(adm, index, res, newItems);
	    return res;
	    var _a;
	}
	function makeReactiveArrayItem(value) {
	    assertUnwrapped(value, "Array values cannot have modifiers");
	    if (this.mode === ValueMode.Flat || this.mode === ValueMode.Reference)
	        return value;
	    return makeChildObservable(value, this.mode, this.atom.name + "@" + this.atom.id + " / ArrayEntry");
	}
	function notifyArrayChildUpdate(adm, index, oldValue) {
	    adm.atom.reportChanged();
	    if (adm.changeEvent)
	        adm.changeEvent.emit({ object: adm.array, type: "update", index: index, oldValue: oldValue });
	}
	function notifyArraySplice(adm, index, deleted, added) {
	    if (deleted.length === 0 && added.length === 0)
	        return;
	    adm.atom.reportChanged();
	    if (adm.changeEvent)
	        adm.changeEvent.emit({ object: adm.array, type: "splice", index: index, addedCount: added.length, removed: deleted });
	}
	var ObservableArray = (function (_super) {
	    __extends(ObservableArray, _super);
	    function ObservableArray(initialValues, mode, name) {
	        _super.call(this);
	        var adm = this.$mobx = {
	            atom: new Atom(name || "ObservableArray"),
	            values: undefined,
	            changeEvent: undefined,
	            lastKnownLength: 0,
	            mode: mode,
	            array: this,
	            makeChildReactive: function (v) { return makeReactiveArrayItem.call(adm, v); }
	        };
	        Object.defineProperty(this, "$mobx", {
	            enumerable: false,
	            configurable: false,
	            writable: false
	        });
	        if (initialValues && initialValues.length) {
	            updateArrayLength(adm, 0, initialValues.length);
	            adm.values = initialValues.map(adm.makeChildReactive);
	        }
	        else
	            adm.values = [];
	    }
	    ObservableArray.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (this.$mobx.changeEvent === undefined)
	            this.$mobx.changeEvent = new SimpleEventEmitter();
	        if (fireImmediately)
	            listener({ object: this, type: "splice", index: 0, addedCount: this.$mobx.values.length, removed: [] });
	        return this.$mobx.changeEvent.on(listener);
	    };
	    ObservableArray.prototype.clear = function () {
	        return this.splice(0);
	    };
	    ObservableArray.prototype.replace = function (newItems) {
	        return spliceWithArray(this.$mobx, 0, this.$mobx.values.length, newItems);
	    };
	    ObservableArray.prototype.toJSON = function () {
	        this.$mobx.atom.reportObserved();
	        return this.$mobx.values.slice();
	    };
	    ObservableArray.prototype.peek = function () {
	        return this.$mobx.values;
	    };
	    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        this.$mobx.atom.reportObserved();
	        var items = this.$mobx.values, l = items.length;
	        for (var i = fromIndex; i < l; i++)
	            if (predicate.call(thisArg, items[i], i, this))
	                return items[i];
	        return null;
	    };
	    ObservableArray.prototype.splice = function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return spliceWithArray(this.$mobx, index);
	            case 2:
	                return spliceWithArray(this.$mobx, index, deleteCount);
	        }
	        return spliceWithArray(this.$mobx, index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.push = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i - 0] = arguments[_i];
	        }
	        spliceWithArray(this.$mobx, this.$mobx.values.length, 0, items);
	        return this.$mobx.values.length;
	    };
	    ObservableArray.prototype.pop = function () {
	        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
	    };
	    ObservableArray.prototype.shift = function () {
	        return this.splice(0, 1)[0];
	    };
	    ObservableArray.prototype.unshift = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i - 0] = arguments[_i];
	        }
	        spliceWithArray(this.$mobx, 0, 0, items);
	        return this.$mobx.values.length;
	    };
	    ObservableArray.prototype.reverse = function () {
	        this.$mobx.atom.reportObserved();
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    };
	    ObservableArray.prototype.sort = function (compareFn) {
	        this.$mobx.atom.reportObserved();
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    };
	    ObservableArray.prototype.remove = function (value) {
	        var idx = this.$mobx.values.indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    };
	    ObservableArray.prototype.toString = function () {
	        return "[mobx.array] " + Array.prototype.toString.apply(this.$mobx.values, arguments);
	    };
	    ObservableArray.prototype.toLocaleString = function () {
	        return "[mobx.array] " + Array.prototype.toLocaleString.apply(this.$mobx.values, arguments);
	    };
	    return ObservableArray;
	}(StubArray));
	makeNonEnumerable(ObservableArray.prototype, [
	    "constructor",
	    "observe",
	    "clear",
	    "replace",
	    "toJSON",
	    "peek",
	    "find",
	    "splice",
	    "push",
	    "pop",
	    "shift",
	    "unshift",
	    "reverse",
	    "sort",
	    "remove",
	    "toString",
	    "toLocaleString",
	]);
	Object.defineProperty(ObservableArray.prototype, "length", {
	    enumerable: false,
	    configurable: true,
	    get: function () {
	        return getArrayLength(this.$mobx);
	    },
	    set: function (newLength) {
	        setArrayLength(this.$mobx, newLength);
	    }
	});
	[
	    "concat",
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some"
	].forEach(function (funcName) {
	    var baseFunc = Array.prototype[funcName];
	    Object.defineProperty(ObservableArray.prototype, funcName, {
	        configurable: false,
	        writable: true,
	        enumerable: false,
	        value: function () {
	            this.$mobx.atom.reportObserved();
	            return baseFunc.apply(this.$mobx.values, arguments);
	        }
	    });
	});
	function createArrayBufferItem(index) {
	    Object.defineProperty(ObservableArray.prototype, "" + index, {
	        enumerable: false,
	        configurable: false,
	        set: function (value) {
	            var impl = this.$mobx;
	            var values = impl.values;
	            assertUnwrapped(value, "Modifiers cannot be used on array values. For non-reactive array values use makeReactive(asFlat(array)).");
	            if (index < values.length) {
	                checkIfStateModificationsAreAllowed();
	                var oldValue = values[index];
	                var changed = impl.mode === ValueMode.Structure ? !deepEquals(oldValue, value) : oldValue !== value;
	                if (changed) {
	                    values[index] = impl.makeChildReactive(value);
	                    notifyArrayChildUpdate(impl, index, oldValue);
	                }
	            }
	            else if (index === values.length)
	                spliceWithArray(impl, index, 0, [value]);
	            else
	                throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	        },
	        get: function () {
	            var impl = this.$mobx;
	            if (impl && index < impl.values.length) {
	                impl.atom.reportObserved();
	                return impl.values[index];
	            }
	            return undefined;
	        }
	    });
	}
	function reserveArrayBuffer(max) {
	    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
	        createArrayBufferItem(index);
	    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
	}
	reserveArrayBuffer(1000);
	function createObservableArray(initialValues, mode, name) {
	    return new ObservableArray(initialValues, mode, name);
	}
	function fastArray(initialValues) {
	    deprecated("fastArray is deprecated. Please use `observable(asFlat([]))`");
	    return createObservableArray(initialValues, ValueMode.Flat, null);
	}
	exports.fastArray = fastArray;
	function isObservableArray(thing) {
	    return thing instanceof ObservableArray;
	}
	exports.isObservableArray = isObservableArray;
	var ObservableMapMarker = {};
	var ObservableMap = (function () {
	    function ObservableMap(initialData, valueModeFunc) {
	        var _this = this;
	        this.$mobx = ObservableMapMarker;
	        this._data = {};
	        this._hasMap = {};
	        this._events = undefined;
	        this.name = "ObservableMap";
	        this.id = getNextId();
	        this._keys = new ObservableArray(null, ValueMode.Reference, this.name + "@" + this.id + " / keys()");
	        this._valueMode = getValueModeFromModifierFunc(valueModeFunc);
	        if (isPlainObject(initialData))
	            this.merge(initialData);
	        else if (Array.isArray(initialData))
	            initialData.forEach(function (_a) {
	                var key = _a[0], value = _a[1];
	                return _this.set(key, value);
	            });
	    }
	    ObservableMap.prototype._has = function (key) {
	        return typeof this._data[key] !== "undefined";
	    };
	    ObservableMap.prototype.has = function (key) {
	        if (!this.isValidKey(key))
	            return false;
	        if (this._hasMap[key])
	            return this._hasMap[key].get();
	        return this._updateHasMapEntry(key, false).get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        var _this = this;
	        this.assertValidKey(key);
	        assertUnwrapped(value, "[mobx.map.set] Expected unwrapped value to be inserted to key '" + key + "'. If you need to use modifiers pass them as second argument to the constructor");
	        if (this._has(key)) {
	            var oldValue = this._data[key].value;
	            var changed = this._data[key].set(value);
	            if (changed && this._events) {
	                this._events.emit({
	                    type: "update",
	                    object: this,
	                    name: key,
	                    oldValue: oldValue
	                });
	            }
	        }
	        else {
	            transaction(function () {
	                _this._data[key] = new ObservableValue(value, _this._valueMode, _this.name + "@" + _this.id + " / Entry \"" + key + "\"");
	                _this._updateHasMapEntry(key, true);
	                _this._keys.push(key);
	            });
	            this._events && this._events.emit({
	                type: "add",
	                object: this,
	                name: key
	            });
	        }
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        if (this._has(key)) {
	            var oldValue = this._data[key].value;
	            transaction(function () {
	                _this._keys.remove(key);
	                _this._updateHasMapEntry(key, false);
	                var observable = _this._data[key];
	                observable.set(undefined);
	                _this._data[key] = undefined;
	            });
	            this._events && this._events.emit({
	                type: "delete",
	                object: this,
	                name: key,
	                oldValue: oldValue
	            });
	        }
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        var entry = this._hasMap[key];
	        if (entry) {
	            entry.set(value);
	        }
	        else {
	            entry = this._hasMap[key] = new ObservableValue(value, ValueMode.Reference, this.name + "@" + this.id + " / Contains \"" + key + "\"");
	        }
	        return entry;
	    };
	    ObservableMap.prototype.get = function (key) {
	        if (this.has(key))
	            return this._data[key].get();
	        return undefined;
	    };
	    ObservableMap.prototype.keys = function () {
	        return this._keys.slice();
	    };
	    ObservableMap.prototype.values = function () {
	        return this.keys().map(this.get, this);
	    };
	    ObservableMap.prototype.entries = function () {
	        var _this = this;
	        return this.keys().map(function (key) { return [key, _this.get(key)]; });
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var _this = this;
	        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key); });
	    };
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        transaction(function () {
	            if (other instanceof ObservableMap)
	                other.keys().forEach(function (key) { return _this.set(key, other.get(key)); });
	            else
	                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
	        });
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            _this.keys().forEach(_this.delete, _this);
	        });
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ObservableMap.prototype.toJs = function () {
	        var _this = this;
	        var res = {};
	        this.keys().forEach(function (key) { return res[key] = _this.get(key); });
	        return res;
	    };
	    ObservableMap.prototype.isValidKey = function (key) {
	        if (key === null || key === undefined)
	            return false;
	        if (typeof key !== "string" && typeof key !== "number")
	            return false;
	        return true;
	    };
	    ObservableMap.prototype.assertValidKey = function (key) {
	        if (!this.isValidKey(key))
	            throw new Error("[mobx.map] Invalid key: '" + key + "'");
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return "[mobx.map { " + this.keys().map(function (key) { return (key + ": " + ("" + _this.get(key))); }).join(", ") + " }]";
	    };
	    ObservableMap.prototype.observe = function (callback) {
	        if (!this._events)
	            this._events = new SimpleEventEmitter();
	        return this._events.on(callback);
	    };
	    return ObservableMap;
	}());
	exports.ObservableMap = ObservableMap;
	function map(initialValues, valueModifier) {
	    return new ObservableMap(initialValues, valueModifier);
	}
	exports.map = map;
	function isObservableMap(thing) {
	    return thing instanceof ObservableMap;
	}
	exports.isObservableMap = isObservableMap;
	var ObservableObjectMarker = {};
	function asObservableObject(target, name, mode) {
	    if (mode === void 0) { mode = ValueMode.Recursive; }
	    if (target.$mobx) {
	        if (target.$mobx.type !== ObservableObjectMarker)
	            throw new Error("The given object is observable but not an observable object");
	        return target.$mobx;
	    }
	    if (!isPlainObject(target))
	        name = target.constructor.name;
	    if (!name)
	        name = "ObservableObject";
	    var adm = {
	        type: ObservableObjectMarker,
	        values: {},
	        events: undefined,
	        id: getNextId(),
	        target: target, name: name, mode: mode
	    };
	    Object.defineProperty(target, "$mobx", {
	        enumerable: false,
	        configurable: false,
	        writable: false,
	        value: adm
	    });
	    return adm;
	}
	function setObservableObjectProperty(adm, propName, value) {
	    if (adm.values[propName])
	        adm.target[propName] = value;
	    else
	        defineObservableProperty(adm, propName, value);
	}
	function defineObservableProperty(adm, propName, value) {
	    assertPropertyConfigurable(adm.target, propName);
	    var observable;
	    var name = adm.name + "@" + adm.id + " / Prop \"" + propName + "\"";
	    var isComputed = true;
	    if (typeof value === "function" && value.length === 0)
	        observable = new ComputedValue(value, adm.target, false, name);
	    else if (value instanceof AsStructure && typeof value.value === "function" && value.value.length === 0)
	        observable = new ComputedValue(value.value, adm.target, true, name);
	    else {
	        isComputed = false;
	        observable = new ObservableValue(value, adm.mode, name);
	    }
	    adm.values[propName] = observable;
	    Object.defineProperty(adm.target, propName, {
	        configurable: true,
	        enumerable: !isComputed,
	        get: function () {
	            return observable.get();
	        },
	        set: isComputed
	            ? throwingComputedValueSetter
	            : function (newValue) {
	                var oldValue = observable.value;
	                if (observable.set(newValue) && adm.events !== undefined) {
	                    adm.events.emit({
	                        type: "update",
	                        object: this,
	                        name: propName,
	                        oldValue: oldValue
	                    });
	                }
	            }
	    });
	    if (adm.events !== undefined) {
	        adm.events.emit({
	            type: "add",
	            object: adm.target,
	            name: propName
	        });
	    }
	    ;
	}
	function observeObservableObject(object, callback, fireImmediately) {
	    invariant(isObservableObject(object), "Expected observable object");
	    invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	    var adm = object.$mobx;
	    if (adm.events === undefined)
	        adm.events = new SimpleEventEmitter();
	    return object.$mobx.events.on(callback);
	}
	function isObservableObject(thing) {
	    return thing && thing.$mobx && thing.$mobx.type === ObservableObjectMarker;
	}
	exports.isObservableObject = isObservableObject;
	var ObservableValue = (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, mode, name) {
	        if (name === void 0) { name = "ObservableValue"; }
	        _super.call(this, name);
	        this.mode = mode;
	        this.hasUnreportedChange = false;
	        this.events = null;
	        this.value = undefined;
	        var _a = getValueModeFromValue(value, ValueMode.Recursive), childmode = _a[0], unwrappedValue = _a[1];
	        if (this.mode === ValueMode.Recursive)
	            this.mode = childmode;
	        this.value = makeChildObservable(unwrappedValue, this.mode, this.name);
	    }
	    ObservableValue.prototype.set = function (newValue) {
	        assertUnwrapped(newValue, "Modifiers cannot be used on non-initial values.");
	        checkIfStateModificationsAreAllowed();
	        var oldValue = this.value;
	        var changed = valueDidChange(this.mode === ValueMode.Structure, oldValue, newValue);
	        if (changed) {
	            this.value = makeChildObservable(newValue, this.mode, this.name);
	            this.reportChanged();
	            if (this.events)
	                this.events.emit(newValue, oldValue);
	        }
	        return changed;
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.value;
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (!this.events)
	            this.events = new SimpleEventEmitter();
	        if (fireImmediately)
	            listener(this.value, undefined);
	        return this.events.on(listener);
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "@" + this.id + "[" + this.value + "]";
	    };
	    return ObservableValue;
	}(Atom));
	var SimpleEventEmitter = (function () {
	    function SimpleEventEmitter() {
	        this.listeners = [];
	    }
	    SimpleEventEmitter.prototype.emit = function () {
	        var listeners = this.listeners.slice();
	        for (var i = 0, l = listeners.length; i < l; i++)
	            listeners[i].apply(null, arguments);
	    };
	    SimpleEventEmitter.prototype.on = function (listener) {
	        var _this = this;
	        this.listeners.push(listener);
	        return once(function () {
	            var idx = _this.listeners.indexOf(listener);
	            if (idx !== -1)
	                _this.listeners.splice(idx, 1);
	        });
	    };
	    SimpleEventEmitter.prototype.once = function (listener) {
	        var subscription = this.on(function () {
	            subscription();
	            listener.apply(this, arguments);
	        });
	        return subscription;
	    };
	    return SimpleEventEmitter;
	}());
	exports.SimpleEventEmitter = SimpleEventEmitter;
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	function invariant(check, message, thing) {
	    if (!check)
	        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
	}
	var deprecatedMessages = [];
	function deprecated(msg) {
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	}
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	var noop = function () { };
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function isPlainObject(value) {
	    return value !== null && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype;
	}
	function valueDidChange(compareStructural, oldValue, newValue) {
	    return compareStructural
	        ? !deepEquals(oldValue, newValue)
	        : oldValue !== newValue;
	}
	function makeNonEnumerable(object, props) {
	    for (var i = 0; i < props.length; i++) {
	        Object.defineProperty(object, props[i], {
	            configurable: true,
	            writable: true,
	            enumerable: false,
	            value: object[props[i]]
	        });
	    }
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
	}
	function deepEquals(a, b) {
	    if (a === null && b === null)
	        return true;
	    if (a === undefined && b === undefined)
	        return true;
	    var aIsArray = Array.isArray(a) || isObservableArray(a);
	    if (aIsArray !== (Array.isArray(b) || isObservableArray(b))) {
	        return false;
	    }
	    else if (aIsArray) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = a.length; i >= 0; i--)
	            if (!deepEquals(a[i], b[i]))
	                return false;
	        return true;
	    }
	    else if (typeof a === "object" && typeof b === "object") {
	        if (a === null || b === null)
	            return false;
	        if (Object.keys(a).length !== Object.keys(b).length)
	            return false;
	        for (var prop in a) {
	            if (!b.hasOwnProperty(prop))
	                return false;
	            if (!deepEquals(a[prop], b[prop]))
	                return false;
	        }
	        return true;
	    }
	    return a === b;
	}
	function quickDiff(current, base) {
	    if (!base || !base.length)
	        return [current, []];
	    if (!current || !current.length)
	        return [[], base];
	    var added = [];
	    var removed = [];
	    var currentIndex = 0, currentSearch = 0, currentLength = current.length, currentExhausted = false, baseIndex = 0, baseSearch = 0, baseLength = base.length, isSearching = false, baseExhausted = false;
	    while (!baseExhausted && !currentExhausted) {
	        if (!isSearching) {
	            if (currentIndex < currentLength && baseIndex < baseLength && current[currentIndex] === base[baseIndex]) {
	                currentIndex++;
	                baseIndex++;
	                if (currentIndex === currentLength && baseIndex === baseLength)
	                    return [added, removed];
	                continue;
	            }
	            currentSearch = currentIndex;
	            baseSearch = baseIndex;
	            isSearching = true;
	        }
	        baseSearch += 1;
	        currentSearch += 1;
	        if (baseSearch >= baseLength)
	            baseExhausted = true;
	        if (currentSearch >= currentLength)
	            currentExhausted = true;
	        if (!currentExhausted && current[currentSearch] === base[baseIndex]) {
	            added.push.apply(added, current.slice(currentIndex, currentSearch));
	            currentIndex = currentSearch + 1;
	            baseIndex++;
	            isSearching = false;
	        }
	        else if (!baseExhausted && base[baseSearch] === current[currentIndex]) {
	            removed.push.apply(removed, base.slice(baseIndex, baseSearch));
	            baseIndex = baseSearch + 1;
	            currentIndex++;
	            isSearching = false;
	        }
	    }
	    added.push.apply(added, current.slice(currentIndex));
	    removed.push.apply(removed, base.slice(baseIndex));
	    return [added, removed];
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	Array.prototype.groupBy = function (prop, fields) {
	    var key;
	    var result = this.reduce(function (grouped, item) {
	        key = item[prop];
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
	                    obj = fields.reduce(function (prev, curr) { prev[curr] = item[curr]; return prev; }, {});
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
	        console.log(row);
	        var item = {};
	        var cat = (typeof prop === 'function') ? 'key' : prop;
	        item[cat] = row;
	        item.group = result[row];
	        ret.push(item);
	    }
	    return ret;
	};
	Array.prototype.aggregate = function (querys) {
	    return this.map(function (row) {
	        for (var query in querys) {
	            var func = querys[query];
	            var data = row.group.map(function (group) { return group[query]; });
	            var value = void 0;
	            var name_1 = '';
	            if (typeof func === 'string') {
	                value = Array.prototype[func].call(data);
	                name_1 = func;
	            }
	            else {
	                value = func.call(data);
	            }
	            row[name_1 + '_' + query] = value;
	        }
	        //console.log('row:', row.category, row)
	        delete row.group;
	        return row;
	    });
	};
	Array.prototype.first = function () {
	    return this[0];
	};
	Array.prototype.last = function () {
	    return this[this.length - 1];
	};
	Array.prototype.count = function () {
	    return this.length;
	};
	function typeArg(arg, arr) {
	    var that;
	    switch (typeof arg) {
	        case 'function':
	            that = arr.map(arg);
	            break;
	        case 'string':
	            that = arr.map(function (o) { return o[arg]; });
	            break;
	        default:
	            that = arr;
	            break;
	    }
	    return that;
	}
	Array.prototype.min = function (field) {
	    return Math.min.apply(null, this.by(field));
	};
	Array.prototype.max = function (field) {
	    return Math.max.apply(null, this.by(field));
	};
	Array.prototype.sum = function (field) {
	    return this.by(field).reduce(function (prev, current) { return (+(current) + prev); }, 0); //parseFloat
	};
	Array.prototype.average = function (field) {
	    var that = typeArg(field, this);
	    var count = that.length;
	    var total = that.reduce(function (prev, current) { return (+(current) + prev); }, 0); //parseFloat
	    return total / count;
	};
	Array.prototype.unique = function (field) {
	    var that = typeArg(field, this);
	    var o = {}, i, l = that.length, r = [];
	    for (i = 0; i < l; i += 1) {
	        o[JSON.stringify(that[i])] = that[i];
	    }
	    for (i in o) {
	        r.push(o[i]);
	    }
	    return r;
	};
	function flatten(list, depth, mapperFn, mapperCtx) {
	    if (depth === 0) {
	        return list;
	    }
	    return list.reduce(function (accumulator, item, i) {
	        if (mapperFn) {
	            item = mapperFn.call(mapperCtx || list, item, i, list);
	        }
	        if (Array.isArray(item)) {
	            accumulator.push.apply(accumulator, flatten(item, depth - 1));
	        }
	        else {
	            accumulator.push(item);
	        }
	        return accumulator;
	    }, []);
	}
	;
	Array.prototype.flatten = function (depth) {
	    if (depth === void 0) { depth = Infinity; }
	    return flatten(this, depth);
	};
	Array.prototype.flatMap = function (fn, ctx) {
	    return flatten(this, 1, fn, ctx);
	};
	Array.prototype.by = function (field) {
	    return typeArg(field, this);
	};
	Array.prototype.take = function (number) {
	    var begin, end;
	    if (number >= 0) {
	        begin = 0;
	        end = number;
	    }
	    else {
	        begin = number;
	        end = this.length;
	    }
	    return this.slice(begin, end);
	};
	Array.prototype.includes = function (searchElement /*, fromIndex*/) {
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
	    }
	    else {
	        k = len + n;
	        if (k < 0) {
	            k = 0;
	        }
	    }
	    var currentElement;
	    while (k < len) {
	        currentElement = O[k];
	        if (searchElement === currentElement ||
	            (searchElement !== searchElement && currentElement !== currentElement)) {
	            return true;
	        }
	        k++;
	    }
	    return false;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*jshint maxlen: false, unused: false, quotmark: true, -W097 */
	"use strict";
	var db = [
	    { desc: "DE UF com ocorrência de Vespa-da-madeira PARA UF reconhecida pelo MAPA como livre da ocorrência de Vespa-da-madeira", hosp: ["Pinus spp."], part: ["madeira"], orig: ["MG", "SP", "PR", "SC", "RS"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "TO"], prag: "Sirex noctilio", pragc: "VESPA-DA-MADEIRA", exig: ["Estão isentos desta exigência fitossanitária: compensados ou cavacos de 2,5 cm de espessura ou menores, móveis e pequenos objetos de madeira; ", "PTV com declaração adicional constando que o material está livre de Sirex noctilio, tanto na fase adulta como na imatura."], proib: false, leg: "Portaria SDA/MAPA nº 125, de 03 de agosto de 1998", link: "leg/PORT125-1998.pdf" },
	    { desc: "DE UF com ocorrência de Ácaro-vermelho-das-palmeiras PARA UF reconhecida pelo MAPA como livre da ocorrência de Ácaro-vermelho-das-palmeiras", hosp: ["Euterpe oleracea", "Euterpe precatoria", "Alpínia purpurata", "Alpínia zerumbet", "Syagrus schizophylla", "Ravenala madagascariensis", "Musa spp.", "Etlingera alatior", "Mauritia flexuosa", "Canna indica", "Cocos nucifera", "Butia capitata", "Corypha umbraculifera", "Elaeis guineensis", "Strelitzia reginae", "Heliconia spp.", "Syagrus romanzoffianum", "Licuala grandis", "Coccothrinax miraguama", "Microcycas calocoma", "Coccothrinax barbadensis", "Aiphanes spp.", "Pseudophoenix vinifera", "Dypsis lutescens", "Veitchia arecina", "Chamaedora spp.", "Veitchia maerrillii", "Phoenix roebelenii", "Acoelorraphe wrightii", "Wodyetia bifurcata", "Archontophoenix alexandrae", "Cycas spp.", "Areca sp.", "Bismarckia nobilis", "Washingtonia robusta", "Ptychosperma macarthurii", "Beccariophoenix madagascariensis", "Bactris plumeriana", "Washingtonia filifera", "Pseudophoenix sargentii", "Roystonea borinquena", "Schippia concolor", "Thrinax radiata", "Livistona chinensis", "Pritchardia pacifica", "Coccothrinax argentata", "Dictyosperma album", "Caryota mitis", "Caryota urens", "Raphis excelsa", "Roystonia regia", "Ptychosperma elegans", "Dypsis decaryi", "Pritchardia vuylstekeana", "Bactris gasipaes", "Bactris plumeriana", "Phoenix dactylifera", "Phoenix canariensis", "Phoenix reclinata", "Arecaceae (espécies desta família)", "Heliconiaceae (espécies desta família)", "Musaceae (espécies desta família)", "Pandanaceae (espécies desta família)", "Strelitziaceae (espécies desta família)", "Zingiberaceae (espécies desta família)"], part: ["plantas", "mudas", "raízes", "caules", "ramos", "folhas", "flores", "frutos"], orig: ["RR", "AM"], dest: ["AC", "AL", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"], prag: "Raoiella indica", pragc: "ÁCARO-VERMELHO-DAS-PALMEIRAS", exig: ["PTV com a seguinte declaração adicional: \"Não se observou a presença de Raoiella indica no local de produção e a partida foi inspecionada e encontra-se livre da praga\"; ", "A partida deve ser transportada em caminhão lonado ou tipo baú, e lacrado; ", "A PTV deve conter o(s) número(s) do(s) lacre(s);", "Estas exigências fitossanitárias não se aplicam a material in vitro."], proib: false, leg: "Instrução Normativa MAPA nº 14, de 6 de abril de 2010", link: "leg/IN14-2010.pdf" },
	    { desc: "DE UF com ocorrência de Mosca-da-carambola PARA UF reconhecida pelo MAPA como livre da ocorrência de Mosca-da-carambola", hosp: ["Averrhoa carambola", "Psidium guajava", "Syzygium malaccense", "Citrus aurantium", "Manilkara zapota", "Mangifera indica", "Malpighia punicifolia", "Terminalia catappa", "Garcinia dulcis", "Chrysophyllum cainito", "Spondias lutea", "Anacardium occidentale", "Artocarpus altilis", "Arenga pinnata", "Artocarpus integrifolia", "Syzygium samarangense", "Syzygium aqueum", "Syzygium jambos", "Ziziphus mauritiana", "Ziziphus jujuba", "Citrus sinensis", "Averrhoa bilimbi", "Capsicum annuum", "Eugenia uniflora", "Citrus paradisi", "Citrus reticulata", "Licopersicum esculentum"], part: ["frutos"], orig: ["AP", "RR"], dest: ["AC", "AL", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"], prag: "Bactrocera carambolae", pragc: "MOSCA-DA-CARAMBOLA", exig: ["TRÂNSITO PROIBIDO"], proib: false, leg: "Portaria SDA/MAPA nº 21, de 25 de março de 1999", link: "leg/PORT21-1999.pdf" },
	    { desc: "DE UF com ocorrência de Ácaro-hindu-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Ácaro-hindu-dos-citros", hosp: ["Citrus spp.", "Cocos nucifera", "Azadirachta indica", "Sorghum bicolor", "Acacia sp.", "Melia azedarach"], part: ["plantas", "mudas", "raízes", "caules", "ramos", "folhas", "flores", "frutos"], orig: ["RR"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"], prag: "Schizotetranychus hindustanicus", pragc: "ÁCARO HINDU", exig: ["PARA FRUTOS DE CITROS: \n\n1.1 - PTV com a declaração adicional: \"A partida atende às exigências constantes da Instrução Normativa MAPA nº 8, de 17 de abril de 2012, encontra-se livre do Ácaro Hindu dos Citros\";", "PARA OUTRAS PLANTAS E DEMAIS PARTES de PLANTAS: TRÂNSITO PROIBIDO.", "Estas exigências fitossanitárias não se aplicam a material in vitro, madeira serrada e, ainda, frutos de coco (Cocus nucifera) secos e descascados;"], proib: false, leg: "Instrução Normativa MAPA nº 8, de 17 de abril de 2012", link: "leg/IN08-2012.pdf" },
	    { desc: "DE qualquer UF PARA qualquer UF", hosp: ["Musa spp."], part: ["material para pesquisa"], orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["Autorização Declaratória emitida pela Área de Sanidade Vegetal da Superintendência Federal da Agricultura - SFA, na Unidade da Federação de origem do material genético;", "O material genético deve ser transportado em recipiente lacrado, devendo o número do lacre constar da Autorização Declaratória;", "O interessado deve comunicar a SFA de destino da partida, quando do recebimento do material, para inspeção fitossanitária;", "Estas exigências fitossanitárias só se aplicam a material genético;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE UF sem ocorrência de Moko-da-bananeira PARA UF com ocorrência de de Moko-da-bananeira", hosp: ["Musa spp.", "Heliconia spp."], part: ["mudas"], orig: ["AC", "AL", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "SC", "SP", "TO"], dest: ["AM", "AP", "PA", "RO", "RR", "SE"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas encontram- se livres de Ralstonia solanacearum raça 2\";", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF sem ocorrência de Moko-da-bananeira PARA UF com ocorrência de Moko-da-bananeira", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], dest: ["AM", "AP", "PA", "RO", "RR", "SE"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n  \n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;  \n\n1.2 - A partida deve ser transportada em recipiente lacrado;\n\n2 - SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA: \n\n2.1 - PTV para comprovar a origem.", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF com ocorrência de Moko-da-bananeira PARA área livre de Moko-da-bananeira", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AM", "AP", "PA", "RO", "RR", "SE"], dest: ["CE", "PE", "PI", "SC"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum raça 2\";", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF com ocorrência de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AM", "AP", "PA", "RO", "RR", "SE"], dest: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;\n\n1.2 -  A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos em UP onde não foi observada a presença de Ralstonia solanacearum raça 2, nos últimos doze meses\"; OU\n\n2.2 - PTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum raça 2\";", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF sem ocorrência de Moko-da-bananeira PARA UF sem ocorrência de de Moko-da-bananeira", hosp: ["Musa spp.", "Heliconia spp."], part: ["mudas"], orig: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], dest: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas encontram- se livres de Ralstonia solanacearum raça 2\";\n\n2.2 - A partida deve estar lacrada e o(s) número(s) do(s) lacre(s) deve(m) constar da PTV, para transitar pelas seguintes UF's: AP,AM,PA,RO,RR e SE;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE qualquer UF PARA qualquer UF", hosp: ["Musa spp."], part: ["mudas"], orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], prag: "BSV e CMV", pragc: "BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS", exig: ["PTV com a seguinte declaração adicional: \"A partida encontra-se livre dos vírus Banana streak virus (BSV) e Cucumber mosaic virus (CMV), de acordo com o laudo laboratorial [nº do laudo], [nome do laboratório] -[município e UF de localização do laboratório]\";", "As mudas de bananeira que transitarem em desrespeito às determinações deste artigo ficam sujeitas à interceptação, caso em que será determinado o retorno das mesmas ao local de origem e comunicado ao órgão fiscalizador da produção e comércio, para adoção das providências cabíveis, conforme o art. 13, § 2º., da Instrução Normativa MAPA nº. 46, de 27 de dezembro de 2010."], proib: false, leg: "Instrução Normativa MAPA nº 46, de 27 de dezembro de 2010", link: "leg/IN46-2010.pdf" },
	    { desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira", hosp: ["Vitis spp. e seus híbridos"], part: ["mudas"], orig: ["BA", "CE", "PE", "RR"], dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"], prag: "Xanthomonas campestris pv. viticola", pragc: "CANCRO-DA-VIDEIRA", exig: ["PTV com a seguinte declaração adicional: \"As mudas foram obtidas por micropropagação e indexadas para Xanthomonas campestris pv. viticola\"."], proib: false, leg: "Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014", link: "leg/IN02-2014.pdf" },
	    { desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira", hosp: ["Vitis spp. e seus híbridos"], part: ["frutos"], orig: ["BA", "CE", "PE", "RR"], dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"], prag: "Xanthomonas campestris pv. viticola", pragc: "CANCRO-DA-VIDEIRA", exig: ["PTV com a seguinte declaração adicional: \"Os frutos foram produzidos em propriedade onde são adotadas as medidas de prevenção e controle do cancro bacteriano da videira, previstas na legislação fitossanitária\";", "Estas exigências fitossanitárias só se aplicam a frutos, quando destinados a consumo in natura."], proib: false, leg: "Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014", link: "leg/IN02-2014.pdf" },
	    { desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira", hosp: ["Vitis spp. e seus híbridos"], part: ["material para pesquisa"], orig: ["BA", "CE", "PE", "RR"], dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"], prag: "Xanthomonas campestris pv. viticola", pragc: "CANCRO-DA-VIDEIRA", exig: ["PTV com a seguinte declaração adicional: \"O material foi lacrado na origem, sob número de lacre X, e embalado de maneira a garantir a não dispersão da praga\"."], proib: false, leg: "Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014", link: "leg/IN02-2014.pdf" },
	    { desc: "DE UF com ocorrência de Cancro-europeu-das-pomáceas PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-europeu-das-pomáceas", hosp: ["Acacia sp.", "Acer sp.", "Acer circinatum", "Acer macrophyllum", "Acer mono subsp. Heterophyllum", "Acer negundo", "Acer palmatum", "Acer pennsylvanicum", "Acer pseudoplatanus", "Acer rubrum", "Acer saccharum", "Acer spicatum", "Aesculus sp.", "Aesculus hippocastanum", "Aesculus turbinata", "Albizia lebbeck", "Alnus sp.", "Alnus glutinosa", "Alnus incana", "Alnus japonica", "Alnus rubra", "Amelanchier laevis", "Avena sativa", "Betula sp.", "Betula lenta", "Betula lutea (synonym: alleghaniensis)", "Betula maximowicziana", "Betula nigra", "Betula papyrifera", "Betula pendula (syn:verrucosa)", "Betula populifolia", "Betula pubescens", "Camellia sinensis", "Carpinus sp.", "Carpinus betulas", "Carya spp.", "Carya cordiformis", "Carya glabra", "Carya ovata", "Carya tomentosa", "Carya illinoensis", "Castanea dentata", "Cercis canadensis", "Citrus sinensis", "Coprosma areolata", "Coprosma lucida", "Cornus sp.", "Cornus muttallii", "Corylus avellana", "Corylus heterophylla var. thunbergiii", "Corylus sieboldiana", "Craetaegus monogyna", "Crataegus oxyacanthoides (syn: oxyacantha )", "Eriobotrya japonica", "Fagus americana", "Fagus crenata f. grandifolia (syn.Americana)", "Fagus sp.", "Fagus orientalis", "Fagus sylvantica", "Fagus silvatica f. purpurea", "Frangula almus", "Fraxinus bungeana", "Fraxinus excelsior", "Fraxinus mandshurica", "Fraxinus mandshurica var. Japonica", "Fraxinus nigra (syn. sambucifolia)", "Ilex aquifolium", "Juglans sp.", "Juglans cinerea", "Juglans nigra", "Juglans regia", "Laburnum anagyrioides", "Liriodendron tulipifera", "Malus sp.", "Malus communis", "Malus sylvestris", "Malus pumila", "Malus x domestica", "Malus pumila var domestica", "Nyssa sylvatica", "Persea gratissima", "Picea abies", "Platanus orientalis", "Populus spp.", "Populus alba", "Populus x canadensis", "Populus balsamifera", "Populus grandidenta", "Populus tremula", "Populus tremuloides", "Populus wislizeni", "Prunus spp.", "Prunus avium", "Prunus serotina", "Prunus salicina", "Prunus ssiori", "Prunus subhirtella var. pendula", "Prunus virginiana", "Pyrus malus", "Pyrus pyrifolia", "Pyrus pyrifolia var culta", "Pyrus communis", "Quercus sp.", "Quercus alba", "Quercus bicolor", "Quercus borealis (syn: rubra)", "Quercus coccinea", "Quercus garryana", "Quercus glandulifera", "Quercus laurifolia", "Quercus mongolica var grosserrata", "Quercus montana", "Quercus robur", "Quercus rubra", "Quercus velutina", "Rhus typhina", "Ribes sp.", "Robinia pseudoacacia", "Rosa spp.", "Salix spp.", "Salix alba", "Salix alba var Vitelina", "Salix alba L. Coerulea", "Salix amygdaloides", "Salix amygdalina", "Salix cinerea", "Salix nigricans", "Salix purpurea", "Sophora microphylla", "Sorbus sp.", "Sorbus aria", "Sorbus aucuparia", "Sorbus domestica", "Swietenia mahagoni", "Tilia sp.", "Tilia americana", "Tilia cordata", "Ulmus sp.", "Ulmus americana", "Ulmus glabra (syn. montana)", "Umbelluraria californica", "Viola sp."], part: ["mudas", "sementes", "estacas", "bulbos", "tubérculos", "manivas", "toletes", "gemas", "ramas", "rizomas"], orig: ["PR", "RS", "SC"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "SP", "TO"], prag: "Neonectria galligena (=Nectria galligena)", pragc: "CANCRO EUROPEU DAS POMÁCEAS", exig: ["PTV com a seguinte declaração adicional: \"A Unidade de produção foi inspecionada oficialmente durante o período de produção e não foi constatada a presença de sintomas de infecção pela praga Neonectria galligena\";", "Esta exigência fitossanitária não se aplica a material propagativo in vitro."], proib: false, leg: "Instrução Normativa nº 20, de 20 de junho de 2013", link: "leg/IN20-2013.pdf" },
	    { desc: "DE UF com ocorrência de Cancro-europeu-das-pomáceas PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-europeu-das-pomáceas", hosp: ["Acacia sp.", "Acer sp.", "Acer circinatum", "Acer macrophyllum", "Acer mono subsp. Heterophyllum", "Acer negundo", "Acer palmatum", "Acer pennsylvanicum", "Acer pseudoplatanus", "Acer rubrum", "Acer saccharum", "Acer spicatum", "Aesculus sp.", "Aesculus hippocastanum", "Aesculus turbinata", "Albizia lebbeck", "Alnus sp.", "Alnus glutinosa", "Alnus incana", "Alnus japonica", "Alnus rubra", "Amelanchier laevis", "Avena sativa", "Betula sp.", "Betula lenta", "Betula lutea (synonym: alleghaniensis)", "Betula maximowicziana", "Betula nigra", "Betula papyrifera", "Betula pendula (syn:verrucosa)", "Betula populifolia", "Betula pubescens", "Camellia sinensis", "Carpinus sp.", "Carpinus betulas", "Carya spp.", "Carya cordiformis", "Carya glabra", "Carya ovata", "Carya tomentosa", "Carya illinoensis", "Castanea dentata", "Cercis canadensis", "Citrus sinensis", "Coprosma areolata", "Coprosma lucida", "Cornus sp.", "Cornus muttallii", "Corylus avellana", "Corylus heterophylla var. thunbergiii", "Corylus sieboldiana", "Craetaegus monogyna", "Crataegus oxyacanthoides (syn: oxyacantha )", "Eriobotrya japonica", "Fagus americana", "Fagus crenata f. grandifolia (syn.Americana)", "Fagus sp.", "Fagus orientalis", "Fagus sylvantica", "Fagus silvatica f. purpurea", "Frangula almus", "Fraxinus bungeana", "Fraxinus excelsior", "Fraxinus mandshurica", "Fraxinus mandshurica var. Japonica", "Fraxinus nigra (syn. sambucifolia)", "Ilex aquifolium", "Juglans sp.", "Juglans cinerea", "Juglans nigra", "Juglans regia", "Laburnum anagyrioides", "Liriodendron tulipifera", "Malus sp.", "Malus communis", "Malus sylvestris", "Malus pumila", "Malus x domestica", "Malus pumila var domestica", "Nyssa sylvatica", "Persea gratissima", "Picea abies", "Platanus orientalis", "Populus spp.", "Populus alba", "Populus x canadensis", "Populus balsamifera", "Populus grandidenta", "Populus tremula", "Populus tremuloides", "Populus wislizeni", "Prunus spp.", "Prunus avium", "Prunus serotina", "Prunus salicina", "Prunus ssiori", "Prunus subhirtella var. pendula", "Prunus virginiana", "Pyrus malus", "Pyrus pyrifolia", "Pyrus pyrifolia var culta", "Pyrus communis", "Quercus sp.", "Quercus alba", "Quercus bicolor", "Quercus borealis (syn: rubra)", "Quercus coccinea", "Quercus garryana", "Quercus glandulifera", "Quercus laurifolia", "Quercus mongolica var grosserrata", "Quercus montana", "Quercus robur", "Quercus rubra", "Quercus velutina", "Rhus typhina", "Ribes sp.", "Robinia pseudoacacia", "Rosa spp.", "Salix spp.", "Salix alba", "Salix alba var Vitelina", "Salix alba L. Coerulea", "Salix amygdaloides", "Salix amygdalina", "Salix cinerea", "Salix nigricans", "Salix purpurea", "Sophora microphylla", "Sorbus sp.", "Sorbus aria", "Sorbus aucuparia", "Sorbus domestica", "Swietenia mahagoni", "Tilia sp.", "Tilia americana", "Tilia cordata", "Ulmus sp.", "Ulmus americana", "Ulmus glabra (syn. montana)", "Umbelluraria californica", "Viola sp."], part: ["frutos"], orig: ["PR", "RS", "SC"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "SP", "TO"], prag: "Neonectria galligena (=Nectria galligena)", pragc: "CANCRO EUROPEU DAS POMÁCEAS", exig: ["PTV com a seguinte declaração adicional: \"Na unidade de produção e Unidade de Consolidação - UC foram adotados os procedimentos de controle e prevenção previstos nesta norma e os frutos não apresentam sintomas de Neonectria galligena\"."], proib: false, leg: "Instrução Normativa nº 20, de 20 de junho de 2013", link: "leg/IN20-2013.pdf" },
	    { desc: "DE UF com ocorrência de Cancro Cítrico PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro Cítrico", hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."], part: ["mudas", "sementes", "estacas", "gemas"], orig: ["MT", "MS", "MG", "PR", "RS", "RR", "SC", "SP", "CE", "MA"], dest: ["AC", "AL", "AM", "AP", "BA", "DF", "ES", "GO", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "SE", "TO"], prag: "Xanthomonas citri susp. Citri (=Xanthomonas axonopodis pv. Citri)", pragc: "CANCRO CÍTRICO", exig: ["A partida deve ser produzida em propriedade sem ocorrência de Cancro Cítrico; ", "Autorização emitida pela Comissão Executiva da CANECC da Unidade da Federação produtora, solicitada pelo órgão de Defesa Sanitária Vegetal da UF adquirente; ", "PTV."], proib: false, leg: "Portaria MAPA nº 291, de 23 de julho de 1997", link: "leg/PORT291-1997.pdf" },
	    { desc: "DE UF com ocorrência de Cancro Cítrico PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro Cítrico", hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."], part: ["frutos"], orig: ["MT", "MS", "MG", "PR", "RS", "RR", "SC", "SP", "CE", "MA"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], prag: "Xanthomonas citri susp. Citri (=Xanthomonas axonopodis pv. Citri)", pragc: "CANCRO CÍTRICO", exig: ["TRÂNSITO PROIBIDO, se a partida for procedente de plantas remanescentes não contaminadas, localizadas em propriedades interditadas;", "Nota Fiscal e PTV, se a partida for produzida em propriedade de município interditado, com itinerário a ser obedecido;", "PTV, com itinerário a ser obedecido, se os frutos cítricos forem produzidos em propriedades não contaminadas, de municípios com ocorrência de Cancro Cítrico nos últimos dois anos;", "Nenhuma exigência para frutos cítricos produzidos em município sem ocorrência de Cancro Cítrico;", "O transporte de frutos cítricos deve ser realizado a granel por veículo adequadamente coberto, em embalagens descartáveis ou em caixas desinfestadas."], proib: false, leg: "Portaria MAPA nº 291, de 23 de julho de 1997", link: "leg/PORT291-1997.pdf" },
	    { desc: "DE UF com ocorrência de Greening PARA UF reconhecida pelo MAPA como livre da ocorrência de Greening", hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp.", "Murraya paniculata"], part: ["mudas", "sementes", "estacas", "gemas", "ramas", "raízes"], orig: ["MG", "PR", "SP"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "TO"], prag: "Candidatus Liberibacter spp.", pragc: "GREENING", exig: ["PTV;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em\ndesacordo com o previsto nesta Instrução Normativa, será sumariamente destruída, não cabendo ao infrator qualquer tipo de indenização, sem prejuízo das demais sanções estabelecidas pela legislação estadual e federal de defesa sanitária vegetal, conforme o art. 5º, da Instrução Normativa MAPA nº. 53, de 16 de outubro de 2010."], proib: false, leg: "Instrução Normativa nº 53, de 16 de outubro de 2008", link: "leg/IN53-2008.pdf" },
	    { desc: "DE UF com ocorrência de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Pinta-preta-dos-citros", hosp: ["Citrus spp."], part: ["mudas", "sementes", "estacas", "gemas"], orig: ["AM", "ES", "MT", "MS", "MG", "PR", "RJ", "RS", "SC", "SP", "BA", "GO", "RO"], dest: ["AC", "AL", "AP", "CE", "DF", "MA", "PA", "PB", "PE", "PI", "RN", "RR", "SE", "TO"], prag: "Guignardia citricarpa (=Phyllosticta citricarpa)", pragc: "PINTA-PRETA-DOS-CITROS", exig: ["PTV;", "A partida deve ser transportada em veículos fechados ou totalmente protegidos por lona."], proib: false, leg: "Instrução Normativa MAPA nº 3, de 8 de janeiro de 2008", link: "leg/IN03-2008.pdf" },
	    { desc: "DE UF com ocorrência de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Pinta-preta-dos-citros", hosp: ["Citrus spp."], part: ["frutos"], orig: ["AM", "ES", "MT", "MS", "MG", "PR", "RJ", "RS", "SC", "SP", "BA", "GO", "RO"], dest: ["AC", "AL", "AP", "CE", "DF", "MA", "PA", "PB", "PE", "PI", "RN", "RR", "SE", "TO"], prag: "Guignardia citricarpa (=Phyllosticta citricarpa)", pragc: "PINTA-PRETA-DOS-CITROS", exig: ["PTV com a seguinte declaração adicional: \"Os frutos foram produzidos sob Manejo Integrado de Guignardia citricarpa e submetidos a processo de seleção para a retirada de folhas e partes de ramos\";", "Os frutos devem estar isentos de material vegetativo."], proib: false, leg: "Instrução Normativa MAPA nº 3, de 8 de janeiro de 2008", link: "leg/IN03-2008.pdf" },
	    { desc: "DE UF com ocorrência de Broca Conígera PARA UF reconhecida pelo MAPA como livre da ocorrência de Broca Conígera", hosp: ["Myroxylon balsamum", "Anacardium occidentale", "Delonix regia", "Manihot esculenta", "Mangifera indica", "Switenia macrophyla", "Hevea brasiliensis", "Tectona grandis"], part: ["madeira", "maniva", "estaca"], orig: ["MT"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], prag: "Sinoxylon conigerum", pragc: "BROCA CONÍGERA", exig: ["PTV."], proib: false, leg: "", link: "" },
	    { desc: "DE UF com ocorrência de Cochonilha-do-carmim PARA UF reconhecida pelo MAPA como livre da ocorrência de Cochonilha-do-carmim", hosp: ["Opuntia cochenillifera"], part: ["palma"], orig: ["CE", "PB", "PE", "PI", "RN"], dest: ["AC", "AL", "AM", "AP", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], prag: "Dactylopius opuntiae", pragc: "COCHONILHA-DO-CARMIM", exig: ["PTV;", "Nas barreiras fitossanitárias interestaduais, caso seja constatada por meio de inspeção visual, infestação por cochonilha-do-carmim, independente da espécie, toda a partida será imediatamente apreendida e destruída de modo a impedir a sobrevivência da praga, conforme o art. 6º. da Instrução Normativa MAPA nº. 23 de maio de 2007."], proib: false, leg: "Instrução Normativa MAPA nº 23, de 29 de maio de 2007", link: "leg/IN23-2007.pdf" },
	    { desc: "DE qualquer UF PARA qualquer UF", hosp: ["Heliconia spp.", "Musa spp."], part: ["mudas"], orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV;", "As mudas devem ser transportadas in vitro;", "A exigência de PTV não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a mudas micropropagadas;"], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE UF sem ocorrência de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["frutos", "flores"], orig: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], dest: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:  \n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;   \n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:   \n\n2.1 - PTV para comprovar a origem.", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009;"], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF sem ocorrência de Moko-da-bananeira PARA área livre de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["frutos", "flores"], orig: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], dest: ["CE", "PE", "PI", "SC"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - A partida deve estar acompanhada de Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:   \n\n2.1 - PTV para comprovar a origem.", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE área livre de Moko-da-bananeira PARA UF com ocorrência de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["frutos", "flores"], orig: ["CE", "PE", "PI", "SC"], dest: ["AM", "AP", "PA", "RO", "RR", "SE"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;", "A partida quando deve ser transportada em recipiente lacrado;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009;", "Estas exigências fitossanitárias só se aplicam a partida destinada a estudo em instituição de pesquisa científica."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE área livre de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["frutos", "flores"], orig: ["CE", "PE", "PI", "SC"], dest: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;", "A partida deve ser transportada em recipiente lacrado;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.", "Estas exigências só se aplicam a partida destinada a estudo em instituição de pesquisa científica."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE área livre de Moko-da-bananeira PARA área livre de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["frutos", "flores"], orig: ["CE", "PE", "PI", "SC"], dest: ["CE", "PE", "PI", "SC"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida\n\n 1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas foram produzidas em área livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento\";", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF com ocorrência de Moko-da-bananeira PARA área livre de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["rizomas"], orig: ["AM", "AP", "PA", "RO", "RR", "SE"], dest: ["CE", "PE", "PI", "SC"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - A partida deve estar acompanhada de Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA: TRÂNSITO PROIBIDO;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF com ocorrência de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["rizomas"], orig: ["AM", "AP", "PA", "RO", "RR", "SE"], dest: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - A partida deve estar acompanhada de Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA: TRÂNSITO PROIBIDO;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF sem ocorrência de Moko-da-bananeira PARA área livre de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["mudas"], orig: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], dest: ["CE", "PE", "PI", "SC"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas encontram- se livres de Ralstonia solanacearum raça 2\";\n\n2.2 - A partida deve estar lacrada e o(s) número(s) do(s) lacre(s) deve(m) constar da PTV, para transitar pelas seguintes UF's: AP,AM,PA,RO,RR e SE;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE área livre de Moko-da-bananeira PARA UF com ocorrência de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["mudas"], orig: ["CE", "PE", "PI", "SC"], dest: ["AM", "AP", "PA", "RO", "RR", "SE"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas foram produzidas em área livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento\";\n\n2.2 - A partida deve estar lacrada e o(s) número(s) do(s) lacre(s) deve(m) constar da PTV;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE área livre de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["mudas"], orig: ["CE", "PE", "PI", "SC"], dest: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), de UF de origem da partida \n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas foram produzidas em área livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento\";\n\n2.2 - A partida deve estar lacrada e o(s) número(s) do(s) lacre(s) deve(m) constar da PTV;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF com ocorrência de Moko-da-bananeira PARA área livre de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["mudas"], orig: ["AM", "AP", "PA", "RO", "RR", "SE"], dest: ["CE", "PE", "PI", "SC"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n- Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA) de origem, quando a partida for aplicada a estudo em instituição de pesquisa científica e, neste caso, deverá ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas encontram- se livres de Ralstonia solanacearum raça 2\";\n\n2.2 - A partida deve estar lacrada e o(s) número(s) do(s) lacre(s) deve(m) constar da PTV;\n\n2.3 - A PTV deve constar se as mudas são in vitro ou micropropagadas;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009;", "Estas exigências fitossanitárias só se aplicam a mudas in vitro e micropropagadas."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE UF com ocorrência de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["mudas"], orig: ["AM", "AP", "PA", "RO", "RR", "SE"], dest: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida,\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas encontram- se livres de Ralstonia solanacearum raça 2\";\n\n2.2 - A partida deve estar lacrada e o(s) número(s) do(s) lacre(s) deve(m) constar da PTV;\n\n2.3 - A PTV deve constar se as mudas são in vitro ou micropropagadas;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009;", "Estas exigências fitossanitárias só se aplicam a mudas in vitro e micropropagadas."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE área livre de Moko-da-bananeira PARA área livre de Moko-da-bananeira", hosp: ["Heliconia spp.", "Musa spp."], part: ["mudas"], orig: ["CE", "PE", "PI", "SC"], dest: ["CE", "PE", "PI", "SC"], prag: "Ralstonia solanacearum raça 2", pragc: "MOKO-DA-BANANEIRA", exig: ["SE A PARTIDA FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n1.1 - Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida ,\n\n1.2 - A partida deve ser transportada em recipiente lacrado;", "SE A PARTIDA NÃO FOR DESTINADA A ESTUDO EM INSTITUIÇÃO DE PESQUISA CIENTÍFICA:\n\n2.1 - PTV com a seguinte declaração adicional: \"As mudas foram produzidas em área livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento\";\n\n2.2 - A partida deve estar lacrada e o(s) número(s) do(s) lacre(s) deve(m) constar da PTV;", "Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."], proib: undefined, leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "leg/IN17-2009.pdf" },
	    { desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AL", "BA", "CE", "DF", "ES", "GO", "PB", "PE", "PI", "RN", "SE"], dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;", "As bananas não podem transitar em cacho, em todo o território nacional;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["MG"], dest: ["AC", "AM", "AP", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;", "As bananas não podem transitar em cacho, em todo o território nacional;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida proveniente do municípios livres de Sigatoka Negra em MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; "], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["MS"], dest: ["AC", "AM", "AP", "MA", "MG", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;", "As bananas não podem transitar em cacho, em todo o território nacional;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área livre de Sigatoka Negra PARA área livre de Sigatoka Negra ", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AL", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"], dest: ["AL", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;", "A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos municípios listados no item 6.1), MS (exceto pelos municípios listados no item 6.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;", "As bananas não podem transitar em cacho, em todo o território nacional;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida proveniente e destinada a município livre de Sigatoka Negra de MG e de MS: \n\n6.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n6.2 - Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], dest: ["AL", "BA", "CE", "DF", "ES", "GO", "PB", "PE", "PI", "RN", "SE"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a seguinte declaração adicional: \"A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra\";", "As bananas não podem transitar em cacho, em todo o território nacional;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida destinada a município livre de Sigatoka Negra de MG e de MS: \n\n5.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n5.2-  Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AC", "AM", "AP", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], dest: ["MG"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a seguinte declaração adicional: \"A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra\";", "As bananas não podem transitar em cacho, em todo o território nacional;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida destinada a municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AC", "AM", "AP", "MA", "MG", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], dest: ["MS"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a seguinte declaração adicional: \"A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra\";", "As bananas não podem transitar em cacho, em todo o território nacional;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida destinada a municípios livres de Sigatoka Negra de MS: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \nb) Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["frutos", "flores"], orig: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["Partida isenta de PTV, mas é PROIBIDO o trânsito por AL, BA, CE, DF, ES, GO, PB, PE, PI, RN, SE, bem como pelos municípios livres de Sigatoka Negra de MG e de MS: \n\n1.1 -  Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n1.2 - Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú, Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["mudas"], orig: ["AL", "BA", "CE", "DF", "ES", "GO", "PB", "PE", "PI", "RN", "SE"], dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;", "exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["mudas"], orig: ["MG"], dest: ["AC", "AM", "AP", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;", "exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["mudas"], orig: ["MS"], dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;", "exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;", "Estas exigências só se aplicam a mudas não micropopagadas;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área livre de Sigatoka Negra PARA área livre de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["mudas"], orig: ["AL", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"], dest: ["AL", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra.", "A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos municípios listados no item 5.1), MS (exceto pelos municípios listados no item 5.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;", "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;", "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Estas exigências só se aplicam a partida proveniente e destinada a município livre de Sigatoka Negra de MG e de MS: \n\n5.1 -  Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba, Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n5.2 - Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú, Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;", "Estas exigências só se aplicam a mudas não micropopagadas;"], proib: false, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["mudas"], orig: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], dest: ["AL", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["	TRÂNSITO PROIBIDO;", "Esta proibição não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Esta proibição só se aplica a partida destinada a município livre de Sigatoka Negra de MG e de MS:\n\n3.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo;\n\n3.2 - Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;", "Esta proibição só se aplica à mudas não micropopagadas;"], proib: true, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra", hosp: ["Musa spp.", "Heliconia spp."], part: ["mudas"], orig: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO"], prag: "Mycosphaerella fijiensis", pragc: "SIGATOKA NEGRA", exig: ["TRÂNSITO PROIBIDO;", "Esta proibição não se aplica a partida proveniente de município livre de Sigatoka Negra de MG e de MS: \n\n1.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n1.2 -  Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;", "Esta proibição não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;", "Esta proibição só se aplica a mudas não micropopagadas;"], proib: true, leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "leg/IN17-2005.pdf" },
	    { desc: "DE UF com ocorrência de Anthonomus tomentosus PARA UF sem a ocorrência de Anthonomus tomentosus", hosp: ["Malpighia spp."], part: ["frutos"], orig: ["AM", "RR"], dest: ["AC", "AL", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"], prag: "Anthonomus tomentosus", pragc: "ANTHONOMUS TOMENTOSUS", exig: ["Se a partida for proveniente de todos os municípios de RR, exceto de Boa Vista, Mucajaí e Pacaraima, ou dos municípios de Presidente Figueiredo, Rio Preto da Eva e Manaus, no AM: PTV com a seguinte declaração adicional: A partida foi inspecionada e encontra-se livre de Anthonomus tomentosus;", "Se a partida for proveniente de Boa Vista, Mucajaí e Pacaraima, em RR: TRÂNSITO PROIBIDO.", "Estas exigências fitossanitárias só se aplicam a frutos frescos;"], proib: false, leg: "Instrução Normativa MAPA/SDA nº. 19, de 16 de setembro de 2014", link: "leg/IN19-2014.pdf.pdf" }
	];
	exports.db = db;
	var hospedeiros = [
	    { nomeVul: "Abacate (Persea gratissima)", nomeSci: "Persea gratissima" },
	    { nomeVul: "Abeto Europeu", nomeSci: "Picea abies" },
	    { nomeVul: "Abeto Vermelho Comum", nomeSci: "Picea abies" },
	    { nomeVul: "Abiu", nomeSci: "Chrysophyllum cainito" },
	    { nomeVul: "Acácia", nomeSci: "Acacia sp." },
	    { nomeVul: "Açaí", nomeSci: "Euterpe oleracea" },
	    { nomeVul: "Açaí-do-Amazonas", nomeSci: "Euterpe precatoria" },
	    { nomeVul: "Açaí-solitário", nomeSci: "Euterpe precatoria" },
	    { nomeVul: "Acerola", nomeSci: "Malpighia punicifolia" },
	    { nomeVul: "Acerola (qualquer espécie)", nomeSci: "Malpighia spp." },
	    { nomeVul: "Álamo", nomeSci: "Populus spp." },
	    { nomeVul: "Álamo Americano", nomeSci: "Tilia americana" },
	    { nomeVul: "Álamo Branco", nomeSci: "Populus alba" },
	    { nomeVul: "Álamo Grande Dente", nomeSci: "Populus grandidenta" },
	    { nomeVul: "Álamo (Populus x canadensis)", nomeSci: "Populus x canadensis" },
	    { nomeVul: "Albízia", nomeSci: "Albizia lebbeck" },
	    { nomeVul: "Alder", nomeSci: "Alnus sp." },
	    { nomeVul: "Alder Cinza", nomeSci: "Alnus incana" },
	    { nomeVul: "Alder Japonês", nomeSci: "Alnus japonica" },
	    { nomeVul: "Alder Negro", nomeSci: "Alnus glutinosa" },
	    { nomeVul: "Alder Vermelha", nomeSci: "Alnus rubra" },
	    { nomeVul: "Algodão Americano", nomeSci: "Populus wislizeni" },
	    { nomeVul: "Alpínia purpurata", nomeSci: "Alpínia purpurata" },
	    { nomeVul: "Alpínia zerumbet", nomeSci: "Alpínia zerumbet" },
	    { nomeVul: "Ameixa", nomeSci: "Prunus spp." },
	    { nomeVul: "Ameixeira-japonesa", nomeSci: "Prunus salicina" },
	    { nomeVul: "Amelanchier", nomeSci: "Amelanchier laevis" },
	    { nomeVul: "Amendoeira", nomeSci: "Terminalia catappa" },
	    { nomeVul: "Amieiro", nomeSci: "Alnus glutinosa" },
	    { nomeVul: "Amieiro Negro", nomeSci: "Frangula almus" },
	    { nomeVul: "Angico", nomeSci: "Acacia sp." },
	    { nomeVul: "Arapaju", nomeSci: "Manilkara zapota" },
	    { nomeVul: "Arbusto Espinheiro do Bosque", nomeSci: "Crataegus oxyacanthoides (syn: oxyacantha )" },
	    { nomeVul: "Arbusto Espinhento", nomeSci: "Craetaegus monogyna" },
	    { nomeVul: "Arecaceae (espécies desta família)", nomeSci: "Arecaceae (espécies desta família)" },
	    { nomeVul: "Aricuriroba", nomeSci: "Syagrus schizophylla" },
	    { nomeVul: "Árvore-do-viajante", nomeSci: "Ravenala madagascariensis" },
	    { nomeVul: "Árvore Preta", nomeSci: "Fraxinus nigra (syn. sambucifolia)" },
	    { nomeVul: "Aveia", nomeSci: "Avena sativa" },
	    { nomeVul: "Avelã", nomeSci: "Corylus avellana" },
	    { nomeVul: "Aveleira Japonesa", nomeSci: "Corylus sieboldiana" },
	    { nomeVul: "Aveleira Siberiana", nomeSci: "Corylus heterophylla var. thunbergiii" },
	    { nomeVul: "Azevinho", nomeSci: "Ilex aquifolium" },
	    { nomeVul: "Bacupari", nomeSci: "Garcinia dulcis" },
	    { nomeVul: "Bálsamo", nomeSci: "Myroxylon balsamum" },
	    { nomeVul: "Banana", nomeSci: "Musa spp." },
	    { nomeVul: "Bastão-do-imperador", nomeSci: "Etlingera alatior" },
	    { nomeVul: "Bétula", nomeSci: "Betula sp." },
	    { nomeVul: "Bétula Branca (B. papyrifera)", nomeSci: "Betula papyrifera" },
	    { nomeVul: "Bétula Branca (B. pubescens)", nomeSci: "Betula pubescens" },
	    { nomeVul: "Bétula Cinza", nomeSci: "Betula populifolia" },
	    { nomeVul: "Bétula lenta", nomeSci: "Betula nigra" },
	    { nomeVul: "Bétula Lenta", nomeSci: "Betula lenta" },
	    { nomeVul: "Bétula Lutea", nomeSci: "Betula lutea (synonym: alleghaniensis)" },
	    { nomeVul: "Bétula Monarca", nomeSci: "Betula maximowicziana" },
	    { nomeVul: "Bétula Negra", nomeSci: "Betula nigra" },
	    { nomeVul: "Bétula Papel", nomeSci: "Betula papyrifera" },
	    { nomeVul: "Bétula Prata", nomeSci: "Betula pendula (syn: verrucosa)" },
	    { nomeVul: "Bilimbi", nomeSci: "Chrysophyllum cainito" },
	    { nomeVul: "Bordo", nomeSci: "Acer sp." },
	    { nomeVul: "Bordo (Acer pennsylvanicum)", nomeSci: "Acer pennsylvanicum" },
	    { nomeVul: "Bordo (Acer pseudoplatanus)", nomeSci: "Acer pseudoplatanus" },
	    { nomeVul: "Bordo (A. mono)", nomeSci: "Acer mono subsp. Heterophyllum" },
	    { nomeVul: "Bordo (A. negundo)", nomeSci: "Acer negundo" },
	    { nomeVul: "Bordo (A. sacharum)", nomeSci: "Acer saccharum" },
	    { nomeVul: "Bordo (A. spicatum)", nomeSci: "Acer spicatum" },
	    { nomeVul: "Bordo-da-videira", nomeSci: "Acer circinatum" },
	    { nomeVul: "Bordo Japonês", nomeSci: "Acer palmatum" },
	    { nomeVul: "Bordo Vermelho (A. macrophyllum)", nomeSci: "Acer macrophyllum" },
	    { nomeVul: "Bordo Vermelho (A. rubrum)", nomeSci: "Acer rubrum" },
	    { nomeVul: "Broto Vermelho Oriental", nomeSci: "Cercis canadensis" },
	    { nomeVul: "Buriti", nomeSci: "Mauritia flexuosa" },
	    { nomeVul: "Cabeça-de-negro", nomeSci: "Albizia lebbeck" },
	    { nomeVul: "Caimito", nomeSci: "Chrysophyllum cainito" },
	    { nomeVul: "Cajazeiro", nomeSci: "Spondias lutea" },
	    { nomeVul: "Caju", nomeSci: "Anacardium occidentale" },
	    { nomeVul: "Cana-da-Índia", nomeSci: "Canna indica" },
	    { nomeVul: "Carambola", nomeSci: "Averrhoa carambola" },
	    { nomeVul: "Carambola amarela", nomeSci: "Chrysophyllum cainito" },
	    { nomeVul: "Cárpino", nomeSci: "Carpinus sp." },
	    { nomeVul: "Cárpino Betulas", nomeSci: "Carpinus betulas" },
	    { nomeVul: "Carvalho", nomeSci: "Quercus sp." },
	    { nomeVul: "Carvalho Água", nomeSci: "Quercus laurifolia" },
	    { nomeVul: "Carvalho-alvarinho", nomeSci: "Quercus robur" },
	    { nomeVul: "Carvalho Branco", nomeSci: "Quercus alba" },
	    { nomeVul: "Carvalho Branco do Brejo", nomeSci: "Quercus bicolor" },
	    { nomeVul: "Carvalho Branco Oregon", nomeSci: "Quercus garryana" },
	    { nomeVul: "Carvalho Campeão (Q. borealis)", nomeSci: "Quercus borealis (syn: rubra)" },
	    { nomeVul: "Carvalho Campeão (Q. rubra)", nomeSci: "Quercus rubra" },
	    { nomeVul: "Carvalho Castanheiro", nomeSci: "Quercus montana" },
	    { nomeVul: "Carvalho Escarlata", nomeSci: "Quercus coccinea" },
	    { nomeVul: "Carvalho Folha Diamante", nomeSci: "Quercus laurifolia" },
	    { nomeVul: "Carvalho Glorioso", nomeSci: "Quercus laurifolia" },
	    { nomeVul: "Carvalho Glorioso do Brejo", nomeSci: "Quercus laurifolia" },
	    { nomeVul: "Carvalho Konara", nomeSci: "Quercus glandulifera" },
	    { nomeVul: "Carvalho Koreano", nomeSci: "Quercus glandulifera" },
	    { nomeVul: "Carvalho Mongoliano", nomeSci: "Quercus mongolica var grosserrata" },
	    { nomeVul: "Carvalho Obtuso", nomeSci: "Quercus laurifolia" },
	    { nomeVul: "Carvalho Oregon", nomeSci: "Quercus garryana" },
	    { nomeVul: "Carvalho Preto", nomeSci: "Quercus velutina" },
	    { nomeVul: "Carvalho-roble", nomeSci: "Quercus robur" },
	    { nomeVul: "Carvalho-vermelho", nomeSci: "Quercus robur" },
	    { nomeVul: "Carvalho Vermelho do Norte (Q. borealis)", nomeSci: "Quercus borealis (syn: rubra)" },
	    { nomeVul: "Carvalho Vermelho do Norte (Q. rubra)", nomeSci: "Quercus rubra" },
	    { nomeVul: "Castanha-da-Índia", nomeSci: "Aesculus sp." },
	    { nomeVul: "Castanha-da-Índia (A. hippocastanum)", nomeSci: "Aesculus hippocastanum" },
	    { nomeVul: "Castanheiro Europeu", nomeSci: "Castanea dentata" },
	    { nomeVul: "Cereja de Pássaro", nomeSci: "Prunus ssiori" },
	    { nomeVul: "Cereja de Pássaro Virginia", nomeSci: "Prunus virginiana" },
	    { nomeVul: "Cerejeira", nomeSci: "Prunus avium" },
	    { nomeVul: "Cerejeira Chorona", nomeSci: "Prunus subhirtella var. pendula" },
	    { nomeVul: "Cerejeira Negra", nomeSci: "Prunus serotina" },
	    { nomeVul: "Chá-da-Índia", nomeSci: "Camellia sinensis" },
	    { nomeVul: "Choupo", nomeSci: "Populus spp." },
	    { nomeVul: "Choupo-bálsamo", nomeSci: "Populus balsamifera" },
	    { nomeVul: "Choupo Branco", nomeSci: "Populus alba" },
	    { nomeVul: "Choupo (P. x canadensis)", nomeSci: "Populus x canadensis" },
	    { nomeVul: "Choupo Tremedor", nomeSci: "Populus tremula" },
	    { nomeVul: "Choupo Trêmulo", nomeSci: "Populus tremuloides" },
	    { nomeVul: "Chuva-de-ouro", nomeSci: "Laburnum anagyrioides" },
	    { nomeVul: "Cinamomo", nomeSci: "Melia azedarach" },
	    { nomeVul: "Cinza-da-montanha", nomeSci: "Sorbus sp." },
	    { nomeVul: "Cinza Japonês", nomeSci: "Fraxinus mandshurica var. Japonica" },
	    { nomeVul: "Citros", nomeSci: "Citrus spp." },
	    { nomeVul: "Coprosma Frondoso Fino", nomeSci: "Coprosma areolata" },
	    { nomeVul: "Coqueiro", nomeSci: "Cocos nucifera" },
	    { nomeVul: "Coquinho-azedo", nomeSci: "Butia capitata" },
	    { nomeVul: "Corifa", nomeSci: "Corypha umbraculifera" },
	    { nomeVul: "Corrente-de-ouro", nomeSci: "Laburnum anagyrioides" },
	    { nomeVul: "Cyca", nomeSci: "Cycas spp." },
	    { nomeVul: "Dendezeiro", nomeSci: "Elaeis guineensis" },
	    { nomeVul: "Espinho Branco", nomeSci: "Craetaegus monogyna" },
	    { nomeVul: "Estrelítzia", nomeSci: "Strelitzia reginae" },
	    { nomeVul: "Faia", nomeSci: "Fagus sp." },
	    { nomeVul: "Faia Americana", nomeSci: "Fagus americana" },
	    { nomeVul: "Faia Cobre", nomeSci: "Fagus sylvantica" },
	    { nomeVul: "Faia do Oriente", nomeSci: "Fagus orientalis" },
	    { nomeVul: "Faia Japonesa", nomeSci: "Fagus crenata f. grandifolia (syn.Americana)" },
	    { nomeVul: "Faia Roxa", nomeSci: "Fagus silvatica f. purpurea" },
	    { nomeVul: "Falso Castanho Japonês", nomeSci: "Aesculus turbinata" },
	    { nomeVul: "Faveiro", nomeSci: "Albizia lebbeck" },
	    { nomeVul: "Feixe Branco", nomeSci: "Sorbus aria" },
	    { nomeVul: "Flamboyant", nomeSci: "Delonix regia" },
	    { nomeVul: "Fortunela", nomeSci: "Fortunella spp." },
	    { nomeVul: "Freixo (F. bungeana)", nomeSci: "Fraxinus bungeana" },
	    { nomeVul: "Freixo (F. excelsior)", nomeSci: "Fraxinus excelsior" },
	    { nomeVul: "Fruta Pão", nomeSci: "Artocarpus altilis" },
	    { nomeVul: "Gafanhoto Preto", nomeSci: "Robinia pseudoacacia" },
	    { nomeVul: "Goiaba", nomeSci: "Psidium guajava" },
	    { nomeVul: "Goma Preta", nomeSci: "Nyssa sylvatica" },
	    { nomeVul: "Gomuto", nomeSci: "Arenga pinnata" },
	    { nomeVul: "Grão Amargo", nomeSci: "Prunus virginiana" },
	    { nomeVul: "Helicônia", nomeSci: "Heliconia spp." },
	    { nomeVul: "Heliconiaceae (espécies desta família)", nomeSci: "Heliconiaceae (espécies desta família)" },
	    { nomeVul: "Jaca", nomeSci: "Artocarpus integrifolia" },
	    { nomeVul: "Jambo Branco (S. aqueum)", nomeSci: "Syzygium aqueum" },
	    { nomeVul: "Jambo Branco (S. samarangense)", nomeSci: "Syzygium samarangense" },
	    { nomeVul: "Jambo D'água", nomeSci: "Syzygium aqueum" },
	    { nomeVul: "Jambo Rosa", nomeSci: "Syzygium jambos" },
	    { nomeVul: "Jambo Vermelho", nomeSci: "Syzygium malaccense" },
	    { nomeVul: "Jerivá", nomeSci: "Syagrus romanzoffianum" },
	    { nomeVul: "Juglans", nomeSci: "Juglans sp." },
	    { nomeVul: "Jujuba (Z. jujuba)", nomeSci: "Ziziphus jujuba" },
	    { nomeVul: "Jujuba (Z. mauritiana)", nomeSci: "Ziziphus mauritiana" },
	    { nomeVul: "Jurema", nomeSci: "Acacia sp." },
	    { nomeVul: "Karamu", nomeSci: "Coprosma lucida" },
	    { nomeVul: "Kowhai", nomeSci: "Sophora microphylla" },
	    { nomeVul: "Laranja", nomeSci: "Citrus sinensis" },
	    { nomeVul: "Laranja Azeda", nomeSci: "Citrus aurantium" },
	    { nomeVul: "Laranja Doce", nomeSci: "Citrus sinensis" },
	    { nomeVul: "Licuala", nomeSci: "Licuala grandis" },
	    { nomeVul: "Limão Cayena", nomeSci: "Averrhoa bilimbi" },
	    { nomeVul: "Linda-dos-jardins", nomeSci: "Rhus typhina" },
	    { nomeVul: "Louro Califórnia", nomeSci: "Umbelluraria californica" },
	    { nomeVul: "Louro-de-baiano", nomeSci: "Alpínia zerumbet" },
	    { nomeVul: "Maça", nomeSci: "Malus sp." },
	    { nomeVul: "Maçã (M. communis)", nomeSci: "Malus communis" },
	    { nomeVul: "Maçã (M. pumila)", nomeSci: "Malus pumila" },
	    { nomeVul: "Maçã (M. pumila var domestica)", nomeSci: "Malus pumila var domestica" },
	    { nomeVul: "Maçã (M. x domestica)", nomeSci: "Malus x domestica" },
	    { nomeVul: "Maçã (Pyrus malus)", nomeSci: "Pyrus malus" },
	    { nomeVul: "Maçaranduba", nomeSci: "Manilkara zapota" },
	    { nomeVul: "Maçã Silvestre", nomeSci: "Malus sylvestris" },
	    { nomeVul: "Manchu Cinza", nomeSci: "Fraxinus mandshurica" },
	    { nomeVul: "Mandioca", nomeSci: "Manihot esculenta" },
	    { nomeVul: "Manga", nomeSci: "Mangifera indica" },
	    { nomeVul: "Mararaju", nomeSci: "Manilkara zapota" },
	    { nomeVul: "Miraguama", nomeSci: "Coccothrinax miraguama" },
	    { nomeVul: "Mogno", nomeSci: "Switenia macrophyla" },
	    { nomeVul: "Mogno Indiano Ocidental", nomeSci: "Swietenia mahagoni" },
	    { nomeVul: "Murta", nomeSci: "Murraya paniculata" },
	    { nomeVul: "Musaceae (espécies desta família)", nomeSci: "Musaceae (espécies desta família)" },
	    { nomeVul: "Nespereira", nomeSci: "Eriobotrya japonica" },
	    { nomeVul: "Nim", nomeSci: "Azadirachta indica" },
	    { nomeVul: "Nogueira", nomeSci: "Juglans sp." },
	    { nomeVul: "Nogueira Amarga", nomeSci: "Carya cordiformis" },
	    { nomeVul: "Nogueira Amarga", nomeSci: "Carya spp." },
	    { nomeVul: "Nogueira Amarga Casca de Pelúcia", nomeSci: "Carya ovata" },
	    { nomeVul: "Nogueira Amarga Coração Branco", nomeSci: "Carya tomentosa" },
	    { nomeVul: "Nogueira Amarga de Porco", nomeSci: "Carya glabra" },
	    { nomeVul: "Nogueira Branca", nomeSci: "Juglans cinerea" },
	    { nomeVul: "Nogueira Comum", nomeSci: "Juglans regia" },
	    { nomeVul: "Nogueira europeia", nomeSci: "Juglans regia" },
	    { nomeVul: "Nogueira Pecã", nomeSci: "Carya illinoensis" },
	    { nomeVul: "Nogueira Preta", nomeSci: "Juglans nigra" },
	    { nomeVul: "Noruega Abeto", nomeSci: "Picea abies" },
	    { nomeVul: "Olmo", nomeSci: "Ulmus sp." },
	    { nomeVul: "Olmo Americano", nomeSci: "Ulmus americana" },
	    { nomeVul: "Olmo Escocês", nomeSci: "Ulmus glabra (syn. montana)" },
	    { nomeVul: "Padreiro", nomeSci: "Acer pseudoplatanus" },
	    { nomeVul: "Palma Corcho", nomeSci: "Microcycas calocoma" },
	    { nomeVul: "Palma forrageira", nomeSci: "Opuntia cochenillifera" },
	    { nomeVul: "Palmeira (Aiphanes spp.)", nomeSci: "Aiphanes spp." },
	    { nomeVul: "Palmeira Areca", nomeSci: "Areca sp." },
	    { nomeVul: "Palmeira areca-bambu", nomeSci: "Dypsis lutescens" },
	    { nomeVul: "Palmeira arecina", nomeSci: "Veitchia arecina" },
	    { nomeVul: "Palmeira-azul", nomeSci: "Bismarckia nobilis" },
	    { nomeVul: "Palmeira Bismarckia", nomeSci: "Bismarckia nobilis" },
	    { nomeVul: "Palmeira chamaedora", nomeSci: "Chamaedora spp." },
	    { nomeVul: "Palmeira (Coccothrinax barbadensis)", nomeSci: "Coccothrinax barbadensis" },
	    { nomeVul: "Palmeira-da-California", nomeSci: "Washingtonia robusta" },
	    { nomeVul: "Palmeira-de-bismarck", nomeSci: "Bismarckia nobilis" },
	    { nomeVul: "Palmeira-de-macarthur", nomeSci: "Ptychosperma macarthurii" },
	    { nomeVul: "Palmeira-de-manarano", nomeSci: "Beccariophoenix madagascariensis" },
	    { nomeVul: "Palmeira-de-Manila", nomeSci: "Veitchia maerrillii" },
	    { nomeVul: "Palmeira-de-saia", nomeSci: "Washingtonia filifera" },
	    { nomeVul: "Palmeira Fênix", nomeSci: "Phoenix roebelenii" },
	    { nomeVul: "Palmeira-fuso", nomeSci: "Pseudophoenix sargentii" },
	    { nomeVul: "Palmeira-imperial-de-Porto Rico", nomeSci: "Roystonea borinquena" },
	    { nomeVul: "Palmeira-leque", nomeSci: "Schippia concolor" },
	    { nomeVul: "Palmeira-leque-brilhante", nomeSci: "Thrinax radiata" },
	    { nomeVul: "Palmeira-leque-da-china", nomeSci: "Livistona chinensis" },
	    { nomeVul: "Palmeira-leque-de-Fiji", nomeSci: "Pritchardia pacifica" },
	    { nomeVul: "Palmeira-paorotis", nomeSci: "Acoelorraphe wrightii" },
	    { nomeVul: "Palmeira-prateada-de-leque", nomeSci: "Coccothrinax argentata" },
	    { nomeVul: "Palmeira-princesa", nomeSci: "Dictyosperma album" },
	    { nomeVul: "Palmeira (Pseudophoenix vinifera)", nomeSci: "Pseudophoenix vinifera" },
	    { nomeVul: "Palmeira-rabo-de-peixe (Caryota mitis)", nomeSci: "Caryota mitis" },
	    { nomeVul: "Palmeira-rabo-de-peixe (Caryota urens)", nomeSci: "Caryota urens" },
	    { nomeVul: "Palmeira-rabo-de-raposa", nomeSci: "Wodyetia bifurcata" },
	    { nomeVul: "Palmeira-ráfia", nomeSci: "Raphis excelsa" },
	    { nomeVul: "Palmeira Real", nomeSci: "Roystonia regia" },
	    { nomeVul: "Palmeira Real Australiana", nomeSci: "Archontophoenix alexandrae" },
	    { nomeVul: "Palmeira Sagu", nomeSci: "Cycas spp." },
	    { nomeVul: "Palmeira Solitária", nomeSci: "Ptychosperma elegans" },
	    { nomeVul: "Palmeira- triângulo", nomeSci: "Dypsis decaryi" },
	    { nomeVul: "Pandanaceae (espécies desta família)", nomeSci: "Pandanaceae (espécies desta família)" },
	    { nomeVul: "Pau Cachorro", nomeSci: "Cornus sp." },
	    { nomeVul: "Pau Cachorro do Pacífico", nomeSci: "Cornus muttallii" },
	    { nomeVul: "Pera Asiática", nomeSci: "Pyrus pyrifolia" },
	    { nomeVul: "Pera Nashi", nomeSci: "Pyrus pyrifolia" },
	    { nomeVul: "Pereira Europeia", nomeSci: "Pyrus communis" },
	    { nomeVul: "Pereira Japonesa", nomeSci: "Pyrus pyrifolia var culta" },
	    { nomeVul: "Pimenta-do-diabo", nomeSci: "Capsicum annuum" },
	    { nomeVul: "Pimenta Picante", nomeSci: "Capsicum annuum" },
	    { nomeVul: "Pinus", nomeSci: "Pinus spp." },
	    { nomeVul: "Pitanga Vermelha", nomeSci: "Eugenia uniflora" },
	    { nomeVul: "Plátano", nomeSci: "Platanus orientalis" },
	    { nomeVul: "Plátano Oriental", nomeSci: "Platanus orientalis" },
	    { nomeVul: "Pomelo", nomeSci: "Citrus paradisi" },
	    { nomeVul: "Poncirus", nomeSci: "Poncirus spp." },
	    { nomeVul: "Pritchardia", nomeSci: "Pritchardia vuylstekeana" },
	    { nomeVul: "Pupunha", nomeSci: "Bactris gasipaes" },
	    { nomeVul: "Pupunha Silvestre", nomeSci: "Bactris plumeriana" },
	    { nomeVul: "Ribes", nomeSci: "Ribes sp." },
	    { nomeVul: "Rosa", nomeSci: "Rosa spp." },
	    { nomeVul: "Rustifina Rus", nomeSci: "Rhus typhina" },
	    { nomeVul: "Salgueiro Branco", nomeSci: "Salix alba" },
	    { nomeVul: "Salgueiro Cinza", nomeSci: "Salix cinerea" },
	    { nomeVul: "Salgueiro Dourado", nomeSci: "Salix alba var Vitelina" },
	    { nomeVul: "Salgueiro-folha-de-pêssego", nomeSci: "Salix amygdaloides" },
	    { nomeVul: "Salgueiro Preto", nomeSci: "Salix nigricans" },
	    { nomeVul: "Salgueiro Púrpura", nomeSci: "Salix purpurea" },
	    { nomeVul: "Salgueiro-taco-de-críquete", nomeSci: "Salix alba L. Coerulea" },
	    { nomeVul: "Salgueiro Velho Mundo", nomeSci: "Salix amygdalina" },
	    { nomeVul: "Salix", nomeSci: "Salix spp." },
	    { nomeVul: "Sanguinho", nomeSci: "Frangula almus" },
	    { nomeVul: "Sapoti", nomeSci: "Manilkara zapota" },
	    { nomeVul: "Seringueira", nomeSci: "Hevea brasiliensis" },
	    { nomeVul: "Sete Copas", nomeSci: "Terminalia catappa" },
	    { nomeVul: "Sófora", nomeSci: "Sophora microphylla" },
	    { nomeVul: "Sorgo", nomeSci: "Sorghum bicolor" },
	    { nomeVul: "Sorva", nomeSci: "Sorbus sp." },
	    { nomeVul: "Sorva (S. domestica)", nomeSci: "Sorbus domestica" },
	    { nomeVul: "Strelitziaceae (espécies desta família)", nomeSci: "Strelitziaceae (espécies desta família)" },
	    { nomeVul: "Sumac Staghorn", nomeSci: "Rhus typhina" },
	    { nomeVul: "Tamareira", nomeSci: "Phoenix dactylifera" },
	    { nomeVul: "Tamareira-das-canárias", nomeSci: "Phoenix canariensis" },
	    { nomeVul: "Tamareira-do-Senegal", nomeSci: "Phoenix reclinata" },
	    { nomeVul: "Tangerina", nomeSci: "Citrus reticulata" },
	    { nomeVul: "Taperebá", nomeSci: "Spondias lutea" },
	    { nomeVul: "Teca", nomeSci: "Tectona grandis" },
	    { nomeVul: "Teja", nomeSci: "Tilia cordata" },
	    { nomeVul: "Tejo", nomeSci: "Tilia cordata" },
	    { nomeVul: "Tella", nomeSci: "Tilia cordata" },
	    { nomeVul: "Texa", nomeSci: "Tilia cordata" },
	    { nomeVul: "Tilha", nomeSci: "Tilia cordata" },
	    { nomeVul: "Tília", nomeSci: "Tilia sp." },
	    { nomeVul: "Tillera", nomeSci: "Tilia cordata" },
	    { nomeVul: "Tilo", nomeSci: "Tilia americana" },
	    { nomeVul: "Tomate", nomeSci: "Licopersicum esculentum" },
	    { nomeVul: "Toranja", nomeSci: "Citrus paradisi" },
	    { nomeVul: "Tramazeira", nomeSci: "Sorbus aucuparia" },
	    { nomeVul: "Tulipeiro", nomeSci: "Liriodendron tulipifera" },
	    { nomeVul: "Tupelo", nomeSci: "Nyssa sylvatica" },
	    { nomeVul: "Ulmeiro", nomeSci: "Ulmus sp." },
	    { nomeVul: "Unha-de-gato", nomeSci: "Acacia sp." },
	    { nomeVul: "Videira e seus híbridos", nomeSci: "Vitis spp. e seus híbridos" },
	    { nomeVul: "Vimeiro Púrpura", nomeSci: "Salix purpurea" },
	    { nomeVul: "Viola", nomeSci: "Viola sp." },
	    { nomeVul: "Zingiberaceae (espécies desta família)", nomeSci: "Zingiberaceae (espécies desta família)" }
	];
	exports.hospedeiros = hospedeiros;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var store_1 = __webpack_require__(3);
	var mobx_react_1 = __webpack_require__(10);
	var Mapa = function (_a) { return (store_1.default.exibeMapa ? (React.createElement("div", {class: "center"}, 
	    React.createElement("img", {src: "moko_sigatoka_s.png", width: "60%"})
	)) : null); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = mobx_react_1.observer(Mapa);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var store_1 = __webpack_require__(3);
	var mobx_react_1 = __webpack_require__(10);
	var Base = function (_a) {
	    var db = _a.db;
	    return (store_1.default.exibeBase ? (React.createElement("div", null, 
	        React.createElement("br", null), 
	        React.createElement("table", {style: { "width": "100%" }, class: "table-grid"}, 
	            React.createElement("caption", null, "Exigências"), 
	            React.createElement("thead", null, 
	                React.createElement("tr", null, 
	                    React.createElement("th", {style: { "width": "10%" }}, "Descrição"), 
	                    React.createElement("th", {style: { "width": "20%" }}, "Hospedeiro"), 
	                    React.createElement("th", {style: { "width": "10%" }}, "Partida"), 
	                    React.createElement("th", {style: { "width": "10%" }}, "Origem"), 
	                    React.createElement("th", {style: { "width": "10%" }}, "Destino"), 
	                    React.createElement("th", {style: { "width": "15%" }}, "Legislação"), 
	                    React.createElement("th", {style: { "width": "30%" }}, "Exigências"), 
	                    React.createElement("th", {style: { "width": "5%" }}, "Trânsito Proibido"))
	            ), 
	            React.createElement("tbody", null, db.map(function (item, i) {
	                return (React.createElement("tr", {key: i}, 
	                    React.createElement("td", {style: { "width": "10%" }}, 
	                        React.createElement("span", null, item.desc)
	                    ), 
	                    React.createElement("td", {style: { "width": "20%" }, class: "italic"}, 
	                        React.createElement("span", null, item.hosp)
	                    ), 
	                    React.createElement("td", {style: { "width": "10%" }}, 
	                        React.createElement("span", null, item.part)
	                    ), 
	                    React.createElement("td", {style: { "width": "10%" }}, 
	                        React.createElement("span", null, item.orig)
	                    ), 
	                    React.createElement("td", {style: { "width": "10%" }}, 
	                        React.createElement("span", null, item.dest)
	                    ), 
	                    React.createElement("td", {style: { "width": "15%" }}, 
	                        React.createElement("a", {target: "_blank", "ng-href": "{item.link}"}, item.leg), 
	                        React.createElement("br", null), 
	                        React.createElement("br", null), 
	                        React.createElement("span", null, item.pragc), 
	                        React.createElement("br", null), 
	                        React.createElement("br", null), 
	                        React.createElement("span", {class: "italic"}, item.prag)), 
	                    React.createElement("td", {style: { "width": "30%" }}, 
	                        React.createElement("div", {"ng-repeat": "exig in item.exig track by $index", style: { "margin": "6px" }}, 
	                            React.createElement("span", null, 
	                                "$index+1", 
	                                " - ", 
	                                "exig")
	                        )
	                    ), 
	                    React.createElement("td", {style: { "width": "5%" }, align: "center"}, 
	                        React.createElement("input", {type: "checkbox", onclick: "return false;", "ng-model": "item.proib"})
	                    )));
	            })), 
	            React.createElement("tfoot", {class: "form-barra-botoes"}, 
	                React.createElement("tr", null, 
	                    React.createElement("td", null)
	                )
	            )))) : null);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = mobx_react_1.observer(Base);
	//ng-class-even="'linha-alternada'" 


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _this = this;
	var React = __webpack_require__(1);
	var store_1 = __webpack_require__(3);
	var mobx_react_1 = __webpack_require__(10);
	var handleClick = function (i, event) {
	    if (i === 'Base') {
	        store_1.default.exibeBase = !store_1.default.exibeBase;
	    }
	    ;
	    if (i === 'Mapa') {
	        store_1.default.exibeMapa = !store_1.default.exibeMapa;
	    }
	    ;
	    console.log(i, store_1.default.exibeBase);
	};
	var Menu = function () {
	    return (React.createElement("p", null, 
	        React.createElement("span", null, 
	            React.createElement("a", {href: "#", onClick: handleClick.bind(_this, 'Base')}, "Ver Base de Dados")
	        ), 
	        React.createElement("span", null, 
	            React.createElement("a", {href: "#", onClick: handleClick.bind(_this, 'Mapa')}, 
	                React.createElement("span", null, store_1.default.exibeMapa ? 'Fechar' : 'Ver'), 
	                "          Mapa de Área Livre"), 
	            "         "), 
	        React.createElement("span", {title: "Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão"}, 
	            React.createElement("a", {href: "#", onClick: handleClick.bind(_this)}, "Imprimir")
	        ), 
	        React.createElement("span", null, "Para baixar o Sistema: CTRL + S ")));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = mobx_react_1.observer(Menu);
	//style="float:right;color:#fff;padding:5px 10px 5px 15px;" 


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	    function mrFactory(mobx, React, ReactDOM) {
	        if (!mobx)
	            throw new Error("mobx-react requires the MobX package")
	        if (!React)
	            throw new Error("mobx-react requires React to be available");
	
	        var isDevtoolsEnabled = false;
	
	        // WeakMap<Node, Object>;
	        var componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
	        var renderReporter = new mobx.SimpleEventEmitter();
	
	        function findDOMNode(component) {
	            if (ReactDOM)
	                return ReactDOM.findDOMNode(component);
	            return null;
	        }
	
	        function reportRendering(component) {
	            var node = findDOMNode(component);
	            if (node)
	                componentByNodeRegistery.set(node, component);
	
	            renderReporter.emit({
	                event: 'render',
	                renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
	                totalTime: Date.now() - component.__$mobRenderStart,
	                component: component,
	                node: node
	            });
	        }
	
	        var reactiveMixin = {
	            componentWillMount: function() {
	                // Generate friendly name for debugging
	                var name = [
	                    this.displayName || this.name || (this.constructor && (this.constructor.displayName || this.constructor.name)) || "<component>",
	                    "#", this._reactInternalInstance && this._reactInternalInstance._rootNodeID,
	                    ".render()"
	                ].join("");
	
	                var baseRender = this.render.bind(this);
	                var self = this;
	                var reaction = null;
	                var isRenderingPending = false;
	                function initialRender() {
	                    reaction = new mobx.Reaction(name, function() {
	                        if (!isRenderingPending) {
	                            isRenderingPending = true;
	                            if (typeof self.componentWillReact === "function")
	                                self.componentWillReact();
	                            React.Component.prototype.forceUpdate.call(self)
	                        }
	                    });
	                    reactiveRender.$mobx = reaction;
	                    self.render = reactiveRender;
	                    return reactiveRender();
	                }
	
	                function reactiveRender() {
	                    isRenderingPending = false;
	                    var rendering;
	                    reaction.track(function() {
	                        if (isDevtoolsEnabled)
	                            self.__$mobRenderStart = Date.now();
	                        rendering = mobx.extras.allowStateChanges(false, baseRender);
	                        if (isDevtoolsEnabled)
	                            self.__$mobRenderEnd = Date.now();
	                    });
	                    return rendering;
	                }
	
	                this.render = initialRender;
	            },
	
	            componentWillUnmount: function() {
	                this.render.$mobx && this.render.$mobx.dispose();
	                if (isDevtoolsEnabled) {
	                    var node = findDOMNode(this);
	                    if (node) {
	                        componentByNodeRegistery.delete(node);
	                    }
	                    renderReporter.emit({
	                        event: 'destroy',
	                        component: this,
	                        node: node
	                    });
	                }
	            },
	
	            componentDidMount: function() {
	                if (isDevtoolsEnabled)
	                    reportRendering(this);
	            },
	
	            componentDidUpdate: function() {
	                if (isDevtoolsEnabled)
	                    reportRendering(this);
	            },
	
	            shouldComponentUpdate: function(nextProps, nextState) {
	                // TODO: if context changed, return true.., see #18
	                
	                // if props or state did change, but a render was scheduled already, no additional render needs to be scheduled
	                if (this.render.$mobx && this.render.$mobx.isScheduled() === true)
	                    return false;
	                
	                // update on any state changes (as is the default)
	                if (this.state !== nextState)
	                    return true;
	                // update if props are shallowly not equal, inspired by PureRenderMixin
	                var keys = Object.keys(this.props);
	                var key;
	                if (keys.length !== Object.keys(nextProps).length)
	                    return true;
	                for(var i = keys.length -1; i >= 0, key = keys[i]; i--) {
	                    var newValue = nextProps[key];
	                    if (newValue !== this.props[key]) {
	                        return true;
	                    } else if (newValue && typeof newValue === "object" && !mobx.isObservable(newValue)) {
	                        /**
	                         * If the newValue is still the same object, but that object is not observable,
	                         * fallback to the default React behavior: update, because the object *might* have changed.
	                         * If you need the non default behavior, just use the React pure render mixin, as that one
	                         * will work fine with mobx as well, instead of the default implementation of
	                         * observer.
	                         */
	                        return true;
	                    }
	                }
	                return false;
	            }
	        }
	
	        function patch(target, funcName) {
	            var base = target[funcName];
	            var mixinFunc = reactiveMixin[funcName];
	            if (!base) {
	                target[funcName] = mixinFunc;
	            } else {
	                target[funcName] = function() {
	                    base.apply(this, arguments);
	                    mixinFunc.apply(this, arguments);
	                }
	            }
	        }
	
	        function observer(componentClass) {
	            // If it is function but doesn't seem to be a react class constructor,
	            // wrap it to a react class automatically
	            if (typeof componentClass === "function" && !componentClass.prototype.render && !componentClass.isReactClass && !React.Component.isPrototypeOf(componentClass)) {
	                return observer(React.createClass({
	                    displayName:     componentClass.displayName || componentClass.name,
	                    propTypes:       componentClass.propTypes,
	                    contextTypes:    componentClass.contextTypes,
	                    getDefaultProps: function() { return componentClass.defaultProps; },
	                    render:          function() { return componentClass.call(this, this.props, this.context); }
	                }));
	            }
	
	            if (!componentClass)
	                throw new Error("Please pass a valid component to 'observer'");
	            var target = componentClass.prototype || componentClass;
	
	            [
	                "componentWillMount",
	                "componentWillUnmount",
	                "componentDidMount",
	                "componentDidUpdate"
	            ].forEach(function(funcName) {
	                patch(target, funcName)
	            });
	
	            if (!target.shouldComponentUpdate)
	                target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
	            componentClass.isMobXReactObserver = true;
	            return componentClass;
	        }
	
	        function trackComponents() {
	            if (typeof WeakMap === "undefined")
	                throw new Error("[mobx-react] tracking components is not supported in this browser.");
	            if (!isDevtoolsEnabled)
	                isDevtoolsEnabled = true;
	        }
	
	        return ({
	            observer: observer,
	            reactiveComponent: function() {
	                console.warn("[mobx-react] `reactiveComponent` has been renamed to `observer` and will be removed in 1.1.");
	                return observer.apply(null, arguments);
	            },
	            renderReporter: renderReporter,
	            componentByNodeRegistery: componentByNodeRegistery,
	            trackComponents: trackComponents
	        });
	    }
	
	    // UMD
	    if (true) {
	        module.exports = mrFactory(__webpack_require__(4), __webpack_require__(1), __webpack_require__(2));
	    } else if (typeof define === 'function' && define.amd) {
	        define('mobx-react', ['mobx', 'react', 'react-dom'], mrFactory);
	    } else {
	        this.mobxReact = mrFactory(this['mobx'], this['React'], this['ReactDOM']);
	    }
	})();


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map