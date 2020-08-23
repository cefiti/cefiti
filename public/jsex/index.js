var __defineProperty = Object.defineProperty;
var __hasOwnProperty = Object.prototype.hasOwnProperty;
var __getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __markAsModule = (target) => {
  return __defineProperty(target, "__esModule", {value: true});
};
var __exportStar = (target, module) => {
  __markAsModule(target);
  if (typeof module === "object" || typeof module === "function") {
    for (let key in module)
      if (!__hasOwnProperty.call(target, key) && key !== "default")
        __defineProperty(target, key, {get: () => module[key], enumerable: true});
  }
  return target;
};
var __toModule = (module) => {
  if (module && module.__esModule)
    return module;
  return __exportStar(__defineProperty({}, "default", {value: module, enumerable: true}), module);
};
var __decorate = (decorators, target, key, kind) => {
  var result2 = kind > 1 ? void 0 : kind ? __getOwnPropertyDescriptor(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result2 = (kind ? decorator(target, key, result2) : decorator(result2)) || result2;
  if (kind && result2)
    __defineProperty(target, key, result2);
  return result2;
};

// node_modules/object-assign/index.js
var require_object_assign = __commonJS((exports, module) => {
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  "use strict";
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS((exports, module) => {
  "use strict";
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  module.exports = ReactPropTypesSecret;
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS((exports, module) => {
  "use strict";
  var printWarning = function() {
  };
  if (true) {
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (true) {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
          }
        }
      }
    }
  }
  checkPropTypes.resetWarningCache = function() {
    if (true) {
      loggedTypeFailures = {};
    }
  };
  module.exports = checkPropTypes;
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  /** @license React v16.10.2
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  "use strict";
  if (true) {
    (function() {
      "use strict";
      var _assign = require_object_assign();
      var checkPropTypes = require_checkPropTypes();
      var ReactVersion = "16.10.2";
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      function ReactError(error) {
        error.name = "Invariant Violation";
        return error;
      }
      var lowPriorityWarningWithoutStack = function() {
      };
      {
        var printWarning = function(format) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var argIndex = 0;
          var message = "Warning: " + format.replace(/%s/g, function() {
            return args[argIndex++];
          });
          if (typeof console !== "undefined") {
            console.warn(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
        lowPriorityWarningWithoutStack = function(condition, format) {
          if (format === void 0) {
            throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");
          }
          if (!condition) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }
            printWarning.apply(void 0, [format].concat(args));
          }
        };
      }
      var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;
      var warningWithoutStack = function() {
      };
      {
        warningWithoutStack = function(condition, format) {
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          if (format === void 0) {
            throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");
          }
          if (args.length > 8) {
            throw new Error("warningWithoutStack() currently supports at most 8 arguments.");
          }
          if (condition) {
            return;
          }
          if (typeof console !== "undefined") {
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console.error, console, argsWithFormat);
          }
          try {
            var argIndex = 0;
            var message = "Warning: " + format.replace(/%s/g, function() {
              return args[argIndex++];
            });
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var warningWithoutStack$1 = warningWithoutStack;
      var didWarnStateUpdateForUnmountedComponent = {};
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
          var warningKey = componentName + "." + callerName;
          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }
          warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }
      var ReactNoopUpdateQueue = {
        isMounted: function(publicInstance) {
          return false;
        },
        enqueueForceUpdate: function(publicInstance, callback, callerName) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, "setState");
        }
      };
      var emptyObject = {};
      {
        Object.freeze(emptyObject);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        (function() {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw ReactError(Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."));
            }
          }
        })();
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      {
        var deprecatedAPIs = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        };
        var defineDeprecationWarning = function(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              lowPriorityWarningWithoutStack$1(false, "%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
              return void 0;
            }
          });
        };
        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }
      function ComponentDummy() {
      }
      ComponentDummy.prototype = Component.prototype;
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent;
      _assign(pureComponentPrototype, Component.prototype);
      pureComponentPrototype.isPureReactComponent = true;
      function createRef() {
        var refObject = {
          current: null
        };
        {
          Object.seal(refObject);
        }
        return refObject;
      }
      var ReactCurrentDispatcher = {
        current: null
      };
      var ReactCurrentBatchConfig = {
        suspense: null
      };
      var ReactCurrentOwner = {
        current: null
      };
      var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      var describeComponentFrame = function(name, source, ownerName) {
        var sourceInfo = "";
        if (source) {
          var path = source.fileName;
          var fileName = path.replace(BEFORE_SLASH_RE, "");
          {
            if (/^index\./.test(fileName)) {
              var match = path.match(BEFORE_SLASH_RE);
              if (match) {
                var pathBeforeSlash = match[1];
                if (pathBeforeSlash) {
                  var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                  fileName = folderName + "/" + fileName;
                }
              }
            }
          }
          sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
        } else if (ownerName) {
          sourceInfo = " (created by " + ownerName + ")";
        }
        return "\n    in " + (name || "Unknown") + sourceInfo;
      };
      var Resolved = 1;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved ? lazyComponent._result : null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
      }
      function getComponentName(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            warningWithoutStack$1(false, "Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return "Context.Consumer";
            case REACT_PROVIDER_TYPE:
              return "Context.Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_LAZY_TYPE: {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);
              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }
              break;
            }
          }
        }
        return null;
      }
      var ReactDebugCurrentFrame = {};
      var currentlyValidatingElement = null;
      function setCurrentlyValidatingElement(element) {
        {
          currentlyValidatingElement = element;
        }
      }
      {
        ReactDebugCurrentFrame.getCurrentStack = null;
        ReactDebugCurrentFrame.getStackAddendum = function() {
          var stack = "";
          if (currentlyValidatingElement) {
            var name = getComponentName(currentlyValidatingElement.type);
            var owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
          }
          var impl = ReactDebugCurrentFrame.getCurrentStack;
          if (impl) {
            stack += impl() || "";
          }
          return stack;
        };
      }
      var IsSomeRendererActing = {
        current: false
      };
      var ReactSharedInternals = {
        ReactCurrentDispatcher,
        ReactCurrentBatchConfig,
        ReactCurrentOwner,
        IsSomeRendererActing,
        assign: _assign
      };
      {
        _assign(ReactSharedInternals, {
          ReactDebugCurrentFrame,
          ReactComponentTreeHook: {}
        });
      }
      var warning = warningWithoutStack$1;
      {
        warning = function(condition, format) {
          if (condition) {
            return;
          }
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          warningWithoutStack$1.apply(void 0, [false, format + "%s"].concat(args, [stack]));
        };
      }
      var warning$1 = warning;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            warningWithoutStack$1(false, "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            warningWithoutStack$1(false, "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self) {
        var propName;
        var props = {};
        var key = null;
        var ref = null;
        if (maybeKey !== void 0) {
          key = "" + maybeKey;
        }
        if (hasValidKey(config)) {
          key = "" + config.key;
        }
        if (hasValidRef(config)) {
          ref = config.ref;
        }
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === void 0) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        if (key || ref) {
          var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }
          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
      function createElement(type, config, children) {
        var propName;
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
          }
          if (hasValidKey(config)) {
            key = "" + config.key;
          }
          self = config.__self === void 0 ? null : config.__self;
          source = config.__source === void 0 ? null : config.__source;
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        }
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === void 0) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        {
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      function cloneElement(element, config, children) {
        (function() {
          if (element === null || element === void 0) {
            {
              throw ReactError(Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + "."));
            }
          }
        })();
        var propName;
        var props = _assign({}, element.props);
        var key = element.key;
        var ref = element.ref;
        var self = element._self;
        var source = element._source;
        var owner = element._owner;
        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }
          if (hasValidKey(config)) {
            key = "" + config.key;
          }
          var defaultProps;
          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === void 0 && defaultProps !== void 0) {
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
      }
      function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var SEPARATOR = ".";
      var SUBSEPARATOR = ":";
      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          "=": "=0",
          ":": "=2"
        };
        var escapedString = ("" + key).replace(escapeRegex, function(match) {
          return escaperLookup[match];
        });
        return "$" + escapedString;
      }
      var didWarnAboutMaps = false;
      var userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
      }
      var POOL_SIZE = 10;
      var traverseContextPool = [];
      function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
        if (traverseContextPool.length) {
          var traverseContext = traverseContextPool.pop();
          traverseContext.result = mapResult;
          traverseContext.keyPrefix = keyPrefix;
          traverseContext.func = mapFunction;
          traverseContext.context = mapContext;
          traverseContext.count = 0;
          return traverseContext;
        } else {
          return {
            result: mapResult,
            keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0
          };
        }
      }
      function releaseTraverseContext(traverseContext) {
        traverseContext.result = null;
        traverseContext.keyPrefix = null;
        traverseContext.func = null;
        traverseContext.context = null;
        traverseContext.count = 0;
        if (traverseContextPool.length < POOL_SIZE) {
          traverseContextPool.push(traverseContext);
        }
      }
      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children;
        if (type === "undefined" || type === "boolean") {
          children = null;
        }
        var invokeCallback = false;
        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }
        if (invokeCallback) {
          callback(traverseContext, children, nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
          return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0;
        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn === "function") {
            {
              if (iteratorFn === children.entries) {
                !didWarnAboutMaps ? warning$1(false, "Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.") : void 0;
                didWarnAboutMaps = true;
              }
            }
            var iterator = iteratorFn.call(children);
            var step;
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else if (type === "object") {
            var addendum = "";
            {
              addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
            }
            var childrenString = "" + children;
            (function() {
              {
                {
                  throw ReactError(Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum));
                }
              }
            })();
          }
        }
        return subtreeCount;
      }
      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }
        return traverseAllChildrenImpl(children, "", callback, traverseContext);
      }
      function getComponentKey(component, index) {
        if (typeof component === "object" && component !== null && component.key != null) {
          return escape(component.key);
        }
        return index.toString(36);
      }
      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func, context = bookKeeping.context;
        func.call(context, child, bookKeeping.count++);
      }
      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }
        var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        releaseTraverseContext(traverseContext);
      }
      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result2 = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
        var mappedChild = func.call(context, child, bookKeeping.count++);
        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result2, childKey, function(c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey);
          }
          result2.push(mappedChild);
        }
      }
      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = "";
        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + "/";
        }
        var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        releaseTraverseContext(traverseContext);
      }
      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }
        var result2 = [];
        mapIntoWithKeyPrefixInternal(children, result2, null, func, context);
        return result2;
      }
      function countChildren(children) {
        return traverseAllChildren(children, function() {
          return null;
        }, null);
      }
      function toArray(children) {
        var result2 = [];
        mapIntoWithKeyPrefixInternal(children, result2, null, function(child) {
          return child;
        });
        return result2;
      }
      function onlyChild(children) {
        (function() {
          if (!isValidElement(children)) {
            {
              throw ReactError(Error("React.Children.only expected to receive a single React element child."));
            }
          }
        })();
        return children;
      }
      function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === void 0) {
          calculateChangedBits = null;
        } else {
          {
            !(calculateChangedBits === null || typeof calculateChangedBits === "function") ? warningWithoutStack$1(false, "createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits) : void 0;
          }
        }
        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        {
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits
          };
          Object.defineProperties(Consumer, {
            Provider: {
              get: function() {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true;
                  warning$1(false, "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                }
                return context.Provider;
              },
              set: function(_Provider) {
                context.Provider = _Provider;
              }
            },
            _currentValue: {
              get: function() {
                return context._currentValue;
              },
              set: function(_currentValue) {
                context._currentValue = _currentValue;
              }
            },
            _currentValue2: {
              get: function() {
                return context._currentValue2;
              },
              set: function(_currentValue2) {
                context._currentValue2 = _currentValue2;
              }
            },
            _threadCount: {
              get: function() {
                return context._threadCount;
              },
              set: function(_threadCount) {
                context._threadCount = _threadCount;
              }
            },
            Consumer: {
              get: function() {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true;
                  warning$1(false, "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                }
                return context.Consumer;
              }
            }
          });
          context.Consumer = Consumer;
        }
        {
          context._currentRenderer = null;
          context._currentRenderer2 = null;
        }
        return context;
      }
      function lazy(ctor) {
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _ctor: ctor,
          _status: -1,
          _result: null
        };
        {
          var defaultProps;
          var propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function() {
                return defaultProps;
              },
              set: function(newDefaultProps) {
                warning$1(false, "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                defaultProps = newDefaultProps;
                Object.defineProperty(lazyType, "defaultProps", {
                  enumerable: true
                });
              }
            },
            propTypes: {
              configurable: true,
              get: function() {
                return propTypes;
              },
              set: function(newPropTypes) {
                warning$1(false, "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                propTypes = newPropTypes;
                Object.defineProperty(lazyType, "propTypes", {
                  enumerable: true
                });
              }
            }
          });
        }
        return lazyType;
      }
      function forwardRef2(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            warningWithoutStack$1(false, "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
          } else if (typeof render !== "function") {
            warningWithoutStack$1(false, "forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
          } else {
            !(render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, "forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.") : void 0;
          }
          if (render != null) {
            !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?") : void 0;
          }
        }
        return {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render
        };
      }
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
      }
      function memo2(type, compare) {
        {
          if (!isValidElementType(type)) {
            warningWithoutStack$1(false, "memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
          }
        }
        return {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: compare === void 0 ? null : compare
        };
      }
      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        (function() {
          if (!(dispatcher !== null)) {
            {
              throw ReactError(Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem."));
            }
          }
        })();
        return dispatcher;
      }
      function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        {
          !(unstable_observedBits === void 0) ? warning$1(false, "useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "") : void 0;
          if (Context._context !== void 0) {
            var realContext = Context._context;
            if (realContext.Consumer === Context) {
              warning$1(false, "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            } else if (realContext.Provider === Context) {
              warning$1(false, "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
            }
          }
        }
        return dispatcher.useContext(Context, unstable_observedBits);
      }
      function useState2(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }
      function useRef2(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect2(create, inputs) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, inputs);
      }
      function useLayoutEffect(create, inputs) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, inputs);
      }
      function useCallback2(callback, inputs) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, inputs);
      }
      function useMemo2(create, inputs) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, inputs);
      }
      function useImperativeHandle(ref, create, inputs) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, inputs);
      }
      function useDebugValue2(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }
      var emptyObject$1 = {};
      function useResponder(responder, listenerProps) {
        var dispatcher = resolveDispatcher();
        {
          if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
            warning$1(false, "useResponder: invalid first argument. Expected an event responder, but instead got %s", responder);
            return;
          }
        }
        return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
      }
      function withSuspenseConfig(scope, config) {
        var previousConfig = ReactCurrentBatchConfig.suspense;
        ReactCurrentBatchConfig.suspense = config === void 0 ? null : config;
        try {
          scope();
        } finally {
          ReactCurrentBatchConfig.suspense = previousConfig;
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current.type);
          if (name) {
            return "\n\nCheck the render method of `" + name + "`.";
          }
        }
        return "";
      }
      function getSourceInfoErrorAddendum(source) {
        if (source !== void 0) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, "");
          var lineNumber = source.lineNumber;
          return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
      }
      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== void 0) {
          return getSourceInfoErrorAddendum(elementProps.__source);
        }
        return "";
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
          var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }
        return info;
      }
      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        }
        setCurrentlyValidatingElement(element);
        {
          warning$1(false, 'Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
        }
        setCurrentlyValidatingElement(null);
      }
      function validateChildKeys(node, parentType) {
        if (typeof node !== "object") {
          return;
        }
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (typeof iteratorFn === "function") {
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === void 0 || typeof type === "string") {
          return;
        }
        var name = getComponentName(type);
        var propTypes;
        if (typeof type === "function") {
          propTypes = type.propTypes;
        } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }
        if (propTypes) {
          setCurrentlyValidatingElement(element);
          checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
          setCurrentlyValidatingElement(null);
        } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true;
          warningWithoutStack$1(false, "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function") {
          !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.") : void 0;
        }
      }
      function validateFragmentProps(fragment) {
        setCurrentlyValidatingElement(fragment);
        var keys = Object.keys(fragment.props);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (key !== "children" && key !== "key") {
            warning$1(false, "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
            break;
          }
        }
        if (fragment.ref !== null) {
          warning$1(false, "Invalid attribute `ref` supplied to `React.Fragment`.");
        }
        setCurrentlyValidatingElement(null);
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type);
        if (!validType) {
          var info = "";
          if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          }
          var sourceInfo = getSourceInfoErrorAddendum(source);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }
          var typeString;
          if (type === null) {
            typeString = "null";
          } else if (Array.isArray(type)) {
            typeString = "array";
          } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
            info = " Did you accidentally export a JSX literal instead of a component?";
          } else {
            typeString = typeof type;
          }
          warning$1(false, "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self);
        if (element == null) {
          return element;
        }
        if (validType) {
          var children = props.children;
          if (children !== void 0) {
            if (isStaticChildren) {
              if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  validateChildKeys(children[i], type);
                }
                if (Object.freeze) {
                  Object.freeze(children);
                }
              } else {
                warning$1(false, "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              }
            } else {
              validateChildKeys(children, type);
            }
          }
        }
        if (hasOwnProperty$1.call(props, "key")) {
          warning$1(false, "React.jsx: Spreading a key to JSX is a deprecated pattern. Explicitly pass a key after spreading props in your JSX call. E.g. <ComponentName {...props} key={key} />");
        }
        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }
        return element;
      }
      function jsxWithValidationStatic(type, props, key) {
        return jsxWithValidation(type, props, key, true);
      }
      function jsxWithValidationDynamic(type, props, key) {
        return jsxWithValidation(type, props, key, false);
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type);
        if (!validType) {
          var info = "";
          if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          }
          var sourceInfo = getSourceInfoErrorAddendumForProps(props);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }
          var typeString;
          if (type === null) {
            typeString = "null";
          } else if (Array.isArray(type)) {
            typeString = "array";
          } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
            info = " Did you accidentally export a JSX literal instead of a component?";
          } else {
            typeString = typeof type;
          }
          warning$1(false, "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments);
        if (element == null) {
          return element;
        }
        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }
        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }
        return element;
      }
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        {
          Object.defineProperty(validatedFactory, "type", {
            enumerable: false,
            get: function() {
              lowPriorityWarningWithoutStack$1(false, "Factory.type is deprecated. Access the class directly before passing it to createFactory.");
              Object.defineProperty(this, "type", {
                value: type
              });
              return type;
            }
          });
        }
        return validatedFactory;
      }
      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
      var hasBadMapPolyfill;
      {
        hasBadMapPolyfill = false;
        try {
          var frozenObject = Object.freeze({});
          var testMap = new Map([[frozenObject, null]]);
          var testSet = new Set([frozenObject]);
          testMap.set(0, 0);
          testSet.add(0);
        } catch (e) {
          hasBadMapPolyfill = true;
        }
      }
      function createFundamentalComponent(impl) {
        if (!hasBadMapPolyfill) {
          Object.freeze(impl);
        }
        var fundamantalComponent = {
          $$typeof: REACT_FUNDAMENTAL_TYPE,
          impl
        };
        {
          Object.freeze(fundamantalComponent);
        }
        return fundamantalComponent;
      }
      function createEventResponder(displayName, responderConfig) {
        var getInitialState = responderConfig.getInitialState, onEvent = responderConfig.onEvent, onMount = responderConfig.onMount, onUnmount = responderConfig.onUnmount, onRootEvent = responderConfig.onRootEvent, rootEventTypes = responderConfig.rootEventTypes, targetEventTypes = responderConfig.targetEventTypes, targetPortalPropagation = responderConfig.targetPortalPropagation;
        var eventResponder = {
          $$typeof: REACT_RESPONDER_TYPE,
          displayName,
          getInitialState: getInitialState || null,
          onEvent: onEvent || null,
          onMount: onMount || null,
          onRootEvent: onRootEvent || null,
          onUnmount: onUnmount || null,
          rootEventTypes: rootEventTypes || null,
          targetEventTypes: targetEventTypes || null,
          targetPortalPropagation: targetPortalPropagation || false
        };
        if (!hasBadMapPolyfill) {
          Object.freeze(eventResponder);
        }
        return eventResponder;
      }
      function createScope(fn) {
        var scopeComponent = {
          $$typeof: REACT_SCOPE_TYPE,
          fn
        };
        {
          Object.freeze(scopeComponent);
        }
        return scopeComponent;
      }
      var enableFlareAPI = false;
      var enableFundamentalAPI = false;
      var enableScopeAPI = false;
      var enableJSXTransformAPI = false;
      var React10 = {
        Children: {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        },
        createRef,
        Component,
        PureComponent,
        createContext,
        forwardRef: forwardRef2,
        lazy,
        memo: memo2,
        useCallback: useCallback2,
        useContext,
        useEffect: useEffect2,
        useImperativeHandle,
        useDebugValue: useDebugValue2,
        useLayoutEffect,
        useMemo: useMemo2,
        useReducer,
        useRef: useRef2,
        useState: useState2,
        Fragment: REACT_FRAGMENT_TYPE,
        Profiler: REACT_PROFILER_TYPE,
        StrictMode: REACT_STRICT_MODE_TYPE,
        Suspense: REACT_SUSPENSE_TYPE,
        unstable_SuspenseList: REACT_SUSPENSE_LIST_TYPE,
        createElement: createElementWithValidation,
        cloneElement: cloneElementWithValidation,
        createFactory: createFactoryWithValidation,
        isValidElement,
        version: ReactVersion,
        unstable_withSuspenseConfig: withSuspenseConfig,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
      };
      if (enableFlareAPI) {
        React10.unstable_useResponder = useResponder;
        React10.unstable_createResponder = createEventResponder;
      }
      if (enableFundamentalAPI) {
        React10.unstable_createFundamental = createFundamentalComponent;
      }
      if (enableScopeAPI) {
        React10.unstable_createScope = createScope;
      }
      if (enableJSXTransformAPI) {
        {
          React10.jsxDEV = jsxWithValidation;
          React10.jsx = jsxWithValidationDynamic;
          React10.jsxs = jsxWithValidationStatic;
        }
      }
      var React$2 = Object.freeze({
        default: React10
      });
      var React$3 = React$2 && React10 || React$2;
      var react10 = React$3.default || React$3;
      module.exports = react10;
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  "use strict";
  if (false) {
    module.exports = null;
  } else {
    module.exports = require_react_development();
  }
});

// node_modules/scheduler/cjs/scheduler.development.js
var require_scheduler_development = __commonJS((exports) => {
  /** @license React v0.16.2
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  "use strict";
  if (true) {
    (function() {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var enableSchedulerDebugging = false;
      var enableIsInputPending = false;
      var enableMessageLoopImplementation = true;
      var enableProfiling = true;
      var requestHostCallback;
      var requestHostTimeout;
      var cancelHostTimeout;
      var shouldYieldToHost;
      var requestPaint;
      if (typeof window === "undefined" || typeof MessageChannel !== "function") {
        var _callback = null;
        var _timeoutID = null;
        var _flushCallback = function() {
          if (_callback !== null) {
            try {
              var currentTime = exports.unstable_now();
              var hasRemainingTime = true;
              _callback(hasRemainingTime, currentTime);
              _callback = null;
            } catch (e) {
              setTimeout(_flushCallback, 0);
              throw e;
            }
          }
        };
        var initialTime = Date.now();
        exports.unstable_now = function() {
          return Date.now() - initialTime;
        };
        requestHostCallback = function(cb) {
          if (_callback !== null) {
            setTimeout(requestHostCallback, 0, cb);
          } else {
            _callback = cb;
            setTimeout(_flushCallback, 0);
          }
        };
        requestHostTimeout = function(cb, ms) {
          _timeoutID = setTimeout(cb, ms);
        };
        cancelHostTimeout = function() {
          clearTimeout(_timeoutID);
        };
        shouldYieldToHost = function() {
          return false;
        };
        requestPaint = exports.unstable_forceFrameRate = function() {
        };
      } else {
        var performance2 = window.performance;
        var _Date = window.Date;
        var _setTimeout = window.setTimeout;
        var _clearTimeout = window.clearTimeout;
        var requestAnimationFrame = window.requestAnimationFrame;
        var cancelAnimationFrame = window.cancelAnimationFrame;
        if (typeof console !== "undefined") {
          if (typeof requestAnimationFrame !== "function") {
            console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
          }
          if (typeof cancelAnimationFrame !== "function") {
            console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
          }
        }
        if (typeof performance2 === "object" && typeof performance2.now === "function") {
          exports.unstable_now = function() {
            return performance2.now();
          };
        } else {
          var _initialTime = _Date.now();
          exports.unstable_now = function() {
            return _Date.now() - _initialTime;
          };
        }
        var isRAFLoopRunning = false;
        var isMessageLoopRunning = false;
        var scheduledHostCallback = null;
        var rAFTimeoutID = -1;
        var taskTimeoutID = -1;
        var frameLength = enableMessageLoopImplementation ? 5 : 33.33;
        var prevRAFTime = -1;
        var prevRAFInterval = -1;
        var frameDeadline = 0;
        var fpsLocked = false;
        var maxFrameLength = 300;
        var needsPaint = false;
        if (enableIsInputPending && navigator !== void 0 && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0) {
          var scheduling = navigator.scheduling;
          shouldYieldToHost = function() {
            var currentTime = exports.unstable_now();
            if (currentTime >= frameDeadline) {
              if (needsPaint || scheduling.isInputPending()) {
                return true;
              }
              return currentTime >= frameDeadline + maxFrameLength;
            } else {
              return false;
            }
          };
          requestPaint = function() {
            needsPaint = true;
          };
        } else {
          shouldYieldToHost = function() {
            return exports.unstable_now() >= frameDeadline;
          };
          requestPaint = function() {
          };
        }
        exports.unstable_forceFrameRate = function(fps) {
          if (fps < 0 || fps > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
            return;
          }
          if (fps > 0) {
            frameLength = Math.floor(1e3 / fps);
            fpsLocked = true;
          } else {
            frameLength = 33.33;
            fpsLocked = false;
          }
        };
        var performWorkUntilDeadline = function() {
          if (enableMessageLoopImplementation) {
            if (scheduledHostCallback !== null) {
              var currentTime = exports.unstable_now();
              frameDeadline = currentTime + frameLength;
              var hasTimeRemaining = true;
              try {
                var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                if (!hasMoreWork) {
                  isMessageLoopRunning = false;
                  scheduledHostCallback = null;
                } else {
                  port.postMessage(null);
                }
              } catch (error) {
                port.postMessage(null);
                throw error;
              }
            } else {
              isMessageLoopRunning = false;
            }
            needsPaint = false;
          } else {
            if (scheduledHostCallback !== null) {
              var _currentTime = exports.unstable_now();
              var _hasTimeRemaining = frameDeadline - _currentTime > 0;
              try {
                var _hasMoreWork = scheduledHostCallback(_hasTimeRemaining, _currentTime);
                if (!_hasMoreWork) {
                  scheduledHostCallback = null;
                }
              } catch (error) {
                port.postMessage(null);
                throw error;
              }
            }
            needsPaint = false;
          }
        };
        var channel = new MessageChannel();
        var port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        var onAnimationFrame = function(rAFTime) {
          if (scheduledHostCallback === null) {
            prevRAFTime = -1;
            prevRAFInterval = -1;
            isRAFLoopRunning = false;
            return;
          }
          isRAFLoopRunning = true;
          requestAnimationFrame(function(nextRAFTime) {
            _clearTimeout(rAFTimeoutID);
            onAnimationFrame(nextRAFTime);
          });
          var onTimeout = function() {
            frameDeadline = exports.unstable_now() + frameLength / 2;
            performWorkUntilDeadline();
            rAFTimeoutID = _setTimeout(onTimeout, frameLength * 3);
          };
          rAFTimeoutID = _setTimeout(onTimeout, frameLength * 3);
          if (prevRAFTime !== -1 && rAFTime - prevRAFTime > 0.1) {
            var rAFInterval = rAFTime - prevRAFTime;
            if (!fpsLocked && prevRAFInterval !== -1) {
              if (rAFInterval < frameLength && prevRAFInterval < frameLength) {
                frameLength = rAFInterval < prevRAFInterval ? prevRAFInterval : rAFInterval;
                if (frameLength < 8.33) {
                  frameLength = 8.33;
                }
              }
            }
            prevRAFInterval = rAFInterval;
          }
          prevRAFTime = rAFTime;
          frameDeadline = rAFTime + frameLength;
          port.postMessage(null);
        };
        requestHostCallback = function(callback) {
          scheduledHostCallback = callback;
          if (enableMessageLoopImplementation) {
            if (!isMessageLoopRunning) {
              isMessageLoopRunning = true;
              port.postMessage(null);
            }
          } else {
            if (!isRAFLoopRunning) {
              isRAFLoopRunning = true;
              requestAnimationFrame(function(rAFTime) {
                onAnimationFrame(rAFTime);
              });
            }
          }
        };
        requestHostTimeout = function(callback, ms) {
          taskTimeoutID = _setTimeout(function() {
            callback(exports.unstable_now());
          }, ms);
        };
        cancelHostTimeout = function() {
          _clearTimeout(taskTimeoutID);
          taskTimeoutID = -1;
        };
      }
      function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        siftUp(heap, node, index);
      }
      function peek(heap) {
        var first = heap[0];
        return first === void 0 ? null : first;
      }
      function pop(heap) {
        var first = heap[0];
        if (first !== void 0) {
          var last = heap.pop();
          if (last !== first) {
            heap[0] = last;
            siftDown(heap, last, 0);
          }
          return first;
        } else {
          return null;
        }
      }
      function siftUp(heap, node, i) {
        var index = i;
        while (true) {
          var parentIndex = Math.floor((index - 1) / 2);
          var parent = heap[parentIndex];
          if (parent !== void 0 && compare(parent, node) > 0) {
            heap[parentIndex] = node;
            heap[index] = parent;
            index = parentIndex;
          } else {
            return;
          }
        }
      }
      function siftDown(heap, node, i) {
        var index = i;
        var length = heap.length;
        while (index < length) {
          var leftIndex = (index + 1) * 2 - 1;
          var left = heap[leftIndex];
          var rightIndex = leftIndex + 1;
          var right = heap[rightIndex];
          if (left !== void 0 && compare(left, node) < 0) {
            if (right !== void 0 && compare(right, left) < 0) {
              heap[index] = right;
              heap[rightIndex] = node;
              index = rightIndex;
            } else {
              heap[index] = left;
              heap[leftIndex] = node;
              index = leftIndex;
            }
          } else if (right !== void 0 && compare(right, node) < 0) {
            heap[index] = right;
            heap[rightIndex] = node;
            index = rightIndex;
          } else {
            return;
          }
        }
      }
      function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return diff !== 0 ? diff : a.id - b.id;
      }
      var NoPriority = 0;
      var ImmediatePriority = 1;
      var UserBlockingPriority = 2;
      var NormalPriority = 3;
      var LowPriority = 4;
      var IdlePriority = 5;
      var runIdCounter = 0;
      var mainThreadIdCounter = 0;
      var profilingStateSize = 4;
      var sharedProfilingBuffer = enableProfiling ? typeof SharedArrayBuffer === "function" ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : typeof ArrayBuffer === "function" ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null : null;
      var profilingState = enableProfiling && sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : [];
      var PRIORITY = 0;
      var CURRENT_TASK_ID = 1;
      var CURRENT_RUN_ID = 2;
      var QUEUE_SIZE = 3;
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[QUEUE_SIZE] = 0;
        profilingState[CURRENT_TASK_ID] = 0;
      }
      var INITIAL_EVENT_LOG_SIZE = 131072;
      var MAX_EVENT_LOG_SIZE = 524288;
      var eventLogSize = 0;
      var eventLogBuffer = null;
      var eventLog = null;
      var eventLogIndex = 0;
      var TaskStartEvent = 1;
      var TaskCompleteEvent = 2;
      var TaskErrorEvent = 3;
      var TaskCancelEvent = 4;
      var TaskRunEvent = 5;
      var TaskYieldEvent = 6;
      var SchedulerSuspendEvent = 7;
      var SchedulerResumeEvent = 8;
      function logEvent(entries) {
        if (eventLog !== null) {
          var offset = eventLogIndex;
          eventLogIndex += entries.length;
          if (eventLogIndex + 1 > eventLogSize) {
            eventLogSize *= 2;
            if (eventLogSize > MAX_EVENT_LOG_SIZE) {
              console.error("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`.");
              stopLoggingProfilingEvents();
              return;
            }
            var newEventLog = new Int32Array(eventLogSize * 4);
            newEventLog.set(eventLog);
            eventLogBuffer = newEventLog.buffer;
            eventLog = newEventLog;
          }
          eventLog.set(entries, offset);
        }
      }
      function startLoggingProfilingEvents() {
        eventLogSize = INITIAL_EVENT_LOG_SIZE;
        eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
        eventLog = new Int32Array(eventLogBuffer);
        eventLogIndex = 0;
      }
      function stopLoggingProfilingEvents() {
        var buffer = eventLogBuffer;
        eventLogSize = 0;
        eventLogBuffer = null;
        eventLog = null;
        eventLogIndex = 0;
        return buffer;
      }
      function markTaskStart(task, time) {
        if (enableProfiling) {
          profilingState[QUEUE_SIZE]++;
          if (eventLog !== null) {
            logEvent([TaskStartEvent, time, task.id, task.priorityLevel]);
          }
        }
      }
      function markTaskCompleted(task, time) {
        if (enableProfiling) {
          profilingState[PRIORITY] = NoPriority;
          profilingState[CURRENT_TASK_ID] = 0;
          profilingState[QUEUE_SIZE]--;
          if (eventLog !== null) {
            logEvent([TaskCompleteEvent, time, task.id]);
          }
        }
      }
      function markTaskCanceled(task, time) {
        if (enableProfiling) {
          profilingState[QUEUE_SIZE]--;
          if (eventLog !== null) {
            logEvent([TaskCancelEvent, time, task.id]);
          }
        }
      }
      function markTaskErrored(task, time) {
        if (enableProfiling) {
          profilingState[PRIORITY] = NoPriority;
          profilingState[CURRENT_TASK_ID] = 0;
          profilingState[QUEUE_SIZE]--;
          if (eventLog !== null) {
            logEvent([TaskErrorEvent, time, task.id]);
          }
        }
      }
      function markTaskRun(task, time) {
        if (enableProfiling) {
          runIdCounter++;
          profilingState[PRIORITY] = task.priorityLevel;
          profilingState[CURRENT_TASK_ID] = task.id;
          profilingState[CURRENT_RUN_ID] = runIdCounter;
          if (eventLog !== null) {
            logEvent([TaskRunEvent, time, task.id, runIdCounter]);
          }
        }
      }
      function markTaskYield(task, time) {
        if (enableProfiling) {
          profilingState[PRIORITY] = NoPriority;
          profilingState[CURRENT_TASK_ID] = 0;
          profilingState[CURRENT_RUN_ID] = 0;
          if (eventLog !== null) {
            logEvent([TaskYieldEvent, time, task.id, runIdCounter]);
          }
        }
      }
      function markSchedulerSuspended(time) {
        if (enableProfiling) {
          mainThreadIdCounter++;
          if (eventLog !== null) {
            logEvent([SchedulerSuspendEvent, time, mainThreadIdCounter]);
          }
        }
      }
      function markSchedulerUnsuspended(time) {
        if (enableProfiling) {
          if (eventLog !== null) {
            logEvent([SchedulerResumeEvent, time, mainThreadIdCounter]);
          }
        }
      }
      var maxSigned31BitInt = 1073741823;
      var IMMEDIATE_PRIORITY_TIMEOUT = -1;
      var USER_BLOCKING_PRIORITY = 250;
      var NORMAL_PRIORITY_TIMEOUT = 5e3;
      var LOW_PRIORITY_TIMEOUT = 1e4;
      var IDLE_PRIORITY = maxSigned31BitInt;
      var taskQueue = [];
      var timerQueue = [];
      var taskIdCounter = 1;
      var isSchedulerPaused = false;
      var currentTask = null;
      var currentPriorityLevel = NormalPriority;
      var isPerformingWork = false;
      var isHostCallbackScheduled = false;
      var isHostTimeoutScheduled = false;
      function advanceTimers(currentTime) {
        var timer = peek(timerQueue);
        while (timer !== null) {
          if (timer.callback === null) {
            pop(timerQueue);
          } else if (timer.startTime <= currentTime) {
            pop(timerQueue);
            timer.sortIndex = timer.expirationTime;
            push(taskQueue, timer);
            if (enableProfiling) {
              markTaskStart(timer, currentTime);
              timer.isQueued = true;
            }
          } else {
            return;
          }
          timer = peek(timerQueue);
        }
      }
      function handleTimeout(currentTime) {
        isHostTimeoutScheduled = false;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) {
          if (peek(taskQueue) !== null) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          } else {
            var firstTimer = peek(timerQueue);
            if (firstTimer !== null) {
              requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
            }
          }
        }
      }
      function flushWork(hasTimeRemaining, initialTime2) {
        if (enableProfiling) {
          markSchedulerUnsuspended(initialTime2);
        }
        isHostCallbackScheduled = false;
        if (isHostTimeoutScheduled) {
          isHostTimeoutScheduled = false;
          cancelHostTimeout();
        }
        isPerformingWork = true;
        var previousPriorityLevel = currentPriorityLevel;
        try {
          if (enableProfiling) {
            try {
              return workLoop(hasTimeRemaining, initialTime2);
            } catch (error) {
              if (currentTask !== null) {
                var currentTime = exports.unstable_now();
                markTaskErrored(currentTask, currentTime);
                currentTask.isQueued = false;
              }
              throw error;
            }
          } else {
            return workLoop(hasTimeRemaining, initialTime2);
          }
        } finally {
          currentTask = null;
          currentPriorityLevel = previousPriorityLevel;
          isPerformingWork = false;
          if (enableProfiling) {
            var _currentTime = exports.unstable_now();
            markSchedulerSuspended(_currentTime);
          }
        }
      }
      function workLoop(hasTimeRemaining, initialTime2) {
        var currentTime = initialTime2;
        advanceTimers(currentTime);
        currentTask = peek(taskQueue);
        while (currentTask !== null && !(enableSchedulerDebugging && isSchedulerPaused)) {
          if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
            break;
          }
          var callback = currentTask.callback;
          if (callback !== null) {
            currentTask.callback = null;
            currentPriorityLevel = currentTask.priorityLevel;
            var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
            markTaskRun(currentTask, currentTime);
            var continuationCallback = callback(didUserCallbackTimeout);
            currentTime = exports.unstable_now();
            if (typeof continuationCallback === "function") {
              currentTask.callback = continuationCallback;
              markTaskYield(currentTask, currentTime);
            } else {
              if (enableProfiling) {
                markTaskCompleted(currentTask, currentTime);
                currentTask.isQueued = false;
              }
              if (currentTask === peek(taskQueue)) {
                pop(taskQueue);
              }
            }
            advanceTimers(currentTime);
          } else {
            pop(taskQueue);
          }
          currentTask = peek(taskQueue);
        }
        if (currentTask !== null) {
          return true;
        } else {
          var firstTimer = peek(timerQueue);
          if (firstTimer !== null) {
            requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
          return false;
        }
      }
      function unstable_runWithPriority(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case ImmediatePriority:
          case UserBlockingPriority:
          case NormalPriority:
          case LowPriority:
          case IdlePriority:
            break;
          default:
            priorityLevel = NormalPriority;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      }
      function unstable_next(eventHandler) {
        var priorityLevel;
        switch (currentPriorityLevel) {
          case ImmediatePriority:
          case UserBlockingPriority:
          case NormalPriority:
            priorityLevel = NormalPriority;
            break;
          default:
            priorityLevel = currentPriorityLevel;
            break;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      }
      function unstable_wrapCallback(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;
          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      }
      function timeoutForPriorityLevel(priorityLevel) {
        switch (priorityLevel) {
          case ImmediatePriority:
            return IMMEDIATE_PRIORITY_TIMEOUT;
          case UserBlockingPriority:
            return USER_BLOCKING_PRIORITY;
          case IdlePriority:
            return IDLE_PRIORITY;
          case LowPriority:
            return LOW_PRIORITY_TIMEOUT;
          case NormalPriority:
          default:
            return NORMAL_PRIORITY_TIMEOUT;
        }
      }
      function unstable_scheduleCallback(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        var startTime;
        var timeout;
        if (typeof options === "object" && options !== null) {
          var delay = options.delay;
          if (typeof delay === "number" && delay > 0) {
            startTime = currentTime + delay;
          } else {
            startTime = currentTime;
          }
          timeout = typeof options.timeout === "number" ? options.timeout : timeoutForPriorityLevel(priorityLevel);
        } else {
          timeout = timeoutForPriorityLevel(priorityLevel);
          startTime = currentTime;
        }
        var expirationTime = startTime + timeout;
        var newTask = {
          id: taskIdCounter++,
          callback,
          priorityLevel,
          startTime,
          expirationTime,
          sortIndex: -1
        };
        if (enableProfiling) {
          newTask.isQueued = false;
        }
        if (startTime > currentTime) {
          newTask.sortIndex = startTime;
          push(timerQueue, newTask);
          if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
            if (isHostTimeoutScheduled) {
              cancelHostTimeout();
            } else {
              isHostTimeoutScheduled = true;
            }
            requestHostTimeout(handleTimeout, startTime - currentTime);
          }
        } else {
          newTask.sortIndex = expirationTime;
          push(taskQueue, newTask);
          if (enableProfiling) {
            markTaskStart(newTask, currentTime);
            newTask.isQueued = true;
          }
          if (!isHostCallbackScheduled && !isPerformingWork) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          }
        }
        return newTask;
      }
      function unstable_pauseExecution() {
        isSchedulerPaused = true;
      }
      function unstable_continueExecution() {
        isSchedulerPaused = false;
        if (!isHostCallbackScheduled && !isPerformingWork) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        }
      }
      function unstable_getFirstCallbackNode() {
        return peek(taskQueue);
      }
      function unstable_cancelCallback(task) {
        if (enableProfiling) {
          if (task.isQueued) {
            var currentTime = exports.unstable_now();
            markTaskCanceled(task, currentTime);
            task.isQueued = false;
          }
        }
        task.callback = null;
      }
      function unstable_getCurrentPriorityLevel() {
        return currentPriorityLevel;
      }
      function unstable_shouldYield() {
        var currentTime = exports.unstable_now();
        advanceTimers(currentTime);
        var firstTask = peek(taskQueue);
        return firstTask !== currentTask && currentTask !== null && firstTask !== null && firstTask.callback !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
      }
      var unstable_requestPaint = requestPaint;
      var unstable_Profiling = enableProfiling ? {
        startLoggingProfilingEvents,
        stopLoggingProfilingEvents,
        sharedProfilingBuffer
      } : null;
      exports.unstable_ImmediatePriority = ImmediatePriority;
      exports.unstable_UserBlockingPriority = UserBlockingPriority;
      exports.unstable_NormalPriority = NormalPriority;
      exports.unstable_IdlePriority = IdlePriority;
      exports.unstable_LowPriority = LowPriority;
      exports.unstable_runWithPriority = unstable_runWithPriority;
      exports.unstable_next = unstable_next;
      exports.unstable_scheduleCallback = unstable_scheduleCallback;
      exports.unstable_cancelCallback = unstable_cancelCallback;
      exports.unstable_wrapCallback = unstable_wrapCallback;
      exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
      exports.unstable_shouldYield = unstable_shouldYield;
      exports.unstable_requestPaint = unstable_requestPaint;
      exports.unstable_continueExecution = unstable_continueExecution;
      exports.unstable_pauseExecution = unstable_pauseExecution;
      exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
      exports.unstable_Profiling = unstable_Profiling;
    })();
  }
});

// node_modules/scheduler/index.js
var require_scheduler = __commonJS((exports, module) => {
  "use strict";
  if (false) {
    module.exports = null;
  } else {
    module.exports = require_scheduler_development();
  }
});

// node_modules/scheduler/cjs/scheduler-tracing.development.js
var require_scheduler_tracing_development = __commonJS((exports) => {
  /** @license React v0.16.2
   * scheduler-tracing.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  "use strict";
  if (true) {
    (function() {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var enableSchedulerTracing = true;
      var DEFAULT_THREAD_ID = 0;
      var interactionIDCounter = 0;
      var threadIDCounter = 0;
      exports.__interactionsRef = null;
      exports.__subscriberRef = null;
      if (enableSchedulerTracing) {
        exports.__interactionsRef = {
          current: new Set()
        };
        exports.__subscriberRef = {
          current: null
        };
      }
      function unstable_clear(callback) {
        if (!enableSchedulerTracing) {
          return callback();
        }
        var prevInteractions = exports.__interactionsRef.current;
        exports.__interactionsRef.current = new Set();
        try {
          return callback();
        } finally {
          exports.__interactionsRef.current = prevInteractions;
        }
      }
      function unstable_getCurrent() {
        if (!enableSchedulerTracing) {
          return null;
        } else {
          return exports.__interactionsRef.current;
        }
      }
      function unstable_getThreadID() {
        return ++threadIDCounter;
      }
      function unstable_trace(name, timestamp, callback) {
        var threadID = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : DEFAULT_THREAD_ID;
        if (!enableSchedulerTracing) {
          return callback();
        }
        var interaction = {
          __count: 1,
          id: interactionIDCounter++,
          name,
          timestamp
        };
        var prevInteractions = exports.__interactionsRef.current;
        var interactions = new Set(prevInteractions);
        interactions.add(interaction);
        exports.__interactionsRef.current = interactions;
        var subscriber = exports.__subscriberRef.current;
        var returnValue;
        try {
          if (subscriber !== null) {
            subscriber.onInteractionTraced(interaction);
          }
        } finally {
          try {
            if (subscriber !== null) {
              subscriber.onWorkStarted(interactions, threadID);
            }
          } finally {
            try {
              returnValue = callback();
            } finally {
              exports.__interactionsRef.current = prevInteractions;
              try {
                if (subscriber !== null) {
                  subscriber.onWorkStopped(interactions, threadID);
                }
              } finally {
                interaction.__count--;
                if (subscriber !== null && interaction.__count === 0) {
                  subscriber.onInteractionScheduledWorkCompleted(interaction);
                }
              }
            }
          }
        }
        return returnValue;
      }
      function unstable_wrap(callback) {
        var threadID = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_THREAD_ID;
        if (!enableSchedulerTracing) {
          return callback;
        }
        var wrappedInteractions = exports.__interactionsRef.current;
        var subscriber = exports.__subscriberRef.current;
        if (subscriber !== null) {
          subscriber.onWorkScheduled(wrappedInteractions, threadID);
        }
        wrappedInteractions.forEach(function(interaction) {
          interaction.__count++;
        });
        var hasRun = false;
        function wrapped() {
          var prevInteractions = exports.__interactionsRef.current;
          exports.__interactionsRef.current = wrappedInteractions;
          subscriber = exports.__subscriberRef.current;
          try {
            var returnValue;
            try {
              if (subscriber !== null) {
                subscriber.onWorkStarted(wrappedInteractions, threadID);
              }
            } finally {
              try {
                returnValue = callback.apply(void 0, arguments);
              } finally {
                exports.__interactionsRef.current = prevInteractions;
                if (subscriber !== null) {
                  subscriber.onWorkStopped(wrappedInteractions, threadID);
                }
              }
            }
            return returnValue;
          } finally {
            if (!hasRun) {
              hasRun = true;
              wrappedInteractions.forEach(function(interaction) {
                interaction.__count--;
                if (subscriber !== null && interaction.__count === 0) {
                  subscriber.onInteractionScheduledWorkCompleted(interaction);
                }
              });
            }
          }
        }
        wrapped.cancel = function cancel() {
          subscriber = exports.__subscriberRef.current;
          try {
            if (subscriber !== null) {
              subscriber.onWorkCanceled(wrappedInteractions, threadID);
            }
          } finally {
            wrappedInteractions.forEach(function(interaction) {
              interaction.__count--;
              if (subscriber && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            });
          }
        };
        return wrapped;
      }
      var subscribers = null;
      if (enableSchedulerTracing) {
        subscribers = new Set();
      }
      function unstable_subscribe(subscriber) {
        if (enableSchedulerTracing) {
          subscribers.add(subscriber);
          if (subscribers.size === 1) {
            exports.__subscriberRef.current = {
              onInteractionScheduledWorkCompleted,
              onInteractionTraced,
              onWorkCanceled,
              onWorkScheduled,
              onWorkStarted,
              onWorkStopped
            };
          }
        }
      }
      function unstable_unsubscribe(subscriber) {
        if (enableSchedulerTracing) {
          subscribers.delete(subscriber);
          if (subscribers.size === 0) {
            exports.__subscriberRef.current = null;
          }
        }
      }
      function onInteractionTraced(interaction) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
          try {
            subscriber.onInteractionTraced(interaction);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });
        if (didCatchError) {
          throw caughtError;
        }
      }
      function onInteractionScheduledWorkCompleted(interaction) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
          try {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });
        if (didCatchError) {
          throw caughtError;
        }
      }
      function onWorkScheduled(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
          try {
            subscriber.onWorkScheduled(interactions, threadID);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });
        if (didCatchError) {
          throw caughtError;
        }
      }
      function onWorkStarted(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
          try {
            subscriber.onWorkStarted(interactions, threadID);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });
        if (didCatchError) {
          throw caughtError;
        }
      }
      function onWorkStopped(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
          try {
            subscriber.onWorkStopped(interactions, threadID);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });
        if (didCatchError) {
          throw caughtError;
        }
      }
      function onWorkCanceled(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function(subscriber) {
          try {
            subscriber.onWorkCanceled(interactions, threadID);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });
        if (didCatchError) {
          throw caughtError;
        }
      }
      exports.unstable_clear = unstable_clear;
      exports.unstable_getCurrent = unstable_getCurrent;
      exports.unstable_getThreadID = unstable_getThreadID;
      exports.unstable_trace = unstable_trace;
      exports.unstable_wrap = unstable_wrap;
      exports.unstable_subscribe = unstable_subscribe;
      exports.unstable_unsubscribe = unstable_unsubscribe;
    })();
  }
});

// node_modules/scheduler/tracing.js
var require_tracing = __commonJS((exports, module) => {
  "use strict";
  if (false) {
    module.exports = null;
  } else {
    module.exports = require_scheduler_tracing_development();
  }
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS((exports, module) => {
  /** @license React v16.10.2
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  "use strict";
  if (true) {
    (function() {
      "use strict";
      var React10 = require_react();
      var _assign = require_object_assign();
      var Scheduler = require_scheduler();
      var checkPropTypes = require_checkPropTypes();
      var tracing = require_tracing();
      function ReactError(error) {
        error.name = "Invariant Violation";
        return error;
      }
      (function() {
        if (!React10) {
          {
            throw ReactError(Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM."));
          }
        }
      })();
      var eventPluginOrder = null;
      var namesToPlugins = {};
      function recomputePluginOrdering() {
        if (!eventPluginOrder) {
          return;
        }
        for (var pluginName in namesToPlugins) {
          var pluginModule = namesToPlugins[pluginName];
          var pluginIndex = eventPluginOrder.indexOf(pluginName);
          (function() {
            if (!(pluginIndex > -1)) {
              {
                throw ReactError(Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + pluginName + "`."));
              }
            }
          })();
          if (plugins[pluginIndex]) {
            continue;
          }
          (function() {
            if (!pluginModule.extractEvents) {
              {
                throw ReactError(Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + pluginName + "` does not."));
              }
            }
          })();
          plugins[pluginIndex] = pluginModule;
          var publishedEvents = pluginModule.eventTypes;
          for (var eventName in publishedEvents) {
            (function() {
              if (!publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName)) {
                {
                  throw ReactError(Error("EventPluginRegistry: Failed to publish event `" + eventName + "` for plugin `" + pluginName + "`."));
                }
              }
            })();
          }
        }
      }
      function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
        (function() {
          if (!!eventNameDispatchConfigs.hasOwnProperty(eventName)) {
            {
              throw ReactError(Error("EventPluginHub: More than one plugin attempted to publish the same event name, `" + eventName + "`."));
            }
          }
        })();
        eventNameDispatchConfigs[eventName] = dispatchConfig;
        var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
        if (phasedRegistrationNames) {
          for (var phaseName in phasedRegistrationNames) {
            if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
              var phasedRegistrationName = phasedRegistrationNames[phaseName];
              publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
            }
          }
          return true;
        } else if (dispatchConfig.registrationName) {
          publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
          return true;
        }
        return false;
      }
      function publishRegistrationName(registrationName, pluginModule, eventName) {
        (function() {
          if (!!registrationNameModules[registrationName]) {
            {
              throw ReactError(Error("EventPluginHub: More than one plugin attempted to publish the same registration name, `" + registrationName + "`."));
            }
          }
        })();
        registrationNameModules[registrationName] = pluginModule;
        registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;
        {
          var lowerCasedName = registrationName.toLowerCase();
          possibleRegistrationNames[lowerCasedName] = registrationName;
          if (registrationName === "onDoubleClick") {
            possibleRegistrationNames.ondblclick = registrationName;
          }
        }
      }
      var plugins = [];
      var eventNameDispatchConfigs = {};
      var registrationNameModules = {};
      var registrationNameDependencies = {};
      var possibleRegistrationNames = {};
      function injectEventPluginOrder(injectedEventPluginOrder) {
        (function() {
          if (!!eventPluginOrder) {
            {
              throw ReactError(Error("EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."));
            }
          }
        })();
        eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
        recomputePluginOrdering();
      }
      function injectEventPluginsByName(injectedNamesToPlugins) {
        var isOrderingDirty = false;
        for (var pluginName in injectedNamesToPlugins) {
          if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
            continue;
          }
          var pluginModule = injectedNamesToPlugins[pluginName];
          if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
            (function() {
              if (!!namesToPlugins[pluginName]) {
                {
                  throw ReactError(Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + pluginName + "`."));
                }
              }
            })();
            namesToPlugins[pluginName] = pluginModule;
            isOrderingDirty = true;
          }
        }
        if (isOrderingDirty) {
          recomputePluginOrdering();
        }
      }
      var invokeGuardedCallbackImpl = function(name, func, context, a, b, c, d, e, f) {
        var funcArgs = Array.prototype.slice.call(arguments, 3);
        try {
          func.apply(context, funcArgs);
        } catch (error) {
          this.onError(error);
        }
      };
      {
        if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
          var fakeNode = document.createElement("react");
          var invokeGuardedCallbackDev = function(name, func, context, a, b, c, d, e, f) {
            (function() {
              if (!(typeof document !== "undefined")) {
                {
                  throw ReactError(Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous."));
                }
              }
            })();
            var evt = document.createEvent("Event");
            var didError = true;
            var windowEvent = window.event;
            var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event");
            var funcArgs = Array.prototype.slice.call(arguments, 3);
            function callCallback2() {
              fakeNode.removeEventListener(evtType, callCallback2, false);
              if (typeof window.event !== "undefined" && window.hasOwnProperty("event")) {
                window.event = windowEvent;
              }
              func.apply(context, funcArgs);
              didError = false;
            }
            var error;
            var didSetError = false;
            var isCrossOriginError = false;
            function handleWindowError(event2) {
              error = event2.error;
              didSetError = true;
              if (error === null && event2.colno === 0 && event2.lineno === 0) {
                isCrossOriginError = true;
              }
              if (event2.defaultPrevented) {
                if (error != null && typeof error === "object") {
                  try {
                    error._suppressLogging = true;
                  } catch (inner) {
                  }
                }
              }
            }
            var evtType = "react-" + (name ? name : "invokeguardedcallback");
            window.addEventListener("error", handleWindowError);
            fakeNode.addEventListener(evtType, callCallback2, false);
            evt.initEvent(evtType, false, false);
            fakeNode.dispatchEvent(evt);
            if (windowEventDescriptor) {
              Object.defineProperty(window, "event", windowEventDescriptor);
            }
            if (didError) {
              if (!didSetError) {
                error = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`);
              } else if (isCrossOriginError) {
                error = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.");
              }
              this.onError(error);
            }
            window.removeEventListener("error", handleWindowError);
          };
          invokeGuardedCallbackImpl = invokeGuardedCallbackDev;
        }
      }
      var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
      var hasError = false;
      var caughtError = null;
      var hasRethrowError = false;
      var rethrowError = null;
      var reporter = {
        onError: function(error) {
          hasError = true;
          caughtError = error;
        }
      };
      function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
        hasError = false;
        caughtError = null;
        invokeGuardedCallbackImpl$1.apply(reporter, arguments);
      }
      function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
        invokeGuardedCallback.apply(this, arguments);
        if (hasError) {
          var error = clearCaughtError();
          if (!hasRethrowError) {
            hasRethrowError = true;
            rethrowError = error;
          }
        }
      }
      function rethrowCaughtError() {
        if (hasRethrowError) {
          var error = rethrowError;
          hasRethrowError = false;
          rethrowError = null;
          throw error;
        }
      }
      function hasCaughtError() {
        return hasError;
      }
      function clearCaughtError() {
        if (hasError) {
          var error = caughtError;
          hasError = false;
          caughtError = null;
          return error;
        } else {
          (function() {
            {
              {
                throw ReactError(Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
        }
      }
      var warningWithoutStack = function() {
      };
      {
        warningWithoutStack = function(condition, format) {
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          if (format === void 0) {
            throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");
          }
          if (args.length > 8) {
            throw new Error("warningWithoutStack() currently supports at most 8 arguments.");
          }
          if (condition) {
            return;
          }
          if (typeof console !== "undefined") {
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console.error, console, argsWithFormat);
          }
          try {
            var argIndex = 0;
            var message = "Warning: " + format.replace(/%s/g, function() {
              return args[argIndex++];
            });
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var warningWithoutStack$1 = warningWithoutStack;
      var getFiberCurrentPropsFromNode = null;
      var getInstanceFromNode = null;
      var getNodeFromInstance = null;
      function setComponentTree(getFiberCurrentPropsFromNodeImpl, getInstanceFromNodeImpl, getNodeFromInstanceImpl) {
        getFiberCurrentPropsFromNode = getFiberCurrentPropsFromNodeImpl;
        getInstanceFromNode = getInstanceFromNodeImpl;
        getNodeFromInstance = getNodeFromInstanceImpl;
        {
          !(getNodeFromInstance && getInstanceFromNode) ? warningWithoutStack$1(false, "EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.") : void 0;
        }
      }
      var validateEventDispatches;
      {
        validateEventDispatches = function(event2) {
          var dispatchListeners = event2._dispatchListeners;
          var dispatchInstances = event2._dispatchInstances;
          var listenersIsArr = Array.isArray(dispatchListeners);
          var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
          var instancesIsArr = Array.isArray(dispatchInstances);
          var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;
          !(instancesIsArr === listenersIsArr && instancesLen === listenersLen) ? warningWithoutStack$1(false, "EventPluginUtils: Invalid `event`.") : void 0;
        };
      }
      function executeDispatch(event2, listener, inst) {
        var type = event2.type || "unknown-event";
        event2.currentTarget = getNodeFromInstance(inst);
        invokeGuardedCallbackAndCatchFirstError(type, listener, void 0, event2);
        event2.currentTarget = null;
      }
      function executeDispatchesInOrder(event2) {
        var dispatchListeners = event2._dispatchListeners;
        var dispatchInstances = event2._dispatchInstances;
        {
          validateEventDispatches(event2);
        }
        if (Array.isArray(dispatchListeners)) {
          for (var i2 = 0; i2 < dispatchListeners.length; i2++) {
            if (event2.isPropagationStopped()) {
              break;
            }
            executeDispatch(event2, dispatchListeners[i2], dispatchInstances[i2]);
          }
        } else if (dispatchListeners) {
          executeDispatch(event2, dispatchListeners, dispatchInstances);
        }
        event2._dispatchListeners = null;
        event2._dispatchInstances = null;
      }
      function accumulateInto(current2, next) {
        (function() {
          if (!(next != null)) {
            {
              throw ReactError(Error("accumulateInto(...): Accumulated items must not be null or undefined."));
            }
          }
        })();
        if (current2 == null) {
          return next;
        }
        if (Array.isArray(current2)) {
          if (Array.isArray(next)) {
            current2.push.apply(current2, next);
            return current2;
          }
          current2.push(next);
          return current2;
        }
        if (Array.isArray(next)) {
          return [current2].concat(next);
        }
        return [current2, next];
      }
      function forEachAccumulated(arr, cb, scope) {
        if (Array.isArray(arr)) {
          arr.forEach(cb, scope);
        } else if (arr) {
          cb.call(scope, arr);
        }
      }
      var eventQueue = null;
      var executeDispatchesAndRelease = function(event2) {
        if (event2) {
          executeDispatchesInOrder(event2);
          if (!event2.isPersistent()) {
            event2.constructor.release(event2);
          }
        }
      };
      var executeDispatchesAndReleaseTopLevel = function(e) {
        return executeDispatchesAndRelease(e);
      };
      function runEventsInBatch(events) {
        if (events !== null) {
          eventQueue = accumulateInto(eventQueue, events);
        }
        var processingEventQueue = eventQueue;
        eventQueue = null;
        if (!processingEventQueue) {
          return;
        }
        forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
        (function() {
          if (!!eventQueue) {
            {
              throw ReactError(Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."));
            }
          }
        })();
        rethrowCaughtError();
      }
      function isInteractive(tag) {
        return tag === "button" || tag === "input" || tag === "select" || tag === "textarea";
      }
      function shouldPreventMouseEvent(name, type, props) {
        switch (name) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
            return !!(props.disabled && isInteractive(type));
          default:
            return false;
        }
      }
      var injection = {
        injectEventPluginOrder,
        injectEventPluginsByName
      };
      function getListener(inst, registrationName) {
        var listener;
        var stateNode = inst.stateNode;
        if (!stateNode) {
          return null;
        }
        var props = getFiberCurrentPropsFromNode(stateNode);
        if (!props) {
          return null;
        }
        listener = props[registrationName];
        if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
          return null;
        }
        (function() {
          if (!(!listener || typeof listener === "function")) {
            {
              throw ReactError(Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type."));
            }
          }
        })();
        return listener;
      }
      function extractPluginEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
        var events = null;
        for (var i2 = 0; i2 < plugins.length; i2++) {
          var possiblePlugin = plugins[i2];
          if (possiblePlugin) {
            var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
            if (extractedEvents) {
              events = accumulateInto(events, extractedEvents);
            }
          }
        }
        return events;
      }
      function runExtractedPluginEventsInBatch(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
        var events = extractPluginEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
        runEventsInBatch(events);
      }
      var FunctionComponent = 0;
      var ClassComponent = 1;
      var IndeterminateComponent = 2;
      var HostRoot = 3;
      var HostPortal = 4;
      var HostComponent = 5;
      var HostText = 6;
      var Fragment = 7;
      var Mode = 8;
      var ContextConsumer = 9;
      var ContextProvider = 10;
      var ForwardRef = 11;
      var Profiler = 12;
      var SuspenseComponent = 13;
      var MemoComponent = 14;
      var SimpleMemoComponent = 15;
      var LazyComponent = 16;
      var IncompleteClassComponent = 17;
      var DehydratedFragment = 18;
      var SuspenseListComponent = 19;
      var FundamentalComponent = 20;
      var ScopeComponent = 21;
      var ReactSharedInternals = React10.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      if (!ReactSharedInternals.hasOwnProperty("ReactCurrentDispatcher")) {
        ReactSharedInternals.ReactCurrentDispatcher = {
          current: null
        };
      }
      if (!ReactSharedInternals.hasOwnProperty("ReactCurrentBatchConfig")) {
        ReactSharedInternals.ReactCurrentBatchConfig = {
          suspense: null
        };
      }
      var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      var describeComponentFrame = function(name, source, ownerName) {
        var sourceInfo = "";
        if (source) {
          var path = source.fileName;
          var fileName = path.replace(BEFORE_SLASH_RE, "");
          {
            if (/^index\./.test(fileName)) {
              var match = path.match(BEFORE_SLASH_RE);
              if (match) {
                var pathBeforeSlash = match[1];
                if (pathBeforeSlash) {
                  var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                  fileName = folderName + "/" + fileName;
                }
              }
            }
          }
          sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
        } else if (ownerName) {
          sourceInfo = " (created by " + ownerName + ")";
        }
        return "\n    in " + (name || "Unknown") + sourceInfo;
      };
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var warning = warningWithoutStack$1;
      {
        warning = function(condition, format) {
          if (condition) {
            return;
          }
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          warningWithoutStack$1.apply(void 0, [false, format + "%s"].concat(args, [stack]));
        };
      }
      var warning$1 = warning;
      var Uninitialized = -1;
      var Pending = 0;
      var Resolved = 1;
      var Rejected = 2;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved ? lazyComponent._result : null;
      }
      function initializeLazyComponentType(lazyComponent) {
        if (lazyComponent._status === Uninitialized) {
          lazyComponent._status = Pending;
          var ctor = lazyComponent._ctor;
          var thenable = ctor();
          lazyComponent._result = thenable;
          thenable.then(function(moduleObject) {
            if (lazyComponent._status === Pending) {
              var defaultExport = moduleObject.default;
              {
                if (defaultExport === void 0) {
                  warning$1(false, "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              lazyComponent._status = Resolved;
              lazyComponent._result = defaultExport;
            }
          }, function(error) {
            if (lazyComponent._status === Pending) {
              lazyComponent._status = Rejected;
              lazyComponent._result = error;
            }
          });
        }
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
      }
      function getComponentName(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            warningWithoutStack$1(false, "Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return "Context.Consumer";
            case REACT_PROVIDER_TYPE:
              return "Context.Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_LAZY_TYPE: {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);
              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }
              break;
            }
          }
        }
        return null;
      }
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function describeFiber(fiber) {
        switch (fiber.tag) {
          case HostRoot:
          case HostPortal:
          case HostText:
          case Fragment:
          case ContextProvider:
          case ContextConsumer:
            return "";
          default:
            var owner = fiber._debugOwner;
            var source = fiber._debugSource;
            var name = getComponentName(fiber.type);
            var ownerName = null;
            if (owner) {
              ownerName = getComponentName(owner.type);
            }
            return describeComponentFrame(name, source, ownerName);
        }
      }
      function getStackByFiberInDevAndProd(workInProgress2) {
        var info = "";
        var node = workInProgress2;
        do {
          info += describeFiber(node);
          node = node.return;
        } while (node);
        return info;
      }
      var current = null;
      var phase = null;
      function getCurrentFiberOwnerNameInDevOrNull() {
        {
          if (current === null) {
            return null;
          }
          var owner = current._debugOwner;
          if (owner !== null && typeof owner !== "undefined") {
            return getComponentName(owner.type);
          }
        }
        return null;
      }
      function getCurrentFiberStackInDev() {
        {
          if (current === null) {
            return "";
          }
          return getStackByFiberInDevAndProd(current);
        }
        return "";
      }
      function resetCurrentFiber() {
        {
          ReactDebugCurrentFrame.getCurrentStack = null;
          current = null;
          phase = null;
        }
      }
      function setCurrentFiber(fiber) {
        {
          ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackInDev;
          current = fiber;
          phase = null;
        }
      }
      function setCurrentPhase(lifeCyclePhase) {
        {
          phase = lifeCyclePhase;
        }
      }
      var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
      function endsWith(subject, search) {
        var length = subject.length;
        return subject.substring(length - search.length, length) === search;
      }
      var PLUGIN_EVENT_SYSTEM = 1;
      var RESPONDER_EVENT_SYSTEM = 1 << 1;
      var IS_PASSIVE = 1 << 2;
      var IS_ACTIVE = 1 << 3;
      var PASSIVE_NOT_SUPPORTED = 1 << 4;
      var IS_REPLAYED = 1 << 5;
      var restoreImpl = null;
      var restoreTarget = null;
      var restoreQueue = null;
      function restoreStateOfTarget(target) {
        var internalInstance = getInstanceFromNode(target);
        if (!internalInstance) {
          return;
        }
        (function() {
          if (!(typeof restoreImpl === "function")) {
            {
              throw ReactError(Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue."));
            }
          }
        })();
        var props = getFiberCurrentPropsFromNode(internalInstance.stateNode);
        restoreImpl(internalInstance.stateNode, internalInstance.type, props);
      }
      function setRestoreImplementation(impl) {
        restoreImpl = impl;
      }
      function enqueueStateRestore(target) {
        if (restoreTarget) {
          if (restoreQueue) {
            restoreQueue.push(target);
          } else {
            restoreQueue = [target];
          }
        } else {
          restoreTarget = target;
        }
      }
      function needsStateRestore() {
        return restoreTarget !== null || restoreQueue !== null;
      }
      function restoreStateIfNeeded() {
        if (!restoreTarget) {
          return;
        }
        var target = restoreTarget;
        var queuedTargets = restoreQueue;
        restoreTarget = null;
        restoreQueue = null;
        restoreStateOfTarget(target);
        if (queuedTargets) {
          for (var i2 = 0; i2 < queuedTargets.length; i2++) {
            restoreStateOfTarget(queuedTargets[i2]);
          }
        }
      }
      var enableUserTimingAPI = true;
      var debugRenderPhaseSideEffects = false;
      var debugRenderPhaseSideEffectsForStrictMode = true;
      var replayFailedUnitOfWorkWithInvokeGuardedCallback = true;
      var warnAboutDeprecatedLifecycles = true;
      var enableProfilerTimer = true;
      var enableSchedulerTracing = true;
      var enableSuspenseServerRenderer = false;
      var enableSelectiveHydration = false;
      var disableJavaScriptURLs = false;
      var disableInputAttributeSyncing = false;
      var enableStableConcurrentModeAPIs = false;
      var warnAboutShorthandPropertyCollision = false;
      var enableFlareAPI = false;
      var enableFundamentalAPI = false;
      var enableScopeAPI = false;
      var warnAboutUnmockedScheduler = false;
      var flushSuspenseFallbacksInTests = true;
      var enableUserBlockingEvents = false;
      var enableSuspenseCallback = false;
      var warnAboutDefaultPropsOnFunctionComponents = false;
      var warnAboutStringRefs = false;
      var disableLegacyContext = false;
      var disableSchedulerTimeoutBasedOnReactExpirationTime = false;
      var enableTrustedTypesIntegration = false;
      var batchedUpdatesImpl = function(fn, bookkeeping) {
        return fn(bookkeeping);
      };
      var discreteUpdatesImpl = function(fn, a, b, c) {
        return fn(a, b, c);
      };
      var flushDiscreteUpdatesImpl = function() {
      };
      var batchedEventUpdatesImpl = batchedUpdatesImpl;
      var isInsideEventHandler = false;
      var isBatchingEventUpdates = false;
      function finishEventHandler() {
        var controlledComponentsHavePendingUpdates = needsStateRestore();
        if (controlledComponentsHavePendingUpdates) {
          flushDiscreteUpdatesImpl();
          restoreStateIfNeeded();
        }
      }
      function batchedUpdates(fn, bookkeeping) {
        if (isInsideEventHandler) {
          return fn(bookkeeping);
        }
        isInsideEventHandler = true;
        try {
          return batchedUpdatesImpl(fn, bookkeeping);
        } finally {
          isInsideEventHandler = false;
          finishEventHandler();
        }
      }
      function batchedEventUpdates(fn, a, b) {
        if (isBatchingEventUpdates) {
          return fn(a, b);
        }
        isBatchingEventUpdates = true;
        try {
          return batchedEventUpdatesImpl(fn, a, b);
        } finally {
          isBatchingEventUpdates = false;
          finishEventHandler();
        }
      }
      function executeUserEventHandler(fn, value) {
        var previouslyInEventHandler = isInsideEventHandler;
        try {
          isInsideEventHandler = true;
          var type = typeof value === "object" && value !== null ? value.type : "";
          invokeGuardedCallbackAndCatchFirstError(type, fn, void 0, value);
        } finally {
          isInsideEventHandler = previouslyInEventHandler;
        }
      }
      function discreteUpdates(fn, a, b, c) {
        var prevIsInsideEventHandler = isInsideEventHandler;
        isInsideEventHandler = true;
        try {
          return discreteUpdatesImpl(fn, a, b, c);
        } finally {
          isInsideEventHandler = prevIsInsideEventHandler;
          if (!isInsideEventHandler) {
            finishEventHandler();
          }
        }
      }
      var lastFlushedEventTimeStamp = 0;
      function flushDiscreteUpdatesIfNeeded(timeStamp) {
        if (!isInsideEventHandler && (!enableFlareAPI || timeStamp === 0 || lastFlushedEventTimeStamp !== timeStamp)) {
          lastFlushedEventTimeStamp = timeStamp;
          flushDiscreteUpdatesImpl();
        }
      }
      function setBatchingImplementation(_batchedUpdatesImpl, _discreteUpdatesImpl, _flushDiscreteUpdatesImpl, _batchedEventUpdatesImpl) {
        batchedUpdatesImpl = _batchedUpdatesImpl;
        discreteUpdatesImpl = _discreteUpdatesImpl;
        flushDiscreteUpdatesImpl = _flushDiscreteUpdatesImpl;
        batchedEventUpdatesImpl = _batchedEventUpdatesImpl;
      }
      var DiscreteEvent = 0;
      var UserBlockingEvent = 1;
      var ContinuousEvent = 2;
      var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
      var runWithPriority = Scheduler.unstable_runWithPriority;
      var listenToResponderEventTypesImpl;
      function setListenToResponderEventTypes(_listenToResponderEventTypesImpl) {
        listenToResponderEventTypesImpl = _listenToResponderEventTypesImpl;
      }
      var activeTimeouts = new Map();
      var rootEventTypesToEventResponderInstances = new Map();
      var DoNotPropagateToNextResponder = 0;
      var PropagateToNextResponder = 1;
      var currentTimeStamp = 0;
      var currentTimers = new Map();
      var currentInstance = null;
      var currentTimerIDCounter = 0;
      var currentDocument = null;
      var currentPropagationBehavior = DoNotPropagateToNextResponder;
      var eventResponderContext = {
        dispatchEvent: function(eventValue, eventListener, eventPriority2) {
          validateResponderContext();
          validateEventValue(eventValue);
          switch (eventPriority2) {
            case DiscreteEvent: {
              flushDiscreteUpdatesIfNeeded(currentTimeStamp);
              discreteUpdates(function() {
                return executeUserEventHandler(eventListener, eventValue);
              });
              break;
            }
            case UserBlockingEvent: {
              if (enableUserBlockingEvents) {
                runWithPriority(UserBlockingPriority, function() {
                  return executeUserEventHandler(eventListener, eventValue);
                });
              } else {
                executeUserEventHandler(eventListener, eventValue);
              }
              break;
            }
            case ContinuousEvent: {
              executeUserEventHandler(eventListener, eventValue);
              break;
            }
          }
        },
        isTargetWithinResponder: function(target) {
          validateResponderContext();
          if (target != null) {
            var fiber = getClosestInstanceFromNode(target);
            var responderFiber = currentInstance.fiber;
            while (fiber !== null) {
              if (fiber === responderFiber || fiber.alternate === responderFiber) {
                return true;
              }
              fiber = fiber.return;
            }
          }
          return false;
        },
        isTargetWithinResponderScope: function(target) {
          validateResponderContext();
          var componentInstance = currentInstance;
          var responder = componentInstance.responder;
          if (target != null) {
            var fiber = getClosestInstanceFromNode(target);
            var responderFiber = currentInstance.fiber;
            while (fiber !== null) {
              if (fiber === responderFiber || fiber.alternate === responderFiber) {
                return true;
              }
              if (doesFiberHaveResponder(fiber, responder)) {
                return false;
              }
              fiber = fiber.return;
            }
          }
          return false;
        },
        isTargetWithinNode: function(childTarget, parentTarget) {
          validateResponderContext();
          var childFiber = getClosestInstanceFromNode(childTarget);
          var parentFiber = getClosestInstanceFromNode(parentTarget);
          if (childFiber != null && parentFiber != null) {
            var parentAlternateFiber = parentFiber.alternate;
            var node = childFiber;
            while (node !== null) {
              if (node === parentFiber || node === parentAlternateFiber) {
                return true;
              }
              node = node.return;
            }
            return false;
          }
          return parentTarget.contains(childTarget);
        },
        addRootEventTypes: function(rootEventTypes) {
          validateResponderContext();
          listenToResponderEventTypesImpl(rootEventTypes, currentDocument);
          for (var i2 = 0; i2 < rootEventTypes.length; i2++) {
            var rootEventType = rootEventTypes[i2];
            var eventResponderInstance = currentInstance;
            registerRootEventType(rootEventType, eventResponderInstance);
          }
        },
        removeRootEventTypes: function(rootEventTypes) {
          validateResponderContext();
          for (var i2 = 0; i2 < rootEventTypes.length; i2++) {
            var rootEventType = rootEventTypes[i2];
            var rootEventResponders = rootEventTypesToEventResponderInstances.get(rootEventType);
            var rootEventTypesSet = currentInstance.rootEventTypes;
            if (rootEventTypesSet !== null) {
              rootEventTypesSet.delete(rootEventType);
            }
            if (rootEventResponders !== void 0) {
              rootEventResponders.delete(currentInstance);
            }
          }
        },
        setTimeout: function(func, delay) {
          validateResponderContext();
          if (currentTimers === null) {
            currentTimers = new Map();
          }
          var timeout = currentTimers.get(delay);
          var timerId = currentTimerIDCounter++;
          if (timeout === void 0) {
            var timers = new Map();
            var id = setTimeout(function() {
              processTimers(timers, delay);
            }, delay);
            timeout = {
              id,
              timers
            };
            currentTimers.set(delay, timeout);
          }
          timeout.timers.set(timerId, {
            instance: currentInstance,
            func,
            id: timerId,
            timeStamp: currentTimeStamp
          });
          activeTimeouts.set(timerId, timeout);
          return timerId;
        },
        clearTimeout: function(timerId) {
          validateResponderContext();
          var timeout = activeTimeouts.get(timerId);
          if (timeout !== void 0) {
            var timers = timeout.timers;
            timers.delete(timerId);
            if (timers.size === 0) {
              clearTimeout(timeout.id);
            }
          }
        },
        getActiveDocument,
        objectAssign: _assign,
        getTimeStamp: function() {
          validateResponderContext();
          return currentTimeStamp;
        },
        isTargetWithinHostComponent: function(target, elementType) {
          validateResponderContext();
          var fiber = getClosestInstanceFromNode(target);
          while (fiber !== null) {
            if (fiber.tag === HostComponent && fiber.type === elementType) {
              return true;
            }
            fiber = fiber.return;
          }
          return false;
        },
        continuePropagation: function() {
          currentPropagationBehavior = PropagateToNextResponder;
        },
        enqueueStateRestore,
        getResponderNode: function() {
          validateResponderContext();
          var responderFiber = currentInstance.fiber;
          if (responderFiber.tag === ScopeComponent) {
            return null;
          }
          return responderFiber.stateNode;
        }
      };
      function validateEventValue(eventValue) {
        if (typeof eventValue === "object" && eventValue !== null) {
          var target = eventValue.target, type = eventValue.type, timeStamp = eventValue.timeStamp;
          if (target == null || type == null || timeStamp == null) {
            throw new Error('context.dispatchEvent: "target", "timeStamp", and "type" fields on event object are required.');
          }
          var showWarning = function(name) {
            {
              warning$1(false, '%s is not available on event objects created from event responder modules (React Flare). Try wrapping in a conditional, i.e. `if (event.type !== "press") { event.%s }`', name, name);
            }
          };
          eventValue.isDefaultPrevented = function() {
            {
              showWarning("isDefaultPrevented()");
            }
          };
          eventValue.isPropagationStopped = function() {
            {
              showWarning("isPropagationStopped()");
            }
          };
          Object.defineProperty(eventValue, "nativeEvent", {
            get: function() {
              {
                showWarning("nativeEvent");
              }
            }
          });
        }
      }
      function doesFiberHaveResponder(fiber, responder) {
        var tag = fiber.tag;
        if (tag === HostComponent || tag === ScopeComponent) {
          var dependencies = fiber.dependencies;
          if (dependencies !== null) {
            var respondersMap = dependencies.responders;
            if (respondersMap !== null && respondersMap.has(responder)) {
              return true;
            }
          }
        }
        return false;
      }
      function getActiveDocument() {
        return currentDocument;
      }
      function processTimers(timers, delay) {
        var timersArr = Array.from(timers.values());
        var previousInstance = currentInstance;
        var previousTimers = currentTimers;
        try {
          batchedEventUpdates(function() {
            for (var i2 = 0; i2 < timersArr.length; i2++) {
              var _timersArr$i = timersArr[i2], instance = _timersArr$i.instance, func = _timersArr$i.func, id = _timersArr$i.id, timeStamp = _timersArr$i.timeStamp;
              currentInstance = instance;
              currentTimeStamp = timeStamp + delay;
              try {
                func();
              } finally {
                activeTimeouts.delete(id);
              }
            }
          });
        } finally {
          currentTimers = previousTimers;
          currentInstance = previousInstance;
          currentTimeStamp = 0;
        }
      }
      function createDOMResponderEvent(topLevelType, nativeEvent, nativeEventTarget, passive, passiveSupported) {
        var _ref = nativeEvent, buttons = _ref.buttons, pointerType = _ref.pointerType;
        var eventPointerType = "";
        if (pointerType !== void 0) {
          eventPointerType = pointerType;
        } else if (nativeEvent.key !== void 0) {
          eventPointerType = "keyboard";
        } else if (buttons !== void 0) {
          eventPointerType = "mouse";
        } else if (nativeEvent.changedTouches !== void 0) {
          eventPointerType = "touch";
        }
        return {
          nativeEvent,
          passive,
          passiveSupported,
          pointerType: eventPointerType,
          target: nativeEventTarget,
          type: topLevelType
        };
      }
      function responderEventTypesContainType(eventTypes2, type) {
        for (var i2 = 0, len = eventTypes2.length; i2 < len; i2++) {
          if (eventTypes2[i2] === type) {
            return true;
          }
        }
        return false;
      }
      function validateResponderTargetEventTypes(eventType, responder) {
        var targetEventTypes = responder.targetEventTypes;
        if (targetEventTypes !== null) {
          return responderEventTypesContainType(targetEventTypes, eventType);
        }
        return false;
      }
      function traverseAndHandleEventResponderInstances(topLevelType, targetFiber, nativeEvent, nativeEventTarget, eventSystemFlags) {
        var isPassiveEvent = (eventSystemFlags & IS_PASSIVE) !== 0;
        var isPassiveSupported = (eventSystemFlags & PASSIVE_NOT_SUPPORTED) === 0;
        var isPassive = isPassiveEvent || !isPassiveSupported;
        var eventType = isPassive ? topLevelType : topLevelType + "_active";
        var visitedResponders = new Set();
        var responderEvent = createDOMResponderEvent(topLevelType, nativeEvent, nativeEventTarget, isPassiveEvent, isPassiveSupported);
        var node = targetFiber;
        var insidePortal = false;
        while (node !== null) {
          var _node = node, dependencies = _node.dependencies, tag = _node.tag;
          if (tag === HostPortal) {
            insidePortal = true;
          } else if ((tag === HostComponent || tag === ScopeComponent) && dependencies !== null) {
            var respondersMap = dependencies.responders;
            if (respondersMap !== null) {
              var responderInstances = Array.from(respondersMap.values());
              for (var i2 = 0, length = responderInstances.length; i2 < length; i2++) {
                var responderInstance = responderInstances[i2];
                var props = responderInstance.props, responder = responderInstance.responder, state = responderInstance.state;
                if (!visitedResponders.has(responder) && validateResponderTargetEventTypes(eventType, responder) && (!insidePortal || responder.targetPortalPropagation)) {
                  visitedResponders.add(responder);
                  var onEvent2 = responder.onEvent;
                  if (onEvent2 !== null) {
                    currentInstance = responderInstance;
                    onEvent2(responderEvent, eventResponderContext, props, state);
                    if (currentPropagationBehavior === PropagateToNextResponder) {
                      visitedResponders.delete(responder);
                      currentPropagationBehavior = DoNotPropagateToNextResponder;
                    }
                  }
                }
              }
            }
          }
          node = node.return;
        }
        var rootEventResponderInstances = rootEventTypesToEventResponderInstances.get(eventType);
        if (rootEventResponderInstances !== void 0) {
          var _responderInstances = Array.from(rootEventResponderInstances);
          for (var _i = 0; _i < _responderInstances.length; _i++) {
            var _responderInstance = _responderInstances[_i];
            var props = _responderInstance.props, responder = _responderInstance.responder, state = _responderInstance.state;
            var onRootEvent = responder.onRootEvent;
            if (onRootEvent !== null) {
              currentInstance = _responderInstance;
              onRootEvent(responderEvent, eventResponderContext, props, state);
            }
          }
        }
      }
      function mountEventResponder(responder, responderInstance, props, state) {
        var onMount = responder.onMount;
        if (onMount !== null) {
          var previousInstance = currentInstance;
          var previousTimers = currentTimers;
          currentInstance = responderInstance;
          try {
            batchedEventUpdates(function() {
              onMount(eventResponderContext, props, state);
            });
          } finally {
            currentInstance = previousInstance;
            currentTimers = previousTimers;
          }
        }
      }
      function unmountEventResponder(responderInstance) {
        var responder = responderInstance.responder;
        var onUnmount = responder.onUnmount;
        if (onUnmount !== null) {
          var props = responderInstance.props, state = responderInstance.state;
          var previousInstance = currentInstance;
          var previousTimers = currentTimers;
          currentInstance = responderInstance;
          try {
            batchedEventUpdates(function() {
              onUnmount(eventResponderContext, props, state);
            });
          } finally {
            currentInstance = previousInstance;
            currentTimers = previousTimers;
          }
        }
        var rootEventTypesSet = responderInstance.rootEventTypes;
        if (rootEventTypesSet !== null) {
          var rootEventTypes = Array.from(rootEventTypesSet);
          for (var i2 = 0; i2 < rootEventTypes.length; i2++) {
            var topLevelEventType = rootEventTypes[i2];
            var rootEventResponderInstances = rootEventTypesToEventResponderInstances.get(topLevelEventType);
            if (rootEventResponderInstances !== void 0) {
              rootEventResponderInstances.delete(responderInstance);
            }
          }
        }
      }
      function validateResponderContext() {
        (function() {
          if (!(currentInstance !== null)) {
            {
              throw ReactError(Error("An event responder context was used outside of an event cycle. Use context.setTimeout() to use asynchronous responder context outside of event cycle ."));
            }
          }
        })();
      }
      function dispatchEventForResponderEventSystem(topLevelType, targetFiber, nativeEvent, nativeEventTarget, eventSystemFlags) {
        if (enableFlareAPI) {
          var previousInstance = currentInstance;
          var previousTimers = currentTimers;
          var previousTimeStamp = currentTimeStamp;
          var previousDocument = currentDocument;
          var previousPropagationBehavior = currentPropagationBehavior;
          currentPropagationBehavior = DoNotPropagateToNextResponder;
          currentTimers = null;
          currentDocument = nativeEventTarget.nodeType === 9 ? nativeEventTarget : nativeEventTarget.ownerDocument;
          currentTimeStamp = nativeEvent.timeStamp;
          try {
            batchedEventUpdates(function() {
              traverseAndHandleEventResponderInstances(topLevelType, targetFiber, nativeEvent, nativeEventTarget, eventSystemFlags);
            });
          } finally {
            currentTimers = previousTimers;
            currentInstance = previousInstance;
            currentTimeStamp = previousTimeStamp;
            currentDocument = previousDocument;
            currentPropagationBehavior = previousPropagationBehavior;
          }
        }
      }
      function addRootEventTypesForResponderInstance(responderInstance, rootEventTypes) {
        for (var i2 = 0; i2 < rootEventTypes.length; i2++) {
          var rootEventType = rootEventTypes[i2];
          registerRootEventType(rootEventType, responderInstance);
        }
      }
      function registerRootEventType(rootEventType, eventResponderInstance) {
        var rootEventResponderInstances = rootEventTypesToEventResponderInstances.get(rootEventType);
        if (rootEventResponderInstances === void 0) {
          rootEventResponderInstances = new Set();
          rootEventTypesToEventResponderInstances.set(rootEventType, rootEventResponderInstances);
        }
        var rootEventTypesSet = eventResponderInstance.rootEventTypes;
        if (rootEventTypesSet === null) {
          rootEventTypesSet = eventResponderInstance.rootEventTypes = new Set();
        }
        (function() {
          if (!!rootEventTypesSet.has(rootEventType)) {
            {
              throw ReactError(Error('addRootEventTypes() found a duplicate root event type of "' + rootEventType + '". This might be because the event type exists in the event responder "rootEventTypes" array or because of a previous addRootEventTypes() using this root event type.'));
            }
          }
        })();
        rootEventTypesSet.add(rootEventType);
        rootEventResponderInstances.add(eventResponderInstance);
      }
      var RESERVED = 0;
      var STRING = 1;
      var BOOLEANISH_STRING = 2;
      var BOOLEAN = 3;
      var OVERLOADED_BOOLEAN = 4;
      var NUMERIC = 5;
      var POSITIVE_NUMERIC = 6;
      var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var ROOT_ATTRIBUTE_NAME = "data-reactroot";
      var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var illegalAttributeNameCache = {};
      var validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
          return true;
        }
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
          return false;
        }
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
          validatedAttributeNameCache[attributeName] = true;
          return true;
        }
        illegalAttributeNameCache[attributeName] = true;
        {
          warning$1(false, "Invalid attribute name: `%s`", attributeName);
        }
        return false;
      }
      function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null) {
          return propertyInfo.type === RESERVED;
        }
        if (isCustomComponentTag) {
          return false;
        }
        if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
          return true;
        }
        return false;
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED) {
          return false;
        }
        switch (typeof value) {
          case "function":
          case "symbol":
            return true;
          case "boolean": {
            if (isCustomComponentTag) {
              return false;
            }
            if (propertyInfo !== null) {
              return !propertyInfo.acceptsBooleans;
            } else {
              var prefix = name.toLowerCase().slice(0, 5);
              return prefix !== "data-" && prefix !== "aria-";
            }
          }
          default:
            return false;
        }
      }
      function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
        if (value === null || typeof value === "undefined") {
          return true;
        }
        if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
          return true;
        }
        if (isCustomComponentTag) {
          return false;
        }
        if (propertyInfo !== null) {
          switch (propertyInfo.type) {
            case BOOLEAN:
              return !value;
            case OVERLOADED_BOOLEAN:
              return value === false;
            case NUMERIC:
              return isNaN(value);
            case POSITIVE_NUMERIC:
              return isNaN(value) || value < 1;
          }
        }
        return false;
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
        this.attributeName = attributeName;
        this.attributeNamespace = attributeNamespace;
        this.mustUseProperty = mustUseProperty;
        this.propertyName = name;
        this.type = type;
        this.sanitizeURL = sanitizeURL2;
      }
      var properties = {};
      [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false);
      });
      [
        "allowFullScreen",
        "async",
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "itemScope"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false);
      });
      [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false);
      });
      ["capture", "download"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false);
      });
      ["rowSpan", "start"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false);
      });
      var CAMELIZE = /[\-\:]([a-z])/g;
      var capitalize = function(token) {
        return token[1].toUpperCase();
      };
      ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false);
      });
      ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false);
      });
      var xlinkHref = "xlinkHref";
      properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true);
      ["src", "href", "action", "formAction"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true);
      });
      var ReactDebugCurrentFrame$1 = null;
      {
        ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      }
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
      var didWarn = false;
      function sanitizeURL(url) {
        if (disableJavaScriptURLs) {
          (function() {
            if (!!isJavaScriptProtocol.test(url)) {
              {
                throw ReactError(Error("React has blocked a javascript: URL as a security precaution." + ReactDebugCurrentFrame$1.getStackAddendum()));
              }
            }
          })();
        } else if (!didWarn && isJavaScriptProtocol.test(url)) {
          didWarn = true;
          warning$1(false, "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
        }
      }
      function toString(value) {
        return "" + value;
      }
      function getToStringValue(value) {
        switch (typeof value) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return value;
          default:
            return "";
        }
      }
      var toStringOrTrustedType = toString;
      if (enableTrustedTypesIntegration && typeof trustedTypes !== "undefined") {
        var isHTML = trustedTypes.isHTML;
        var isScript = trustedTypes.isScript;
        var isScriptURL = trustedTypes.isScriptURL;
        var isURL = trustedTypes.isURL ? trustedTypes.isURL : function(value) {
          return false;
        };
        toStringOrTrustedType = function(value) {
          if (typeof value === "object" && (isHTML(value) || isScript(value) || isScriptURL(value) || isURL(value))) {
            return value;
          }
          return toString(value);
        };
      }
      function setAttribute(node, attributeName, attributeValue) {
        node.setAttribute(attributeName, attributeValue);
      }
      function setAttributeNS(node, attributeNamespace, attributeName, attributeValue) {
        node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
      }
      function getValueForProperty(node, name, expected, propertyInfo) {
        {
          if (propertyInfo.mustUseProperty) {
            var propertyName = propertyInfo.propertyName;
            return node[propertyName];
          } else {
            if (!disableJavaScriptURLs && propertyInfo.sanitizeURL) {
              sanitizeURL("" + expected);
            }
            var attributeName = propertyInfo.attributeName;
            var stringValue = null;
            if (propertyInfo.type === OVERLOADED_BOOLEAN) {
              if (node.hasAttribute(attributeName)) {
                var value = node.getAttribute(attributeName);
                if (value === "") {
                  return true;
                }
                if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                  return value;
                }
                if (value === "" + expected) {
                  return expected;
                }
                return value;
              }
            } else if (node.hasAttribute(attributeName)) {
              if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
                return node.getAttribute(attributeName);
              }
              if (propertyInfo.type === BOOLEAN) {
                return expected;
              }
              stringValue = node.getAttribute(attributeName);
            }
            if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
              return stringValue === null ? expected : stringValue;
            } else if (stringValue === "" + expected) {
              return expected;
            } else {
              return stringValue;
            }
          }
        }
      }
      function getValueForAttribute(node, name, expected) {
        {
          if (!isAttributeNameSafe(name)) {
            return;
          }
          if (!node.hasAttribute(name)) {
            return expected === void 0 ? void 0 : null;
          }
          var value = node.getAttribute(name);
          if (value === "" + expected) {
            return expected;
          }
          return value;
        }
      }
      function setValueForProperty(node, name, value, isCustomComponentTag) {
        var propertyInfo = getPropertyInfo(name);
        if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
          return;
        }
        if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) {
          value = null;
        }
        if (isCustomComponentTag || propertyInfo === null) {
          if (isAttributeNameSafe(name)) {
            var _attributeName = name;
            if (value === null) {
              node.removeAttribute(_attributeName);
            } else {
              setAttribute(node, _attributeName, toStringOrTrustedType(value));
            }
          }
          return;
        }
        var mustUseProperty = propertyInfo.mustUseProperty;
        if (mustUseProperty) {
          var propertyName = propertyInfo.propertyName;
          if (value === null) {
            var type = propertyInfo.type;
            node[propertyName] = type === BOOLEAN ? false : "";
          } else {
            node[propertyName] = value;
          }
          return;
        }
        var attributeName = propertyInfo.attributeName, attributeNamespace = propertyInfo.attributeNamespace;
        if (value === null) {
          node.removeAttribute(attributeName);
        } else {
          var _type = propertyInfo.type;
          var attributeValue;
          if (_type === BOOLEAN || _type === OVERLOADED_BOOLEAN && value === true) {
            attributeValue = "";
          } else {
            attributeValue = toStringOrTrustedType(value);
            if (propertyInfo.sanitizeURL) {
              sanitizeURL(attributeValue.toString());
            }
          }
          if (attributeNamespace) {
            setAttributeNS(node, attributeNamespace, attributeName, attributeValue);
          } else {
            setAttribute(node, attributeName, attributeValue);
          }
        }
      }
      var ReactDebugCurrentFrame$2 = null;
      var ReactControlledValuePropTypes = {
        checkPropTypes: null
      };
      {
        ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        var propTypes = {
          value: function(props, propName, componentName) {
            if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableFlareAPI && props.listeners) {
              return null;
            }
            return new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
          },
          checked: function(props, propName, componentName) {
            if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableFlareAPI && props.listeners) {
              return null;
            }
            return new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
          }
        };
        ReactControlledValuePropTypes.checkPropTypes = function(tagName, props) {
          checkPropTypes(propTypes, props, "prop", tagName, ReactDebugCurrentFrame$2.getStackAddendum);
        };
      }
      function isCheckable(elem) {
        var type = elem.type;
        var nodeName = elem.nodeName;
        return nodeName && nodeName.toLowerCase() === "input" && (type === "checkbox" || type === "radio");
      }
      function getTracker(node) {
        return node._valueTracker;
      }
      function detachTracker(node) {
        node._valueTracker = null;
      }
      function getValueFromNode(node) {
        var value = "";
        if (!node) {
          return value;
        }
        if (isCheckable(node)) {
          value = node.checked ? "true" : "false";
        } else {
          value = node.value;
        }
        return value;
      }
      function trackValueOnNode(node) {
        var valueField = isCheckable(node) ? "checked" : "value";
        var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
        var currentValue = "" + node[valueField];
        if (node.hasOwnProperty(valueField) || typeof descriptor === "undefined" || typeof descriptor.get !== "function" || typeof descriptor.set !== "function") {
          return;
        }
        var get2 = descriptor.get, set2 = descriptor.set;
        Object.defineProperty(node, valueField, {
          configurable: true,
          get: function() {
            return get2.call(this);
          },
          set: function(value) {
            currentValue = "" + value;
            set2.call(this, value);
          }
        });
        Object.defineProperty(node, valueField, {
          enumerable: descriptor.enumerable
        });
        var tracker = {
          getValue: function() {
            return currentValue;
          },
          setValue: function(value) {
            currentValue = "" + value;
          },
          stopTracking: function() {
            detachTracker(node);
            delete node[valueField];
          }
        };
        return tracker;
      }
      function track(node) {
        if (getTracker(node)) {
          return;
        }
        node._valueTracker = trackValueOnNode(node);
      }
      function updateValueIfChanged(node) {
        if (!node) {
          return false;
        }
        var tracker = getTracker(node);
        if (!tracker) {
          return true;
        }
        var lastValue = tracker.getValue();
        var nextValue = getValueFromNode(node);
        if (nextValue !== lastValue) {
          tracker.setValue(nextValue);
          return true;
        }
        return false;
      }
      var didWarnValueDefaultValue = false;
      var didWarnCheckedDefaultChecked = false;
      var didWarnControlledToUncontrolled = false;
      var didWarnUncontrolledToControlled = false;
      function isControlled(props) {
        var usesChecked = props.type === "checkbox" || props.type === "radio";
        return usesChecked ? props.checked != null : props.value != null;
      }
      function getHostProps(element, props) {
        var node = element;
        var checked = props.checked;
        var hostProps = _assign({}, props, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: checked != null ? checked : node._wrapperState.initialChecked
        });
        return hostProps;
      }
      function initWrapperState(element, props) {
        {
          ReactControlledValuePropTypes.checkPropTypes("input", props);
          if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnCheckedDefaultChecked) {
            warning$1(false, "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type);
            didWarnCheckedDefaultChecked = true;
          }
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValueDefaultValue) {
            warning$1(false, "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type);
            didWarnValueDefaultValue = true;
          }
        }
        var node = element;
        var defaultValue = props.defaultValue == null ? "" : props.defaultValue;
        node._wrapperState = {
          initialChecked: props.checked != null ? props.checked : props.defaultChecked,
          initialValue: getToStringValue(props.value != null ? props.value : defaultValue),
          controlled: isControlled(props)
        };
      }
      function updateChecked(element, props) {
        var node = element;
        var checked = props.checked;
        if (checked != null) {
          setValueForProperty(node, "checked", checked, false);
        }
      }
      function updateWrapper(element, props) {
        var node = element;
        {
          var controlled = isControlled(props);
          if (!node._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
            warning$1(false, "A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", props.type);
            didWarnUncontrolledToControlled = true;
          }
          if (node._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
            warning$1(false, "A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", props.type);
            didWarnControlledToUncontrolled = true;
          }
        }
        updateChecked(element, props);
        var value = getToStringValue(props.value);
        var type = props.type;
        if (value != null) {
          if (type === "number") {
            if (value === 0 && node.value === "" || node.value != value) {
              node.value = toString(value);
            }
          } else if (node.value !== toString(value)) {
            node.value = toString(value);
          }
        } else if (type === "submit" || type === "reset") {
          node.removeAttribute("value");
          return;
        }
        if (disableInputAttributeSyncing) {
          if (props.hasOwnProperty("defaultValue")) {
            setDefaultValue(node, props.type, getToStringValue(props.defaultValue));
          }
        } else {
          if (props.hasOwnProperty("value")) {
            setDefaultValue(node, props.type, value);
          } else if (props.hasOwnProperty("defaultValue")) {
            setDefaultValue(node, props.type, getToStringValue(props.defaultValue));
          }
        }
        if (disableInputAttributeSyncing) {
          if (props.defaultChecked == null) {
            node.removeAttribute("checked");
          } else {
            node.defaultChecked = !!props.defaultChecked;
          }
        } else {
          if (props.checked == null && props.defaultChecked != null) {
            node.defaultChecked = !!props.defaultChecked;
          }
        }
      }
      function postMountWrapper(element, props, isHydrating2) {
        var node = element;
        if (props.hasOwnProperty("value") || props.hasOwnProperty("defaultValue")) {
          var type = props.type;
          var isButton = type === "submit" || type === "reset";
          if (isButton && (props.value === void 0 || props.value === null)) {
            return;
          }
          var initialValue = toString(node._wrapperState.initialValue);
          if (!isHydrating2) {
            if (disableInputAttributeSyncing) {
              var value = getToStringValue(props.value);
              if (value != null) {
                if (isButton || value !== node.value) {
                  node.value = toString(value);
                }
              }
            } else {
              if (initialValue !== node.value) {
                node.value = initialValue;
              }
            }
          }
          if (disableInputAttributeSyncing) {
            var defaultValue = getToStringValue(props.defaultValue);
            if (defaultValue != null) {
              node.defaultValue = toString(defaultValue);
            }
          } else {
            node.defaultValue = initialValue;
          }
        }
        var name = node.name;
        if (name !== "") {
          node.name = "";
        }
        if (disableInputAttributeSyncing) {
          if (!isHydrating2) {
            updateChecked(element, props);
          }
          if (props.hasOwnProperty("defaultChecked")) {
            node.defaultChecked = !node.defaultChecked;
            node.defaultChecked = !!props.defaultChecked;
          }
        } else {
          node.defaultChecked = !node.defaultChecked;
          node.defaultChecked = !!node._wrapperState.initialChecked;
        }
        if (name !== "") {
          node.name = name;
        }
      }
      function restoreControlledState$1(element, props) {
        var node = element;
        updateWrapper(node, props);
        updateNamedCousins(node, props);
      }
      function updateNamedCousins(rootNode, props) {
        var name = props.name;
        if (props.type === "radio" && name != null) {
          var queryRoot = rootNode;
          while (queryRoot.parentNode) {
            queryRoot = queryRoot.parentNode;
          }
          var group = queryRoot.querySelectorAll("input[name=" + JSON.stringify("" + name) + '][type="radio"]');
          for (var i2 = 0; i2 < group.length; i2++) {
            var otherNode = group[i2];
            if (otherNode === rootNode || otherNode.form !== rootNode.form) {
              continue;
            }
            var otherProps = getFiberCurrentPropsFromNode$1(otherNode);
            (function() {
              if (!otherProps) {
                {
                  throw ReactError(Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."));
                }
              }
            })();
            updateValueIfChanged(otherNode);
            updateWrapper(otherNode, otherProps);
          }
        }
      }
      function setDefaultValue(node, type, value) {
        if (type !== "number" || node.ownerDocument.activeElement !== node) {
          if (value == null) {
            node.defaultValue = toString(node._wrapperState.initialValue);
          } else if (node.defaultValue !== toString(value)) {
            node.defaultValue = toString(value);
          }
        }
      }
      var didWarnSelectedSetOnOption = false;
      var didWarnInvalidChild = false;
      function flattenChildren(children) {
        var content = "";
        React10.Children.forEach(children, function(child) {
          if (child == null) {
            return;
          }
          content += child;
        });
        return content;
      }
      function validateProps(element, props) {
        {
          if (typeof props.children === "object" && props.children !== null) {
            React10.Children.forEach(props.children, function(child) {
              if (child == null) {
                return;
              }
              if (typeof child === "string" || typeof child === "number") {
                return;
              }
              if (typeof child.type !== "string") {
                return;
              }
              if (!didWarnInvalidChild) {
                didWarnInvalidChild = true;
                warning$1(false, "Only strings and numbers are supported as <option> children.");
              }
            });
          }
          if (props.selected != null && !didWarnSelectedSetOnOption) {
            warning$1(false, "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
            didWarnSelectedSetOnOption = true;
          }
        }
      }
      function postMountWrapper$1(element, props) {
        if (props.value != null) {
          element.setAttribute("value", toString(getToStringValue(props.value)));
        }
      }
      function getHostProps$1(element, props) {
        var hostProps = _assign({
          children: void 0
        }, props);
        var content = flattenChildren(props.children);
        if (content) {
          hostProps.children = content;
        }
        return hostProps;
      }
      var didWarnValueDefaultValue$1;
      {
        didWarnValueDefaultValue$1 = false;
      }
      function getDeclarationErrorAddendum() {
        var ownerName = getCurrentFiberOwnerNameInDevOrNull();
        if (ownerName) {
          return "\n\nCheck the render method of `" + ownerName + "`.";
        }
        return "";
      }
      var valuePropNames = ["value", "defaultValue"];
      function checkSelectPropTypes(props) {
        ReactControlledValuePropTypes.checkPropTypes("select", props);
        for (var i2 = 0; i2 < valuePropNames.length; i2++) {
          var propName = valuePropNames[i2];
          if (props[propName] == null) {
            continue;
          }
          var isArray2 = Array.isArray(props[propName]);
          if (props.multiple && !isArray2) {
            warning$1(false, "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", propName, getDeclarationErrorAddendum());
          } else if (!props.multiple && isArray2) {
            warning$1(false, "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", propName, getDeclarationErrorAddendum());
          }
        }
      }
      function updateOptions(node, multiple, propValue, setDefaultSelected) {
        var options2 = node.options;
        if (multiple) {
          var selectedValues = propValue;
          var selectedValue = {};
          for (var i2 = 0; i2 < selectedValues.length; i2++) {
            selectedValue["$" + selectedValues[i2]] = true;
          }
          for (var _i = 0; _i < options2.length; _i++) {
            var selected = selectedValue.hasOwnProperty("$" + options2[_i].value);
            if (options2[_i].selected !== selected) {
              options2[_i].selected = selected;
            }
            if (selected && setDefaultSelected) {
              options2[_i].defaultSelected = true;
            }
          }
        } else {
          var _selectedValue = toString(getToStringValue(propValue));
          var defaultSelected = null;
          for (var _i2 = 0; _i2 < options2.length; _i2++) {
            if (options2[_i2].value === _selectedValue) {
              options2[_i2].selected = true;
              if (setDefaultSelected) {
                options2[_i2].defaultSelected = true;
              }
              return;
            }
            if (defaultSelected === null && !options2[_i2].disabled) {
              defaultSelected = options2[_i2];
            }
          }
          if (defaultSelected !== null) {
            defaultSelected.selected = true;
          }
        }
      }
      function getHostProps$2(element, props) {
        return _assign({}, props, {
          value: void 0
        });
      }
      function initWrapperState$1(element, props) {
        var node = element;
        {
          checkSelectPropTypes(props);
        }
        node._wrapperState = {
          wasMultiple: !!props.multiple
        };
        {
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValueDefaultValue$1) {
            warning$1(false, "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components");
            didWarnValueDefaultValue$1 = true;
          }
        }
      }
      function postMountWrapper$2(element, props) {
        var node = element;
        node.multiple = !!props.multiple;
        var value = props.value;
        if (value != null) {
          updateOptions(node, !!props.multiple, value, false);
        } else if (props.defaultValue != null) {
          updateOptions(node, !!props.multiple, props.defaultValue, true);
        }
      }
      function postUpdateWrapper(element, props) {
        var node = element;
        var wasMultiple = node._wrapperState.wasMultiple;
        node._wrapperState.wasMultiple = !!props.multiple;
        var value = props.value;
        if (value != null) {
          updateOptions(node, !!props.multiple, value, false);
        } else if (wasMultiple !== !!props.multiple) {
          if (props.defaultValue != null) {
            updateOptions(node, !!props.multiple, props.defaultValue, true);
          } else {
            updateOptions(node, !!props.multiple, props.multiple ? [] : "", false);
          }
        }
      }
      function restoreControlledState$2(element, props) {
        var node = element;
        var value = props.value;
        if (value != null) {
          updateOptions(node, !!props.multiple, value, false);
        }
      }
      var didWarnValDefaultVal = false;
      function getHostProps$3(element, props) {
        var node = element;
        (function() {
          if (!(props.dangerouslySetInnerHTML == null)) {
            {
              throw ReactError(Error("`dangerouslySetInnerHTML` does not make sense on <textarea>."));
            }
          }
        })();
        var hostProps = _assign({}, props, {
          value: void 0,
          defaultValue: void 0,
          children: toString(node._wrapperState.initialValue)
        });
        return hostProps;
      }
      function initWrapperState$2(element, props) {
        var node = element;
        {
          ReactControlledValuePropTypes.checkPropTypes("textarea", props);
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnValDefaultVal) {
            warning$1(false, "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component");
            didWarnValDefaultVal = true;
          }
        }
        var initialValue = props.value;
        if (initialValue == null) {
          var defaultValue = props.defaultValue;
          var children = props.children;
          if (children != null) {
            {
              warning$1(false, "Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            }
            (function() {
              if (!(defaultValue == null)) {
                {
                  throw ReactError(Error("If you supply `defaultValue` on a <textarea>, do not pass children."));
                }
              }
            })();
            if (Array.isArray(children)) {
              (function() {
                if (!(children.length <= 1)) {
                  {
                    throw ReactError(Error("<textarea> can only have at most one child."));
                  }
                }
              })();
              children = children[0];
            }
            defaultValue = children;
          }
          if (defaultValue == null) {
            defaultValue = "";
          }
          initialValue = defaultValue;
        }
        node._wrapperState = {
          initialValue: getToStringValue(initialValue)
        };
      }
      function updateWrapper$1(element, props) {
        var node = element;
        var value = getToStringValue(props.value);
        var defaultValue = getToStringValue(props.defaultValue);
        if (value != null) {
          var newValue = toString(value);
          if (newValue !== node.value) {
            node.value = newValue;
          }
          if (props.defaultValue == null && node.defaultValue !== newValue) {
            node.defaultValue = newValue;
          }
        }
        if (defaultValue != null) {
          node.defaultValue = toString(defaultValue);
        }
      }
      function postMountWrapper$3(element, props) {
        var node = element;
        var textContent = node.textContent;
        if (textContent === node._wrapperState.initialValue) {
          if (textContent !== "" && textContent !== null) {
            node.value = textContent;
          }
        }
      }
      function restoreControlledState$3(element, props) {
        updateWrapper$1(element, props);
      }
      var HTML_NAMESPACE$1 = "http://www.w3.org/1999/xhtml";
      var MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
      var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
      var Namespaces = {
        html: HTML_NAMESPACE$1,
        mathml: MATH_NAMESPACE,
        svg: SVG_NAMESPACE
      };
      function getIntrinsicNamespace(type) {
        switch (type) {
          case "svg":
            return SVG_NAMESPACE;
          case "math":
            return MATH_NAMESPACE;
          default:
            return HTML_NAMESPACE$1;
        }
      }
      function getChildNamespace(parentNamespace, type) {
        if (parentNamespace == null || parentNamespace === HTML_NAMESPACE$1) {
          return getIntrinsicNamespace(type);
        }
        if (parentNamespace === SVG_NAMESPACE && type === "foreignObject") {
          return HTML_NAMESPACE$1;
        }
        return parentNamespace;
      }
      var createMicrosoftUnsafeLocalFunction = function(func) {
        if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
          return function(arg0, arg1, arg2, arg3) {
            MSApp.execUnsafeLocalFunction(function() {
              return func(arg0, arg1, arg2, arg3);
            });
          };
        } else {
          return func;
        }
      };
      var reusableSVGContainer;
      var setInnerHTML = createMicrosoftUnsafeLocalFunction(function(node, html) {
        if (node.namespaceURI === Namespaces.svg) {
          {
            if (enableTrustedTypesIntegration) {
              !(typeof trustedTypes === "undefined") ? warning$1(false, "Using 'dangerouslySetInnerHTML' in an svg element with Trusted Types enabled in an Internet Explorer will cause the trusted value to be converted to string. Assigning string to 'innerHTML' will throw an error if Trusted Types are enforced. You can try to wrap your svg element inside a div and use 'dangerouslySetInnerHTML' on the enclosing div instead.") : void 0;
            }
          }
          if (!("innerHTML" in node)) {
            reusableSVGContainer = reusableSVGContainer || document.createElement("div");
            reusableSVGContainer.innerHTML = "<svg>" + html.valueOf().toString() + "</svg>";
            var svgNode = reusableSVGContainer.firstChild;
            while (node.firstChild) {
              node.removeChild(node.firstChild);
            }
            while (svgNode.firstChild) {
              node.appendChild(svgNode.firstChild);
            }
            return;
          }
        }
        node.innerHTML = html;
      });
      var ELEMENT_NODE = 1;
      var TEXT_NODE = 3;
      var COMMENT_NODE = 8;
      var DOCUMENT_NODE = 9;
      var DOCUMENT_FRAGMENT_NODE = 11;
      var setTextContent = function(node, text) {
        if (text) {
          var firstChild = node.firstChild;
          if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
            firstChild.nodeValue = text;
            return;
          }
        }
        node.textContent = text;
      };
      function unsafeCastStringToDOMTopLevelType(topLevelType) {
        return topLevelType;
      }
      function unsafeCastDOMTopLevelTypeToString(topLevelType) {
        return topLevelType;
      }
      function makePrefixMap(styleProp, eventName) {
        var prefixes2 = {};
        prefixes2[styleProp.toLowerCase()] = eventName.toLowerCase();
        prefixes2["Webkit" + styleProp] = "webkit" + eventName;
        prefixes2["Moz" + styleProp] = "moz" + eventName;
        return prefixes2;
      }
      var vendorPrefixes = {
        animationend: makePrefixMap("Animation", "AnimationEnd"),
        animationiteration: makePrefixMap("Animation", "AnimationIteration"),
        animationstart: makePrefixMap("Animation", "AnimationStart"),
        transitionend: makePrefixMap("Transition", "TransitionEnd")
      };
      var prefixedEventNames = {};
      var style = {};
      if (canUseDOM) {
        style = document.createElement("div").style;
        if (!("AnimationEvent" in window)) {
          delete vendorPrefixes.animationend.animation;
          delete vendorPrefixes.animationiteration.animation;
          delete vendorPrefixes.animationstart.animation;
        }
        if (!("TransitionEvent" in window)) {
          delete vendorPrefixes.transitionend.transition;
        }
      }
      function getVendorPrefixedEventName(eventName) {
        if (prefixedEventNames[eventName]) {
          return prefixedEventNames[eventName];
        } else if (!vendorPrefixes[eventName]) {
          return eventName;
        }
        var prefixMap = vendorPrefixes[eventName];
        for (var styleProp in prefixMap) {
          if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
            return prefixedEventNames[eventName] = prefixMap[styleProp];
          }
        }
        return eventName;
      }
      var TOP_ABORT = unsafeCastStringToDOMTopLevelType("abort");
      var TOP_ANIMATION_END = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName("animationend"));
      var TOP_ANIMATION_ITERATION = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName("animationiteration"));
      var TOP_ANIMATION_START = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName("animationstart"));
      var TOP_BLUR = unsafeCastStringToDOMTopLevelType("blur");
      var TOP_CAN_PLAY = unsafeCastStringToDOMTopLevelType("canplay");
      var TOP_CAN_PLAY_THROUGH = unsafeCastStringToDOMTopLevelType("canplaythrough");
      var TOP_CANCEL = unsafeCastStringToDOMTopLevelType("cancel");
      var TOP_CHANGE = unsafeCastStringToDOMTopLevelType("change");
      var TOP_CLICK = unsafeCastStringToDOMTopLevelType("click");
      var TOP_CLOSE = unsafeCastStringToDOMTopLevelType("close");
      var TOP_COMPOSITION_END = unsafeCastStringToDOMTopLevelType("compositionend");
      var TOP_COMPOSITION_START = unsafeCastStringToDOMTopLevelType("compositionstart");
      var TOP_COMPOSITION_UPDATE = unsafeCastStringToDOMTopLevelType("compositionupdate");
      var TOP_CONTEXT_MENU = unsafeCastStringToDOMTopLevelType("contextmenu");
      var TOP_COPY = unsafeCastStringToDOMTopLevelType("copy");
      var TOP_CUT = unsafeCastStringToDOMTopLevelType("cut");
      var TOP_DOUBLE_CLICK = unsafeCastStringToDOMTopLevelType("dblclick");
      var TOP_AUX_CLICK = unsafeCastStringToDOMTopLevelType("auxclick");
      var TOP_DRAG = unsafeCastStringToDOMTopLevelType("drag");
      var TOP_DRAG_END = unsafeCastStringToDOMTopLevelType("dragend");
      var TOP_DRAG_ENTER = unsafeCastStringToDOMTopLevelType("dragenter");
      var TOP_DRAG_EXIT = unsafeCastStringToDOMTopLevelType("dragexit");
      var TOP_DRAG_LEAVE = unsafeCastStringToDOMTopLevelType("dragleave");
      var TOP_DRAG_OVER = unsafeCastStringToDOMTopLevelType("dragover");
      var TOP_DRAG_START = unsafeCastStringToDOMTopLevelType("dragstart");
      var TOP_DROP = unsafeCastStringToDOMTopLevelType("drop");
      var TOP_DURATION_CHANGE = unsafeCastStringToDOMTopLevelType("durationchange");
      var TOP_EMPTIED = unsafeCastStringToDOMTopLevelType("emptied");
      var TOP_ENCRYPTED = unsafeCastStringToDOMTopLevelType("encrypted");
      var TOP_ENDED = unsafeCastStringToDOMTopLevelType("ended");
      var TOP_ERROR = unsafeCastStringToDOMTopLevelType("error");
      var TOP_FOCUS = unsafeCastStringToDOMTopLevelType("focus");
      var TOP_GOT_POINTER_CAPTURE = unsafeCastStringToDOMTopLevelType("gotpointercapture");
      var TOP_INPUT = unsafeCastStringToDOMTopLevelType("input");
      var TOP_INVALID = unsafeCastStringToDOMTopLevelType("invalid");
      var TOP_KEY_DOWN = unsafeCastStringToDOMTopLevelType("keydown");
      var TOP_KEY_PRESS = unsafeCastStringToDOMTopLevelType("keypress");
      var TOP_KEY_UP = unsafeCastStringToDOMTopLevelType("keyup");
      var TOP_LOAD = unsafeCastStringToDOMTopLevelType("load");
      var TOP_LOAD_START = unsafeCastStringToDOMTopLevelType("loadstart");
      var TOP_LOADED_DATA = unsafeCastStringToDOMTopLevelType("loadeddata");
      var TOP_LOADED_METADATA = unsafeCastStringToDOMTopLevelType("loadedmetadata");
      var TOP_LOST_POINTER_CAPTURE = unsafeCastStringToDOMTopLevelType("lostpointercapture");
      var TOP_MOUSE_DOWN = unsafeCastStringToDOMTopLevelType("mousedown");
      var TOP_MOUSE_MOVE = unsafeCastStringToDOMTopLevelType("mousemove");
      var TOP_MOUSE_OUT = unsafeCastStringToDOMTopLevelType("mouseout");
      var TOP_MOUSE_OVER = unsafeCastStringToDOMTopLevelType("mouseover");
      var TOP_MOUSE_UP = unsafeCastStringToDOMTopLevelType("mouseup");
      var TOP_PASTE = unsafeCastStringToDOMTopLevelType("paste");
      var TOP_PAUSE = unsafeCastStringToDOMTopLevelType("pause");
      var TOP_PLAY = unsafeCastStringToDOMTopLevelType("play");
      var TOP_PLAYING = unsafeCastStringToDOMTopLevelType("playing");
      var TOP_POINTER_CANCEL = unsafeCastStringToDOMTopLevelType("pointercancel");
      var TOP_POINTER_DOWN = unsafeCastStringToDOMTopLevelType("pointerdown");
      var TOP_POINTER_MOVE = unsafeCastStringToDOMTopLevelType("pointermove");
      var TOP_POINTER_OUT = unsafeCastStringToDOMTopLevelType("pointerout");
      var TOP_POINTER_OVER = unsafeCastStringToDOMTopLevelType("pointerover");
      var TOP_POINTER_UP = unsafeCastStringToDOMTopLevelType("pointerup");
      var TOP_PROGRESS = unsafeCastStringToDOMTopLevelType("progress");
      var TOP_RATE_CHANGE = unsafeCastStringToDOMTopLevelType("ratechange");
      var TOP_RESET = unsafeCastStringToDOMTopLevelType("reset");
      var TOP_SCROLL = unsafeCastStringToDOMTopLevelType("scroll");
      var TOP_SEEKED = unsafeCastStringToDOMTopLevelType("seeked");
      var TOP_SEEKING = unsafeCastStringToDOMTopLevelType("seeking");
      var TOP_SELECTION_CHANGE = unsafeCastStringToDOMTopLevelType("selectionchange");
      var TOP_STALLED = unsafeCastStringToDOMTopLevelType("stalled");
      var TOP_SUBMIT = unsafeCastStringToDOMTopLevelType("submit");
      var TOP_SUSPEND = unsafeCastStringToDOMTopLevelType("suspend");
      var TOP_TEXT_INPUT = unsafeCastStringToDOMTopLevelType("textInput");
      var TOP_TIME_UPDATE = unsafeCastStringToDOMTopLevelType("timeupdate");
      var TOP_TOGGLE = unsafeCastStringToDOMTopLevelType("toggle");
      var TOP_TOUCH_CANCEL = unsafeCastStringToDOMTopLevelType("touchcancel");
      var TOP_TOUCH_END = unsafeCastStringToDOMTopLevelType("touchend");
      var TOP_TOUCH_MOVE = unsafeCastStringToDOMTopLevelType("touchmove");
      var TOP_TOUCH_START = unsafeCastStringToDOMTopLevelType("touchstart");
      var TOP_TRANSITION_END = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName("transitionend"));
      var TOP_VOLUME_CHANGE = unsafeCastStringToDOMTopLevelType("volumechange");
      var TOP_WAITING = unsafeCastStringToDOMTopLevelType("waiting");
      var TOP_WHEEL = unsafeCastStringToDOMTopLevelType("wheel");
      var mediaEventTypes = [TOP_ABORT, TOP_CAN_PLAY, TOP_CAN_PLAY_THROUGH, TOP_DURATION_CHANGE, TOP_EMPTIED, TOP_ENCRYPTED, TOP_ENDED, TOP_ERROR, TOP_LOADED_DATA, TOP_LOADED_METADATA, TOP_LOAD_START, TOP_PAUSE, TOP_PLAY, TOP_PLAYING, TOP_PROGRESS, TOP_RATE_CHANGE, TOP_SEEKED, TOP_SEEKING, TOP_STALLED, TOP_SUSPEND, TOP_TIME_UPDATE, TOP_VOLUME_CHANGE, TOP_WAITING];
      function getRawEventName(topLevelType) {
        return unsafeCastDOMTopLevelTypeToString(topLevelType);
      }
      var attemptSynchronousHydration;
      function setAttemptSynchronousHydration(fn) {
        attemptSynchronousHydration = fn;
      }
      var hasScheduledReplayAttempt = false;
      var queuedDiscreteEvents = [];
      var queuedFocus = null;
      var queuedDrag = null;
      var queuedMouse = null;
      var queuedPointers = new Map();
      var queuedPointerCaptures = new Map();
      function hasQueuedDiscreteEvents() {
        return queuedDiscreteEvents.length > 0;
      }
      var discreteReplayableEvents = [TOP_MOUSE_DOWN, TOP_MOUSE_UP, TOP_TOUCH_CANCEL, TOP_TOUCH_END, TOP_TOUCH_START, TOP_AUX_CLICK, TOP_DOUBLE_CLICK, TOP_POINTER_CANCEL, TOP_POINTER_DOWN, TOP_POINTER_UP, TOP_DRAG_END, TOP_DRAG_START, TOP_DROP, TOP_COMPOSITION_END, TOP_COMPOSITION_START, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_INPUT, TOP_TEXT_INPUT, TOP_CLOSE, TOP_CANCEL, TOP_COPY, TOP_CUT, TOP_PASTE, TOP_CLICK, TOP_CHANGE, TOP_CONTEXT_MENU, TOP_RESET, TOP_SUBMIT];
      var continuousReplayableEvents = [TOP_FOCUS, TOP_BLUR, TOP_DRAG_ENTER, TOP_DRAG_LEAVE, TOP_MOUSE_OVER, TOP_MOUSE_OUT, TOP_POINTER_OVER, TOP_POINTER_OUT, TOP_GOT_POINTER_CAPTURE, TOP_LOST_POINTER_CAPTURE];
      function isReplayableDiscreteEvent(eventType) {
        return discreteReplayableEvents.indexOf(eventType) > -1;
      }
      function trapReplayableEvent(topLevelType, document2, listeningSet) {
        listenToTopLevel(topLevelType, document2, listeningSet);
        if (enableFlareAPI) {
          var passiveEventKey = unsafeCastDOMTopLevelTypeToString(topLevelType) + "_passive";
          if (!listeningSet.has(passiveEventKey)) {
            trapEventForResponderEventSystem(document2, topLevelType, true);
            listeningSet.add(passiveEventKey);
          }
          var activeEventKey = unsafeCastDOMTopLevelTypeToString(topLevelType) + "_active";
          if (!listeningSet.has(activeEventKey)) {
            trapEventForResponderEventSystem(document2, topLevelType, false);
            listeningSet.add(activeEventKey);
          }
        }
      }
      function eagerlyTrapReplayableEvents(document2) {
        var listeningSet = getListeningSetForElement(document2);
        discreteReplayableEvents.forEach(function(topLevelType) {
          trapReplayableEvent(topLevelType, document2, listeningSet);
        });
        continuousReplayableEvents.forEach(function(topLevelType) {
          trapReplayableEvent(topLevelType, document2, listeningSet);
        });
      }
      function createQueuedReplayableEvent(blockedOn, topLevelType, eventSystemFlags, nativeEvent) {
        return {
          blockedOn,
          topLevelType,
          eventSystemFlags: eventSystemFlags | IS_REPLAYED,
          nativeEvent
        };
      }
      function queueDiscreteEvent(blockedOn, topLevelType, eventSystemFlags, nativeEvent) {
        var queuedEvent = createQueuedReplayableEvent(blockedOn, topLevelType, eventSystemFlags, nativeEvent);
        queuedDiscreteEvents.push(queuedEvent);
        if (enableSelectiveHydration) {
          if (queuedDiscreteEvents.length === 1) {
            while (queuedEvent.blockedOn !== null) {
              var _fiber = getInstanceFromNode$1(queuedEvent.blockedOn);
              if (_fiber === null) {
                break;
              }
              attemptSynchronousHydration(_fiber);
              if (queuedEvent.blockedOn === null) {
                replayUnblockedEvents();
                continue;
              } else {
                break;
              }
            }
          }
        }
      }
      function clearIfContinuousEvent(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_FOCUS:
          case TOP_BLUR:
            queuedFocus = null;
            break;
          case TOP_DRAG_ENTER:
          case TOP_DRAG_LEAVE:
            queuedDrag = null;
            break;
          case TOP_MOUSE_OVER:
          case TOP_MOUSE_OUT:
            queuedMouse = null;
            break;
          case TOP_POINTER_OVER:
          case TOP_POINTER_OUT: {
            var pointerId = nativeEvent.pointerId;
            queuedPointers.delete(pointerId);
            break;
          }
          case TOP_GOT_POINTER_CAPTURE:
          case TOP_LOST_POINTER_CAPTURE: {
            var _pointerId = nativeEvent.pointerId;
            queuedPointerCaptures.delete(_pointerId);
            break;
          }
        }
      }
      function accumulateOrCreateQueuedReplayableEvent(existingQueuedEvent, blockedOn, topLevelType, eventSystemFlags, nativeEvent) {
        if (existingQueuedEvent === null || existingQueuedEvent.nativeEvent !== nativeEvent) {
          return createQueuedReplayableEvent(blockedOn, topLevelType, eventSystemFlags, nativeEvent);
        }
        existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
        return existingQueuedEvent;
      }
      function queueIfContinuousEvent(blockedOn, topLevelType, eventSystemFlags, nativeEvent) {
        switch (topLevelType) {
          case TOP_FOCUS: {
            var focusEvent = nativeEvent;
            queuedFocus = accumulateOrCreateQueuedReplayableEvent(queuedFocus, blockedOn, topLevelType, eventSystemFlags, focusEvent);
            return true;
          }
          case TOP_DRAG_ENTER: {
            var dragEvent = nativeEvent;
            queuedDrag = accumulateOrCreateQueuedReplayableEvent(queuedDrag, blockedOn, topLevelType, eventSystemFlags, dragEvent);
            return true;
          }
          case TOP_MOUSE_OVER: {
            var mouseEvent = nativeEvent;
            queuedMouse = accumulateOrCreateQueuedReplayableEvent(queuedMouse, blockedOn, topLevelType, eventSystemFlags, mouseEvent);
            return true;
          }
          case TOP_POINTER_OVER: {
            var pointerEvent = nativeEvent;
            var pointerId = pointerEvent.pointerId;
            queuedPointers.set(pointerId, accumulateOrCreateQueuedReplayableEvent(queuedPointers.get(pointerId) || null, blockedOn, topLevelType, eventSystemFlags, pointerEvent));
            return true;
          }
          case TOP_GOT_POINTER_CAPTURE: {
            var _pointerEvent = nativeEvent;
            var _pointerId2 = _pointerEvent.pointerId;
            queuedPointerCaptures.set(_pointerId2, accumulateOrCreateQueuedReplayableEvent(queuedPointerCaptures.get(_pointerId2) || null, blockedOn, topLevelType, eventSystemFlags, _pointerEvent));
            return true;
          }
        }
        return false;
      }
      function attemptReplayQueuedEvent(queuedEvent) {
        if (queuedEvent.blockedOn !== null) {
          return false;
        }
        var nextBlockedOn = attemptToDispatchEvent(queuedEvent.topLevelType, queuedEvent.eventSystemFlags, queuedEvent.nativeEvent);
        if (nextBlockedOn !== null) {
          queuedEvent.blockedOn = nextBlockedOn;
          return false;
        }
        return true;
      }
      function attemptReplayQueuedEventInMap(queuedEvent, key, map) {
        if (attemptReplayQueuedEvent(queuedEvent)) {
          map.delete(key);
        }
      }
      function replayUnblockedEvents() {
        hasScheduledReplayAttempt = false;
        while (queuedDiscreteEvents.length > 0) {
          var nextDiscreteEvent = queuedDiscreteEvents[0];
          if (nextDiscreteEvent.blockedOn !== null) {
            break;
          }
          var nextBlockedOn = attemptToDispatchEvent(nextDiscreteEvent.topLevelType, nextDiscreteEvent.eventSystemFlags, nextDiscreteEvent.nativeEvent);
          if (nextBlockedOn !== null) {
            nextDiscreteEvent.blockedOn = nextBlockedOn;
          } else {
            queuedDiscreteEvents.shift();
          }
        }
        if (queuedFocus !== null && attemptReplayQueuedEvent(queuedFocus)) {
          queuedFocus = null;
        }
        if (queuedDrag !== null && attemptReplayQueuedEvent(queuedDrag)) {
          queuedDrag = null;
        }
        if (queuedMouse !== null && attemptReplayQueuedEvent(queuedMouse)) {
          queuedMouse = null;
        }
        queuedPointers.forEach(attemptReplayQueuedEventInMap);
        queuedPointerCaptures.forEach(attemptReplayQueuedEventInMap);
      }
      function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
        if (queuedEvent.blockedOn === unblocked) {
          queuedEvent.blockedOn = null;
          if (!hasScheduledReplayAttempt) {
            hasScheduledReplayAttempt = true;
            Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents);
          }
        }
      }
      function retryIfBlockedOn(unblocked) {
        if (queuedDiscreteEvents.length > 0) {
          scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked);
          for (var i2 = 1; i2 < queuedDiscreteEvents.length; i2++) {
            var queuedEvent = queuedDiscreteEvents[i2];
            if (queuedEvent.blockedOn === unblocked) {
              queuedEvent.blockedOn = null;
            }
          }
        }
        if (queuedFocus !== null) {
          scheduleCallbackIfUnblocked(queuedFocus, unblocked);
        }
        if (queuedDrag !== null) {
          scheduleCallbackIfUnblocked(queuedDrag, unblocked);
        }
        if (queuedMouse !== null) {
          scheduleCallbackIfUnblocked(queuedMouse, unblocked);
        }
        var unblock = function(queuedEvent2) {
          return scheduleCallbackIfUnblocked(queuedEvent2, unblocked);
        };
        queuedPointers.forEach(unblock);
        queuedPointerCaptures.forEach(unblock);
      }
      function get(key) {
        return key._reactInternalFiber;
      }
      function has(key) {
        return key._reactInternalFiber !== void 0;
      }
      function set(key, value) {
        key._reactInternalFiber = value;
      }
      var NoEffect = 0;
      var PerformedWork = 1;
      var Placement = 2;
      var Update = 4;
      var PlacementAndUpdate = 6;
      var Deletion = 8;
      var ContentReset = 16;
      var Callback = 32;
      var DidCapture = 64;
      var Ref = 128;
      var Snapshot = 256;
      var Passive = 512;
      var Hydrating = 1024;
      var HydratingAndUpdate = 1028;
      var LifecycleEffectMask = 932;
      var HostEffectMask = 2047;
      var Incomplete = 2048;
      var ShouldCapture = 4096;
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      function getNearestMountedFiber(fiber) {
        var node = fiber;
        var nearestMounted = fiber;
        if (!fiber.alternate) {
          var nextNode = node;
          do {
            node = nextNode;
            if ((node.effectTag & (Placement | Hydrating)) !== NoEffect) {
              nearestMounted = node.return;
            }
            nextNode = node.return;
          } while (nextNode);
        } else {
          while (node.return) {
            node = node.return;
          }
        }
        if (node.tag === HostRoot) {
          return nearestMounted;
        }
        return null;
      }
      function getSuspenseInstanceFromFiber(fiber) {
        if (fiber.tag === SuspenseComponent) {
          var suspenseState = fiber.memoizedState;
          if (suspenseState === null) {
            var current2 = fiber.alternate;
            if (current2 !== null) {
              suspenseState = current2.memoizedState;
            }
          }
          if (suspenseState !== null) {
            return suspenseState.dehydrated;
          }
        }
        return null;
      }
      function getContainerFromFiber(fiber) {
        return fiber.tag === HostRoot ? fiber.stateNode.containerInfo : null;
      }
      function isFiberMounted(fiber) {
        return getNearestMountedFiber(fiber) === fiber;
      }
      function isMounted(component) {
        {
          var owner = ReactCurrentOwner$1.current;
          if (owner !== null && owner.tag === ClassComponent) {
            var ownerFiber = owner;
            var instance = ownerFiber.stateNode;
            !instance._warnedAboutRefsInRender ? warningWithoutStack$1(false, "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", getComponentName(ownerFiber.type) || "A component") : void 0;
            instance._warnedAboutRefsInRender = true;
          }
        }
        var fiber = get(component);
        if (!fiber) {
          return false;
        }
        return getNearestMountedFiber(fiber) === fiber;
      }
      function assertIsMounted(fiber) {
        (function() {
          if (!(getNearestMountedFiber(fiber) === fiber)) {
            {
              throw ReactError(Error("Unable to find node on an unmounted component."));
            }
          }
        })();
      }
      function findCurrentFiberUsingSlowPath(fiber) {
        var alternate = fiber.alternate;
        if (!alternate) {
          var nearestMounted = getNearestMountedFiber(fiber);
          (function() {
            if (!(nearestMounted !== null)) {
              {
                throw ReactError(Error("Unable to find node on an unmounted component."));
              }
            }
          })();
          if (nearestMounted !== fiber) {
            return null;
          }
          return fiber;
        }
        var a = fiber;
        var b = alternate;
        while (true) {
          var parentA = a.return;
          if (parentA === null) {
            break;
          }
          var parentB = parentA.alternate;
          if (parentB === null) {
            var nextParent = parentA.return;
            if (nextParent !== null) {
              a = b = nextParent;
              continue;
            }
            break;
          }
          if (parentA.child === parentB.child) {
            var child = parentA.child;
            while (child) {
              if (child === a) {
                assertIsMounted(parentA);
                return fiber;
              }
              if (child === b) {
                assertIsMounted(parentA);
                return alternate;
              }
              child = child.sibling;
            }
            (function() {
              {
                {
                  throw ReactError(Error("Unable to find node on an unmounted component."));
                }
              }
            })();
          }
          if (a.return !== b.return) {
            a = parentA;
            b = parentB;
          } else {
            var didFindChild = false;
            var _child = parentA.child;
            while (_child) {
              if (_child === a) {
                didFindChild = true;
                a = parentA;
                b = parentB;
                break;
              }
              if (_child === b) {
                didFindChild = true;
                b = parentA;
                a = parentB;
                break;
              }
              _child = _child.sibling;
            }
            if (!didFindChild) {
              _child = parentB.child;
              while (_child) {
                if (_child === a) {
                  didFindChild = true;
                  a = parentB;
                  b = parentA;
                  break;
                }
                if (_child === b) {
                  didFindChild = true;
                  b = parentB;
                  a = parentA;
                  break;
                }
                _child = _child.sibling;
              }
              (function() {
                if (!didFindChild) {
                  {
                    throw ReactError(Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."));
                  }
                }
              })();
            }
          }
          (function() {
            if (!(a.alternate === b)) {
              {
                throw ReactError(Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
        }
        (function() {
          if (!(a.tag === HostRoot)) {
            {
              throw ReactError(Error("Unable to find node on an unmounted component."));
            }
          }
        })();
        if (a.stateNode.current === a) {
          return fiber;
        }
        return alternate;
      }
      function findCurrentHostFiber(parent) {
        var currentParent = findCurrentFiberUsingSlowPath(parent);
        if (!currentParent) {
          return null;
        }
        var node = currentParent;
        while (true) {
          if (node.tag === HostComponent || node.tag === HostText) {
            return node;
          } else if (node.child) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === currentParent) {
            return null;
          }
          while (!node.sibling) {
            if (!node.return || node.return === currentParent) {
              return null;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
        return null;
      }
      function findCurrentHostFiberWithNoPortals(parent) {
        var currentParent = findCurrentFiberUsingSlowPath(parent);
        if (!currentParent) {
          return null;
        }
        var node = currentParent;
        while (true) {
          if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI && node.tag === FundamentalComponent) {
            return node;
          } else if (node.child && node.tag !== HostPortal) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === currentParent) {
            return null;
          }
          while (!node.sibling) {
            if (!node.return || node.return === currentParent) {
              return null;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
        return null;
      }
      function addEventBubbleListener(element, eventType, listener) {
        element.addEventListener(eventType, listener, false);
      }
      function addEventCaptureListener(element, eventType, listener) {
        element.addEventListener(eventType, listener, true);
      }
      function addEventCaptureListenerWithPassiveFlag(element, eventType, listener, passive) {
        element.addEventListener(eventType, listener, {
          capture: true,
          passive
        });
      }
      function getEventTarget(nativeEvent) {
        var target = nativeEvent.target || nativeEvent.srcElement || window;
        if (target.correspondingUseElement) {
          target = target.correspondingUseElement;
        }
        return target.nodeType === TEXT_NODE ? target.parentNode : target;
      }
      function getParent(inst) {
        do {
          inst = inst.return;
        } while (inst && inst.tag !== HostComponent);
        if (inst) {
          return inst;
        }
        return null;
      }
      function getLowestCommonAncestor(instA, instB) {
        var depthA = 0;
        for (var tempA = instA; tempA; tempA = getParent(tempA)) {
          depthA++;
        }
        var depthB = 0;
        for (var tempB = instB; tempB; tempB = getParent(tempB)) {
          depthB++;
        }
        while (depthA - depthB > 0) {
          instA = getParent(instA);
          depthA--;
        }
        while (depthB - depthA > 0) {
          instB = getParent(instB);
          depthB--;
        }
        var depth = depthA;
        while (depth--) {
          if (instA === instB || instA === instB.alternate) {
            return instA;
          }
          instA = getParent(instA);
          instB = getParent(instB);
        }
        return null;
      }
      function traverseTwoPhase(inst, fn, arg) {
        var path = [];
        while (inst) {
          path.push(inst);
          inst = getParent(inst);
        }
        var i2;
        for (i2 = path.length; i2-- > 0; ) {
          fn(path[i2], "captured", arg);
        }
        for (i2 = 0; i2 < path.length; i2++) {
          fn(path[i2], "bubbled", arg);
        }
      }
      function traverseEnterLeave(from, to, fn, argFrom, argTo) {
        var common = from && to ? getLowestCommonAncestor(from, to) : null;
        var pathFrom = [];
        while (true) {
          if (!from) {
            break;
          }
          if (from === common) {
            break;
          }
          var alternate = from.alternate;
          if (alternate !== null && alternate === common) {
            break;
          }
          pathFrom.push(from);
          from = getParent(from);
        }
        var pathTo = [];
        while (true) {
          if (!to) {
            break;
          }
          if (to === common) {
            break;
          }
          var _alternate = to.alternate;
          if (_alternate !== null && _alternate === common) {
            break;
          }
          pathTo.push(to);
          to = getParent(to);
        }
        for (var i2 = 0; i2 < pathFrom.length; i2++) {
          fn(pathFrom[i2], "bubbled", argFrom);
        }
        for (var _i = pathTo.length; _i-- > 0; ) {
          fn(pathTo[_i], "captured", argTo);
        }
      }
      function listenerAtPhase(inst, event2, propagationPhase) {
        var registrationName = event2.dispatchConfig.phasedRegistrationNames[propagationPhase];
        return getListener(inst, registrationName);
      }
      function accumulateDirectionalDispatches(inst, phase2, event2) {
        {
          !inst ? warningWithoutStack$1(false, "Dispatching inst must not be null") : void 0;
        }
        var listener = listenerAtPhase(inst, event2, phase2);
        if (listener) {
          event2._dispatchListeners = accumulateInto(event2._dispatchListeners, listener);
          event2._dispatchInstances = accumulateInto(event2._dispatchInstances, inst);
        }
      }
      function accumulateTwoPhaseDispatchesSingle(event2) {
        if (event2 && event2.dispatchConfig.phasedRegistrationNames) {
          traverseTwoPhase(event2._targetInst, accumulateDirectionalDispatches, event2);
        }
      }
      function accumulateDispatches(inst, ignoredDirection, event2) {
        if (inst && event2 && event2.dispatchConfig.registrationName) {
          var registrationName = event2.dispatchConfig.registrationName;
          var listener = getListener(inst, registrationName);
          if (listener) {
            event2._dispatchListeners = accumulateInto(event2._dispatchListeners, listener);
            event2._dispatchInstances = accumulateInto(event2._dispatchInstances, inst);
          }
        }
      }
      function accumulateDirectDispatchesSingle(event2) {
        if (event2 && event2.dispatchConfig.registrationName) {
          accumulateDispatches(event2._targetInst, null, event2);
        }
      }
      function accumulateTwoPhaseDispatches(events) {
        forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
      }
      function accumulateEnterLeaveDispatches(leave, enter, from, to) {
        traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
      }
      function accumulateDirectDispatches(events) {
        forEachAccumulated(events, accumulateDirectDispatchesSingle);
      }
      var EVENT_POOL_SIZE = 10;
      var EventInterface = {
        type: null,
        target: null,
        currentTarget: function() {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(event2) {
          return event2.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null
      };
      function functionThatReturnsTrue() {
        return true;
      }
      function functionThatReturnsFalse() {
        return false;
      }
      function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
        {
          delete this.nativeEvent;
          delete this.preventDefault;
          delete this.stopPropagation;
          delete this.isDefaultPrevented;
          delete this.isPropagationStopped;
        }
        this.dispatchConfig = dispatchConfig;
        this._targetInst = targetInst;
        this.nativeEvent = nativeEvent;
        var Interface = this.constructor.Interface;
        for (var propName in Interface) {
          if (!Interface.hasOwnProperty(propName)) {
            continue;
          }
          {
            delete this[propName];
          }
          var normalize = Interface[propName];
          if (normalize) {
            this[propName] = normalize(nativeEvent);
          } else {
            if (propName === "target") {
              this.target = nativeEventTarget;
            } else {
              this[propName] = nativeEvent[propName];
            }
          }
        }
        var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
        if (defaultPrevented) {
          this.isDefaultPrevented = functionThatReturnsTrue;
        } else {
          this.isDefaultPrevented = functionThatReturnsFalse;
        }
        this.isPropagationStopped = functionThatReturnsFalse;
        return this;
      }
      _assign(SyntheticEvent.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var event2 = this.nativeEvent;
          if (!event2) {
            return;
          }
          if (event2.preventDefault) {
            event2.preventDefault();
          } else if (typeof event2.returnValue !== "unknown") {
            event2.returnValue = false;
          }
          this.isDefaultPrevented = functionThatReturnsTrue;
        },
        stopPropagation: function() {
          var event2 = this.nativeEvent;
          if (!event2) {
            return;
          }
          if (event2.stopPropagation) {
            event2.stopPropagation();
          } else if (typeof event2.cancelBubble !== "unknown") {
            event2.cancelBubble = true;
          }
          this.isPropagationStopped = functionThatReturnsTrue;
        },
        persist: function() {
          this.isPersistent = functionThatReturnsTrue;
        },
        isPersistent: functionThatReturnsFalse,
        destructor: function() {
          var Interface = this.constructor.Interface;
          for (var propName in Interface) {
            {
              Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
            }
          }
          this.dispatchConfig = null;
          this._targetInst = null;
          this.nativeEvent = null;
          this.isDefaultPrevented = functionThatReturnsFalse;
          this.isPropagationStopped = functionThatReturnsFalse;
          this._dispatchListeners = null;
          this._dispatchInstances = null;
          {
            Object.defineProperty(this, "nativeEvent", getPooledWarningPropertyDefinition("nativeEvent", null));
            Object.defineProperty(this, "isDefaultPrevented", getPooledWarningPropertyDefinition("isDefaultPrevented", functionThatReturnsFalse));
            Object.defineProperty(this, "isPropagationStopped", getPooledWarningPropertyDefinition("isPropagationStopped", functionThatReturnsFalse));
            Object.defineProperty(this, "preventDefault", getPooledWarningPropertyDefinition("preventDefault", function() {
            }));
            Object.defineProperty(this, "stopPropagation", getPooledWarningPropertyDefinition("stopPropagation", function() {
            }));
          }
        }
      });
      SyntheticEvent.Interface = EventInterface;
      SyntheticEvent.extend = function(Interface) {
        var Super = this;
        var E = function() {
        };
        E.prototype = Super.prototype;
        var prototype = new E();
        function Class() {
          return Super.apply(this, arguments);
        }
        _assign(prototype, Class.prototype);
        Class.prototype = prototype;
        Class.prototype.constructor = Class;
        Class.Interface = _assign({}, Super.Interface, Interface);
        Class.extend = Super.extend;
        addEventPoolingTo(Class);
        return Class;
      };
      addEventPoolingTo(SyntheticEvent);
      function getPooledWarningPropertyDefinition(propName, getVal) {
        var isFunction = typeof getVal === "function";
        return {
          configurable: true,
          set: set2,
          get: get2
        };
        function set2(val) {
          var action3 = isFunction ? "setting the method" : "setting the property";
          warn(action3, "This is effectively a no-op");
          return val;
        }
        function get2() {
          var action3 = isFunction ? "accessing the method" : "accessing the property";
          var result2 = isFunction ? "This is a no-op function" : "This is set to null";
          warn(action3, result2);
          return getVal;
        }
        function warn(action3, result2) {
          var warningCondition = false;
          !warningCondition ? warningWithoutStack$1(false, "This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.", action3, propName, result2) : void 0;
        }
      }
      function getPooledEvent(dispatchConfig, targetInst, nativeEvent, nativeInst) {
        var EventConstructor = this;
        if (EventConstructor.eventPool.length) {
          var instance = EventConstructor.eventPool.pop();
          EventConstructor.call(instance, dispatchConfig, targetInst, nativeEvent, nativeInst);
          return instance;
        }
        return new EventConstructor(dispatchConfig, targetInst, nativeEvent, nativeInst);
      }
      function releasePooledEvent(event2) {
        var EventConstructor = this;
        (function() {
          if (!(event2 instanceof EventConstructor)) {
            {
              throw ReactError(Error("Trying to release an event instance into a pool of a different type."));
            }
          }
        })();
        event2.destructor();
        if (EventConstructor.eventPool.length < EVENT_POOL_SIZE) {
          EventConstructor.eventPool.push(event2);
        }
      }
      function addEventPoolingTo(EventConstructor) {
        EventConstructor.eventPool = [];
        EventConstructor.getPooled = getPooledEvent;
        EventConstructor.release = releasePooledEvent;
      }
      var SyntheticAnimationEvent = SyntheticEvent.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
      });
      var SyntheticClipboardEvent = SyntheticEvent.extend({
        clipboardData: function(event2) {
          return "clipboardData" in event2 ? event2.clipboardData : window.clipboardData;
        }
      });
      var SyntheticUIEvent = SyntheticEvent.extend({
        view: null,
        detail: null
      });
      var SyntheticFocusEvent = SyntheticUIEvent.extend({
        relatedTarget: null
      });
      function getEventCharCode(nativeEvent) {
        var charCode;
        var keyCode = nativeEvent.keyCode;
        if ("charCode" in nativeEvent) {
          charCode = nativeEvent.charCode;
          if (charCode === 0 && keyCode === 13) {
            charCode = 13;
          }
        } else {
          charCode = keyCode;
        }
        if (charCode === 10) {
          charCode = 13;
        }
        if (charCode >= 32 || charCode === 13) {
          return charCode;
        }
        return 0;
      }
      var normalizeKey = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var translateToKey = {
        "8": "Backspace",
        "9": "Tab",
        "12": "Clear",
        "13": "Enter",
        "16": "Shift",
        "17": "Control",
        "18": "Alt",
        "19": "Pause",
        "20": "CapsLock",
        "27": "Escape",
        "32": " ",
        "33": "PageUp",
        "34": "PageDown",
        "35": "End",
        "36": "Home",
        "37": "ArrowLeft",
        "38": "ArrowUp",
        "39": "ArrowRight",
        "40": "ArrowDown",
        "45": "Insert",
        "46": "Delete",
        "112": "F1",
        "113": "F2",
        "114": "F3",
        "115": "F4",
        "116": "F5",
        "117": "F6",
        "118": "F7",
        "119": "F8",
        "120": "F9",
        "121": "F10",
        "122": "F11",
        "123": "F12",
        "144": "NumLock",
        "145": "ScrollLock",
        "224": "Meta"
      };
      function getEventKey(nativeEvent) {
        if (nativeEvent.key) {
          var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
          if (key !== "Unidentified") {
            return key;
          }
        }
        if (nativeEvent.type === "keypress") {
          var charCode = getEventCharCode(nativeEvent);
          return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
        }
        if (nativeEvent.type === "keydown" || nativeEvent.type === "keyup") {
          return translateToKey[nativeEvent.keyCode] || "Unidentified";
        }
        return "";
      }
      var modifierKeyToProp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function modifierStateGetter(keyArg) {
        var syntheticEvent = this;
        var nativeEvent = syntheticEvent.nativeEvent;
        if (nativeEvent.getModifierState) {
          return nativeEvent.getModifierState(keyArg);
        }
        var keyProp = modifierKeyToProp[keyArg];
        return keyProp ? !!nativeEvent[keyProp] : false;
      }
      function getEventModifierState(nativeEvent) {
        return modifierStateGetter;
      }
      var SyntheticKeyboardEvent = SyntheticUIEvent.extend({
        key: getEventKey,
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: getEventModifierState,
        charCode: function(event2) {
          if (event2.type === "keypress") {
            return getEventCharCode(event2);
          }
          return 0;
        },
        keyCode: function(event2) {
          if (event2.type === "keydown" || event2.type === "keyup") {
            return event2.keyCode;
          }
          return 0;
        },
        which: function(event2) {
          if (event2.type === "keypress") {
            return getEventCharCode(event2);
          }
          if (event2.type === "keydown" || event2.type === "keyup") {
            return event2.keyCode;
          }
          return 0;
        }
      });
      var previousScreenX = 0;
      var previousScreenY = 0;
      var isMovementXSet = false;
      var isMovementYSet = false;
      var SyntheticMouseEvent = SyntheticUIEvent.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: getEventModifierState,
        button: null,
        buttons: null,
        relatedTarget: function(event2) {
          return event2.relatedTarget || (event2.fromElement === event2.srcElement ? event2.toElement : event2.fromElement);
        },
        movementX: function(event2) {
          if ("movementX" in event2) {
            return event2.movementX;
          }
          var screenX = previousScreenX;
          previousScreenX = event2.screenX;
          if (!isMovementXSet) {
            isMovementXSet = true;
            return 0;
          }
          return event2.type === "mousemove" ? event2.screenX - screenX : 0;
        },
        movementY: function(event2) {
          if ("movementY" in event2) {
            return event2.movementY;
          }
          var screenY = previousScreenY;
          previousScreenY = event2.screenY;
          if (!isMovementYSet) {
            isMovementYSet = true;
            return 0;
          }
          return event2.type === "mousemove" ? event2.screenY - screenY : 0;
        }
      });
      var SyntheticPointerEvent = SyntheticMouseEvent.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
      });
      var SyntheticDragEvent = SyntheticMouseEvent.extend({
        dataTransfer: null
      });
      var SyntheticTouchEvent = SyntheticUIEvent.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: getEventModifierState
      });
      var SyntheticTransitionEvent = SyntheticEvent.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
      });
      var SyntheticWheelEvent = SyntheticMouseEvent.extend({
        deltaX: function(event2) {
          return "deltaX" in event2 ? event2.deltaX : "wheelDeltaX" in event2 ? -event2.wheelDeltaX : 0;
        },
        deltaY: function(event2) {
          return "deltaY" in event2 ? event2.deltaY : "wheelDeltaY" in event2 ? -event2.wheelDeltaY : "wheelDelta" in event2 ? -event2.wheelDelta : 0;
        },
        deltaZ: null,
        deltaMode: null
      });
      var eventTuples = [
        [TOP_BLUR, "blur", DiscreteEvent],
        [TOP_CANCEL, "cancel", DiscreteEvent],
        [TOP_CLICK, "click", DiscreteEvent],
        [TOP_CLOSE, "close", DiscreteEvent],
        [TOP_CONTEXT_MENU, "contextMenu", DiscreteEvent],
        [TOP_COPY, "copy", DiscreteEvent],
        [TOP_CUT, "cut", DiscreteEvent],
        [TOP_AUX_CLICK, "auxClick", DiscreteEvent],
        [TOP_DOUBLE_CLICK, "doubleClick", DiscreteEvent],
        [TOP_DRAG_END, "dragEnd", DiscreteEvent],
        [TOP_DRAG_START, "dragStart", DiscreteEvent],
        [TOP_DROP, "drop", DiscreteEvent],
        [TOP_FOCUS, "focus", DiscreteEvent],
        [TOP_INPUT, "input", DiscreteEvent],
        [TOP_INVALID, "invalid", DiscreteEvent],
        [TOP_KEY_DOWN, "keyDown", DiscreteEvent],
        [TOP_KEY_PRESS, "keyPress", DiscreteEvent],
        [TOP_KEY_UP, "keyUp", DiscreteEvent],
        [TOP_MOUSE_DOWN, "mouseDown", DiscreteEvent],
        [TOP_MOUSE_UP, "mouseUp", DiscreteEvent],
        [TOP_PASTE, "paste", DiscreteEvent],
        [TOP_PAUSE, "pause", DiscreteEvent],
        [TOP_PLAY, "play", DiscreteEvent],
        [TOP_POINTER_CANCEL, "pointerCancel", DiscreteEvent],
        [TOP_POINTER_DOWN, "pointerDown", DiscreteEvent],
        [TOP_POINTER_UP, "pointerUp", DiscreteEvent],
        [TOP_RATE_CHANGE, "rateChange", DiscreteEvent],
        [TOP_RESET, "reset", DiscreteEvent],
        [TOP_SEEKED, "seeked", DiscreteEvent],
        [TOP_SUBMIT, "submit", DiscreteEvent],
        [TOP_TOUCH_CANCEL, "touchCancel", DiscreteEvent],
        [TOP_TOUCH_END, "touchEnd", DiscreteEvent],
        [TOP_TOUCH_START, "touchStart", DiscreteEvent],
        [TOP_VOLUME_CHANGE, "volumeChange", DiscreteEvent],
        [TOP_DRAG, "drag", UserBlockingEvent],
        [TOP_DRAG_ENTER, "dragEnter", UserBlockingEvent],
        [TOP_DRAG_EXIT, "dragExit", UserBlockingEvent],
        [TOP_DRAG_LEAVE, "dragLeave", UserBlockingEvent],
        [TOP_DRAG_OVER, "dragOver", UserBlockingEvent],
        [TOP_MOUSE_MOVE, "mouseMove", UserBlockingEvent],
        [TOP_MOUSE_OUT, "mouseOut", UserBlockingEvent],
        [TOP_MOUSE_OVER, "mouseOver", UserBlockingEvent],
        [TOP_POINTER_MOVE, "pointerMove", UserBlockingEvent],
        [TOP_POINTER_OUT, "pointerOut", UserBlockingEvent],
        [TOP_POINTER_OVER, "pointerOver", UserBlockingEvent],
        [TOP_SCROLL, "scroll", UserBlockingEvent],
        [TOP_TOGGLE, "toggle", UserBlockingEvent],
        [TOP_TOUCH_MOVE, "touchMove", UserBlockingEvent],
        [TOP_WHEEL, "wheel", UserBlockingEvent],
        [TOP_ABORT, "abort", ContinuousEvent],
        [TOP_ANIMATION_END, "animationEnd", ContinuousEvent],
        [TOP_ANIMATION_ITERATION, "animationIteration", ContinuousEvent],
        [TOP_ANIMATION_START, "animationStart", ContinuousEvent],
        [TOP_CAN_PLAY, "canPlay", ContinuousEvent],
        [TOP_CAN_PLAY_THROUGH, "canPlayThrough", ContinuousEvent],
        [TOP_DURATION_CHANGE, "durationChange", ContinuousEvent],
        [TOP_EMPTIED, "emptied", ContinuousEvent],
        [TOP_ENCRYPTED, "encrypted", ContinuousEvent],
        [TOP_ENDED, "ended", ContinuousEvent],
        [TOP_ERROR, "error", ContinuousEvent],
        [TOP_GOT_POINTER_CAPTURE, "gotPointerCapture", ContinuousEvent],
        [TOP_LOAD, "load", ContinuousEvent],
        [TOP_LOADED_DATA, "loadedData", ContinuousEvent],
        [TOP_LOADED_METADATA, "loadedMetadata", ContinuousEvent],
        [TOP_LOAD_START, "loadStart", ContinuousEvent],
        [TOP_LOST_POINTER_CAPTURE, "lostPointerCapture", ContinuousEvent],
        [TOP_PLAYING, "playing", ContinuousEvent],
        [TOP_PROGRESS, "progress", ContinuousEvent],
        [TOP_SEEKING, "seeking", ContinuousEvent],
        [TOP_STALLED, "stalled", ContinuousEvent],
        [TOP_SUSPEND, "suspend", ContinuousEvent],
        [TOP_TIME_UPDATE, "timeUpdate", ContinuousEvent],
        [TOP_TRANSITION_END, "transitionEnd", ContinuousEvent],
        [TOP_WAITING, "waiting", ContinuousEvent]
      ];
      var eventTypes = {};
      var topLevelEventsToDispatchConfig = {};
      for (var i = 0; i < eventTuples.length; i++) {
        var eventTuple = eventTuples[i];
        var topEvent = eventTuple[0];
        var event = eventTuple[1];
        var eventPriority = eventTuple[2];
        var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
        var onEvent = "on" + capitalizedEvent;
        var config = {
          phasedRegistrationNames: {
            bubbled: onEvent,
            captured: onEvent + "Capture"
          },
          dependencies: [topEvent],
          eventPriority
        };
        eventTypes[event] = config;
        topLevelEventsToDispatchConfig[topEvent] = config;
      }
      var knownHTMLTopLevelTypes = [TOP_ABORT, TOP_CANCEL, TOP_CAN_PLAY, TOP_CAN_PLAY_THROUGH, TOP_CLOSE, TOP_DURATION_CHANGE, TOP_EMPTIED, TOP_ENCRYPTED, TOP_ENDED, TOP_ERROR, TOP_INPUT, TOP_INVALID, TOP_LOAD, TOP_LOADED_DATA, TOP_LOADED_METADATA, TOP_LOAD_START, TOP_PAUSE, TOP_PLAY, TOP_PLAYING, TOP_PROGRESS, TOP_RATE_CHANGE, TOP_RESET, TOP_SEEKED, TOP_SEEKING, TOP_STALLED, TOP_SUBMIT, TOP_SUSPEND, TOP_TIME_UPDATE, TOP_TOGGLE, TOP_VOLUME_CHANGE, TOP_WAITING];
      var SimpleEventPlugin = {
        eventTypes,
        getEventPriority: function(topLevelType) {
          var config2 = topLevelEventsToDispatchConfig[topLevelType];
          return config2 !== void 0 ? config2.eventPriority : ContinuousEvent;
        },
        extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
          var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
          if (!dispatchConfig) {
            return null;
          }
          var EventConstructor;
          switch (topLevelType) {
            case TOP_KEY_PRESS:
              if (getEventCharCode(nativeEvent) === 0) {
                return null;
              }
            case TOP_KEY_DOWN:
            case TOP_KEY_UP:
              EventConstructor = SyntheticKeyboardEvent;
              break;
            case TOP_BLUR:
            case TOP_FOCUS:
              EventConstructor = SyntheticFocusEvent;
              break;
            case TOP_CLICK:
              if (nativeEvent.button === 2) {
                return null;
              }
            case TOP_AUX_CLICK:
            case TOP_DOUBLE_CLICK:
            case TOP_MOUSE_DOWN:
            case TOP_MOUSE_MOVE:
            case TOP_MOUSE_UP:
            case TOP_MOUSE_OUT:
            case TOP_MOUSE_OVER:
            case TOP_CONTEXT_MENU:
              EventConstructor = SyntheticMouseEvent;
              break;
            case TOP_DRAG:
            case TOP_DRAG_END:
            case TOP_DRAG_ENTER:
            case TOP_DRAG_EXIT:
            case TOP_DRAG_LEAVE:
            case TOP_DRAG_OVER:
            case TOP_DRAG_START:
            case TOP_DROP:
              EventConstructor = SyntheticDragEvent;
              break;
            case TOP_TOUCH_CANCEL:
            case TOP_TOUCH_END:
            case TOP_TOUCH_MOVE:
            case TOP_TOUCH_START:
              EventConstructor = SyntheticTouchEvent;
              break;
            case TOP_ANIMATION_END:
            case TOP_ANIMATION_ITERATION:
            case TOP_ANIMATION_START:
              EventConstructor = SyntheticAnimationEvent;
              break;
            case TOP_TRANSITION_END:
              EventConstructor = SyntheticTransitionEvent;
              break;
            case TOP_SCROLL:
              EventConstructor = SyntheticUIEvent;
              break;
            case TOP_WHEEL:
              EventConstructor = SyntheticWheelEvent;
              break;
            case TOP_COPY:
            case TOP_CUT:
            case TOP_PASTE:
              EventConstructor = SyntheticClipboardEvent;
              break;
            case TOP_GOT_POINTER_CAPTURE:
            case TOP_LOST_POINTER_CAPTURE:
            case TOP_POINTER_CANCEL:
            case TOP_POINTER_DOWN:
            case TOP_POINTER_MOVE:
            case TOP_POINTER_OUT:
            case TOP_POINTER_OVER:
            case TOP_POINTER_UP:
              EventConstructor = SyntheticPointerEvent;
              break;
            default:
              {
                if (knownHTMLTopLevelTypes.indexOf(topLevelType) === -1) {
                  warningWithoutStack$1(false, "SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.", topLevelType);
                }
              }
              EventConstructor = SyntheticEvent;
              break;
          }
          var event2 = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
          accumulateTwoPhaseDispatches(event2);
          return event2;
        }
      };
      var passiveBrowserEventsSupported = false;
      if (enableFlareAPI && canUseDOM) {
        try {
          var options = {};
          Object.defineProperty(options, "passive", {
            get: function() {
              passiveBrowserEventsSupported = true;
            }
          });
          window.addEventListener("test", options, options);
          window.removeEventListener("test", options, options);
        } catch (e) {
          passiveBrowserEventsSupported = false;
        }
      }
      var UserBlockingPriority$1 = Scheduler.unstable_UserBlockingPriority;
      var runWithPriority$1 = Scheduler.unstable_runWithPriority;
      var getEventPriority = SimpleEventPlugin.getEventPriority;
      var CALLBACK_BOOKKEEPING_POOL_SIZE = 10;
      var callbackBookkeepingPool = [];
      function findRootContainerNode(inst) {
        if (inst.tag === HostRoot) {
          return inst.stateNode.containerInfo;
        }
        while (inst.return) {
          inst = inst.return;
        }
        if (inst.tag !== HostRoot) {
          return null;
        }
        return inst.stateNode.containerInfo;
      }
      function getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst, eventSystemFlags) {
        if (callbackBookkeepingPool.length) {
          var instance = callbackBookkeepingPool.pop();
          instance.topLevelType = topLevelType;
          instance.eventSystemFlags = eventSystemFlags;
          instance.nativeEvent = nativeEvent;
          instance.targetInst = targetInst;
          return instance;
        }
        return {
          topLevelType,
          eventSystemFlags,
          nativeEvent,
          targetInst,
          ancestors: []
        };
      }
      function releaseTopLevelCallbackBookKeeping(instance) {
        instance.topLevelType = null;
        instance.nativeEvent = null;
        instance.targetInst = null;
        instance.ancestors.length = 0;
        if (callbackBookkeepingPool.length < CALLBACK_BOOKKEEPING_POOL_SIZE) {
          callbackBookkeepingPool.push(instance);
        }
      }
      function handleTopLevel(bookKeeping) {
        var targetInst = bookKeeping.targetInst;
        var ancestor = targetInst;
        do {
          if (!ancestor) {
            var ancestors = bookKeeping.ancestors;
            ancestors.push(ancestor);
            break;
          }
          var root2 = findRootContainerNode(ancestor);
          if (!root2) {
            break;
          }
          var tag = ancestor.tag;
          if (tag === HostComponent || tag === HostText) {
            bookKeeping.ancestors.push(ancestor);
          }
          ancestor = getClosestInstanceFromNode(root2);
        } while (ancestor);
        for (var i2 = 0; i2 < bookKeeping.ancestors.length; i2++) {
          targetInst = bookKeeping.ancestors[i2];
          var eventTarget = getEventTarget(bookKeeping.nativeEvent);
          var topLevelType = bookKeeping.topLevelType;
          var nativeEvent = bookKeeping.nativeEvent;
          runExtractedPluginEventsInBatch(topLevelType, targetInst, nativeEvent, eventTarget, bookKeeping.eventSystemFlags);
        }
      }
      var _enabled = true;
      function setEnabled(enabled) {
        _enabled = !!enabled;
      }
      function isEnabled() {
        return _enabled;
      }
      function trapBubbledEvent(topLevelType, element) {
        trapEventForPluginEventSystem(element, topLevelType, false);
      }
      function trapCapturedEvent(topLevelType, element) {
        trapEventForPluginEventSystem(element, topLevelType, true);
      }
      function trapEventForResponderEventSystem(element, topLevelType, passive) {
        if (enableFlareAPI) {
          var rawEventName = getRawEventName(topLevelType);
          var eventFlags = RESPONDER_EVENT_SYSTEM;
          if (passive) {
            if (passiveBrowserEventsSupported) {
              eventFlags |= IS_PASSIVE;
            } else {
              eventFlags |= IS_ACTIVE;
              eventFlags |= PASSIVE_NOT_SUPPORTED;
              passive = false;
            }
          } else {
            eventFlags |= IS_ACTIVE;
          }
          var listener = dispatchEvent.bind(null, topLevelType, eventFlags);
          if (passiveBrowserEventsSupported) {
            addEventCaptureListenerWithPassiveFlag(element, rawEventName, listener, passive);
          } else {
            addEventCaptureListener(element, rawEventName, listener);
          }
        }
      }
      function trapEventForPluginEventSystem(element, topLevelType, capture) {
        var listener;
        switch (getEventPriority(topLevelType)) {
          case DiscreteEvent:
            listener = dispatchDiscreteEvent.bind(null, topLevelType, PLUGIN_EVENT_SYSTEM);
            break;
          case UserBlockingEvent:
            listener = dispatchUserBlockingUpdate.bind(null, topLevelType, PLUGIN_EVENT_SYSTEM);
            break;
          case ContinuousEvent:
          default:
            listener = dispatchEvent.bind(null, topLevelType, PLUGIN_EVENT_SYSTEM);
            break;
        }
        var rawEventName = getRawEventName(topLevelType);
        if (capture) {
          addEventCaptureListener(element, rawEventName, listener);
        } else {
          addEventBubbleListener(element, rawEventName, listener);
        }
      }
      function dispatchDiscreteEvent(topLevelType, eventSystemFlags, nativeEvent) {
        flushDiscreteUpdatesIfNeeded(nativeEvent.timeStamp);
        discreteUpdates(dispatchEvent, topLevelType, eventSystemFlags, nativeEvent);
      }
      function dispatchUserBlockingUpdate(topLevelType, eventSystemFlags, nativeEvent) {
        if (enableUserBlockingEvents) {
          runWithPriority$1(UserBlockingPriority$1, dispatchEvent.bind(null, topLevelType, eventSystemFlags, nativeEvent));
        } else {
          dispatchEvent(topLevelType, eventSystemFlags, nativeEvent);
        }
      }
      function dispatchEventForPluginEventSystem(topLevelType, eventSystemFlags, nativeEvent, targetInst) {
        var bookKeeping = getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst, eventSystemFlags);
        try {
          batchedEventUpdates(handleTopLevel, bookKeeping);
        } finally {
          releaseTopLevelCallbackBookKeeping(bookKeeping);
        }
      }
      function dispatchEvent(topLevelType, eventSystemFlags, nativeEvent) {
        if (!_enabled) {
          return;
        }
        if (hasQueuedDiscreteEvents() && isReplayableDiscreteEvent(topLevelType)) {
          queueDiscreteEvent(null, topLevelType, eventSystemFlags, nativeEvent);
          return;
        }
        var blockedOn = attemptToDispatchEvent(topLevelType, eventSystemFlags, nativeEvent);
        if (blockedOn === null) {
          clearIfContinuousEvent(topLevelType, nativeEvent);
          return;
        }
        if (isReplayableDiscreteEvent(topLevelType)) {
          queueDiscreteEvent(blockedOn, topLevelType, eventSystemFlags, nativeEvent);
          return;
        }
        if (queueIfContinuousEvent(blockedOn, topLevelType, eventSystemFlags, nativeEvent)) {
          return;
        }
        clearIfContinuousEvent(topLevelType, nativeEvent);
        if (enableFlareAPI) {
          if (eventSystemFlags & PLUGIN_EVENT_SYSTEM) {
            dispatchEventForPluginEventSystem(topLevelType, eventSystemFlags, nativeEvent, null);
          }
          if (eventSystemFlags & RESPONDER_EVENT_SYSTEM) {
            dispatchEventForResponderEventSystem(topLevelType, null, nativeEvent, getEventTarget(nativeEvent), eventSystemFlags);
          }
        } else {
          dispatchEventForPluginEventSystem(topLevelType, eventSystemFlags, nativeEvent, null);
        }
      }
      function attemptToDispatchEvent(topLevelType, eventSystemFlags, nativeEvent) {
        var nativeEventTarget = getEventTarget(nativeEvent);
        var targetInst = getClosestInstanceFromNode(nativeEventTarget);
        if (targetInst !== null) {
          var nearestMounted = getNearestMountedFiber(targetInst);
          if (nearestMounted === null) {
            targetInst = null;
          } else {
            var tag = nearestMounted.tag;
            if (tag === SuspenseComponent) {
              var instance = getSuspenseInstanceFromFiber(nearestMounted);
              if (instance !== null) {
                return instance;
              }
              targetInst = null;
            } else if (tag === HostRoot) {
              var root2 = nearestMounted.stateNode;
              if (root2.hydrate) {
                return getContainerFromFiber(nearestMounted);
              }
              targetInst = null;
            } else if (nearestMounted !== targetInst) {
              targetInst = null;
            }
          }
        }
        if (enableFlareAPI) {
          if (eventSystemFlags & PLUGIN_EVENT_SYSTEM) {
            dispatchEventForPluginEventSystem(topLevelType, eventSystemFlags, nativeEvent, targetInst);
          }
          if (eventSystemFlags & RESPONDER_EVENT_SYSTEM) {
            dispatchEventForResponderEventSystem(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
          }
        } else {
          dispatchEventForPluginEventSystem(topLevelType, eventSystemFlags, nativeEvent, targetInst);
        }
        return null;
      }
      /**
       * Checks if an event is supported in the current execution environment.
       *
       * NOTE: This will not work correctly for non-generic events such as `change`,
       * `reset`, `load`, `error`, and `select`.
       *
       * Borrows from Modernizr.
       *
       * @param {string} eventNameSuffix Event name, e.g. "click".
       * @return {boolean} True if the event is supported.
       * @internal
       * @license Modernizr 3.0.0pre (Custom Build) | MIT
       */
      function isEventSupported(eventNameSuffix) {
        if (!canUseDOM) {
          return false;
        }
        var eventName = "on" + eventNameSuffix;
        var isSupported = eventName in document;
        if (!isSupported) {
          var element = document.createElement("div");
          element.setAttribute(eventName, "return;");
          isSupported = typeof element[eventName] === "function";
        }
        return isSupported;
      }
      var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
      var elementListeningSets = new PossiblyWeakMap();
      function getListeningSetForElement(element) {
        var listeningSet = elementListeningSets.get(element);
        if (listeningSet === void 0) {
          listeningSet = new Set();
          elementListeningSets.set(element, listeningSet);
        }
        return listeningSet;
      }
      function listenTo(registrationName, mountAt) {
        var listeningSet = getListeningSetForElement(mountAt);
        var dependencies = registrationNameDependencies[registrationName];
        for (var i2 = 0; i2 < dependencies.length; i2++) {
          var dependency = dependencies[i2];
          listenToTopLevel(dependency, mountAt, listeningSet);
        }
      }
      function listenToTopLevel(topLevelType, mountAt, listeningSet) {
        if (!listeningSet.has(topLevelType)) {
          switch (topLevelType) {
            case TOP_SCROLL:
              trapCapturedEvent(TOP_SCROLL, mountAt);
              break;
            case TOP_FOCUS:
            case TOP_BLUR:
              trapCapturedEvent(TOP_FOCUS, mountAt);
              trapCapturedEvent(TOP_BLUR, mountAt);
              listeningSet.add(TOP_BLUR);
              listeningSet.add(TOP_FOCUS);
              break;
            case TOP_CANCEL:
            case TOP_CLOSE:
              if (isEventSupported(getRawEventName(topLevelType))) {
                trapCapturedEvent(topLevelType, mountAt);
              }
              break;
            case TOP_INVALID:
            case TOP_SUBMIT:
            case TOP_RESET:
              break;
            default:
              var isMediaEvent = mediaEventTypes.indexOf(topLevelType) !== -1;
              if (!isMediaEvent) {
                trapBubbledEvent(topLevelType, mountAt);
              }
              break;
          }
          listeningSet.add(topLevelType);
        }
      }
      function isListeningToAllDependencies(registrationName, mountAt) {
        var listeningSet = getListeningSetForElement(mountAt);
        var dependencies = registrationNameDependencies[registrationName];
        for (var i2 = 0; i2 < dependencies.length; i2++) {
          var dependency = dependencies[i2];
          if (!listeningSet.has(dependency)) {
            return false;
          }
        }
        return true;
      }
      var shorthandToLonghand = {
        animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
        background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
        backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
        border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
        borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
        borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
        borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
        borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
        borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
        borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
        borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
        borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
        borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
        borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
        borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
        borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
        borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
        columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
        columns: ["columnCount", "columnWidth"],
        flex: ["flexBasis", "flexGrow", "flexShrink"],
        flexFlow: ["flexDirection", "flexWrap"],
        font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
        fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
        gap: ["columnGap", "rowGap"],
        grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
        gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
        gridColumn: ["gridColumnEnd", "gridColumnStart"],
        gridColumnGap: ["columnGap"],
        gridGap: ["columnGap", "rowGap"],
        gridRow: ["gridRowEnd", "gridRowStart"],
        gridRowGap: ["rowGap"],
        gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
        listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
        margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
        marker: ["markerEnd", "markerMid", "markerStart"],
        mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
        maskPosition: ["maskPositionX", "maskPositionY"],
        outline: ["outlineColor", "outlineStyle", "outlineWidth"],
        overflow: ["overflowX", "overflowY"],
        padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
        placeContent: ["alignContent", "justifyContent"],
        placeItems: ["alignItems", "justifyItems"],
        placeSelf: ["alignSelf", "justifySelf"],
        textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
        textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
        transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
        wordWrap: ["overflowWrap"]
      };
      var isUnitlessNumber = {
        animationIterationCount: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      function prefixKey(prefix, key) {
        return prefix + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix) {
          isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
        });
      });
      function dangerousStyleValue(name, value, isCustomProperty) {
        var isEmpty = value == null || typeof value === "boolean" || value === "";
        if (isEmpty) {
          return "";
        }
        if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
          return value + "px";
        }
        return ("" + value).trim();
      }
      var uppercasePattern = /([A-Z])/g;
      var msPattern = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
      }
      var warnValidStyle = function() {
      };
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
        var msPattern$1 = /^-ms-/;
        var hyphenPattern = /-(.)/g;
        var badStyleValueWithSemicolonPattern = /;\s*$/;
        var warnedStyleNames = {};
        var warnedStyleValues = {};
        var warnedForNaNValue = false;
        var warnedForInfinityValue = false;
        var camelize = function(string) {
          return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
          });
        };
        var warnHyphenatedStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          warning$1(false, "Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-")));
        };
        var warnBadVendoredStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          warning$1(false, "Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
        };
        var warnStyleValueWithSemicolon = function(name, value) {
          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
            return;
          }
          warnedStyleValues[value] = true;
          warning$1(false, `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
        };
        var warnStyleValueIsNaN = function(name, value) {
          if (warnedForNaNValue) {
            return;
          }
          warnedForNaNValue = true;
          warning$1(false, "`NaN` is an invalid value for the `%s` css style property.", name);
        };
        var warnStyleValueIsInfinity = function(name, value) {
          if (warnedForInfinityValue) {
            return;
          }
          warnedForInfinityValue = true;
          warning$1(false, "`Infinity` is an invalid value for the `%s` css style property.", name);
        };
        warnValidStyle = function(name, value) {
          if (name.indexOf("-") > -1) {
            warnHyphenatedStyleName(name);
          } else if (badVendoredStyleNamePattern.test(name)) {
            warnBadVendoredStyleName(name);
          } else if (badStyleValueWithSemicolonPattern.test(value)) {
            warnStyleValueWithSemicolon(name, value);
          }
          if (typeof value === "number") {
            if (isNaN(value)) {
              warnStyleValueIsNaN(name, value);
            } else if (!isFinite(value)) {
              warnStyleValueIsInfinity(name, value);
            }
          }
        };
      }
      var warnValidStyle$1 = warnValidStyle;
      function createDangerousStringForStyles(styles) {
        {
          var serialized = "";
          var delimiter = "";
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var styleValue = styles[styleName];
            if (styleValue != null) {
              var isCustomProperty = styleName.indexOf("--") === 0;
              serialized += delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)) + ":";
              serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
              delimiter = ";";
            }
          }
          return serialized || null;
        }
      }
      function setValueForStyles(node, styles) {
        var style2 = node.style;
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          var isCustomProperty = styleName.indexOf("--") === 0;
          {
            if (!isCustomProperty) {
              warnValidStyle$1(styleName, styles[styleName]);
            }
          }
          var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
          if (styleName === "float") {
            styleName = "cssFloat";
          }
          if (isCustomProperty) {
            style2.setProperty(styleName, styleValue);
          } else {
            style2[styleName] = styleValue;
          }
        }
      }
      function isValueEmpty(value) {
        return value == null || typeof value === "boolean" || value === "";
      }
      function expandShorthandMap(styles) {
        var expanded = {};
        for (var key in styles) {
          var longhands = shorthandToLonghand[key] || [key];
          for (var i2 = 0; i2 < longhands.length; i2++) {
            expanded[longhands[i2]] = key;
          }
        }
        return expanded;
      }
      function validateShorthandPropertyCollisionInDev(styleUpdates, nextStyles) {
        if (!warnAboutShorthandPropertyCollision) {
          return;
        }
        if (!nextStyles) {
          return;
        }
        var expandedUpdates = expandShorthandMap(styleUpdates);
        var expandedStyles = expandShorthandMap(nextStyles);
        var warnedAbout = {};
        for (var key in expandedUpdates) {
          var originalKey = expandedUpdates[key];
          var correctOriginalKey = expandedStyles[key];
          if (correctOriginalKey && originalKey !== correctOriginalKey) {
            var warningKey = originalKey + "," + correctOriginalKey;
            if (warnedAbout[warningKey]) {
              continue;
            }
            warnedAbout[warningKey] = true;
            warning$1(false, "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", isValueEmpty(styleUpdates[originalKey]) ? "Removing" : "Updating", originalKey, correctOriginalKey);
          }
        }
      }
      var omittedCloseTags = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      };
      var voidElementTags = _assign({
        menuitem: true
      }, omittedCloseTags);
      var HTML$1 = "__html";
      var ReactDebugCurrentFrame$3 = null;
      {
        ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
      }
      function assertValidProps(tag, props) {
        if (!props) {
          return;
        }
        if (voidElementTags[tag]) {
          (function() {
            if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
              {
                throw ReactError(Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + ReactDebugCurrentFrame$3.getStackAddendum()));
              }
            }
          })();
        }
        if (props.dangerouslySetInnerHTML != null) {
          (function() {
            if (!(props.children == null)) {
              {
                throw ReactError(Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`."));
              }
            }
          })();
          (function() {
            if (!(typeof props.dangerouslySetInnerHTML === "object" && HTML$1 in props.dangerouslySetInnerHTML)) {
              {
                throw ReactError(Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information."));
              }
            }
          })();
        }
        {
          !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.") : void 0;
        }
        (function() {
          if (!(props.style == null || typeof props.style === "object")) {
            {
              throw ReactError(Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + ReactDebugCurrentFrame$3.getStackAddendum()));
            }
          }
        })();
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1) {
          return typeof props.is === "string";
        }
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
      };
      var ariaProperties = {
        "aria-current": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
      };
      var warnedProperties = {};
      var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
      var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
      var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
      function validateProperty(tagName, name) {
        if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
          return true;
        }
        if (rARIACamel.test(name)) {
          var ariaName = "aria-" + name.slice(4).toLowerCase();
          var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
          if (correctName == null) {
            warning$1(false, "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
            warnedProperties[name] = true;
            return true;
          }
          if (name !== correctName) {
            warning$1(false, "Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
            warnedProperties[name] = true;
            return true;
          }
        }
        if (rARIA.test(name)) {
          var lowerCasedName = name.toLowerCase();
          var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
          if (standardName == null) {
            warnedProperties[name] = true;
            return false;
          }
          if (name !== standardName) {
            warning$1(false, "Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
            warnedProperties[name] = true;
            return true;
          }
        }
        return true;
      }
      function warnInvalidARIAProps(type, props) {
        var invalidProps = [];
        for (var key in props) {
          var isValid = validateProperty(type, key);
          if (!isValid) {
            invalidProps.push(key);
          }
        }
        var unknownPropString = invalidProps.map(function(prop) {
          return "`" + prop + "`";
        }).join(", ");
        if (invalidProps.length === 1) {
          warning$1(false, "Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", unknownPropString, type);
        } else if (invalidProps.length > 1) {
          warning$1(false, "Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", unknownPropString, type);
        }
      }
      function validateProperties(type, props) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = false;
      function validateProperties$1(type, props) {
        if (type !== "input" && type !== "textarea" && type !== "select") {
          return;
        }
        if (props != null && props.value === null && !didWarnValueNull) {
          didWarnValueNull = true;
          if (type === "select" && props.multiple) {
            warning$1(false, "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
          } else {
            warning$1(false, "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
          }
        }
      }
      var validateProperty$1 = function() {
      };
      {
        var warnedProperties$1 = {};
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var EVENT_NAME_REGEX = /^on./;
        var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
        var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, canUseEventSystem) {
          if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
            return true;
          }
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
            warning$1(false, "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (canUseEventSystem) {
            if (registrationNameModules.hasOwnProperty(name)) {
              return true;
            }
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
            if (registrationName != null) {
              warning$1(false, "Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (EVENT_NAME_REGEX.test(name)) {
              warning$1(false, "Unknown event handler property `%s`. It will be ignored.", name);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (EVENT_NAME_REGEX.test(name)) {
            if (INVALID_EVENT_NAME_REGEX.test(name)) {
              warning$1(false, "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
            return true;
          }
          if (lowerCasedName === "innerhtml") {
            warning$1(false, "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "aria") {
            warning$1(false, "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
            warning$1(false, "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "number" && isNaN(value)) {
            warning$1(false, "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
            warnedProperties$1[name] = true;
            return true;
          }
          var propertyInfo = getPropertyInfo(name);
          var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name) {
              warning$1(false, "Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (!isReserved && name !== lowerCasedName) {
            warning$1(false, "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
            if (value) {
              warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
            } else {
              warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (isReserved) {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
            warnedProperties$1[name] = true;
            return false;
          }
          if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
            warning$1(false, "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
            warnedProperties$1[name] = true;
            return true;
          }
          return true;
        };
      }
      var warnUnknownProperties = function(type, props, canUseEventSystem) {
        var unknownProps = [];
        for (var key in props) {
          var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
          if (!isValid) {
            unknownProps.push(key);
          }
        }
        var unknownPropString = unknownProps.map(function(prop) {
          return "`" + prop + "`";
        }).join(", ");
        if (unknownProps.length === 1) {
          warning$1(false, "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior", unknownPropString, type);
        } else if (unknownProps.length > 1) {
          warning$1(false, "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior", unknownPropString, type);
        }
      };
      function validateProperties$2(type, props, canUseEventSystem) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnUnknownProperties(type, props, canUseEventSystem);
      }
      var didWarnInvalidHydration = false;
      var didWarnShadyDOM = false;
      var didWarnScriptTags = false;
      var DANGEROUSLY_SET_INNER_HTML = "dangerouslySetInnerHTML";
      var SUPPRESS_CONTENT_EDITABLE_WARNING = "suppressContentEditableWarning";
      var SUPPRESS_HYDRATION_WARNING$1 = "suppressHydrationWarning";
      var AUTOFOCUS = "autoFocus";
      var CHILDREN = "children";
      var STYLE$1 = "style";
      var HTML = "__html";
      var LISTENERS = "listeners";
      var HTML_NAMESPACE = Namespaces.html;
      var warnedUnknownTags;
      var suppressHydrationWarning;
      var validatePropertiesInDevelopment;
      var warnForTextDifference;
      var warnForPropDifference;
      var warnForExtraAttributes;
      var warnForInvalidEventListener;
      var canDiffStyleForHydrationWarning;
      var normalizeMarkupForTextOrAttribute;
      var normalizeHTML;
      {
        warnedUnknownTags = {
          time: true,
          dialog: true,
          webview: true
        };
        validatePropertiesInDevelopment = function(type, props) {
          validateProperties(type, props);
          validateProperties$1(type, props);
          validateProperties$2(type, props, true);
        };
        canDiffStyleForHydrationWarning = canUseDOM && !document.documentMode;
        var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
        var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
        normalizeMarkupForTextOrAttribute = function(markup) {
          var markupString = typeof markup === "string" ? markup : "" + markup;
          return markupString.replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
        };
        warnForTextDifference = function(serverText, clientText) {
          if (didWarnInvalidHydration) {
            return;
          }
          var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
          var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
          if (normalizedServerText === normalizedClientText) {
            return;
          }
          didWarnInvalidHydration = true;
          warningWithoutStack$1(false, 'Text content did not match. Server: "%s" Client: "%s"', normalizedServerText, normalizedClientText);
        };
        warnForPropDifference = function(propName, serverValue, clientValue) {
          if (didWarnInvalidHydration) {
            return;
          }
          var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
          var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
          if (normalizedServerValue === normalizedClientValue) {
            return;
          }
          didWarnInvalidHydration = true;
          warningWithoutStack$1(false, "Prop `%s` did not match. Server: %s Client: %s", propName, JSON.stringify(normalizedServerValue), JSON.stringify(normalizedClientValue));
        };
        warnForExtraAttributes = function(attributeNames) {
          if (didWarnInvalidHydration) {
            return;
          }
          didWarnInvalidHydration = true;
          var names = [];
          attributeNames.forEach(function(name) {
            names.push(name);
          });
          warningWithoutStack$1(false, "Extra attributes from the server: %s", names);
        };
        warnForInvalidEventListener = function(registrationName, listener) {
          if (listener === false) {
            warning$1(false, "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", registrationName, registrationName, registrationName);
          } else {
            warning$1(false, "Expected `%s` listener to be a function, instead got a value of `%s` type.", registrationName, typeof listener);
          }
        };
        normalizeHTML = function(parent, html) {
          var testElement = parent.namespaceURI === HTML_NAMESPACE ? parent.ownerDocument.createElement(parent.tagName) : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
          testElement.innerHTML = html;
          return testElement.innerHTML;
        };
      }
      function ensureListeningTo(rootContainerElement, registrationName) {
        var isDocumentOrFragment = rootContainerElement.nodeType === DOCUMENT_NODE || rootContainerElement.nodeType === DOCUMENT_FRAGMENT_NODE;
        var doc = isDocumentOrFragment ? rootContainerElement : rootContainerElement.ownerDocument;
        listenTo(registrationName, doc);
      }
      function getOwnerDocumentFromRootContainer(rootContainerElement) {
        return rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
      }
      function noop() {
      }
      function trapClickOnNonInteractiveElement(node) {
        node.onclick = noop;
      }
      function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
        for (var propKey in nextProps) {
          if (!nextProps.hasOwnProperty(propKey)) {
            continue;
          }
          var nextProp = nextProps[propKey];
          if (propKey === STYLE$1) {
            {
              if (nextProp) {
                Object.freeze(nextProp);
              }
            }
            setValueForStyles(domElement, nextProp);
          } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
            var nextHtml = nextProp ? nextProp[HTML] : void 0;
            if (nextHtml != null) {
              setInnerHTML(domElement, nextHtml);
            }
          } else if (propKey === CHILDREN) {
            if (typeof nextProp === "string") {
              var canSetTextContent = tag !== "textarea" || nextProp !== "";
              if (canSetTextContent) {
                setTextContent(domElement, nextProp);
              }
            } else if (typeof nextProp === "number") {
              setTextContent(domElement, "" + nextProp);
            }
          } else if (enableFlareAPI && propKey === LISTENERS || propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
          } else if (propKey === AUTOFOCUS) {
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            if (nextProp != null) {
              if (typeof nextProp !== "function") {
                warnForInvalidEventListener(propKey, nextProp);
              }
              ensureListeningTo(rootContainerElement, propKey);
            }
          } else if (nextProp != null) {
            setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag);
          }
        }
      }
      function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
        for (var i2 = 0; i2 < updatePayload.length; i2 += 2) {
          var propKey = updatePayload[i2];
          var propValue = updatePayload[i2 + 1];
          if (propKey === STYLE$1) {
            setValueForStyles(domElement, propValue);
          } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
            setInnerHTML(domElement, propValue);
          } else if (propKey === CHILDREN) {
            setTextContent(domElement, propValue);
          } else {
            setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
          }
        }
      }
      function createElement(type, props, rootContainerElement, parentNamespace) {
        var isCustomComponentTag;
        var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
        var domElement;
        var namespaceURI = parentNamespace;
        if (namespaceURI === HTML_NAMESPACE) {
          namespaceURI = getIntrinsicNamespace(type);
        }
        if (namespaceURI === HTML_NAMESPACE) {
          {
            isCustomComponentTag = isCustomComponent(type, props);
            !(isCustomComponentTag || type === type.toLowerCase()) ? warning$1(false, "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type) : void 0;
          }
          if (type === "script") {
            var div = ownerDocument.createElement("div");
            {
              if (enableTrustedTypesIntegration && !didWarnScriptTags) {
                warning$1(false, "Encountered a script tag while rendering React component. Scripts inside React components are never executed when rendering on the client. Consider using template tag instead (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template).");
                didWarnScriptTags = true;
              }
            }
            div.innerHTML = "<script></script>";
            var firstChild = div.firstChild;
            domElement = div.removeChild(firstChild);
          } else if (typeof props.is === "string") {
            domElement = ownerDocument.createElement(type, {
              is: props.is
            });
          } else {
            domElement = ownerDocument.createElement(type);
            if (type === "select") {
              var node = domElement;
              if (props.multiple) {
                node.multiple = true;
              } else if (props.size) {
                node.size = props.size;
              }
            }
          }
        } else {
          domElement = ownerDocument.createElementNS(namespaceURI, type);
        }
        {
          if (namespaceURI === HTML_NAMESPACE) {
            if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)) {
              warnedUnknownTags[type] = true;
              warning$1(false, "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", type);
            }
          }
        }
        return domElement;
      }
      function createTextNode(text, rootContainerElement) {
        return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
      }
      function setInitialProperties(domElement, tag, rawProps, rootContainerElement) {
        var isCustomComponentTag = isCustomComponent(tag, rawProps);
        {
          validatePropertiesInDevelopment(tag, rawProps);
          if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
            warning$1(false, "%s is using shady DOM. Using shady DOM with React can cause things to break subtly.", getCurrentFiberOwnerNameInDevOrNull() || "A component");
            didWarnShadyDOM = true;
          }
        }
        var props;
        switch (tag) {
          case "iframe":
          case "object":
          case "embed":
            trapBubbledEvent(TOP_LOAD, domElement);
            props = rawProps;
            break;
          case "video":
          case "audio":
            for (var i2 = 0; i2 < mediaEventTypes.length; i2++) {
              trapBubbledEvent(mediaEventTypes[i2], domElement);
            }
            props = rawProps;
            break;
          case "source":
            trapBubbledEvent(TOP_ERROR, domElement);
            props = rawProps;
            break;
          case "img":
          case "image":
          case "link":
            trapBubbledEvent(TOP_ERROR, domElement);
            trapBubbledEvent(TOP_LOAD, domElement);
            props = rawProps;
            break;
          case "form":
            trapBubbledEvent(TOP_RESET, domElement);
            trapBubbledEvent(TOP_SUBMIT, domElement);
            props = rawProps;
            break;
          case "details":
            trapBubbledEvent(TOP_TOGGLE, domElement);
            props = rawProps;
            break;
          case "input":
            initWrapperState(domElement, rawProps);
            props = getHostProps(domElement, rawProps);
            trapBubbledEvent(TOP_INVALID, domElement);
            ensureListeningTo(rootContainerElement, "onChange");
            break;
          case "option":
            validateProps(domElement, rawProps);
            props = getHostProps$1(domElement, rawProps);
            break;
          case "select":
            initWrapperState$1(domElement, rawProps);
            props = getHostProps$2(domElement, rawProps);
            trapBubbledEvent(TOP_INVALID, domElement);
            ensureListeningTo(rootContainerElement, "onChange");
            break;
          case "textarea":
            initWrapperState$2(domElement, rawProps);
            props = getHostProps$3(domElement, rawProps);
            trapBubbledEvent(TOP_INVALID, domElement);
            ensureListeningTo(rootContainerElement, "onChange");
            break;
          default:
            props = rawProps;
        }
        assertValidProps(tag, props);
        setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);
        switch (tag) {
          case "input":
            track(domElement);
            postMountWrapper(domElement, rawProps, false);
            break;
          case "textarea":
            track(domElement);
            postMountWrapper$3(domElement, rawProps);
            break;
          case "option":
            postMountWrapper$1(domElement, rawProps);
            break;
          case "select":
            postMountWrapper$2(domElement, rawProps);
            break;
          default:
            if (typeof props.onClick === "function") {
              trapClickOnNonInteractiveElement(domElement);
            }
            break;
        }
      }
      function diffProperties(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
        {
          validatePropertiesInDevelopment(tag, nextRawProps);
        }
        var updatePayload = null;
        var lastProps;
        var nextProps;
        switch (tag) {
          case "input":
            lastProps = getHostProps(domElement, lastRawProps);
            nextProps = getHostProps(domElement, nextRawProps);
            updatePayload = [];
            break;
          case "option":
            lastProps = getHostProps$1(domElement, lastRawProps);
            nextProps = getHostProps$1(domElement, nextRawProps);
            updatePayload = [];
            break;
          case "select":
            lastProps = getHostProps$2(domElement, lastRawProps);
            nextProps = getHostProps$2(domElement, nextRawProps);
            updatePayload = [];
            break;
          case "textarea":
            lastProps = getHostProps$3(domElement, lastRawProps);
            nextProps = getHostProps$3(domElement, nextRawProps);
            updatePayload = [];
            break;
          default:
            lastProps = lastRawProps;
            nextProps = nextRawProps;
            if (typeof lastProps.onClick !== "function" && typeof nextProps.onClick === "function") {
              trapClickOnNonInteractiveElement(domElement);
            }
            break;
        }
        assertValidProps(tag, nextProps);
        var propKey;
        var styleName;
        var styleUpdates = null;
        for (propKey in lastProps) {
          if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
            continue;
          }
          if (propKey === STYLE$1) {
            var lastStyle = lastProps[propKey];
            for (styleName in lastStyle) {
              if (lastStyle.hasOwnProperty(styleName)) {
                if (!styleUpdates) {
                  styleUpdates = {};
                }
                styleUpdates[styleName] = "";
              }
            }
          } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN) {
          } else if (enableFlareAPI && propKey === LISTENERS || propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
          } else if (propKey === AUTOFOCUS) {
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            if (!updatePayload) {
              updatePayload = [];
            }
          } else {
            (updatePayload = updatePayload || []).push(propKey, null);
          }
        }
        for (propKey in nextProps) {
          var nextProp = nextProps[propKey];
          var lastProp = lastProps != null ? lastProps[propKey] : void 0;
          if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
            continue;
          }
          if (propKey === STYLE$1) {
            {
              if (nextProp) {
                Object.freeze(nextProp);
              }
            }
            if (lastProp) {
              for (styleName in lastProp) {
                if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                  if (!styleUpdates) {
                    styleUpdates = {};
                  }
                  styleUpdates[styleName] = "";
                }
              }
              for (styleName in nextProp) {
                if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                  if (!styleUpdates) {
                    styleUpdates = {};
                  }
                  styleUpdates[styleName] = nextProp[styleName];
                }
              }
            } else {
              if (!styleUpdates) {
                if (!updatePayload) {
                  updatePayload = [];
                }
                updatePayload.push(propKey, styleUpdates);
              }
              styleUpdates = nextProp;
            }
          } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
            var nextHtml = nextProp ? nextProp[HTML] : void 0;
            var lastHtml = lastProp ? lastProp[HTML] : void 0;
            if (nextHtml != null) {
              if (lastHtml !== nextHtml) {
                (updatePayload = updatePayload || []).push(propKey, toStringOrTrustedType(nextHtml));
              }
            } else {
            }
          } else if (propKey === CHILDREN) {
            if (lastProp !== nextProp && (typeof nextProp === "string" || typeof nextProp === "number")) {
              (updatePayload = updatePayload || []).push(propKey, "" + nextProp);
            }
          } else if (enableFlareAPI && propKey === LISTENERS || propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            if (nextProp != null) {
              if (typeof nextProp !== "function") {
                warnForInvalidEventListener(propKey, nextProp);
              }
              ensureListeningTo(rootContainerElement, propKey);
            }
            if (!updatePayload && lastProp !== nextProp) {
              updatePayload = [];
            }
          } else {
            (updatePayload = updatePayload || []).push(propKey, nextProp);
          }
        }
        if (styleUpdates) {
          {
            validateShorthandPropertyCollisionInDev(styleUpdates, nextProps[STYLE$1]);
          }
          (updatePayload = updatePayload || []).push(STYLE$1, styleUpdates);
        }
        return updatePayload;
      }
      function updateProperties(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
        if (tag === "input" && nextRawProps.type === "radio" && nextRawProps.name != null) {
          updateChecked(domElement, nextRawProps);
        }
        var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
        var isCustomComponentTag = isCustomComponent(tag, nextRawProps);
        updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);
        switch (tag) {
          case "input":
            updateWrapper(domElement, nextRawProps);
            break;
          case "textarea":
            updateWrapper$1(domElement, nextRawProps);
            break;
          case "select":
            postUpdateWrapper(domElement, nextRawProps);
            break;
        }
      }
      function getPossibleStandardName(propName) {
        {
          var lowerCasedName = propName.toLowerCase();
          if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            return null;
          }
          return possibleStandardNames[lowerCasedName] || null;
        }
        return null;
      }
      function diffHydratedProperties(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
        var isCustomComponentTag;
        var extraAttributeNames;
        {
          suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING$1] === true;
          isCustomComponentTag = isCustomComponent(tag, rawProps);
          validatePropertiesInDevelopment(tag, rawProps);
          if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
            warning$1(false, "%s is using shady DOM. Using shady DOM with React can cause things to break subtly.", getCurrentFiberOwnerNameInDevOrNull() || "A component");
            didWarnShadyDOM = true;
          }
        }
        switch (tag) {
          case "iframe":
          case "object":
          case "embed":
            trapBubbledEvent(TOP_LOAD, domElement);
            break;
          case "video":
          case "audio":
            for (var i2 = 0; i2 < mediaEventTypes.length; i2++) {
              trapBubbledEvent(mediaEventTypes[i2], domElement);
            }
            break;
          case "source":
            trapBubbledEvent(TOP_ERROR, domElement);
            break;
          case "img":
          case "image":
          case "link":
            trapBubbledEvent(TOP_ERROR, domElement);
            trapBubbledEvent(TOP_LOAD, domElement);
            break;
          case "form":
            trapBubbledEvent(TOP_RESET, domElement);
            trapBubbledEvent(TOP_SUBMIT, domElement);
            break;
          case "details":
            trapBubbledEvent(TOP_TOGGLE, domElement);
            break;
          case "input":
            initWrapperState(domElement, rawProps);
            trapBubbledEvent(TOP_INVALID, domElement);
            ensureListeningTo(rootContainerElement, "onChange");
            break;
          case "option":
            validateProps(domElement, rawProps);
            break;
          case "select":
            initWrapperState$1(domElement, rawProps);
            trapBubbledEvent(TOP_INVALID, domElement);
            ensureListeningTo(rootContainerElement, "onChange");
            break;
          case "textarea":
            initWrapperState$2(domElement, rawProps);
            trapBubbledEvent(TOP_INVALID, domElement);
            ensureListeningTo(rootContainerElement, "onChange");
            break;
        }
        assertValidProps(tag, rawProps);
        {
          extraAttributeNames = new Set();
          var attributes = domElement.attributes;
          for (var _i = 0; _i < attributes.length; _i++) {
            var name = attributes[_i].name.toLowerCase();
            switch (name) {
              case "data-reactroot":
                break;
              case "value":
                break;
              case "checked":
                break;
              case "selected":
                break;
              default:
                extraAttributeNames.add(attributes[_i].name);
            }
          }
        }
        var updatePayload = null;
        for (var propKey in rawProps) {
          if (!rawProps.hasOwnProperty(propKey)) {
            continue;
          }
          var nextProp = rawProps[propKey];
          if (propKey === CHILDREN) {
            if (typeof nextProp === "string") {
              if (domElement.textContent !== nextProp) {
                if (!suppressHydrationWarning) {
                  warnForTextDifference(domElement.textContent, nextProp);
                }
                updatePayload = [CHILDREN, nextProp];
              }
            } else if (typeof nextProp === "number") {
              if (domElement.textContent !== "" + nextProp) {
                if (!suppressHydrationWarning) {
                  warnForTextDifference(domElement.textContent, nextProp);
                }
                updatePayload = [CHILDREN, "" + nextProp];
              }
            }
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            if (nextProp != null) {
              if (typeof nextProp !== "function") {
                warnForInvalidEventListener(propKey, nextProp);
              }
              ensureListeningTo(rootContainerElement, propKey);
            }
          } else if (typeof isCustomComponentTag === "boolean") {
            var serverValue = void 0;
            var propertyInfo = getPropertyInfo(propKey);
            if (suppressHydrationWarning) {
            } else if (enableFlareAPI && propKey === LISTENERS || propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1 || propKey === "value" || propKey === "checked" || propKey === "selected") {
            } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              var serverHTML = domElement.innerHTML;
              var nextHtml = nextProp ? nextProp[HTML] : void 0;
              var expectedHTML = normalizeHTML(domElement, nextHtml != null ? nextHtml : "");
              if (expectedHTML !== serverHTML) {
                warnForPropDifference(propKey, serverHTML, expectedHTML);
              }
            } else if (propKey === STYLE$1) {
              extraAttributeNames.delete(propKey);
              if (canDiffStyleForHydrationWarning) {
                var expectedStyle = createDangerousStringForStyles(nextProp);
                serverValue = domElement.getAttribute("style");
                if (expectedStyle !== serverValue) {
                  warnForPropDifference(propKey, serverValue, expectedStyle);
                }
              }
            } else if (isCustomComponentTag) {
              extraAttributeNames.delete(propKey.toLowerCase());
              serverValue = getValueForAttribute(domElement, propKey, nextProp);
              if (nextProp !== serverValue) {
                warnForPropDifference(propKey, serverValue, nextProp);
              }
            } else if (!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) && !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)) {
              var isMismatchDueToBadCasing = false;
              if (propertyInfo !== null) {
                extraAttributeNames.delete(propertyInfo.attributeName);
                serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
              } else {
                var ownNamespace = parentNamespace;
                if (ownNamespace === HTML_NAMESPACE) {
                  ownNamespace = getIntrinsicNamespace(tag);
                }
                if (ownNamespace === HTML_NAMESPACE) {
                  extraAttributeNames.delete(propKey.toLowerCase());
                } else {
                  var standardName = getPossibleStandardName(propKey);
                  if (standardName !== null && standardName !== propKey) {
                    isMismatchDueToBadCasing = true;
                    extraAttributeNames.delete(standardName);
                  }
                  extraAttributeNames.delete(propKey);
                }
                serverValue = getValueForAttribute(domElement, propKey, nextProp);
              }
              if (nextProp !== serverValue && !isMismatchDueToBadCasing) {
                warnForPropDifference(propKey, serverValue, nextProp);
              }
            }
          }
        }
        {
          if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
            warnForExtraAttributes(extraAttributeNames);
          }
        }
        switch (tag) {
          case "input":
            track(domElement);
            postMountWrapper(domElement, rawProps, true);
            break;
          case "textarea":
            track(domElement);
            postMountWrapper$3(domElement, rawProps);
            break;
          case "select":
          case "option":
            break;
          default:
            if (typeof rawProps.onClick === "function") {
              trapClickOnNonInteractiveElement(domElement);
            }
            break;
        }
        return updatePayload;
      }
      function diffHydratedText(textNode, text) {
        var isDifferent = textNode.nodeValue !== text;
        return isDifferent;
      }
      function warnForUnmatchedText(textNode, text) {
        {
          warnForTextDifference(textNode.nodeValue, text);
        }
      }
      function warnForDeletedHydratableElement(parentNode, child) {
        {
          if (didWarnInvalidHydration) {
            return;
          }
          didWarnInvalidHydration = true;
          warningWithoutStack$1(false, "Did not expect server HTML to contain a <%s> in <%s>.", child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
        }
      }
      function warnForDeletedHydratableText(parentNode, child) {
        {
          if (didWarnInvalidHydration) {
            return;
          }
          didWarnInvalidHydration = true;
          warningWithoutStack$1(false, 'Did not expect server HTML to contain the text node "%s" in <%s>.', child.nodeValue, parentNode.nodeName.toLowerCase());
        }
      }
      function warnForInsertedHydratedElement(parentNode, tag, props) {
        {
          if (didWarnInvalidHydration) {
            return;
          }
          didWarnInvalidHydration = true;
          warningWithoutStack$1(false, "Expected server HTML to contain a matching <%s> in <%s>.", tag, parentNode.nodeName.toLowerCase());
        }
      }
      function warnForInsertedHydratedText(parentNode, text) {
        {
          if (text === "") {
            return;
          }
          if (didWarnInvalidHydration) {
            return;
          }
          didWarnInvalidHydration = true;
          warningWithoutStack$1(false, 'Expected server HTML to contain a matching text node for "%s" in <%s>.', text, parentNode.nodeName.toLowerCase());
        }
      }
      function restoreControlledState$$1(domElement, tag, props) {
        switch (tag) {
          case "input":
            restoreControlledState$1(domElement, props);
            return;
          case "textarea":
            restoreControlledState$3(domElement, props);
            return;
          case "select":
            restoreControlledState$2(domElement, props);
            return;
        }
      }
      function listenToEventResponderEventTypes(eventTypes2, element) {
        if (enableFlareAPI) {
          var listeningSet = getListeningSetForElement(element);
          for (var i2 = 0, length = eventTypes2.length; i2 < length; ++i2) {
            var eventType = eventTypes2[i2];
            var isPassive = !endsWith(eventType, "_active");
            var eventKey = isPassive ? eventType + "_passive" : eventType;
            var targetEventType = isPassive ? eventType : eventType.substring(0, eventType.length - 7);
            if (!listeningSet.has(eventKey)) {
              trapEventForResponderEventSystem(element, targetEventType, isPassive);
              listeningSet.add(eventKey);
            }
          }
        }
      }
      if (enableFlareAPI) {
        setListenToResponderEventTypes(listenToEventResponderEventTypes);
      }
      function getActiveElement(doc) {
        doc = doc || (typeof document !== "undefined" ? document : void 0);
        if (typeof doc === "undefined") {
          return null;
        }
        try {
          return doc.activeElement || doc.body;
        } catch (e) {
          return doc.body;
        }
      }
      function getLeafNode(node) {
        while (node && node.firstChild) {
          node = node.firstChild;
        }
        return node;
      }
      function getSiblingNode(node) {
        while (node) {
          if (node.nextSibling) {
            return node.nextSibling;
          }
          node = node.parentNode;
        }
      }
      function getNodeForCharacterOffset(root2, offset) {
        var node = getLeafNode(root2);
        var nodeStart = 0;
        var nodeEnd = 0;
        while (node) {
          if (node.nodeType === TEXT_NODE) {
            nodeEnd = nodeStart + node.textContent.length;
            if (nodeStart <= offset && nodeEnd >= offset) {
              return {
                node,
                offset: offset - nodeStart
              };
            }
            nodeStart = nodeEnd;
          }
          node = getLeafNode(getSiblingNode(node));
        }
      }
      function getOffsets(outerNode) {
        var ownerDocument = outerNode.ownerDocument;
        var win = ownerDocument && ownerDocument.defaultView || window;
        var selection = win.getSelection && win.getSelection();
        if (!selection || selection.rangeCount === 0) {
          return null;
        }
        var anchorNode = selection.anchorNode, anchorOffset = selection.anchorOffset, focusNode = selection.focusNode, focusOffset = selection.focusOffset;
        try {
          anchorNode.nodeType;
          focusNode.nodeType;
        } catch (e) {
          return null;
        }
        return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
      }
      function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
        var length = 0;
        var start = -1;
        var end = -1;
        var indexWithinAnchor = 0;
        var indexWithinFocus = 0;
        var node = outerNode;
        var parentNode = null;
        outer:
          while (true) {
            var next = null;
            while (true) {
              if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) {
                start = length + anchorOffset;
              }
              if (node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE)) {
                end = length + focusOffset;
              }
              if (node.nodeType === TEXT_NODE) {
                length += node.nodeValue.length;
              }
              if ((next = node.firstChild) === null) {
                break;
              }
              parentNode = node;
              node = next;
            }
            while (true) {
              if (node === outerNode) {
                break outer;
              }
              if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) {
                start = length;
              }
              if (parentNode === focusNode && ++indexWithinFocus === focusOffset) {
                end = length;
              }
              if ((next = node.nextSibling) !== null) {
                break;
              }
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
        if (start === -1 || end === -1) {
          return null;
        }
        return {
          start,
          end
        };
      }
      function setOffsets(node, offsets) {
        var doc = node.ownerDocument || document;
        var win = doc && doc.defaultView || window;
        if (!win.getSelection) {
          return;
        }
        var selection = win.getSelection();
        var length = node.textContent.length;
        var start = Math.min(offsets.start, length);
        var end = offsets.end === void 0 ? start : Math.min(offsets.end, length);
        if (!selection.extend && start > end) {
          var temp = end;
          end = start;
          start = temp;
        }
        var startMarker = getNodeForCharacterOffset(node, start);
        var endMarker = getNodeForCharacterOffset(node, end);
        if (startMarker && endMarker) {
          if (selection.rangeCount === 1 && selection.anchorNode === startMarker.node && selection.anchorOffset === startMarker.offset && selection.focusNode === endMarker.node && selection.focusOffset === endMarker.offset) {
            return;
          }
          var range = doc.createRange();
          range.setStart(startMarker.node, startMarker.offset);
          selection.removeAllRanges();
          if (start > end) {
            selection.addRange(range);
            selection.extend(endMarker.node, endMarker.offset);
          } else {
            range.setEnd(endMarker.node, endMarker.offset);
            selection.addRange(range);
          }
        }
      }
      function isTextNode(node) {
        return node && node.nodeType === TEXT_NODE;
      }
      function containsNode(outerNode, innerNode) {
        if (!outerNode || !innerNode) {
          return false;
        } else if (outerNode === innerNode) {
          return true;
        } else if (isTextNode(outerNode)) {
          return false;
        } else if (isTextNode(innerNode)) {
          return containsNode(outerNode, innerNode.parentNode);
        } else if ("contains" in outerNode) {
          return outerNode.contains(innerNode);
        } else if (outerNode.compareDocumentPosition) {
          return !!(outerNode.compareDocumentPosition(innerNode) & 16);
        } else {
          return false;
        }
      }
      function isInDocument(node) {
        return node && node.ownerDocument && containsNode(node.ownerDocument.documentElement, node);
      }
      function isSameOriginFrame(iframe) {
        try {
          return typeof iframe.contentWindow.location.href === "string";
        } catch (err) {
          return false;
        }
      }
      function getActiveElementDeep() {
        var win = window;
        var element = getActiveElement();
        while (element instanceof win.HTMLIFrameElement) {
          if (isSameOriginFrame(element)) {
            win = element.contentWindow;
          } else {
            return element;
          }
          element = getActiveElement(win.document);
        }
        return element;
      }
      function hasSelectionCapabilities(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName && (nodeName === "input" && (elem.type === "text" || elem.type === "search" || elem.type === "tel" || elem.type === "url" || elem.type === "password") || nodeName === "textarea" || elem.contentEditable === "true");
      }
      function getSelectionInformation() {
        var focusedElem = getActiveElementDeep();
        return {
          focusedElem,
          selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection(focusedElem) : null
        };
      }
      function restoreSelection(priorSelectionInformation) {
        var curFocusedElem = getActiveElementDeep();
        var priorFocusedElem = priorSelectionInformation.focusedElem;
        var priorSelectionRange = priorSelectionInformation.selectionRange;
        if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
          if (priorSelectionRange !== null && hasSelectionCapabilities(priorFocusedElem)) {
            setSelection(priorFocusedElem, priorSelectionRange);
          }
          var ancestors = [];
          var ancestor = priorFocusedElem;
          while (ancestor = ancestor.parentNode) {
            if (ancestor.nodeType === ELEMENT_NODE) {
              ancestors.push({
                element: ancestor,
                left: ancestor.scrollLeft,
                top: ancestor.scrollTop
              });
            }
          }
          if (typeof priorFocusedElem.focus === "function") {
            priorFocusedElem.focus();
          }
          for (var i2 = 0; i2 < ancestors.length; i2++) {
            var info = ancestors[i2];
            info.element.scrollLeft = info.left;
            info.element.scrollTop = info.top;
          }
        }
      }
      function getSelection(input) {
        var selection;
        if ("selectionStart" in input) {
          selection = {
            start: input.selectionStart,
            end: input.selectionEnd
          };
        } else {
          selection = getOffsets(input);
        }
        return selection || {
          start: 0,
          end: 0
        };
      }
      function setSelection(input, offsets) {
        var start = offsets.start, end = offsets.end;
        if (end === void 0) {
          end = start;
        }
        if ("selectionStart" in input) {
          input.selectionStart = start;
          input.selectionEnd = Math.min(end, input.value.length);
        } else {
          setOffsets(input, offsets);
        }
      }
      var validateDOMNesting = function() {
      };
      var updatedAncestorInfo = function() {
      };
      {
        var specialTags = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"];
        var inScopeTags = [
          "applet",
          "caption",
          "html",
          "table",
          "td",
          "th",
          "marquee",
          "object",
          "template",
          "foreignObject",
          "desc",
          "title"
        ];
        var buttonScopeTags = inScopeTags.concat(["button"]);
        var impliedEndTags = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"];
        var emptyAncestorInfo = {
          current: null,
          formTag: null,
          aTagInScope: null,
          buttonTagInScope: null,
          nobrTagInScope: null,
          pTagInButtonScope: null,
          listItemTagAutoclosing: null,
          dlItemTagAutoclosing: null
        };
        updatedAncestorInfo = function(oldInfo, tag) {
          var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
          var info = {
            tag
          };
          if (inScopeTags.indexOf(tag) !== -1) {
            ancestorInfo.aTagInScope = null;
            ancestorInfo.buttonTagInScope = null;
            ancestorInfo.nobrTagInScope = null;
          }
          if (buttonScopeTags.indexOf(tag) !== -1) {
            ancestorInfo.pTagInButtonScope = null;
          }
          if (specialTags.indexOf(tag) !== -1 && tag !== "address" && tag !== "div" && tag !== "p") {
            ancestorInfo.listItemTagAutoclosing = null;
            ancestorInfo.dlItemTagAutoclosing = null;
          }
          ancestorInfo.current = info;
          if (tag === "form") {
            ancestorInfo.formTag = info;
          }
          if (tag === "a") {
            ancestorInfo.aTagInScope = info;
          }
          if (tag === "button") {
            ancestorInfo.buttonTagInScope = info;
          }
          if (tag === "nobr") {
            ancestorInfo.nobrTagInScope = info;
          }
          if (tag === "p") {
            ancestorInfo.pTagInButtonScope = info;
          }
          if (tag === "li") {
            ancestorInfo.listItemTagAutoclosing = info;
          }
          if (tag === "dd" || tag === "dt") {
            ancestorInfo.dlItemTagAutoclosing = info;
          }
          return ancestorInfo;
        };
        var isTagValidWithParent = function(tag, parentTag) {
          switch (parentTag) {
            case "select":
              return tag === "option" || tag === "optgroup" || tag === "#text";
            case "optgroup":
              return tag === "option" || tag === "#text";
            case "option":
              return tag === "#text";
            case "tr":
              return tag === "th" || tag === "td" || tag === "style" || tag === "script" || tag === "template";
            case "tbody":
            case "thead":
            case "tfoot":
              return tag === "tr" || tag === "style" || tag === "script" || tag === "template";
            case "colgroup":
              return tag === "col" || tag === "template";
            case "table":
              return tag === "caption" || tag === "colgroup" || tag === "tbody" || tag === "tfoot" || tag === "thead" || tag === "style" || tag === "script" || tag === "template";
            case "head":
              return tag === "base" || tag === "basefont" || tag === "bgsound" || tag === "link" || tag === "meta" || tag === "title" || tag === "noscript" || tag === "noframes" || tag === "style" || tag === "script" || tag === "template";
            case "html":
              return tag === "head" || tag === "body" || tag === "frameset";
            case "frameset":
              return tag === "frame";
            case "#document":
              return tag === "html";
          }
          switch (tag) {
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              return parentTag !== "h1" && parentTag !== "h2" && parentTag !== "h3" && parentTag !== "h4" && parentTag !== "h5" && parentTag !== "h6";
            case "rp":
            case "rt":
              return impliedEndTags.indexOf(parentTag) === -1;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "frameset":
            case "frame":
            case "head":
            case "html":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return parentTag == null;
          }
          return true;
        };
        var findInvalidAncestorForTag = function(tag, ancestorInfo) {
          switch (tag) {
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "main":
            case "menu":
            case "nav":
            case "ol":
            case "p":
            case "section":
            case "summary":
            case "ul":
            case "pre":
            case "listing":
            case "table":
            case "hr":
            case "xmp":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              return ancestorInfo.pTagInButtonScope;
            case "form":
              return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
            case "li":
              return ancestorInfo.listItemTagAutoclosing;
            case "dd":
            case "dt":
              return ancestorInfo.dlItemTagAutoclosing;
            case "button":
              return ancestorInfo.buttonTagInScope;
            case "a":
              return ancestorInfo.aTagInScope;
            case "nobr":
              return ancestorInfo.nobrTagInScope;
          }
          return null;
        };
        var didWarn$1 = {};
        validateDOMNesting = function(childTag, childText, ancestorInfo) {
          ancestorInfo = ancestorInfo || emptyAncestorInfo;
          var parentInfo = ancestorInfo.current;
          var parentTag = parentInfo && parentInfo.tag;
          if (childText != null) {
            !(childTag == null) ? warningWithoutStack$1(false, "validateDOMNesting: when childText is passed, childTag should be null") : void 0;
            childTag = "#text";
          }
          var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
          var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
          var invalidParentOrAncestor = invalidParent || invalidAncestor;
          if (!invalidParentOrAncestor) {
            return;
          }
          var ancestorTag = invalidParentOrAncestor.tag;
          var addendum = getCurrentFiberStackInDev();
          var warnKey = !!invalidParent + "|" + childTag + "|" + ancestorTag + "|" + addendum;
          if (didWarn$1[warnKey]) {
            return;
          }
          didWarn$1[warnKey] = true;
          var tagDisplayName = childTag;
          var whitespaceInfo = "";
          if (childTag === "#text") {
            if (/\S/.test(childText)) {
              tagDisplayName = "Text nodes";
            } else {
              tagDisplayName = "Whitespace text nodes";
              whitespaceInfo = " Make sure you don't have any extra whitespace between tags on each line of your source code.";
            }
          } else {
            tagDisplayName = "<" + childTag + ">";
          }
          if (invalidParent) {
            var info = "";
            if (ancestorTag === "table" && childTag === "tr") {
              info += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.";
            }
            warningWithoutStack$1(false, "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s", tagDisplayName, ancestorTag, whitespaceInfo, info, addendum);
          } else {
            warningWithoutStack$1(false, "validateDOMNesting(...): %s cannot appear as a descendant of <%s>.%s", tagDisplayName, ancestorTag, addendum);
          }
        };
      }
      function shim() {
        (function() {
          {
            {
              throw ReactError(Error("The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue."));
            }
          }
        })();
      }
      var supportsPersistence = false;
      var cloneInstance = shim;
      var cloneFundamentalInstance = shim;
      var createContainerChildSet = shim;
      var appendChildToContainerChildSet = shim;
      var finalizeContainerChildren = shim;
      var replaceContainerChildren = shim;
      var cloneHiddenInstance = shim;
      var cloneHiddenTextInstance = shim;
      var SUPPRESS_HYDRATION_WARNING;
      {
        SUPPRESS_HYDRATION_WARNING = "suppressHydrationWarning";
      }
      var SUSPENSE_START_DATA = "$";
      var SUSPENSE_END_DATA = "/$";
      var SUSPENSE_PENDING_START_DATA = "$?";
      var SUSPENSE_FALLBACK_START_DATA = "$!";
      var STYLE = "style";
      var eventsEnabled = null;
      var selectionInformation = null;
      function shouldAutoFocusHostComponent(type, props) {
        switch (type) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!props.autoFocus;
        }
        return false;
      }
      function getRootHostContext(rootContainerInstance) {
        var type;
        var namespace;
        var nodeType = rootContainerInstance.nodeType;
        switch (nodeType) {
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE: {
            type = nodeType === DOCUMENT_NODE ? "#document" : "#fragment";
            var root2 = rootContainerInstance.documentElement;
            namespace = root2 ? root2.namespaceURI : getChildNamespace(null, "");
            break;
          }
          default: {
            var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
            var ownNamespace = container.namespaceURI || null;
            type = container.tagName;
            namespace = getChildNamespace(ownNamespace, type);
            break;
          }
        }
        {
          var validatedTag = type.toLowerCase();
          var ancestorInfo = updatedAncestorInfo(null, validatedTag);
          return {
            namespace,
            ancestorInfo
          };
        }
        return namespace;
      }
      function getChildHostContext(parentHostContext, type, rootContainerInstance) {
        {
          var parentHostContextDev = parentHostContext;
          var namespace = getChildNamespace(parentHostContextDev.namespace, type);
          var ancestorInfo = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type);
          return {
            namespace,
            ancestorInfo
          };
        }
        var parentNamespace = parentHostContext;
        return getChildNamespace(parentNamespace, type);
      }
      function getPublicInstance(instance) {
        return instance;
      }
      function prepareForCommit(containerInfo) {
        eventsEnabled = isEnabled();
        selectionInformation = getSelectionInformation();
        setEnabled(false);
      }
      function resetAfterCommit(containerInfo) {
        restoreSelection(selectionInformation);
        selectionInformation = null;
        setEnabled(eventsEnabled);
        eventsEnabled = null;
      }
      function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        var parentNamespace;
        {
          var hostContextDev = hostContext;
          validateDOMNesting(type, null, hostContextDev.ancestorInfo);
          if (typeof props.children === "string" || typeof props.children === "number") {
            var string = "" + props.children;
            var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
            validateDOMNesting(null, string, ownAncestorInfo);
          }
          parentNamespace = hostContextDev.namespace;
        }
        var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
        precacheFiberNode(internalInstanceHandle, domElement);
        updateFiberProps(domElement, props);
        return domElement;
      }
      function appendInitialChild(parentInstance, child) {
        parentInstance.appendChild(child);
      }
      function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
        setInitialProperties(domElement, type, props, rootContainerInstance);
        return shouldAutoFocusHostComponent(type, props);
      }
      function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
        {
          var hostContextDev = hostContext;
          if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === "string" || typeof newProps.children === "number")) {
            var string = "" + newProps.children;
            var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
            validateDOMNesting(null, string, ownAncestorInfo);
          }
        }
        return diffProperties(domElement, type, oldProps, newProps, rootContainerInstance);
      }
      function shouldSetTextContent(type, props) {
        return type === "textarea" || type === "option" || type === "noscript" || typeof props.children === "string" || typeof props.children === "number" || typeof props.dangerouslySetInnerHTML === "object" && props.dangerouslySetInnerHTML !== null && props.dangerouslySetInnerHTML.__html != null;
      }
      function shouldDeprioritizeSubtree(type, props) {
        return !!props.hidden;
      }
      function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
        {
          var hostContextDev = hostContext;
          validateDOMNesting(null, text, hostContextDev.ancestorInfo);
        }
        var textNode = createTextNode(text, rootContainerInstance);
        precacheFiberNode(internalInstanceHandle, textNode);
        return textNode;
      }
      var isPrimaryRenderer = true;
      var warnsIfNotActing = true;
      var scheduleTimeout = typeof setTimeout === "function" ? setTimeout : void 0;
      var cancelTimeout = typeof clearTimeout === "function" ? clearTimeout : void 0;
      var noTimeout = -1;
      var supportsMutation = true;
      function commitMount(domElement, type, newProps, internalInstanceHandle) {
        if (shouldAutoFocusHostComponent(type, newProps)) {
          domElement.focus();
        }
      }
      function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
        updateFiberProps(domElement, newProps);
        updateProperties(domElement, updatePayload, type, oldProps, newProps);
      }
      function resetTextContent(domElement) {
        setTextContent(domElement, "");
      }
      function commitTextUpdate(textInstance, oldText, newText) {
        textInstance.nodeValue = newText;
      }
      function appendChild(parentInstance, child) {
        parentInstance.appendChild(child);
      }
      function appendChildToContainer(container, child) {
        var parentNode;
        if (container.nodeType === COMMENT_NODE) {
          parentNode = container.parentNode;
          parentNode.insertBefore(child, container);
        } else {
          parentNode = container;
          parentNode.appendChild(child);
        }
        var reactRootContainer = container._reactRootContainer;
        if ((reactRootContainer === null || reactRootContainer === void 0) && parentNode.onclick === null) {
          trapClickOnNonInteractiveElement(parentNode);
        }
      }
      function insertBefore(parentInstance, child, beforeChild) {
        parentInstance.insertBefore(child, beforeChild);
      }
      function insertInContainerBefore(container, child, beforeChild) {
        if (container.nodeType === COMMENT_NODE) {
          container.parentNode.insertBefore(child, beforeChild);
        } else {
          container.insertBefore(child, beforeChild);
        }
      }
      function removeChild(parentInstance, child) {
        parentInstance.removeChild(child);
      }
      function removeChildFromContainer(container, child) {
        if (container.nodeType === COMMENT_NODE) {
          container.parentNode.removeChild(child);
        } else {
          container.removeChild(child);
        }
      }
      function clearSuspenseBoundary(parentInstance, suspenseInstance) {
        var node = suspenseInstance;
        var depth = 0;
        do {
          var nextNode = node.nextSibling;
          parentInstance.removeChild(node);
          if (nextNode && nextNode.nodeType === COMMENT_NODE) {
            var data = nextNode.data;
            if (data === SUSPENSE_END_DATA) {
              if (depth === 0) {
                parentInstance.removeChild(nextNode);
                retryIfBlockedOn(suspenseInstance);
                return;
              } else {
                depth--;
              }
            } else if (data === SUSPENSE_START_DATA || data === SUSPENSE_PENDING_START_DATA || data === SUSPENSE_FALLBACK_START_DATA) {
              depth++;
            }
          }
          node = nextNode;
        } while (node);
        retryIfBlockedOn(suspenseInstance);
      }
      function clearSuspenseBoundaryFromContainer(container, suspenseInstance) {
        if (container.nodeType === COMMENT_NODE) {
          clearSuspenseBoundary(container.parentNode, suspenseInstance);
        } else if (container.nodeType === ELEMENT_NODE) {
          clearSuspenseBoundary(container, suspenseInstance);
        } else {
        }
        retryIfBlockedOn(container);
      }
      function hideInstance(instance) {
        instance = instance;
        var style2 = instance.style;
        if (typeof style2.setProperty === "function") {
          style2.setProperty("display", "none", "important");
        } else {
          style2.display = "none";
        }
      }
      function hideTextInstance(textInstance) {
        textInstance.nodeValue = "";
      }
      function unhideInstance(instance, props) {
        instance = instance;
        var styleProp = props[STYLE];
        var display = styleProp !== void 0 && styleProp !== null && styleProp.hasOwnProperty("display") ? styleProp.display : null;
        instance.style.display = dangerousStyleValue("display", display);
      }
      function unhideTextInstance(textInstance, text) {
        textInstance.nodeValue = text;
      }
      var supportsHydration = true;
      function canHydrateInstance(instance, type, props) {
        if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
          return null;
        }
        return instance;
      }
      function canHydrateTextInstance(instance, text) {
        if (text === "" || instance.nodeType !== TEXT_NODE) {
          return null;
        }
        return instance;
      }
      function canHydrateSuspenseInstance(instance) {
        if (instance.nodeType !== COMMENT_NODE) {
          return null;
        }
        return instance;
      }
      function isSuspenseInstancePending(instance) {
        return instance.data === SUSPENSE_PENDING_START_DATA;
      }
      function isSuspenseInstanceFallback(instance) {
        return instance.data === SUSPENSE_FALLBACK_START_DATA;
      }
      function registerSuspenseInstanceRetry(instance, callback) {
        instance._reactRetry = callback;
      }
      function getNextHydratable(node) {
        for (; node != null; node = node.nextSibling) {
          var nodeType = node.nodeType;
          if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) {
            break;
          }
          if (enableSuspenseServerRenderer) {
            if (nodeType === COMMENT_NODE) {
              var nodeData = node.data;
              if (nodeData === SUSPENSE_START_DATA || nodeData === SUSPENSE_FALLBACK_START_DATA || nodeData === SUSPENSE_PENDING_START_DATA) {
                break;
              }
            }
          }
        }
        return node;
      }
      function getNextHydratableSibling(instance) {
        return getNextHydratable(instance.nextSibling);
      }
      function getFirstHydratableChild(parentInstance) {
        return getNextHydratable(parentInstance.firstChild);
      }
      function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        precacheFiberNode(internalInstanceHandle, instance);
        updateFiberProps(instance, props);
        var parentNamespace;
        {
          var hostContextDev = hostContext;
          parentNamespace = hostContextDev.namespace;
        }
        return diffHydratedProperties(instance, type, props, parentNamespace, rootContainerInstance);
      }
      function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
        precacheFiberNode(internalInstanceHandle, textInstance);
        return diffHydratedText(textInstance, text);
      }
      function hydrateSuspenseInstance(suspenseInstance, internalInstanceHandle) {
        precacheFiberNode(internalInstanceHandle, suspenseInstance);
      }
      function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance) {
        var node = suspenseInstance.nextSibling;
        var depth = 0;
        while (node) {
          if (node.nodeType === COMMENT_NODE) {
            var data = node.data;
            if (data === SUSPENSE_END_DATA) {
              if (depth === 0) {
                return getNextHydratableSibling(node);
              } else {
                depth--;
              }
            } else if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) {
              depth++;
            }
          }
          node = node.nextSibling;
        }
        return null;
      }
      function getParentSuspenseInstance(targetInstance) {
        var node = targetInstance.previousSibling;
        var depth = 0;
        while (node) {
          if (node.nodeType === COMMENT_NODE) {
            var data = node.data;
            if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) {
              if (depth === 0) {
                return node;
              } else {
                depth--;
              }
            } else if (data === SUSPENSE_END_DATA) {
              depth++;
            }
          }
          node = node.previousSibling;
        }
        return null;
      }
      function commitHydratedContainer(container) {
        retryIfBlockedOn(container);
      }
      function commitHydratedSuspenseInstance(suspenseInstance) {
        retryIfBlockedOn(suspenseInstance);
      }
      function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
        {
          warnForUnmatchedText(textInstance, text);
        }
      }
      function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
          warnForUnmatchedText(textInstance, text);
        }
      }
      function didNotHydrateContainerInstance(parentContainer, instance) {
        {
          if (instance.nodeType === ELEMENT_NODE) {
            warnForDeletedHydratableElement(parentContainer, instance);
          } else if (instance.nodeType === COMMENT_NODE) {
          } else {
            warnForDeletedHydratableText(parentContainer, instance);
          }
        }
      }
      function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
          if (instance.nodeType === ELEMENT_NODE) {
            warnForDeletedHydratableElement(parentInstance, instance);
          } else if (instance.nodeType === COMMENT_NODE) {
          } else {
            warnForDeletedHydratableText(parentInstance, instance);
          }
        }
      }
      function didNotFindHydratableContainerInstance(parentContainer, type, props) {
        {
          warnForInsertedHydratedElement(parentContainer, type, props);
        }
      }
      function didNotFindHydratableContainerTextInstance(parentContainer, text) {
        {
          warnForInsertedHydratedText(parentContainer, text);
        }
      }
      function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
          warnForInsertedHydratedElement(parentInstance, type, props);
        }
      }
      function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
          warnForInsertedHydratedText(parentInstance, text);
        }
      }
      function didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance) {
        if (parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
        }
      }
      function mountResponderInstance(responder, responderInstance, responderProps, responderState, instance) {
        var doc = instance.ownerDocument;
        var _ref = responder, rootEventTypes = _ref.rootEventTypes, targetEventTypes = _ref.targetEventTypes;
        if (targetEventTypes !== null) {
          listenToEventResponderEventTypes(targetEventTypes, doc);
        }
        if (rootEventTypes !== null) {
          addRootEventTypesForResponderInstance(responderInstance, rootEventTypes);
          listenToEventResponderEventTypes(rootEventTypes, doc);
        }
        mountEventResponder(responder, responderInstance, responderProps, responderState);
        return responderInstance;
      }
      function unmountResponderInstance(responderInstance) {
        if (enableFlareAPI) {
          unmountEventResponder(responderInstance);
        }
      }
      function getFundamentalComponentInstance(fundamentalInstance) {
        if (enableFundamentalAPI) {
          var currentFiber2 = fundamentalInstance.currentFiber, impl = fundamentalInstance.impl, props = fundamentalInstance.props, state = fundamentalInstance.state;
          var instance = impl.getInstance(null, props, state);
          precacheFiberNode(currentFiber2, instance);
          return instance;
        }
        return null;
      }
      function mountFundamentalComponent(fundamentalInstance) {
        if (enableFundamentalAPI) {
          var impl = fundamentalInstance.impl, instance = fundamentalInstance.instance, props = fundamentalInstance.props, state = fundamentalInstance.state;
          var onMount = impl.onMount;
          if (onMount !== void 0) {
            onMount(null, instance, props, state);
          }
        }
      }
      function shouldUpdateFundamentalComponent(fundamentalInstance) {
        if (enableFundamentalAPI) {
          var impl = fundamentalInstance.impl, prevProps = fundamentalInstance.prevProps, props = fundamentalInstance.props, state = fundamentalInstance.state;
          var shouldUpdate = impl.shouldUpdate;
          if (shouldUpdate !== void 0) {
            return shouldUpdate(null, prevProps, props, state);
          }
        }
        return true;
      }
      function updateFundamentalComponent(fundamentalInstance) {
        if (enableFundamentalAPI) {
          var impl = fundamentalInstance.impl, instance = fundamentalInstance.instance, prevProps = fundamentalInstance.prevProps, props = fundamentalInstance.props, state = fundamentalInstance.state;
          var onUpdate = impl.onUpdate;
          if (onUpdate !== void 0) {
            onUpdate(null, instance, prevProps, props, state);
          }
        }
      }
      function unmountFundamentalComponent(fundamentalInstance) {
        if (enableFundamentalAPI) {
          var impl = fundamentalInstance.impl, instance = fundamentalInstance.instance, props = fundamentalInstance.props, state = fundamentalInstance.state;
          var onUnmount = impl.onUnmount;
          if (onUnmount !== void 0) {
            onUnmount(null, instance, props, state);
          }
        }
      }
      var randomKey = Math.random().toString(36).slice(2);
      var internalInstanceKey = "__reactInternalInstance$" + randomKey;
      var internalEventHandlersKey = "__reactEventHandlers$" + randomKey;
      var internalContainerInstanceKey = "__reactContainere$" + randomKey;
      function precacheFiberNode(hostInst, node) {
        node[internalInstanceKey] = hostInst;
      }
      function markContainerAsRoot(hostRoot, node) {
        node[internalContainerInstanceKey] = hostRoot;
      }
      function getClosestInstanceFromNode(targetNode) {
        var targetInst = targetNode[internalInstanceKey];
        if (targetInst) {
          return targetInst;
        }
        var parentNode = targetNode.parentNode;
        while (parentNode) {
          targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey];
          if (targetInst) {
            var alternate = targetInst.alternate;
            if (targetInst.child !== null || alternate !== null && alternate.child !== null) {
              var suspenseInstance = getParentSuspenseInstance(targetNode);
              while (suspenseInstance !== null) {
                var targetSuspenseInst = suspenseInstance[internalInstanceKey];
                if (targetSuspenseInst) {
                  return targetSuspenseInst;
                }
                suspenseInstance = getParentSuspenseInstance(suspenseInstance);
              }
            }
            return targetInst;
          }
          targetNode = parentNode;
          parentNode = targetNode.parentNode;
        }
        return null;
      }
      function getInstanceFromNode$1(node) {
        var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
        if (inst) {
          if (inst.tag === HostComponent || inst.tag === HostText || inst.tag === SuspenseComponent || inst.tag === HostRoot) {
            return inst;
          } else {
            return null;
          }
        }
        return null;
      }
      function getNodeFromInstance$1(inst) {
        if (inst.tag === HostComponent || inst.tag === HostText) {
          return inst.stateNode;
        }
        (function() {
          {
            {
              throw ReactError(Error("getNodeFromInstance: Invalid argument."));
            }
          }
        })();
      }
      function getFiberCurrentPropsFromNode$1(node) {
        return node[internalEventHandlersKey] || null;
      }
      function updateFiberProps(node, props) {
        node[internalEventHandlersKey] = props;
      }
      var root = null;
      var startText = null;
      var fallbackText = null;
      function initialize(nativeEventTarget) {
        root = nativeEventTarget;
        startText = getText();
        return true;
      }
      function reset() {
        root = null;
        startText = null;
        fallbackText = null;
      }
      function getData() {
        if (fallbackText) {
          return fallbackText;
        }
        var start;
        var startValue = startText;
        var startLength = startValue.length;
        var end;
        var endValue = getText();
        var endLength = endValue.length;
        for (start = 0; start < startLength; start++) {
          if (startValue[start] !== endValue[start]) {
            break;
          }
        }
        var minEnd = startLength - start;
        for (end = 1; end <= minEnd; end++) {
          if (startValue[startLength - end] !== endValue[endLength - end]) {
            break;
          }
        }
        var sliceTail = end > 1 ? 1 - end : void 0;
        fallbackText = endValue.slice(start, sliceTail);
        return fallbackText;
      }
      function getText() {
        if ("value" in root) {
          return root.value;
        }
        return root.textContent;
      }
      var SyntheticCompositionEvent = SyntheticEvent.extend({
        data: null
      });
      var SyntheticInputEvent = SyntheticEvent.extend({
        data: null
      });
      var END_KEYCODES = [9, 13, 27, 32];
      var START_KEYCODE = 229;
      var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
      var documentMode = null;
      if (canUseDOM && "documentMode" in document) {
        documentMode = document.documentMode;
      }
      var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
      var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
      var SPACEBAR_CODE = 32;
      var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
      var eventTypes$1 = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture"
          },
          dependencies: [TOP_COMPOSITION_END, TOP_KEY_PRESS, TOP_TEXT_INPUT, TOP_PASTE]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture"
          },
          dependencies: [TOP_BLUR, TOP_COMPOSITION_END, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture"
          },
          dependencies: [TOP_BLUR, TOP_COMPOSITION_START, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture"
          },
          dependencies: [TOP_BLUR, TOP_COMPOSITION_UPDATE, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
        }
      };
      var hasSpaceKeypress = false;
      function isKeypressCommand(nativeEvent) {
        return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
      }
      function getCompositionEventType(topLevelType) {
        switch (topLevelType) {
          case TOP_COMPOSITION_START:
            return eventTypes$1.compositionStart;
          case TOP_COMPOSITION_END:
            return eventTypes$1.compositionEnd;
          case TOP_COMPOSITION_UPDATE:
            return eventTypes$1.compositionUpdate;
        }
      }
      function isFallbackCompositionStart(topLevelType, nativeEvent) {
        return topLevelType === TOP_KEY_DOWN && nativeEvent.keyCode === START_KEYCODE;
      }
      function isFallbackCompositionEnd(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_KEY_UP:
            return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
          case TOP_KEY_DOWN:
            return nativeEvent.keyCode !== START_KEYCODE;
          case TOP_KEY_PRESS:
          case TOP_MOUSE_DOWN:
          case TOP_BLUR:
            return true;
          default:
            return false;
        }
      }
      function getDataFromCustomEvent(nativeEvent) {
        var detail = nativeEvent.detail;
        if (typeof detail === "object" && "data" in detail) {
          return detail.data;
        }
        return null;
      }
      function isUsingKoreanIME(nativeEvent) {
        return nativeEvent.locale === "ko";
      }
      var isComposing = false;
      function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var eventType;
        var fallbackData;
        if (canUseCompositionEvent) {
          eventType = getCompositionEventType(topLevelType);
        } else if (!isComposing) {
          if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
            eventType = eventTypes$1.compositionStart;
          }
        } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
          eventType = eventTypes$1.compositionEnd;
        }
        if (!eventType) {
          return null;
        }
        if (useFallbackCompositionData && !isUsingKoreanIME(nativeEvent)) {
          if (!isComposing && eventType === eventTypes$1.compositionStart) {
            isComposing = initialize(nativeEventTarget);
          } else if (eventType === eventTypes$1.compositionEnd) {
            if (isComposing) {
              fallbackData = getData();
            }
          }
        }
        var event2 = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);
        if (fallbackData) {
          event2.data = fallbackData;
        } else {
          var customData = getDataFromCustomEvent(nativeEvent);
          if (customData !== null) {
            event2.data = customData;
          }
        }
        accumulateTwoPhaseDispatches(event2);
        return event2;
      }
      function getNativeBeforeInputChars(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_COMPOSITION_END:
            return getDataFromCustomEvent(nativeEvent);
          case TOP_KEY_PRESS:
            var which = nativeEvent.which;
            if (which !== SPACEBAR_CODE) {
              return null;
            }
            hasSpaceKeypress = true;
            return SPACEBAR_CHAR;
          case TOP_TEXT_INPUT:
            var chars = nativeEvent.data;
            if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
              return null;
            }
            return chars;
          default:
            return null;
        }
      }
      function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
        if (isComposing) {
          if (topLevelType === TOP_COMPOSITION_END || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
            var chars = getData();
            reset();
            isComposing = false;
            return chars;
          }
          return null;
        }
        switch (topLevelType) {
          case TOP_PASTE:
            return null;
          case TOP_KEY_PRESS:
            if (!isKeypressCommand(nativeEvent)) {
              if (nativeEvent.char && nativeEvent.char.length > 1) {
                return nativeEvent.char;
              } else if (nativeEvent.which) {
                return String.fromCharCode(nativeEvent.which);
              }
            }
            return null;
          case TOP_COMPOSITION_END:
            return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent) ? null : nativeEvent.data;
          default:
            return null;
        }
      }
      function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var chars;
        if (canUseTextInputEvent) {
          chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
        } else {
          chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
        }
        if (!chars) {
          return null;
        }
        var event2 = SyntheticInputEvent.getPooled(eventTypes$1.beforeInput, targetInst, nativeEvent, nativeEventTarget);
        event2.data = chars;
        accumulateTwoPhaseDispatches(event2);
        return event2;
      }
      var BeforeInputEventPlugin = {
        eventTypes: eventTypes$1,
        extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
          var composition = extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget);
          var beforeInput = extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget);
          if (composition === null) {
            return beforeInput;
          }
          if (beforeInput === null) {
            return composition;
          }
          return [composition, beforeInput];
        }
      };
      var supportedInputTypes = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      function isTextInputElement(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        if (nodeName === "input") {
          return !!supportedInputTypes[elem.type];
        }
        if (nodeName === "textarea") {
          return true;
        }
        return false;
      }
      var eventTypes$2 = {
        change: {
          phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture"
          },
          dependencies: [TOP_BLUR, TOP_CHANGE, TOP_CLICK, TOP_FOCUS, TOP_INPUT, TOP_KEY_DOWN, TOP_KEY_UP, TOP_SELECTION_CHANGE]
        }
      };
      function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
        var event2 = SyntheticEvent.getPooled(eventTypes$2.change, inst, nativeEvent, target);
        event2.type = "change";
        enqueueStateRestore(target);
        accumulateTwoPhaseDispatches(event2);
        return event2;
      }
      var activeElement = null;
      var activeElementInst = null;
      function shouldUseChangeEvent(elem) {
        var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName === "select" || nodeName === "input" && elem.type === "file";
      }
      function manualDispatchChangeEvent(nativeEvent) {
        var event2 = createAndAccumulateChangeEvent(activeElementInst, nativeEvent, getEventTarget(nativeEvent));
        batchedUpdates(runEventInBatch, event2);
      }
      function runEventInBatch(event2) {
        runEventsInBatch(event2);
      }
      function getInstIfValueChanged(targetInst) {
        var targetNode = getNodeFromInstance$1(targetInst);
        if (updateValueIfChanged(targetNode)) {
          return targetInst;
        }
      }
      function getTargetInstForChangeEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_CHANGE) {
          return targetInst;
        }
      }
      var isInputEventSupported = false;
      if (canUseDOM) {
        isInputEventSupported = isEventSupported("input") && (!document.documentMode || document.documentMode > 9);
      }
      function startWatchingForValueChange(target, targetInst) {
        activeElement = target;
        activeElementInst = targetInst;
        activeElement.attachEvent("onpropertychange", handlePropertyChange);
      }
      function stopWatchingForValueChange() {
        if (!activeElement) {
          return;
        }
        activeElement.detachEvent("onpropertychange", handlePropertyChange);
        activeElement = null;
        activeElementInst = null;
      }
      function handlePropertyChange(nativeEvent) {
        if (nativeEvent.propertyName !== "value") {
          return;
        }
        if (getInstIfValueChanged(activeElementInst)) {
          manualDispatchChangeEvent(nativeEvent);
        }
      }
      function handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
        if (topLevelType === TOP_FOCUS) {
          stopWatchingForValueChange();
          startWatchingForValueChange(target, targetInst);
        } else if (topLevelType === TOP_BLUR) {
          stopWatchingForValueChange();
        }
      }
      function getTargetInstForInputEventPolyfill(topLevelType, targetInst) {
        if (topLevelType === TOP_SELECTION_CHANGE || topLevelType === TOP_KEY_UP || topLevelType === TOP_KEY_DOWN) {
          return getInstIfValueChanged(activeElementInst);
        }
      }
      function shouldUseClickEvent(elem) {
        var nodeName = elem.nodeName;
        return nodeName && nodeName.toLowerCase() === "input" && (elem.type === "checkbox" || elem.type === "radio");
      }
      function getTargetInstForClickEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_CLICK) {
          return getInstIfValueChanged(targetInst);
        }
      }
      function getTargetInstForInputOrChangeEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_INPUT || topLevelType === TOP_CHANGE) {
          return getInstIfValueChanged(targetInst);
        }
      }
      function handleControlledInputBlur(node) {
        var state = node._wrapperState;
        if (!state || !state.controlled || node.type !== "number") {
          return;
        }
        if (!disableInputAttributeSyncing) {
          setDefaultValue(node, "number", node.value);
        }
      }
      var ChangeEventPlugin = {
        eventTypes: eventTypes$2,
        _isInputEventSupported: isInputEventSupported,
        extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
          var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;
          var getTargetInstFunc, handleEventFunc;
          if (shouldUseChangeEvent(targetNode)) {
            getTargetInstFunc = getTargetInstForChangeEvent;
          } else if (isTextInputElement(targetNode)) {
            if (isInputEventSupported) {
              getTargetInstFunc = getTargetInstForInputOrChangeEvent;
            } else {
              getTargetInstFunc = getTargetInstForInputEventPolyfill;
              handleEventFunc = handleEventsForInputEventPolyfill;
            }
          } else if (shouldUseClickEvent(targetNode)) {
            getTargetInstFunc = getTargetInstForClickEvent;
          }
          if (getTargetInstFunc) {
            var inst = getTargetInstFunc(topLevelType, targetInst);
            if (inst) {
              var event2 = createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
              return event2;
            }
          }
          if (handleEventFunc) {
            handleEventFunc(topLevelType, targetNode, targetInst);
          }
          if (topLevelType === TOP_BLUR) {
            handleControlledInputBlur(targetNode);
          }
        }
      };
      var DOMEventPluginOrder = ["ResponderEventPlugin", "SimpleEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
      var eventTypes$3 = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER]
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER]
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER]
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER]
        }
      };
      var EnterLeaveEventPlugin = {
        eventTypes: eventTypes$3,
        extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
          var isOverEvent = topLevelType === TOP_MOUSE_OVER || topLevelType === TOP_POINTER_OVER;
          var isOutEvent = topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_POINTER_OUT;
          if (isOverEvent && (eventSystemFlags & IS_REPLAYED) === 0 && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
            return null;
          }
          if (!isOutEvent && !isOverEvent) {
            return null;
          }
          var win;
          if (nativeEventTarget.window === nativeEventTarget) {
            win = nativeEventTarget;
          } else {
            var doc = nativeEventTarget.ownerDocument;
            if (doc) {
              win = doc.defaultView || doc.parentWindow;
            } else {
              win = window;
            }
          }
          var from;
          var to;
          if (isOutEvent) {
            from = targetInst;
            var related = nativeEvent.relatedTarget || nativeEvent.toElement;
            to = related ? getClosestInstanceFromNode(related) : null;
            if (to !== null) {
              var nearestMounted = getNearestMountedFiber(to);
              if (to !== nearestMounted || to.tag !== HostComponent && to.tag !== HostText) {
                to = null;
              }
            }
          } else {
            from = null;
            to = targetInst;
          }
          if (from === to) {
            return null;
          }
          var eventInterface, leaveEventType, enterEventType, eventTypePrefix;
          if (topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_MOUSE_OVER) {
            eventInterface = SyntheticMouseEvent;
            leaveEventType = eventTypes$3.mouseLeave;
            enterEventType = eventTypes$3.mouseEnter;
            eventTypePrefix = "mouse";
          } else if (topLevelType === TOP_POINTER_OUT || topLevelType === TOP_POINTER_OVER) {
            eventInterface = SyntheticPointerEvent;
            leaveEventType = eventTypes$3.pointerLeave;
            enterEventType = eventTypes$3.pointerEnter;
            eventTypePrefix = "pointer";
          }
          var fromNode = from == null ? win : getNodeFromInstance$1(from);
          var toNode = to == null ? win : getNodeFromInstance$1(to);
          var leave = eventInterface.getPooled(leaveEventType, from, nativeEvent, nativeEventTarget);
          leave.type = eventTypePrefix + "leave";
          leave.target = fromNode;
          leave.relatedTarget = toNode;
          var enter = eventInterface.getPooled(enterEventType, to, nativeEvent, nativeEventTarget);
          enter.type = eventTypePrefix + "enter";
          enter.target = toNode;
          enter.relatedTarget = fromNode;
          accumulateEnterLeaveDispatches(leave, enter, from, to);
          return [leave, enter];
        }
      };
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var is$1 = typeof Object.is === "function" ? Object.is : is;
      var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
      function shallowEqual(objA, objB) {
        if (is$1(objA, objB)) {
          return true;
        }
        if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
          return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        for (var i2 = 0; i2 < keysA.length; i2++) {
          if (!hasOwnProperty$2.call(objB, keysA[i2]) || !is$1(objA[keysA[i2]], objB[keysA[i2]])) {
            return false;
          }
        }
        return true;
      }
      var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && document.documentMode <= 11;
      var eventTypes$4 = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture"
          },
          dependencies: [TOP_BLUR, TOP_CONTEXT_MENU, TOP_DRAG_END, TOP_FOCUS, TOP_KEY_DOWN, TOP_KEY_UP, TOP_MOUSE_DOWN, TOP_MOUSE_UP, TOP_SELECTION_CHANGE]
        }
      };
      var activeElement$1 = null;
      var activeElementInst$1 = null;
      var lastSelection = null;
      var mouseDown = false;
      function getSelection$1(node) {
        if ("selectionStart" in node && hasSelectionCapabilities(node)) {
          return {
            start: node.selectionStart,
            end: node.selectionEnd
          };
        } else {
          var win = node.ownerDocument && node.ownerDocument.defaultView || window;
          var selection = win.getSelection();
          return {
            anchorNode: selection.anchorNode,
            anchorOffset: selection.anchorOffset,
            focusNode: selection.focusNode,
            focusOffset: selection.focusOffset
          };
        }
      }
      function getEventTargetDocument(eventTarget) {
        return eventTarget.window === eventTarget ? eventTarget.document : eventTarget.nodeType === DOCUMENT_NODE ? eventTarget : eventTarget.ownerDocument;
      }
      function constructSelectEvent(nativeEvent, nativeEventTarget) {
        var doc = getEventTargetDocument(nativeEventTarget);
        if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement(doc)) {
          return null;
        }
        var currentSelection = getSelection$1(activeElement$1);
        if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
          lastSelection = currentSelection;
          var syntheticEvent = SyntheticEvent.getPooled(eventTypes$4.select, activeElementInst$1, nativeEvent, nativeEventTarget);
          syntheticEvent.type = "select";
          syntheticEvent.target = activeElement$1;
          accumulateTwoPhaseDispatches(syntheticEvent);
          return syntheticEvent;
        }
        return null;
      }
      var SelectEventPlugin = {
        eventTypes: eventTypes$4,
        extractEvents: function(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
          var doc = getEventTargetDocument(nativeEventTarget);
          if (!doc || !isListeningToAllDependencies("onSelect", doc)) {
            return null;
          }
          var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;
          switch (topLevelType) {
            case TOP_FOCUS:
              if (isTextInputElement(targetNode) || targetNode.contentEditable === "true") {
                activeElement$1 = targetNode;
                activeElementInst$1 = targetInst;
                lastSelection = null;
              }
              break;
            case TOP_BLUR:
              activeElement$1 = null;
              activeElementInst$1 = null;
              lastSelection = null;
              break;
            case TOP_MOUSE_DOWN:
              mouseDown = true;
              break;
            case TOP_CONTEXT_MENU:
            case TOP_MOUSE_UP:
            case TOP_DRAG_END:
              mouseDown = false;
              return constructSelectEvent(nativeEvent, nativeEventTarget);
            case TOP_SELECTION_CHANGE:
              if (skipSelectionChangeEvent) {
                break;
              }
            case TOP_KEY_DOWN:
            case TOP_KEY_UP:
              return constructSelectEvent(nativeEvent, nativeEventTarget);
          }
          return null;
        }
      };
      injection.injectEventPluginOrder(DOMEventPluginOrder);
      setComponentTree(getFiberCurrentPropsFromNode$1, getInstanceFromNode$1, getNodeFromInstance$1);
      injection.injectEventPluginsByName({
        SimpleEventPlugin,
        EnterLeaveEventPlugin,
        ChangeEventPlugin,
        SelectEventPlugin,
        BeforeInputEventPlugin
      });
      var reactEmoji = "⚛";
      var warningEmoji = "⛔";
      var supportsUserTiming = typeof performance !== "undefined" && typeof performance.mark === "function" && typeof performance.clearMarks === "function" && typeof performance.measure === "function" && typeof performance.clearMeasures === "function";
      var currentFiber = null;
      var currentPhase = null;
      var currentPhaseFiber = null;
      var isCommitting = false;
      var hasScheduledUpdateInCurrentCommit = false;
      var hasScheduledUpdateInCurrentPhase = false;
      var commitCountInCurrentWorkLoop = 0;
      var effectCountInCurrentCommit = 0;
      var labelsInCurrentCommit = new Set();
      var formatMarkName = function(markName) {
        return reactEmoji + " " + markName;
      };
      var formatLabel = function(label, warning2) {
        var prefix = warning2 ? warningEmoji + " " : reactEmoji + " ";
        var suffix = warning2 ? " Warning: " + warning2 : "";
        return "" + prefix + label + suffix;
      };
      var beginMark = function(markName) {
        performance.mark(formatMarkName(markName));
      };
      var clearMark = function(markName) {
        performance.clearMarks(formatMarkName(markName));
      };
      var endMark = function(label, markName, warning2) {
        var formattedMarkName = formatMarkName(markName);
        var formattedLabel = formatLabel(label, warning2);
        try {
          performance.measure(formattedLabel, formattedMarkName);
        } catch (err) {
        }
        performance.clearMarks(formattedMarkName);
        performance.clearMeasures(formattedLabel);
      };
      var getFiberMarkName = function(label, debugID) {
        return label + " (#" + debugID + ")";
      };
      var getFiberLabel = function(componentName, isMounted2, phase2) {
        if (phase2 === null) {
          return componentName + " [" + (isMounted2 ? "update" : "mount") + "]";
        } else {
          return componentName + "." + phase2;
        }
      };
      var beginFiberMark = function(fiber, phase2) {
        var componentName = getComponentName(fiber.type) || "Unknown";
        var debugID = fiber._debugID;
        var isMounted2 = fiber.alternate !== null;
        var label = getFiberLabel(componentName, isMounted2, phase2);
        if (isCommitting && labelsInCurrentCommit.has(label)) {
          return false;
        }
        labelsInCurrentCommit.add(label);
        var markName = getFiberMarkName(label, debugID);
        beginMark(markName);
        return true;
      };
      var clearFiberMark = function(fiber, phase2) {
        var componentName = getComponentName(fiber.type) || "Unknown";
        var debugID = fiber._debugID;
        var isMounted2 = fiber.alternate !== null;
        var label = getFiberLabel(componentName, isMounted2, phase2);
        var markName = getFiberMarkName(label, debugID);
        clearMark(markName);
      };
      var endFiberMark = function(fiber, phase2, warning2) {
        var componentName = getComponentName(fiber.type) || "Unknown";
        var debugID = fiber._debugID;
        var isMounted2 = fiber.alternate !== null;
        var label = getFiberLabel(componentName, isMounted2, phase2);
        var markName = getFiberMarkName(label, debugID);
        endMark(label, markName, warning2);
      };
      var shouldIgnoreFiber = function(fiber) {
        switch (fiber.tag) {
          case HostRoot:
          case HostComponent:
          case HostText:
          case HostPortal:
          case Fragment:
          case ContextProvider:
          case ContextConsumer:
          case Mode:
            return true;
          default:
            return false;
        }
      };
      var clearPendingPhaseMeasurement = function() {
        if (currentPhase !== null && currentPhaseFiber !== null) {
          clearFiberMark(currentPhaseFiber, currentPhase);
        }
        currentPhaseFiber = null;
        currentPhase = null;
        hasScheduledUpdateInCurrentPhase = false;
      };
      var pauseTimers = function() {
        var fiber = currentFiber;
        while (fiber) {
          if (fiber._debugIsCurrentlyTiming) {
            endFiberMark(fiber, null, null);
          }
          fiber = fiber.return;
        }
      };
      var resumeTimersRecursively = function(fiber) {
        if (fiber.return !== null) {
          resumeTimersRecursively(fiber.return);
        }
        if (fiber._debugIsCurrentlyTiming) {
          beginFiberMark(fiber, null);
        }
      };
      var resumeTimers = function() {
        if (currentFiber !== null) {
          resumeTimersRecursively(currentFiber);
        }
      };
      function recordEffect() {
        if (enableUserTimingAPI) {
          effectCountInCurrentCommit++;
        }
      }
      function recordScheduleUpdate() {
        if (enableUserTimingAPI) {
          if (isCommitting) {
            hasScheduledUpdateInCurrentCommit = true;
          }
          if (currentPhase !== null && currentPhase !== "componentWillMount" && currentPhase !== "componentWillReceiveProps") {
            hasScheduledUpdateInCurrentPhase = true;
          }
        }
      }
      function startWorkTimer(fiber) {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
            return;
          }
          currentFiber = fiber;
          if (!beginFiberMark(fiber, null)) {
            return;
          }
          fiber._debugIsCurrentlyTiming = true;
        }
      }
      function cancelWorkTimer(fiber) {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
            return;
          }
          fiber._debugIsCurrentlyTiming = false;
          clearFiberMark(fiber, null);
        }
      }
      function stopWorkTimer(fiber) {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
            return;
          }
          currentFiber = fiber.return;
          if (!fiber._debugIsCurrentlyTiming) {
            return;
          }
          fiber._debugIsCurrentlyTiming = false;
          endFiberMark(fiber, null, null);
        }
      }
      function stopFailedWorkTimer(fiber) {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
            return;
          }
          currentFiber = fiber.return;
          if (!fiber._debugIsCurrentlyTiming) {
            return;
          }
          fiber._debugIsCurrentlyTiming = false;
          var warning2 = fiber.tag === SuspenseComponent ? "Rendering was suspended" : "An error was thrown inside this error boundary";
          endFiberMark(fiber, null, warning2);
        }
      }
      function startPhaseTimer(fiber, phase2) {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          clearPendingPhaseMeasurement();
          if (!beginFiberMark(fiber, phase2)) {
            return;
          }
          currentPhaseFiber = fiber;
          currentPhase = phase2;
        }
      }
      function stopPhaseTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          if (currentPhase !== null && currentPhaseFiber !== null) {
            var warning2 = hasScheduledUpdateInCurrentPhase ? "Scheduled a cascading update" : null;
            endFiberMark(currentPhaseFiber, currentPhase, warning2);
          }
          currentPhase = null;
          currentPhaseFiber = null;
        }
      }
      function startWorkLoopTimer(nextUnitOfWork) {
        if (enableUserTimingAPI) {
          currentFiber = nextUnitOfWork;
          if (!supportsUserTiming) {
            return;
          }
          commitCountInCurrentWorkLoop = 0;
          beginMark("(React Tree Reconciliation)");
          resumeTimers();
        }
      }
      function stopWorkLoopTimer(interruptedBy2, didCompleteRoot) {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          var warning2 = null;
          if (interruptedBy2 !== null) {
            if (interruptedBy2.tag === HostRoot) {
              warning2 = "A top-level update interrupted the previous render";
            } else {
              var componentName = getComponentName(interruptedBy2.type) || "Unknown";
              warning2 = "An update to " + componentName + " interrupted the previous render";
            }
          } else if (commitCountInCurrentWorkLoop > 1) {
            warning2 = "There were cascading updates";
          }
          commitCountInCurrentWorkLoop = 0;
          var label = didCompleteRoot ? "(React Tree Reconciliation: Completed Root)" : "(React Tree Reconciliation: Yielded)";
          pauseTimers();
          endMark(label, "(React Tree Reconciliation)", warning2);
        }
      }
      function startCommitTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          isCommitting = true;
          hasScheduledUpdateInCurrentCommit = false;
          labelsInCurrentCommit.clear();
          beginMark("(Committing Changes)");
        }
      }
      function stopCommitTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          var warning2 = null;
          if (hasScheduledUpdateInCurrentCommit) {
            warning2 = "Lifecycle hook scheduled a cascading update";
          } else if (commitCountInCurrentWorkLoop > 0) {
            warning2 = "Caused by a cascading update in earlier commit";
          }
          hasScheduledUpdateInCurrentCommit = false;
          commitCountInCurrentWorkLoop++;
          isCommitting = false;
          labelsInCurrentCommit.clear();
          endMark("(Committing Changes)", "(Committing Changes)", warning2);
        }
      }
      function startCommitSnapshotEffectsTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          effectCountInCurrentCommit = 0;
          beginMark("(Committing Snapshot Effects)");
        }
      }
      function stopCommitSnapshotEffectsTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          var count = effectCountInCurrentCommit;
          effectCountInCurrentCommit = 0;
          endMark("(Committing Snapshot Effects: " + count + " Total)", "(Committing Snapshot Effects)", null);
        }
      }
      function startCommitHostEffectsTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          effectCountInCurrentCommit = 0;
          beginMark("(Committing Host Effects)");
        }
      }
      function stopCommitHostEffectsTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          var count = effectCountInCurrentCommit;
          effectCountInCurrentCommit = 0;
          endMark("(Committing Host Effects: " + count + " Total)", "(Committing Host Effects)", null);
        }
      }
      function startCommitLifeCyclesTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          effectCountInCurrentCommit = 0;
          beginMark("(Calling Lifecycle Methods)");
        }
      }
      function stopCommitLifeCyclesTimer() {
        if (enableUserTimingAPI) {
          if (!supportsUserTiming) {
            return;
          }
          var count = effectCountInCurrentCommit;
          effectCountInCurrentCommit = 0;
          endMark("(Calling Lifecycle Methods: " + count + " Total)", "(Calling Lifecycle Methods)", null);
        }
      }
      var valueStack = [];
      var fiberStack;
      {
        fiberStack = [];
      }
      var index = -1;
      function createCursor(defaultValue) {
        return {
          current: defaultValue
        };
      }
      function pop(cursor, fiber) {
        if (index < 0) {
          {
            warningWithoutStack$1(false, "Unexpected pop.");
          }
          return;
        }
        {
          if (fiber !== fiberStack[index]) {
            warningWithoutStack$1(false, "Unexpected Fiber popped.");
          }
        }
        cursor.current = valueStack[index];
        valueStack[index] = null;
        {
          fiberStack[index] = null;
        }
        index--;
      }
      function push(cursor, value, fiber) {
        index++;
        valueStack[index] = cursor.current;
        {
          fiberStack[index] = fiber;
        }
        cursor.current = value;
      }
      var warnedAboutMissingGetChildContext;
      {
        warnedAboutMissingGetChildContext = {};
      }
      var emptyContextObject = {};
      {
        Object.freeze(emptyContextObject);
      }
      var contextStackCursor = createCursor(emptyContextObject);
      var didPerformWorkStackCursor = createCursor(false);
      var previousContext = emptyContextObject;
      function getUnmaskedContext(workInProgress2, Component, didPushOwnContextIfProvider) {
        if (disableLegacyContext) {
          return emptyContextObject;
        } else {
          if (didPushOwnContextIfProvider && isContextProvider(Component)) {
            return previousContext;
          }
          return contextStackCursor.current;
        }
      }
      function cacheContext(workInProgress2, unmaskedContext, maskedContext) {
        if (disableLegacyContext) {
          return;
        } else {
          var instance = workInProgress2.stateNode;
          instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
          instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
        }
      }
      function getMaskedContext(workInProgress2, unmaskedContext) {
        if (disableLegacyContext) {
          return emptyContextObject;
        } else {
          var type = workInProgress2.type;
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyContextObject;
          }
          var instance = workInProgress2.stateNode;
          if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
            return instance.__reactInternalMemoizedMaskedChildContext;
          }
          var context = {};
          for (var key in contextTypes) {
            context[key] = unmaskedContext[key];
          }
          {
            var name = getComponentName(type) || "Unknown";
            checkPropTypes(contextTypes, context, "context", name, getCurrentFiberStackInDev);
          }
          if (instance) {
            cacheContext(workInProgress2, unmaskedContext, context);
          }
          return context;
        }
      }
      function hasContextChanged() {
        if (disableLegacyContext) {
          return false;
        } else {
          return didPerformWorkStackCursor.current;
        }
      }
      function isContextProvider(type) {
        if (disableLegacyContext) {
          return false;
        } else {
          var childContextTypes = type.childContextTypes;
          return childContextTypes !== null && childContextTypes !== void 0;
        }
      }
      function popContext(fiber) {
        if (disableLegacyContext) {
          return;
        } else {
          pop(didPerformWorkStackCursor, fiber);
          pop(contextStackCursor, fiber);
        }
      }
      function popTopLevelContextObject(fiber) {
        if (disableLegacyContext) {
          return;
        } else {
          pop(didPerformWorkStackCursor, fiber);
          pop(contextStackCursor, fiber);
        }
      }
      function pushTopLevelContextObject(fiber, context, didChange) {
        if (disableLegacyContext) {
          return;
        } else {
          (function() {
            if (!(contextStackCursor.current === emptyContextObject)) {
              {
                throw ReactError(Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
          push(contextStackCursor, context, fiber);
          push(didPerformWorkStackCursor, didChange, fiber);
        }
      }
      function processChildContext(fiber, type, parentContext) {
        if (disableLegacyContext) {
          return parentContext;
        } else {
          var instance = fiber.stateNode;
          var childContextTypes = type.childContextTypes;
          if (typeof instance.getChildContext !== "function") {
            {
              var componentName = getComponentName(type) || "Unknown";
              if (!warnedAboutMissingGetChildContext[componentName]) {
                warnedAboutMissingGetChildContext[componentName] = true;
                warningWithoutStack$1(false, "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
              }
            }
            return parentContext;
          }
          var childContext;
          {
            setCurrentPhase("getChildContext");
          }
          startPhaseTimer(fiber, "getChildContext");
          childContext = instance.getChildContext();
          stopPhaseTimer();
          {
            setCurrentPhase(null);
          }
          for (var contextKey in childContext) {
            (function() {
              if (!(contextKey in childContextTypes)) {
                {
                  throw ReactError(Error((getComponentName(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.'));
                }
              }
            })();
          }
          {
            var name = getComponentName(type) || "Unknown";
            checkPropTypes(childContextTypes, childContext, "child context", name, getCurrentFiberStackInDev);
          }
          return _assign({}, parentContext, {}, childContext);
        }
      }
      function pushContextProvider(workInProgress2) {
        if (disableLegacyContext) {
          return false;
        } else {
          var instance = workInProgress2.stateNode;
          var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject;
          previousContext = contextStackCursor.current;
          push(contextStackCursor, memoizedMergedChildContext, workInProgress2);
          push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress2);
          return true;
        }
      }
      function invalidateContextProvider(workInProgress2, type, didChange) {
        if (disableLegacyContext) {
          return;
        } else {
          var instance = workInProgress2.stateNode;
          (function() {
            if (!instance) {
              {
                throw ReactError(Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
          if (didChange) {
            var mergedContext = processChildContext(workInProgress2, type, previousContext);
            instance.__reactInternalMemoizedMergedChildContext = mergedContext;
            pop(didPerformWorkStackCursor, workInProgress2);
            pop(contextStackCursor, workInProgress2);
            push(contextStackCursor, mergedContext, workInProgress2);
            push(didPerformWorkStackCursor, didChange, workInProgress2);
          } else {
            pop(didPerformWorkStackCursor, workInProgress2);
            push(didPerformWorkStackCursor, didChange, workInProgress2);
          }
        }
      }
      function findCurrentUnmaskedContext(fiber) {
        if (disableLegacyContext) {
          return emptyContextObject;
        } else {
          (function() {
            if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
              {
                throw ReactError(Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
          var node = fiber;
          do {
            switch (node.tag) {
              case HostRoot:
                return node.stateNode.context;
              case ClassComponent: {
                var Component = node.type;
                if (isContextProvider(Component)) {
                  return node.stateNode.__reactInternalMemoizedMergedChildContext;
                }
                break;
              }
            }
            node = node.return;
          } while (node !== null);
          (function() {
            {
              {
                throw ReactError(Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
        }
      }
      var LegacyRoot = 0;
      var BatchedRoot = 1;
      var ConcurrentRoot = 2;
      var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority;
      var Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback;
      var Scheduler_cancelCallback = Scheduler.unstable_cancelCallback;
      var Scheduler_shouldYield = Scheduler.unstable_shouldYield;
      var Scheduler_requestPaint = Scheduler.unstable_requestPaint;
      var Scheduler_now = Scheduler.unstable_now;
      var Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
      var Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority;
      var Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
      var Scheduler_NormalPriority = Scheduler.unstable_NormalPriority;
      var Scheduler_LowPriority = Scheduler.unstable_LowPriority;
      var Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;
      if (enableSchedulerTracing) {
        (function() {
          if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
            {
              throw ReactError(Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling"));
            }
          }
        })();
      }
      var fakeCallbackNode = {};
      var ImmediatePriority = 99;
      var UserBlockingPriority$2 = 98;
      var NormalPriority = 97;
      var LowPriority = 96;
      var IdlePriority = 95;
      var NoPriority = 90;
      var shouldYield = Scheduler_shouldYield;
      var requestPaint = Scheduler_requestPaint !== void 0 ? Scheduler_requestPaint : function() {
      };
      var syncQueue = null;
      var immediateQueueCallbackNode = null;
      var isFlushingSyncQueue = false;
      var initialTimeMs = Scheduler_now();
      var now = initialTimeMs < 1e4 ? Scheduler_now : function() {
        return Scheduler_now() - initialTimeMs;
      };
      function getCurrentPriorityLevel() {
        switch (Scheduler_getCurrentPriorityLevel()) {
          case Scheduler_ImmediatePriority:
            return ImmediatePriority;
          case Scheduler_UserBlockingPriority:
            return UserBlockingPriority$2;
          case Scheduler_NormalPriority:
            return NormalPriority;
          case Scheduler_LowPriority:
            return LowPriority;
          case Scheduler_IdlePriority:
            return IdlePriority;
          default:
            (function() {
              {
                {
                  throw ReactError(Error("Unknown priority level."));
                }
              }
            })();
        }
      }
      function reactPriorityToSchedulerPriority(reactPriorityLevel) {
        switch (reactPriorityLevel) {
          case ImmediatePriority:
            return Scheduler_ImmediatePriority;
          case UserBlockingPriority$2:
            return Scheduler_UserBlockingPriority;
          case NormalPriority:
            return Scheduler_NormalPriority;
          case LowPriority:
            return Scheduler_LowPriority;
          case IdlePriority:
            return Scheduler_IdlePriority;
          default:
            (function() {
              {
                {
                  throw ReactError(Error("Unknown priority level."));
                }
              }
            })();
        }
      }
      function runWithPriority$2(reactPriorityLevel, fn) {
        var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_runWithPriority(priorityLevel, fn);
      }
      function scheduleCallback(reactPriorityLevel, callback, options2) {
        var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_scheduleCallback(priorityLevel, callback, options2);
      }
      function scheduleSyncCallback(callback) {
        if (syncQueue === null) {
          syncQueue = [callback];
          immediateQueueCallbackNode = Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueueImpl);
        } else {
          syncQueue.push(callback);
        }
        return fakeCallbackNode;
      }
      function cancelCallback(callbackNode) {
        if (callbackNode !== fakeCallbackNode) {
          Scheduler_cancelCallback(callbackNode);
        }
      }
      function flushSyncCallbackQueue() {
        if (immediateQueueCallbackNode !== null) {
          var node = immediateQueueCallbackNode;
          immediateQueueCallbackNode = null;
          Scheduler_cancelCallback(node);
        }
        flushSyncCallbackQueueImpl();
      }
      function flushSyncCallbackQueueImpl() {
        if (!isFlushingSyncQueue && syncQueue !== null) {
          isFlushingSyncQueue = true;
          var i2 = 0;
          try {
            var _isSync = true;
            var queue = syncQueue;
            runWithPriority$2(ImmediatePriority, function() {
              for (; i2 < queue.length; i2++) {
                var callback = queue[i2];
                do {
                  callback = callback(_isSync);
                } while (callback !== null);
              }
            });
            syncQueue = null;
          } catch (error) {
            if (syncQueue !== null) {
              syncQueue = syncQueue.slice(i2 + 1);
            }
            Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
            throw error;
          } finally {
            isFlushingSyncQueue = false;
          }
        }
      }
      var NoMode = 0;
      var StrictMode = 1;
      var BatchedMode = 2;
      var ConcurrentMode = 4;
      var ProfileMode = 8;
      var MAX_SIGNED_31_BIT_INT = 1073741823;
      var NoWork = 0;
      var Never = 1;
      var Idle = 2;
      var Sync = MAX_SIGNED_31_BIT_INT;
      var Batched = Sync - 1;
      var UNIT_SIZE = 10;
      var MAGIC_NUMBER_OFFSET = Batched - 1;
      function msToExpirationTime(ms) {
        return MAGIC_NUMBER_OFFSET - (ms / UNIT_SIZE | 0);
      }
      function expirationTimeToMs(expirationTime) {
        return (MAGIC_NUMBER_OFFSET - expirationTime) * UNIT_SIZE;
      }
      function ceiling(num, precision) {
        return ((num / precision | 0) + 1) * precision;
      }
      function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
        return MAGIC_NUMBER_OFFSET - ceiling(MAGIC_NUMBER_OFFSET - currentTime + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE);
      }
      var LOW_PRIORITY_EXPIRATION = 5e3;
      var LOW_PRIORITY_BATCH_SIZE = 250;
      function computeAsyncExpiration(currentTime) {
        return computeExpirationBucket(currentTime, LOW_PRIORITY_EXPIRATION, LOW_PRIORITY_BATCH_SIZE);
      }
      function computeSuspenseExpiration(currentTime, timeoutMs) {
        return computeExpirationBucket(currentTime, timeoutMs, LOW_PRIORITY_BATCH_SIZE);
      }
      var HIGH_PRIORITY_EXPIRATION = 500;
      var HIGH_PRIORITY_BATCH_SIZE = 100;
      function computeInteractiveExpiration(currentTime) {
        return computeExpirationBucket(currentTime, HIGH_PRIORITY_EXPIRATION, HIGH_PRIORITY_BATCH_SIZE);
      }
      function inferPriorityFromExpirationTime(currentTime, expirationTime) {
        if (expirationTime === Sync) {
          return ImmediatePriority;
        }
        if (expirationTime === Never || expirationTime === Idle) {
          return IdlePriority;
        }
        var msUntil = expirationTimeToMs(expirationTime) - expirationTimeToMs(currentTime);
        if (msUntil <= 0) {
          return ImmediatePriority;
        }
        if (msUntil <= HIGH_PRIORITY_EXPIRATION + HIGH_PRIORITY_BATCH_SIZE) {
          return UserBlockingPriority$2;
        }
        if (msUntil <= LOW_PRIORITY_EXPIRATION + LOW_PRIORITY_BATCH_SIZE) {
          return NormalPriority;
        }
        return IdlePriority;
      }
      var lowPriorityWarningWithoutStack = function() {
      };
      {
        var printWarning = function(format) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var argIndex = 0;
          var message = "Warning: " + format.replace(/%s/g, function() {
            return args[argIndex++];
          });
          if (typeof console !== "undefined") {
            console.warn(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
        lowPriorityWarningWithoutStack = function(condition, format) {
          if (format === void 0) {
            throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");
          }
          if (!condition) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }
            printWarning.apply(void 0, [format].concat(args));
          }
        };
      }
      var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;
      var ReactStrictModeWarnings = {
        recordUnsafeLifecycleWarnings: function(fiber, instance) {
        },
        flushPendingUnsafeLifecycleWarnings: function() {
        },
        recordLegacyContextWarning: function(fiber, instance) {
        },
        flushLegacyContextWarning: function() {
        },
        discardPendingWarnings: function() {
        }
      };
      {
        var findStrictRoot = function(fiber) {
          var maybeStrictRoot = null;
          var node = fiber;
          while (node !== null) {
            if (node.mode & StrictMode) {
              maybeStrictRoot = node;
            }
            node = node.return;
          }
          return maybeStrictRoot;
        };
        var setToSortedString = function(set2) {
          var array = [];
          set2.forEach(function(value) {
            array.push(value);
          });
          return array.sort().join(", ");
        };
        var pendingComponentWillMountWarnings = [];
        var pendingUNSAFE_ComponentWillMountWarnings = [];
        var pendingComponentWillReceivePropsWarnings = [];
        var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        var pendingComponentWillUpdateWarnings = [];
        var pendingUNSAFE_ComponentWillUpdateWarnings = [];
        var didWarnAboutUnsafeLifecycles = new Set();
        ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function(fiber, instance) {
          if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
            return;
          }
          if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
            pendingComponentWillMountWarnings.push(fiber);
          }
          if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillMount === "function") {
            pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
          }
          if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
            pendingComponentWillReceivePropsWarnings.push(fiber);
          }
          if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillReceiveProps === "function") {
            pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
          }
          if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
            pendingComponentWillUpdateWarnings.push(fiber);
          }
          if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillUpdate === "function") {
            pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
          }
        };
        ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function() {
          var componentWillMountUniqueNames = new Set();
          if (pendingComponentWillMountWarnings.length > 0) {
            pendingComponentWillMountWarnings.forEach(function(fiber) {
              componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component");
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingComponentWillMountWarnings = [];
          }
          var UNSAFE_componentWillMountUniqueNames = new Set();
          if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
            pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber) {
              UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component");
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingUNSAFE_ComponentWillMountWarnings = [];
          }
          var componentWillReceivePropsUniqueNames = new Set();
          if (pendingComponentWillReceivePropsWarnings.length > 0) {
            pendingComponentWillReceivePropsWarnings.forEach(function(fiber) {
              componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component");
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingComponentWillReceivePropsWarnings = [];
          }
          var UNSAFE_componentWillReceivePropsUniqueNames = new Set();
          if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
            pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber) {
              UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component");
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
          }
          var componentWillUpdateUniqueNames = new Set();
          if (pendingComponentWillUpdateWarnings.length > 0) {
            pendingComponentWillUpdateWarnings.forEach(function(fiber) {
              componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component");
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingComponentWillUpdateWarnings = [];
          }
          var UNSAFE_componentWillUpdateUniqueNames = new Set();
          if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
            pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber) {
              UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component");
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingUNSAFE_ComponentWillUpdateWarnings = [];
          }
          if (UNSAFE_componentWillMountUniqueNames.size > 0) {
            var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
            warningWithoutStack$1(false, "Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", sortedNames);
          }
          if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
            var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);
            warningWithoutStack$1(false, "Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n\nPlease update the following components: %s", _sortedNames);
          }
          if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
            var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);
            warningWithoutStack$1(false, "Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", _sortedNames2);
          }
          if (componentWillMountUniqueNames.size > 0) {
            var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);
            lowPriorityWarningWithoutStack$1(false, "componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames3);
          }
          if (componentWillReceivePropsUniqueNames.size > 0) {
            var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);
            lowPriorityWarningWithoutStack$1(false, "componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames4);
          }
          if (componentWillUpdateUniqueNames.size > 0) {
            var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);
            lowPriorityWarningWithoutStack$1(false, "componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames5);
          }
        };
        var pendingLegacyContextWarning = new Map();
        var didWarnAboutLegacyContext = new Set();
        ReactStrictModeWarnings.recordLegacyContextWarning = function(fiber, instance) {
          var strictRoot = findStrictRoot(fiber);
          if (strictRoot === null) {
            warningWithoutStack$1(false, "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
            return;
          }
          if (didWarnAboutLegacyContext.has(fiber.type)) {
            return;
          }
          var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
          if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === "function") {
            if (warningsForRoot === void 0) {
              warningsForRoot = [];
              pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
            }
            warningsForRoot.push(fiber);
          }
        };
        ReactStrictModeWarnings.flushLegacyContextWarning = function() {
          pendingLegacyContextWarning.forEach(function(fiberArray, strictRoot) {
            var uniqueNames = new Set();
            fiberArray.forEach(function(fiber) {
              uniqueNames.add(getComponentName(fiber.type) || "Component");
              didWarnAboutLegacyContext.add(fiber.type);
            });
            var sortedNames = setToSortedString(uniqueNames);
            var strictRootComponentStack = getStackByFiberInDevAndProd(strictRoot);
            warningWithoutStack$1(false, "Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://fb.me/react-legacy-context%s", sortedNames, strictRootComponentStack);
          });
        };
        ReactStrictModeWarnings.discardPendingWarnings = function() {
          pendingComponentWillMountWarnings = [];
          pendingUNSAFE_ComponentWillMountWarnings = [];
          pendingComponentWillReceivePropsWarnings = [];
          pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
          pendingComponentWillUpdateWarnings = [];
          pendingUNSAFE_ComponentWillUpdateWarnings = [];
          pendingLegacyContextWarning = new Map();
        };
      }
      var resolveFamily = null;
      var failedBoundaries = null;
      var setRefreshHandler = function(handler) {
        {
          resolveFamily = handler;
        }
      };
      function resolveFunctionForHotReloading(type) {
        {
          if (resolveFamily === null) {
            return type;
          }
          var family = resolveFamily(type);
          if (family === void 0) {
            return type;
          }
          return family.current;
        }
      }
      function resolveClassForHotReloading(type) {
        return resolveFunctionForHotReloading(type);
      }
      function resolveForwardRefForHotReloading(type) {
        {
          if (resolveFamily === null) {
            return type;
          }
          var family = resolveFamily(type);
          if (family === void 0) {
            if (type !== null && type !== void 0 && typeof type.render === "function") {
              var currentRender = resolveFunctionForHotReloading(type.render);
              if (type.render !== currentRender) {
                var syntheticType = {
                  $$typeof: REACT_FORWARD_REF_TYPE,
                  render: currentRender
                };
                if (type.displayName !== void 0) {
                  syntheticType.displayName = type.displayName;
                }
                return syntheticType;
              }
            }
            return type;
          }
          return family.current;
        }
      }
      function isCompatibleFamilyForHotReloading(fiber, element) {
        {
          if (resolveFamily === null) {
            return false;
          }
          var prevType = fiber.elementType;
          var nextType = element.type;
          var needsCompareFamilies = false;
          var $$typeofNextType = typeof nextType === "object" && nextType !== null ? nextType.$$typeof : null;
          switch (fiber.tag) {
            case ClassComponent: {
              if (typeof nextType === "function") {
                needsCompareFamilies = true;
              }
              break;
            }
            case FunctionComponent: {
              if (typeof nextType === "function") {
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                needsCompareFamilies = true;
              }
              break;
            }
            case ForwardRef: {
              if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                needsCompareFamilies = true;
              }
              break;
            }
            case MemoComponent:
            case SimpleMemoComponent: {
              if ($$typeofNextType === REACT_MEMO_TYPE) {
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                needsCompareFamilies = true;
              }
              break;
            }
            default:
              return false;
          }
          if (needsCompareFamilies) {
            var prevFamily = resolveFamily(prevType);
            if (prevFamily !== void 0 && prevFamily === resolveFamily(nextType)) {
              return true;
            }
          }
          return false;
        }
      }
      function markFailedErrorBoundaryForHotReloading(fiber) {
        {
          if (resolveFamily === null) {
            return;
          }
          if (typeof WeakSet !== "function") {
            return;
          }
          if (failedBoundaries === null) {
            failedBoundaries = new WeakSet();
          }
          failedBoundaries.add(fiber);
        }
      }
      var scheduleRefresh = function(root2, update) {
        {
          if (resolveFamily === null) {
            return;
          }
          var staleFamilies = update.staleFamilies, updatedFamilies = update.updatedFamilies;
          flushPassiveEffects();
          flushSync(function() {
            scheduleFibersWithFamiliesRecursively(root2.current, updatedFamilies, staleFamilies);
          });
        }
      };
      var scheduleRoot = function(root2, element) {
        {
          if (root2.context !== emptyContextObject) {
            return;
          }
          flushPassiveEffects();
          updateContainerAtExpirationTime(element, root2, null, Sync, null);
        }
      };
      function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
        {
          var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
          var candidateType = null;
          switch (tag) {
            case FunctionComponent:
            case SimpleMemoComponent:
            case ClassComponent:
              candidateType = type;
              break;
            case ForwardRef:
              candidateType = type.render;
              break;
            default:
              break;
          }
          if (resolveFamily === null) {
            throw new Error("Expected resolveFamily to be set during hot reload.");
          }
          var needsRender = false;
          var needsRemount = false;
          if (candidateType !== null) {
            var family = resolveFamily(candidateType);
            if (family !== void 0) {
              if (staleFamilies.has(family)) {
                needsRemount = true;
              } else if (updatedFamilies.has(family)) {
                if (tag === ClassComponent) {
                  needsRemount = true;
                } else {
                  needsRender = true;
                }
              }
            }
          }
          if (failedBoundaries !== null) {
            if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
              needsRemount = true;
            }
          }
          if (needsRemount) {
            fiber._debugNeedsRemount = true;
          }
          if (needsRemount || needsRender) {
            scheduleWork(fiber, Sync);
          }
          if (child !== null && !needsRemount) {
            scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
          }
          if (sibling !== null) {
            scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
          }
        }
      }
      var findHostInstancesForRefresh = function(root2, families) {
        {
          var hostInstances = new Set();
          var types = new Set(families.map(function(family) {
            return family.current;
          }));
          findHostInstancesForMatchingFibersRecursively(root2.current, types, hostInstances);
          return hostInstances;
        }
      };
      function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
        {
          var child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
          var candidateType = null;
          switch (tag) {
            case FunctionComponent:
            case SimpleMemoComponent:
            case ClassComponent:
              candidateType = type;
              break;
            case ForwardRef:
              candidateType = type.render;
              break;
            default:
              break;
          }
          var didMatch = false;
          if (candidateType !== null) {
            if (types.has(candidateType)) {
              didMatch = true;
            }
          }
          if (didMatch) {
            findHostInstancesForFiberShallowly(fiber, hostInstances);
          } else {
            if (child !== null) {
              findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
            }
          }
          if (sibling !== null) {
            findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
          }
        }
      }
      function findHostInstancesForFiberShallowly(fiber, hostInstances) {
        {
          var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
          if (foundHostInstances) {
            return;
          }
          var node = fiber;
          while (true) {
            switch (node.tag) {
              case HostComponent:
                hostInstances.add(node.stateNode);
                return;
              case HostPortal:
                hostInstances.add(node.stateNode.containerInfo);
                return;
              case HostRoot:
                hostInstances.add(node.stateNode.containerInfo);
                return;
            }
            if (node.return === null) {
              throw new Error("Expected to reach root first.");
            }
            node = node.return;
          }
        }
      }
      function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
        {
          var node = fiber;
          var foundHostInstances = false;
          while (true) {
            if (node.tag === HostComponent) {
              foundHostInstances = true;
              hostInstances.add(node.stateNode);
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === fiber) {
              return foundHostInstances;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === fiber) {
                return foundHostInstances;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        return false;
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          var props = _assign({}, baseProps);
          var defaultProps = Component.defaultProps;
          for (var propName in defaultProps) {
            if (props[propName] === void 0) {
              props[propName] = defaultProps[propName];
            }
          }
          return props;
        }
        return baseProps;
      }
      function readLazyComponentType(lazyComponent) {
        initializeLazyComponentType(lazyComponent);
        if (lazyComponent._status !== Resolved) {
          throw lazyComponent._result;
        }
        return lazyComponent._result;
      }
      var valueCursor = createCursor(null);
      var rendererSigil;
      {
        rendererSigil = {};
      }
      var currentlyRenderingFiber = null;
      var lastContextDependency = null;
      var lastContextWithAllBitsObserved = null;
      var isDisallowedContextReadInDEV = false;
      function resetContextDependencies() {
        currentlyRenderingFiber = null;
        lastContextDependency = null;
        lastContextWithAllBitsObserved = null;
        {
          isDisallowedContextReadInDEV = false;
        }
      }
      function enterDisallowedContextReadInDEV() {
        {
          isDisallowedContextReadInDEV = true;
        }
      }
      function exitDisallowedContextReadInDEV() {
        {
          isDisallowedContextReadInDEV = false;
        }
      }
      function pushProvider(providerFiber, nextValue) {
        var context = providerFiber.type._context;
        if (isPrimaryRenderer) {
          push(valueCursor, context._currentValue, providerFiber);
          context._currentValue = nextValue;
          {
            !(context._currentRenderer === void 0 || context._currentRenderer === null || context._currentRenderer === rendererSigil) ? warningWithoutStack$1(false, "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.") : void 0;
            context._currentRenderer = rendererSigil;
          }
        } else {
          push(valueCursor, context._currentValue2, providerFiber);
          context._currentValue2 = nextValue;
          {
            !(context._currentRenderer2 === void 0 || context._currentRenderer2 === null || context._currentRenderer2 === rendererSigil) ? warningWithoutStack$1(false, "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.") : void 0;
            context._currentRenderer2 = rendererSigil;
          }
        }
      }
      function popProvider(providerFiber) {
        var currentValue = valueCursor.current;
        pop(valueCursor, providerFiber);
        var context = providerFiber.type._context;
        if (isPrimaryRenderer) {
          context._currentValue = currentValue;
        } else {
          context._currentValue2 = currentValue;
        }
      }
      function calculateChangedBits(context, newValue, oldValue) {
        if (is$1(oldValue, newValue)) {
          return 0;
        } else {
          var changedBits = typeof context._calculateChangedBits === "function" ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          {
            !((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits) ? warning$1(false, "calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", changedBits) : void 0;
          }
          return changedBits | 0;
        }
      }
      function scheduleWorkOnParentPath(parent, renderExpirationTime2) {
        var node = parent;
        while (node !== null) {
          var alternate = node.alternate;
          if (node.childExpirationTime < renderExpirationTime2) {
            node.childExpirationTime = renderExpirationTime2;
            if (alternate !== null && alternate.childExpirationTime < renderExpirationTime2) {
              alternate.childExpirationTime = renderExpirationTime2;
            }
          } else if (alternate !== null && alternate.childExpirationTime < renderExpirationTime2) {
            alternate.childExpirationTime = renderExpirationTime2;
          } else {
            break;
          }
          node = node.return;
        }
      }
      function propagateContextChange(workInProgress2, context, changedBits, renderExpirationTime2) {
        var fiber = workInProgress2.child;
        if (fiber !== null) {
          fiber.return = workInProgress2;
        }
        while (fiber !== null) {
          var nextFiber = void 0;
          var list = fiber.dependencies;
          if (list !== null) {
            nextFiber = fiber.child;
            var dependency = list.firstContext;
            while (dependency !== null) {
              if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
                if (fiber.tag === ClassComponent) {
                  var update = createUpdate(renderExpirationTime2, null);
                  update.tag = ForceUpdate;
                  enqueueUpdate(fiber, update);
                }
                if (fiber.expirationTime < renderExpirationTime2) {
                  fiber.expirationTime = renderExpirationTime2;
                }
                var alternate = fiber.alternate;
                if (alternate !== null && alternate.expirationTime < renderExpirationTime2) {
                  alternate.expirationTime = renderExpirationTime2;
                }
                scheduleWorkOnParentPath(fiber.return, renderExpirationTime2);
                if (list.expirationTime < renderExpirationTime2) {
                  list.expirationTime = renderExpirationTime2;
                }
                break;
              }
              dependency = dependency.next;
            }
          } else if (fiber.tag === ContextProvider) {
            nextFiber = fiber.type === workInProgress2.type ? null : fiber.child;
          } else if (enableSuspenseServerRenderer && fiber.tag === DehydratedFragment) {
            var parentSuspense = fiber.return;
            (function() {
              if (!(parentSuspense !== null)) {
                {
                  throw ReactError(Error("We just came from a parent so we must have had a parent. This is a bug in React."));
                }
              }
            })();
            if (parentSuspense.expirationTime < renderExpirationTime2) {
              parentSuspense.expirationTime = renderExpirationTime2;
            }
            var _alternate = parentSuspense.alternate;
            if (_alternate !== null && _alternate.expirationTime < renderExpirationTime2) {
              _alternate.expirationTime = renderExpirationTime2;
            }
            scheduleWorkOnParentPath(parentSuspense, renderExpirationTime2);
            nextFiber = fiber.sibling;
          } else {
            nextFiber = fiber.child;
          }
          if (nextFiber !== null) {
            nextFiber.return = fiber;
          } else {
            nextFiber = fiber;
            while (nextFiber !== null) {
              if (nextFiber === workInProgress2) {
                nextFiber = null;
                break;
              }
              var sibling = nextFiber.sibling;
              if (sibling !== null) {
                sibling.return = nextFiber.return;
                nextFiber = sibling;
                break;
              }
              nextFiber = nextFiber.return;
            }
          }
          fiber = nextFiber;
        }
      }
      function prepareToReadContext(workInProgress2, renderExpirationTime2) {
        currentlyRenderingFiber = workInProgress2;
        lastContextDependency = null;
        lastContextWithAllBitsObserved = null;
        var dependencies = workInProgress2.dependencies;
        if (dependencies !== null) {
          var firstContext = dependencies.firstContext;
          if (firstContext !== null) {
            if (dependencies.expirationTime >= renderExpirationTime2) {
              markWorkInProgressReceivedUpdate();
            }
            dependencies.firstContext = null;
          }
        }
      }
      function readContext(context, observedBits) {
        {
          !!isDisallowedContextReadInDEV ? warning$1(false, "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().") : void 0;
        }
        if (lastContextWithAllBitsObserved === context) {
        } else if (observedBits === false || observedBits === 0) {
        } else {
          var resolvedObservedBits;
          if (typeof observedBits !== "number" || observedBits === MAX_SIGNED_31_BIT_INT) {
            lastContextWithAllBitsObserved = context;
            resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
          } else {
            resolvedObservedBits = observedBits;
          }
          var contextItem = {
            context,
            observedBits: resolvedObservedBits,
            next: null
          };
          if (lastContextDependency === null) {
            (function() {
              if (!(currentlyRenderingFiber !== null)) {
                {
                  throw ReactError(Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."));
                }
              }
            })();
            lastContextDependency = contextItem;
            currentlyRenderingFiber.dependencies = {
              expirationTime: NoWork,
              firstContext: contextItem,
              responders: null
            };
          } else {
            lastContextDependency = lastContextDependency.next = contextItem;
          }
        }
        return isPrimaryRenderer ? context._currentValue : context._currentValue2;
      }
      var UpdateState = 0;
      var ReplaceState = 1;
      var ForceUpdate = 2;
      var CaptureUpdate = 3;
      var hasForceUpdate = false;
      var didWarnUpdateInsideUpdate;
      var currentlyProcessingQueue;
      {
        didWarnUpdateInsideUpdate = false;
        currentlyProcessingQueue = null;
      }
      function createUpdateQueue(baseState) {
        var queue = {
          baseState,
          firstUpdate: null,
          lastUpdate: null,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null
        };
        return queue;
      }
      function cloneUpdateQueue(currentQueue) {
        var queue = {
          baseState: currentQueue.baseState,
          firstUpdate: currentQueue.firstUpdate,
          lastUpdate: currentQueue.lastUpdate,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null
        };
        return queue;
      }
      function createUpdate(expirationTime, suspenseConfig) {
        var update = {
          expirationTime,
          suspenseConfig,
          tag: UpdateState,
          payload: null,
          callback: null,
          next: null,
          nextEffect: null
        };
        {
          update.priority = getCurrentPriorityLevel();
        }
        return update;
      }
      function appendUpdateToQueue(queue, update) {
        if (queue.lastUpdate === null) {
          queue.firstUpdate = queue.lastUpdate = update;
        } else {
          queue.lastUpdate.next = update;
          queue.lastUpdate = update;
        }
      }
      function enqueueUpdate(fiber, update) {
        var alternate = fiber.alternate;
        var queue1;
        var queue2;
        if (alternate === null) {
          queue1 = fiber.updateQueue;
          queue2 = null;
          if (queue1 === null) {
            queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
          }
        } else {
          queue1 = fiber.updateQueue;
          queue2 = alternate.updateQueue;
          if (queue1 === null) {
            if (queue2 === null) {
              queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
              queue2 = alternate.updateQueue = createUpdateQueue(alternate.memoizedState);
            } else {
              queue1 = fiber.updateQueue = cloneUpdateQueue(queue2);
            }
          } else {
            if (queue2 === null) {
              queue2 = alternate.updateQueue = cloneUpdateQueue(queue1);
            } else {
            }
          }
        }
        if (queue2 === null || queue1 === queue2) {
          appendUpdateToQueue(queue1, update);
        } else {
          if (queue1.lastUpdate === null || queue2.lastUpdate === null) {
            appendUpdateToQueue(queue1, update);
            appendUpdateToQueue(queue2, update);
          } else {
            appendUpdateToQueue(queue1, update);
            queue2.lastUpdate = update;
          }
        }
        {
          if (fiber.tag === ClassComponent && (currentlyProcessingQueue === queue1 || queue2 !== null && currentlyProcessingQueue === queue2) && !didWarnUpdateInsideUpdate) {
            warningWithoutStack$1(false, "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.");
            didWarnUpdateInsideUpdate = true;
          }
        }
      }
      function enqueueCapturedUpdate(workInProgress2, update) {
        var workInProgressQueue = workInProgress2.updateQueue;
        if (workInProgressQueue === null) {
          workInProgressQueue = workInProgress2.updateQueue = createUpdateQueue(workInProgress2.memoizedState);
        } else {
          workInProgressQueue = ensureWorkInProgressQueueIsAClone(workInProgress2, workInProgressQueue);
        }
        if (workInProgressQueue.lastCapturedUpdate === null) {
          workInProgressQueue.firstCapturedUpdate = workInProgressQueue.lastCapturedUpdate = update;
        } else {
          workInProgressQueue.lastCapturedUpdate.next = update;
          workInProgressQueue.lastCapturedUpdate = update;
        }
      }
      function ensureWorkInProgressQueueIsAClone(workInProgress2, queue) {
        var current2 = workInProgress2.alternate;
        if (current2 !== null) {
          if (queue === current2.updateQueue) {
            queue = workInProgress2.updateQueue = cloneUpdateQueue(queue);
          }
        }
        return queue;
      }
      function getStateFromUpdate(workInProgress2, queue, update, prevState, nextProps, instance) {
        switch (update.tag) {
          case ReplaceState: {
            var payload = update.payload;
            if (typeof payload === "function") {
              {
                enterDisallowedContextReadInDEV();
                if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress2.mode & StrictMode) {
                  payload.call(instance, prevState, nextProps);
                }
              }
              var nextState = payload.call(instance, prevState, nextProps);
              {
                exitDisallowedContextReadInDEV();
              }
              return nextState;
            }
            return payload;
          }
          case CaptureUpdate: {
            workInProgress2.effectTag = workInProgress2.effectTag & ~ShouldCapture | DidCapture;
          }
          case UpdateState: {
            var _payload = update.payload;
            var partialState;
            if (typeof _payload === "function") {
              {
                enterDisallowedContextReadInDEV();
                if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress2.mode & StrictMode) {
                  _payload.call(instance, prevState, nextProps);
                }
              }
              partialState = _payload.call(instance, prevState, nextProps);
              {
                exitDisallowedContextReadInDEV();
              }
            } else {
              partialState = _payload;
            }
            if (partialState === null || partialState === void 0) {
              return prevState;
            }
            return _assign({}, prevState, partialState);
          }
          case ForceUpdate: {
            hasForceUpdate = true;
            return prevState;
          }
        }
        return prevState;
      }
      function processUpdateQueue(workInProgress2, queue, props, instance, renderExpirationTime2) {
        hasForceUpdate = false;
        queue = ensureWorkInProgressQueueIsAClone(workInProgress2, queue);
        {
          currentlyProcessingQueue = queue;
        }
        var newBaseState = queue.baseState;
        var newFirstUpdate = null;
        var newExpirationTime = NoWork;
        var update = queue.firstUpdate;
        var resultState = newBaseState;
        while (update !== null) {
          var updateExpirationTime = update.expirationTime;
          if (updateExpirationTime < renderExpirationTime2) {
            if (newFirstUpdate === null) {
              newFirstUpdate = update;
              newBaseState = resultState;
            }
            if (newExpirationTime < updateExpirationTime) {
              newExpirationTime = updateExpirationTime;
            }
          } else {
            markRenderEventTimeAndConfig(updateExpirationTime, update.suspenseConfig);
            resultState = getStateFromUpdate(workInProgress2, queue, update, resultState, props, instance);
            var callback = update.callback;
            if (callback !== null) {
              workInProgress2.effectTag |= Callback;
              update.nextEffect = null;
              if (queue.lastEffect === null) {
                queue.firstEffect = queue.lastEffect = update;
              } else {
                queue.lastEffect.nextEffect = update;
                queue.lastEffect = update;
              }
            }
          }
          update = update.next;
        }
        var newFirstCapturedUpdate = null;
        update = queue.firstCapturedUpdate;
        while (update !== null) {
          var _updateExpirationTime = update.expirationTime;
          if (_updateExpirationTime < renderExpirationTime2) {
            if (newFirstCapturedUpdate === null) {
              newFirstCapturedUpdate = update;
              if (newFirstUpdate === null) {
                newBaseState = resultState;
              }
            }
            if (newExpirationTime < _updateExpirationTime) {
              newExpirationTime = _updateExpirationTime;
            }
          } else {
            resultState = getStateFromUpdate(workInProgress2, queue, update, resultState, props, instance);
            var _callback = update.callback;
            if (_callback !== null) {
              workInProgress2.effectTag |= Callback;
              update.nextEffect = null;
              if (queue.lastCapturedEffect === null) {
                queue.firstCapturedEffect = queue.lastCapturedEffect = update;
              } else {
                queue.lastCapturedEffect.nextEffect = update;
                queue.lastCapturedEffect = update;
              }
            }
          }
          update = update.next;
        }
        if (newFirstUpdate === null) {
          queue.lastUpdate = null;
        }
        if (newFirstCapturedUpdate === null) {
          queue.lastCapturedUpdate = null;
        } else {
          workInProgress2.effectTag |= Callback;
        }
        if (newFirstUpdate === null && newFirstCapturedUpdate === null) {
          newBaseState = resultState;
        }
        queue.baseState = newBaseState;
        queue.firstUpdate = newFirstUpdate;
        queue.firstCapturedUpdate = newFirstCapturedUpdate;
        markUnprocessedUpdateTime(newExpirationTime);
        workInProgress2.expirationTime = newExpirationTime;
        workInProgress2.memoizedState = resultState;
        {
          currentlyProcessingQueue = null;
        }
      }
      function callCallback(callback, context) {
        (function() {
          if (!(typeof callback === "function")) {
            {
              throw ReactError(Error("Invalid argument passed as callback. Expected a function. Instead received: " + callback));
            }
          }
        })();
        callback.call(context);
      }
      function resetHasForceUpdateBeforeProcessing() {
        hasForceUpdate = false;
      }
      function checkHasForceUpdateAfterProcessing() {
        return hasForceUpdate;
      }
      function commitUpdateQueue(finishedWork, finishedQueue, instance, renderExpirationTime2) {
        if (finishedQueue.firstCapturedUpdate !== null) {
          if (finishedQueue.lastUpdate !== null) {
            finishedQueue.lastUpdate.next = finishedQueue.firstCapturedUpdate;
            finishedQueue.lastUpdate = finishedQueue.lastCapturedUpdate;
          }
          finishedQueue.firstCapturedUpdate = finishedQueue.lastCapturedUpdate = null;
        }
        commitUpdateEffects(finishedQueue.firstEffect, instance);
        finishedQueue.firstEffect = finishedQueue.lastEffect = null;
        commitUpdateEffects(finishedQueue.firstCapturedEffect, instance);
        finishedQueue.firstCapturedEffect = finishedQueue.lastCapturedEffect = null;
      }
      function commitUpdateEffects(effect, instance) {
        while (effect !== null) {
          var callback = effect.callback;
          if (callback !== null) {
            effect.callback = null;
            callCallback(callback, instance);
          }
          effect = effect.nextEffect;
        }
      }
      var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
      function requestCurrentSuspenseConfig() {
        return ReactCurrentBatchConfig.suspense;
      }
      var fakeInternalInstance = {};
      var isArray$1 = Array.isArray;
      var emptyRefsObject = new React10.Component().refs;
      var didWarnAboutStateAssignmentForComponent;
      var didWarnAboutUninitializedState;
      var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
      var didWarnAboutLegacyLifecyclesAndDerivedState;
      var didWarnAboutUndefinedDerivedState;
      var warnOnUndefinedDerivedState;
      var warnOnInvalidCallback$1;
      var didWarnAboutDirectlyAssigningPropsToState;
      var didWarnAboutContextTypeAndContextTypes;
      var didWarnAboutInvalidateContextType;
      {
        didWarnAboutStateAssignmentForComponent = new Set();
        didWarnAboutUninitializedState = new Set();
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
        didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
        didWarnAboutDirectlyAssigningPropsToState = new Set();
        didWarnAboutUndefinedDerivedState = new Set();
        didWarnAboutContextTypeAndContextTypes = new Set();
        didWarnAboutInvalidateContextType = new Set();
        var didWarnOnInvalidCallback = new Set();
        warnOnInvalidCallback$1 = function(callback, callerName) {
          if (callback === null || typeof callback === "function") {
            return;
          }
          var key = callerName + "_" + callback;
          if (!didWarnOnInvalidCallback.has(key)) {
            didWarnOnInvalidCallback.add(key);
            warningWithoutStack$1(false, "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
          }
        };
        warnOnUndefinedDerivedState = function(type, partialState) {
          if (partialState === void 0) {
            var componentName = getComponentName(type) || "Component";
            if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
              didWarnAboutUndefinedDerivedState.add(componentName);
              warningWithoutStack$1(false, "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
            }
          }
        };
        Object.defineProperty(fakeInternalInstance, "_processChildContext", {
          enumerable: false,
          value: function() {
            (function() {
              {
                {
                  throw ReactError(Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."));
                }
              }
            })();
          }
        });
        Object.freeze(fakeInternalInstance);
      }
      function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
        var prevState = workInProgress2.memoizedState;
        {
          if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress2.mode & StrictMode) {
            getDerivedStateFromProps(nextProps, prevState);
          }
        }
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        {
          warnOnUndefinedDerivedState(ctor, partialState);
        }
        var memoizedState = partialState === null || partialState === void 0 ? prevState : _assign({}, prevState, partialState);
        workInProgress2.memoizedState = memoizedState;
        var updateQueue = workInProgress2.updateQueue;
        if (updateQueue !== null && workInProgress2.expirationTime === NoWork) {
          updateQueue.baseState = memoizedState;
        }
      }
      var classComponentUpdater = {
        isMounted,
        enqueueSetState: function(inst, payload, callback) {
          var fiber = get(inst);
          var currentTime = requestCurrentTime();
          var suspenseConfig = requestCurrentSuspenseConfig();
          var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
          var update = createUpdate(expirationTime, suspenseConfig);
          update.payload = payload;
          if (callback !== void 0 && callback !== null) {
            {
              warnOnInvalidCallback$1(callback, "setState");
            }
            update.callback = callback;
          }
          enqueueUpdate(fiber, update);
          scheduleWork(fiber, expirationTime);
        },
        enqueueReplaceState: function(inst, payload, callback) {
          var fiber = get(inst);
          var currentTime = requestCurrentTime();
          var suspenseConfig = requestCurrentSuspenseConfig();
          var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
          var update = createUpdate(expirationTime, suspenseConfig);
          update.tag = ReplaceState;
          update.payload = payload;
          if (callback !== void 0 && callback !== null) {
            {
              warnOnInvalidCallback$1(callback, "replaceState");
            }
            update.callback = callback;
          }
          enqueueUpdate(fiber, update);
          scheduleWork(fiber, expirationTime);
        },
        enqueueForceUpdate: function(inst, callback) {
          var fiber = get(inst);
          var currentTime = requestCurrentTime();
          var suspenseConfig = requestCurrentSuspenseConfig();
          var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
          var update = createUpdate(expirationTime, suspenseConfig);
          update.tag = ForceUpdate;
          if (callback !== void 0 && callback !== null) {
            {
              warnOnInvalidCallback$1(callback, "forceUpdate");
            }
            update.callback = callback;
          }
          enqueueUpdate(fiber, update);
          scheduleWork(fiber, expirationTime);
        }
      };
      function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
        var instance = workInProgress2.stateNode;
        if (typeof instance.shouldComponentUpdate === "function") {
          startPhaseTimer(workInProgress2, "shouldComponentUpdate");
          var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
          stopPhaseTimer();
          {
            !(shouldUpdate !== void 0) ? warningWithoutStack$1(false, "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", getComponentName(ctor) || "Component") : void 0;
          }
          return shouldUpdate;
        }
        if (ctor.prototype && ctor.prototype.isPureReactComponent) {
          return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
        }
        return true;
      }
      function checkClassInstance(workInProgress2, ctor, newProps) {
        var instance = workInProgress2.stateNode;
        {
          var name = getComponentName(ctor) || "Component";
          var renderPresent = instance.render;
          if (!renderPresent) {
            if (ctor.prototype && typeof ctor.prototype.render === "function") {
              warningWithoutStack$1(false, "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
            } else {
              warningWithoutStack$1(false, "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
            }
          }
          var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
          !noGetInitialStateOnES6 ? warningWithoutStack$1(false, "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name) : void 0;
          var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
          !noGetDefaultPropsOnES6 ? warningWithoutStack$1(false, "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name) : void 0;
          var noInstancePropTypes = !instance.propTypes;
          !noInstancePropTypes ? warningWithoutStack$1(false, "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name) : void 0;
          var noInstanceContextType = !instance.contextType;
          !noInstanceContextType ? warningWithoutStack$1(false, "contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name) : void 0;
          if (disableLegacyContext) {
            if (ctor.childContextTypes) {
              warningWithoutStack$1(false, "%s uses the legacy childContextTypes API which is no longer supported. Use React.createContext() instead.", name);
            }
            if (ctor.contextTypes) {
              warningWithoutStack$1(false, "%s uses the legacy contextTypes API which is no longer supported. Use React.createContext() with static contextType instead.", name);
            }
          } else {
            var noInstanceContextTypes = !instance.contextTypes;
            !noInstanceContextTypes ? warningWithoutStack$1(false, "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name) : void 0;
            if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
              didWarnAboutContextTypeAndContextTypes.add(ctor);
              warningWithoutStack$1(false, "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
            }
          }
          var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== "function";
          !noComponentShouldUpdate ? warningWithoutStack$1(false, "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name) : void 0;
          if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
            warningWithoutStack$1(false, "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentName(ctor) || "A pure component");
          }
          var noComponentDidUnmount = typeof instance.componentDidUnmount !== "function";
          !noComponentDidUnmount ? warningWithoutStack$1(false, "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name) : void 0;
          var noComponentDidReceiveProps = typeof instance.componentDidReceiveProps !== "function";
          !noComponentDidReceiveProps ? warningWithoutStack$1(false, "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name) : void 0;
          var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== "function";
          !noComponentWillRecieveProps ? warningWithoutStack$1(false, "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name) : void 0;
          var noUnsafeComponentWillRecieveProps = typeof instance.UNSAFE_componentWillRecieveProps !== "function";
          !noUnsafeComponentWillRecieveProps ? warningWithoutStack$1(false, "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name) : void 0;
          var hasMutatedProps = instance.props !== newProps;
          !(instance.props === void 0 || !hasMutatedProps) ? warningWithoutStack$1(false, "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name) : void 0;
          var noInstanceDefaultProps = !instance.defaultProps;
          !noInstanceDefaultProps ? warningWithoutStack$1(false, "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name) : void 0;
          if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
            warningWithoutStack$1(false, "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentName(ctor));
          }
          var noInstanceGetDerivedStateFromProps = typeof instance.getDerivedStateFromProps !== "function";
          !noInstanceGetDerivedStateFromProps ? warningWithoutStack$1(false, "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name) : void 0;
          var noInstanceGetDerivedStateFromCatch = typeof instance.getDerivedStateFromError !== "function";
          !noInstanceGetDerivedStateFromCatch ? warningWithoutStack$1(false, "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name) : void 0;
          var noStaticGetSnapshotBeforeUpdate = typeof ctor.getSnapshotBeforeUpdate !== "function";
          !noStaticGetSnapshotBeforeUpdate ? warningWithoutStack$1(false, "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name) : void 0;
          var _state = instance.state;
          if (_state && (typeof _state !== "object" || isArray$1(_state))) {
            warningWithoutStack$1(false, "%s.state: must be set to an object or null", name);
          }
          if (typeof instance.getChildContext === "function") {
            !(typeof ctor.childContextTypes === "object") ? warningWithoutStack$1(false, "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name) : void 0;
          }
        }
      }
      function adoptClassInstance(workInProgress2, instance) {
        instance.updater = classComponentUpdater;
        workInProgress2.stateNode = instance;
        set(instance, workInProgress2);
        {
          instance._reactInternalInstance = fakeInternalInstance;
        }
      }
      function constructClassInstance(workInProgress2, ctor, props, renderExpirationTime2) {
        var isLegacyContextConsumer = false;
        var unmaskedContext = emptyContextObject;
        var context = emptyContextObject;
        var contextType = ctor.contextType;
        {
          if ("contextType" in ctor) {
            var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
            if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
              didWarnAboutInvalidateContextType.add(ctor);
              var addendum = "";
              if (contextType === void 0) {
                addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
              } else if (typeof contextType !== "object") {
                addendum = " However, it is set to a " + typeof contextType + ".";
              } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                addendum = " Did you accidentally pass the Context.Provider instead?";
              } else if (contextType._context !== void 0) {
                addendum = " Did you accidentally pass the Context.Consumer instead?";
              } else {
                addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
              }
              warningWithoutStack$1(false, "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentName(ctor) || "Component", addendum);
            }
          }
        }
        if (typeof contextType === "object" && contextType !== null) {
          context = readContext(contextType);
        } else if (!disableLegacyContext) {
          unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
          var contextTypes = ctor.contextTypes;
          isLegacyContextConsumer = contextTypes !== null && contextTypes !== void 0;
          context = isLegacyContextConsumer ? getMaskedContext(workInProgress2, unmaskedContext) : emptyContextObject;
        }
        {
          if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress2.mode & StrictMode) {
            new ctor(props, context);
          }
        }
        var instance = new ctor(props, context);
        var state = workInProgress2.memoizedState = instance.state !== null && instance.state !== void 0 ? instance.state : null;
        adoptClassInstance(workInProgress2, instance);
        {
          if (typeof ctor.getDerivedStateFromProps === "function" && state === null) {
            var componentName = getComponentName(ctor) || "Component";
            if (!didWarnAboutUninitializedState.has(componentName)) {
              didWarnAboutUninitializedState.add(componentName);
              warningWithoutStack$1(false, "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
            }
          }
          if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
            var foundWillMountName = null;
            var foundWillReceivePropsName = null;
            var foundWillUpdateName = null;
            if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
              foundWillMountName = "componentWillMount";
            } else if (typeof instance.UNSAFE_componentWillMount === "function") {
              foundWillMountName = "UNSAFE_componentWillMount";
            }
            if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
              foundWillReceivePropsName = "componentWillReceiveProps";
            } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
              foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
            }
            if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
              foundWillUpdateName = "componentWillUpdate";
            } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
              foundWillUpdateName = "UNSAFE_componentWillUpdate";
            }
            if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentName(ctor) || "Component";
              var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                warningWithoutStack$1(false, "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
              }
            }
          }
        }
        if (isLegacyContextConsumer) {
          cacheContext(workInProgress2, unmaskedContext, context);
        }
        return instance;
      }
      function callComponentWillMount(workInProgress2, instance) {
        startPhaseTimer(workInProgress2, "componentWillMount");
        var oldState = instance.state;
        if (typeof instance.componentWillMount === "function") {
          instance.componentWillMount();
        }
        if (typeof instance.UNSAFE_componentWillMount === "function") {
          instance.UNSAFE_componentWillMount();
        }
        stopPhaseTimer();
        if (oldState !== instance.state) {
          {
            warningWithoutStack$1(false, "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentName(workInProgress2.type) || "Component");
          }
          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      }
      function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
        var oldState = instance.state;
        startPhaseTimer(workInProgress2, "componentWillReceiveProps");
        if (typeof instance.componentWillReceiveProps === "function") {
          instance.componentWillReceiveProps(newProps, nextContext);
        }
        if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
          instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
        }
        stopPhaseTimer();
        if (instance.state !== oldState) {
          {
            var componentName = getComponentName(workInProgress2.type) || "Component";
            if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
              didWarnAboutStateAssignmentForComponent.add(componentName);
              warningWithoutStack$1(false, "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", componentName);
            }
          }
          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      }
      function mountClassInstance(workInProgress2, ctor, newProps, renderExpirationTime2) {
        {
          checkClassInstance(workInProgress2, ctor, newProps);
        }
        var instance = workInProgress2.stateNode;
        instance.props = newProps;
        instance.state = workInProgress2.memoizedState;
        instance.refs = emptyRefsObject;
        var contextType = ctor.contextType;
        if (typeof contextType === "object" && contextType !== null) {
          instance.context = readContext(contextType);
        } else if (disableLegacyContext) {
          instance.context = emptyContextObject;
        } else {
          var unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
          instance.context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        {
          if (instance.state === newProps) {
            var componentName = getComponentName(ctor) || "Component";
            if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
              didWarnAboutDirectlyAssigningPropsToState.add(componentName);
              warningWithoutStack$1(false, "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
            }
          }
          if (workInProgress2.mode & StrictMode) {
            ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, instance);
          }
          if (warnAboutDeprecatedLifecycles) {
            ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress2, instance);
          }
        }
        var updateQueue = workInProgress2.updateQueue;
        if (updateQueue !== null) {
          processUpdateQueue(workInProgress2, updateQueue, newProps, instance, renderExpirationTime2);
          instance.state = workInProgress2.memoizedState;
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        if (typeof getDerivedStateFromProps === "function") {
          applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
          instance.state = workInProgress2.memoizedState;
        }
        if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
          callComponentWillMount(workInProgress2, instance);
          updateQueue = workInProgress2.updateQueue;
          if (updateQueue !== null) {
            processUpdateQueue(workInProgress2, updateQueue, newProps, instance, renderExpirationTime2);
            instance.state = workInProgress2.memoizedState;
          }
        }
        if (typeof instance.componentDidMount === "function") {
          workInProgress2.effectTag |= Update;
        }
      }
      function resumeMountClassInstance(workInProgress2, ctor, newProps, renderExpirationTime2) {
        var instance = workInProgress2.stateNode;
        var oldProps = workInProgress2.memoizedProps;
        instance.props = oldProps;
        var oldContext = instance.context;
        var contextType = ctor.contextType;
        var nextContext = emptyContextObject;
        if (typeof contextType === "object" && contextType !== null) {
          nextContext = readContext(contextType);
        } else if (!disableLegacyContext) {
          var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
          nextContext = getMaskedContext(workInProgress2, nextLegacyUnmaskedContext);
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
        if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
          if (oldProps !== newProps || oldContext !== nextContext) {
            callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
          }
        }
        resetHasForceUpdateBeforeProcessing();
        var oldState = workInProgress2.memoizedState;
        var newState = instance.state = oldState;
        var updateQueue = workInProgress2.updateQueue;
        if (updateQueue !== null) {
          processUpdateQueue(workInProgress2, updateQueue, newProps, instance, renderExpirationTime2);
          newState = workInProgress2.memoizedState;
        }
        if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
          if (typeof instance.componentDidMount === "function") {
            workInProgress2.effectTag |= Update;
          }
          return false;
        }
        if (typeof getDerivedStateFromProps === "function") {
          applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
          newState = workInProgress2.memoizedState;
        }
        var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
        if (shouldUpdate) {
          if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            startPhaseTimer(workInProgress2, "componentWillMount");
            if (typeof instance.componentWillMount === "function") {
              instance.componentWillMount();
            }
            if (typeof instance.UNSAFE_componentWillMount === "function") {
              instance.UNSAFE_componentWillMount();
            }
            stopPhaseTimer();
          }
          if (typeof instance.componentDidMount === "function") {
            workInProgress2.effectTag |= Update;
          }
        } else {
          if (typeof instance.componentDidMount === "function") {
            workInProgress2.effectTag |= Update;
          }
          workInProgress2.memoizedProps = newProps;
          workInProgress2.memoizedState = newState;
        }
        instance.props = newProps;
        instance.state = newState;
        instance.context = nextContext;
        return shouldUpdate;
      }
      function updateClassInstance(current2, workInProgress2, ctor, newProps, renderExpirationTime2) {
        var instance = workInProgress2.stateNode;
        var oldProps = workInProgress2.memoizedProps;
        instance.props = workInProgress2.type === workInProgress2.elementType ? oldProps : resolveDefaultProps(workInProgress2.type, oldProps);
        var oldContext = instance.context;
        var contextType = ctor.contextType;
        var nextContext = emptyContextObject;
        if (typeof contextType === "object" && contextType !== null) {
          nextContext = readContext(contextType);
        } else if (!disableLegacyContext) {
          var nextUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
          nextContext = getMaskedContext(workInProgress2, nextUnmaskedContext);
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
        if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
          if (oldProps !== newProps || oldContext !== nextContext) {
            callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
          }
        }
        resetHasForceUpdateBeforeProcessing();
        var oldState = workInProgress2.memoizedState;
        var newState = instance.state = oldState;
        var updateQueue = workInProgress2.updateQueue;
        if (updateQueue !== null) {
          processUpdateQueue(workInProgress2, updateQueue, newProps, instance, renderExpirationTime2);
          newState = workInProgress2.memoizedState;
        }
        if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
          if (typeof instance.componentDidUpdate === "function") {
            if (oldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
              workInProgress2.effectTag |= Update;
            }
          }
          if (typeof instance.getSnapshotBeforeUpdate === "function") {
            if (oldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
              workInProgress2.effectTag |= Snapshot;
            }
          }
          return false;
        }
        if (typeof getDerivedStateFromProps === "function") {
          applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
          newState = workInProgress2.memoizedState;
        }
        var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
        if (shouldUpdate) {
          if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === "function" || typeof instance.componentWillUpdate === "function")) {
            startPhaseTimer(workInProgress2, "componentWillUpdate");
            if (typeof instance.componentWillUpdate === "function") {
              instance.componentWillUpdate(newProps, newState, nextContext);
            }
            if (typeof instance.UNSAFE_componentWillUpdate === "function") {
              instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
            }
            stopPhaseTimer();
          }
          if (typeof instance.componentDidUpdate === "function") {
            workInProgress2.effectTag |= Update;
          }
          if (typeof instance.getSnapshotBeforeUpdate === "function") {
            workInProgress2.effectTag |= Snapshot;
          }
        } else {
          if (typeof instance.componentDidUpdate === "function") {
            if (oldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
              workInProgress2.effectTag |= Update;
            }
          }
          if (typeof instance.getSnapshotBeforeUpdate === "function") {
            if (oldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
              workInProgress2.effectTag |= Snapshot;
            }
          }
          workInProgress2.memoizedProps = newProps;
          workInProgress2.memoizedState = newState;
        }
        instance.props = newProps;
        instance.state = newState;
        instance.context = nextContext;
        return shouldUpdate;
      }
      var didWarnAboutMaps;
      var didWarnAboutGenerators;
      var didWarnAboutStringRefs;
      var ownerHasKeyUseWarning;
      var ownerHasFunctionTypeWarning;
      var warnForMissingKey = function(child) {
      };
      {
        didWarnAboutMaps = false;
        didWarnAboutGenerators = false;
        didWarnAboutStringRefs = {};
        ownerHasKeyUseWarning = {};
        ownerHasFunctionTypeWarning = {};
        warnForMissingKey = function(child) {
          if (child === null || typeof child !== "object") {
            return;
          }
          if (!child._store || child._store.validated || child.key != null) {
            return;
          }
          (function() {
            if (!(typeof child._store === "object")) {
              {
                throw ReactError(Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
          child._store.validated = true;
          var currentComponentErrorInfo = 'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.' + getCurrentFiberStackInDev();
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          warning$1(false, 'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.');
        };
      }
      var isArray = Array.isArray;
      function coerceRef(returnFiber, current$$1, element) {
        var mixedRef = element.ref;
        if (mixedRef !== null && typeof mixedRef !== "function" && typeof mixedRef !== "object") {
          {
            if (returnFiber.mode & StrictMode || warnAboutStringRefs) {
              var componentName = getComponentName(returnFiber.type) || "Component";
              if (!didWarnAboutStringRefs[componentName]) {
                if (warnAboutStringRefs) {
                  warningWithoutStack$1(false, 'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s', componentName, mixedRef, getStackByFiberInDevAndProd(returnFiber));
                } else {
                  warningWithoutStack$1(false, 'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s', mixedRef, getStackByFiberInDevAndProd(returnFiber));
                }
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
          if (element._owner) {
            var owner = element._owner;
            var inst;
            if (owner) {
              var ownerFiber = owner;
              (function() {
                if (!(ownerFiber.tag === ClassComponent)) {
                  {
                    throw ReactError(Error("Function components cannot have refs. Did you mean to use React.forwardRef()?"));
                  }
                }
              })();
              inst = ownerFiber.stateNode;
            }
            (function() {
              if (!inst) {
                {
                  throw ReactError(Error("Missing owner for string ref " + mixedRef + ". This error is likely caused by a bug in React. Please file an issue."));
                }
              }
            })();
            var stringRef = "" + mixedRef;
            if (current$$1 !== null && current$$1.ref !== null && typeof current$$1.ref === "function" && current$$1.ref._stringRef === stringRef) {
              return current$$1.ref;
            }
            var ref = function(value) {
              var refs = inst.refs;
              if (refs === emptyRefsObject) {
                refs = inst.refs = {};
              }
              if (value === null) {
                delete refs[stringRef];
              } else {
                refs[stringRef] = value;
              }
            };
            ref._stringRef = stringRef;
            return ref;
          } else {
            (function() {
              if (!(typeof mixedRef === "string")) {
                {
                  throw ReactError(Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null."));
                }
              }
            })();
            (function() {
              if (!element._owner) {
                {
                  throw ReactError(Error("Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information."));
                }
              }
            })();
          }
        }
        return mixedRef;
      }
      function throwOnInvalidObjectType(returnFiber, newChild) {
        if (returnFiber.type !== "textarea") {
          var addendum = "";
          {
            addendum = " If you meant to render a collection of children, use an array instead." + getCurrentFiberStackInDev();
          }
          (function() {
            {
              {
                throw ReactError(Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(newChild) === "[object Object]" ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : newChild) + ")." + addendum));
              }
            }
          })();
        }
      }
      function warnOnFunctionType() {
        var currentComponentErrorInfo = "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it." + getCurrentFiberStackInDev();
        if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasFunctionTypeWarning[currentComponentErrorInfo] = true;
        warning$1(false, "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
      function ChildReconciler(shouldTrackSideEffects) {
        function deleteChild(returnFiber, childToDelete) {
          if (!shouldTrackSideEffects) {
            return;
          }
          var last = returnFiber.lastEffect;
          if (last !== null) {
            last.nextEffect = childToDelete;
            returnFiber.lastEffect = childToDelete;
          } else {
            returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
          }
          childToDelete.nextEffect = null;
          childToDelete.effectTag = Deletion;
        }
        function deleteRemainingChildren(returnFiber, currentFirstChild) {
          if (!shouldTrackSideEffects) {
            return null;
          }
          var childToDelete = currentFirstChild;
          while (childToDelete !== null) {
            deleteChild(returnFiber, childToDelete);
            childToDelete = childToDelete.sibling;
          }
          return null;
        }
        function mapRemainingChildren(returnFiber, currentFirstChild) {
          var existingChildren = new Map();
          var existingChild = currentFirstChild;
          while (existingChild !== null) {
            if (existingChild.key !== null) {
              existingChildren.set(existingChild.key, existingChild);
            } else {
              existingChildren.set(existingChild.index, existingChild);
            }
            existingChild = existingChild.sibling;
          }
          return existingChildren;
        }
        function useFiber(fiber, pendingProps, expirationTime) {
          var clone = createWorkInProgress(fiber, pendingProps, expirationTime);
          clone.index = 0;
          clone.sibling = null;
          return clone;
        }
        function placeChild(newFiber, lastPlacedIndex, newIndex) {
          newFiber.index = newIndex;
          if (!shouldTrackSideEffects) {
            return lastPlacedIndex;
          }
          var current$$1 = newFiber.alternate;
          if (current$$1 !== null) {
            var oldIndex = current$$1.index;
            if (oldIndex < lastPlacedIndex) {
              newFiber.effectTag = Placement;
              return lastPlacedIndex;
            } else {
              return oldIndex;
            }
          } else {
            newFiber.effectTag = Placement;
            return lastPlacedIndex;
          }
        }
        function placeSingleChild(newFiber) {
          if (shouldTrackSideEffects && newFiber.alternate === null) {
            newFiber.effectTag = Placement;
          }
          return newFiber;
        }
        function updateTextNode(returnFiber, current$$1, textContent, expirationTime) {
          if (current$$1 === null || current$$1.tag !== HostText) {
            var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
            created.return = returnFiber;
            return created;
          } else {
            var existing = useFiber(current$$1, textContent, expirationTime);
            existing.return = returnFiber;
            return existing;
          }
        }
        function updateElement(returnFiber, current$$1, element, expirationTime) {
          if (current$$1 !== null && (current$$1.elementType === element.type || isCompatibleFamilyForHotReloading(current$$1, element))) {
            var existing = useFiber(current$$1, element.props, expirationTime);
            existing.ref = coerceRef(returnFiber, current$$1, element);
            existing.return = returnFiber;
            {
              existing._debugSource = element._source;
              existing._debugOwner = element._owner;
            }
            return existing;
          } else {
            var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
            created.ref = coerceRef(returnFiber, current$$1, element);
            created.return = returnFiber;
            return created;
          }
        }
        function updatePortal(returnFiber, current$$1, portal, expirationTime) {
          if (current$$1 === null || current$$1.tag !== HostPortal || current$$1.stateNode.containerInfo !== portal.containerInfo || current$$1.stateNode.implementation !== portal.implementation) {
            var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
            created.return = returnFiber;
            return created;
          } else {
            var existing = useFiber(current$$1, portal.children || [], expirationTime);
            existing.return = returnFiber;
            return existing;
          }
        }
        function updateFragment2(returnFiber, current$$1, fragment, expirationTime, key) {
          if (current$$1 === null || current$$1.tag !== Fragment) {
            var created = createFiberFromFragment(fragment, returnFiber.mode, expirationTime, key);
            created.return = returnFiber;
            return created;
          } else {
            var existing = useFiber(current$$1, fragment, expirationTime);
            existing.return = returnFiber;
            return existing;
          }
        }
        function createChild(returnFiber, newChild, expirationTime) {
          if (typeof newChild === "string" || typeof newChild === "number") {
            var created = createFiberFromText("" + newChild, returnFiber.mode, expirationTime);
            created.return = returnFiber;
            return created;
          }
          if (typeof newChild === "object" && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var _created = createFiberFromElement(newChild, returnFiber.mode, expirationTime);
                _created.ref = coerceRef(returnFiber, null, newChild);
                _created.return = returnFiber;
                return _created;
              }
              case REACT_PORTAL_TYPE: {
                var _created2 = createFiberFromPortal(newChild, returnFiber.mode, expirationTime);
                _created2.return = returnFiber;
                return _created2;
              }
            }
            if (isArray(newChild) || getIteratorFn(newChild)) {
              var _created3 = createFiberFromFragment(newChild, returnFiber.mode, expirationTime, null);
              _created3.return = returnFiber;
              return _created3;
            }
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          {
            if (typeof newChild === "function") {
              warnOnFunctionType();
            }
          }
          return null;
        }
        function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
          var key = oldFiber !== null ? oldFiber.key : null;
          if (typeof newChild === "string" || typeof newChild === "number") {
            if (key !== null) {
              return null;
            }
            return updateTextNode(returnFiber, oldFiber, "" + newChild, expirationTime);
          }
          if (typeof newChild === "object" && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                if (newChild.key === key) {
                  if (newChild.type === REACT_FRAGMENT_TYPE) {
                    return updateFragment2(returnFiber, oldFiber, newChild.props.children, expirationTime, key);
                  }
                  return updateElement(returnFiber, oldFiber, newChild, expirationTime);
                } else {
                  return null;
                }
              }
              case REACT_PORTAL_TYPE: {
                if (newChild.key === key) {
                  return updatePortal(returnFiber, oldFiber, newChild, expirationTime);
                } else {
                  return null;
                }
              }
            }
            if (isArray(newChild) || getIteratorFn(newChild)) {
              if (key !== null) {
                return null;
              }
              return updateFragment2(returnFiber, oldFiber, newChild, expirationTime, null);
            }
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          {
            if (typeof newChild === "function") {
              warnOnFunctionType();
            }
          }
          return null;
        }
        function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
          if (typeof newChild === "string" || typeof newChild === "number") {
            var matchedFiber = existingChildren.get(newIdx) || null;
            return updateTextNode(returnFiber, matchedFiber, "" + newChild, expirationTime);
          }
          if (typeof newChild === "object" && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                if (newChild.type === REACT_FRAGMENT_TYPE) {
                  return updateFragment2(returnFiber, _matchedFiber, newChild.props.children, expirationTime, newChild.key);
                }
                return updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
              }
              case REACT_PORTAL_TYPE: {
                var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                return updatePortal(returnFiber, _matchedFiber2, newChild, expirationTime);
              }
            }
            if (isArray(newChild) || getIteratorFn(newChild)) {
              var _matchedFiber3 = existingChildren.get(newIdx) || null;
              return updateFragment2(returnFiber, _matchedFiber3, newChild, expirationTime, null);
            }
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          {
            if (typeof newChild === "function") {
              warnOnFunctionType();
            }
          }
          return null;
        }
        function warnOnInvalidKey(child, knownKeys) {
          {
            if (typeof child !== "object" || child === null) {
              return knownKeys;
            }
            switch (child.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                warnForMissingKey(child);
                var key = child.key;
                if (typeof key !== "string") {
                  break;
                }
                if (knownKeys === null) {
                  knownKeys = new Set();
                  knownKeys.add(key);
                  break;
                }
                if (!knownKeys.has(key)) {
                  knownKeys.add(key);
                  break;
                }
                warning$1(false, "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", key);
                break;
              default:
                break;
            }
          }
          return knownKeys;
        }
        function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
          {
            var knownKeys = null;
            for (var i2 = 0; i2 < newChildren.length; i2++) {
              var child = newChildren[i2];
              knownKeys = warnOnInvalidKey(child, knownKeys);
            }
          }
          var resultingFirstChild = null;
          var previousNewFiber = null;
          var oldFiber = currentFirstChild;
          var lastPlacedIndex = 0;
          var newIdx = 0;
          var nextOldFiber = null;
          for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
            if (oldFiber.index > newIdx) {
              nextOldFiber = oldFiber;
              oldFiber = null;
            } else {
              nextOldFiber = oldFiber.sibling;
            }
            var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);
            if (newFiber === null) {
              if (oldFiber === null) {
                oldFiber = nextOldFiber;
              }
              break;
            }
            if (shouldTrackSideEffects) {
              if (oldFiber && newFiber.alternate === null) {
                deleteChild(returnFiber, oldFiber);
              }
            }
            lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
            if (previousNewFiber === null) {
              resultingFirstChild = newFiber;
            } else {
              previousNewFiber.sibling = newFiber;
            }
            previousNewFiber = newFiber;
            oldFiber = nextOldFiber;
          }
          if (newIdx === newChildren.length) {
            deleteRemainingChildren(returnFiber, oldFiber);
            return resultingFirstChild;
          }
          if (oldFiber === null) {
            for (; newIdx < newChildren.length; newIdx++) {
              var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);
              if (_newFiber === null) {
                continue;
              }
              lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
              if (previousNewFiber === null) {
                resultingFirstChild = _newFiber;
              } else {
                previousNewFiber.sibling = _newFiber;
              }
              previousNewFiber = _newFiber;
            }
            return resultingFirstChild;
          }
          var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
          for (; newIdx < newChildren.length; newIdx++) {
            var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);
            if (_newFiber2 !== null) {
              if (shouldTrackSideEffects) {
                if (_newFiber2.alternate !== null) {
                  existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
                }
              }
              lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
              if (previousNewFiber === null) {
                resultingFirstChild = _newFiber2;
              } else {
                previousNewFiber.sibling = _newFiber2;
              }
              previousNewFiber = _newFiber2;
            }
          }
          if (shouldTrackSideEffects) {
            existingChildren.forEach(function(child2) {
              return deleteChild(returnFiber, child2);
            });
          }
          return resultingFirstChild;
        }
        function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
          var iteratorFn = getIteratorFn(newChildrenIterable);
          (function() {
            if (!(typeof iteratorFn === "function")) {
              {
                throw ReactError(Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
          {
            if (typeof Symbol === "function" && newChildrenIterable[Symbol.toStringTag] === "Generator") {
              !didWarnAboutGenerators ? warning$1(false, "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.") : void 0;
              didWarnAboutGenerators = true;
            }
            if (newChildrenIterable.entries === iteratorFn) {
              !didWarnAboutMaps ? warning$1(false, "Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.") : void 0;
              didWarnAboutMaps = true;
            }
            var _newChildren = iteratorFn.call(newChildrenIterable);
            if (_newChildren) {
              var knownKeys = null;
              var _step = _newChildren.next();
              for (; !_step.done; _step = _newChildren.next()) {
                var child = _step.value;
                knownKeys = warnOnInvalidKey(child, knownKeys);
              }
            }
          }
          var newChildren = iteratorFn.call(newChildrenIterable);
          (function() {
            if (!(newChildren != null)) {
              {
                throw ReactError(Error("An iterable object provided no iterator."));
              }
            }
          })();
          var resultingFirstChild = null;
          var previousNewFiber = null;
          var oldFiber = currentFirstChild;
          var lastPlacedIndex = 0;
          var newIdx = 0;
          var nextOldFiber = null;
          var step = newChildren.next();
          for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
            if (oldFiber.index > newIdx) {
              nextOldFiber = oldFiber;
              oldFiber = null;
            } else {
              nextOldFiber = oldFiber.sibling;
            }
            var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);
            if (newFiber === null) {
              if (oldFiber === null) {
                oldFiber = nextOldFiber;
              }
              break;
            }
            if (shouldTrackSideEffects) {
              if (oldFiber && newFiber.alternate === null) {
                deleteChild(returnFiber, oldFiber);
              }
            }
            lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
            if (previousNewFiber === null) {
              resultingFirstChild = newFiber;
            } else {
              previousNewFiber.sibling = newFiber;
            }
            previousNewFiber = newFiber;
            oldFiber = nextOldFiber;
          }
          if (step.done) {
            deleteRemainingChildren(returnFiber, oldFiber);
            return resultingFirstChild;
          }
          if (oldFiber === null) {
            for (; !step.done; newIdx++, step = newChildren.next()) {
              var _newFiber3 = createChild(returnFiber, step.value, expirationTime);
              if (_newFiber3 === null) {
                continue;
              }
              lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
              if (previousNewFiber === null) {
                resultingFirstChild = _newFiber3;
              } else {
                previousNewFiber.sibling = _newFiber3;
              }
              previousNewFiber = _newFiber3;
            }
            return resultingFirstChild;
          }
          var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
          for (; !step.done; newIdx++, step = newChildren.next()) {
            var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);
            if (_newFiber4 !== null) {
              if (shouldTrackSideEffects) {
                if (_newFiber4.alternate !== null) {
                  existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
                }
              }
              lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
              if (previousNewFiber === null) {
                resultingFirstChild = _newFiber4;
              } else {
                previousNewFiber.sibling = _newFiber4;
              }
              previousNewFiber = _newFiber4;
            }
          }
          if (shouldTrackSideEffects) {
            existingChildren.forEach(function(child2) {
              return deleteChild(returnFiber, child2);
            });
          }
          return resultingFirstChild;
        }
        function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
          if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
            deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
            var existing = useFiber(currentFirstChild, textContent, expirationTime);
            existing.return = returnFiber;
            return existing;
          }
          deleteRemainingChildren(returnFiber, currentFirstChild);
          var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
          created.return = returnFiber;
          return created;
        }
        function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
          var key = element.key;
          var child = currentFirstChild;
          while (child !== null) {
            if (child.key === key) {
              if (child.tag === Fragment ? element.type === REACT_FRAGMENT_TYPE : child.elementType === element.type || isCompatibleFamilyForHotReloading(child, element)) {
                deleteRemainingChildren(returnFiber, child.sibling);
                var existing = useFiber(child, element.type === REACT_FRAGMENT_TYPE ? element.props.children : element.props, expirationTime);
                existing.ref = coerceRef(returnFiber, child, element);
                existing.return = returnFiber;
                {
                  existing._debugSource = element._source;
                  existing._debugOwner = element._owner;
                }
                return existing;
              } else {
                deleteRemainingChildren(returnFiber, child);
                break;
              }
            } else {
              deleteChild(returnFiber, child);
            }
            child = child.sibling;
          }
          if (element.type === REACT_FRAGMENT_TYPE) {
            var created = createFiberFromFragment(element.props.children, returnFiber.mode, expirationTime, element.key);
            created.return = returnFiber;
            return created;
          } else {
            var _created4 = createFiberFromElement(element, returnFiber.mode, expirationTime);
            _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
            _created4.return = returnFiber;
            return _created4;
          }
        }
        function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
          var key = portal.key;
          var child = currentFirstChild;
          while (child !== null) {
            if (child.key === key) {
              if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
                deleteRemainingChildren(returnFiber, child.sibling);
                var existing = useFiber(child, portal.children || [], expirationTime);
                existing.return = returnFiber;
                return existing;
              } else {
                deleteRemainingChildren(returnFiber, child);
                break;
              }
            } else {
              deleteChild(returnFiber, child);
            }
            child = child.sibling;
          }
          var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
          created.return = returnFiber;
          return created;
        }
        function reconcileChildFibers2(returnFiber, currentFirstChild, newChild, expirationTime) {
          var isUnkeyedTopLevelFragment = typeof newChild === "object" && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
          if (isUnkeyedTopLevelFragment) {
            newChild = newChild.props.children;
          }
          var isObject = typeof newChild === "object" && newChild !== null;
          if (isObject) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime));
              case REACT_PORTAL_TYPE:
                return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime));
            }
          }
          if (typeof newChild === "string" || typeof newChild === "number") {
            return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, "" + newChild, expirationTime));
          }
          if (isArray(newChild)) {
            return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
          }
          if (getIteratorFn(newChild)) {
            return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
          }
          if (isObject) {
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          {
            if (typeof newChild === "function") {
              warnOnFunctionType();
            }
          }
          if (typeof newChild === "undefined" && !isUnkeyedTopLevelFragment) {
            switch (returnFiber.tag) {
              case ClassComponent: {
                {
                  var instance = returnFiber.stateNode;
                  if (instance.render._isMockFunction) {
                    break;
                  }
                }
              }
              case FunctionComponent: {
                var Component = returnFiber.type;
                (function() {
                  {
                    {
                      throw ReactError(Error((Component.displayName || Component.name || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null."));
                    }
                  }
                })();
              }
            }
          }
          return deleteRemainingChildren(returnFiber, currentFirstChild);
        }
        return reconcileChildFibers2;
      }
      var reconcileChildFibers = ChildReconciler(true);
      var mountChildFibers = ChildReconciler(false);
      function cloneChildFibers(current$$1, workInProgress2) {
        (function() {
          if (!(current$$1 === null || workInProgress2.child === current$$1.child)) {
            {
              throw ReactError(Error("Resuming work not yet implemented."));
            }
          }
        })();
        if (workInProgress2.child === null) {
          return;
        }
        var currentChild = workInProgress2.child;
        var newChild = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
        workInProgress2.child = newChild;
        newChild.return = workInProgress2;
        while (currentChild.sibling !== null) {
          currentChild = currentChild.sibling;
          newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
          newChild.return = workInProgress2;
        }
        newChild.sibling = null;
      }
      function resetChildFibers(workInProgress2, renderExpirationTime2) {
        var child = workInProgress2.child;
        while (child !== null) {
          resetWorkInProgress(child, renderExpirationTime2);
          child = child.sibling;
        }
      }
      var NO_CONTEXT = {};
      var contextStackCursor$1 = createCursor(NO_CONTEXT);
      var contextFiberStackCursor = createCursor(NO_CONTEXT);
      var rootInstanceStackCursor = createCursor(NO_CONTEXT);
      function requiredContext(c) {
        (function() {
          if (!(c !== NO_CONTEXT)) {
            {
              throw ReactError(Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."));
            }
          }
        })();
        return c;
      }
      function getRootHostContainer() {
        var rootInstance = requiredContext(rootInstanceStackCursor.current);
        return rootInstance;
      }
      function pushHostContainer(fiber, nextRootInstance) {
        push(rootInstanceStackCursor, nextRootInstance, fiber);
        push(contextFiberStackCursor, fiber, fiber);
        push(contextStackCursor$1, NO_CONTEXT, fiber);
        var nextRootContext = getRootHostContext(nextRootInstance);
        pop(contextStackCursor$1, fiber);
        push(contextStackCursor$1, nextRootContext, fiber);
      }
      function popHostContainer(fiber) {
        pop(contextStackCursor$1, fiber);
        pop(contextFiberStackCursor, fiber);
        pop(rootInstanceStackCursor, fiber);
      }
      function getHostContext() {
        var context = requiredContext(contextStackCursor$1.current);
        return context;
      }
      function pushHostContext(fiber) {
        var rootInstance = requiredContext(rootInstanceStackCursor.current);
        var context = requiredContext(contextStackCursor$1.current);
        var nextContext = getChildHostContext(context, fiber.type, rootInstance);
        if (context === nextContext) {
          return;
        }
        push(contextFiberStackCursor, fiber, fiber);
        push(contextStackCursor$1, nextContext, fiber);
      }
      function popHostContext(fiber) {
        if (contextFiberStackCursor.current !== fiber) {
          return;
        }
        pop(contextStackCursor$1, fiber);
        pop(contextFiberStackCursor, fiber);
      }
      var DefaultSuspenseContext = 0;
      var SubtreeSuspenseContextMask = 1;
      var InvisibleParentSuspenseContext = 1;
      var ForceSuspenseFallback = 2;
      var suspenseStackCursor = createCursor(DefaultSuspenseContext);
      function hasSuspenseContext(parentContext, flag) {
        return (parentContext & flag) !== 0;
      }
      function setDefaultShallowSuspenseContext(parentContext) {
        return parentContext & SubtreeSuspenseContextMask;
      }
      function setShallowSuspenseContext(parentContext, shallowContext) {
        return parentContext & SubtreeSuspenseContextMask | shallowContext;
      }
      function addSubtreeSuspenseContext(parentContext, subtreeContext) {
        return parentContext | subtreeContext;
      }
      function pushSuspenseContext(fiber, newContext) {
        push(suspenseStackCursor, newContext, fiber);
      }
      function popSuspenseContext(fiber) {
        pop(suspenseStackCursor, fiber);
      }
      function shouldCaptureSuspense(workInProgress2, hasInvisibleParent) {
        var nextState = workInProgress2.memoizedState;
        if (nextState !== null) {
          if (nextState.dehydrated !== null) {
            return true;
          }
          return false;
        }
        var props = workInProgress2.memoizedProps;
        if (props.fallback === void 0) {
          return false;
        }
        if (props.unstable_avoidThisFallback !== true) {
          return true;
        }
        if (hasInvisibleParent) {
          return false;
        }
        return true;
      }
      function findFirstSuspended(row) {
        var node = row;
        while (node !== null) {
          if (node.tag === SuspenseComponent) {
            var state = node.memoizedState;
            if (state !== null) {
              var dehydrated = state.dehydrated;
              if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) {
                return node;
              }
            }
          } else if (node.tag === SuspenseListComponent && node.memoizedProps.revealOrder !== void 0) {
            var didSuspend = (node.effectTag & DidCapture) !== NoEffect;
            if (didSuspend) {
              return node;
            }
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === row) {
            return null;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === row) {
              return null;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
        return null;
      }
      var emptyObject = {};
      var isArray$2 = Array.isArray;
      function createResponderInstance(responder, responderProps, responderState, fiber) {
        return {
          fiber,
          props: responderProps,
          responder,
          rootEventTypes: null,
          state: responderState
        };
      }
      function mountEventResponder$1(responder, responderProps, fiber, respondersMap, rootContainerInstance) {
        var responderState = emptyObject;
        var getInitialState = responder.getInitialState;
        if (getInitialState !== null) {
          responderState = getInitialState(responderProps);
        }
        var responderInstance = createResponderInstance(responder, responderProps, responderState, fiber);
        if (!rootContainerInstance) {
          var node = fiber;
          while (node !== null) {
            var tag = node.tag;
            if (tag === HostComponent) {
              rootContainerInstance = node.stateNode;
              break;
            } else if (tag === HostRoot) {
              rootContainerInstance = node.stateNode.containerInfo;
              break;
            }
            node = node.return;
          }
        }
        mountResponderInstance(responder, responderInstance, responderProps, responderState, rootContainerInstance);
        respondersMap.set(responder, responderInstance);
      }
      function updateEventListener(listener, fiber, visistedResponders, respondersMap, rootContainerInstance) {
        var responder;
        var props;
        if (listener) {
          responder = listener.responder;
          props = listener.props;
        }
        (function() {
          if (!(responder && responder.$$typeof === REACT_RESPONDER_TYPE)) {
            {
              throw ReactError(Error("An invalid value was used as an event listener. Expect one or many event listeners created via React.unstable_useResponder()."));
            }
          }
        })();
        var listenerProps = props;
        if (visistedResponders.has(responder)) {
          {
            warning$1(false, 'Duplicate event responder "%s" found in event listeners. Event listeners passed to elements cannot use the same event responder more than once.', responder.displayName);
          }
          return;
        }
        visistedResponders.add(responder);
        var responderInstance = respondersMap.get(responder);
        if (responderInstance === void 0) {
          mountEventResponder$1(responder, listenerProps, fiber, respondersMap, rootContainerInstance);
        } else {
          responderInstance.props = listenerProps;
          responderInstance.fiber = fiber;
        }
      }
      function updateEventListeners(listeners, fiber, rootContainerInstance) {
        var visistedResponders = new Set();
        var dependencies = fiber.dependencies;
        if (listeners != null) {
          if (dependencies === null) {
            dependencies = fiber.dependencies = {
              expirationTime: NoWork,
              firstContext: null,
              responders: new Map()
            };
          }
          var respondersMap = dependencies.responders;
          if (respondersMap === null) {
            respondersMap = new Map();
          }
          if (isArray$2(listeners)) {
            for (var i2 = 0, length = listeners.length; i2 < length; i2++) {
              var listener = listeners[i2];
              updateEventListener(listener, fiber, visistedResponders, respondersMap, rootContainerInstance);
            }
          } else {
            updateEventListener(listeners, fiber, visistedResponders, respondersMap, rootContainerInstance);
          }
        }
        if (dependencies !== null) {
          var _respondersMap = dependencies.responders;
          if (_respondersMap !== null) {
            var mountedResponders = Array.from(_respondersMap.keys());
            for (var _i = 0, _length = mountedResponders.length; _i < _length; _i++) {
              var mountedResponder = mountedResponders[_i];
              if (!visistedResponders.has(mountedResponder)) {
                var responderInstance = _respondersMap.get(mountedResponder);
                unmountResponderInstance(responderInstance);
                _respondersMap.delete(mountedResponder);
              }
            }
          }
        }
      }
      function createResponderListener(responder, props) {
        var eventResponderListener = {
          responder,
          props
        };
        {
          Object.freeze(eventResponderListener);
        }
        return eventResponderListener;
      }
      var NoEffect$1 = 0;
      var UnmountSnapshot = 2;
      var UnmountMutation = 4;
      var MountMutation = 8;
      var UnmountLayout = 16;
      var MountLayout = 32;
      var MountPassive = 64;
      var UnmountPassive = 128;
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
      var didWarnAboutMismatchedHooksForComponent;
      {
        didWarnAboutMismatchedHooksForComponent = new Set();
      }
      var renderExpirationTime$1 = NoWork;
      var currentlyRenderingFiber$1 = null;
      var currentHook = null;
      var nextCurrentHook = null;
      var firstWorkInProgressHook = null;
      var workInProgressHook = null;
      var nextWorkInProgressHook = null;
      var remainingExpirationTime = NoWork;
      var componentUpdateQueue = null;
      var sideEffectTag = 0;
      var didScheduleRenderPhaseUpdate = false;
      var renderPhaseUpdates = null;
      var numberOfReRenders = 0;
      var RE_RENDER_LIMIT = 25;
      var currentHookNameInDev = null;
      var hookTypesDev = null;
      var hookTypesUpdateIndexDev = -1;
      var ignorePreviousDependencies = false;
      function mountHookTypesDev() {
        {
          var hookName = currentHookNameInDev;
          if (hookTypesDev === null) {
            hookTypesDev = [hookName];
          } else {
            hookTypesDev.push(hookName);
          }
        }
      }
      function updateHookTypesDev() {
        {
          var hookName = currentHookNameInDev;
          if (hookTypesDev !== null) {
            hookTypesUpdateIndexDev++;
            if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
              warnOnHookMismatchInDev(hookName);
            }
          }
        }
      }
      function checkDepsAreArrayDev(deps) {
        {
          if (deps !== void 0 && deps !== null && !Array.isArray(deps)) {
            warning$1(false, "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", currentHookNameInDev, typeof deps);
          }
        }
      }
      function warnOnHookMismatchInDev(currentHookName) {
        {
          var componentName = getComponentName(currentlyRenderingFiber$1.type);
          if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
            didWarnAboutMismatchedHooksForComponent.add(componentName);
            if (hookTypesDev !== null) {
              var table = "";
              var secondColumnStart = 30;
              for (var i2 = 0; i2 <= hookTypesUpdateIndexDev; i2++) {
                var oldHookName = hookTypesDev[i2];
                var newHookName = i2 === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
                var row = i2 + 1 + ". " + oldHookName;
                while (row.length < secondColumnStart) {
                  row += " ";
                }
                row += newHookName + "\n";
                table += row;
              }
              warning$1(false, "React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", componentName, table);
            }
          }
        }
      }
      function throwInvalidHookError() {
        (function() {
          {
            {
              throw ReactError(Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem."));
            }
          }
        })();
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        {
          if (ignorePreviousDependencies) {
            return false;
          }
        }
        if (prevDeps === null) {
          {
            warning$1(false, "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
          }
          return false;
        }
        {
          if (nextDeps.length !== prevDeps.length) {
            warning$1(false, "The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + prevDeps.join(", ") + "]", "[" + nextDeps.join(", ") + "]");
          }
        }
        for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
          if (is$1(nextDeps[i2], prevDeps[i2])) {
            continue;
          }
          return false;
        }
        return true;
      }
      function renderWithHooks(current2, workInProgress2, Component, props, refOrContext, nextRenderExpirationTime) {
        renderExpirationTime$1 = nextRenderExpirationTime;
        currentlyRenderingFiber$1 = workInProgress2;
        nextCurrentHook = current2 !== null ? current2.memoizedState : null;
        {
          hookTypesDev = current2 !== null ? current2._debugHookTypes : null;
          hookTypesUpdateIndexDev = -1;
          ignorePreviousDependencies = current2 !== null && current2.type !== workInProgress2.type;
        }
        {
          if (nextCurrentHook !== null) {
            ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
          } else if (hookTypesDev !== null) {
            ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
          } else {
            ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
          }
        }
        var children = Component(props, refOrContext);
        if (didScheduleRenderPhaseUpdate) {
          do {
            didScheduleRenderPhaseUpdate = false;
            numberOfReRenders += 1;
            {
              ignorePreviousDependencies = false;
            }
            nextCurrentHook = current2 !== null ? current2.memoizedState : null;
            nextWorkInProgressHook = firstWorkInProgressHook;
            currentHook = null;
            workInProgressHook = null;
            componentUpdateQueue = null;
            {
              hookTypesUpdateIndexDev = -1;
            }
            ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
            children = Component(props, refOrContext);
          } while (didScheduleRenderPhaseUpdate);
          renderPhaseUpdates = null;
          numberOfReRenders = 0;
        }
        ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
        var renderedWork = currentlyRenderingFiber$1;
        renderedWork.memoizedState = firstWorkInProgressHook;
        renderedWork.expirationTime = remainingExpirationTime;
        renderedWork.updateQueue = componentUpdateQueue;
        renderedWork.effectTag |= sideEffectTag;
        {
          renderedWork._debugHookTypes = hookTypesDev;
        }
        var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
        renderExpirationTime$1 = NoWork;
        currentlyRenderingFiber$1 = null;
        currentHook = null;
        nextCurrentHook = null;
        firstWorkInProgressHook = null;
        workInProgressHook = null;
        nextWorkInProgressHook = null;
        {
          currentHookNameInDev = null;
          hookTypesDev = null;
          hookTypesUpdateIndexDev = -1;
        }
        remainingExpirationTime = NoWork;
        componentUpdateQueue = null;
        sideEffectTag = 0;
        (function() {
          if (!!didRenderTooFewHooks) {
            {
              throw ReactError(Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement."));
            }
          }
        })();
        return children;
      }
      function bailoutHooks(current2, workInProgress2, expirationTime) {
        workInProgress2.updateQueue = current2.updateQueue;
        workInProgress2.effectTag &= ~(Passive | Update);
        if (current2.expirationTime <= expirationTime) {
          current2.expirationTime = NoWork;
        }
      }
      function resetHooks() {
        ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
        renderExpirationTime$1 = NoWork;
        currentlyRenderingFiber$1 = null;
        currentHook = null;
        nextCurrentHook = null;
        firstWorkInProgressHook = null;
        workInProgressHook = null;
        nextWorkInProgressHook = null;
        {
          hookTypesDev = null;
          hookTypesUpdateIndexDev = -1;
          currentHookNameInDev = null;
        }
        remainingExpirationTime = NoWork;
        componentUpdateQueue = null;
        sideEffectTag = 0;
        didScheduleRenderPhaseUpdate = false;
        renderPhaseUpdates = null;
        numberOfReRenders = 0;
      }
      function mountWorkInProgressHook() {
        var hook = {
          memoizedState: null,
          baseState: null,
          queue: null,
          baseUpdate: null,
          next: null
        };
        if (workInProgressHook === null) {
          firstWorkInProgressHook = workInProgressHook = hook;
        } else {
          workInProgressHook = workInProgressHook.next = hook;
        }
        return workInProgressHook;
      }
      function updateWorkInProgressHook() {
        if (nextWorkInProgressHook !== null) {
          workInProgressHook = nextWorkInProgressHook;
          nextWorkInProgressHook = workInProgressHook.next;
          currentHook = nextCurrentHook;
          nextCurrentHook = currentHook !== null ? currentHook.next : null;
        } else {
          (function() {
            if (!(nextCurrentHook !== null)) {
              {
                throw ReactError(Error("Rendered more hooks than during the previous render."));
              }
            }
          })();
          currentHook = nextCurrentHook;
          var newHook = {
            memoizedState: currentHook.memoizedState,
            baseState: currentHook.baseState,
            queue: currentHook.queue,
            baseUpdate: currentHook.baseUpdate,
            next: null
          };
          if (workInProgressHook === null) {
            workInProgressHook = firstWorkInProgressHook = newHook;
          } else {
            workInProgressHook = workInProgressHook.next = newHook;
          }
          nextCurrentHook = currentHook.next;
        }
        return workInProgressHook;
      }
      function createFunctionComponentUpdateQueue() {
        return {
          lastEffect: null
        };
      }
      function basicStateReducer(state, action3) {
        return typeof action3 === "function" ? action3(state) : action3;
      }
      function mountReducer(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        var initialState;
        if (init !== void 0) {
          initialState = init(initialArg);
        } else {
          initialState = initialArg;
        }
        hook.memoizedState = hook.baseState = initialState;
        var queue = hook.queue = {
          last: null,
          dispatch: null,
          lastRenderedReducer: reducer,
          lastRenderedState: initialState
        };
        var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
        return [hook.memoizedState, dispatch];
      }
      function updateReducer(reducer, initialArg, init) {
        var hook = updateWorkInProgressHook();
        var queue = hook.queue;
        (function() {
          if (!(queue !== null)) {
            {
              throw ReactError(Error("Should have a queue. This is likely a bug in React. Please file an issue."));
            }
          }
        })();
        queue.lastRenderedReducer = reducer;
        if (numberOfReRenders > 0) {
          var _dispatch = queue.dispatch;
          if (renderPhaseUpdates !== null) {
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate !== void 0) {
              renderPhaseUpdates.delete(queue);
              var newState = hook.memoizedState;
              var update = firstRenderPhaseUpdate;
              do {
                var action3 = update.action;
                newState = reducer(newState, action3);
                update = update.next;
              } while (update !== null);
              if (!is$1(newState, hook.memoizedState)) {
                markWorkInProgressReceivedUpdate();
              }
              hook.memoizedState = newState;
              if (hook.baseUpdate === queue.last) {
                hook.baseState = newState;
              }
              queue.lastRenderedState = newState;
              return [newState, _dispatch];
            }
          }
          return [hook.memoizedState, _dispatch];
        }
        var last = queue.last;
        var baseUpdate = hook.baseUpdate;
        var baseState = hook.baseState;
        var first;
        if (baseUpdate !== null) {
          if (last !== null) {
            last.next = null;
          }
          first = baseUpdate.next;
        } else {
          first = last !== null ? last.next : null;
        }
        if (first !== null) {
          var _newState = baseState;
          var newBaseState = null;
          var newBaseUpdate = null;
          var prevUpdate = baseUpdate;
          var _update = first;
          var didSkip = false;
          do {
            var updateExpirationTime = _update.expirationTime;
            if (updateExpirationTime < renderExpirationTime$1) {
              if (!didSkip) {
                didSkip = true;
                newBaseUpdate = prevUpdate;
                newBaseState = _newState;
              }
              if (updateExpirationTime > remainingExpirationTime) {
                remainingExpirationTime = updateExpirationTime;
                markUnprocessedUpdateTime(remainingExpirationTime);
              }
            } else {
              markRenderEventTimeAndConfig(updateExpirationTime, _update.suspenseConfig);
              if (_update.eagerReducer === reducer) {
                _newState = _update.eagerState;
              } else {
                var _action = _update.action;
                _newState = reducer(_newState, _action);
              }
            }
            prevUpdate = _update;
            _update = _update.next;
          } while (_update !== null && _update !== first);
          if (!didSkip) {
            newBaseUpdate = prevUpdate;
            newBaseState = _newState;
          }
          if (!is$1(_newState, hook.memoizedState)) {
            markWorkInProgressReceivedUpdate();
          }
          hook.memoizedState = _newState;
          hook.baseUpdate = newBaseUpdate;
          hook.baseState = newBaseState;
          queue.lastRenderedState = _newState;
        }
        var dispatch = queue.dispatch;
        return [hook.memoizedState, dispatch];
      }
      function mountState(initialState) {
        var hook = mountWorkInProgressHook();
        if (typeof initialState === "function") {
          initialState = initialState();
        }
        hook.memoizedState = hook.baseState = initialState;
        var queue = hook.queue = {
          last: null,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialState
        };
        var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
        return [hook.memoizedState, dispatch];
      }
      function updateState(initialState) {
        return updateReducer(basicStateReducer, initialState);
      }
      function pushEffect(tag, create, destroy, deps) {
        var effect = {
          tag,
          create,
          destroy,
          deps,
          next: null
        };
        if (componentUpdateQueue === null) {
          componentUpdateQueue = createFunctionComponentUpdateQueue();
          componentUpdateQueue.lastEffect = effect.next = effect;
        } else {
          var lastEffect = componentUpdateQueue.lastEffect;
          if (lastEffect === null) {
            componentUpdateQueue.lastEffect = effect.next = effect;
          } else {
            var firstEffect = lastEffect.next;
            lastEffect.next = effect;
            effect.next = firstEffect;
            componentUpdateQueue.lastEffect = effect;
          }
        }
        return effect;
      }
      function mountRef(initialValue) {
        var hook = mountWorkInProgressHook();
        var ref = {
          current: initialValue
        };
        {
          Object.seal(ref);
        }
        hook.memoizedState = ref;
        return ref;
      }
      function updateRef(initialValue) {
        var hook = updateWorkInProgressHook();
        return hook.memoizedState;
      }
      function mountEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        sideEffectTag |= fiberEffectTag;
        hook.memoizedState = pushEffect(hookEffectTag, create, void 0, nextDeps);
      }
      function updateEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        var destroy = void 0;
        if (currentHook !== null) {
          var prevEffect = currentHook.memoizedState;
          destroy = prevEffect.destroy;
          if (nextDeps !== null) {
            var prevDeps = prevEffect.deps;
            if (areHookInputsEqual(nextDeps, prevDeps)) {
              pushEffect(NoEffect$1, create, destroy, nextDeps);
              return;
            }
          }
        }
        sideEffectTag |= fiberEffectTag;
        hook.memoizedState = pushEffect(hookEffectTag, create, destroy, nextDeps);
      }
      function mountEffect(create, deps) {
        {
          if (typeof jest !== "undefined") {
            warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
          }
        }
        return mountEffectImpl(Update | Passive, UnmountPassive | MountPassive, create, deps);
      }
      function updateEffect(create, deps) {
        {
          if (typeof jest !== "undefined") {
            warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
          }
        }
        return updateEffectImpl(Update | Passive, UnmountPassive | MountPassive, create, deps);
      }
      function mountLayoutEffect(create, deps) {
        return mountEffectImpl(Update, UnmountMutation | MountLayout, create, deps);
      }
      function updateLayoutEffect(create, deps) {
        return updateEffectImpl(Update, UnmountMutation | MountLayout, create, deps);
      }
      function imperativeHandleEffect(create, ref) {
        if (typeof ref === "function") {
          var refCallback = ref;
          var _inst = create();
          refCallback(_inst);
          return function() {
            refCallback(null);
          };
        } else if (ref !== null && ref !== void 0) {
          var refObject = ref;
          {
            !refObject.hasOwnProperty("current") ? warning$1(false, "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(refObject).join(", ") + "}") : void 0;
          }
          var _inst2 = create();
          refObject.current = _inst2;
          return function() {
            refObject.current = null;
          };
        }
      }
      function mountImperativeHandle(ref, create, deps) {
        {
          !(typeof create === "function") ? warning$1(false, "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null") : void 0;
        }
        var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
        return mountEffectImpl(Update, UnmountMutation | MountLayout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
      }
      function updateImperativeHandle(ref, create, deps) {
        {
          !(typeof create === "function") ? warning$1(false, "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null") : void 0;
        }
        var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
        return updateEffectImpl(Update, UnmountMutation | MountLayout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
      }
      function mountDebugValue(value, formatterFn) {
      }
      var updateDebugValue = mountDebugValue;
      function mountCallback(callback, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        hook.memoizedState = [callback, nextDeps];
        return callback;
      }
      function updateCallback(callback, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        var prevState = hook.memoizedState;
        if (prevState !== null) {
          if (nextDeps !== null) {
            var prevDeps = prevState[1];
            if (areHookInputsEqual(nextDeps, prevDeps)) {
              return prevState[0];
            }
          }
        }
        hook.memoizedState = [callback, nextDeps];
        return callback;
      }
      function mountMemo(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        var nextValue = nextCreate();
        hook.memoizedState = [nextValue, nextDeps];
        return nextValue;
      }
      function updateMemo(nextCreate, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        var prevState = hook.memoizedState;
        if (prevState !== null) {
          if (nextDeps !== null) {
            var prevDeps = prevState[1];
            if (areHookInputsEqual(nextDeps, prevDeps)) {
              return prevState[0];
            }
          }
        }
        var nextValue = nextCreate();
        hook.memoizedState = [nextValue, nextDeps];
        return nextValue;
      }
      function dispatchAction(fiber, queue, action3) {
        (function() {
          if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
            {
              throw ReactError(Error("Too many re-renders. React limits the number of renders to prevent an infinite loop."));
            }
          }
        })();
        {
          !(typeof arguments[3] !== "function") ? warning$1(false, "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().") : void 0;
        }
        var alternate = fiber.alternate;
        if (fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1) {
          didScheduleRenderPhaseUpdate = true;
          var update = {
            expirationTime: renderExpirationTime$1,
            suspenseConfig: null,
            action: action3,
            eagerReducer: null,
            eagerState: null,
            next: null
          };
          {
            update.priority = getCurrentPriorityLevel();
          }
          if (renderPhaseUpdates === null) {
            renderPhaseUpdates = new Map();
          }
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
          if (firstRenderPhaseUpdate === void 0) {
            renderPhaseUpdates.set(queue, update);
          } else {
            var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
            while (lastRenderPhaseUpdate.next !== null) {
              lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            }
            lastRenderPhaseUpdate.next = update;
          }
        } else {
          var currentTime = requestCurrentTime();
          var suspenseConfig = requestCurrentSuspenseConfig();
          var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
          var _update2 = {
            expirationTime,
            suspenseConfig,
            action: action3,
            eagerReducer: null,
            eagerState: null,
            next: null
          };
          {
            _update2.priority = getCurrentPriorityLevel();
          }
          var last = queue.last;
          if (last === null) {
            _update2.next = _update2;
          } else {
            var first = last.next;
            if (first !== null) {
              _update2.next = first;
            }
            last.next = _update2;
          }
          queue.last = _update2;
          if (fiber.expirationTime === NoWork && (alternate === null || alternate.expirationTime === NoWork)) {
            var lastRenderedReducer = queue.lastRenderedReducer;
            if (lastRenderedReducer !== null) {
              var prevDispatcher;
              {
                prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              }
              try {
                var currentState = queue.lastRenderedState;
                var eagerState = lastRenderedReducer(currentState, action3);
                _update2.eagerReducer = lastRenderedReducer;
                _update2.eagerState = eagerState;
                if (is$1(eagerState, currentState)) {
                  return;
                }
              } catch (error) {
              } finally {
                {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              }
            }
          }
          {
            if (typeof jest !== "undefined") {
              warnIfNotScopedWithMatchingAct(fiber);
              warnIfNotCurrentlyActingUpdatesInDev(fiber);
            }
          }
          scheduleWork(fiber, expirationTime);
        }
      }
      var ContextOnlyDispatcher = {
        readContext,
        useCallback: throwInvalidHookError,
        useContext: throwInvalidHookError,
        useEffect: throwInvalidHookError,
        useImperativeHandle: throwInvalidHookError,
        useLayoutEffect: throwInvalidHookError,
        useMemo: throwInvalidHookError,
        useReducer: throwInvalidHookError,
        useRef: throwInvalidHookError,
        useState: throwInvalidHookError,
        useDebugValue: throwInvalidHookError,
        useResponder: throwInvalidHookError
      };
      var HooksDispatcherOnMountInDEV = null;
      var HooksDispatcherOnMountWithHookTypesInDEV = null;
      var HooksDispatcherOnUpdateInDEV = null;
      var InvalidNestedHooksDispatcherOnMountInDEV = null;
      var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
      {
        var warnInvalidContextAccess = function() {
          warning$1(false, "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        };
        var warnInvalidHookAccess = function() {
          warning$1(false, "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks");
        };
        HooksDispatcherOnMountInDEV = {
          readContext: function(context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback: function(callback, deps) {
            currentHookNameInDev = "useCallback";
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            return mountCallback(callback, deps);
          },
          useContext: function(context, observedBits) {
            currentHookNameInDev = "useContext";
            mountHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function(create, deps) {
            currentHookNameInDev = "useEffect";
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            return mountEffect(create, deps);
          },
          useImperativeHandle: function(ref, create, deps) {
            currentHookNameInDev = "useImperativeHandle";
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            return mountImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function(create, deps) {
            currentHookNameInDev = "useLayoutEffect";
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            return mountLayoutEffect(create, deps);
          },
          useMemo: function(create, deps) {
            currentHookNameInDev = "useMemo";
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountMemo(create, deps);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useReducer: function(reducer, initialArg, init) {
            currentHookNameInDev = "useReducer";
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useRef: function(initialValue) {
            currentHookNameInDev = "useRef";
            mountHookTypesDev();
            return mountRef(initialValue);
          },
          useState: function(initialState) {
            currentHookNameInDev = "useState";
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountState(initialState);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useDebugValue: function(value, formatterFn) {
            currentHookNameInDev = "useDebugValue";
            mountHookTypesDev();
            return mountDebugValue(value, formatterFn);
          },
          useResponder: function(responder, props) {
            currentHookNameInDev = "useResponder";
            mountHookTypesDev();
            return createResponderListener(responder, props);
          }
        };
        HooksDispatcherOnMountWithHookTypesInDEV = {
          readContext: function(context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback: function(callback, deps) {
            currentHookNameInDev = "useCallback";
            updateHookTypesDev();
            return mountCallback(callback, deps);
          },
          useContext: function(context, observedBits) {
            currentHookNameInDev = "useContext";
            updateHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function(create, deps) {
            currentHookNameInDev = "useEffect";
            updateHookTypesDev();
            return mountEffect(create, deps);
          },
          useImperativeHandle: function(ref, create, deps) {
            currentHookNameInDev = "useImperativeHandle";
            updateHookTypesDev();
            return mountImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function(create, deps) {
            currentHookNameInDev = "useLayoutEffect";
            updateHookTypesDev();
            return mountLayoutEffect(create, deps);
          },
          useMemo: function(create, deps) {
            currentHookNameInDev = "useMemo";
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountMemo(create, deps);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useReducer: function(reducer, initialArg, init) {
            currentHookNameInDev = "useReducer";
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useRef: function(initialValue) {
            currentHookNameInDev = "useRef";
            updateHookTypesDev();
            return mountRef(initialValue);
          },
          useState: function(initialState) {
            currentHookNameInDev = "useState";
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountState(initialState);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useDebugValue: function(value, formatterFn) {
            currentHookNameInDev = "useDebugValue";
            updateHookTypesDev();
            return mountDebugValue(value, formatterFn);
          },
          useResponder: function(responder, props) {
            currentHookNameInDev = "useResponder";
            updateHookTypesDev();
            return createResponderListener(responder, props);
          }
        };
        HooksDispatcherOnUpdateInDEV = {
          readContext: function(context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback: function(callback, deps) {
            currentHookNameInDev = "useCallback";
            updateHookTypesDev();
            return updateCallback(callback, deps);
          },
          useContext: function(context, observedBits) {
            currentHookNameInDev = "useContext";
            updateHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function(create, deps) {
            currentHookNameInDev = "useEffect";
            updateHookTypesDev();
            return updateEffect(create, deps);
          },
          useImperativeHandle: function(ref, create, deps) {
            currentHookNameInDev = "useImperativeHandle";
            updateHookTypesDev();
            return updateImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function(create, deps) {
            currentHookNameInDev = "useLayoutEffect";
            updateHookTypesDev();
            return updateLayoutEffect(create, deps);
          },
          useMemo: function(create, deps) {
            currentHookNameInDev = "useMemo";
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
            try {
              return updateMemo(create, deps);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useReducer: function(reducer, initialArg, init) {
            currentHookNameInDev = "useReducer";
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
            try {
              return updateReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useRef: function(initialValue) {
            currentHookNameInDev = "useRef";
            updateHookTypesDev();
            return updateRef(initialValue);
          },
          useState: function(initialState) {
            currentHookNameInDev = "useState";
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
            try {
              return updateState(initialState);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useDebugValue: function(value, formatterFn) {
            currentHookNameInDev = "useDebugValue";
            updateHookTypesDev();
            return updateDebugValue(value, formatterFn);
          },
          useResponder: function(responder, props) {
            currentHookNameInDev = "useResponder";
            updateHookTypesDev();
            return createResponderListener(responder, props);
          }
        };
        InvalidNestedHooksDispatcherOnMountInDEV = {
          readContext: function(context, observedBits) {
            warnInvalidContextAccess();
            return readContext(context, observedBits);
          },
          useCallback: function(callback, deps) {
            currentHookNameInDev = "useCallback";
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountCallback(callback, deps);
          },
          useContext: function(context, observedBits) {
            currentHookNameInDev = "useContext";
            warnInvalidHookAccess();
            mountHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function(create, deps) {
            currentHookNameInDev = "useEffect";
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountEffect(create, deps);
          },
          useImperativeHandle: function(ref, create, deps) {
            currentHookNameInDev = "useImperativeHandle";
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function(create, deps) {
            currentHookNameInDev = "useLayoutEffect";
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountLayoutEffect(create, deps);
          },
          useMemo: function(create, deps) {
            currentHookNameInDev = "useMemo";
            warnInvalidHookAccess();
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountMemo(create, deps);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useReducer: function(reducer, initialArg, init) {
            currentHookNameInDev = "useReducer";
            warnInvalidHookAccess();
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useRef: function(initialValue) {
            currentHookNameInDev = "useRef";
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountRef(initialValue);
          },
          useState: function(initialState) {
            currentHookNameInDev = "useState";
            warnInvalidHookAccess();
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountState(initialState);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useDebugValue: function(value, formatterFn) {
            currentHookNameInDev = "useDebugValue";
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountDebugValue(value, formatterFn);
          },
          useResponder: function(responder, props) {
            currentHookNameInDev = "useResponder";
            warnInvalidHookAccess();
            mountHookTypesDev();
            return createResponderListener(responder, props);
          }
        };
        InvalidNestedHooksDispatcherOnUpdateInDEV = {
          readContext: function(context, observedBits) {
            warnInvalidContextAccess();
            return readContext(context, observedBits);
          },
          useCallback: function(callback, deps) {
            currentHookNameInDev = "useCallback";
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateCallback(callback, deps);
          },
          useContext: function(context, observedBits) {
            currentHookNameInDev = "useContext";
            warnInvalidHookAccess();
            updateHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function(create, deps) {
            currentHookNameInDev = "useEffect";
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateEffect(create, deps);
          },
          useImperativeHandle: function(ref, create, deps) {
            currentHookNameInDev = "useImperativeHandle";
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function(create, deps) {
            currentHookNameInDev = "useLayoutEffect";
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateLayoutEffect(create, deps);
          },
          useMemo: function(create, deps) {
            currentHookNameInDev = "useMemo";
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
            try {
              return updateMemo(create, deps);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useReducer: function(reducer, initialArg, init) {
            currentHookNameInDev = "useReducer";
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
            try {
              return updateReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useRef: function(initialValue) {
            currentHookNameInDev = "useRef";
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateRef(initialValue);
          },
          useState: function(initialState) {
            currentHookNameInDev = "useState";
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
            try {
              return updateState(initialState);
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          },
          useDebugValue: function(value, formatterFn) {
            currentHookNameInDev = "useDebugValue";
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateDebugValue(value, formatterFn);
          },
          useResponder: function(responder, props) {
            currentHookNameInDev = "useResponder";
            warnInvalidHookAccess();
            updateHookTypesDev();
            return createResponderListener(responder, props);
          }
        };
      }
      var now$1 = Scheduler.unstable_now;
      var commitTime = 0;
      var profilerStartTime = -1;
      function getCommitTime() {
        return commitTime;
      }
      function recordCommitTime() {
        if (!enableProfilerTimer) {
          return;
        }
        commitTime = now$1();
      }
      function startProfilerTimer(fiber) {
        if (!enableProfilerTimer) {
          return;
        }
        profilerStartTime = now$1();
        if (fiber.actualStartTime < 0) {
          fiber.actualStartTime = now$1();
        }
      }
      function stopProfilerTimerIfRunning(fiber) {
        if (!enableProfilerTimer) {
          return;
        }
        profilerStartTime = -1;
      }
      function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
        if (!enableProfilerTimer) {
          return;
        }
        if (profilerStartTime >= 0) {
          var elapsedTime = now$1() - profilerStartTime;
          fiber.actualDuration += elapsedTime;
          if (overrideBaseTime) {
            fiber.selfBaseDuration = elapsedTime;
          }
          profilerStartTime = -1;
        }
      }
      var hydrationParentFiber = null;
      var nextHydratableInstance = null;
      var isHydrating = false;
      function warnIfHydrating() {
        {
          !!isHydrating ? warning$1(false, "We should not be hydrating here. This is a bug in React. Please file a bug.") : void 0;
        }
      }
      function enterHydrationState(fiber) {
        if (!supportsHydration) {
          return false;
        }
        var parentInstance = fiber.stateNode.containerInfo;
        nextHydratableInstance = getFirstHydratableChild(parentInstance);
        hydrationParentFiber = fiber;
        isHydrating = true;
        return true;
      }
      function reenterHydrationStateFromDehydratedSuspenseInstance(fiber, suspenseInstance) {
        if (!supportsHydration) {
          return false;
        }
        nextHydratableInstance = getNextHydratableSibling(suspenseInstance);
        popToNextHostParent(fiber);
        isHydrating = true;
        return true;
      }
      function deleteHydratableInstance(returnFiber, instance) {
        {
          switch (returnFiber.tag) {
            case HostRoot:
              didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
              break;
            case HostComponent:
              didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
              break;
          }
        }
        var childToDelete = createFiberFromHostInstanceForDeletion();
        childToDelete.stateNode = instance;
        childToDelete.return = returnFiber;
        childToDelete.effectTag = Deletion;
        if (returnFiber.lastEffect !== null) {
          returnFiber.lastEffect.nextEffect = childToDelete;
          returnFiber.lastEffect = childToDelete;
        } else {
          returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
        }
      }
      function insertNonHydratedInstance(returnFiber, fiber) {
        fiber.effectTag = fiber.effectTag & ~Hydrating | Placement;
        {
          switch (returnFiber.tag) {
            case HostRoot: {
              var parentContainer = returnFiber.stateNode.containerInfo;
              switch (fiber.tag) {
                case HostComponent:
                  var type = fiber.type;
                  var props = fiber.pendingProps;
                  didNotFindHydratableContainerInstance(parentContainer, type, props);
                  break;
                case HostText:
                  var text = fiber.pendingProps;
                  didNotFindHydratableContainerTextInstance(parentContainer, text);
                  break;
                case SuspenseComponent:
                  break;
              }
              break;
            }
            case HostComponent: {
              var parentType = returnFiber.type;
              var parentProps = returnFiber.memoizedProps;
              var parentInstance = returnFiber.stateNode;
              switch (fiber.tag) {
                case HostComponent:
                  var _type = fiber.type;
                  var _props = fiber.pendingProps;
                  didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
                  break;
                case HostText:
                  var _text = fiber.pendingProps;
                  didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                  break;
                case SuspenseComponent:
                  didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance);
                  break;
              }
              break;
            }
            default:
              return;
          }
        }
      }
      function tryHydrate(fiber, nextInstance) {
        switch (fiber.tag) {
          case HostComponent: {
            var type = fiber.type;
            var props = fiber.pendingProps;
            var instance = canHydrateInstance(nextInstance, type, props);
            if (instance !== null) {
              fiber.stateNode = instance;
              return true;
            }
            return false;
          }
          case HostText: {
            var text = fiber.pendingProps;
            var textInstance = canHydrateTextInstance(nextInstance, text);
            if (textInstance !== null) {
              fiber.stateNode = textInstance;
              return true;
            }
            return false;
          }
          case SuspenseComponent: {
            if (enableSuspenseServerRenderer) {
              var suspenseInstance = canHydrateSuspenseInstance(nextInstance);
              if (suspenseInstance !== null) {
                var suspenseState = {
                  dehydrated: suspenseInstance,
                  retryTime: Never
                };
                fiber.memoizedState = suspenseState;
                var dehydratedFragment = createFiberFromDehydratedFragment(suspenseInstance);
                dehydratedFragment.return = fiber;
                fiber.child = dehydratedFragment;
                return true;
              }
            }
            return false;
          }
          default:
            return false;
        }
      }
      function tryToClaimNextHydratableInstance(fiber) {
        if (!isHydrating) {
          return;
        }
        var nextInstance = nextHydratableInstance;
        if (!nextInstance) {
          insertNonHydratedInstance(hydrationParentFiber, fiber);
          isHydrating = false;
          hydrationParentFiber = fiber;
          return;
        }
        var firstAttemptedInstance = nextInstance;
        if (!tryHydrate(fiber, nextInstance)) {
          nextInstance = getNextHydratableSibling(firstAttemptedInstance);
          if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
            insertNonHydratedInstance(hydrationParentFiber, fiber);
            isHydrating = false;
            hydrationParentFiber = fiber;
            return;
          }
          deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
        }
        hydrationParentFiber = fiber;
        nextHydratableInstance = getFirstHydratableChild(nextInstance);
      }
      function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
        if (!supportsHydration) {
          (function() {
            {
              {
                throw ReactError(Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
        }
        var instance = fiber.stateNode;
        var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
        fiber.updateQueue = updatePayload;
        if (updatePayload !== null) {
          return true;
        }
        return false;
      }
      function prepareToHydrateHostTextInstance(fiber) {
        if (!supportsHydration) {
          (function() {
            {
              {
                throw ReactError(Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
        }
        var textInstance = fiber.stateNode;
        var textContent = fiber.memoizedProps;
        var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
        {
          if (shouldUpdate) {
            var returnFiber = hydrationParentFiber;
            if (returnFiber !== null) {
              switch (returnFiber.tag) {
                case HostRoot: {
                  var parentContainer = returnFiber.stateNode.containerInfo;
                  didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                  break;
                }
                case HostComponent: {
                  var parentType = returnFiber.type;
                  var parentProps = returnFiber.memoizedProps;
                  var parentInstance = returnFiber.stateNode;
                  didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                  break;
                }
              }
            }
          }
        }
        return shouldUpdate;
      }
      function prepareToHydrateHostSuspenseInstance(fiber) {
        if (!supportsHydration) {
          (function() {
            {
              {
                throw ReactError(Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
        }
        var suspenseState = fiber.memoizedState;
        var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
        (function() {
          if (!suspenseInstance) {
            {
              throw ReactError(Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."));
            }
          }
        })();
        hydrateSuspenseInstance(suspenseInstance, fiber);
      }
      function skipPastDehydratedSuspenseInstance(fiber) {
        if (!supportsHydration) {
          (function() {
            {
              {
                throw ReactError(Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."));
              }
            }
          })();
        }
        var suspenseState = fiber.memoizedState;
        var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
        if (suspenseInstance === null) {
          return nextHydratableInstance;
        }
        return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
      }
      function popToNextHostParent(fiber) {
        var parent = fiber.return;
        while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== SuspenseComponent) {
          parent = parent.return;
        }
        hydrationParentFiber = parent;
      }
      function popHydrationState(fiber) {
        if (!supportsHydration) {
          return false;
        }
        if (fiber !== hydrationParentFiber) {
          return false;
        }
        if (!isHydrating) {
          popToNextHostParent(fiber);
          isHydrating = true;
          return false;
        }
        var type = fiber.type;
        if (fiber.tag !== HostComponent || type !== "head" && type !== "body" && !shouldSetTextContent(type, fiber.memoizedProps)) {
          var nextInstance = nextHydratableInstance;
          while (nextInstance) {
            deleteHydratableInstance(fiber, nextInstance);
            nextInstance = getNextHydratableSibling(nextInstance);
          }
        }
        popToNextHostParent(fiber);
        if (fiber.tag === SuspenseComponent) {
          nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
        } else {
          nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
        }
        return true;
      }
      function resetHydrationState() {
        if (!supportsHydration) {
          return;
        }
        hydrationParentFiber = null;
        nextHydratableInstance = null;
        isHydrating = false;
      }
      var ReactCurrentOwner$3 = ReactSharedInternals.ReactCurrentOwner;
      var didReceiveUpdate = false;
      var didWarnAboutBadClass;
      var didWarnAboutModulePatternComponent;
      var didWarnAboutContextTypeOnFunctionComponent;
      var didWarnAboutGetDerivedStateOnFunctionComponent;
      var didWarnAboutFunctionRefs;
      var didWarnAboutReassigningProps;
      var didWarnAboutMaxDuration;
      var didWarnAboutRevealOrder;
      var didWarnAboutTailOptions;
      var didWarnAboutDefaultPropsOnFunctionComponent;
      {
        didWarnAboutBadClass = {};
        didWarnAboutModulePatternComponent = {};
        didWarnAboutContextTypeOnFunctionComponent = {};
        didWarnAboutGetDerivedStateOnFunctionComponent = {};
        didWarnAboutFunctionRefs = {};
        didWarnAboutReassigningProps = false;
        didWarnAboutMaxDuration = false;
        didWarnAboutRevealOrder = {};
        didWarnAboutTailOptions = {};
        didWarnAboutDefaultPropsOnFunctionComponent = {};
      }
      function reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2) {
        if (current$$1 === null) {
          workInProgress2.child = mountChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2);
        } else {
          workInProgress2.child = reconcileChildFibers(workInProgress2, current$$1.child, nextChildren, renderExpirationTime2);
        }
      }
      function forceUnmountCurrentAndReconcile(current$$1, workInProgress2, nextChildren, renderExpirationTime2) {
        workInProgress2.child = reconcileChildFibers(workInProgress2, current$$1.child, null, renderExpirationTime2);
        workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2);
      }
      function updateForwardRef(current$$1, workInProgress2, Component, nextProps, renderExpirationTime2) {
        {
          if (workInProgress2.type !== workInProgress2.elementType) {
            var innerPropTypes = Component.propTypes;
            if (innerPropTypes) {
              checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component), getCurrentFiberStackInDev);
            }
          }
        }
        var render = Component.render;
        var ref = workInProgress2.ref;
        var nextChildren;
        prepareToReadContext(workInProgress2, renderExpirationTime2);
        {
          ReactCurrentOwner$3.current = workInProgress2;
          setCurrentPhase("render");
          nextChildren = renderWithHooks(current$$1, workInProgress2, render, nextProps, ref, renderExpirationTime2);
          if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress2.mode & StrictMode) {
            if (workInProgress2.memoizedState !== null) {
              nextChildren = renderWithHooks(current$$1, workInProgress2, render, nextProps, ref, renderExpirationTime2);
            }
          }
          setCurrentPhase(null);
        }
        if (current$$1 !== null && !didReceiveUpdate) {
          bailoutHooks(current$$1, workInProgress2, renderExpirationTime2);
          return bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
        }
        workInProgress2.effectTag |= PerformedWork;
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function updateMemoComponent(current$$1, workInProgress2, Component, nextProps, updateExpirationTime, renderExpirationTime2) {
        if (current$$1 === null) {
          var type = Component.type;
          if (isSimpleFunctionComponent(type) && Component.compare === null && Component.defaultProps === void 0) {
            var resolvedType = type;
            {
              resolvedType = resolveFunctionForHotReloading(type);
            }
            workInProgress2.tag = SimpleMemoComponent;
            workInProgress2.type = resolvedType;
            {
              validateFunctionComponentInDev(workInProgress2, type);
            }
            return updateSimpleMemoComponent(current$$1, workInProgress2, resolvedType, nextProps, updateExpirationTime, renderExpirationTime2);
          }
          {
            var innerPropTypes = type.propTypes;
            if (innerPropTypes) {
              checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(type), getCurrentFiberStackInDev);
            }
          }
          var child = createFiberFromTypeAndProps(Component.type, null, nextProps, null, workInProgress2.mode, renderExpirationTime2);
          child.ref = workInProgress2.ref;
          child.return = workInProgress2;
          workInProgress2.child = child;
          return child;
        }
        {
          var _type = Component.type;
          var _innerPropTypes = _type.propTypes;
          if (_innerPropTypes) {
            checkPropTypes(_innerPropTypes, nextProps, "prop", getComponentName(_type), getCurrentFiberStackInDev);
          }
        }
        var currentChild = current$$1.child;
        if (updateExpirationTime < renderExpirationTime2) {
          var prevProps = currentChild.memoizedProps;
          var compare = Component.compare;
          compare = compare !== null ? compare : shallowEqual;
          if (compare(prevProps, nextProps) && current$$1.ref === workInProgress2.ref) {
            return bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
          }
        }
        workInProgress2.effectTag |= PerformedWork;
        var newChild = createWorkInProgress(currentChild, nextProps, renderExpirationTime2);
        newChild.ref = workInProgress2.ref;
        newChild.return = workInProgress2;
        workInProgress2.child = newChild;
        return newChild;
      }
      function updateSimpleMemoComponent(current$$1, workInProgress2, Component, nextProps, updateExpirationTime, renderExpirationTime2) {
        {
          if (workInProgress2.type !== workInProgress2.elementType) {
            var outerMemoType = workInProgress2.elementType;
            if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
              outerMemoType = refineResolvedLazyComponent(outerMemoType);
            }
            var outerPropTypes = outerMemoType && outerMemoType.propTypes;
            if (outerPropTypes) {
              checkPropTypes(outerPropTypes, nextProps, "prop", getComponentName(outerMemoType), getCurrentFiberStackInDev);
            }
          }
        }
        if (current$$1 !== null) {
          var prevProps = current$$1.memoizedProps;
          if (shallowEqual(prevProps, nextProps) && current$$1.ref === workInProgress2.ref && workInProgress2.type === current$$1.type) {
            didReceiveUpdate = false;
            if (updateExpirationTime < renderExpirationTime2) {
              return bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
            }
          }
        }
        return updateFunctionComponent(current$$1, workInProgress2, Component, nextProps, renderExpirationTime2);
      }
      function updateFragment(current$$1, workInProgress2, renderExpirationTime2) {
        var nextChildren = workInProgress2.pendingProps;
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function updateMode(current$$1, workInProgress2, renderExpirationTime2) {
        var nextChildren = workInProgress2.pendingProps.children;
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function updateProfiler(current$$1, workInProgress2, renderExpirationTime2) {
        if (enableProfilerTimer) {
          workInProgress2.effectTag |= Update;
        }
        var nextProps = workInProgress2.pendingProps;
        var nextChildren = nextProps.children;
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function markRef(current$$1, workInProgress2) {
        var ref = workInProgress2.ref;
        if (current$$1 === null && ref !== null || current$$1 !== null && current$$1.ref !== ref) {
          workInProgress2.effectTag |= Ref;
        }
      }
      function updateFunctionComponent(current$$1, workInProgress2, Component, nextProps, renderExpirationTime2) {
        {
          if (workInProgress2.type !== workInProgress2.elementType) {
            var innerPropTypes = Component.propTypes;
            if (innerPropTypes) {
              checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component), getCurrentFiberStackInDev);
            }
          }
        }
        var context;
        if (!disableLegacyContext) {
          var unmaskedContext = getUnmaskedContext(workInProgress2, Component, true);
          context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        var nextChildren;
        prepareToReadContext(workInProgress2, renderExpirationTime2);
        {
          ReactCurrentOwner$3.current = workInProgress2;
          setCurrentPhase("render");
          nextChildren = renderWithHooks(current$$1, workInProgress2, Component, nextProps, context, renderExpirationTime2);
          if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress2.mode & StrictMode) {
            if (workInProgress2.memoizedState !== null) {
              nextChildren = renderWithHooks(current$$1, workInProgress2, Component, nextProps, context, renderExpirationTime2);
            }
          }
          setCurrentPhase(null);
        }
        if (current$$1 !== null && !didReceiveUpdate) {
          bailoutHooks(current$$1, workInProgress2, renderExpirationTime2);
          return bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
        }
        workInProgress2.effectTag |= PerformedWork;
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function updateClassComponent(current$$1, workInProgress2, Component, nextProps, renderExpirationTime2) {
        {
          if (workInProgress2.type !== workInProgress2.elementType) {
            var innerPropTypes = Component.propTypes;
            if (innerPropTypes) {
              checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component), getCurrentFiberStackInDev);
            }
          }
        }
        var hasContext;
        if (isContextProvider(Component)) {
          hasContext = true;
          pushContextProvider(workInProgress2);
        } else {
          hasContext = false;
        }
        prepareToReadContext(workInProgress2, renderExpirationTime2);
        var instance = workInProgress2.stateNode;
        var shouldUpdate;
        if (instance === null) {
          if (current$$1 !== null) {
            current$$1.alternate = null;
            workInProgress2.alternate = null;
            workInProgress2.effectTag |= Placement;
          }
          constructClassInstance(workInProgress2, Component, nextProps, renderExpirationTime2);
          mountClassInstance(workInProgress2, Component, nextProps, renderExpirationTime2);
          shouldUpdate = true;
        } else if (current$$1 === null) {
          shouldUpdate = resumeMountClassInstance(workInProgress2, Component, nextProps, renderExpirationTime2);
        } else {
          shouldUpdate = updateClassInstance(current$$1, workInProgress2, Component, nextProps, renderExpirationTime2);
        }
        var nextUnitOfWork = finishClassComponent(current$$1, workInProgress2, Component, shouldUpdate, hasContext, renderExpirationTime2);
        {
          var inst = workInProgress2.stateNode;
          if (inst.props !== nextProps) {
            !didWarnAboutReassigningProps ? warning$1(false, "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentName(workInProgress2.type) || "a component") : void 0;
            didWarnAboutReassigningProps = true;
          }
        }
        return nextUnitOfWork;
      }
      function finishClassComponent(current$$1, workInProgress2, Component, shouldUpdate, hasContext, renderExpirationTime2) {
        markRef(current$$1, workInProgress2);
        var didCaptureError = (workInProgress2.effectTag & DidCapture) !== NoEffect;
        if (!shouldUpdate && !didCaptureError) {
          if (hasContext) {
            invalidateContextProvider(workInProgress2, Component, false);
          }
          return bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
        }
        var instance = workInProgress2.stateNode;
        ReactCurrentOwner$3.current = workInProgress2;
        var nextChildren;
        if (didCaptureError && typeof Component.getDerivedStateFromError !== "function") {
          nextChildren = null;
          if (enableProfilerTimer) {
            stopProfilerTimerIfRunning(workInProgress2);
          }
        } else {
          {
            setCurrentPhase("render");
            nextChildren = instance.render();
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress2.mode & StrictMode) {
              instance.render();
            }
            setCurrentPhase(null);
          }
        }
        workInProgress2.effectTag |= PerformedWork;
        if (current$$1 !== null && didCaptureError) {
          forceUnmountCurrentAndReconcile(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        } else {
          reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        }
        workInProgress2.memoizedState = instance.state;
        if (hasContext) {
          invalidateContextProvider(workInProgress2, Component, true);
        }
        return workInProgress2.child;
      }
      function pushHostRootContext(workInProgress2) {
        var root2 = workInProgress2.stateNode;
        if (root2.pendingContext) {
          pushTopLevelContextObject(workInProgress2, root2.pendingContext, root2.pendingContext !== root2.context);
        } else if (root2.context) {
          pushTopLevelContextObject(workInProgress2, root2.context, false);
        }
        pushHostContainer(workInProgress2, root2.containerInfo);
      }
      function updateHostRoot(current$$1, workInProgress2, renderExpirationTime2) {
        pushHostRootContext(workInProgress2);
        var updateQueue = workInProgress2.updateQueue;
        (function() {
          if (!(updateQueue !== null)) {
            {
              throw ReactError(Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue."));
            }
          }
        })();
        var nextProps = workInProgress2.pendingProps;
        var prevState = workInProgress2.memoizedState;
        var prevChildren = prevState !== null ? prevState.element : null;
        processUpdateQueue(workInProgress2, updateQueue, nextProps, null, renderExpirationTime2);
        var nextState = workInProgress2.memoizedState;
        var nextChildren = nextState.element;
        if (nextChildren === prevChildren) {
          resetHydrationState();
          return bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
        }
        var root2 = workInProgress2.stateNode;
        if (root2.hydrate && enterHydrationState(workInProgress2)) {
          var child = mountChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2);
          workInProgress2.child = child;
          var node = child;
          while (node) {
            node.effectTag = node.effectTag & ~Placement | Hydrating;
            node = node.sibling;
          }
        } else {
          reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
          resetHydrationState();
        }
        return workInProgress2.child;
      }
      function updateHostComponent(current$$1, workInProgress2, renderExpirationTime2) {
        pushHostContext(workInProgress2);
        if (current$$1 === null) {
          tryToClaimNextHydratableInstance(workInProgress2);
        }
        var type = workInProgress2.type;
        var nextProps = workInProgress2.pendingProps;
        var prevProps = current$$1 !== null ? current$$1.memoizedProps : null;
        var nextChildren = nextProps.children;
        var isDirectTextChild = shouldSetTextContent(type, nextProps);
        if (isDirectTextChild) {
          nextChildren = null;
        } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
          workInProgress2.effectTag |= ContentReset;
        }
        markRef(current$$1, workInProgress2);
        if (workInProgress2.mode & ConcurrentMode && renderExpirationTime2 !== Never && shouldDeprioritizeSubtree(type, nextProps)) {
          if (enableSchedulerTracing) {
            markSpawnedWork(Never);
          }
          workInProgress2.expirationTime = workInProgress2.childExpirationTime = Never;
          return null;
        }
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function updateHostText(current$$1, workInProgress2) {
        if (current$$1 === null) {
          tryToClaimNextHydratableInstance(workInProgress2);
        }
        return null;
      }
      function mountLazyComponent(_current, workInProgress2, elementType, updateExpirationTime, renderExpirationTime2) {
        if (_current !== null) {
          _current.alternate = null;
          workInProgress2.alternate = null;
          workInProgress2.effectTag |= Placement;
        }
        var props = workInProgress2.pendingProps;
        cancelWorkTimer(workInProgress2);
        var Component = readLazyComponentType(elementType);
        workInProgress2.type = Component;
        var resolvedTag = workInProgress2.tag = resolveLazyComponentTag(Component);
        startWorkTimer(workInProgress2);
        var resolvedProps = resolveDefaultProps(Component, props);
        var child;
        switch (resolvedTag) {
          case FunctionComponent: {
            {
              validateFunctionComponentInDev(workInProgress2, Component);
              workInProgress2.type = Component = resolveFunctionForHotReloading(Component);
            }
            child = updateFunctionComponent(null, workInProgress2, Component, resolvedProps, renderExpirationTime2);
            break;
          }
          case ClassComponent: {
            {
              workInProgress2.type = Component = resolveClassForHotReloading(Component);
            }
            child = updateClassComponent(null, workInProgress2, Component, resolvedProps, renderExpirationTime2);
            break;
          }
          case ForwardRef: {
            {
              workInProgress2.type = Component = resolveForwardRefForHotReloading(Component);
            }
            child = updateForwardRef(null, workInProgress2, Component, resolvedProps, renderExpirationTime2);
            break;
          }
          case MemoComponent: {
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var outerPropTypes = Component.propTypes;
                if (outerPropTypes) {
                  checkPropTypes(outerPropTypes, resolvedProps, "prop", getComponentName(Component), getCurrentFiberStackInDev);
                }
              }
            }
            child = updateMemoComponent(null, workInProgress2, Component, resolveDefaultProps(Component.type, resolvedProps), updateExpirationTime, renderExpirationTime2);
            break;
          }
          default: {
            var hint = "";
            {
              if (Component !== null && typeof Component === "object" && Component.$$typeof === REACT_LAZY_TYPE) {
                hint = " Did you wrap a component in React.lazy() more than once?";
              }
            }
            (function() {
              {
                {
                  throw ReactError(Error("Element type is invalid. Received a promise that resolves to: " + Component + ". Lazy element type must resolve to a class or function." + hint));
                }
              }
            })();
          }
        }
        return child;
      }
      function mountIncompleteClassComponent(_current, workInProgress2, Component, nextProps, renderExpirationTime2) {
        if (_current !== null) {
          _current.alternate = null;
          workInProgress2.alternate = null;
          workInProgress2.effectTag |= Placement;
        }
        workInProgress2.tag = ClassComponent;
        var hasContext;
        if (isContextProvider(Component)) {
          hasContext = true;
          pushContextProvider(workInProgress2);
        } else {
          hasContext = false;
        }
        prepareToReadContext(workInProgress2, renderExpirationTime2);
        constructClassInstance(workInProgress2, Component, nextProps, renderExpirationTime2);
        mountClassInstance(workInProgress2, Component, nextProps, renderExpirationTime2);
        return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderExpirationTime2);
      }
      function mountIndeterminateComponent(_current, workInProgress2, Component, renderExpirationTime2) {
        if (_current !== null) {
          _current.alternate = null;
          workInProgress2.alternate = null;
          workInProgress2.effectTag |= Placement;
        }
        var props = workInProgress2.pendingProps;
        var context;
        if (!disableLegacyContext) {
          var unmaskedContext = getUnmaskedContext(workInProgress2, Component, false);
          context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        prepareToReadContext(workInProgress2, renderExpirationTime2);
        var value;
        {
          if (Component.prototype && typeof Component.prototype.render === "function") {
            var componentName = getComponentName(Component) || "Unknown";
            if (!didWarnAboutBadClass[componentName]) {
              warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
              didWarnAboutBadClass[componentName] = true;
            }
          }
          if (workInProgress2.mode & StrictMode) {
            ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, null);
          }
          ReactCurrentOwner$3.current = workInProgress2;
          value = renderWithHooks(null, workInProgress2, Component, props, context, renderExpirationTime2);
        }
        workInProgress2.effectTag |= PerformedWork;
        if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
          {
            var _componentName = getComponentName(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName]) {
              warningWithoutStack$1(false, "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
              didWarnAboutModulePatternComponent[_componentName] = true;
            }
          }
          workInProgress2.tag = ClassComponent;
          resetHooks();
          var hasContext = false;
          if (isContextProvider(Component)) {
            hasContext = true;
            pushContextProvider(workInProgress2);
          } else {
            hasContext = false;
          }
          workInProgress2.memoizedState = value.state !== null && value.state !== void 0 ? value.state : null;
          var getDerivedStateFromProps = Component.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            applyDerivedStateFromProps(workInProgress2, Component, getDerivedStateFromProps, props);
          }
          adoptClassInstance(workInProgress2, value);
          mountClassInstance(workInProgress2, Component, props, renderExpirationTime2);
          return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderExpirationTime2);
        } else {
          workInProgress2.tag = FunctionComponent;
          {
            if (disableLegacyContext && Component.contextTypes) {
              warningWithoutStack$1(false, "%s uses the legacy contextTypes API which is no longer supported. Use React.createContext() with React.useContext() instead.", getComponentName(Component) || "Unknown");
            }
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress2.mode & StrictMode) {
              if (workInProgress2.memoizedState !== null) {
                value = renderWithHooks(null, workInProgress2, Component, props, context, renderExpirationTime2);
              }
            }
          }
          reconcileChildren(null, workInProgress2, value, renderExpirationTime2);
          {
            validateFunctionComponentInDev(workInProgress2, Component);
          }
          return workInProgress2.child;
        }
      }
      function validateFunctionComponentInDev(workInProgress2, Component) {
        if (Component) {
          !!Component.childContextTypes ? warningWithoutStack$1(false, "%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component") : void 0;
        }
        if (workInProgress2.ref !== null) {
          var info = "";
          var ownerName = getCurrentFiberOwnerNameInDevOrNull();
          if (ownerName) {
            info += "\n\nCheck the render method of `" + ownerName + "`.";
          }
          var warningKey = ownerName || workInProgress2._debugID || "";
          var debugSource = workInProgress2._debugSource;
          if (debugSource) {
            warningKey = debugSource.fileName + ":" + debugSource.lineNumber;
          }
          if (!didWarnAboutFunctionRefs[warningKey]) {
            didWarnAboutFunctionRefs[warningKey] = true;
            warning$1(false, "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", info);
          }
        }
        if (warnAboutDefaultPropsOnFunctionComponents && Component.defaultProps !== void 0) {
          var componentName = getComponentName(Component) || "Unknown";
          if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
            warningWithoutStack$1(false, "%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", componentName);
            didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
          }
        }
        if (typeof Component.getDerivedStateFromProps === "function") {
          var _componentName2 = getComponentName(Component) || "Unknown";
          if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2]) {
            warningWithoutStack$1(false, "%s: Function components do not support getDerivedStateFromProps.", _componentName2);
            didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = true;
          }
        }
        if (typeof Component.contextType === "object" && Component.contextType !== null) {
          var _componentName3 = getComponentName(Component) || "Unknown";
          if (!didWarnAboutContextTypeOnFunctionComponent[_componentName3]) {
            warningWithoutStack$1(false, "%s: Function components do not support contextType.", _componentName3);
            didWarnAboutContextTypeOnFunctionComponent[_componentName3] = true;
          }
        }
      }
      var SUSPENDED_MARKER = {
        dehydrated: null,
        retryTime: Never
      };
      function shouldRemainOnFallback(suspenseContext, current$$1, workInProgress2) {
        return hasSuspenseContext(suspenseContext, ForceSuspenseFallback) && (current$$1 === null || current$$1.memoizedState !== null);
      }
      function updateSuspenseComponent(current$$1, workInProgress2, renderExpirationTime2) {
        var mode = workInProgress2.mode;
        var nextProps = workInProgress2.pendingProps;
        {
          if (shouldSuspend(workInProgress2)) {
            workInProgress2.effectTag |= DidCapture;
          }
        }
        var suspenseContext = suspenseStackCursor.current;
        var nextDidTimeout = false;
        var didSuspend = (workInProgress2.effectTag & DidCapture) !== NoEffect;
        if (didSuspend || shouldRemainOnFallback(suspenseContext, current$$1, workInProgress2)) {
          nextDidTimeout = true;
          workInProgress2.effectTag &= ~DidCapture;
        } else {
          if (current$$1 === null || current$$1.memoizedState !== null) {
            if (nextProps.fallback !== void 0 && nextProps.unstable_avoidThisFallback !== true) {
              suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
            }
          }
        }
        suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
        pushSuspenseContext(workInProgress2, suspenseContext);
        {
          if ("maxDuration" in nextProps) {
            if (!didWarnAboutMaxDuration) {
              didWarnAboutMaxDuration = true;
              warning$1(false, "maxDuration has been removed from React. Remove the maxDuration prop.");
            }
          }
        }
        if (current$$1 === null) {
          if (enableSuspenseServerRenderer) {
            if (nextProps.fallback !== void 0) {
              tryToClaimNextHydratableInstance(workInProgress2);
              var suspenseState = workInProgress2.memoizedState;
              if (suspenseState !== null) {
                var dehydrated = suspenseState.dehydrated;
                if (dehydrated !== null) {
                  return mountDehydratedSuspenseComponent(workInProgress2, dehydrated, renderExpirationTime2);
                }
              }
            }
          }
          if (nextDidTimeout) {
            var nextFallbackChildren = nextProps.fallback;
            var primaryChildFragment = createFiberFromFragment(null, mode, NoWork, null);
            primaryChildFragment.return = workInProgress2;
            if ((workInProgress2.mode & BatchedMode) === NoMode) {
              var progressedState = workInProgress2.memoizedState;
              var progressedPrimaryChild = progressedState !== null ? workInProgress2.child.child : workInProgress2.child;
              primaryChildFragment.child = progressedPrimaryChild;
              var progressedChild = progressedPrimaryChild;
              while (progressedChild !== null) {
                progressedChild.return = primaryChildFragment;
                progressedChild = progressedChild.sibling;
              }
            }
            var fallbackChildFragment = createFiberFromFragment(nextFallbackChildren, mode, renderExpirationTime2, null);
            fallbackChildFragment.return = workInProgress2;
            primaryChildFragment.sibling = fallbackChildFragment;
            workInProgress2.memoizedState = SUSPENDED_MARKER;
            workInProgress2.child = primaryChildFragment;
            return fallbackChildFragment;
          } else {
            var nextPrimaryChildren = nextProps.children;
            workInProgress2.memoizedState = null;
            return workInProgress2.child = mountChildFibers(workInProgress2, null, nextPrimaryChildren, renderExpirationTime2);
          }
        } else {
          var prevState = current$$1.memoizedState;
          if (prevState !== null) {
            if (enableSuspenseServerRenderer) {
              var _dehydrated = prevState.dehydrated;
              if (_dehydrated !== null) {
                if (!didSuspend) {
                  return updateDehydratedSuspenseComponent(current$$1, workInProgress2, _dehydrated, prevState, renderExpirationTime2);
                } else if (workInProgress2.memoizedState !== null) {
                  workInProgress2.child = current$$1.child;
                  workInProgress2.effectTag |= DidCapture;
                  return null;
                } else {
                  var _nextFallbackChildren = nextProps.fallback;
                  var _primaryChildFragment = createFiberFromFragment(null, mode, NoWork, null);
                  _primaryChildFragment.return = workInProgress2;
                  _primaryChildFragment.child = null;
                  if ((workInProgress2.mode & BatchedMode) === NoMode) {
                    var _progressedChild = _primaryChildFragment.child = workInProgress2.child;
                    while (_progressedChild !== null) {
                      _progressedChild.return = _primaryChildFragment;
                      _progressedChild = _progressedChild.sibling;
                    }
                  } else {
                    reconcileChildFibers(workInProgress2, current$$1.child, null, renderExpirationTime2);
                  }
                  if (enableProfilerTimer && workInProgress2.mode & ProfileMode) {
                    var treeBaseDuration = 0;
                    var hiddenChild = _primaryChildFragment.child;
                    while (hiddenChild !== null) {
                      treeBaseDuration += hiddenChild.treeBaseDuration;
                      hiddenChild = hiddenChild.sibling;
                    }
                    _primaryChildFragment.treeBaseDuration = treeBaseDuration;
                  }
                  var _fallbackChildFragment = createFiberFromFragment(_nextFallbackChildren, mode, renderExpirationTime2, null);
                  _fallbackChildFragment.return = workInProgress2;
                  _primaryChildFragment.sibling = _fallbackChildFragment;
                  _fallbackChildFragment.effectTag |= Placement;
                  _primaryChildFragment.childExpirationTime = NoWork;
                  workInProgress2.memoizedState = SUSPENDED_MARKER;
                  workInProgress2.child = _primaryChildFragment;
                  return _fallbackChildFragment;
                }
              }
            }
            var currentPrimaryChildFragment = current$$1.child;
            var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
            if (nextDidTimeout) {
              var _nextFallbackChildren2 = nextProps.fallback;
              var _primaryChildFragment2 = createWorkInProgress(currentPrimaryChildFragment, currentPrimaryChildFragment.pendingProps, NoWork);
              _primaryChildFragment2.return = workInProgress2;
              if ((workInProgress2.mode & BatchedMode) === NoMode) {
                var _progressedState = workInProgress2.memoizedState;
                var _progressedPrimaryChild = _progressedState !== null ? workInProgress2.child.child : workInProgress2.child;
                if (_progressedPrimaryChild !== currentPrimaryChildFragment.child) {
                  _primaryChildFragment2.child = _progressedPrimaryChild;
                  var _progressedChild2 = _progressedPrimaryChild;
                  while (_progressedChild2 !== null) {
                    _progressedChild2.return = _primaryChildFragment2;
                    _progressedChild2 = _progressedChild2.sibling;
                  }
                }
              }
              if (enableProfilerTimer && workInProgress2.mode & ProfileMode) {
                var _treeBaseDuration = 0;
                var _hiddenChild = _primaryChildFragment2.child;
                while (_hiddenChild !== null) {
                  _treeBaseDuration += _hiddenChild.treeBaseDuration;
                  _hiddenChild = _hiddenChild.sibling;
                }
                _primaryChildFragment2.treeBaseDuration = _treeBaseDuration;
              }
              var _fallbackChildFragment2 = createWorkInProgress(currentFallbackChildFragment, _nextFallbackChildren2, currentFallbackChildFragment.expirationTime);
              _fallbackChildFragment2.return = workInProgress2;
              _primaryChildFragment2.sibling = _fallbackChildFragment2;
              _primaryChildFragment2.childExpirationTime = NoWork;
              workInProgress2.memoizedState = SUSPENDED_MARKER;
              workInProgress2.child = _primaryChildFragment2;
              return _fallbackChildFragment2;
            } else {
              var _nextPrimaryChildren = nextProps.children;
              var currentPrimaryChild = currentPrimaryChildFragment.child;
              var primaryChild = reconcileChildFibers(workInProgress2, currentPrimaryChild, _nextPrimaryChildren, renderExpirationTime2);
              workInProgress2.memoizedState = null;
              return workInProgress2.child = primaryChild;
            }
          } else {
            var _currentPrimaryChild = current$$1.child;
            if (nextDidTimeout) {
              var _nextFallbackChildren3 = nextProps.fallback;
              var _primaryChildFragment3 = createFiberFromFragment(null, mode, NoWork, null);
              _primaryChildFragment3.return = workInProgress2;
              _primaryChildFragment3.child = _currentPrimaryChild;
              if (_currentPrimaryChild !== null) {
                _currentPrimaryChild.return = _primaryChildFragment3;
              }
              if ((workInProgress2.mode & BatchedMode) === NoMode) {
                var _progressedState2 = workInProgress2.memoizedState;
                var _progressedPrimaryChild2 = _progressedState2 !== null ? workInProgress2.child.child : workInProgress2.child;
                _primaryChildFragment3.child = _progressedPrimaryChild2;
                var _progressedChild3 = _progressedPrimaryChild2;
                while (_progressedChild3 !== null) {
                  _progressedChild3.return = _primaryChildFragment3;
                  _progressedChild3 = _progressedChild3.sibling;
                }
              }
              if (enableProfilerTimer && workInProgress2.mode & ProfileMode) {
                var _treeBaseDuration2 = 0;
                var _hiddenChild2 = _primaryChildFragment3.child;
                while (_hiddenChild2 !== null) {
                  _treeBaseDuration2 += _hiddenChild2.treeBaseDuration;
                  _hiddenChild2 = _hiddenChild2.sibling;
                }
                _primaryChildFragment3.treeBaseDuration = _treeBaseDuration2;
              }
              var _fallbackChildFragment3 = createFiberFromFragment(_nextFallbackChildren3, mode, renderExpirationTime2, null);
              _fallbackChildFragment3.return = workInProgress2;
              _primaryChildFragment3.sibling = _fallbackChildFragment3;
              _fallbackChildFragment3.effectTag |= Placement;
              _primaryChildFragment3.childExpirationTime = NoWork;
              workInProgress2.memoizedState = SUSPENDED_MARKER;
              workInProgress2.child = _primaryChildFragment3;
              return _fallbackChildFragment3;
            } else {
              workInProgress2.memoizedState = null;
              var _nextPrimaryChildren2 = nextProps.children;
              return workInProgress2.child = reconcileChildFibers(workInProgress2, _currentPrimaryChild, _nextPrimaryChildren2, renderExpirationTime2);
            }
          }
        }
      }
      function retrySuspenseComponentWithoutHydrating(current$$1, workInProgress2, renderExpirationTime2) {
        workInProgress2.memoizedState = null;
        var nextProps = workInProgress2.pendingProps;
        var nextChildren = nextProps.children;
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function mountDehydratedSuspenseComponent(workInProgress2, suspenseInstance, renderExpirationTime2) {
        if ((workInProgress2.mode & BatchedMode) === NoMode) {
          {
            warning$1(false, "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOM.unstable_createSyncRoot(container, { hydrate: true }).render(element) or remove the Suspense components from the server rendered components.");
          }
          workInProgress2.expirationTime = Sync;
        } else if (isSuspenseInstanceFallback(suspenseInstance)) {
          var serverDisplayTime = requestCurrentTime();
          var newExpirationTime = computeAsyncExpiration(serverDisplayTime);
          if (enableSchedulerTracing) {
            markSpawnedWork(newExpirationTime);
          }
          workInProgress2.expirationTime = newExpirationTime;
        } else {
          workInProgress2.expirationTime = Never;
          if (enableSchedulerTracing) {
            markSpawnedWork(Never);
          }
        }
        return null;
      }
      function updateDehydratedSuspenseComponent(current$$1, workInProgress2, suspenseInstance, suspenseState, renderExpirationTime2) {
        warnIfHydrating();
        if ((workInProgress2.mode & BatchedMode) === NoMode) {
          return retrySuspenseComponentWithoutHydrating(current$$1, workInProgress2, renderExpirationTime2);
        }
        if (isSuspenseInstanceFallback(suspenseInstance)) {
          return retrySuspenseComponentWithoutHydrating(current$$1, workInProgress2, renderExpirationTime2);
        }
        var hasContextChanged$$1 = current$$1.childExpirationTime >= renderExpirationTime2;
        if (didReceiveUpdate || hasContextChanged$$1) {
          if (renderExpirationTime2 < Sync) {
            if (suspenseState.retryTime <= renderExpirationTime2) {
              var attemptHydrationAtExpirationTime = renderExpirationTime2 + 1;
              suspenseState.retryTime = attemptHydrationAtExpirationTime;
              scheduleWork(current$$1, attemptHydrationAtExpirationTime);
            } else {
            }
          }
          renderDidSuspendDelayIfPossible();
          return retrySuspenseComponentWithoutHydrating(current$$1, workInProgress2, renderExpirationTime2);
        } else if (isSuspenseInstancePending(suspenseInstance)) {
          workInProgress2.effectTag |= DidCapture;
          workInProgress2.child = current$$1.child;
          registerSuspenseInstanceRetry(suspenseInstance, retryDehydratedSuspenseBoundary.bind(null, current$$1));
          return null;
        } else {
          reenterHydrationStateFromDehydratedSuspenseInstance(workInProgress2, suspenseInstance);
          var nextProps = workInProgress2.pendingProps;
          var nextChildren = nextProps.children;
          var child = mountChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2);
          var node = child;
          while (node) {
            node.effectTag |= Hydrating;
            node = node.sibling;
          }
          workInProgress2.child = child;
          return workInProgress2.child;
        }
      }
      function propagateSuspenseContextChange(workInProgress2, firstChild, renderExpirationTime2) {
        var node = firstChild;
        while (node !== null) {
          if (node.tag === SuspenseComponent) {
            var state = node.memoizedState;
            if (state !== null) {
              if (node.expirationTime < renderExpirationTime2) {
                node.expirationTime = renderExpirationTime2;
              }
              var alternate = node.alternate;
              if (alternate !== null && alternate.expirationTime < renderExpirationTime2) {
                alternate.expirationTime = renderExpirationTime2;
              }
              scheduleWorkOnParentPath(node.return, renderExpirationTime2);
            }
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === workInProgress2) {
            return;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === workInProgress2) {
              return;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      function findLastContentRow(firstChild) {
        var row = firstChild;
        var lastContentRow = null;
        while (row !== null) {
          var currentRow = row.alternate;
          if (currentRow !== null && findFirstSuspended(currentRow) === null) {
            lastContentRow = row;
          }
          row = row.sibling;
        }
        return lastContentRow;
      }
      function validateRevealOrder(revealOrder) {
        {
          if (revealOrder !== void 0 && revealOrder !== "forwards" && revealOrder !== "backwards" && revealOrder !== "together" && !didWarnAboutRevealOrder[revealOrder]) {
            didWarnAboutRevealOrder[revealOrder] = true;
            if (typeof revealOrder === "string") {
              switch (revealOrder.toLowerCase()) {
                case "together":
                case "forwards":
                case "backwards": {
                  warning$1(false, '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', revealOrder, revealOrder.toLowerCase());
                  break;
                }
                case "forward":
                case "backward": {
                  warning$1(false, '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', revealOrder, revealOrder.toLowerCase());
                  break;
                }
                default:
                  warning$1(false, '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
                  break;
              }
            } else {
              warning$1(false, '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
            }
          }
        }
      }
      function validateTailOptions(tailMode, revealOrder) {
        {
          if (tailMode !== void 0 && !didWarnAboutTailOptions[tailMode]) {
            if (tailMode !== "collapsed" && tailMode !== "hidden") {
              didWarnAboutTailOptions[tailMode] = true;
              warning$1(false, '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', tailMode);
            } else if (revealOrder !== "forwards" && revealOrder !== "backwards") {
              didWarnAboutTailOptions[tailMode] = true;
              warning$1(false, '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', tailMode);
            }
          }
        }
      }
      function validateSuspenseListNestedChild(childSlot, index2) {
        {
          var isArray2 = Array.isArray(childSlot);
          var isIterable = !isArray2 && typeof getIteratorFn(childSlot) === "function";
          if (isArray2 || isIterable) {
            var type = isArray2 ? "array" : "iterable";
            warning$1(false, "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", type, index2, type);
            return false;
          }
        }
        return true;
      }
      function validateSuspenseListChildren(children, revealOrder) {
        {
          if ((revealOrder === "forwards" || revealOrder === "backwards") && children !== void 0 && children !== null && children !== false) {
            if (Array.isArray(children)) {
              for (var i2 = 0; i2 < children.length; i2++) {
                if (!validateSuspenseListNestedChild(children[i2], i2)) {
                  return;
                }
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var childrenIterator = iteratorFn.call(children);
                if (childrenIterator) {
                  var step = childrenIterator.next();
                  var _i = 0;
                  for (; !step.done; step = childrenIterator.next()) {
                    if (!validateSuspenseListNestedChild(step.value, _i)) {
                      return;
                    }
                    _i++;
                  }
                }
              } else {
                warning$1(false, 'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', revealOrder);
              }
            }
          }
        }
      }
      function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode) {
        var renderState = workInProgress2.memoizedState;
        if (renderState === null) {
          workInProgress2.memoizedState = {
            isBackwards,
            rendering: null,
            last: lastContentRow,
            tail,
            tailExpiration: 0,
            tailMode
          };
        } else {
          renderState.isBackwards = isBackwards;
          renderState.rendering = null;
          renderState.last = lastContentRow;
          renderState.tail = tail;
          renderState.tailExpiration = 0;
          renderState.tailMode = tailMode;
        }
      }
      function updateSuspenseListComponent(current$$1, workInProgress2, renderExpirationTime2) {
        var nextProps = workInProgress2.pendingProps;
        var revealOrder = nextProps.revealOrder;
        var tailMode = nextProps.tail;
        var newChildren = nextProps.children;
        validateRevealOrder(revealOrder);
        validateTailOptions(tailMode, revealOrder);
        validateSuspenseListChildren(newChildren, revealOrder);
        reconcileChildren(current$$1, workInProgress2, newChildren, renderExpirationTime2);
        var suspenseContext = suspenseStackCursor.current;
        var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
        if (shouldForceFallback) {
          suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
          workInProgress2.effectTag |= DidCapture;
        } else {
          var didSuspendBefore = current$$1 !== null && (current$$1.effectTag & DidCapture) !== NoEffect;
          if (didSuspendBefore) {
            propagateSuspenseContextChange(workInProgress2, workInProgress2.child, renderExpirationTime2);
          }
          suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
        }
        pushSuspenseContext(workInProgress2, suspenseContext);
        if ((workInProgress2.mode & BatchedMode) === NoMode) {
          workInProgress2.memoizedState = null;
        } else {
          switch (revealOrder) {
            case "forwards": {
              var lastContentRow = findLastContentRow(workInProgress2.child);
              var tail;
              if (lastContentRow === null) {
                tail = workInProgress2.child;
                workInProgress2.child = null;
              } else {
                tail = lastContentRow.sibling;
                lastContentRow.sibling = null;
              }
              initSuspenseListRenderState(workInProgress2, false, tail, lastContentRow, tailMode);
              break;
            }
            case "backwards": {
              var _tail = null;
              var row = workInProgress2.child;
              workInProgress2.child = null;
              while (row !== null) {
                var currentRow = row.alternate;
                if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                  workInProgress2.child = row;
                  break;
                }
                var nextRow = row.sibling;
                row.sibling = _tail;
                _tail = row;
                row = nextRow;
              }
              initSuspenseListRenderState(workInProgress2, true, _tail, null, tailMode);
              break;
            }
            case "together": {
              initSuspenseListRenderState(workInProgress2, false, null, null, void 0);
              break;
            }
            default: {
              workInProgress2.memoizedState = null;
            }
          }
        }
        return workInProgress2.child;
      }
      function updatePortalComponent(current$$1, workInProgress2, renderExpirationTime2) {
        pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
        var nextChildren = workInProgress2.pendingProps;
        if (current$$1 === null) {
          workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2);
        } else {
          reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        }
        return workInProgress2.child;
      }
      function updateContextProvider(current$$1, workInProgress2, renderExpirationTime2) {
        var providerType = workInProgress2.type;
        var context = providerType._context;
        var newProps = workInProgress2.pendingProps;
        var oldProps = workInProgress2.memoizedProps;
        var newValue = newProps.value;
        {
          var providerPropTypes = workInProgress2.type.propTypes;
          if (providerPropTypes) {
            checkPropTypes(providerPropTypes, newProps, "prop", "Context.Provider", getCurrentFiberStackInDev);
          }
        }
        pushProvider(workInProgress2, newValue);
        if (oldProps !== null) {
          var oldValue = oldProps.value;
          var changedBits = calculateChangedBits(context, newValue, oldValue);
          if (changedBits === 0) {
            if (oldProps.children === newProps.children && !hasContextChanged()) {
              return bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
            }
          } else {
            propagateContextChange(workInProgress2, context, changedBits, renderExpirationTime2);
          }
        }
        var newChildren = newProps.children;
        reconcileChildren(current$$1, workInProgress2, newChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      var hasWarnedAboutUsingContextAsConsumer = false;
      function updateContextConsumer(current$$1, workInProgress2, renderExpirationTime2) {
        var context = workInProgress2.type;
        {
          if (context._context === void 0) {
            if (context !== context.Consumer) {
              if (!hasWarnedAboutUsingContextAsConsumer) {
                hasWarnedAboutUsingContextAsConsumer = true;
                warning$1(false, "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
              }
            }
          } else {
            context = context._context;
          }
        }
        var newProps = workInProgress2.pendingProps;
        var render = newProps.children;
        {
          !(typeof render === "function") ? warningWithoutStack$1(false, "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.") : void 0;
        }
        prepareToReadContext(workInProgress2, renderExpirationTime2);
        var newValue = readContext(context, newProps.unstable_observedBits);
        var newChildren;
        {
          ReactCurrentOwner$3.current = workInProgress2;
          setCurrentPhase("render");
          newChildren = render(newValue);
          setCurrentPhase(null);
        }
        workInProgress2.effectTag |= PerformedWork;
        reconcileChildren(current$$1, workInProgress2, newChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function updateFundamentalComponent$1(current$$1, workInProgress2, renderExpirationTime2) {
        var fundamentalImpl = workInProgress2.type.impl;
        if (fundamentalImpl.reconcileChildren === false) {
          return null;
        }
        var nextProps = workInProgress2.pendingProps;
        var nextChildren = nextProps.children;
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function updateScopeComponent(current$$1, workInProgress2, renderExpirationTime2) {
        var nextProps = workInProgress2.pendingProps;
        var nextChildren = nextProps.children;
        reconcileChildren(current$$1, workInProgress2, nextChildren, renderExpirationTime2);
        return workInProgress2.child;
      }
      function markWorkInProgressReceivedUpdate() {
        didReceiveUpdate = true;
      }
      function bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2) {
        cancelWorkTimer(workInProgress2);
        if (current$$1 !== null) {
          workInProgress2.dependencies = current$$1.dependencies;
        }
        if (enableProfilerTimer) {
          stopProfilerTimerIfRunning(workInProgress2);
        }
        var updateExpirationTime = workInProgress2.expirationTime;
        if (updateExpirationTime !== NoWork) {
          markUnprocessedUpdateTime(updateExpirationTime);
        }
        var childExpirationTime = workInProgress2.childExpirationTime;
        if (childExpirationTime < renderExpirationTime2) {
          return null;
        } else {
          cloneChildFibers(current$$1, workInProgress2);
          return workInProgress2.child;
        }
      }
      function remountFiber(current$$1, oldWorkInProgress, newWorkInProgress) {
        {
          var returnFiber = oldWorkInProgress.return;
          if (returnFiber === null) {
            throw new Error("Cannot swap the root fiber.");
          }
          current$$1.alternate = null;
          oldWorkInProgress.alternate = null;
          newWorkInProgress.index = oldWorkInProgress.index;
          newWorkInProgress.sibling = oldWorkInProgress.sibling;
          newWorkInProgress.return = oldWorkInProgress.return;
          newWorkInProgress.ref = oldWorkInProgress.ref;
          if (oldWorkInProgress === returnFiber.child) {
            returnFiber.child = newWorkInProgress;
          } else {
            var prevSibling = returnFiber.child;
            if (prevSibling === null) {
              throw new Error("Expected parent to have a child.");
            }
            while (prevSibling.sibling !== oldWorkInProgress) {
              prevSibling = prevSibling.sibling;
              if (prevSibling === null) {
                throw new Error("Expected to find the previous sibling.");
              }
            }
            prevSibling.sibling = newWorkInProgress;
          }
          var last = returnFiber.lastEffect;
          if (last !== null) {
            last.nextEffect = current$$1;
            returnFiber.lastEffect = current$$1;
          } else {
            returnFiber.firstEffect = returnFiber.lastEffect = current$$1;
          }
          current$$1.nextEffect = null;
          current$$1.effectTag = Deletion;
          newWorkInProgress.effectTag |= Placement;
          return newWorkInProgress;
        }
      }
      function beginWork$1(current$$1, workInProgress2, renderExpirationTime2) {
        var updateExpirationTime = workInProgress2.expirationTime;
        {
          if (workInProgress2._debugNeedsRemount && current$$1 !== null) {
            return remountFiber(current$$1, workInProgress2, createFiberFromTypeAndProps(workInProgress2.type, workInProgress2.key, workInProgress2.pendingProps, workInProgress2._debugOwner || null, workInProgress2.mode, workInProgress2.expirationTime));
          }
        }
        if (current$$1 !== null) {
          var oldProps = current$$1.memoizedProps;
          var newProps = workInProgress2.pendingProps;
          if (oldProps !== newProps || hasContextChanged() || workInProgress2.type !== current$$1.type) {
            didReceiveUpdate = true;
          } else if (updateExpirationTime < renderExpirationTime2) {
            didReceiveUpdate = false;
            switch (workInProgress2.tag) {
              case HostRoot:
                pushHostRootContext(workInProgress2);
                resetHydrationState();
                break;
              case HostComponent:
                pushHostContext(workInProgress2);
                if (workInProgress2.mode & ConcurrentMode && renderExpirationTime2 !== Never && shouldDeprioritizeSubtree(workInProgress2.type, newProps)) {
                  if (enableSchedulerTracing) {
                    markSpawnedWork(Never);
                  }
                  workInProgress2.expirationTime = workInProgress2.childExpirationTime = Never;
                  return null;
                }
                break;
              case ClassComponent: {
                var Component = workInProgress2.type;
                if (isContextProvider(Component)) {
                  pushContextProvider(workInProgress2);
                }
                break;
              }
              case HostPortal:
                pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
                break;
              case ContextProvider: {
                var newValue = workInProgress2.memoizedProps.value;
                pushProvider(workInProgress2, newValue);
                break;
              }
              case Profiler:
                if (enableProfilerTimer) {
                  workInProgress2.effectTag |= Update;
                }
                break;
              case SuspenseComponent: {
                var state = workInProgress2.memoizedState;
                if (state !== null) {
                  if (enableSuspenseServerRenderer) {
                    if (state.dehydrated !== null) {
                      pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                      workInProgress2.effectTag |= DidCapture;
                      break;
                    }
                  }
                  var primaryChildFragment = workInProgress2.child;
                  var primaryChildExpirationTime = primaryChildFragment.childExpirationTime;
                  if (primaryChildExpirationTime !== NoWork && primaryChildExpirationTime >= renderExpirationTime2) {
                    return updateSuspenseComponent(current$$1, workInProgress2, renderExpirationTime2);
                  } else {
                    pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                    var child = bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
                    if (child !== null) {
                      return child.sibling;
                    } else {
                      return null;
                    }
                  }
                } else {
                  pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                }
                break;
              }
              case SuspenseListComponent: {
                var didSuspendBefore = (current$$1.effectTag & DidCapture) !== NoEffect;
                var hasChildWork = workInProgress2.childExpirationTime >= renderExpirationTime2;
                if (didSuspendBefore) {
                  if (hasChildWork) {
                    return updateSuspenseListComponent(current$$1, workInProgress2, renderExpirationTime2);
                  }
                  workInProgress2.effectTag |= DidCapture;
                }
                var renderState = workInProgress2.memoizedState;
                if (renderState !== null) {
                  renderState.rendering = null;
                  renderState.tail = null;
                }
                pushSuspenseContext(workInProgress2, suspenseStackCursor.current);
                if (hasChildWork) {
                  break;
                } else {
                  return null;
                }
              }
            }
            return bailoutOnAlreadyFinishedWork(current$$1, workInProgress2, renderExpirationTime2);
          } else {
            didReceiveUpdate = false;
          }
        } else {
          didReceiveUpdate = false;
        }
        workInProgress2.expirationTime = NoWork;
        switch (workInProgress2.tag) {
          case IndeterminateComponent: {
            return mountIndeterminateComponent(current$$1, workInProgress2, workInProgress2.type, renderExpirationTime2);
          }
          case LazyComponent: {
            var elementType = workInProgress2.elementType;
            return mountLazyComponent(current$$1, workInProgress2, elementType, updateExpirationTime, renderExpirationTime2);
          }
          case FunctionComponent: {
            var _Component = workInProgress2.type;
            var unresolvedProps = workInProgress2.pendingProps;
            var resolvedProps = workInProgress2.elementType === _Component ? unresolvedProps : resolveDefaultProps(_Component, unresolvedProps);
            return updateFunctionComponent(current$$1, workInProgress2, _Component, resolvedProps, renderExpirationTime2);
          }
          case ClassComponent: {
            var _Component2 = workInProgress2.type;
            var _unresolvedProps = workInProgress2.pendingProps;
            var _resolvedProps = workInProgress2.elementType === _Component2 ? _unresolvedProps : resolveDefaultProps(_Component2, _unresolvedProps);
            return updateClassComponent(current$$1, workInProgress2, _Component2, _resolvedProps, renderExpirationTime2);
          }
          case HostRoot:
            return updateHostRoot(current$$1, workInProgress2, renderExpirationTime2);
          case HostComponent:
            return updateHostComponent(current$$1, workInProgress2, renderExpirationTime2);
          case HostText:
            return updateHostText(current$$1, workInProgress2);
          case SuspenseComponent:
            return updateSuspenseComponent(current$$1, workInProgress2, renderExpirationTime2);
          case HostPortal:
            return updatePortalComponent(current$$1, workInProgress2, renderExpirationTime2);
          case ForwardRef: {
            var type = workInProgress2.type;
            var _unresolvedProps2 = workInProgress2.pendingProps;
            var _resolvedProps2 = workInProgress2.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);
            return updateForwardRef(current$$1, workInProgress2, type, _resolvedProps2, renderExpirationTime2);
          }
          case Fragment:
            return updateFragment(current$$1, workInProgress2, renderExpirationTime2);
          case Mode:
            return updateMode(current$$1, workInProgress2, renderExpirationTime2);
          case Profiler:
            return updateProfiler(current$$1, workInProgress2, renderExpirationTime2);
          case ContextProvider:
            return updateContextProvider(current$$1, workInProgress2, renderExpirationTime2);
          case ContextConsumer:
            return updateContextConsumer(current$$1, workInProgress2, renderExpirationTime2);
          case MemoComponent: {
            var _type2 = workInProgress2.type;
            var _unresolvedProps3 = workInProgress2.pendingProps;
            var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var outerPropTypes = _type2.propTypes;
                if (outerPropTypes) {
                  checkPropTypes(outerPropTypes, _resolvedProps3, "prop", getComponentName(_type2), getCurrentFiberStackInDev);
                }
              }
            }
            _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
            return updateMemoComponent(current$$1, workInProgress2, _type2, _resolvedProps3, updateExpirationTime, renderExpirationTime2);
          }
          case SimpleMemoComponent: {
            return updateSimpleMemoComponent(current$$1, workInProgress2, workInProgress2.type, workInProgress2.pendingProps, updateExpirationTime, renderExpirationTime2);
          }
          case IncompleteClassComponent: {
            var _Component3 = workInProgress2.type;
            var _unresolvedProps4 = workInProgress2.pendingProps;
            var _resolvedProps4 = workInProgress2.elementType === _Component3 ? _unresolvedProps4 : resolveDefaultProps(_Component3, _unresolvedProps4);
            return mountIncompleteClassComponent(current$$1, workInProgress2, _Component3, _resolvedProps4, renderExpirationTime2);
          }
          case SuspenseListComponent: {
            return updateSuspenseListComponent(current$$1, workInProgress2, renderExpirationTime2);
          }
          case FundamentalComponent: {
            if (enableFundamentalAPI) {
              return updateFundamentalComponent$1(current$$1, workInProgress2, renderExpirationTime2);
            }
            break;
          }
          case ScopeComponent: {
            if (enableScopeAPI) {
              return updateScopeComponent(current$$1, workInProgress2, renderExpirationTime2);
            }
            break;
          }
        }
        (function() {
          {
            {
              throw ReactError(Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue."));
            }
          }
        })();
      }
      function createFundamentalStateInstance(currentFiber2, props, impl, state) {
        return {
          currentFiber: currentFiber2,
          impl,
          instance: null,
          prevProps: null,
          props,
          state
        };
      }
      function isFiberSuspenseAndTimedOut(fiber) {
        return fiber.tag === SuspenseComponent && fiber.memoizedState !== null;
      }
      function getSuspenseFallbackChild(fiber) {
        return fiber.child.sibling.child;
      }
      function collectScopedNodes(node, fn, scopedNodes) {
        if (enableScopeAPI) {
          if (node.tag === HostComponent) {
            var _type = node.type, memoizedProps = node.memoizedProps;
            if (fn(_type, memoizedProps) === true) {
              scopedNodes.push(getPublicInstance(node.stateNode));
            }
          }
          var child = node.child;
          if (isFiberSuspenseAndTimedOut(node)) {
            child = getSuspenseFallbackChild(node);
          }
          if (child !== null) {
            collectScopedNodesFromChildren(child, fn, scopedNodes);
          }
        }
      }
      function collectScopedNodesFromChildren(startingChild, fn, scopedNodes) {
        var child = startingChild;
        while (child !== null) {
          collectScopedNodes(child, fn, scopedNodes);
          child = child.sibling;
        }
      }
      function collectNearestScopeMethods(node, scope, childrenScopes) {
        if (isValidScopeNode(node, scope)) {
          childrenScopes.push(node.stateNode.methods);
        } else {
          var child = node.child;
          if (isFiberSuspenseAndTimedOut(node)) {
            child = getSuspenseFallbackChild(node);
          }
          if (child !== null) {
            collectNearestChildScopeMethods(child, scope, childrenScopes);
          }
        }
      }
      function collectNearestChildScopeMethods(startingChild, scope, childrenScopes) {
        var child = startingChild;
        while (child !== null) {
          collectNearestScopeMethods(child, scope, childrenScopes);
          child = child.sibling;
        }
      }
      function isValidScopeNode(node, scope) {
        return node.tag === ScopeComponent && node.type === scope;
      }
      function createScopeMethods(scope, instance) {
        var fn = scope.fn;
        return {
          getChildren: function() {
            var currentFiber2 = instance.fiber;
            var child = currentFiber2.child;
            var childrenScopes = [];
            if (child !== null) {
              collectNearestChildScopeMethods(child, scope, childrenScopes);
            }
            return childrenScopes.length === 0 ? null : childrenScopes;
          },
          getChildrenFromRoot: function() {
            var currentFiber2 = instance.fiber;
            var node = currentFiber2;
            while (node !== null) {
              var parent = node.return;
              if (parent === null) {
                break;
              }
              node = parent;
              if (node.tag === ScopeComponent && node.type === scope) {
                break;
              }
            }
            var childrenScopes = [];
            collectNearestChildScopeMethods(node.child, scope, childrenScopes);
            return childrenScopes.length === 0 ? null : childrenScopes;
          },
          getParent: function() {
            var node = instance.fiber.return;
            while (node !== null) {
              if (node.tag === ScopeComponent && node.type === scope) {
                return node.stateNode.methods;
              }
              node = node.return;
            }
            return null;
          },
          getProps: function() {
            var currentFiber2 = instance.fiber;
            return currentFiber2.memoizedProps;
          },
          getScopedNodes: function() {
            var currentFiber2 = instance.fiber;
            var child = currentFiber2.child;
            var scopedNodes = [];
            if (child !== null) {
              collectScopedNodesFromChildren(child, fn, scopedNodes);
            }
            return scopedNodes.length === 0 ? null : scopedNodes;
          }
        };
      }
      function markUpdate(workInProgress2) {
        workInProgress2.effectTag |= Update;
      }
      function markRef$1(workInProgress2) {
        workInProgress2.effectTag |= Ref;
      }
      var appendAllChildren;
      var updateHostContainer;
      var updateHostComponent$1;
      var updateHostText$1;
      if (supportsMutation) {
        appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
          var node = workInProgress2.child;
          while (node !== null) {
            if (node.tag === HostComponent || node.tag === HostText) {
              appendInitialChild(parent, node.stateNode);
            } else if (enableFundamentalAPI && node.tag === FundamentalComponent) {
              appendInitialChild(parent, node.stateNode.instance);
            } else if (node.tag === HostPortal) {
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === workInProgress2) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === workInProgress2) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        };
        updateHostContainer = function(workInProgress2) {
        };
        updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
          var oldProps = current2.memoizedProps;
          if (oldProps === newProps) {
            return;
          }
          var instance = workInProgress2.stateNode;
          var currentHostContext = getHostContext();
          var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
          workInProgress2.updateQueue = updatePayload;
          if (updatePayload) {
            markUpdate(workInProgress2);
          }
        };
        updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
          if (oldText !== newText) {
            markUpdate(workInProgress2);
          }
        };
      } else if (supportsPersistence) {
        appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
          var node = workInProgress2.child;
          while (node !== null) {
            branches:
              if (node.tag === HostComponent) {
                var instance = node.stateNode;
                if (needsVisibilityToggle && isHidden) {
                  var props = node.memoizedProps;
                  var type = node.type;
                  instance = cloneHiddenInstance(instance, type, props, node);
                }
                appendInitialChild(parent, instance);
              } else if (node.tag === HostText) {
                var _instance = node.stateNode;
                if (needsVisibilityToggle && isHidden) {
                  var text = node.memoizedProps;
                  _instance = cloneHiddenTextInstance(_instance, text, node);
                }
                appendInitialChild(parent, _instance);
              } else if (enableFundamentalAPI && node.tag === FundamentalComponent) {
                var _instance2 = node.stateNode.instance;
                if (needsVisibilityToggle && isHidden) {
                  var _props = node.memoizedProps;
                  var _type = node.type;
                  _instance2 = cloneHiddenInstance(_instance2, _type, _props, node);
                }
                appendInitialChild(parent, _instance2);
              } else if (node.tag === HostPortal) {
              } else if (node.tag === SuspenseComponent) {
                if ((node.effectTag & Update) !== NoEffect) {
                  var newIsHidden = node.memoizedState !== null;
                  if (newIsHidden) {
                    var primaryChildParent = node.child;
                    if (primaryChildParent !== null) {
                      if (primaryChildParent.child !== null) {
                        primaryChildParent.child.return = primaryChildParent;
                        appendAllChildren(parent, primaryChildParent, true, newIsHidden);
                      }
                      var fallbackChildParent = primaryChildParent.sibling;
                      if (fallbackChildParent !== null) {
                        fallbackChildParent.return = node;
                        node = fallbackChildParent;
                        continue;
                      }
                    }
                  }
                }
                if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
              } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
            node = node;
            if (node === workInProgress2) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === workInProgress2) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        };
        var appendAllChildrenToContainer = function(containerChildSet, workInProgress2, needsVisibilityToggle, isHidden) {
          var node = workInProgress2.child;
          while (node !== null) {
            branches:
              if (node.tag === HostComponent) {
                var instance = node.stateNode;
                if (needsVisibilityToggle && isHidden) {
                  var props = node.memoizedProps;
                  var type = node.type;
                  instance = cloneHiddenInstance(instance, type, props, node);
                }
                appendChildToContainerChildSet(containerChildSet, instance);
              } else if (node.tag === HostText) {
                var _instance3 = node.stateNode;
                if (needsVisibilityToggle && isHidden) {
                  var text = node.memoizedProps;
                  _instance3 = cloneHiddenTextInstance(_instance3, text, node);
                }
                appendChildToContainerChildSet(containerChildSet, _instance3);
              } else if (enableFundamentalAPI && node.tag === FundamentalComponent) {
                var _instance4 = node.stateNode.instance;
                if (needsVisibilityToggle && isHidden) {
                  var _props2 = node.memoizedProps;
                  var _type2 = node.type;
                  _instance4 = cloneHiddenInstance(_instance4, _type2, _props2, node);
                }
                appendChildToContainerChildSet(containerChildSet, _instance4);
              } else if (node.tag === HostPortal) {
              } else if (node.tag === SuspenseComponent) {
                if ((node.effectTag & Update) !== NoEffect) {
                  var newIsHidden = node.memoizedState !== null;
                  if (newIsHidden) {
                    var primaryChildParent = node.child;
                    if (primaryChildParent !== null) {
                      if (primaryChildParent.child !== null) {
                        primaryChildParent.child.return = primaryChildParent;
                        appendAllChildrenToContainer(containerChildSet, primaryChildParent, true, newIsHidden);
                      }
                      var fallbackChildParent = primaryChildParent.sibling;
                      if (fallbackChildParent !== null) {
                        fallbackChildParent.return = node;
                        node = fallbackChildParent;
                        continue;
                      }
                    }
                  }
                }
                if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
              } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
            node = node;
            if (node === workInProgress2) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === workInProgress2) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        };
        updateHostContainer = function(workInProgress2) {
          var portalOrRoot = workInProgress2.stateNode;
          var childrenUnchanged = workInProgress2.firstEffect === null;
          if (childrenUnchanged) {
          } else {
            var container = portalOrRoot.containerInfo;
            var newChildSet = createContainerChildSet(container);
            appendAllChildrenToContainer(newChildSet, workInProgress2, false, false);
            portalOrRoot.pendingChildren = newChildSet;
            markUpdate(workInProgress2);
            finalizeContainerChildren(container, newChildSet);
          }
        };
        updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
          var currentInstance2 = current2.stateNode;
          var oldProps = current2.memoizedProps;
          var childrenUnchanged = workInProgress2.firstEffect === null;
          if (childrenUnchanged && oldProps === newProps) {
            workInProgress2.stateNode = currentInstance2;
            return;
          }
          var recyclableInstance = workInProgress2.stateNode;
          var currentHostContext = getHostContext();
          var updatePayload = null;
          if (oldProps !== newProps) {
            updatePayload = prepareUpdate(recyclableInstance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
          }
          if (childrenUnchanged && updatePayload === null) {
            workInProgress2.stateNode = currentInstance2;
            return;
          }
          var newInstance = cloneInstance(currentInstance2, updatePayload, type, oldProps, newProps, workInProgress2, childrenUnchanged, recyclableInstance);
          if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
            markUpdate(workInProgress2);
          }
          workInProgress2.stateNode = newInstance;
          if (childrenUnchanged) {
            markUpdate(workInProgress2);
          } else {
            appendAllChildren(newInstance, workInProgress2, false, false);
          }
        };
        updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
          if (oldText !== newText) {
            var rootContainerInstance = getRootHostContainer();
            var currentHostContext = getHostContext();
            workInProgress2.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress2);
            markUpdate(workInProgress2);
          }
        };
      } else {
        updateHostContainer = function(workInProgress2) {
        };
        updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
        };
        updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
        };
      }
      function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
        switch (renderState.tailMode) {
          case "hidden": {
            var tailNode = renderState.tail;
            var lastTailNode = null;
            while (tailNode !== null) {
              if (tailNode.alternate !== null) {
                lastTailNode = tailNode;
              }
              tailNode = tailNode.sibling;
            }
            if (lastTailNode === null) {
              renderState.tail = null;
            } else {
              lastTailNode.sibling = null;
            }
            break;
          }
          case "collapsed": {
            var _tailNode = renderState.tail;
            var _lastTailNode = null;
            while (_tailNode !== null) {
              if (_tailNode.alternate !== null) {
                _lastTailNode = _tailNode;
              }
              _tailNode = _tailNode.sibling;
            }
            if (_lastTailNode === null) {
              if (!hasRenderedATailFallback && renderState.tail !== null) {
                renderState.tail.sibling = null;
              } else {
                renderState.tail = null;
              }
            } else {
              _lastTailNode.sibling = null;
            }
            break;
          }
        }
      }
      function completeWork(current2, workInProgress2, renderExpirationTime2) {
        var newProps = workInProgress2.pendingProps;
        switch (workInProgress2.tag) {
          case IndeterminateComponent:
            break;
          case LazyComponent:
            break;
          case SimpleMemoComponent:
          case FunctionComponent:
            break;
          case ClassComponent: {
            var Component = workInProgress2.type;
            if (isContextProvider(Component)) {
              popContext(workInProgress2);
            }
            break;
          }
          case HostRoot: {
            popHostContainer(workInProgress2);
            popTopLevelContextObject(workInProgress2);
            var fiberRoot = workInProgress2.stateNode;
            if (fiberRoot.pendingContext) {
              fiberRoot.context = fiberRoot.pendingContext;
              fiberRoot.pendingContext = null;
            }
            if (current2 === null || current2.child === null) {
              var wasHydrated = popHydrationState(workInProgress2);
              if (wasHydrated) {
                markUpdate(workInProgress2);
              }
            }
            updateHostContainer(workInProgress2);
            break;
          }
          case HostComponent: {
            popHostContext(workInProgress2);
            var rootContainerInstance = getRootHostContainer();
            var type = workInProgress2.type;
            if (current2 !== null && workInProgress2.stateNode != null) {
              updateHostComponent$1(current2, workInProgress2, type, newProps, rootContainerInstance);
              if (enableFlareAPI) {
                var prevListeners = current2.memoizedProps.listeners;
                var nextListeners = newProps.listeners;
                if (prevListeners !== nextListeners) {
                  markUpdate(workInProgress2);
                }
              }
              if (current2.ref !== workInProgress2.ref) {
                markRef$1(workInProgress2);
              }
            } else {
              if (!newProps) {
                (function() {
                  if (!(workInProgress2.stateNode !== null)) {
                    {
                      throw ReactError(Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."));
                    }
                  }
                })();
                break;
              }
              var currentHostContext = getHostContext();
              var _wasHydrated = popHydrationState(workInProgress2);
              if (_wasHydrated) {
                if (prepareToHydrateHostInstance(workInProgress2, rootContainerInstance, currentHostContext)) {
                  markUpdate(workInProgress2);
                }
                if (enableFlareAPI) {
                  var listeners = newProps.listeners;
                  if (listeners != null) {
                    updateEventListeners(listeners, workInProgress2, rootContainerInstance);
                  }
                }
              } else {
                var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress2);
                appendAllChildren(instance, workInProgress2, false, false);
                workInProgress2.stateNode = instance;
                if (enableFlareAPI) {
                  var _listeners = newProps.listeners;
                  if (_listeners != null) {
                    updateEventListeners(_listeners, workInProgress2, rootContainerInstance);
                  }
                }
                if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance, currentHostContext)) {
                  markUpdate(workInProgress2);
                }
              }
              if (workInProgress2.ref !== null) {
                markRef$1(workInProgress2);
              }
            }
            break;
          }
          case HostText: {
            var newText = newProps;
            if (current2 && workInProgress2.stateNode != null) {
              var oldText = current2.memoizedProps;
              updateHostText$1(current2, workInProgress2, oldText, newText);
            } else {
              if (typeof newText !== "string") {
                (function() {
                  if (!(workInProgress2.stateNode !== null)) {
                    {
                      throw ReactError(Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."));
                    }
                  }
                })();
              }
              var _rootContainerInstance = getRootHostContainer();
              var _currentHostContext = getHostContext();
              var _wasHydrated2 = popHydrationState(workInProgress2);
              if (_wasHydrated2) {
                if (prepareToHydrateHostTextInstance(workInProgress2)) {
                  markUpdate(workInProgress2);
                }
              } else {
                workInProgress2.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress2);
              }
            }
            break;
          }
          case ForwardRef:
            break;
          case SuspenseComponent: {
            popSuspenseContext(workInProgress2);
            var nextState = workInProgress2.memoizedState;
            if (enableSuspenseServerRenderer) {
              if (nextState !== null && nextState.dehydrated !== null) {
                if (current2 === null) {
                  var _wasHydrated3 = popHydrationState(workInProgress2);
                  (function() {
                    if (!_wasHydrated3) {
                      {
                        throw ReactError(Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."));
                      }
                    }
                  })();
                  prepareToHydrateHostSuspenseInstance(workInProgress2);
                  if (enableSchedulerTracing) {
                    markSpawnedWork(Never);
                  }
                  return null;
                } else {
                  resetHydrationState();
                  if ((workInProgress2.effectTag & DidCapture) === NoEffect) {
                    workInProgress2.memoizedState = null;
                  }
                  workInProgress2.effectTag |= Update;
                  return null;
                }
              }
            }
            if ((workInProgress2.effectTag & DidCapture) !== NoEffect) {
              workInProgress2.expirationTime = renderExpirationTime2;
              return workInProgress2;
            }
            var nextDidTimeout = nextState !== null;
            var prevDidTimeout = false;
            if (current2 === null) {
              popHydrationState(workInProgress2);
            } else {
              var prevState = current2.memoizedState;
              prevDidTimeout = prevState !== null;
              if (!nextDidTimeout && prevState !== null) {
                var currentFallbackChild = current2.child.sibling;
                if (currentFallbackChild !== null) {
                  var first = workInProgress2.firstEffect;
                  if (first !== null) {
                    workInProgress2.firstEffect = currentFallbackChild;
                    currentFallbackChild.nextEffect = first;
                  } else {
                    workInProgress2.firstEffect = workInProgress2.lastEffect = currentFallbackChild;
                    currentFallbackChild.nextEffect = null;
                  }
                  currentFallbackChild.effectTag = Deletion;
                }
              }
            }
            if (nextDidTimeout && !prevDidTimeout) {
              if ((workInProgress2.mode & BatchedMode) !== NoMode) {
                var hasInvisibleChildContext = current2 === null && workInProgress2.memoizedProps.unstable_avoidThisFallback !== true;
                if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
                  renderDidSuspend();
                } else {
                  renderDidSuspendDelayIfPossible();
                }
              }
            }
            if (supportsPersistence) {
              if (nextDidTimeout) {
                workInProgress2.effectTag |= Update;
              }
            }
            if (supportsMutation) {
              if (nextDidTimeout || prevDidTimeout) {
                workInProgress2.effectTag |= Update;
              }
            }
            if (enableSuspenseCallback && workInProgress2.updateQueue !== null && workInProgress2.memoizedProps.suspenseCallback != null) {
              workInProgress2.effectTag |= Update;
            }
            break;
          }
          case Fragment:
            break;
          case Mode:
            break;
          case Profiler:
            break;
          case HostPortal:
            popHostContainer(workInProgress2);
            updateHostContainer(workInProgress2);
            break;
          case ContextProvider:
            popProvider(workInProgress2);
            break;
          case ContextConsumer:
            break;
          case MemoComponent:
            break;
          case IncompleteClassComponent: {
            var _Component = workInProgress2.type;
            if (isContextProvider(_Component)) {
              popContext(workInProgress2);
            }
            break;
          }
          case SuspenseListComponent: {
            popSuspenseContext(workInProgress2);
            var renderState = workInProgress2.memoizedState;
            if (renderState === null) {
              break;
            }
            var didSuspendAlready = (workInProgress2.effectTag & DidCapture) !== NoEffect;
            var renderedTail = renderState.rendering;
            if (renderedTail === null) {
              if (!didSuspendAlready) {
                var cannotBeSuspended = renderHasNotSuspendedYet() && (current2 === null || (current2.effectTag & DidCapture) === NoEffect);
                if (!cannotBeSuspended) {
                  var row = workInProgress2.child;
                  while (row !== null) {
                    var suspended = findFirstSuspended(row);
                    if (suspended !== null) {
                      didSuspendAlready = true;
                      workInProgress2.effectTag |= DidCapture;
                      cutOffTailIfNeeded(renderState, false);
                      var newThennables = suspended.updateQueue;
                      if (newThennables !== null) {
                        workInProgress2.updateQueue = newThennables;
                        workInProgress2.effectTag |= Update;
                      }
                      workInProgress2.firstEffect = workInProgress2.lastEffect = null;
                      resetChildFibers(workInProgress2, renderExpirationTime2);
                      pushSuspenseContext(workInProgress2, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
                      return workInProgress2.child;
                    }
                    row = row.sibling;
                  }
                }
              } else {
                cutOffTailIfNeeded(renderState, false);
              }
            } else {
              if (!didSuspendAlready) {
                var _suspended = findFirstSuspended(renderedTail);
                if (_suspended !== null) {
                  workInProgress2.effectTag |= DidCapture;
                  didSuspendAlready = true;
                  cutOffTailIfNeeded(renderState, true);
                  if (renderState.tail === null && renderState.tailMode === "hidden") {
                    var _newThennables = _suspended.updateQueue;
                    if (_newThennables !== null) {
                      workInProgress2.updateQueue = _newThennables;
                      workInProgress2.effectTag |= Update;
                    }
                    var lastEffect = workInProgress2.lastEffect = renderState.lastEffect;
                    if (lastEffect !== null) {
                      lastEffect.nextEffect = null;
                    }
                    return null;
                  }
                } else if (now() > renderState.tailExpiration && renderExpirationTime2 > Never) {
                  workInProgress2.effectTag |= DidCapture;
                  didSuspendAlready = true;
                  cutOffTailIfNeeded(renderState, false);
                  var nextPriority = renderExpirationTime2 - 1;
                  workInProgress2.expirationTime = workInProgress2.childExpirationTime = nextPriority;
                  if (enableSchedulerTracing) {
                    markSpawnedWork(nextPriority);
                  }
                }
              }
              if (renderState.isBackwards) {
                renderedTail.sibling = workInProgress2.child;
                workInProgress2.child = renderedTail;
              } else {
                var previousSibling = renderState.last;
                if (previousSibling !== null) {
                  previousSibling.sibling = renderedTail;
                } else {
                  workInProgress2.child = renderedTail;
                }
                renderState.last = renderedTail;
              }
            }
            if (renderState.tail !== null) {
              if (renderState.tailExpiration === 0) {
                var TAIL_EXPIRATION_TIMEOUT_MS = 500;
                renderState.tailExpiration = now() + TAIL_EXPIRATION_TIMEOUT_MS;
              }
              var next = renderState.tail;
              renderState.rendering = next;
              renderState.tail = next.sibling;
              renderState.lastEffect = workInProgress2.lastEffect;
              next.sibling = null;
              var suspenseContext = suspenseStackCursor.current;
              if (didSuspendAlready) {
                suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
              } else {
                suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
              }
              pushSuspenseContext(workInProgress2, suspenseContext);
              return next;
            }
            break;
          }
          case FundamentalComponent: {
            if (enableFundamentalAPI) {
              var fundamentalImpl = workInProgress2.type.impl;
              var fundamentalInstance = workInProgress2.stateNode;
              if (fundamentalInstance === null) {
                var getInitialState = fundamentalImpl.getInitialState;
                var fundamentalState;
                if (getInitialState !== void 0) {
                  fundamentalState = getInitialState(newProps);
                }
                fundamentalInstance = workInProgress2.stateNode = createFundamentalStateInstance(workInProgress2, newProps, fundamentalImpl, fundamentalState || {});
                var _instance5 = getFundamentalComponentInstance(fundamentalInstance);
                fundamentalInstance.instance = _instance5;
                if (fundamentalImpl.reconcileChildren === false) {
                  return null;
                }
                appendAllChildren(_instance5, workInProgress2, false, false);
                mountFundamentalComponent(fundamentalInstance);
              } else {
                var prevProps = fundamentalInstance.props;
                fundamentalInstance.prevProps = prevProps;
                fundamentalInstance.props = newProps;
                fundamentalInstance.currentFiber = workInProgress2;
                if (supportsPersistence) {
                  var _instance6 = cloneFundamentalInstance(fundamentalInstance);
                  fundamentalInstance.instance = _instance6;
                  appendAllChildren(_instance6, workInProgress2, false, false);
                }
                var shouldUpdate = shouldUpdateFundamentalComponent(fundamentalInstance);
                if (shouldUpdate) {
                  markUpdate(workInProgress2);
                }
              }
            }
            break;
          }
          case ScopeComponent: {
            if (enableScopeAPI) {
              if (current2 === null) {
                var _type3 = workInProgress2.type;
                var scopeInstance = {
                  fiber: workInProgress2,
                  methods: null
                };
                workInProgress2.stateNode = scopeInstance;
                scopeInstance.methods = createScopeMethods(_type3, scopeInstance);
                if (enableFlareAPI) {
                  var _listeners2 = newProps.listeners;
                  if (_listeners2 != null) {
                    var _rootContainerInstance2 = getRootHostContainer();
                    updateEventListeners(_listeners2, workInProgress2, _rootContainerInstance2);
                  }
                }
                if (workInProgress2.ref !== null) {
                  markRef$1(workInProgress2);
                  markUpdate(workInProgress2);
                }
              } else {
                if (enableFlareAPI) {
                  var _prevListeners = current2.memoizedProps.listeners;
                  var _nextListeners = newProps.listeners;
                  if (_prevListeners !== _nextListeners || workInProgress2.ref !== null) {
                    markUpdate(workInProgress2);
                  }
                } else {
                  if (workInProgress2.ref !== null) {
                    markUpdate(workInProgress2);
                  }
                }
                if (current2.ref !== workInProgress2.ref) {
                  markRef$1(workInProgress2);
                }
              }
            }
            break;
          }
          default:
            (function() {
              {
                {
                  throw ReactError(Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue."));
                }
              }
            })();
        }
        return null;
      }
      function unwindWork(workInProgress2, renderExpirationTime2) {
        switch (workInProgress2.tag) {
          case ClassComponent: {
            var Component = workInProgress2.type;
            if (isContextProvider(Component)) {
              popContext(workInProgress2);
            }
            var effectTag = workInProgress2.effectTag;
            if (effectTag & ShouldCapture) {
              workInProgress2.effectTag = effectTag & ~ShouldCapture | DidCapture;
              return workInProgress2;
            }
            return null;
          }
          case HostRoot: {
            popHostContainer(workInProgress2);
            popTopLevelContextObject(workInProgress2);
            var _effectTag = workInProgress2.effectTag;
            (function() {
              if (!((_effectTag & DidCapture) === NoEffect)) {
                {
                  throw ReactError(Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue."));
                }
              }
            })();
            workInProgress2.effectTag = _effectTag & ~ShouldCapture | DidCapture;
            return workInProgress2;
          }
          case HostComponent: {
            popHostContext(workInProgress2);
            return null;
          }
          case SuspenseComponent: {
            popSuspenseContext(workInProgress2);
            if (enableSuspenseServerRenderer) {
              var suspenseState = workInProgress2.memoizedState;
              if (suspenseState !== null && suspenseState.dehydrated !== null) {
                (function() {
                  if (!(workInProgress2.alternate !== null)) {
                    {
                      throw ReactError(Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."));
                    }
                  }
                })();
                resetHydrationState();
              }
            }
            var _effectTag2 = workInProgress2.effectTag;
            if (_effectTag2 & ShouldCapture) {
              workInProgress2.effectTag = _effectTag2 & ~ShouldCapture | DidCapture;
              return workInProgress2;
            }
            return null;
          }
          case SuspenseListComponent: {
            popSuspenseContext(workInProgress2);
            return null;
          }
          case HostPortal:
            popHostContainer(workInProgress2);
            return null;
          case ContextProvider:
            popProvider(workInProgress2);
            return null;
          default:
            return null;
        }
      }
      function unwindInterruptedWork(interruptedWork) {
        switch (interruptedWork.tag) {
          case ClassComponent: {
            var childContextTypes = interruptedWork.type.childContextTypes;
            if (childContextTypes !== null && childContextTypes !== void 0) {
              popContext(interruptedWork);
            }
            break;
          }
          case HostRoot: {
            popHostContainer(interruptedWork);
            popTopLevelContextObject(interruptedWork);
            break;
          }
          case HostComponent: {
            popHostContext(interruptedWork);
            break;
          }
          case HostPortal:
            popHostContainer(interruptedWork);
            break;
          case SuspenseComponent:
            popSuspenseContext(interruptedWork);
            break;
          case SuspenseListComponent:
            popSuspenseContext(interruptedWork);
            break;
          case ContextProvider:
            popProvider(interruptedWork);
            break;
          default:
            break;
        }
      }
      function createCapturedValue(value, source) {
        return {
          value,
          source,
          stack: getStackByFiberInDevAndProd(source)
        };
      }
      function showErrorDialog(capturedError) {
        return true;
      }
      function logCapturedError(capturedError) {
        var logError2 = showErrorDialog(capturedError);
        if (logError2 === false) {
          return;
        }
        var error = capturedError.error;
        {
          var componentName = capturedError.componentName, componentStack = capturedError.componentStack, errorBoundaryName = capturedError.errorBoundaryName, errorBoundaryFound = capturedError.errorBoundaryFound, willRetry = capturedError.willRetry;
          if (error != null && error._suppressLogging) {
            if (errorBoundaryFound && willRetry) {
              return;
            }
            console.error(error);
          }
          var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : "The above error occurred in one of your React components:";
          var errorBoundaryMessage;
          if (errorBoundaryFound && errorBoundaryName) {
            if (willRetry) {
              errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
            } else {
              errorBoundaryMessage = "This error was initially handled by the error boundary " + errorBoundaryName + ".\nRecreating the tree from scratch failed so React will unmount the tree.";
            }
          } else {
            errorBoundaryMessage = "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://fb.me/react-error-boundaries to learn more about error boundaries.";
          }
          var combinedMessage = "" + componentNameMessage + componentStack + "\n\n" + ("" + errorBoundaryMessage);
          console.error(combinedMessage);
        }
      }
      var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
      {
        didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
      }
      var PossiblyWeakSet = typeof WeakSet === "function" ? WeakSet : Set;
      function logError(boundary, errorInfo) {
        var source = errorInfo.source;
        var stack = errorInfo.stack;
        if (stack === null && source !== null) {
          stack = getStackByFiberInDevAndProd(source);
        }
        var capturedError = {
          componentName: source !== null ? getComponentName(source.type) : null,
          componentStack: stack !== null ? stack : "",
          error: errorInfo.value,
          errorBoundary: null,
          errorBoundaryName: null,
          errorBoundaryFound: false,
          willRetry: false
        };
        if (boundary !== null && boundary.tag === ClassComponent) {
          capturedError.errorBoundary = boundary.stateNode;
          capturedError.errorBoundaryName = getComponentName(boundary.type);
          capturedError.errorBoundaryFound = true;
          capturedError.willRetry = true;
        }
        try {
          logCapturedError(capturedError);
        } catch (e) {
          setTimeout(function() {
            throw e;
          });
        }
      }
      var callComponentWillUnmountWithTimer = function(current$$1, instance) {
        startPhaseTimer(current$$1, "componentWillUnmount");
        instance.props = current$$1.memoizedProps;
        instance.state = current$$1.memoizedState;
        instance.componentWillUnmount();
        stopPhaseTimer();
      };
      function safelyCallComponentWillUnmount(current$$1, instance) {
        {
          invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current$$1, instance);
          if (hasCaughtError()) {
            var unmountError = clearCaughtError();
            captureCommitPhaseError(current$$1, unmountError);
          }
        }
      }
      function safelyDetachRef(current$$1) {
        var ref = current$$1.ref;
        if (ref !== null) {
          if (typeof ref === "function") {
            {
              invokeGuardedCallback(null, ref, null, null);
              if (hasCaughtError()) {
                var refError = clearCaughtError();
                captureCommitPhaseError(current$$1, refError);
              }
            }
          } else {
            ref.current = null;
          }
        }
      }
      function safelyCallDestroy(current$$1, destroy) {
        {
          invokeGuardedCallback(null, destroy, null);
          if (hasCaughtError()) {
            var error = clearCaughtError();
            captureCommitPhaseError(current$$1, error);
          }
        }
      }
      function commitBeforeMutationLifeCycles(current$$1, finishedWork) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent: {
            commitHookEffectList(UnmountSnapshot, NoEffect$1, finishedWork);
            return;
          }
          case ClassComponent: {
            if (finishedWork.effectTag & Snapshot) {
              if (current$$1 !== null) {
                var prevProps = current$$1.memoizedProps;
                var prevState = current$$1.memoizedState;
                startPhaseTimer(finishedWork, "getSnapshotBeforeUpdate");
                var instance = finishedWork.stateNode;
                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    !(instance.props === finishedWork.memoizedProps) ? warning$1(false, "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance") : void 0;
                    !(instance.state === finishedWork.memoizedState) ? warning$1(false, "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance") : void 0;
                  }
                }
                var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);
                {
                  var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                  if (snapshot === void 0 && !didWarnSet.has(finishedWork.type)) {
                    didWarnSet.add(finishedWork.type);
                    warningWithoutStack$1(false, "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", getComponentName(finishedWork.type));
                  }
                }
                instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                stopPhaseTimer();
              }
            }
            return;
          }
          case HostRoot:
          case HostComponent:
          case HostText:
          case HostPortal:
          case IncompleteClassComponent:
            return;
          default: {
            (function() {
              {
                {
                  throw ReactError(Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."));
                }
              }
            })();
          }
        }
      }
      function commitHookEffectList(unmountTag, mountTag, finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
        if (lastEffect !== null) {
          var firstEffect = lastEffect.next;
          var effect = firstEffect;
          do {
            if ((effect.tag & unmountTag) !== NoEffect$1) {
              var destroy = effect.destroy;
              effect.destroy = void 0;
              if (destroy !== void 0) {
                destroy();
              }
            }
            if ((effect.tag & mountTag) !== NoEffect$1) {
              var create = effect.create;
              effect.destroy = create();
              {
                var _destroy = effect.destroy;
                if (_destroy !== void 0 && typeof _destroy !== "function") {
                  var addendum = void 0;
                  if (_destroy === null) {
                    addendum = " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                  } else if (typeof _destroy.then === "function") {
                    addendum = "\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching";
                  } else {
                    addendum = " You returned: " + _destroy;
                  }
                  warningWithoutStack$1(false, "An effect function must not return anything besides a function, which is used for clean-up.%s%s", addendum, getStackByFiberInDevAndProd(finishedWork));
                }
              }
            }
            effect = effect.next;
          } while (effect !== firstEffect);
        }
      }
      function commitPassiveHookEffects(finishedWork) {
        if ((finishedWork.effectTag & Passive) !== NoEffect) {
          switch (finishedWork.tag) {
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent: {
              commitHookEffectList(UnmountPassive, NoEffect$1, finishedWork);
              commitHookEffectList(NoEffect$1, MountPassive, finishedWork);
              break;
            }
            default:
              break;
          }
        }
      }
      function commitLifeCycles(finishedRoot, current$$1, finishedWork, committedExpirationTime) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent: {
            commitHookEffectList(UnmountLayout, MountLayout, finishedWork);
            break;
          }
          case ClassComponent: {
            var instance = finishedWork.stateNode;
            if (finishedWork.effectTag & Update) {
              if (current$$1 === null) {
                startPhaseTimer(finishedWork, "componentDidMount");
                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    !(instance.props === finishedWork.memoizedProps) ? warning$1(false, "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance") : void 0;
                    !(instance.state === finishedWork.memoizedState) ? warning$1(false, "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance") : void 0;
                  }
                }
                instance.componentDidMount();
                stopPhaseTimer();
              } else {
                var prevProps = finishedWork.elementType === finishedWork.type ? current$$1.memoizedProps : resolveDefaultProps(finishedWork.type, current$$1.memoizedProps);
                var prevState = current$$1.memoizedState;
                startPhaseTimer(finishedWork, "componentDidUpdate");
                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    !(instance.props === finishedWork.memoizedProps) ? warning$1(false, "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance") : void 0;
                    !(instance.state === finishedWork.memoizedState) ? warning$1(false, "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance") : void 0;
                  }
                }
                instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                stopPhaseTimer();
              }
            }
            var updateQueue = finishedWork.updateQueue;
            if (updateQueue !== null) {
              {
                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                  !(instance.props === finishedWork.memoizedProps) ? warning$1(false, "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance") : void 0;
                  !(instance.state === finishedWork.memoizedState) ? warning$1(false, "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance") : void 0;
                }
              }
              commitUpdateQueue(finishedWork, updateQueue, instance, committedExpirationTime);
            }
            return;
          }
          case HostRoot: {
            var _updateQueue = finishedWork.updateQueue;
            if (_updateQueue !== null) {
              var _instance = null;
              if (finishedWork.child !== null) {
                switch (finishedWork.child.tag) {
                  case HostComponent:
                    _instance = getPublicInstance(finishedWork.child.stateNode);
                    break;
                  case ClassComponent:
                    _instance = finishedWork.child.stateNode;
                    break;
                }
              }
              commitUpdateQueue(finishedWork, _updateQueue, _instance, committedExpirationTime);
            }
            return;
          }
          case HostComponent: {
            var _instance2 = finishedWork.stateNode;
            if (current$$1 === null && finishedWork.effectTag & Update) {
              var type = finishedWork.type;
              var props = finishedWork.memoizedProps;
              commitMount(_instance2, type, props, finishedWork);
            }
            return;
          }
          case HostText: {
            return;
          }
          case HostPortal: {
            return;
          }
          case Profiler: {
            if (enableProfilerTimer) {
              var onRender = finishedWork.memoizedProps.onRender;
              if (typeof onRender === "function") {
                if (enableSchedulerTracing) {
                  onRender(finishedWork.memoizedProps.id, current$$1 === null ? "mount" : "update", finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, getCommitTime(), finishedRoot.memoizedInteractions);
                } else {
                  onRender(finishedWork.memoizedProps.id, current$$1 === null ? "mount" : "update", finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, getCommitTime());
                }
              }
            }
            return;
          }
          case SuspenseComponent: {
            commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            return;
          }
          case SuspenseListComponent:
          case IncompleteClassComponent:
          case FundamentalComponent:
          case ScopeComponent:
            return;
          default: {
            (function() {
              {
                {
                  throw ReactError(Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."));
                }
              }
            })();
          }
        }
      }
      function hideOrUnhideAllChildren(finishedWork, isHidden) {
        if (supportsMutation) {
          var node = finishedWork;
          while (true) {
            if (node.tag === HostComponent) {
              var instance = node.stateNode;
              if (isHidden) {
                hideInstance(instance);
              } else {
                unhideInstance(node.stateNode, node.memoizedProps);
              }
            } else if (node.tag === HostText) {
              var _instance3 = node.stateNode;
              if (isHidden) {
                hideTextInstance(_instance3);
              } else {
                unhideTextInstance(_instance3, node.memoizedProps);
              }
            } else if (node.tag === SuspenseComponent && node.memoizedState !== null && node.memoizedState.dehydrated === null) {
              var fallbackChildFragment = node.child.sibling;
              fallbackChildFragment.return = node;
              node = fallbackChildFragment;
              continue;
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === finishedWork) {
              return;
            }
            while (node.sibling === null) {
              if (node.return === null || node.return === finishedWork) {
                return;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
      }
      function commitAttachRef(finishedWork) {
        var ref = finishedWork.ref;
        if (ref !== null) {
          var instance = finishedWork.stateNode;
          var instanceToUse;
          switch (finishedWork.tag) {
            case HostComponent:
              instanceToUse = getPublicInstance(instance);
              break;
            default:
              instanceToUse = instance;
          }
          if (enableScopeAPI && finishedWork.tag === ScopeComponent) {
            instanceToUse = instance.methods;
          }
          if (typeof ref === "function") {
            ref(instanceToUse);
          } else {
            {
              if (!ref.hasOwnProperty("current")) {
                warningWithoutStack$1(false, "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s", getComponentName(finishedWork.type), getStackByFiberInDevAndProd(finishedWork));
              }
            }
            ref.current = instanceToUse;
          }
        }
      }
      function commitDetachRef(current$$1) {
        var currentRef = current$$1.ref;
        if (currentRef !== null) {
          if (typeof currentRef === "function") {
            currentRef(null);
          } else {
            currentRef.current = null;
          }
        }
      }
      function commitUnmount(finishedRoot, current$$1, renderPriorityLevel) {
        onCommitUnmount(current$$1);
        switch (current$$1.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent: {
            var updateQueue = current$$1.updateQueue;
            if (updateQueue !== null) {
              var lastEffect = updateQueue.lastEffect;
              if (lastEffect !== null) {
                var firstEffect = lastEffect.next;
                var priorityLevel = renderPriorityLevel > NormalPriority ? NormalPriority : renderPriorityLevel;
                runWithPriority$2(priorityLevel, function() {
                  var effect = firstEffect;
                  do {
                    var destroy = effect.destroy;
                    if (destroy !== void 0) {
                      safelyCallDestroy(current$$1, destroy);
                    }
                    effect = effect.next;
                  } while (effect !== firstEffect);
                });
              }
            }
            break;
          }
          case ClassComponent: {
            safelyDetachRef(current$$1);
            var instance = current$$1.stateNode;
            if (typeof instance.componentWillUnmount === "function") {
              safelyCallComponentWillUnmount(current$$1, instance);
            }
            return;
          }
          case HostComponent: {
            if (enableFlareAPI) {
              var dependencies = current$$1.dependencies;
              if (dependencies !== null) {
                var respondersMap = dependencies.responders;
                if (respondersMap !== null) {
                  var responderInstances = Array.from(respondersMap.values());
                  for (var i2 = 0, length = responderInstances.length; i2 < length; i2++) {
                    var responderInstance = responderInstances[i2];
                    unmountResponderInstance(responderInstance);
                  }
                  dependencies.responders = null;
                }
              }
            }
            safelyDetachRef(current$$1);
            return;
          }
          case HostPortal: {
            if (supportsMutation) {
              unmountHostComponents(finishedRoot, current$$1, renderPriorityLevel);
            } else if (supportsPersistence) {
              emptyPortalContainer(current$$1);
            }
            return;
          }
          case FundamentalComponent: {
            if (enableFundamentalAPI) {
              var fundamentalInstance = current$$1.stateNode;
              if (fundamentalInstance !== null) {
                unmountFundamentalComponent(fundamentalInstance);
                current$$1.stateNode = null;
              }
            }
            return;
          }
          case DehydratedFragment: {
            if (enableSuspenseCallback) {
              var hydrationCallbacks = finishedRoot.hydrationCallbacks;
              if (hydrationCallbacks !== null) {
                var onDeleted = hydrationCallbacks.onDeleted;
                if (onDeleted) {
                  onDeleted(current$$1.stateNode);
                }
              }
            }
            return;
          }
          case ScopeComponent: {
            if (enableScopeAPI) {
              safelyDetachRef(current$$1);
            }
          }
        }
      }
      function commitNestedUnmounts(finishedRoot, root2, renderPriorityLevel) {
        var node = root2;
        while (true) {
          commitUnmount(finishedRoot, node, renderPriorityLevel);
          if (node.child !== null && (!supportsMutation || node.tag !== HostPortal)) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === root2) {
            return;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === root2) {
              return;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      function detachFiber(current$$1) {
        var alternate = current$$1.alternate;
        current$$1.return = null;
        current$$1.child = null;
        current$$1.memoizedState = null;
        current$$1.updateQueue = null;
        current$$1.dependencies = null;
        current$$1.alternate = null;
        current$$1.firstEffect = null;
        current$$1.lastEffect = null;
        current$$1.pendingProps = null;
        current$$1.memoizedProps = null;
        if (alternate !== null) {
          detachFiber(alternate);
        }
      }
      function emptyPortalContainer(current$$1) {
        if (!supportsPersistence) {
          return;
        }
        var portal = current$$1.stateNode;
        var containerInfo = portal.containerInfo;
        var emptyChildSet = createContainerChildSet(containerInfo);
        replaceContainerChildren(containerInfo, emptyChildSet);
      }
      function commitContainer(finishedWork) {
        if (!supportsPersistence) {
          return;
        }
        switch (finishedWork.tag) {
          case ClassComponent:
          case HostComponent:
          case HostText:
          case FundamentalComponent: {
            return;
          }
          case HostRoot:
          case HostPortal: {
            var portalOrRoot = finishedWork.stateNode;
            var containerInfo = portalOrRoot.containerInfo, pendingChildren = portalOrRoot.pendingChildren;
            replaceContainerChildren(containerInfo, pendingChildren);
            return;
          }
          default: {
            (function() {
              {
                {
                  throw ReactError(Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."));
                }
              }
            })();
          }
        }
      }
      function getHostParentFiber(fiber) {
        var parent = fiber.return;
        while (parent !== null) {
          if (isHostParent(parent)) {
            return parent;
          }
          parent = parent.return;
        }
        (function() {
          {
            {
              throw ReactError(Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."));
            }
          }
        })();
      }
      function isHostParent(fiber) {
        return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
      }
      function getHostSibling(fiber) {
        var node = fiber;
        siblings:
          while (true) {
            while (node.sibling === null) {
              if (node.return === null || isHostParent(node.return)) {
                return null;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
            while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
              if (node.effectTag & Placement) {
                continue siblings;
              }
              if (node.child === null || node.tag === HostPortal) {
                continue siblings;
              } else {
                node.child.return = node;
                node = node.child;
              }
            }
            if (!(node.effectTag & Placement)) {
              return node.stateNode;
            }
          }
      }
      function commitPlacement(finishedWork) {
        if (!supportsMutation) {
          return;
        }
        var parentFiber = getHostParentFiber(finishedWork);
        var parent;
        var isContainer;
        var parentStateNode = parentFiber.stateNode;
        switch (parentFiber.tag) {
          case HostComponent:
            parent = parentStateNode;
            isContainer = false;
            break;
          case HostRoot:
            parent = parentStateNode.containerInfo;
            isContainer = true;
            break;
          case HostPortal:
            parent = parentStateNode.containerInfo;
            isContainer = true;
            break;
          case FundamentalComponent:
            if (enableFundamentalAPI) {
              parent = parentStateNode.instance;
              isContainer = false;
            }
          default:
            (function() {
              {
                {
                  throw ReactError(Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."));
                }
              }
            })();
        }
        if (parentFiber.effectTag & ContentReset) {
          resetTextContent(parent);
          parentFiber.effectTag &= ~ContentReset;
        }
        var before = getHostSibling(finishedWork);
        var node = finishedWork;
        while (true) {
          var isHost = node.tag === HostComponent || node.tag === HostText;
          if (isHost || enableFundamentalAPI && node.tag === FundamentalComponent) {
            var stateNode = isHost ? node.stateNode : node.stateNode.instance;
            if (before) {
              if (isContainer) {
                insertInContainerBefore(parent, stateNode, before);
              } else {
                insertBefore(parent, stateNode, before);
              }
            } else {
              if (isContainer) {
                appendChildToContainer(parent, stateNode);
              } else {
                appendChild(parent, stateNode);
              }
            }
          } else if (node.tag === HostPortal) {
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === finishedWork) {
            return;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === finishedWork) {
              return;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      function unmountHostComponents(finishedRoot, current$$1, renderPriorityLevel) {
        var node = current$$1;
        var currentParentIsValid = false;
        var currentParent;
        var currentParentIsContainer;
        while (true) {
          if (!currentParentIsValid) {
            var parent = node.return;
            findParent:
              while (true) {
                (function() {
                  if (!(parent !== null)) {
                    {
                      throw ReactError(Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."));
                    }
                  }
                })();
                var parentStateNode = parent.stateNode;
                switch (parent.tag) {
                  case HostComponent:
                    currentParent = parentStateNode;
                    currentParentIsContainer = false;
                    break findParent;
                  case HostRoot:
                    currentParent = parentStateNode.containerInfo;
                    currentParentIsContainer = true;
                    break findParent;
                  case HostPortal:
                    currentParent = parentStateNode.containerInfo;
                    currentParentIsContainer = true;
                    break findParent;
                  case FundamentalComponent:
                    if (enableFundamentalAPI) {
                      currentParent = parentStateNode.instance;
                      currentParentIsContainer = false;
                    }
                }
                parent = parent.return;
              }
            currentParentIsValid = true;
          }
          if (node.tag === HostComponent || node.tag === HostText) {
            commitNestedUnmounts(finishedRoot, node, renderPriorityLevel);
            if (currentParentIsContainer) {
              removeChildFromContainer(currentParent, node.stateNode);
            } else {
              removeChild(currentParent, node.stateNode);
            }
          } else if (enableFundamentalAPI && node.tag === FundamentalComponent) {
            var fundamentalNode = node.stateNode.instance;
            commitNestedUnmounts(finishedRoot, node, renderPriorityLevel);
            if (currentParentIsContainer) {
              removeChildFromContainer(currentParent, fundamentalNode);
            } else {
              removeChild(currentParent, fundamentalNode);
            }
          } else if (enableSuspenseServerRenderer && node.tag === DehydratedFragment) {
            if (enableSuspenseCallback) {
              var hydrationCallbacks = finishedRoot.hydrationCallbacks;
              if (hydrationCallbacks !== null) {
                var onDeleted = hydrationCallbacks.onDeleted;
                if (onDeleted) {
                  onDeleted(node.stateNode);
                }
              }
            }
            if (currentParentIsContainer) {
              clearSuspenseBoundaryFromContainer(currentParent, node.stateNode);
            } else {
              clearSuspenseBoundary(currentParent, node.stateNode);
            }
          } else if (node.tag === HostPortal) {
            if (node.child !== null) {
              currentParent = node.stateNode.containerInfo;
              currentParentIsContainer = true;
              node.child.return = node;
              node = node.child;
              continue;
            }
          } else {
            commitUnmount(finishedRoot, node, renderPriorityLevel);
            if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
          }
          if (node === current$$1) {
            return;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === current$$1) {
              return;
            }
            node = node.return;
            if (node.tag === HostPortal) {
              currentParentIsValid = false;
            }
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      function commitDeletion(finishedRoot, current$$1, renderPriorityLevel) {
        if (supportsMutation) {
          unmountHostComponents(finishedRoot, current$$1, renderPriorityLevel);
        } else {
          commitNestedUnmounts(finishedRoot, current$$1, renderPriorityLevel);
        }
        detachFiber(current$$1);
      }
      function commitWork(current$$1, finishedWork) {
        if (!supportsMutation) {
          switch (finishedWork.tag) {
            case FunctionComponent:
            case ForwardRef:
            case MemoComponent:
            case SimpleMemoComponent: {
              commitHookEffectList(UnmountMutation, MountMutation, finishedWork);
              return;
            }
            case Profiler: {
              return;
            }
            case SuspenseComponent: {
              commitSuspenseComponent(finishedWork);
              attachSuspenseRetryListeners(finishedWork);
              return;
            }
            case SuspenseListComponent: {
              attachSuspenseRetryListeners(finishedWork);
              return;
            }
            case HostRoot: {
              if (supportsHydration) {
                var root2 = finishedWork.stateNode;
                if (root2.hydrate) {
                  root2.hydrate = false;
                  commitHydratedContainer(root2.containerInfo);
                }
              }
              break;
            }
          }
          commitContainer(finishedWork);
          return;
        }
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent: {
            commitHookEffectList(UnmountMutation, MountMutation, finishedWork);
            return;
          }
          case ClassComponent: {
            return;
          }
          case HostComponent: {
            var instance = finishedWork.stateNode;
            if (instance != null) {
              var newProps = finishedWork.memoizedProps;
              var oldProps = current$$1 !== null ? current$$1.memoizedProps : newProps;
              var type = finishedWork.type;
              var updatePayload = finishedWork.updateQueue;
              finishedWork.updateQueue = null;
              if (updatePayload !== null) {
                commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
              }
              if (enableFlareAPI) {
                var prevListeners = oldProps.listeners;
                var nextListeners = newProps.listeners;
                if (prevListeners !== nextListeners) {
                  updateEventListeners(nextListeners, finishedWork, null);
                }
              }
            }
            return;
          }
          case HostText: {
            (function() {
              if (!(finishedWork.stateNode !== null)) {
                {
                  throw ReactError(Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."));
                }
              }
            })();
            var textInstance = finishedWork.stateNode;
            var newText = finishedWork.memoizedProps;
            var oldText = current$$1 !== null ? current$$1.memoizedProps : newText;
            commitTextUpdate(textInstance, oldText, newText);
            return;
          }
          case HostRoot: {
            if (supportsHydration) {
              var _root = finishedWork.stateNode;
              if (_root.hydrate) {
                _root.hydrate = false;
                commitHydratedContainer(_root.containerInfo);
              }
            }
            return;
          }
          case Profiler: {
            return;
          }
          case SuspenseComponent: {
            commitSuspenseComponent(finishedWork);
            attachSuspenseRetryListeners(finishedWork);
            return;
          }
          case SuspenseListComponent: {
            attachSuspenseRetryListeners(finishedWork);
            return;
          }
          case IncompleteClassComponent: {
            return;
          }
          case FundamentalComponent: {
            if (enableFundamentalAPI) {
              var fundamentalInstance = finishedWork.stateNode;
              updateFundamentalComponent(fundamentalInstance);
            }
            return;
          }
          case ScopeComponent: {
            if (enableScopeAPI) {
              var scopeInstance = finishedWork.stateNode;
              scopeInstance.fiber = finishedWork;
              if (enableFlareAPI) {
                var _newProps = finishedWork.memoizedProps;
                var _oldProps = current$$1 !== null ? current$$1.memoizedProps : _newProps;
                var _prevListeners = _oldProps.listeners;
                var _nextListeners = _newProps.listeners;
                if (_prevListeners !== _nextListeners) {
                  updateEventListeners(_nextListeners, finishedWork, null);
                }
              }
            }
            return;
          }
          default: {
            (function() {
              {
                {
                  throw ReactError(Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."));
                }
              }
            })();
          }
        }
      }
      function commitSuspenseComponent(finishedWork) {
        var newState = finishedWork.memoizedState;
        var newDidTimeout;
        var primaryChildParent = finishedWork;
        if (newState === null) {
          newDidTimeout = false;
        } else {
          newDidTimeout = true;
          primaryChildParent = finishedWork.child;
          markCommitTimeOfFallback();
        }
        if (supportsMutation && primaryChildParent !== null) {
          hideOrUnhideAllChildren(primaryChildParent, newDidTimeout);
        }
        if (enableSuspenseCallback && newState !== null) {
          var suspenseCallback = finishedWork.memoizedProps.suspenseCallback;
          if (typeof suspenseCallback === "function") {
            var thenables = finishedWork.updateQueue;
            if (thenables !== null) {
              suspenseCallback(new Set(thenables));
            }
          } else {
            if (suspenseCallback !== void 0) {
              warning$1(false, "Unexpected type for suspenseCallback.");
            }
          }
        }
      }
      function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
        if (!supportsHydration) {
          return;
        }
        var newState = finishedWork.memoizedState;
        if (newState === null) {
          var current$$1 = finishedWork.alternate;
          if (current$$1 !== null) {
            var prevState = current$$1.memoizedState;
            if (prevState !== null) {
              var suspenseInstance = prevState.dehydrated;
              if (suspenseInstance !== null) {
                commitHydratedSuspenseInstance(suspenseInstance);
                if (enableSuspenseCallback) {
                  var hydrationCallbacks = finishedRoot.hydrationCallbacks;
                  if (hydrationCallbacks !== null) {
                    var onHydrated = hydrationCallbacks.onHydrated;
                    if (onHydrated) {
                      onHydrated(suspenseInstance);
                    }
                  }
                }
              }
            }
          }
        }
      }
      function attachSuspenseRetryListeners(finishedWork) {
        var thenables = finishedWork.updateQueue;
        if (thenables !== null) {
          finishedWork.updateQueue = null;
          var retryCache = finishedWork.stateNode;
          if (retryCache === null) {
            retryCache = finishedWork.stateNode = new PossiblyWeakSet();
          }
          thenables.forEach(function(thenable) {
            var retry = resolveRetryThenable.bind(null, finishedWork, thenable);
            if (!retryCache.has(thenable)) {
              if (enableSchedulerTracing) {
                if (thenable.__reactDoNotTraceInteractions !== true) {
                  retry = tracing.unstable_wrap(retry);
                }
              }
              retryCache.add(thenable);
              thenable.then(retry, retry);
            }
          });
        }
      }
      function commitResetTextContent(current$$1) {
        if (!supportsMutation) {
          return;
        }
        resetTextContent(current$$1.stateNode);
      }
      var PossiblyWeakMap$1 = typeof WeakMap === "function" ? WeakMap : Map;
      function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
        var update = createUpdate(expirationTime, null);
        update.tag = CaptureUpdate;
        update.payload = {
          element: null
        };
        var error = errorInfo.value;
        update.callback = function() {
          onUncaughtError(error);
          logError(fiber, errorInfo);
        };
        return update;
      }
      function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
        var update = createUpdate(expirationTime, null);
        update.tag = CaptureUpdate;
        var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
        if (typeof getDerivedStateFromError === "function") {
          var error = errorInfo.value;
          update.payload = function() {
            logError(fiber, errorInfo);
            return getDerivedStateFromError(error);
          };
        }
        var inst = fiber.stateNode;
        if (inst !== null && typeof inst.componentDidCatch === "function") {
          update.callback = function callback() {
            {
              markFailedErrorBoundaryForHotReloading(fiber);
            }
            if (typeof getDerivedStateFromError !== "function") {
              markLegacyErrorBoundaryAsFailed(this);
              logError(fiber, errorInfo);
            }
            var error2 = errorInfo.value;
            var stack = errorInfo.stack;
            this.componentDidCatch(error2, {
              componentStack: stack !== null ? stack : ""
            });
            {
              if (typeof getDerivedStateFromError !== "function") {
                !(fiber.expirationTime === Sync) ? warningWithoutStack$1(false, "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", getComponentName(fiber.type) || "Unknown") : void 0;
              }
            }
          };
        } else {
          update.callback = function() {
            markFailedErrorBoundaryForHotReloading(fiber);
          };
        }
        return update;
      }
      function attachPingListener(root2, renderExpirationTime2, thenable) {
        var pingCache = root2.pingCache;
        var threadIDs;
        if (pingCache === null) {
          pingCache = root2.pingCache = new PossiblyWeakMap$1();
          threadIDs = new Set();
          pingCache.set(thenable, threadIDs);
        } else {
          threadIDs = pingCache.get(thenable);
          if (threadIDs === void 0) {
            threadIDs = new Set();
            pingCache.set(thenable, threadIDs);
          }
        }
        if (!threadIDs.has(renderExpirationTime2)) {
          threadIDs.add(renderExpirationTime2);
          var ping = pingSuspendedRoot.bind(null, root2, thenable, renderExpirationTime2);
          thenable.then(ping, ping);
        }
      }
      function throwException(root2, returnFiber, sourceFiber, value, renderExpirationTime2) {
        sourceFiber.effectTag |= Incomplete;
        sourceFiber.firstEffect = sourceFiber.lastEffect = null;
        if (value !== null && typeof value === "object" && typeof value.then === "function") {
          var thenable = value;
          checkForWrongSuspensePriorityInDEV(sourceFiber);
          var hasInvisibleParentBoundary = hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext);
          var _workInProgress = returnFiber;
          do {
            if (_workInProgress.tag === SuspenseComponent && shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)) {
              var thenables = _workInProgress.updateQueue;
              if (thenables === null) {
                var updateQueue = new Set();
                updateQueue.add(thenable);
                _workInProgress.updateQueue = updateQueue;
              } else {
                thenables.add(thenable);
              }
              if ((_workInProgress.mode & BatchedMode) === NoMode) {
                _workInProgress.effectTag |= DidCapture;
                sourceFiber.effectTag &= ~(LifecycleEffectMask | Incomplete);
                if (sourceFiber.tag === ClassComponent) {
                  var currentSourceFiber = sourceFiber.alternate;
                  if (currentSourceFiber === null) {
                    sourceFiber.tag = IncompleteClassComponent;
                  } else {
                    var update = createUpdate(Sync, null);
                    update.tag = ForceUpdate;
                    enqueueUpdate(sourceFiber, update);
                  }
                }
                sourceFiber.expirationTime = Sync;
                return;
              }
              attachPingListener(root2, renderExpirationTime2, thenable);
              _workInProgress.effectTag |= ShouldCapture;
              _workInProgress.expirationTime = renderExpirationTime2;
              return;
            }
            _workInProgress = _workInProgress.return;
          } while (_workInProgress !== null);
          value = new Error((getComponentName(sourceFiber.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + getStackByFiberInDevAndProd(sourceFiber));
        }
        renderDidError();
        value = createCapturedValue(value, sourceFiber);
        var workInProgress2 = returnFiber;
        do {
          switch (workInProgress2.tag) {
            case HostRoot: {
              var _errorInfo = value;
              workInProgress2.effectTag |= ShouldCapture;
              workInProgress2.expirationTime = renderExpirationTime2;
              var _update = createRootErrorUpdate(workInProgress2, _errorInfo, renderExpirationTime2);
              enqueueCapturedUpdate(workInProgress2, _update);
              return;
            }
            case ClassComponent:
              var errorInfo = value;
              var ctor = workInProgress2.type;
              var instance = workInProgress2.stateNode;
              if ((workInProgress2.effectTag & DidCapture) === NoEffect && (typeof ctor.getDerivedStateFromError === "function" || instance !== null && typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance))) {
                workInProgress2.effectTag |= ShouldCapture;
                workInProgress2.expirationTime = renderExpirationTime2;
                var _update2 = createClassErrorUpdate(workInProgress2, errorInfo, renderExpirationTime2);
                enqueueCapturedUpdate(workInProgress2, _update2);
                return;
              }
              break;
            default:
              break;
          }
          workInProgress2 = workInProgress2.return;
        } while (workInProgress2 !== null);
      }
      var ceil = Math.ceil;
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner;
      var IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing;
      var NoContext = 0;
      var BatchedContext = 1;
      var EventContext = 2;
      var DiscreteEventContext = 4;
      var LegacyUnbatchedContext = 8;
      var RenderContext = 16;
      var CommitContext = 32;
      var RootIncomplete = 0;
      var RootFatalErrored = 1;
      var RootErrored = 2;
      var RootSuspended = 3;
      var RootSuspendedWithDelay = 4;
      var RootCompleted = 5;
      var RootLocked = 6;
      var executionContext = NoContext;
      var workInProgressRoot = null;
      var workInProgress = null;
      var renderExpirationTime = NoWork;
      var workInProgressRootExitStatus = RootIncomplete;
      var workInProgressRootFatalError = null;
      var workInProgressRootLatestProcessedExpirationTime = Sync;
      var workInProgressRootLatestSuspenseTimeout = Sync;
      var workInProgressRootCanSuspendUsingConfig = null;
      var workInProgressRootNextUnprocessedUpdateTime = NoWork;
      var workInProgressRootHasPendingPing = false;
      var globalMostRecentFallbackTime = 0;
      var FALLBACK_THROTTLE_MS = 500;
      var nextEffect = null;
      var hasUncaughtError = false;
      var firstUncaughtError = null;
      var legacyErrorBoundariesThatAlreadyFailed = null;
      var rootDoesHavePassiveEffects = false;
      var rootWithPendingPassiveEffects = null;
      var pendingPassiveEffectsRenderPriority = NoPriority;
      var pendingPassiveEffectsExpirationTime = NoWork;
      var rootsWithPendingDiscreteUpdates = null;
      var NESTED_UPDATE_LIMIT = 50;
      var nestedUpdateCount = 0;
      var rootWithNestedUpdates = null;
      var NESTED_PASSIVE_UPDATE_LIMIT = 50;
      var nestedPassiveUpdateCount = 0;
      var interruptedBy = null;
      var spawnedWorkDuringRender = null;
      var currentEventTime = NoWork;
      function requestCurrentTime() {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
          return msToExpirationTime(now());
        }
        if (currentEventTime !== NoWork) {
          return currentEventTime;
        }
        currentEventTime = msToExpirationTime(now());
        return currentEventTime;
      }
      function computeExpirationForFiber(currentTime, fiber, suspenseConfig) {
        var mode = fiber.mode;
        if ((mode & BatchedMode) === NoMode) {
          return Sync;
        }
        var priorityLevel = getCurrentPriorityLevel();
        if ((mode & ConcurrentMode) === NoMode) {
          return priorityLevel === ImmediatePriority ? Sync : Batched;
        }
        if ((executionContext & RenderContext) !== NoContext) {
          return renderExpirationTime;
        }
        var expirationTime;
        if (suspenseConfig !== null) {
          expirationTime = computeSuspenseExpiration(currentTime, suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION);
        } else {
          switch (priorityLevel) {
            case ImmediatePriority:
              expirationTime = Sync;
              break;
            case UserBlockingPriority$2:
              expirationTime = computeInteractiveExpiration(currentTime);
              break;
            case NormalPriority:
            case LowPriority:
              expirationTime = computeAsyncExpiration(currentTime);
              break;
            case IdlePriority:
              expirationTime = Idle;
              break;
            default:
              (function() {
                {
                  {
                    throw ReactError(Error("Expected a valid priority level"));
                  }
                }
              })();
          }
        }
        if (workInProgressRoot !== null && expirationTime === renderExpirationTime) {
          expirationTime -= 1;
        }
        return expirationTime;
      }
      var lastUniqueAsyncExpiration = NoWork;
      function computeUniqueAsyncExpiration() {
        var currentTime = requestCurrentTime();
        var result2 = computeAsyncExpiration(currentTime);
        if (result2 <= lastUniqueAsyncExpiration) {
          result2 -= 1;
        }
        lastUniqueAsyncExpiration = result2;
        return result2;
      }
      function scheduleUpdateOnFiber(fiber, expirationTime) {
        checkForNestedUpdates();
        warnAboutInvalidUpdatesOnClassComponentsInDEV(fiber);
        var root2 = markUpdateTimeFromFiberToRoot(fiber, expirationTime);
        if (root2 === null) {
          warnAboutUpdateOnUnmountedFiberInDEV(fiber);
          return;
        }
        checkForInterruption(fiber, expirationTime);
        recordScheduleUpdate();
        var priorityLevel = getCurrentPriorityLevel();
        if (expirationTime === Sync) {
          if ((executionContext & LegacyUnbatchedContext) !== NoContext && (executionContext & (RenderContext | CommitContext)) === NoContext) {
            schedulePendingInteractions(root2, expirationTime);
            performSyncWorkOnRoot(root2);
          } else {
            ensureRootIsScheduled(root2);
            schedulePendingInteractions(root2, expirationTime);
            if (executionContext === NoContext) {
              flushSyncCallbackQueue();
            }
          }
        } else {
          ensureRootIsScheduled(root2);
          schedulePendingInteractions(root2, expirationTime);
        }
        if ((executionContext & DiscreteEventContext) !== NoContext && (priorityLevel === UserBlockingPriority$2 || priorityLevel === ImmediatePriority)) {
          if (rootsWithPendingDiscreteUpdates === null) {
            rootsWithPendingDiscreteUpdates = new Map([[root2, expirationTime]]);
          } else {
            var lastDiscreteTime = rootsWithPendingDiscreteUpdates.get(root2);
            if (lastDiscreteTime === void 0 || lastDiscreteTime > expirationTime) {
              rootsWithPendingDiscreteUpdates.set(root2, expirationTime);
            }
          }
        }
      }
      var scheduleWork = scheduleUpdateOnFiber;
      function markUpdateTimeFromFiberToRoot(fiber, expirationTime) {
        if (fiber.expirationTime < expirationTime) {
          fiber.expirationTime = expirationTime;
        }
        var alternate = fiber.alternate;
        if (alternate !== null && alternate.expirationTime < expirationTime) {
          alternate.expirationTime = expirationTime;
        }
        var node = fiber.return;
        var root2 = null;
        if (node === null && fiber.tag === HostRoot) {
          root2 = fiber.stateNode;
        } else {
          while (node !== null) {
            alternate = node.alternate;
            if (node.childExpirationTime < expirationTime) {
              node.childExpirationTime = expirationTime;
              if (alternate !== null && alternate.childExpirationTime < expirationTime) {
                alternate.childExpirationTime = expirationTime;
              }
            } else if (alternate !== null && alternate.childExpirationTime < expirationTime) {
              alternate.childExpirationTime = expirationTime;
            }
            if (node.return === null && node.tag === HostRoot) {
              root2 = node.stateNode;
              break;
            }
            node = node.return;
          }
        }
        if (root2 !== null) {
          if (workInProgressRoot === root2) {
            markUnprocessedUpdateTime(expirationTime);
            if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
              markRootSuspendedAtTime(root2, renderExpirationTime);
            }
          }
          markRootUpdatedAtTime(root2, expirationTime);
        }
        return root2;
      }
      function getNextRootExpirationTimeToWorkOn(root2) {
        var lastExpiredTime = root2.lastExpiredTime;
        if (lastExpiredTime !== NoWork) {
          return lastExpiredTime;
        }
        var firstPendingTime = root2.firstPendingTime;
        if (!isRootSuspendedAtTime(root2, firstPendingTime)) {
          return firstPendingTime;
        }
        var lastPingedTime = root2.lastPingedTime;
        var nextKnownPendingLevel = root2.nextKnownPendingLevel;
        return lastPingedTime > nextKnownPendingLevel ? lastPingedTime : nextKnownPendingLevel;
      }
      function ensureRootIsScheduled(root2) {
        var lastExpiredTime = root2.lastExpiredTime;
        if (lastExpiredTime !== NoWork) {
          root2.callbackExpirationTime = Sync;
          root2.callbackPriority = ImmediatePriority;
          root2.callbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root2));
          return;
        }
        var expirationTime = getNextRootExpirationTimeToWorkOn(root2);
        var existingCallbackNode = root2.callbackNode;
        if (expirationTime === NoWork) {
          if (existingCallbackNode !== null) {
            root2.callbackNode = null;
            root2.callbackExpirationTime = NoWork;
            root2.callbackPriority = NoPriority;
          }
          return;
        }
        var currentTime = requestCurrentTime();
        var priorityLevel = inferPriorityFromExpirationTime(currentTime, expirationTime);
        if (existingCallbackNode !== null) {
          var existingCallbackPriority = root2.callbackPriority;
          var existingCallbackExpirationTime = root2.callbackExpirationTime;
          if (existingCallbackExpirationTime === expirationTime && existingCallbackPriority >= priorityLevel) {
            return;
          }
          cancelCallback(existingCallbackNode);
        }
        root2.callbackExpirationTime = expirationTime;
        root2.callbackPriority = priorityLevel;
        var callbackNode;
        if (expirationTime === Sync) {
          callbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root2));
        } else if (disableSchedulerTimeoutBasedOnReactExpirationTime) {
          callbackNode = scheduleCallback(priorityLevel, performConcurrentWorkOnRoot.bind(null, root2));
        } else {
          callbackNode = scheduleCallback(priorityLevel, performConcurrentWorkOnRoot.bind(null, root2), {
            timeout: expirationTimeToMs(expirationTime) - now()
          });
        }
        root2.callbackNode = callbackNode;
      }
      function performConcurrentWorkOnRoot(root2, didTimeout) {
        currentEventTime = NoWork;
        if (didTimeout) {
          var currentTime = requestCurrentTime();
          markRootExpiredAtTime(root2, currentTime);
          ensureRootIsScheduled(root2);
          return null;
        }
        var expirationTime = getNextRootExpirationTimeToWorkOn(root2);
        if (expirationTime !== NoWork) {
          var originalCallbackNode = root2.callbackNode;
          (function() {
            if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
              {
                throw ReactError(Error("Should not already be working."));
              }
            }
          })();
          flushPassiveEffects();
          if (root2 !== workInProgressRoot || expirationTime !== renderExpirationTime) {
            prepareFreshStack(root2, expirationTime);
            startWorkOnPendingInteractions(root2, expirationTime);
          }
          if (workInProgress !== null) {
            var prevExecutionContext = executionContext;
            executionContext |= RenderContext;
            var prevDispatcher = pushDispatcher(root2);
            var prevInteractions = pushInteractions(root2);
            startWorkLoopTimer(workInProgress);
            do {
              try {
                workLoopConcurrent();
                break;
              } catch (thrownValue) {
                handleError(root2, thrownValue);
              }
            } while (true);
            resetContextDependencies();
            executionContext = prevExecutionContext;
            popDispatcher(prevDispatcher);
            if (enableSchedulerTracing) {
              popInteractions(prevInteractions);
            }
            if (workInProgressRootExitStatus === RootFatalErrored) {
              var fatalError = workInProgressRootFatalError;
              stopInterruptedWorkLoopTimer();
              prepareFreshStack(root2, expirationTime);
              markRootSuspendedAtTime(root2, expirationTime);
              ensureRootIsScheduled(root2);
              throw fatalError;
            }
            if (workInProgress !== null) {
              stopInterruptedWorkLoopTimer();
            } else {
              stopFinishedWorkLoopTimer();
              var finishedWork = root2.finishedWork = root2.current.alternate;
              root2.finishedExpirationTime = expirationTime;
              resolveLocksOnRoot(root2, expirationTime);
              finishConcurrentRender(root2, finishedWork, workInProgressRootExitStatus, expirationTime);
            }
            ensureRootIsScheduled(root2);
            if (root2.callbackNode === originalCallbackNode) {
              return performConcurrentWorkOnRoot.bind(null, root2);
            }
          }
        }
        return null;
      }
      function finishConcurrentRender(root2, finishedWork, exitStatus, expirationTime) {
        workInProgressRoot = null;
        switch (exitStatus) {
          case RootIncomplete:
          case RootFatalErrored: {
            (function() {
              {
                {
                  throw ReactError(Error("Root did not complete. This is a bug in React."));
                }
              }
            })();
          }
          case RootErrored: {
            if (expirationTime !== Idle) {
              markRootExpiredAtTime(root2, Idle);
              break;
            }
            commitRoot(root2);
            break;
          }
          case RootSuspended: {
            markRootSuspendedAtTime(root2, expirationTime);
            var lastSuspendedTime = root2.lastSuspendedTime;
            if (expirationTime === lastSuspendedTime) {
              root2.nextKnownPendingLevel = getRemainingExpirationTime(finishedWork);
            }
            flushSuspensePriorityWarningInDEV();
            var hasNotProcessedNewUpdates = workInProgressRootLatestProcessedExpirationTime === Sync;
            if (hasNotProcessedNewUpdates && !(flushSuspenseFallbacksInTests && IsThisRendererActing.current)) {
              var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now();
              if (msUntilTimeout > 10) {
                if (workInProgressRootHasPendingPing) {
                  var lastPingedTime = root2.lastPingedTime;
                  if (lastPingedTime === NoWork || lastPingedTime >= expirationTime) {
                    root2.lastPingedTime = expirationTime;
                    prepareFreshStack(root2, expirationTime);
                    break;
                  }
                }
                var nextTime = getNextRootExpirationTimeToWorkOn(root2);
                if (nextTime !== NoWork && nextTime !== expirationTime) {
                  break;
                }
                if (lastSuspendedTime !== NoWork && lastSuspendedTime !== expirationTime) {
                  root2.lastPingedTime = lastSuspendedTime;
                  break;
                }
                root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), msUntilTimeout);
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          case RootSuspendedWithDelay: {
            markRootSuspendedAtTime(root2, expirationTime);
            var _lastSuspendedTime = root2.lastSuspendedTime;
            if (expirationTime === _lastSuspendedTime) {
              root2.nextKnownPendingLevel = getRemainingExpirationTime(finishedWork);
            }
            flushSuspensePriorityWarningInDEV();
            if (!(flushSuspenseFallbacksInTests && IsThisRendererActing.current)) {
              if (workInProgressRootHasPendingPing) {
                var _lastPingedTime = root2.lastPingedTime;
                if (_lastPingedTime === NoWork || _lastPingedTime >= expirationTime) {
                  root2.lastPingedTime = expirationTime;
                  prepareFreshStack(root2, expirationTime);
                  break;
                }
              }
              var _nextTime = getNextRootExpirationTimeToWorkOn(root2);
              if (_nextTime !== NoWork && _nextTime !== expirationTime) {
                break;
              }
              if (_lastSuspendedTime !== NoWork && _lastSuspendedTime !== expirationTime) {
                root2.lastPingedTime = _lastSuspendedTime;
                break;
              }
              var _msUntilTimeout;
              if (workInProgressRootLatestSuspenseTimeout !== Sync) {
                _msUntilTimeout = expirationTimeToMs(workInProgressRootLatestSuspenseTimeout) - now();
              } else if (workInProgressRootLatestProcessedExpirationTime === Sync) {
                _msUntilTimeout = 0;
              } else {
                var eventTimeMs = inferTimeFromExpirationTime(workInProgressRootLatestProcessedExpirationTime);
                var currentTimeMs = now();
                var timeUntilExpirationMs = expirationTimeToMs(expirationTime) - currentTimeMs;
                var timeElapsed = currentTimeMs - eventTimeMs;
                if (timeElapsed < 0) {
                  timeElapsed = 0;
                }
                _msUntilTimeout = jnd(timeElapsed) - timeElapsed;
                if (timeUntilExpirationMs < _msUntilTimeout) {
                  _msUntilTimeout = timeUntilExpirationMs;
                }
              }
              if (_msUntilTimeout > 10) {
                root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), _msUntilTimeout);
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          case RootCompleted: {
            if (!(flushSuspenseFallbacksInTests && IsThisRendererActing.current) && workInProgressRootLatestProcessedExpirationTime !== Sync && workInProgressRootCanSuspendUsingConfig !== null) {
              var _msUntilTimeout2 = computeMsUntilSuspenseLoadingDelay(workInProgressRootLatestProcessedExpirationTime, expirationTime, workInProgressRootCanSuspendUsingConfig);
              if (_msUntilTimeout2 > 10) {
                markRootSuspendedAtTime(root2, expirationTime);
                root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), _msUntilTimeout2);
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          case RootLocked: {
            markRootSuspendedAtTime(root2, expirationTime);
            break;
          }
          default: {
            (function() {
              {
                {
                  throw ReactError(Error("Unknown root exit status."));
                }
              }
            })();
          }
        }
      }
      function performSyncWorkOnRoot(root2) {
        var lastExpiredTime = root2.lastExpiredTime;
        var expirationTime = lastExpiredTime !== NoWork ? lastExpiredTime : Sync;
        if (root2.finishedExpirationTime === expirationTime) {
          commitRoot(root2);
        } else {
          (function() {
            if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
              {
                throw ReactError(Error("Should not already be working."));
              }
            }
          })();
          flushPassiveEffects();
          if (root2 !== workInProgressRoot || expirationTime !== renderExpirationTime) {
            prepareFreshStack(root2, expirationTime);
            startWorkOnPendingInteractions(root2, expirationTime);
          }
          if (workInProgress !== null) {
            var prevExecutionContext = executionContext;
            executionContext |= RenderContext;
            var prevDispatcher = pushDispatcher(root2);
            var prevInteractions = pushInteractions(root2);
            startWorkLoopTimer(workInProgress);
            do {
              try {
                workLoopSync();
                break;
              } catch (thrownValue) {
                handleError(root2, thrownValue);
              }
            } while (true);
            resetContextDependencies();
            executionContext = prevExecutionContext;
            popDispatcher(prevDispatcher);
            if (enableSchedulerTracing) {
              popInteractions(prevInteractions);
            }
            if (workInProgressRootExitStatus === RootFatalErrored) {
              var fatalError = workInProgressRootFatalError;
              stopInterruptedWorkLoopTimer();
              prepareFreshStack(root2, expirationTime);
              markRootSuspendedAtTime(root2, expirationTime);
              ensureRootIsScheduled(root2);
              throw fatalError;
            }
            if (workInProgress !== null) {
              (function() {
                {
                  {
                    throw ReactError(Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."));
                  }
                }
              })();
            } else {
              stopFinishedWorkLoopTimer();
              root2.finishedWork = root2.current.alternate;
              root2.finishedExpirationTime = expirationTime;
              resolveLocksOnRoot(root2, expirationTime);
              finishSyncRender(root2, workInProgressRootExitStatus, expirationTime);
            }
            ensureRootIsScheduled(root2);
          }
        }
        return null;
      }
      function finishSyncRender(root2, exitStatus, expirationTime) {
        if (exitStatus === RootLocked) {
          markRootSuspendedAtTime(root2, expirationTime);
        } else {
          workInProgressRoot = null;
          {
            if (exitStatus === RootSuspended || exitStatus === RootSuspendedWithDelay) {
              flushSuspensePriorityWarningInDEV();
            }
          }
          commitRoot(root2);
        }
      }
      function flushRoot(root2, expirationTime) {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
          (function() {
            {
              {
                throw ReactError(Error("work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method."));
              }
            }
          })();
        }
        markRootExpiredAtTime(root2, expirationTime);
        ensureRootIsScheduled(root2);
        flushSyncCallbackQueue();
      }
      function flushDiscreteUpdates() {
        if ((executionContext & (BatchedContext | RenderContext | CommitContext)) !== NoContext) {
          if ((executionContext & RenderContext) !== NoContext) {
            warning$1(false, "unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
          }
          return;
        }
        flushPendingDiscreteUpdates();
        flushPassiveEffects();
      }
      function resolveLocksOnRoot(root2, expirationTime) {
        var firstBatch = root2.firstBatch;
        if (firstBatch !== null && firstBatch._defer && firstBatch._expirationTime >= expirationTime) {
          scheduleCallback(NormalPriority, function() {
            firstBatch._onComplete();
            return null;
          });
          workInProgressRootExitStatus = RootLocked;
        }
      }
      function flushPendingDiscreteUpdates() {
        if (rootsWithPendingDiscreteUpdates !== null) {
          var roots = rootsWithPendingDiscreteUpdates;
          rootsWithPendingDiscreteUpdates = null;
          roots.forEach(function(expirationTime, root2) {
            markRootExpiredAtTime(root2, expirationTime);
            ensureRootIsScheduled(root2);
          });
          flushSyncCallbackQueue();
        }
      }
      function batchedUpdates$1(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;
        try {
          return fn(a);
        } finally {
          executionContext = prevExecutionContext;
          if (executionContext === NoContext) {
            flushSyncCallbackQueue();
          }
        }
      }
      function batchedEventUpdates$1(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext |= EventContext;
        try {
          return fn(a);
        } finally {
          executionContext = prevExecutionContext;
          if (executionContext === NoContext) {
            flushSyncCallbackQueue();
          }
        }
      }
      function discreteUpdates$1(fn, a, b, c) {
        var prevExecutionContext = executionContext;
        executionContext |= DiscreteEventContext;
        try {
          return runWithPriority$2(UserBlockingPriority$2, fn.bind(null, a, b, c));
        } finally {
          executionContext = prevExecutionContext;
          if (executionContext === NoContext) {
            flushSyncCallbackQueue();
          }
        }
      }
      function unbatchedUpdates(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext &= ~BatchedContext;
        executionContext |= LegacyUnbatchedContext;
        try {
          return fn(a);
        } finally {
          executionContext = prevExecutionContext;
          if (executionContext === NoContext) {
            flushSyncCallbackQueue();
          }
        }
      }
      function flushSync(fn, a) {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
          (function() {
            {
              {
                throw ReactError(Error("flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering."));
              }
            }
          })();
        }
        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;
        try {
          return runWithPriority$2(ImmediatePriority, fn.bind(null, a));
        } finally {
          executionContext = prevExecutionContext;
          flushSyncCallbackQueue();
        }
      }
      function flushControlled(fn) {
        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;
        try {
          runWithPriority$2(ImmediatePriority, fn);
        } finally {
          executionContext = prevExecutionContext;
          if (executionContext === NoContext) {
            flushSyncCallbackQueue();
          }
        }
      }
      function prepareFreshStack(root2, expirationTime) {
        root2.finishedWork = null;
        root2.finishedExpirationTime = NoWork;
        var timeoutHandle = root2.timeoutHandle;
        if (timeoutHandle !== noTimeout) {
          root2.timeoutHandle = noTimeout;
          cancelTimeout(timeoutHandle);
        }
        if (workInProgress !== null) {
          var interruptedWork = workInProgress.return;
          while (interruptedWork !== null) {
            unwindInterruptedWork(interruptedWork);
            interruptedWork = interruptedWork.return;
          }
        }
        workInProgressRoot = root2;
        workInProgress = createWorkInProgress(root2.current, null, expirationTime);
        renderExpirationTime = expirationTime;
        workInProgressRootExitStatus = RootIncomplete;
        workInProgressRootFatalError = null;
        workInProgressRootLatestProcessedExpirationTime = Sync;
        workInProgressRootLatestSuspenseTimeout = Sync;
        workInProgressRootCanSuspendUsingConfig = null;
        workInProgressRootNextUnprocessedUpdateTime = NoWork;
        workInProgressRootHasPendingPing = false;
        if (enableSchedulerTracing) {
          spawnedWorkDuringRender = null;
        }
        {
          ReactStrictModeWarnings.discardPendingWarnings();
          componentsThatTriggeredHighPriSuspend = null;
        }
      }
      function handleError(root2, thrownValue) {
        do {
          try {
            resetContextDependencies();
            resetHooks();
            if (workInProgress === null || workInProgress.return === null) {
              workInProgressRootExitStatus = RootFatalErrored;
              workInProgressRootFatalError = thrownValue;
              return null;
            }
            if (enableProfilerTimer && workInProgress.mode & ProfileMode) {
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, true);
            }
            throwException(root2, workInProgress.return, workInProgress, thrownValue, renderExpirationTime);
            workInProgress = completeUnitOfWork(workInProgress);
          } catch (yetAnotherThrownValue) {
            thrownValue = yetAnotherThrownValue;
            continue;
          }
          return;
        } while (true);
      }
      function pushDispatcher(root2) {
        var prevDispatcher = ReactCurrentDispatcher.current;
        ReactCurrentDispatcher.current = ContextOnlyDispatcher;
        if (prevDispatcher === null) {
          return ContextOnlyDispatcher;
        } else {
          return prevDispatcher;
        }
      }
      function popDispatcher(prevDispatcher) {
        ReactCurrentDispatcher.current = prevDispatcher;
      }
      function pushInteractions(root2) {
        if (enableSchedulerTracing) {
          var prevInteractions = tracing.__interactionsRef.current;
          tracing.__interactionsRef.current = root2.memoizedInteractions;
          return prevInteractions;
        }
        return null;
      }
      function popInteractions(prevInteractions) {
        if (enableSchedulerTracing) {
          tracing.__interactionsRef.current = prevInteractions;
        }
      }
      function markCommitTimeOfFallback() {
        globalMostRecentFallbackTime = now();
      }
      function markRenderEventTimeAndConfig(expirationTime, suspenseConfig) {
        if (expirationTime < workInProgressRootLatestProcessedExpirationTime && expirationTime > Idle) {
          workInProgressRootLatestProcessedExpirationTime = expirationTime;
        }
        if (suspenseConfig !== null) {
          if (expirationTime < workInProgressRootLatestSuspenseTimeout && expirationTime > Idle) {
            workInProgressRootLatestSuspenseTimeout = expirationTime;
            workInProgressRootCanSuspendUsingConfig = suspenseConfig;
          }
        }
      }
      function markUnprocessedUpdateTime(expirationTime) {
        if (expirationTime > workInProgressRootNextUnprocessedUpdateTime) {
          workInProgressRootNextUnprocessedUpdateTime = expirationTime;
        }
      }
      function renderDidSuspend() {
        if (workInProgressRootExitStatus === RootIncomplete) {
          workInProgressRootExitStatus = RootSuspended;
        }
      }
      function renderDidSuspendDelayIfPossible() {
        if (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) {
          workInProgressRootExitStatus = RootSuspendedWithDelay;
        }
        if (workInProgressRootNextUnprocessedUpdateTime !== NoWork && workInProgressRoot !== null) {
          markRootSuspendedAtTime(workInProgressRoot, renderExpirationTime);
          markRootUpdatedAtTime(workInProgressRoot, workInProgressRootNextUnprocessedUpdateTime);
        }
      }
      function renderDidError() {
        if (workInProgressRootExitStatus !== RootCompleted) {
          workInProgressRootExitStatus = RootErrored;
        }
      }
      function renderHasNotSuspendedYet() {
        return workInProgressRootExitStatus === RootIncomplete;
      }
      function inferTimeFromExpirationTime(expirationTime) {
        var earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
        return earliestExpirationTimeMs - LOW_PRIORITY_EXPIRATION;
      }
      function inferTimeFromExpirationTimeWithSuspenseConfig(expirationTime, suspenseConfig) {
        var earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
        return earliestExpirationTimeMs - (suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION);
      }
      function workLoopSync() {
        while (workInProgress !== null) {
          workInProgress = performUnitOfWork(workInProgress);
        }
      }
      function workLoopConcurrent() {
        while (workInProgress !== null && !shouldYield()) {
          workInProgress = performUnitOfWork(workInProgress);
        }
      }
      function performUnitOfWork(unitOfWork) {
        var current$$1 = unitOfWork.alternate;
        startWorkTimer(unitOfWork);
        setCurrentFiber(unitOfWork);
        var next;
        if (enableProfilerTimer && (unitOfWork.mode & ProfileMode) !== NoMode) {
          startProfilerTimer(unitOfWork);
          next = beginWork$$1(current$$1, unitOfWork, renderExpirationTime);
          stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
        } else {
          next = beginWork$$1(current$$1, unitOfWork, renderExpirationTime);
        }
        resetCurrentFiber();
        unitOfWork.memoizedProps = unitOfWork.pendingProps;
        if (next === null) {
          next = completeUnitOfWork(unitOfWork);
        }
        ReactCurrentOwner$2.current = null;
        return next;
      }
      function completeUnitOfWork(unitOfWork) {
        workInProgress = unitOfWork;
        do {
          var current$$1 = workInProgress.alternate;
          var returnFiber = workInProgress.return;
          if ((workInProgress.effectTag & Incomplete) === NoEffect) {
            setCurrentFiber(workInProgress);
            var next = void 0;
            if (!enableProfilerTimer || (workInProgress.mode & ProfileMode) === NoMode) {
              next = completeWork(current$$1, workInProgress, renderExpirationTime);
            } else {
              startProfilerTimer(workInProgress);
              next = completeWork(current$$1, workInProgress, renderExpirationTime);
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, false);
            }
            stopWorkTimer(workInProgress);
            resetCurrentFiber();
            resetChildExpirationTime(workInProgress);
            if (next !== null) {
              return next;
            }
            if (returnFiber !== null && (returnFiber.effectTag & Incomplete) === NoEffect) {
              if (returnFiber.firstEffect === null) {
                returnFiber.firstEffect = workInProgress.firstEffect;
              }
              if (workInProgress.lastEffect !== null) {
                if (returnFiber.lastEffect !== null) {
                  returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
                }
                returnFiber.lastEffect = workInProgress.lastEffect;
              }
              var effectTag = workInProgress.effectTag;
              if (effectTag > PerformedWork) {
                if (returnFiber.lastEffect !== null) {
                  returnFiber.lastEffect.nextEffect = workInProgress;
                } else {
                  returnFiber.firstEffect = workInProgress;
                }
                returnFiber.lastEffect = workInProgress;
              }
            }
          } else {
            var _next = unwindWork(workInProgress, renderExpirationTime);
            if (enableProfilerTimer && (workInProgress.mode & ProfileMode) !== NoMode) {
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, false);
              var actualDuration = workInProgress.actualDuration;
              var child = workInProgress.child;
              while (child !== null) {
                actualDuration += child.actualDuration;
                child = child.sibling;
              }
              workInProgress.actualDuration = actualDuration;
            }
            if (_next !== null) {
              stopFailedWorkTimer(workInProgress);
              _next.effectTag &= HostEffectMask;
              return _next;
            }
            stopWorkTimer(workInProgress);
            if (returnFiber !== null) {
              returnFiber.firstEffect = returnFiber.lastEffect = null;
              returnFiber.effectTag |= Incomplete;
            }
          }
          var siblingFiber = workInProgress.sibling;
          if (siblingFiber !== null) {
            return siblingFiber;
          }
          workInProgress = returnFiber;
        } while (workInProgress !== null);
        if (workInProgressRootExitStatus === RootIncomplete) {
          workInProgressRootExitStatus = RootCompleted;
        }
        return null;
      }
      function getRemainingExpirationTime(fiber) {
        var updateExpirationTime = fiber.expirationTime;
        var childExpirationTime = fiber.childExpirationTime;
        return updateExpirationTime > childExpirationTime ? updateExpirationTime : childExpirationTime;
      }
      function resetChildExpirationTime(completedWork) {
        if (renderExpirationTime !== Never && completedWork.childExpirationTime === Never) {
          return;
        }
        var newChildExpirationTime = NoWork;
        if (enableProfilerTimer && (completedWork.mode & ProfileMode) !== NoMode) {
          var actualDuration = completedWork.actualDuration;
          var treeBaseDuration = completedWork.selfBaseDuration;
          var shouldBubbleActualDurations = completedWork.alternate === null || completedWork.child !== completedWork.alternate.child;
          var child = completedWork.child;
          while (child !== null) {
            var childUpdateExpirationTime = child.expirationTime;
            var childChildExpirationTime = child.childExpirationTime;
            if (childUpdateExpirationTime > newChildExpirationTime) {
              newChildExpirationTime = childUpdateExpirationTime;
            }
            if (childChildExpirationTime > newChildExpirationTime) {
              newChildExpirationTime = childChildExpirationTime;
            }
            if (shouldBubbleActualDurations) {
              actualDuration += child.actualDuration;
            }
            treeBaseDuration += child.treeBaseDuration;
            child = child.sibling;
          }
          completedWork.actualDuration = actualDuration;
          completedWork.treeBaseDuration = treeBaseDuration;
        } else {
          var _child = completedWork.child;
          while (_child !== null) {
            var _childUpdateExpirationTime = _child.expirationTime;
            var _childChildExpirationTime = _child.childExpirationTime;
            if (_childUpdateExpirationTime > newChildExpirationTime) {
              newChildExpirationTime = _childUpdateExpirationTime;
            }
            if (_childChildExpirationTime > newChildExpirationTime) {
              newChildExpirationTime = _childChildExpirationTime;
            }
            _child = _child.sibling;
          }
        }
        completedWork.childExpirationTime = newChildExpirationTime;
      }
      function commitRoot(root2) {
        var renderPriorityLevel = getCurrentPriorityLevel();
        runWithPriority$2(ImmediatePriority, commitRootImpl.bind(null, root2, renderPriorityLevel));
        return null;
      }
      function commitRootImpl(root2, renderPriorityLevel) {
        flushPassiveEffects();
        flushRenderPhaseStrictModeWarningsInDEV();
        (function() {
          if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
              throw ReactError(Error("Should not already be working."));
            }
          }
        })();
        var finishedWork = root2.finishedWork;
        var expirationTime = root2.finishedExpirationTime;
        if (finishedWork === null) {
          return null;
        }
        root2.finishedWork = null;
        root2.finishedExpirationTime = NoWork;
        (function() {
          if (!(finishedWork !== root2.current)) {
            {
              throw ReactError(Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."));
            }
          }
        })();
        root2.callbackNode = null;
        root2.callbackExpirationTime = NoWork;
        root2.callbackPriority = NoPriority;
        root2.nextKnownPendingLevel = NoWork;
        startCommitTimer();
        var remainingExpirationTimeBeforeCommit = getRemainingExpirationTime(finishedWork);
        markRootFinishedAtTime(root2, expirationTime, remainingExpirationTimeBeforeCommit);
        if (root2 === workInProgressRoot) {
          workInProgressRoot = null;
          workInProgress = null;
          renderExpirationTime = NoWork;
        } else {
        }
        var firstEffect;
        if (finishedWork.effectTag > PerformedWork) {
          if (finishedWork.lastEffect !== null) {
            finishedWork.lastEffect.nextEffect = finishedWork;
            firstEffect = finishedWork.firstEffect;
          } else {
            firstEffect = finishedWork;
          }
        } else {
          firstEffect = finishedWork.firstEffect;
        }
        if (firstEffect !== null) {
          var prevExecutionContext = executionContext;
          executionContext |= CommitContext;
          var prevInteractions = pushInteractions(root2);
          ReactCurrentOwner$2.current = null;
          startCommitSnapshotEffectsTimer();
          prepareForCommit(root2.containerInfo);
          nextEffect = firstEffect;
          do {
            {
              invokeGuardedCallback(null, commitBeforeMutationEffects, null);
              if (hasCaughtError()) {
                (function() {
                  if (!(nextEffect !== null)) {
                    {
                      throw ReactError(Error("Should be working on an effect."));
                    }
                  }
                })();
                var error = clearCaughtError();
                captureCommitPhaseError(nextEffect, error);
                nextEffect = nextEffect.nextEffect;
              }
            }
          } while (nextEffect !== null);
          stopCommitSnapshotEffectsTimer();
          if (enableProfilerTimer) {
            recordCommitTime();
          }
          startCommitHostEffectsTimer();
          nextEffect = firstEffect;
          do {
            {
              invokeGuardedCallback(null, commitMutationEffects, null, root2, renderPriorityLevel);
              if (hasCaughtError()) {
                (function() {
                  if (!(nextEffect !== null)) {
                    {
                      throw ReactError(Error("Should be working on an effect."));
                    }
                  }
                })();
                var _error = clearCaughtError();
                captureCommitPhaseError(nextEffect, _error);
                nextEffect = nextEffect.nextEffect;
              }
            }
          } while (nextEffect !== null);
          stopCommitHostEffectsTimer();
          resetAfterCommit(root2.containerInfo);
          root2.current = finishedWork;
          startCommitLifeCyclesTimer();
          nextEffect = firstEffect;
          do {
            {
              invokeGuardedCallback(null, commitLayoutEffects, null, root2, expirationTime);
              if (hasCaughtError()) {
                (function() {
                  if (!(nextEffect !== null)) {
                    {
                      throw ReactError(Error("Should be working on an effect."));
                    }
                  }
                })();
                var _error2 = clearCaughtError();
                captureCommitPhaseError(nextEffect, _error2);
                nextEffect = nextEffect.nextEffect;
              }
            }
          } while (nextEffect !== null);
          stopCommitLifeCyclesTimer();
          nextEffect = null;
          requestPaint();
          if (enableSchedulerTracing) {
            popInteractions(prevInteractions);
          }
          executionContext = prevExecutionContext;
        } else {
          root2.current = finishedWork;
          startCommitSnapshotEffectsTimer();
          stopCommitSnapshotEffectsTimer();
          if (enableProfilerTimer) {
            recordCommitTime();
          }
          startCommitHostEffectsTimer();
          stopCommitHostEffectsTimer();
          startCommitLifeCyclesTimer();
          stopCommitLifeCyclesTimer();
        }
        stopCommitTimer();
        var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
        if (rootDoesHavePassiveEffects) {
          rootDoesHavePassiveEffects = false;
          rootWithPendingPassiveEffects = root2;
          pendingPassiveEffectsExpirationTime = expirationTime;
          pendingPassiveEffectsRenderPriority = renderPriorityLevel;
        } else {
          nextEffect = firstEffect;
          while (nextEffect !== null) {
            var nextNextEffect = nextEffect.nextEffect;
            nextEffect.nextEffect = null;
            nextEffect = nextNextEffect;
          }
        }
        var remainingExpirationTime2 = root2.firstPendingTime;
        if (remainingExpirationTime2 !== NoWork) {
          if (enableSchedulerTracing) {
            if (spawnedWorkDuringRender !== null) {
              var expirationTimes = spawnedWorkDuringRender;
              spawnedWorkDuringRender = null;
              for (var i2 = 0; i2 < expirationTimes.length; i2++) {
                scheduleInteractions(root2, expirationTimes[i2], root2.memoizedInteractions);
              }
            }
            schedulePendingInteractions(root2, remainingExpirationTime2);
          }
        } else {
          legacyErrorBoundariesThatAlreadyFailed = null;
        }
        if (enableSchedulerTracing) {
          if (!rootDidHavePassiveEffects) {
            finishPendingInteractions(root2, expirationTime);
          }
        }
        if (remainingExpirationTime2 === Sync) {
          if (root2 === rootWithNestedUpdates) {
            nestedUpdateCount++;
          } else {
            nestedUpdateCount = 0;
            rootWithNestedUpdates = root2;
          }
        } else {
          nestedUpdateCount = 0;
        }
        onCommitRoot(finishedWork.stateNode, expirationTime);
        ensureRootIsScheduled(root2);
        if (hasUncaughtError) {
          hasUncaughtError = false;
          var _error3 = firstUncaughtError;
          firstUncaughtError = null;
          throw _error3;
        }
        if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
          return null;
        }
        flushSyncCallbackQueue();
        return null;
      }
      function commitBeforeMutationEffects() {
        while (nextEffect !== null) {
          var effectTag = nextEffect.effectTag;
          if ((effectTag & Snapshot) !== NoEffect) {
            setCurrentFiber(nextEffect);
            recordEffect();
            var current$$1 = nextEffect.alternate;
            commitBeforeMutationLifeCycles(current$$1, nextEffect);
            resetCurrentFiber();
          }
          if ((effectTag & Passive) !== NoEffect) {
            if (!rootDoesHavePassiveEffects) {
              rootDoesHavePassiveEffects = true;
              scheduleCallback(NormalPriority, function() {
                flushPassiveEffects();
                return null;
              });
            }
          }
          nextEffect = nextEffect.nextEffect;
        }
      }
      function commitMutationEffects(root2, renderPriorityLevel) {
        while (nextEffect !== null) {
          setCurrentFiber(nextEffect);
          var effectTag = nextEffect.effectTag;
          if (effectTag & ContentReset) {
            commitResetTextContent(nextEffect);
          }
          if (effectTag & Ref) {
            var current$$1 = nextEffect.alternate;
            if (current$$1 !== null) {
              commitDetachRef(current$$1);
            }
          }
          var primaryEffectTag = effectTag & (Placement | Update | Deletion | Hydrating);
          switch (primaryEffectTag) {
            case Placement: {
              commitPlacement(nextEffect);
              nextEffect.effectTag &= ~Placement;
              break;
            }
            case PlacementAndUpdate: {
              commitPlacement(nextEffect);
              nextEffect.effectTag &= ~Placement;
              var _current = nextEffect.alternate;
              commitWork(_current, nextEffect);
              break;
            }
            case Hydrating: {
              nextEffect.effectTag &= ~Hydrating;
              break;
            }
            case HydratingAndUpdate: {
              nextEffect.effectTag &= ~Hydrating;
              var _current2 = nextEffect.alternate;
              commitWork(_current2, nextEffect);
              break;
            }
            case Update: {
              var _current3 = nextEffect.alternate;
              commitWork(_current3, nextEffect);
              break;
            }
            case Deletion: {
              commitDeletion(root2, nextEffect, renderPriorityLevel);
              break;
            }
          }
          recordEffect();
          resetCurrentFiber();
          nextEffect = nextEffect.nextEffect;
        }
      }
      function commitLayoutEffects(root2, committedExpirationTime) {
        while (nextEffect !== null) {
          setCurrentFiber(nextEffect);
          var effectTag = nextEffect.effectTag;
          if (effectTag & (Update | Callback)) {
            recordEffect();
            var current$$1 = nextEffect.alternate;
            commitLifeCycles(root2, current$$1, nextEffect, committedExpirationTime);
          }
          if (effectTag & Ref) {
            recordEffect();
            commitAttachRef(nextEffect);
          }
          resetCurrentFiber();
          nextEffect = nextEffect.nextEffect;
        }
      }
      function flushPassiveEffects() {
        if (pendingPassiveEffectsRenderPriority !== NoPriority) {
          var priorityLevel = pendingPassiveEffectsRenderPriority > NormalPriority ? NormalPriority : pendingPassiveEffectsRenderPriority;
          pendingPassiveEffectsRenderPriority = NoPriority;
          return runWithPriority$2(priorityLevel, flushPassiveEffectsImpl);
        }
      }
      function flushPassiveEffectsImpl() {
        if (rootWithPendingPassiveEffects === null) {
          return false;
        }
        var root2 = rootWithPendingPassiveEffects;
        var expirationTime = pendingPassiveEffectsExpirationTime;
        rootWithPendingPassiveEffects = null;
        pendingPassiveEffectsExpirationTime = NoWork;
        (function() {
          if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
              throw ReactError(Error("Cannot flush passive effects while already rendering."));
            }
          }
        })();
        var prevExecutionContext = executionContext;
        executionContext |= CommitContext;
        var prevInteractions = pushInteractions(root2);
        var effect = root2.current.firstEffect;
        while (effect !== null) {
          {
            setCurrentFiber(effect);
            invokeGuardedCallback(null, commitPassiveHookEffects, null, effect);
            if (hasCaughtError()) {
              (function() {
                if (!(effect !== null)) {
                  {
                    throw ReactError(Error("Should be working on an effect."));
                  }
                }
              })();
              var error = clearCaughtError();
              captureCommitPhaseError(effect, error);
            }
            resetCurrentFiber();
          }
          var nextNextEffect = effect.nextEffect;
          effect.nextEffect = null;
          effect = nextNextEffect;
        }
        if (enableSchedulerTracing) {
          popInteractions(prevInteractions);
          finishPendingInteractions(root2, expirationTime);
        }
        executionContext = prevExecutionContext;
        flushSyncCallbackQueue();
        nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
        return true;
      }
      function isAlreadyFailedLegacyErrorBoundary(instance) {
        return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
      }
      function markLegacyErrorBoundaryAsFailed(instance) {
        if (legacyErrorBoundariesThatAlreadyFailed === null) {
          legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
        } else {
          legacyErrorBoundariesThatAlreadyFailed.add(instance);
        }
      }
      function prepareToThrowUncaughtError(error) {
        if (!hasUncaughtError) {
          hasUncaughtError = true;
          firstUncaughtError = error;
        }
      }
      var onUncaughtError = prepareToThrowUncaughtError;
      function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
        var errorInfo = createCapturedValue(error, sourceFiber);
        var update = createRootErrorUpdate(rootFiber, errorInfo, Sync);
        enqueueUpdate(rootFiber, update);
        var root2 = markUpdateTimeFromFiberToRoot(rootFiber, Sync);
        if (root2 !== null) {
          ensureRootIsScheduled(root2);
          schedulePendingInteractions(root2, Sync);
        }
      }
      function captureCommitPhaseError(sourceFiber, error) {
        if (sourceFiber.tag === HostRoot) {
          captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
          return;
        }
        var fiber = sourceFiber.return;
        while (fiber !== null) {
          if (fiber.tag === HostRoot) {
            captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error);
            return;
          } else if (fiber.tag === ClassComponent) {
            var ctor = fiber.type;
            var instance = fiber.stateNode;
            if (typeof ctor.getDerivedStateFromError === "function" || typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
              var errorInfo = createCapturedValue(error, sourceFiber);
              var update = createClassErrorUpdate(fiber, errorInfo, Sync);
              enqueueUpdate(fiber, update);
              var root2 = markUpdateTimeFromFiberToRoot(fiber, Sync);
              if (root2 !== null) {
                ensureRootIsScheduled(root2);
                schedulePendingInteractions(root2, Sync);
              }
              return;
            }
          }
          fiber = fiber.return;
        }
      }
      function pingSuspendedRoot(root2, thenable, suspendedTime) {
        var pingCache = root2.pingCache;
        if (pingCache !== null) {
          pingCache.delete(thenable);
        }
        if (workInProgressRoot === root2 && renderExpirationTime === suspendedTime) {
          if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && workInProgressRootLatestProcessedExpirationTime === Sync && now() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) {
            prepareFreshStack(root2, renderExpirationTime);
          } else {
            workInProgressRootHasPendingPing = true;
          }
          return;
        }
        if (!isRootSuspendedAtTime(root2, suspendedTime)) {
          return;
        }
        var lastPingedTime = root2.lastPingedTime;
        if (lastPingedTime !== NoWork && lastPingedTime < suspendedTime) {
          return;
        }
        root2.lastPingedTime = suspendedTime;
        if (root2.finishedExpirationTime === suspendedTime) {
          root2.finishedExpirationTime = NoWork;
          root2.finishedWork = null;
        }
        ensureRootIsScheduled(root2);
        schedulePendingInteractions(root2, suspendedTime);
      }
      function retryTimedOutBoundary(boundaryFiber, retryTime) {
        if (retryTime === Never) {
          var suspenseConfig = null;
          var currentTime = requestCurrentTime();
          retryTime = computeExpirationForFiber(currentTime, boundaryFiber, suspenseConfig);
        }
        var root2 = markUpdateTimeFromFiberToRoot(boundaryFiber, retryTime);
        if (root2 !== null) {
          ensureRootIsScheduled(root2);
          schedulePendingInteractions(root2, retryTime);
        }
      }
      function retryDehydratedSuspenseBoundary(boundaryFiber) {
        var suspenseState = boundaryFiber.memoizedState;
        var retryTime = Never;
        if (suspenseState !== null) {
          retryTime = suspenseState.retryTime;
        }
        retryTimedOutBoundary(boundaryFiber, retryTime);
      }
      function resolveRetryThenable(boundaryFiber, thenable) {
        var retryTime = Never;
        var retryCache;
        if (enableSuspenseServerRenderer) {
          switch (boundaryFiber.tag) {
            case SuspenseComponent:
              retryCache = boundaryFiber.stateNode;
              var suspenseState = boundaryFiber.memoizedState;
              if (suspenseState !== null) {
                retryTime = suspenseState.retryTime;
              }
              break;
            case SuspenseListComponent:
              retryCache = boundaryFiber.stateNode;
              break;
            default:
              (function() {
                {
                  {
                    throw ReactError(Error("Pinged unknown suspense boundary type. This is probably a bug in React."));
                  }
                }
              })();
          }
        } else {
          retryCache = boundaryFiber.stateNode;
        }
        if (retryCache !== null) {
          retryCache.delete(thenable);
        }
        retryTimedOutBoundary(boundaryFiber, retryTime);
      }
      function jnd(timeElapsed) {
        return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3e3 ? 3e3 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
      }
      function computeMsUntilSuspenseLoadingDelay(mostRecentEventTime, committedExpirationTime, suspenseConfig) {
        var busyMinDurationMs = suspenseConfig.busyMinDurationMs | 0;
        if (busyMinDurationMs <= 0) {
          return 0;
        }
        var busyDelayMs = suspenseConfig.busyDelayMs | 0;
        var currentTimeMs = now();
        var eventTimeMs = inferTimeFromExpirationTimeWithSuspenseConfig(mostRecentEventTime, suspenseConfig);
        var timeElapsed = currentTimeMs - eventTimeMs;
        if (timeElapsed <= busyDelayMs) {
          return 0;
        }
        var msUntilTimeout = busyDelayMs + busyMinDurationMs - timeElapsed;
        return msUntilTimeout;
      }
      function checkForNestedUpdates() {
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
          nestedUpdateCount = 0;
          rootWithNestedUpdates = null;
          (function() {
            {
              {
                throw ReactError(Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."));
              }
            }
          })();
        }
        {
          if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
            nestedPassiveUpdateCount = 0;
            warning$1(false, "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.");
          }
        }
      }
      function flushRenderPhaseStrictModeWarningsInDEV() {
        {
          ReactStrictModeWarnings.flushLegacyContextWarning();
          if (warnAboutDeprecatedLifecycles) {
            ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
          }
        }
      }
      function stopFinishedWorkLoopTimer() {
        var didCompleteRoot = true;
        stopWorkLoopTimer(interruptedBy, didCompleteRoot);
        interruptedBy = null;
      }
      function stopInterruptedWorkLoopTimer() {
        var didCompleteRoot = false;
        stopWorkLoopTimer(interruptedBy, didCompleteRoot);
        interruptedBy = null;
      }
      function checkForInterruption(fiberThatReceivedUpdate, updateExpirationTime) {
        if (enableUserTimingAPI && workInProgressRoot !== null && updateExpirationTime > renderExpirationTime) {
          interruptedBy = fiberThatReceivedUpdate;
        }
      }
      var didWarnStateUpdateForUnmountedComponent = null;
      function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
        {
          var tag = fiber.tag;
          if (tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent) {
            return;
          }
          var componentName = getComponentName(fiber.type) || "ReactComponent";
          if (didWarnStateUpdateForUnmountedComponent !== null) {
            if (didWarnStateUpdateForUnmountedComponent.has(componentName)) {
              return;
            }
            didWarnStateUpdateForUnmountedComponent.add(componentName);
          } else {
            didWarnStateUpdateForUnmountedComponent = new Set([componentName]);
          }
          warningWithoutStack$1(false, "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s", tag === ClassComponent ? "the componentWillUnmount method" : "a useEffect cleanup function", getStackByFiberInDevAndProd(fiber));
        }
      }
      var beginWork$$1;
      if (replayFailedUnitOfWorkWithInvokeGuardedCallback) {
        var dummyFiber = null;
        beginWork$$1 = function(current$$1, unitOfWork, expirationTime) {
          var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
          try {
            return beginWork$1(current$$1, unitOfWork, expirationTime);
          } catch (originalError) {
            if (originalError !== null && typeof originalError === "object" && typeof originalError.then === "function") {
              throw originalError;
            }
            resetContextDependencies();
            resetHooks();
            unwindInterruptedWork(unitOfWork);
            assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);
            if (enableProfilerTimer && unitOfWork.mode & ProfileMode) {
              startProfilerTimer(unitOfWork);
            }
            invokeGuardedCallback(null, beginWork$1, null, current$$1, unitOfWork, expirationTime);
            if (hasCaughtError()) {
              var replayError = clearCaughtError();
              throw replayError;
            } else {
              throw originalError;
            }
          }
        };
      } else {
        beginWork$$1 = beginWork$1;
      }
      var didWarnAboutUpdateInRender = false;
      var didWarnAboutUpdateInGetChildContext = false;
      function warnAboutInvalidUpdatesOnClassComponentsInDEV(fiber) {
        {
          if (fiber.tag === ClassComponent) {
            switch (phase) {
              case "getChildContext":
                if (didWarnAboutUpdateInGetChildContext) {
                  return;
                }
                warningWithoutStack$1(false, "setState(...): Cannot call setState() inside getChildContext()");
                didWarnAboutUpdateInGetChildContext = true;
                break;
              case "render":
                if (didWarnAboutUpdateInRender) {
                  return;
                }
                warningWithoutStack$1(false, "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.");
                didWarnAboutUpdateInRender = true;
                break;
            }
          }
        }
      }
      var IsThisRendererActing = {
        current: false
      };
      function warnIfNotScopedWithMatchingAct(fiber) {
        {
          if (warnsIfNotActing === true && IsSomeRendererActing.current === true && IsThisRendererActing.current !== true) {
            warningWithoutStack$1(false, "It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from 'react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);%s", getStackByFiberInDevAndProd(fiber));
          }
        }
      }
      function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
        {
          if (warnsIfNotActing === true && (fiber.mode & StrictMode) !== NoMode && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
            warningWithoutStack$1(false, "An update to %s ran an effect, but was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s", getComponentName(fiber.type), getStackByFiberInDevAndProd(fiber));
          }
        }
      }
      function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
        {
          if (warnsIfNotActing === true && executionContext === NoContext && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
            warningWithoutStack$1(false, "An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s", getComponentName(fiber.type), getStackByFiberInDevAndProd(fiber));
          }
        }
      }
      var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV;
      var didWarnAboutUnmockedScheduler = false;
      function warnIfUnmockedScheduler(fiber) {
        {
          if (didWarnAboutUnmockedScheduler === false && Scheduler.unstable_flushAllWithoutAsserting === void 0) {
            if (fiber.mode & BatchedMode || fiber.mode & ConcurrentMode) {
              didWarnAboutUnmockedScheduler = true;
              warningWithoutStack$1(false, `In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://fb.me/react-mock-scheduler`);
            } else if (warnAboutUnmockedScheduler === true) {
              didWarnAboutUnmockedScheduler = true;
              warningWithoutStack$1(false, `Starting from React v17, the "scheduler" module will need to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://fb.me/react-mock-scheduler`);
            }
          }
        }
      }
      var componentsThatTriggeredHighPriSuspend = null;
      function checkForWrongSuspensePriorityInDEV(sourceFiber) {
        {
          var currentPriorityLevel = getCurrentPriorityLevel();
          if ((sourceFiber.mode & ConcurrentMode) !== NoEffect && (currentPriorityLevel === UserBlockingPriority$2 || currentPriorityLevel === ImmediatePriority)) {
            var workInProgressNode = sourceFiber;
            while (workInProgressNode !== null) {
              var current$$1 = workInProgressNode.alternate;
              if (current$$1 !== null) {
                switch (workInProgressNode.tag) {
                  case ClassComponent:
                    var updateQueue = current$$1.updateQueue;
                    if (updateQueue !== null) {
                      var update = updateQueue.firstUpdate;
                      while (update !== null) {
                        var priorityLevel = update.priority;
                        if (priorityLevel === UserBlockingPriority$2 || priorityLevel === ImmediatePriority) {
                          if (componentsThatTriggeredHighPriSuspend === null) {
                            componentsThatTriggeredHighPriSuspend = new Set([getComponentName(workInProgressNode.type)]);
                          } else {
                            componentsThatTriggeredHighPriSuspend.add(getComponentName(workInProgressNode.type));
                          }
                          break;
                        }
                        update = update.next;
                      }
                    }
                    break;
                  case FunctionComponent:
                  case ForwardRef:
                  case SimpleMemoComponent:
                    if (workInProgressNode.memoizedState !== null && workInProgressNode.memoizedState.baseUpdate !== null) {
                      var _update = workInProgressNode.memoizedState.baseUpdate;
                      while (_update !== null) {
                        var priority = _update.priority;
                        if (priority === UserBlockingPriority$2 || priority === ImmediatePriority) {
                          if (componentsThatTriggeredHighPriSuspend === null) {
                            componentsThatTriggeredHighPriSuspend = new Set([getComponentName(workInProgressNode.type)]);
                          } else {
                            componentsThatTriggeredHighPriSuspend.add(getComponentName(workInProgressNode.type));
                          }
                          break;
                        }
                        if (_update.next === workInProgressNode.memoizedState.baseUpdate) {
                          break;
                        }
                        _update = _update.next;
                      }
                    }
                    break;
                  default:
                    break;
                }
              }
              workInProgressNode = workInProgressNode.return;
            }
          }
        }
      }
      function flushSuspensePriorityWarningInDEV() {
        {
          if (componentsThatTriggeredHighPriSuspend !== null) {
            var componentNames = [];
            componentsThatTriggeredHighPriSuspend.forEach(function(name) {
              return componentNames.push(name);
            });
            componentsThatTriggeredHighPriSuspend = null;
            if (componentNames.length > 0) {
              warningWithoutStack$1(false, "%s triggered a user-blocking update that suspended.\n\nThe fix is to split the update into multiple parts: a user-blocking update to provide immediate feedback, and another update that triggers the bulk of the changes.\n\nRefer to the documentation for useSuspenseTransition to learn how to implement this pattern.", componentNames.sort().join(", "));
            }
          }
        }
      }
      function computeThreadID(root2, expirationTime) {
        return expirationTime * 1e3 + root2.interactionThreadID;
      }
      function markSpawnedWork(expirationTime) {
        if (!enableSchedulerTracing) {
          return;
        }
        if (spawnedWorkDuringRender === null) {
          spawnedWorkDuringRender = [expirationTime];
        } else {
          spawnedWorkDuringRender.push(expirationTime);
        }
      }
      function scheduleInteractions(root2, expirationTime, interactions) {
        if (!enableSchedulerTracing) {
          return;
        }
        if (interactions.size > 0) {
          var pendingInteractionMap = root2.pendingInteractionMap;
          var pendingInteractions = pendingInteractionMap.get(expirationTime);
          if (pendingInteractions != null) {
            interactions.forEach(function(interaction) {
              if (!pendingInteractions.has(interaction)) {
                interaction.__count++;
              }
              pendingInteractions.add(interaction);
            });
          } else {
            pendingInteractionMap.set(expirationTime, new Set(interactions));
            interactions.forEach(function(interaction) {
              interaction.__count++;
            });
          }
          var subscriber = tracing.__subscriberRef.current;
          if (subscriber !== null) {
            var threadID = computeThreadID(root2, expirationTime);
            subscriber.onWorkScheduled(interactions, threadID);
          }
        }
      }
      function schedulePendingInteractions(root2, expirationTime) {
        if (!enableSchedulerTracing) {
          return;
        }
        scheduleInteractions(root2, expirationTime, tracing.__interactionsRef.current);
      }
      function startWorkOnPendingInteractions(root2, expirationTime) {
        if (!enableSchedulerTracing) {
          return;
        }
        var interactions = new Set();
        root2.pendingInteractionMap.forEach(function(scheduledInteractions, scheduledExpirationTime) {
          if (scheduledExpirationTime >= expirationTime) {
            scheduledInteractions.forEach(function(interaction) {
              return interactions.add(interaction);
            });
          }
        });
        root2.memoizedInteractions = interactions;
        if (interactions.size > 0) {
          var subscriber = tracing.__subscriberRef.current;
          if (subscriber !== null) {
            var threadID = computeThreadID(root2, expirationTime);
            try {
              subscriber.onWorkStarted(interactions, threadID);
            } catch (error) {
              scheduleCallback(ImmediatePriority, function() {
                throw error;
              });
            }
          }
        }
      }
      function finishPendingInteractions(root2, committedExpirationTime) {
        if (!enableSchedulerTracing) {
          return;
        }
        var earliestRemainingTimeAfterCommit = root2.firstPendingTime;
        var subscriber;
        try {
          subscriber = tracing.__subscriberRef.current;
          if (subscriber !== null && root2.memoizedInteractions.size > 0) {
            var threadID = computeThreadID(root2, committedExpirationTime);
            subscriber.onWorkStopped(root2.memoizedInteractions, threadID);
          }
        } catch (error) {
          scheduleCallback(ImmediatePriority, function() {
            throw error;
          });
        } finally {
          var pendingInteractionMap = root2.pendingInteractionMap;
          pendingInteractionMap.forEach(function(scheduledInteractions, scheduledExpirationTime) {
            if (scheduledExpirationTime > earliestRemainingTimeAfterCommit) {
              pendingInteractionMap.delete(scheduledExpirationTime);
              scheduledInteractions.forEach(function(interaction) {
                interaction.__count--;
                if (subscriber !== null && interaction.__count === 0) {
                  try {
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
                  } catch (error) {
                    scheduleCallback(ImmediatePriority, function() {
                      throw error;
                    });
                  }
                }
              });
            }
          });
        }
      }
      var onCommitFiberRoot = null;
      var onCommitFiberUnmount = null;
      var hasLoggedError = false;
      var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
      function injectInternals(internals) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
          return false;
        }
        var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook.isDisabled) {
          return true;
        }
        if (!hook.supportsFiber) {
          {
            warningWithoutStack$1(false, "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools");
          }
          return true;
        }
        try {
          var rendererID = hook.inject(internals);
          onCommitFiberRoot = function(root2, expirationTime) {
            try {
              var didError = (root2.current.effectTag & DidCapture) === DidCapture;
              if (enableProfilerTimer) {
                var currentTime = requestCurrentTime();
                var priorityLevel = inferPriorityFromExpirationTime(currentTime, expirationTime);
                hook.onCommitFiberRoot(rendererID, root2, priorityLevel, didError);
              } else {
                hook.onCommitFiberRoot(rendererID, root2, void 0, didError);
              }
            } catch (err) {
              if (!hasLoggedError) {
                hasLoggedError = true;
                warningWithoutStack$1(false, "React DevTools encountered an error: %s", err);
              }
            }
          };
          onCommitFiberUnmount = function(fiber) {
            try {
              hook.onCommitFiberUnmount(rendererID, fiber);
            } catch (err) {
              if (!hasLoggedError) {
                hasLoggedError = true;
                warningWithoutStack$1(false, "React DevTools encountered an error: %s", err);
              }
            }
          };
        } catch (err) {
          {
            warningWithoutStack$1(false, "React DevTools encountered an error: %s.", err);
          }
        }
        return true;
      }
      function onCommitRoot(root2, expirationTime) {
        if (typeof onCommitFiberRoot === "function") {
          onCommitFiberRoot(root2, expirationTime);
        }
      }
      function onCommitUnmount(fiber) {
        if (typeof onCommitFiberUnmount === "function") {
          onCommitFiberUnmount(fiber);
        }
      }
      var hasBadMapPolyfill;
      {
        hasBadMapPolyfill = false;
        try {
          var nonExtensibleObject = Object.preventExtensions({});
          var testMap = new Map([[nonExtensibleObject, null]]);
          var testSet = new Set([nonExtensibleObject]);
          testMap.set(0, 0);
          testSet.add(0);
        } catch (e) {
          hasBadMapPolyfill = true;
        }
      }
      var debugCounter = 1;
      function FiberNode(tag, pendingProps, key, mode) {
        this.tag = tag;
        this.key = key;
        this.elementType = null;
        this.type = null;
        this.stateNode = null;
        this.return = null;
        this.child = null;
        this.sibling = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = pendingProps;
        this.memoizedProps = null;
        this.updateQueue = null;
        this.memoizedState = null;
        this.dependencies = null;
        this.mode = mode;
        this.effectTag = NoEffect;
        this.nextEffect = null;
        this.firstEffect = null;
        this.lastEffect = null;
        this.expirationTime = NoWork;
        this.childExpirationTime = NoWork;
        this.alternate = null;
        if (enableProfilerTimer) {
          this.actualDuration = Number.NaN;
          this.actualStartTime = Number.NaN;
          this.selfBaseDuration = Number.NaN;
          this.treeBaseDuration = Number.NaN;
          this.actualDuration = 0;
          this.actualStartTime = -1;
          this.selfBaseDuration = 0;
          this.treeBaseDuration = 0;
        }
        if (enableUserTimingAPI) {
          this._debugID = debugCounter++;
          this._debugIsCurrentlyTiming = false;
        }
        {
          this._debugSource = null;
          this._debugOwner = null;
          this._debugNeedsRemount = false;
          this._debugHookTypes = null;
          if (!hasBadMapPolyfill && typeof Object.preventExtensions === "function") {
            Object.preventExtensions(this);
          }
        }
      }
      var createFiber = function(tag, pendingProps, key, mode) {
        return new FiberNode(tag, pendingProps, key, mode);
      };
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function isSimpleFunctionComponent(type) {
        return typeof type === "function" && !shouldConstruct(type) && type.defaultProps === void 0;
      }
      function resolveLazyComponentTag(Component) {
        if (typeof Component === "function") {
          return shouldConstruct(Component) ? ClassComponent : FunctionComponent;
        } else if (Component !== void 0 && Component !== null) {
          var $$typeof = Component.$$typeof;
          if ($$typeof === REACT_FORWARD_REF_TYPE) {
            return ForwardRef;
          }
          if ($$typeof === REACT_MEMO_TYPE) {
            return MemoComponent;
          }
        }
        return IndeterminateComponent;
      }
      function createWorkInProgress(current2, pendingProps, expirationTime) {
        var workInProgress2 = current2.alternate;
        if (workInProgress2 === null) {
          workInProgress2 = createFiber(current2.tag, pendingProps, current2.key, current2.mode);
          workInProgress2.elementType = current2.elementType;
          workInProgress2.type = current2.type;
          workInProgress2.stateNode = current2.stateNode;
          {
            workInProgress2._debugID = current2._debugID;
            workInProgress2._debugSource = current2._debugSource;
            workInProgress2._debugOwner = current2._debugOwner;
            workInProgress2._debugHookTypes = current2._debugHookTypes;
          }
          workInProgress2.alternate = current2;
          current2.alternate = workInProgress2;
        } else {
          workInProgress2.pendingProps = pendingProps;
          workInProgress2.effectTag = NoEffect;
          workInProgress2.nextEffect = null;
          workInProgress2.firstEffect = null;
          workInProgress2.lastEffect = null;
          if (enableProfilerTimer) {
            workInProgress2.actualDuration = 0;
            workInProgress2.actualStartTime = -1;
          }
        }
        workInProgress2.childExpirationTime = current2.childExpirationTime;
        workInProgress2.expirationTime = current2.expirationTime;
        workInProgress2.child = current2.child;
        workInProgress2.memoizedProps = current2.memoizedProps;
        workInProgress2.memoizedState = current2.memoizedState;
        workInProgress2.updateQueue = current2.updateQueue;
        var currentDependencies = current2.dependencies;
        workInProgress2.dependencies = currentDependencies === null ? null : {
          expirationTime: currentDependencies.expirationTime,
          firstContext: currentDependencies.firstContext,
          responders: currentDependencies.responders
        };
        workInProgress2.sibling = current2.sibling;
        workInProgress2.index = current2.index;
        workInProgress2.ref = current2.ref;
        if (enableProfilerTimer) {
          workInProgress2.selfBaseDuration = current2.selfBaseDuration;
          workInProgress2.treeBaseDuration = current2.treeBaseDuration;
        }
        {
          workInProgress2._debugNeedsRemount = current2._debugNeedsRemount;
          switch (workInProgress2.tag) {
            case IndeterminateComponent:
            case FunctionComponent:
            case SimpleMemoComponent:
              workInProgress2.type = resolveFunctionForHotReloading(current2.type);
              break;
            case ClassComponent:
              workInProgress2.type = resolveClassForHotReloading(current2.type);
              break;
            case ForwardRef:
              workInProgress2.type = resolveForwardRefForHotReloading(current2.type);
              break;
            default:
              break;
          }
        }
        return workInProgress2;
      }
      function resetWorkInProgress(workInProgress2, renderExpirationTime2) {
        workInProgress2.effectTag &= Placement;
        workInProgress2.nextEffect = null;
        workInProgress2.firstEffect = null;
        workInProgress2.lastEffect = null;
        var current2 = workInProgress2.alternate;
        if (current2 === null) {
          workInProgress2.childExpirationTime = NoWork;
          workInProgress2.expirationTime = renderExpirationTime2;
          workInProgress2.child = null;
          workInProgress2.memoizedProps = null;
          workInProgress2.memoizedState = null;
          workInProgress2.updateQueue = null;
          workInProgress2.dependencies = null;
          if (enableProfilerTimer) {
            workInProgress2.selfBaseDuration = 0;
            workInProgress2.treeBaseDuration = 0;
          }
        } else {
          workInProgress2.childExpirationTime = current2.childExpirationTime;
          workInProgress2.expirationTime = current2.expirationTime;
          workInProgress2.child = current2.child;
          workInProgress2.memoizedProps = current2.memoizedProps;
          workInProgress2.memoizedState = current2.memoizedState;
          workInProgress2.updateQueue = current2.updateQueue;
          var currentDependencies = current2.dependencies;
          workInProgress2.dependencies = currentDependencies === null ? null : {
            expirationTime: currentDependencies.expirationTime,
            firstContext: currentDependencies.firstContext,
            responders: currentDependencies.responders
          };
          if (enableProfilerTimer) {
            workInProgress2.selfBaseDuration = current2.selfBaseDuration;
            workInProgress2.treeBaseDuration = current2.treeBaseDuration;
          }
        }
        return workInProgress2;
      }
      function createHostRootFiber(tag) {
        var mode;
        if (tag === ConcurrentRoot) {
          mode = ConcurrentMode | BatchedMode | StrictMode;
        } else if (tag === BatchedRoot) {
          mode = BatchedMode | StrictMode;
        } else {
          mode = NoMode;
        }
        if (enableProfilerTimer && isDevToolsPresent) {
          mode |= ProfileMode;
        }
        return createFiber(HostRoot, null, null, mode);
      }
      function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, expirationTime) {
        var fiber;
        var fiberTag = IndeterminateComponent;
        var resolvedType = type;
        if (typeof type === "function") {
          if (shouldConstruct(type)) {
            fiberTag = ClassComponent;
            {
              resolvedType = resolveClassForHotReloading(resolvedType);
            }
          } else {
            {
              resolvedType = resolveFunctionForHotReloading(resolvedType);
            }
          }
        } else if (typeof type === "string") {
          fiberTag = HostComponent;
        } else {
          getTag:
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);
              case REACT_CONCURRENT_MODE_TYPE:
                fiberTag = Mode;
                mode |= ConcurrentMode | BatchedMode | StrictMode;
                break;
              case REACT_STRICT_MODE_TYPE:
                fiberTag = Mode;
                mode |= StrictMode;
                break;
              case REACT_PROFILER_TYPE:
                return createFiberFromProfiler(pendingProps, mode, expirationTime, key);
              case REACT_SUSPENSE_TYPE:
                return createFiberFromSuspense(pendingProps, mode, expirationTime, key);
              case REACT_SUSPENSE_LIST_TYPE:
                return createFiberFromSuspenseList(pendingProps, mode, expirationTime, key);
              default: {
                if (typeof type === "object" && type !== null) {
                  switch (type.$$typeof) {
                    case REACT_PROVIDER_TYPE:
                      fiberTag = ContextProvider;
                      break getTag;
                    case REACT_CONTEXT_TYPE:
                      fiberTag = ContextConsumer;
                      break getTag;
                    case REACT_FORWARD_REF_TYPE:
                      fiberTag = ForwardRef;
                      {
                        resolvedType = resolveForwardRefForHotReloading(resolvedType);
                      }
                      break getTag;
                    case REACT_MEMO_TYPE:
                      fiberTag = MemoComponent;
                      break getTag;
                    case REACT_LAZY_TYPE:
                      fiberTag = LazyComponent;
                      resolvedType = null;
                      break getTag;
                    case REACT_FUNDAMENTAL_TYPE:
                      if (enableFundamentalAPI) {
                        return createFiberFromFundamental(type, pendingProps, mode, expirationTime, key);
                      }
                      break;
                    case REACT_SCOPE_TYPE:
                      if (enableScopeAPI) {
                        return createFiberFromScope(type, pendingProps, mode, expirationTime, key);
                      }
                  }
                }
                var info = "";
                {
                  if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                    info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                  }
                  var ownerName = owner ? getComponentName(owner.type) : null;
                  if (ownerName) {
                    info += "\n\nCheck the render method of `" + ownerName + "`.";
                  }
                }
                (function() {
                  {
                    {
                      throw ReactError(Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (type == null ? type : typeof type) + "." + info));
                    }
                  }
                })();
              }
            }
        }
        fiber = createFiber(fiberTag, pendingProps, key, mode);
        fiber.elementType = type;
        fiber.type = resolvedType;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromElement(element, mode, expirationTime) {
        var owner = null;
        {
          owner = element._owner;
        }
        var type = element.type;
        var key = element.key;
        var pendingProps = element.props;
        var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, expirationTime);
        {
          fiber._debugSource = element._source;
          fiber._debugOwner = element._owner;
        }
        return fiber;
      }
      function createFiberFromFragment(elements, mode, expirationTime, key) {
        var fiber = createFiber(Fragment, elements, key, mode);
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromFundamental(fundamentalComponent, pendingProps, mode, expirationTime, key) {
        var fiber = createFiber(FundamentalComponent, pendingProps, key, mode);
        fiber.elementType = fundamentalComponent;
        fiber.type = fundamentalComponent;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromScope(scope, pendingProps, mode, expirationTime, key) {
        var fiber = createFiber(ScopeComponent, pendingProps, key, mode);
        fiber.type = scope;
        fiber.elementType = scope;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
        {
          if (typeof pendingProps.id !== "string" || typeof pendingProps.onRender !== "function") {
            warningWithoutStack$1(false, 'Profiler must specify an "id" string and "onRender" function as props');
          }
        }
        var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
        fiber.elementType = REACT_PROFILER_TYPE;
        fiber.type = REACT_PROFILER_TYPE;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromSuspense(pendingProps, mode, expirationTime, key) {
        var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
        fiber.type = REACT_SUSPENSE_TYPE;
        fiber.elementType = REACT_SUSPENSE_TYPE;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromSuspenseList(pendingProps, mode, expirationTime, key) {
        var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
        {
          fiber.type = REACT_SUSPENSE_LIST_TYPE;
        }
        fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromText(content, mode, expirationTime) {
        var fiber = createFiber(HostText, content, null, mode);
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromHostInstanceForDeletion() {
        var fiber = createFiber(HostComponent, null, null, NoMode);
        fiber.elementType = "DELETED";
        fiber.type = "DELETED";
        return fiber;
      }
      function createFiberFromDehydratedFragment(dehydratedNode) {
        var fiber = createFiber(DehydratedFragment, null, null, NoMode);
        fiber.stateNode = dehydratedNode;
        return fiber;
      }
      function createFiberFromPortal(portal, mode, expirationTime) {
        var pendingProps = portal.children !== null ? portal.children : [];
        var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
        fiber.expirationTime = expirationTime;
        fiber.stateNode = {
          containerInfo: portal.containerInfo,
          pendingChildren: null,
          implementation: portal.implementation
        };
        return fiber;
      }
      function assignFiberPropertiesInDEV(target, source) {
        if (target === null) {
          target = createFiber(IndeterminateComponent, null, null, NoMode);
        }
        target.tag = source.tag;
        target.key = source.key;
        target.elementType = source.elementType;
        target.type = source.type;
        target.stateNode = source.stateNode;
        target.return = source.return;
        target.child = source.child;
        target.sibling = source.sibling;
        target.index = source.index;
        target.ref = source.ref;
        target.pendingProps = source.pendingProps;
        target.memoizedProps = source.memoizedProps;
        target.updateQueue = source.updateQueue;
        target.memoizedState = source.memoizedState;
        target.dependencies = source.dependencies;
        target.mode = source.mode;
        target.effectTag = source.effectTag;
        target.nextEffect = source.nextEffect;
        target.firstEffect = source.firstEffect;
        target.lastEffect = source.lastEffect;
        target.expirationTime = source.expirationTime;
        target.childExpirationTime = source.childExpirationTime;
        target.alternate = source.alternate;
        if (enableProfilerTimer) {
          target.actualDuration = source.actualDuration;
          target.actualStartTime = source.actualStartTime;
          target.selfBaseDuration = source.selfBaseDuration;
          target.treeBaseDuration = source.treeBaseDuration;
        }
        target._debugID = source._debugID;
        target._debugSource = source._debugSource;
        target._debugOwner = source._debugOwner;
        target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming;
        target._debugNeedsRemount = source._debugNeedsRemount;
        target._debugHookTypes = source._debugHookTypes;
        return target;
      }
      function FiberRootNode(containerInfo, tag, hydrate) {
        this.tag = tag;
        this.current = null;
        this.containerInfo = containerInfo;
        this.pendingChildren = null;
        this.pingCache = null;
        this.finishedExpirationTime = NoWork;
        this.finishedWork = null;
        this.timeoutHandle = noTimeout;
        this.context = null;
        this.pendingContext = null;
        this.hydrate = hydrate;
        this.firstBatch = null;
        this.callbackNode = null;
        this.callbackPriority = NoPriority;
        this.firstPendingTime = NoWork;
        this.firstSuspendedTime = NoWork;
        this.lastSuspendedTime = NoWork;
        this.nextKnownPendingLevel = NoWork;
        this.lastPingedTime = NoWork;
        this.lastExpiredTime = NoWork;
        if (enableSchedulerTracing) {
          this.interactionThreadID = tracing.unstable_getThreadID();
          this.memoizedInteractions = new Set();
          this.pendingInteractionMap = new Map();
        }
        if (enableSuspenseCallback) {
          this.hydrationCallbacks = null;
        }
      }
      function createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks) {
        var root2 = new FiberRootNode(containerInfo, tag, hydrate);
        if (enableSuspenseCallback) {
          root2.hydrationCallbacks = hydrationCallbacks;
        }
        var uninitializedFiber = createHostRootFiber(tag);
        root2.current = uninitializedFiber;
        uninitializedFiber.stateNode = root2;
        return root2;
      }
      function isRootSuspendedAtTime(root2, expirationTime) {
        var firstSuspendedTime = root2.firstSuspendedTime;
        var lastSuspendedTime = root2.lastSuspendedTime;
        return firstSuspendedTime !== NoWork && firstSuspendedTime >= expirationTime && lastSuspendedTime <= expirationTime;
      }
      function markRootSuspendedAtTime(root2, expirationTime) {
        var firstSuspendedTime = root2.firstSuspendedTime;
        var lastSuspendedTime = root2.lastSuspendedTime;
        if (firstSuspendedTime < expirationTime) {
          root2.firstSuspendedTime = expirationTime;
        }
        if (lastSuspendedTime > expirationTime || firstSuspendedTime === NoWork) {
          root2.lastSuspendedTime = expirationTime;
        }
        if (expirationTime <= root2.lastPingedTime) {
          root2.lastPingedTime = NoWork;
        }
        if (expirationTime <= root2.lastExpiredTime) {
          root2.lastExpiredTime = NoWork;
        }
      }
      function markRootUpdatedAtTime(root2, expirationTime) {
        var firstPendingTime = root2.firstPendingTime;
        if (expirationTime > firstPendingTime) {
          root2.firstPendingTime = expirationTime;
        }
        var firstSuspendedTime = root2.firstSuspendedTime;
        if (firstSuspendedTime !== NoWork) {
          if (expirationTime >= firstSuspendedTime) {
            root2.firstSuspendedTime = root2.lastSuspendedTime = root2.nextKnownPendingLevel = NoWork;
          } else if (expirationTime >= root2.lastSuspendedTime) {
            root2.lastSuspendedTime = expirationTime + 1;
          }
          if (expirationTime > root2.nextKnownPendingLevel) {
            root2.nextKnownPendingLevel = expirationTime;
          }
        }
      }
      function markRootFinishedAtTime(root2, finishedExpirationTime, remainingExpirationTime2) {
        root2.firstPendingTime = remainingExpirationTime2;
        if (finishedExpirationTime <= root2.lastSuspendedTime) {
          root2.firstSuspendedTime = root2.lastSuspendedTime = root2.nextKnownPendingLevel = NoWork;
        } else if (finishedExpirationTime <= root2.firstSuspendedTime) {
          root2.firstSuspendedTime = finishedExpirationTime - 1;
        }
        if (finishedExpirationTime <= root2.lastPingedTime) {
          root2.lastPingedTime = NoWork;
        }
        if (finishedExpirationTime <= root2.lastExpiredTime) {
          root2.lastExpiredTime = NoWork;
        }
      }
      function markRootExpiredAtTime(root2, expirationTime) {
        var lastExpiredTime = root2.lastExpiredTime;
        if (lastExpiredTime === NoWork || lastExpiredTime > expirationTime) {
          root2.lastExpiredTime = expirationTime;
        }
      }
      var ReactFiberInstrumentation = {
        debugTool: null
      };
      var ReactFiberInstrumentation_1 = ReactFiberInstrumentation;
      var didWarnAboutNestedUpdates;
      var didWarnAboutFindNodeInStrictMode;
      {
        didWarnAboutNestedUpdates = false;
        didWarnAboutFindNodeInStrictMode = {};
      }
      function getContextForSubtree(parentComponent) {
        if (!parentComponent) {
          return emptyContextObject;
        }
        var fiber = get(parentComponent);
        var parentContext = findCurrentUnmaskedContext(fiber);
        if (fiber.tag === ClassComponent) {
          var Component = fiber.type;
          if (isContextProvider(Component)) {
            return processChildContext(fiber, Component, parentContext);
          }
        }
        return parentContext;
      }
      function scheduleRootUpdate(current$$1, element, expirationTime, suspenseConfig, callback) {
        {
          if (phase === "render" && current !== null && !didWarnAboutNestedUpdates) {
            didWarnAboutNestedUpdates = true;
            warningWithoutStack$1(false, "Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", getComponentName(current.type) || "Unknown");
          }
        }
        var update = createUpdate(expirationTime, suspenseConfig);
        update.payload = {
          element
        };
        callback = callback === void 0 ? null : callback;
        if (callback !== null) {
          !(typeof callback === "function") ? warningWithoutStack$1(false, "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callback) : void 0;
          update.callback = callback;
        }
        enqueueUpdate(current$$1, update);
        scheduleWork(current$$1, expirationTime);
        return expirationTime;
      }
      function updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, suspenseConfig, callback) {
        var current$$1 = container.current;
        {
          if (ReactFiberInstrumentation_1.debugTool) {
            if (current$$1.alternate === null) {
              ReactFiberInstrumentation_1.debugTool.onMountContainer(container);
            } else if (element === null) {
              ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);
            } else {
              ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);
            }
          }
        }
        var context = getContextForSubtree(parentComponent);
        if (container.context === null) {
          container.context = context;
        } else {
          container.pendingContext = context;
        }
        return scheduleRootUpdate(current$$1, element, expirationTime, suspenseConfig, callback);
      }
      function findHostInstance(component) {
        var fiber = get(component);
        if (fiber === void 0) {
          if (typeof component.render === "function") {
            (function() {
              {
                {
                  throw ReactError(Error("Unable to find node on an unmounted component."));
                }
              }
            })();
          } else {
            (function() {
              {
                {
                  throw ReactError(Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(component)));
                }
              }
            })();
          }
        }
        var hostFiber = findCurrentHostFiber(fiber);
        if (hostFiber === null) {
          return null;
        }
        return hostFiber.stateNode;
      }
      function findHostInstanceWithWarning(component, methodName) {
        {
          var fiber = get(component);
          if (fiber === void 0) {
            if (typeof component.render === "function") {
              (function() {
                {
                  {
                    throw ReactError(Error("Unable to find node on an unmounted component."));
                  }
                }
              })();
            } else {
              (function() {
                {
                  {
                    throw ReactError(Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(component)));
                  }
                }
              })();
            }
          }
          var hostFiber = findCurrentHostFiber(fiber);
          if (hostFiber === null) {
            return null;
          }
          if (hostFiber.mode & StrictMode) {
            var componentName = getComponentName(fiber.type) || "Component";
            if (!didWarnAboutFindNodeInStrictMode[componentName]) {
              didWarnAboutFindNodeInStrictMode[componentName] = true;
              if (fiber.mode & StrictMode) {
                warningWithoutStack$1(false, "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", methodName, methodName, componentName, getStackByFiberInDevAndProd(hostFiber));
              } else {
                warningWithoutStack$1(false, "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", methodName, methodName, componentName, getStackByFiberInDevAndProd(hostFiber));
              }
            }
          }
          return hostFiber.stateNode;
        }
        return findHostInstance(component);
      }
      function createContainer(containerInfo, tag, hydrate, hydrationCallbacks) {
        return createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks);
      }
      function updateContainer(element, container, parentComponent, callback) {
        var current$$1 = container.current;
        var currentTime = requestCurrentTime();
        {
          if (typeof jest !== "undefined") {
            warnIfUnmockedScheduler(current$$1);
            warnIfNotScopedWithMatchingAct(current$$1);
          }
        }
        var suspenseConfig = requestCurrentSuspenseConfig();
        var expirationTime = computeExpirationForFiber(currentTime, current$$1, suspenseConfig);
        return updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, suspenseConfig, callback);
      }
      function getPublicRootInstance(container) {
        var containerFiber = container.current;
        if (!containerFiber.child) {
          return null;
        }
        switch (containerFiber.child.tag) {
          case HostComponent:
            return getPublicInstance(containerFiber.child.stateNode);
          default:
            return containerFiber.child.stateNode;
        }
      }
      function attemptSynchronousHydration$1(fiber) {
        switch (fiber.tag) {
          case HostRoot:
            var root2 = fiber.stateNode;
            if (root2.hydrate) {
              flushRoot(root2, root2.firstPendingTime);
            }
            break;
          case SuspenseComponent:
            flushSync(function() {
              return scheduleWork(fiber, Sync);
            });
            break;
        }
      }
      function findHostInstanceWithNoPortals(fiber) {
        var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
        if (hostFiber === null) {
          return null;
        }
        if (hostFiber.tag === FundamentalComponent) {
          return hostFiber.stateNode.instance;
        }
        return hostFiber.stateNode;
      }
      var shouldSuspendImpl = function(fiber) {
        return false;
      };
      function shouldSuspend(fiber) {
        return shouldSuspendImpl(fiber);
      }
      var overrideHookState = null;
      var overrideProps = null;
      var scheduleUpdate = null;
      var setSuspenseHandler = null;
      {
        var copyWithSetImpl = function(obj, path, idx, value) {
          if (idx >= path.length) {
            return value;
          }
          var key = path[idx];
          var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
          updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value);
          return updated;
        };
        var copyWithSet = function(obj, path, value) {
          return copyWithSetImpl(obj, path, 0, value);
        };
        overrideHookState = function(fiber, id, path, value) {
          var currentHook2 = fiber.memoizedState;
          while (currentHook2 !== null && id > 0) {
            currentHook2 = currentHook2.next;
            id--;
          }
          if (currentHook2 !== null) {
            var newState = copyWithSet(currentHook2.memoizedState, path, value);
            currentHook2.memoizedState = newState;
            currentHook2.baseState = newState;
            fiber.memoizedProps = _assign({}, fiber.memoizedProps);
            scheduleWork(fiber, Sync);
          }
        };
        overrideProps = function(fiber, path, value) {
          fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);
          if (fiber.alternate) {
            fiber.alternate.pendingProps = fiber.pendingProps;
          }
          scheduleWork(fiber, Sync);
        };
        scheduleUpdate = function(fiber) {
          scheduleWork(fiber, Sync);
        };
        setSuspenseHandler = function(newShouldSuspendImpl) {
          shouldSuspendImpl = newShouldSuspendImpl;
        };
      }
      function injectIntoDevTools(devToolsConfig) {
        var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
        var ReactCurrentDispatcher2 = ReactSharedInternals.ReactCurrentDispatcher;
        return injectInternals(_assign({}, devToolsConfig, {
          overrideHookState,
          overrideProps,
          setSuspenseHandler,
          scheduleUpdate,
          currentDispatcherRef: ReactCurrentDispatcher2,
          findHostInstanceByFiber: function(fiber) {
            var hostFiber = findCurrentHostFiber(fiber);
            if (hostFiber === null) {
              return null;
            }
            return hostFiber.stateNode;
          },
          findFiberByHostInstance: function(instance) {
            if (!findFiberByHostInstance) {
              return null;
            }
            return findFiberByHostInstance(instance);
          },
          findHostInstancesForRefresh,
          scheduleRefresh,
          scheduleRoot,
          setRefreshHandler,
          getCurrentFiber: function() {
            return current;
          }
        }));
      }
      function createPortal$1(children, containerInfo, implementation) {
        var key = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: key == null ? null : "" + key,
          children,
          containerInfo,
          implementation
        };
      }
      var ReactVersion = "16.10.2";
      setAttemptSynchronousHydration(attemptSynchronousHydration$1);
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var topLevelUpdateWarnings;
      var warnOnInvalidCallback;
      var didWarnAboutUnstableCreatePortal = false;
      {
        if (typeof Map !== "function" || Map.prototype == null || typeof Map.prototype.forEach !== "function" || typeof Set !== "function" || Set.prototype == null || typeof Set.prototype.clear !== "function" || typeof Set.prototype.forEach !== "function") {
          warningWithoutStack$1(false, "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        }
        topLevelUpdateWarnings = function(container) {
          if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
            var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer._internalRoot.current);
            if (hostInstance) {
              !(hostInstance.parentNode === container) ? warningWithoutStack$1(false, "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.") : void 0;
            }
          }
          var isRootRenderedBySomeReact = !!container._reactRootContainer;
          var rootEl = getReactRootElementInContainer(container);
          var hasNonRootReactChild = !!(rootEl && getInstanceFromNode$1(rootEl));
          !(!hasNonRootReactChild || isRootRenderedBySomeReact) ? warningWithoutStack$1(false, "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.") : void 0;
          !(container.nodeType !== ELEMENT_NODE || !container.tagName || container.tagName.toUpperCase() !== "BODY") ? warningWithoutStack$1(false, "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.") : void 0;
        };
        warnOnInvalidCallback = function(callback, callerName) {
          !(callback === null || typeof callback === "function") ? warningWithoutStack$1(false, "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback) : void 0;
        };
      }
      setRestoreImplementation(restoreControlledState$$1);
      function ReactBatch(root2) {
        var expirationTime = computeUniqueAsyncExpiration();
        this._expirationTime = expirationTime;
        this._root = root2;
        this._next = null;
        this._callbacks = null;
        this._didComplete = false;
        this._hasChildren = false;
        this._children = null;
        this._defer = true;
      }
      ReactBatch.prototype.render = function(children) {
        var _this = this;
        (function() {
          if (!_this._defer) {
            {
              throw ReactError(Error("batch.render: Cannot render a batch that already committed."));
            }
          }
        })();
        this._hasChildren = true;
        this._children = children;
        var internalRoot = this._root._internalRoot;
        var expirationTime = this._expirationTime;
        var work = new ReactWork();
        updateContainerAtExpirationTime(children, internalRoot, null, expirationTime, null, work._onCommit);
        return work;
      };
      ReactBatch.prototype.then = function(onComplete) {
        if (this._didComplete) {
          onComplete();
          return;
        }
        var callbacks = this._callbacks;
        if (callbacks === null) {
          callbacks = this._callbacks = [];
        }
        callbacks.push(onComplete);
      };
      ReactBatch.prototype.commit = function() {
        var _this2 = this;
        var internalRoot = this._root._internalRoot;
        var firstBatch = internalRoot.firstBatch;
        (function() {
          if (!(_this2._defer && firstBatch !== null)) {
            {
              throw ReactError(Error("batch.commit: Cannot commit a batch multiple times."));
            }
          }
        })();
        if (!this._hasChildren) {
          this._next = null;
          this._defer = false;
          return;
        }
        var expirationTime = this._expirationTime;
        if (firstBatch !== this) {
          if (this._hasChildren) {
            expirationTime = this._expirationTime = firstBatch._expirationTime;
            this.render(this._children);
          }
          var previous = null;
          var batch = firstBatch;
          while (batch !== this) {
            previous = batch;
            batch = batch._next;
          }
          (function() {
            if (!(previous !== null)) {
              {
                throw ReactError(Error("batch.commit: Cannot commit a batch multiple times."));
              }
            }
          })();
          previous._next = batch._next;
          this._next = firstBatch;
          firstBatch = internalRoot.firstBatch = this;
        }
        this._defer = false;
        flushRoot(internalRoot, expirationTime);
        var next = this._next;
        this._next = null;
        firstBatch = internalRoot.firstBatch = next;
        if (firstBatch !== null && firstBatch._hasChildren) {
          firstBatch.render(firstBatch._children);
        }
      };
      ReactBatch.prototype._onComplete = function() {
        if (this._didComplete) {
          return;
        }
        this._didComplete = true;
        var callbacks = this._callbacks;
        if (callbacks === null) {
          return;
        }
        for (var i2 = 0; i2 < callbacks.length; i2++) {
          var _callback = callbacks[i2];
          _callback();
        }
      };
      function ReactWork() {
        this._callbacks = null;
        this._didCommit = false;
        this._onCommit = this._onCommit.bind(this);
      }
      ReactWork.prototype.then = function(onCommit) {
        if (this._didCommit) {
          onCommit();
          return;
        }
        var callbacks = this._callbacks;
        if (callbacks === null) {
          callbacks = this._callbacks = [];
        }
        callbacks.push(onCommit);
      };
      ReactWork.prototype._onCommit = function() {
        if (this._didCommit) {
          return;
        }
        this._didCommit = true;
        var callbacks = this._callbacks;
        if (callbacks === null) {
          return;
        }
        for (var i2 = 0; i2 < callbacks.length; i2++) {
          var _callback2 = callbacks[i2];
          (function() {
            if (!(typeof _callback2 === "function")) {
              {
                throw ReactError(Error("Invalid argument passed as callback. Expected a function. Instead received: " + _callback2));
              }
            }
          })();
          _callback2();
        }
      };
      function createRootImpl(container, tag, options2) {
        var hydrate = options2 != null && options2.hydrate === true;
        var hydrationCallbacks = options2 != null && options2.hydrationOptions || null;
        var root2 = createContainer(container, tag, hydrate, hydrationCallbacks);
        markContainerAsRoot(root2.current, container);
        if (hydrate && tag !== LegacyRoot) {
          var doc = container.nodeType === DOCUMENT_NODE ? container : container.ownerDocument;
          eagerlyTrapReplayableEvents(doc);
        }
        return root2;
      }
      function ReactSyncRoot(container, tag, options2) {
        this._internalRoot = createRootImpl(container, tag, options2);
      }
      function ReactRoot(container, options2) {
        this._internalRoot = createRootImpl(container, ConcurrentRoot, options2);
      }
      ReactRoot.prototype.render = ReactSyncRoot.prototype.render = function(children, callback) {
        var root2 = this._internalRoot;
        var work = new ReactWork();
        callback = callback === void 0 ? null : callback;
        {
          warnOnInvalidCallback(callback, "render");
        }
        if (callback !== null) {
          work.then(callback);
        }
        updateContainer(children, root2, null, work._onCommit);
        return work;
      };
      ReactRoot.prototype.unmount = ReactSyncRoot.prototype.unmount = function(callback) {
        var root2 = this._internalRoot;
        var work = new ReactWork();
        callback = callback === void 0 ? null : callback;
        {
          warnOnInvalidCallback(callback, "render");
        }
        if (callback !== null) {
          work.then(callback);
        }
        updateContainer(null, root2, null, work._onCommit);
        return work;
      };
      ReactRoot.prototype.createBatch = function() {
        var batch = new ReactBatch(this);
        var expirationTime = batch._expirationTime;
        var internalRoot = this._internalRoot;
        var firstBatch = internalRoot.firstBatch;
        if (firstBatch === null) {
          internalRoot.firstBatch = batch;
          batch._next = null;
        } else {
          var insertAfter = null;
          var insertBefore2 = firstBatch;
          while (insertBefore2 !== null && insertBefore2._expirationTime >= expirationTime) {
            insertAfter = insertBefore2;
            insertBefore2 = insertBefore2._next;
          }
          batch._next = insertBefore2;
          if (insertAfter !== null) {
            insertAfter._next = batch;
          }
        }
        return batch;
      };
      function isValidContainer(node) {
        return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || node.nodeType === COMMENT_NODE && node.nodeValue === " react-mount-point-unstable "));
      }
      function getReactRootElementInContainer(container) {
        if (!container) {
          return null;
        }
        if (container.nodeType === DOCUMENT_NODE) {
          return container.documentElement;
        } else {
          return container.firstChild;
        }
      }
      function shouldHydrateDueToLegacyHeuristic(container) {
        var rootElement = getReactRootElementInContainer(container);
        return !!(rootElement && rootElement.nodeType === ELEMENT_NODE && rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));
      }
      setBatchingImplementation(batchedUpdates$1, discreteUpdates$1, flushDiscreteUpdates, batchedEventUpdates$1);
      var warnedAboutHydrateAPI = false;
      function legacyCreateRootFromDOMContainer(container, forceHydrate) {
        var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
        if (!shouldHydrate) {
          var warned = false;
          var rootSibling;
          while (rootSibling = container.lastChild) {
            {
              if (!warned && rootSibling.nodeType === ELEMENT_NODE && rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)) {
                warned = true;
                warningWithoutStack$1(false, "render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.");
              }
            }
            container.removeChild(rootSibling);
          }
        }
        {
          if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
            warnedAboutHydrateAPI = true;
            lowPriorityWarningWithoutStack$1(false, "render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.");
          }
        }
        return new ReactSyncRoot(container, LegacyRoot, shouldHydrate ? {
          hydrate: true
        } : void 0);
      }
      function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
        {
          topLevelUpdateWarnings(container);
          warnOnInvalidCallback(callback === void 0 ? null : callback, "render");
        }
        var root2 = container._reactRootContainer;
        var fiberRoot;
        if (!root2) {
          root2 = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate);
          fiberRoot = root2._internalRoot;
          if (typeof callback === "function") {
            var originalCallback = callback;
            callback = function() {
              var instance = getPublicRootInstance(fiberRoot);
              originalCallback.call(instance);
            };
          }
          unbatchedUpdates(function() {
            updateContainer(children, fiberRoot, parentComponent, callback);
          });
        } else {
          fiberRoot = root2._internalRoot;
          if (typeof callback === "function") {
            var _originalCallback = callback;
            callback = function() {
              var instance = getPublicRootInstance(fiberRoot);
              _originalCallback.call(instance);
            };
          }
          updateContainer(children, fiberRoot, parentComponent, callback);
        }
        return getPublicRootInstance(fiberRoot);
      }
      function createPortal$$1(children, container) {
        var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        (function() {
          if (!isValidContainer(container)) {
            {
              throw ReactError(Error("Target container is not a DOM element."));
            }
          }
        })();
        return createPortal$1(children, container, null, key);
      }
      var ReactDOM = {
        createPortal: createPortal$$1,
        findDOMNode: function(componentOrElement) {
          {
            var owner = ReactCurrentOwner.current;
            if (owner !== null && owner.stateNode !== null) {
              var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
              !warnedAboutRefsInRender ? warningWithoutStack$1(false, "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", getComponentName(owner.type) || "A component") : void 0;
              owner.stateNode._warnedAboutRefsInRender = true;
            }
          }
          if (componentOrElement == null) {
            return null;
          }
          if (componentOrElement.nodeType === ELEMENT_NODE) {
            return componentOrElement;
          }
          {
            return findHostInstanceWithWarning(componentOrElement, "findDOMNode");
          }
          return findHostInstance(componentOrElement);
        },
        hydrate: function(element, container, callback) {
          (function() {
            if (!isValidContainer(container)) {
              {
                throw ReactError(Error("Target container is not a DOM element."));
              }
            }
          })();
          {
            !!container._reactHasBeenPassedToCreateRootDEV ? warningWithoutStack$1(false, "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.%s(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?", enableStableConcurrentModeAPIs ? "createRoot" : "unstable_createRoot") : void 0;
          }
          return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
        },
        render: function(element, container, callback) {
          (function() {
            if (!isValidContainer(container)) {
              {
                throw ReactError(Error("Target container is not a DOM element."));
              }
            }
          })();
          {
            !!container._reactHasBeenPassedToCreateRootDEV ? warningWithoutStack$1(false, "You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.%s(). This is not supported. Did you mean to call root.render(element)?", enableStableConcurrentModeAPIs ? "createRoot" : "unstable_createRoot") : void 0;
          }
          return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
        },
        unstable_renderSubtreeIntoContainer: function(parentComponent, element, containerNode, callback) {
          (function() {
            if (!isValidContainer(containerNode)) {
              {
                throw ReactError(Error("Target container is not a DOM element."));
              }
            }
          })();
          (function() {
            if (!(parentComponent != null && has(parentComponent))) {
              {
                throw ReactError(Error("parentComponent must be a valid React Component"));
              }
            }
          })();
          return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
        },
        unmountComponentAtNode: function(container) {
          (function() {
            if (!isValidContainer(container)) {
              {
                throw ReactError(Error("unmountComponentAtNode(...): Target container is not a DOM element."));
              }
            }
          })();
          {
            !!container._reactHasBeenPassedToCreateRootDEV ? warningWithoutStack$1(false, "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.%s(). This is not supported. Did you mean to call root.unmount()?", enableStableConcurrentModeAPIs ? "createRoot" : "unstable_createRoot") : void 0;
          }
          if (container._reactRootContainer) {
            {
              var rootEl = getReactRootElementInContainer(container);
              var renderedByDifferentReact = rootEl && !getInstanceFromNode$1(rootEl);
              !!renderedByDifferentReact ? warningWithoutStack$1(false, "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.") : void 0;
            }
            unbatchedUpdates(function() {
              legacyRenderSubtreeIntoContainer(null, null, container, false, function() {
                container._reactRootContainer = null;
              });
            });
            return true;
          } else {
            {
              var _rootEl = getReactRootElementInContainer(container);
              var hasNonRootReactChild = !!(_rootEl && getInstanceFromNode$1(_rootEl));
              var isContainerReactRoot = container.nodeType === ELEMENT_NODE && isValidContainer(container.parentNode) && !!container.parentNode._reactRootContainer;
              !!hasNonRootReactChild ? warningWithoutStack$1(false, "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", isContainerReactRoot ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.") : void 0;
            }
            return false;
          }
        },
        unstable_createPortal: function() {
          if (!didWarnAboutUnstableCreatePortal) {
            didWarnAboutUnstableCreatePortal = true;
            lowPriorityWarningWithoutStack$1(false, 'The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.');
          }
          return createPortal$$1.apply(void 0, arguments);
        },
        unstable_batchedUpdates: batchedUpdates$1,
        unstable_interactiveUpdates: function(fn, a, b, c) {
          flushDiscreteUpdates();
          return discreteUpdates$1(fn, a, b, c);
        },
        unstable_discreteUpdates: discreteUpdates$1,
        unstable_flushDiscreteUpdates: flushDiscreteUpdates,
        flushSync,
        unstable_createRoot: createRoot,
        unstable_createSyncRoot: createSyncRoot,
        unstable_flushControlled: flushControlled,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          Events: [getInstanceFromNode$1, getNodeFromInstance$1, getFiberCurrentPropsFromNode$1, injection.injectEventPluginsByName, eventNameDispatchConfigs, accumulateTwoPhaseDispatches, accumulateDirectDispatches, enqueueStateRestore, restoreStateIfNeeded, dispatchEvent, runEventsInBatch, flushPassiveEffects, IsThisRendererActing]
        }
      };
      function createRoot(container, options2) {
        var functionName = enableStableConcurrentModeAPIs ? "createRoot" : "unstable_createRoot";
        (function() {
          if (!isValidContainer(container)) {
            {
              throw ReactError(Error(functionName + "(...): Target container is not a DOM element."));
            }
          }
        })();
        warnIfReactDOMContainerInDEV(container);
        return new ReactRoot(container, options2);
      }
      function createSyncRoot(container, options2) {
        var functionName = enableStableConcurrentModeAPIs ? "createRoot" : "unstable_createRoot";
        (function() {
          if (!isValidContainer(container)) {
            {
              throw ReactError(Error(functionName + "(...): Target container is not a DOM element."));
            }
          }
        })();
        warnIfReactDOMContainerInDEV(container);
        return new ReactSyncRoot(container, BatchedRoot, options2);
      }
      function warnIfReactDOMContainerInDEV(container) {
        {
          !!container._reactRootContainer ? warningWithoutStack$1(false, "You are calling ReactDOM.%s() on a container that was previously passed to ReactDOM.render(). This is not supported.", enableStableConcurrentModeAPIs ? "createRoot" : "unstable_createRoot") : void 0;
          container._reactHasBeenPassedToCreateRootDEV = true;
        }
      }
      if (enableStableConcurrentModeAPIs) {
        ReactDOM.createRoot = createRoot;
        ReactDOM.createSyncRoot = createSyncRoot;
      }
      var foundDevTools = injectIntoDevTools({
        findFiberByHostInstance: getClosestInstanceFromNode,
        bundleType: 1,
        version: ReactVersion,
        rendererPackageName: "react-dom"
      });
      {
        if (!foundDevTools && canUseDOM && window.top === window.self) {
          if (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1) {
            var protocol = window.location.protocol;
            if (/^(https?|file):$/.test(protocol)) {
              console.info("%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools" + (protocol === "file:" ? "\nYou might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq" : ""), "font-weight:bold");
            }
          }
        }
      }
      var ReactDOM$2 = Object.freeze({
        default: ReactDOM
      });
      var ReactDOM$3 = ReactDOM$2 && ReactDOM || ReactDOM$2;
      var reactDom = ReactDOM$3.default || ReactDOM$3;
      module.exports = reactDom;
    })();
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS((exports, module) => {
  "use strict";
  if (false) {
    checkDCE();
    module.exports = null;
  } else {
    module.exports = require_react_dom_development();
  }
});

// node_modules/mobx-react-lite/dist/index.module.js
const react = __toModule(require_react());
import {spy, observable, computed, getDependencyTree, Reaction, runInAction, transaction} from "mobx";
if (!react.useState) {
  throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!spy) {
  throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}
var globalIsUsingStaticRendering = false;
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
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {error};
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
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
  react.useEffect(function() {
    return fn;
  }, EMPTY_ARRAY);
}
function useForceUpdate() {
  var _a = __read(react.useState(0), 2), setTick = _a[1];
  var update = react.useCallback(function() {
    setTick(function(tick) {
      return tick + 1;
    });
  }, []);
  return update;
}
var EMPTY_OBJECT = {};
function useObserver(fn, baseComponentName, options) {
  if (baseComponentName === void 0) {
    baseComponentName = "observed";
  }
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }
  if (isUsingStaticRendering()) {
    return fn();
  }
  var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
  var forceUpdate = wantedForceUpdateHook();
  var reaction = react.useRef(null);
  if (!reaction.current) {
    reaction.current = new Reaction("observer(" + baseComponentName + ")", function() {
      forceUpdate();
    });
  }
  var dispose = function() {
    if (reaction.current && !reaction.current.isDisposed) {
      reaction.current.dispose();
    }
  };
  react.useDebugValue(reaction, printDebugValue);
  useUnmount(function() {
    dispose();
  });
  var rendering;
  var exception;
  reaction.current.track(function() {
    try {
      rendering = fn();
    } catch (e) {
      exception = e;
    }
  });
  if (exception) {
    dispose();
    throw exception;
  }
  return rendering;
}
function observer(baseComponent, options) {
  if (isUsingStaticRendering()) {
    return baseComponent;
  }
  var realOptions = __assign({forwardRef: false}, options);
  var baseComponentName = baseComponent.displayName || baseComponent.name;
  var wrappedComponent = function(props, ref) {
    return useObserver(function() {
      return baseComponent(props, ref);
    }, baseComponentName);
  };
  wrappedComponent.displayName = baseComponentName;
  var memoComponent;
  if (realOptions.forwardRef) {
    memoComponent = react.memo(react.forwardRef(wrappedComponent));
  } else {
    memoComponent = react.memo(wrappedComponent);
  }
  copyStaticProperties(baseComponent, memoComponent);
  memoComponent.displayName = baseComponentName;
  return memoComponent;
}
var hoistBlackList = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true
};
function copyStaticProperties(base2, target) {
  Object.keys(base2).forEach(function(key) {
    if (base2.hasOwnProperty(key) && !hoistBlackList[key]) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base2, key));
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
  return new Error("Invalid prop `" + propFullName + "` of type `" + typeof props[key] + "` supplied to `" + componentName + "`, expected `function`.");
}

// src/utils.ts
function flatten(list, depth, mapperFn, mapperCtx) {
  if (depth === 0) {
    return list;
  }
  return list.reduce((accumulator, item, i) => {
    if (mapperFn) {
      item = mapperFn.call(mapperCtx || list, item, i, list);
    }
    if (Array.isArray(item)) {
      accumulator.push(...flatten(item, depth - 1));
    } else {
      accumulator.push(item);
    }
    return accumulator;
  }, []);
}
if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth = Infinity) {
    return flatten(this, depth);
  };
}
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function(callback, thisArg) {
    return flatten(this, 1, callback, thisArg);
  };
}

// src/store.ts
import {observable as observable2, computed as computed2, configure, action, runInAction as runInAction2} from "mobx";
configure({enforceActions: "observed"});
class Store {
  constructor() {
    this.dbRegras = [];
    this.dbHospedeiros = [];
    this.dbPragas = [];
    this.db = [];
    this.estados = [];
    this.dados = {hospSci: "", hospVul: "", prod: "", orig: "", dest: ""};
    this.handleChanges = (event) => {
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
    };
  }
  async getDb() {
    const {regras, pragas, hospedeiros, estados} = await import("./db.js");
    runInAction2(() => {
      this.dbHospedeiros = hospedeiros;
      this.dbRegras = regras;
      this.dbPragas = pragas;
      this.estados = estados;
      this.db = this.dbRegras.map((regra) => ({
        ...this.dbPragas.find((item) => item.prag === regra.prag),
        ...regra
      }));
    });
  }
  get hospedeirosPragas() {
    return this.dbPragas.flatMap((praga) => praga.hosp);
  }
  get hospedeirosRegulamentados() {
    return this.dbHospedeiros.filter((hospedeiro) => this.hospedeirosPragas.includes(hospedeiro.nomeSci));
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
    return this.db.filter((exigen) => exigen.hosp.includes(this.dados.hospSci) || exigen.hosp.includes(`${this.gender} sp.`) || exigen.hosp.includes(`${this.gender} spp.`)).flatMap((v) => v.part).filter((i, x, a) => a.indexOf(i) === x).concat([""]).sort((a, b) => a.localeCompare(b));
  }
  get result() {
    return this.db.filter((exigen) => {
      return (exigen.hosp.includes(this.dados.hospSci) || exigen.hosp.includes(`${this.gender} sp.`) || exigen.hosp.includes(`${this.gender} spp.`)) && exigen.orig.includes(this.dados.orig) && exigen.dest.includes(this.dados.dest) && exigen.part.includes(this.dados.prod);
    });
  }
  clean() {
    this.dados.hospSci = "";
    this.dados.hospVul = "";
    this.dados.prod = "";
    this.dados.orig = "";
    this.dados.dest = "";
  }
}
__decorate([
  observable2
], Store.prototype, "dbRegras", 2);
__decorate([
  observable2
], Store.prototype, "dbHospedeiros", 2);
__decorate([
  observable2
], Store.prototype, "dbPragas", 2);
__decorate([
  observable2
], Store.prototype, "db", 2);
__decorate([
  observable2
], Store.prototype, "estados", 2);
__decorate([
  observable2
], Store.prototype, "dados", 2);
__decorate([
  computed2
], Store.prototype, "hospedeirosPragas", 1);
__decorate([
  computed2
], Store.prototype, "hospedeirosRegulamentados", 1);
__decorate([
  computed2
], Store.prototype, "listaNomesSci", 1);
__decorate([
  computed2
], Store.prototype, "listaNomesVul", 1);
__decorate([
  computed2
], Store.prototype, "empty", 1);
__decorate([
  computed2
], Store.prototype, "origem", 1);
__decorate([
  computed2
], Store.prototype, "destino", 1);
__decorate([
  computed2
], Store.prototype, "gender", 1);
__decorate([
  computed2
], Store.prototype, "completed", 1);
__decorate([
  computed2
], Store.prototype, "partes", 1);
__decorate([
  computed2
], Store.prototype, "result", 1);
__decorate([
  action
], Store.prototype, "handleChanges", 2);
__decorate([
  action
], Store.prototype, "clean", 1);
const store = new Store();
store.getDb();

// src/uistore.ts
import {observable as observable3, action as action2, configure as configure2} from "mobx";
configure2({enforceActions: "observed"});
class UiStore {
  constructor() {
    this.exibeBase = false;
    this.searched = false;
    this.handleMenu = (i) => {
      if (i === "Base") {
        this.exibeBase = !this.exibeBase;
      }
      if (i === "Nova") {
        store.clean();
        this.searched = false;
      }
      if (i === "Voltar") {
        this.searched = false;
      }
      if (i === "Print") {
        window.print();
      }
      if (i === "Download") {
        window.open("CEFiTI.zip");
      }
    };
    this.handleSearch = (event) => {
      if (false) {
        window.ga("send", "event", "search", "click", store.dados.hospSci);
      }
      this.searched = true;
      event.preventDefault();
    };
  }
}
__decorate([
  observable3
], UiStore.prototype, "exibeBase", 2);
__decorate([
  observable3
], UiStore.prototype, "searched", 2);
__decorate([
  action2
], UiStore.prototype, "handleMenu", 2);
__decorate([
  action2
], UiStore.prototype, "handleSearch", 2);
const uiStore = new UiStore();

// src/base.tsx
const react2 = __toModule(require_react());
const Base = () => {
  return uiStore.exibeBase ? /* @__PURE__ */ react2.default.createElement("div", null, /* @__PURE__ */ react2.default.createElement("br", null), /* @__PURE__ */ react2.default.createElement("table", {
    style: {width: "100%"},
    className: "table-grid"
  }, /* @__PURE__ */ react2.default.createElement("caption", null, "Exigências"), /* @__PURE__ */ react2.default.createElement("thead", null, /* @__PURE__ */ react2.default.createElement("tr", null, /* @__PURE__ */ react2.default.createElement("th", {
    style: {width: "10%"}
  }, "Descrição"), /* @__PURE__ */ react2.default.createElement("th", {
    style: {width: "20%"}
  }, "Hospedeiro"), /* @__PURE__ */ react2.default.createElement("th", {
    style: {width: "10%"}
  }, "Partida"), /* @__PURE__ */ react2.default.createElement("th", {
    style: {width: "10%"}
  }, "Origem"), /* @__PURE__ */ react2.default.createElement("th", {
    style: {width: "10%"}
  }, "Destino"), /* @__PURE__ */ react2.default.createElement("th", {
    style: {width: "15%"}
  }, "Legislação"), /* @__PURE__ */ react2.default.createElement("th", {
    style: {width: "30%"}
  }, "Exigências"))), /* @__PURE__ */ react2.default.createElement("tbody", null, store.db.map((item, i) => {
    return /* @__PURE__ */ react2.default.createElement("tr", {
      key: i
    }, /* @__PURE__ */ react2.default.createElement("td", {
      style: {width: "10%"}
    }, /* @__PURE__ */ react2.default.createElement("span", null, item.desc)), /* @__PURE__ */ react2.default.createElement("td", {
      style: {width: "20%"},
      className: "italic"
    }, /* @__PURE__ */ react2.default.createElement("span", null, item.hosp.toString())), /* @__PURE__ */ react2.default.createElement("td", {
      style: {width: "10%"}
    }, /* @__PURE__ */ react2.default.createElement("span", null, item.part.toString())), /* @__PURE__ */ react2.default.createElement("td", {
      style: {width: "10%"}
    }, /* @__PURE__ */ react2.default.createElement("span", null, item.orig.toString())), /* @__PURE__ */ react2.default.createElement("td", {
      style: {width: "10%"}
    }, /* @__PURE__ */ react2.default.createElement("span", null, item.dest.toString())), /* @__PURE__ */ react2.default.createElement("td", {
      style: {width: "15%"}
    }, item.files.map((file) => /* @__PURE__ */ react2.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      key: file.link,
      href: `leg/${file.link}`
    }, file.leg)), /* @__PURE__ */ react2.default.createElement("br", null), /* @__PURE__ */ react2.default.createElement("br", null), /* @__PURE__ */ react2.default.createElement("span", null, item.pragc), /* @__PURE__ */ react2.default.createElement("br", null), /* @__PURE__ */ react2.default.createElement("br", null), /* @__PURE__ */ react2.default.createElement("span", {
      className: "italic"
    }, item.prag)), /* @__PURE__ */ react2.default.createElement("td", {
      style: {width: "30%"}
    }, /* @__PURE__ */ react2.default.createElement("div", {
      style: {margin: "6px"}
    }, item.exig.map((exigen, ix) => {
      return /* @__PURE__ */ react2.default.createElement("p", {
        key: ix
      }, ix + 1, " - ", exigen);
    }))));
  })), /* @__PURE__ */ react2.default.createElement("tfoot", {
    className: "form-barra-botoes"
  }, /* @__PURE__ */ react2.default.createElement("tr", null, /* @__PURE__ */ react2.default.createElement("td", null))))) : /* @__PURE__ */ react2.default.createElement("div", null);
};
var base_default = observer(Base);

// src/result.tsx
const react3 = __toModule(require_react());
function Result() {
  return /* @__PURE__ */ react3.default.createElement("div", null, /* @__PURE__ */ react3.default.createElement("div", {
    className: store.completed && uiStore.searched ? "" : "hidden"
  }, /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("h3", null, "Exigências Fitossanitárias para o trânsito de ", store.dados.prod, " de ", store.dados.hospVul, " ", /* @__PURE__ */ react3.default.createElement("i", null, "(", store.dados.hospSci, ")"), " do ", store.dados.orig, " para ", store.dados.dest), /* @__PURE__ */ react3.default.createElement("div", {
    className: store.empty ? "" : "hidden"
  }, /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("span", {
    className: "empty"
  }, /* @__PURE__ */ react3.default.createElement("div", null, /* @__PURE__ */ react3.default.createElement("p", null, "SEM EXIGÊNCIAS PARA O TRÂNSITO"))), /* @__PURE__ */ react3.default.createElement("br", null)), /* @__PURE__ */ react3.default.createElement("span", null, uiStore.searched), store.result.map((item, i) => {
    return /* @__PURE__ */ react3.default.createElement("div", {
      key: `${item.prag}${i}`
    }, /* @__PURE__ */ react3.default.createElement("hr", null), /* @__PURE__ */ react3.default.createElement("h4", {
      className: "h4",
      style: {textAlign: "left", float: "left"}
    }, /* @__PURE__ */ react3.default.createElement("i", null, item.prag), " - ", item.pragc), /* @__PURE__ */ react3.default.createElement("a", {
      className: "small",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.google.com.br/search?site=imghp&tbm=isch&q=${item.prag}`,
      style: {textAlign: "right", float: "right"}
    }, "[FOTOS DA PRAGA]"), "        ", "          ", /* @__PURE__ */ react3.default.createElement("br", null), item.files.map((file, iii) => {
      return /* @__PURE__ */ react3.default.createElement("div", {
        key: file.link.concat(iii.toString())
      }, /* @__PURE__ */ react3.default.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: `leg/${file.link}`
      }, file.leg), /* @__PURE__ */ react3.default.createElement("br", null));
    }), /* @__PURE__ */ react3.default.createElement("span", {
      className: "small underline"
    }, item.desc), item.exig.map((exig, ii) => {
      return /* @__PURE__ */ react3.default.createElement("div", {
        style: {margin: "6px"},
        key: exig.concat(ii.toString())
      }, /* @__PURE__ */ react3.default.createElement("span", {
        title: `De: ${item.orig} para ${item.dest}`
      }, ii + 1, " - ", exig));
    }), /* @__PURE__ */ react3.default.createElement("br", null));
  }), /* @__PURE__ */ react3.default.createElement("div", {
    className: store.empty ? "hidden" : ""
  }, /* @__PURE__ */ react3.default.createElement("hr", null), /* @__PURE__ */ react3.default.createElement("h4", {
    className: "h4"
  }, "TRÂNSITO NACIONAL DE PARTIDA IMPORTADA"), /* @__PURE__ */ react3.default.createElement("div", {
    style: {margin: "6px"}
  }, /* @__PURE__ */ react3.default.createElement("span", null, "1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO A UMA ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:"), /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("span", null, "- Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação;")), /* @__PURE__ */ react3.default.createElement("div", {
    style: {margin: "6px"}
  }, /* @__PURE__ */ react3.default.createElement("span", null, "2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO AO PONTO DE DESTINO DECLARADO NA IMPORTAÇÃO:"), /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("span", null, "- Cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação;", " "), /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("span", null, "- Original ou cópia autenticada do Requerimento para Fiscalização de Produtos Agropecuários, emitido pelo MAPA;")), /* @__PURE__ */ react3.default.createElement("div", {
    style: {margin: "6px"}
  }, /* @__PURE__ */ react3.default.createElement("span", null, "3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO DO DESTINO DECLARADO NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF:"), /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("span", null, "- Cumprir os requisitos fitossanitários para o trânsito interestadual.")), /* @__PURE__ */ react3.default.createElement("hr", null), /* @__PURE__ */ react3.default.createElement("h4", {
    className: "h4"
  }, "TRÂNSITO NACIONAL DE PARTIDA EXPORTADA"), /* @__PURE__ */ react3.default.createElement("div", {
    style: {margin: "6px"}
  }, /* @__PURE__ */ react3.default.createElement("span", null, "1 – SE A PARTIDA JÁ ESTIVER COM CERTIFICADO FITOSSANITÁRIO NO INTERIOR DO BRASIL, EM TRÂNSITO PARA PONTO DE EGRESSO:"), /* @__PURE__ */ react3.default.createElement("span", null, "- Certificado Fitossanitário.")), /* @__PURE__ */ react3.default.createElement("hr", null), /* @__PURE__ */ react3.default.createElement("h4", {
    className: "h4"
  }, "LEGISLAÇÃO GERAL"), /* @__PURE__ */ react3.default.createElement("a", {
    target: "_blank",
    href: "leg/IN28-2016.pdf",
    rel: "noreferrer"
  }, "Instrução Normativa MAPA Nº 28, de 24 de agosto de 2016"), /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("a", {
    target: "_blank",
    href: "leg/IN38-2018.pdf",
    rel: "noreferrer"
  }, "Instrução Normativa MAPA Nº 38, de 01 de outubro de 2018"), /* @__PURE__ */ react3.default.createElement("br", null), /* @__PURE__ */ react3.default.createElement("hr", null)), /* @__PURE__ */ react3.default.createElement("div", {
    style: {textAlign: "center"}
  }, /* @__PURE__ */ react3.default.createElement("button", {
    onClick: uiStore.handleMenu.bind(void 0, "Voltar"),
    className: "form-button",
    disabled: false
  }, "Voltar"), "      ", /* @__PURE__ */ react3.default.createElement("button", {
    onClick: uiStore.handleMenu.bind(void 0, "Nova"),
    className: "form-button",
    disabled: false
  }, "Nova Consulta"))));
}
var result_default = observer(Result);

// src/form.tsx
const react4 = __toModule(require_react());
function Select({value, source, name, empty}) {
  return /* @__PURE__ */ react4.default.createElement("select", {
    style: name === "prod" ? {minWidth: "145px"} : {},
    id: name,
    className: name === "hospSci" ? "italic form-select" : "form-select",
    value,
    name,
    onChange: store.handleChanges
  }, empty && /* @__PURE__ */ react4.default.createElement("option", {
    value: "",
    "aria-selected": "true"
  }), source.map((option) => {
    return /* @__PURE__ */ react4.default.createElement("option", {
      value: option,
      key: option,
      "aria-selected": "false"
    }, option);
  }));
}
function Form() {
  return uiStore.searched ? /* @__PURE__ */ react4.default.createElement("div", null) : /* @__PURE__ */ react4.default.createElement("form", null, /* @__PURE__ */ react4.default.createElement("div", null, /* @__PURE__ */ react4.default.createElement("label", {
    className: "form",
    htmlFor: "hospSci"
  }, "Espécie Vegetal (nome científico):"), /* @__PURE__ */ react4.default.createElement(Select, {
    value: store.dados.hospSci,
    name: "hospSci",
    source: store.listaNomesSci,
    empty: true
  })), /* @__PURE__ */ react4.default.createElement("div", null, /* @__PURE__ */ react4.default.createElement("label", {
    className: "form",
    htmlFor: "hospVul"
  }, "Espécie Vegetal (nome vulgar):"), /* @__PURE__ */ react4.default.createElement(Select, {
    value: store.dados.hospVul,
    name: "hospVul",
    source: store.listaNomesVul,
    empty: true
  })), /* @__PURE__ */ react4.default.createElement("div", null, /* @__PURE__ */ react4.default.createElement("label", {
    className: "form",
    htmlFor: "prod"
  }, "Parte da Planta:"), /* @__PURE__ */ react4.default.createElement(Select, {
    value: store.dados.prod,
    name: "prod",
    source: store.partes,
    empty: false
  })), /* @__PURE__ */ react4.default.createElement("div", null, /* @__PURE__ */ react4.default.createElement("label", {
    className: "form",
    htmlFor: "orig"
  }, "Origem:"), /* @__PURE__ */ react4.default.createElement("select", {
    id: "orig",
    className: "form-select",
    name: "orig",
    value: store.dados.orig,
    onChange: store.handleChanges
  }, store.origem.map((option, i) => {
    return /* @__PURE__ */ react4.default.createElement("option", {
      value: option.UF,
      key: i,
      "aria-selected": "false"
    }, option.estado);
  }))), /* @__PURE__ */ react4.default.createElement("div", null, /* @__PURE__ */ react4.default.createElement("label", {
    className: "form",
    htmlFor: "dest"
  }, "Destino:"), /* @__PURE__ */ react4.default.createElement("select", {
    id: "dest",
    className: "form-select",
    name: "dest",
    value: store.dados.dest,
    onChange: store.handleChanges
  }, store.destino.map((option, i) => {
    return /* @__PURE__ */ react4.default.createElement("option", {
      value: option.UF,
      key: i,
      "aria-selected": "false"
    }, option.estado);
  }))), /* @__PURE__ */ react4.default.createElement("br", null), /* @__PURE__ */ react4.default.createElement("div", null, /* @__PURE__ */ react4.default.createElement("a", {
    style: {marginBottom: "10px"},
    target: "_blank",
    rel: "noopener noreferrer",
    href: `https://www.google.com.br/search?site=imghp&tbm=isch&q=${store.dados.hospSci}+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`
  }, "Fotos da Espécie Vegetal"), /* @__PURE__ */ react4.default.createElement("button", {
    onClick: uiStore.handleSearch,
    className: "form-button margin-left-100",
    disabled: false
  }, "Pesquisar")));
}
var form_default = observer(Form);

// src/menu.tsx
const react5 = __toModule(require_react());
const Menu = () => {
  return /* @__PURE__ */ react5.default.createElement("div", {
    id: "moldura-navegacao-global"
  }, /* @__PURE__ */ react5.default.createElement("div", {
    id: "navegacao-global"
  }, /* @__PURE__ */ react5.default.createElement("p", null, /* @__PURE__ */ react5.default.createElement("span", null, /* @__PURE__ */ react5.default.createElement("a", {
    href: "#",
    onClick: uiStore.handleMenu.bind(void 0, "Base")
  }, "Ver Base de Dados")), /* @__PURE__ */ react5.default.createElement("span", {
    title: "Baixar o sistema para uso off-line. Descompacte o arquivo CEFiTI.zip e acesse o arquivo index.html"
  }, /* @__PURE__ */ react5.default.createElement("a", {
    href: "#",
    onClick: uiStore.handleMenu.bind(void 0, "Download")
  }, "Download")), /* @__PURE__ */ react5.default.createElement("span", {
    title: "Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão"
  }, /* @__PURE__ */ react5.default.createElement("a", {
    href: "#",
    onClick: uiStore.handleMenu.bind(void 0, "Print")
  }, "Imprimir")), /* @__PURE__ */ react5.default.createElement("span", null, /* @__PURE__ */ react5.default.createElement("a", {
    href: "#",
    onClick: uiStore.handleMenu.bind(void 0, "Nova")
  }, "NOVA CONSULTA")))));
};
var menu_default = observer(Menu);

// package.json
var version = "5.2.27";

// src/head.tsx
const react6 = __toModule(require_react());
const Head = () => /* @__PURE__ */ react6.default.createElement(react6.default.Fragment, null, /* @__PURE__ */ react6.default.createElement("div", {
  id: "moldura-topo"
}, /* @__PURE__ */ react6.default.createElement("div", {
  id: "topo"
}, /* @__PURE__ */ react6.default.createElement("div", {
  id: "identificacao-ministerio"
}, /* @__PURE__ */ react6.default.createElement("span", null, /* @__PURE__ */ react6.default.createElement("div", {
  id: "imagemGov"
}, /* @__PURE__ */ react6.default.createElement("a", {
  href: "http://www.brasil.gov.br",
  target: "_blank",
  rel: "noopener noreferrer",
  id: "brasilgov"
})))), /* @__PURE__ */ react6.default.createElement("div", {
  id: "identificacao-sistema",
  style: {float: "none"}
}, /* @__PURE__ */ react6.default.createElement("br", null), /* @__PURE__ */ react6.default.createElement("div", {
  style: {float: "right", color: "#fff", padding: "5px 10px 5px 15px"}
}, /* @__PURE__ */ react6.default.createElement("p", null, "Versão ", version)), /* @__PURE__ */ react6.default.createElement("h1", null, "CEFiTI"), /* @__PURE__ */ react6.default.createElement("div", {
  style: {float: "right", color: "#fff", padding: "5px 10px 5px 15px"}
}, /* @__PURE__ */ react6.default.createElement("p", null, "Data: ", new Date().toLocaleDateString())), /* @__PURE__ */ react6.default.createElement("h2", null, "Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual")), /* @__PURE__ */ react6.default.createElement("div", {
  id: "dados-login"
}))), /* @__PURE__ */ react6.default.createElement(menu_default, null));

// src/botton.tsx
const react7 = __toModule(require_react());
const Botton = () => /* @__PURE__ */ react7.default.createElement("div", {
  id: "botton"
}, /* @__PURE__ */ react7.default.createElement("p", {
  className: "small center"
}, "As informações apresentadas não substituem o texto legal vigente, publicado em Diário Oficial da União, e referem-se a requisitos fitossanitários, não dispensando outras exigências estabelecidas em normas específicas. No caso de interceptação de praga, serão adotados os procedimentos constantes do Decreto 24.114, de 12 de abril de 1934. Quando se tratar de material de multiplicação ou propagação vegetal deverá ser observada a Legislação de Sementes e Mudas."), /* @__PURE__ */ react7.default.createElement("br", null), /* @__PURE__ */ react7.default.createElement("p", {
  className: "small red center "
}, "Em caso de dúvida, sugestão de melhoria ou de correção, entrar em contato no e-mail abaixo."), /* @__PURE__ */ react7.default.createElement("br", null), /* @__PURE__ */ react7.default.createElement("div", null, /* @__PURE__ */ react7.default.createElement("h5", {
  className: "center"
}, "Departamento de Sanidade Vegetal - DSV/SDA/MAPA"), /* @__PURE__ */ react7.default.createElement("h5", {
  className: "center"
}, "Desenvolvido pelo SSV-MT -", /* @__PURE__ */ react7.default.createElement("a", {
  href: "mailto:ssv-mt@agricultura.gov.br"
}, "ssv-mt@agricultura.gov.br")), /* @__PURE__ */ react7.default.createElement("h6", {
  className: "center"
}, "Código fonte:", /* @__PURE__ */ react7.default.createElement("a", {
  href: "https://github.com/cefiti/cefiti"
}, "https://github.com/cefiti/cefiti"))));

// src/app.tsx
const react8 = __toModule(require_react());
const App = () => /* @__PURE__ */ react8.default.createElement("div", {
  id: "resolucao"
}, /* @__PURE__ */ react8.default.createElement(Head, null), /* @__PURE__ */ react8.default.createElement("div", {
  id: "corpo"
}, /* @__PURE__ */ react8.default.createElement("div", {
  id: "conteúdo"
}, /* @__PURE__ */ react8.default.createElement(form_default, null), /* @__PURE__ */ react8.default.createElement(result_default, null), /* @__PURE__ */ react8.default.createElement(base_default, null))), /* @__PURE__ */ react8.default.createElement(Botton, null));

// src/index.tsx
const react9 = __toModule(require_react());
const react_dom = __toModule(require_react_dom());
react_dom.default.render(/* @__PURE__ */ react9.default.createElement(App, null), document.getElementById("root"));