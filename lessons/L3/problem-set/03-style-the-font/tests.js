var Grader = (function() {

  /*!
   * @overview es6-promise - a tiny implementation of Promises/A+.
   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
   * @license   Licensed under MIT license
   *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
   * @version   3.0.2
   */
  if (!Promise) {
    (function(){"use strict";function lib$es6$promise$utils$$objectOrFunction(x){return typeof x==="function"||typeof x==="object"&&x!==null}function lib$es6$promise$utils$$isFunction(x){return typeof x==="function"}function lib$es6$promise$utils$$isMaybeThenable(x){return typeof x==="object"&&x!==null}var lib$es6$promise$utils$$_isArray;if(!Array.isArray){lib$es6$promise$utils$$_isArray=function(x){return Object.prototype.toString.call(x)==="[object Array]"}}else{lib$es6$promise$utils$$_isArray=Array.isArray}var lib$es6$promise$utils$$isArray=lib$es6$promise$utils$$_isArray;var lib$es6$promise$asap$$len=0;var lib$es6$promise$asap$$toString={}.toString;var lib$es6$promise$asap$$vertxNext;var lib$es6$promise$asap$$customSchedulerFn;var lib$es6$promise$asap$$asap=function asap(callback,arg){lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len]=callback;lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len+1]=arg;lib$es6$promise$asap$$len+=2;if(lib$es6$promise$asap$$len===2){if(lib$es6$promise$asap$$customSchedulerFn){lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush)}else{lib$es6$promise$asap$$scheduleFlush()}}};function lib$es6$promise$asap$$setScheduler(scheduleFn){lib$es6$promise$asap$$customSchedulerFn=scheduleFn}function lib$es6$promise$asap$$setAsap(asapFn){lib$es6$promise$asap$$asap=asapFn}var lib$es6$promise$asap$$browserWindow=typeof window!=="undefined"?window:undefined;var lib$es6$promise$asap$$browserGlobal=lib$es6$promise$asap$$browserWindow||{};var lib$es6$promise$asap$$BrowserMutationObserver=lib$es6$promise$asap$$browserGlobal.MutationObserver||lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;var lib$es6$promise$asap$$isNode=typeof process!=="undefined"&&{}.toString.call(process)==="[object process]";var lib$es6$promise$asap$$isWorker=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function lib$es6$promise$asap$$useNextTick(){return function(){process.nextTick(lib$es6$promise$asap$$flush)}}function lib$es6$promise$asap$$useVertxTimer(){return function(){lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush)}}function lib$es6$promise$asap$$useMutationObserver(){var iterations=0;var observer=new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);var node=document.createTextNode("");observer.observe(node,{characterData:true});return function(){node.data=iterations=++iterations%2}}function lib$es6$promise$asap$$useMessageChannel(){var channel=new MessageChannel;channel.port1.onmessage=lib$es6$promise$asap$$flush;return function(){channel.port2.postMessage(0)}}function lib$es6$promise$asap$$useSetTimeout(){return function(){setTimeout(lib$es6$promise$asap$$flush,1)}}var lib$es6$promise$asap$$queue=new Array(1e3);function lib$es6$promise$asap$$flush(){for(var i=0;i<lib$es6$promise$asap$$len;i+=2){var callback=lib$es6$promise$asap$$queue[i];var arg=lib$es6$promise$asap$$queue[i+1];callback(arg);lib$es6$promise$asap$$queue[i]=undefined;lib$es6$promise$asap$$queue[i+1]=undefined}lib$es6$promise$asap$$len=0}function lib$es6$promise$asap$$attemptVertx(){try{var r=require;var vertx=r("vertx");lib$es6$promise$asap$$vertxNext=vertx.runOnLoop||vertx.runOnContext;return lib$es6$promise$asap$$useVertxTimer()}catch(e){return lib$es6$promise$asap$$useSetTimeout()}}var lib$es6$promise$asap$$scheduleFlush;if(lib$es6$promise$asap$$isNode){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useNextTick()}else if(lib$es6$promise$asap$$BrowserMutationObserver){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useMutationObserver()}else if(lib$es6$promise$asap$$isWorker){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useMessageChannel()}else if(lib$es6$promise$asap$$browserWindow===undefined&&typeof require==="function"){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$attemptVertx()}else{lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useSetTimeout()}function lib$es6$promise$$internal$$noop(){}var lib$es6$promise$$internal$$PENDING=void 0;var lib$es6$promise$$internal$$FULFILLED=1;var lib$es6$promise$$internal$$REJECTED=2;var lib$es6$promise$$internal$$GET_THEN_ERROR=new lib$es6$promise$$internal$$ErrorObject;function lib$es6$promise$$internal$$selfFulfillment(){return new TypeError("You cannot resolve a promise with itself")}function lib$es6$promise$$internal$$cannotReturnOwn(){return new TypeError("A promises callback cannot return that same promise.")}function lib$es6$promise$$internal$$getThen(promise){try{return promise.then}catch(error){lib$es6$promise$$internal$$GET_THEN_ERROR.error=error;return lib$es6$promise$$internal$$GET_THEN_ERROR}}function lib$es6$promise$$internal$$tryThen(then,value,fulfillmentHandler,rejectionHandler){try{then.call(value,fulfillmentHandler,rejectionHandler)}catch(e){return e}}function lib$es6$promise$$internal$$handleForeignThenable(promise,thenable,then){lib$es6$promise$asap$$asap(function(promise){var sealed=false;var error=lib$es6$promise$$internal$$tryThen(then,thenable,function(value){if(sealed){return}sealed=true;if(thenable!==value){lib$es6$promise$$internal$$resolve(promise,value)}else{lib$es6$promise$$internal$$fulfill(promise,value)}},function(reason){if(sealed){return}sealed=true;lib$es6$promise$$internal$$reject(promise,reason)},"Settle: "+(promise._label||" unknown promise"));if(!sealed&&error){sealed=true;lib$es6$promise$$internal$$reject(promise,error)}},promise)}function lib$es6$promise$$internal$$handleOwnThenable(promise,thenable){if(thenable._state===lib$es6$promise$$internal$$FULFILLED){lib$es6$promise$$internal$$fulfill(promise,thenable._result)}else if(thenable._state===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,thenable._result)}else{lib$es6$promise$$internal$$subscribe(thenable,undefined,function(value){lib$es6$promise$$internal$$resolve(promise,value)},function(reason){lib$es6$promise$$internal$$reject(promise,reason)})}}function lib$es6$promise$$internal$$handleMaybeThenable(promise,maybeThenable){if(maybeThenable.constructor===promise.constructor){lib$es6$promise$$internal$$handleOwnThenable(promise,maybeThenable)}else{var then=lib$es6$promise$$internal$$getThen(maybeThenable);if(then===lib$es6$promise$$internal$$GET_THEN_ERROR){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$GET_THEN_ERROR.error)}else if(then===undefined){lib$es6$promise$$internal$$fulfill(promise,maybeThenable)}else if(lib$es6$promise$utils$$isFunction(then)){lib$es6$promise$$internal$$handleForeignThenable(promise,maybeThenable,then)}else{lib$es6$promise$$internal$$fulfill(promise,maybeThenable)}}}function lib$es6$promise$$internal$$resolve(promise,value){if(promise===value){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$selfFulfillment())}else if(lib$es6$promise$utils$$objectOrFunction(value)){lib$es6$promise$$internal$$handleMaybeThenable(promise,value)}else{lib$es6$promise$$internal$$fulfill(promise,value)}}function lib$es6$promise$$internal$$publishRejection(promise){if(promise._onerror){promise._onerror(promise._result)}lib$es6$promise$$internal$$publish(promise)}function lib$es6$promise$$internal$$fulfill(promise,value){if(promise._state!==lib$es6$promise$$internal$$PENDING){return}promise._result=value;promise._state=lib$es6$promise$$internal$$FULFILLED;if(promise._subscribers.length!==0){lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish,promise)}}function lib$es6$promise$$internal$$reject(promise,reason){if(promise._state!==lib$es6$promise$$internal$$PENDING){return}promise._state=lib$es6$promise$$internal$$REJECTED;promise._result=reason;lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection,promise)}function lib$es6$promise$$internal$$subscribe(parent,child,onFulfillment,onRejection){var subscribers=parent._subscribers;var length=subscribers.length;parent._onerror=null;subscribers[length]=child;subscribers[length+lib$es6$promise$$internal$$FULFILLED]=onFulfillment;subscribers[length+lib$es6$promise$$internal$$REJECTED]=onRejection;if(length===0&&parent._state){lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish,parent)}}function lib$es6$promise$$internal$$publish(promise){var subscribers=promise._subscribers;var settled=promise._state;if(subscribers.length===0){return}var child,callback,detail=promise._result;for(var i=0;i<subscribers.length;i+=3){child=subscribers[i];callback=subscribers[i+settled];if(child){lib$es6$promise$$internal$$invokeCallback(settled,child,callback,detail)}else{callback(detail)}}promise._subscribers.length=0}function lib$es6$promise$$internal$$ErrorObject(){this.error=null}var lib$es6$promise$$internal$$TRY_CATCH_ERROR=new lib$es6$promise$$internal$$ErrorObject;function lib$es6$promise$$internal$$tryCatch(callback,detail){try{return callback(detail)}catch(e){lib$es6$promise$$internal$$TRY_CATCH_ERROR.error=e;return lib$es6$promise$$internal$$TRY_CATCH_ERROR}}function lib$es6$promise$$internal$$invokeCallback(settled,promise,callback,detail){var hasCallback=lib$es6$promise$utils$$isFunction(callback),value,error,succeeded,failed;if(hasCallback){value=lib$es6$promise$$internal$$tryCatch(callback,detail);if(value===lib$es6$promise$$internal$$TRY_CATCH_ERROR){failed=true;error=value.error;value=null}else{succeeded=true}if(promise===value){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$cannotReturnOwn());return}}else{value=detail;succeeded=true}if(promise._state!==lib$es6$promise$$internal$$PENDING){}else if(hasCallback&&succeeded){lib$es6$promise$$internal$$resolve(promise,value)}else if(failed){lib$es6$promise$$internal$$reject(promise,error)}else if(settled===lib$es6$promise$$internal$$FULFILLED){lib$es6$promise$$internal$$fulfill(promise,value)}else if(settled===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,value)}}function lib$es6$promise$$internal$$initializePromise(promise,resolver){try{resolver(function resolvePromise(value){lib$es6$promise$$internal$$resolve(promise,value)},function rejectPromise(reason){lib$es6$promise$$internal$$reject(promise,reason)})}catch(e){lib$es6$promise$$internal$$reject(promise,e)}}function lib$es6$promise$enumerator$$Enumerator(Constructor,input){var enumerator=this;enumerator._instanceConstructor=Constructor;enumerator.promise=new Constructor(lib$es6$promise$$internal$$noop);if(enumerator._validateInput(input)){enumerator._input=input;enumerator.length=input.length;enumerator._remaining=input.length;enumerator._init();if(enumerator.length===0){lib$es6$promise$$internal$$fulfill(enumerator.promise,enumerator._result)}else{enumerator.length=enumerator.length||0;enumerator._enumerate();if(enumerator._remaining===0){lib$es6$promise$$internal$$fulfill(enumerator.promise,enumerator._result)}}}else{lib$es6$promise$$internal$$reject(enumerator.promise,enumerator._validationError())}}lib$es6$promise$enumerator$$Enumerator.prototype._validateInput=function(input){return lib$es6$promise$utils$$isArray(input)};lib$es6$promise$enumerator$$Enumerator.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")};lib$es6$promise$enumerator$$Enumerator.prototype._init=function(){this._result=new Array(this.length)};var lib$es6$promise$enumerator$$default=lib$es6$promise$enumerator$$Enumerator;lib$es6$promise$enumerator$$Enumerator.prototype._enumerate=function(){var enumerator=this;var length=enumerator.length;var promise=enumerator.promise;var input=enumerator._input;for(var i=0;promise._state===lib$es6$promise$$internal$$PENDING&&i<length;i++){enumerator._eachEntry(input[i],i)}};lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry=function(entry,i){var enumerator=this;var c=enumerator._instanceConstructor;if(lib$es6$promise$utils$$isMaybeThenable(entry)){if(entry.constructor===c&&entry._state!==lib$es6$promise$$internal$$PENDING){entry._onerror=null;enumerator._settledAt(entry._state,i,entry._result)}else{enumerator._willSettleAt(c.resolve(entry),i)}}else{enumerator._remaining--;enumerator._result[i]=entry}};lib$es6$promise$enumerator$$Enumerator.prototype._settledAt=function(state,i,value){var enumerator=this;var promise=enumerator.promise;if(promise._state===lib$es6$promise$$internal$$PENDING){enumerator._remaining--;if(state===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,value)}else{enumerator._result[i]=value}}if(enumerator._remaining===0){lib$es6$promise$$internal$$fulfill(promise,enumerator._result)}};lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt=function(promise,i){var enumerator=this;lib$es6$promise$$internal$$subscribe(promise,undefined,function(value){enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED,i,value)},function(reason){enumerator._settledAt(lib$es6$promise$$internal$$REJECTED,i,reason)})};function lib$es6$promise$promise$all$$all(entries){return new lib$es6$promise$enumerator$$default(this,entries).promise}var lib$es6$promise$promise$all$$default=lib$es6$promise$promise$all$$all;function lib$es6$promise$promise$race$$race(entries){var Constructor=this;var promise=new Constructor(lib$es6$promise$$internal$$noop);if(!lib$es6$promise$utils$$isArray(entries)){lib$es6$promise$$internal$$reject(promise,new TypeError("You must pass an array to race."));return promise}var length=entries.length;function onFulfillment(value){lib$es6$promise$$internal$$resolve(promise,value)}function onRejection(reason){lib$es6$promise$$internal$$reject(promise,reason)}for(var i=0;promise._state===lib$es6$promise$$internal$$PENDING&&i<length;i++){lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]),undefined,onFulfillment,onRejection)}return promise}var lib$es6$promise$promise$race$$default=lib$es6$promise$promise$race$$race;function lib$es6$promise$promise$resolve$$resolve(object){var Constructor=this;if(object&&typeof object==="object"&&object.constructor===Constructor){return object}var promise=new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$resolve(promise,object);return promise}var lib$es6$promise$promise$resolve$$default=lib$es6$promise$promise$resolve$$resolve;function lib$es6$promise$promise$reject$$reject(reason){var Constructor=this;var promise=new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$reject(promise,reason);return promise}var lib$es6$promise$promise$reject$$default=lib$es6$promise$promise$reject$$reject;var lib$es6$promise$promise$$counter=0;function lib$es6$promise$promise$$needsResolver(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function lib$es6$promise$promise$$needsNew(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var lib$es6$promise$promise$$default=lib$es6$promise$promise$$Promise;function lib$es6$promise$promise$$Promise(resolver){this._id=lib$es6$promise$promise$$counter++;this._state=undefined;this._result=undefined;this._subscribers=[];if(lib$es6$promise$$internal$$noop!==resolver){if(!lib$es6$promise$utils$$isFunction(resolver)){lib$es6$promise$promise$$needsResolver()}if(!(this instanceof lib$es6$promise$promise$$Promise)){lib$es6$promise$promise$$needsNew()}lib$es6$promise$$internal$$initializePromise(this,resolver)}}lib$es6$promise$promise$$Promise.all=lib$es6$promise$promise$all$$default;lib$es6$promise$promise$$Promise.race=lib$es6$promise$promise$race$$default;lib$es6$promise$promise$$Promise.resolve=lib$es6$promise$promise$resolve$$default;lib$es6$promise$promise$$Promise.reject=lib$es6$promise$promise$reject$$default;lib$es6$promise$promise$$Promise._setScheduler=lib$es6$promise$asap$$setScheduler;lib$es6$promise$promise$$Promise._setAsap=lib$es6$promise$asap$$setAsap;lib$es6$promise$promise$$Promise._asap=lib$es6$promise$asap$$asap;lib$es6$promise$promise$$Promise.prototype={constructor:lib$es6$promise$promise$$Promise,then:function(onFulfillment,onRejection){var parent=this;var state=parent._state;if(state===lib$es6$promise$$internal$$FULFILLED&&!onFulfillment||state===lib$es6$promise$$internal$$REJECTED&&!onRejection){return this}var child=new this.constructor(lib$es6$promise$$internal$$noop);var result=parent._result;if(state){var callback=arguments[state-1];lib$es6$promise$asap$$asap(function(){lib$es6$promise$$internal$$invokeCallback(state,child,callback,result)})}else{lib$es6$promise$$internal$$subscribe(parent,child,onFulfillment,onRejection)}return child},"catch":function(onRejection){return this.then(null,onRejection)}};function lib$es6$promise$polyfill$$polyfill(){var local;if(typeof global!=="undefined"){local=global}else if(typeof self!=="undefined"){local=self}else{try{local=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var P=local.Promise;if(P&&Object.prototype.toString.call(P.resolve())==="[object Promise]"&&!P.cast){return}local.Promise=lib$es6$promise$promise$$default}var lib$es6$promise$polyfill$$default=lib$es6$promise$polyfill$$polyfill;var lib$es6$promise$umd$$ES6Promise={Promise:lib$es6$promise$promise$$default,polyfill:lib$es6$promise$polyfill$$default};if(typeof define==="function"&&define["amd"]){define(function(){return lib$es6$promise$umd$$ES6Promise})}else if(typeof module!=="undefined"&&module["exports"]){module["exports"]=lib$es6$promise$umd$$ES6Promise}else if(typeof this!=="undefined"){this["ES6Promise"]=lib$es6$promise$umd$$ES6Promise}lib$es6$promise$polyfill$$default()}).call(this);
  }

  // http://stackoverflow.com/questions/1068834/object-comparison-in-javascript?lq=1
  function deepCompare () {
    var i, l, leftChain, rightChain;

    function compare2Objects (x, y) {
      var p;

      // remember that NaN === NaN returns false
      // and isNaN(undefined) returns true
      if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
        return true;
      }

      // Compare primitives and functions.
      // Check if both arguments link to the same object.
      // Especially useful on step when comparing prototypes
      if (x === y) {
        return true;
      }

      // Works in case when functions are created in constructor.
      // Comparing dates is a common scenario. Another built-ins?
      // We can even handle functions passed across iframes
      if ((typeof x === 'function' && typeof y === 'function') ||
        (x instanceof Date && y instanceof Date) ||
        (x instanceof RegExp && y instanceof RegExp) ||
        (x instanceof String && y instanceof String) ||
        (x instanceof Number && y instanceof Number)) {
          return x.toString() === y.toString();
      }

      // At last checking prototypes as good a we can
      if (!(x instanceof Object && y instanceof Object)) {
        return false;
      }

      if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
        return false;
      }

      if (x.constructor !== y.constructor) {
        return false;
      }

      if (x.prototype !== y.prototype) {
        return false;
      }

      // Check for infinitive linking loops
      if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
         return false;
      }

      // Quick checking of one object beeing a subset of another.
      // todo: cache the structure of arguments[0] for performance
      for (p in y) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
          return false;
        }
        else if (typeof y[p] !== typeof x[p]) {
          return false;
        }
      }

      for (p in x) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
          return false;
        }
        else if (typeof y[p] !== typeof x[p]) {
          return false;
        }

        switch (typeof (x[p])) {
          case 'object':
          case 'function':
            leftChain.push(x);
            rightChain.push(y);

            if (!compare2Objects (x[p], y[p])) {
              return false;
            }

            leftChain.pop();
            rightChain.pop();
            break;

          default:
            if (x[p] !== y[p]) {
              return false;
            }
            break;
        }
      }

      return true;
    }

    if (arguments.length < 1) {
      return true; //Die silently? Don't know how to handle such case, please help...
      // throw "Need two or more arguments to compare";
    }

    for (i = 1, l = arguments.length; i < l; i++) {

      leftChain = []; //Todo: this can be cached
      rightChain = [];

      if (!compare2Objects(arguments[0], arguments[i])) {
        return false;
      }
    }
    return true;
  }

  function Queue (grader) {
    this.grader = grader;
    this.gradingSteps = [];
    this.flushing = false;
    this.alwaysGo = false;
  };

  Queue.prototype = {
    add: function(callback, messages, keepGoing) {
      if (keepGoing !== false) {
        keepGoing = true;
      }

      if (!callback) {
        throw new Error("Every test added to the queue must have a valid function.");
      }

      this.gradingSteps.push({
        callback: callback,
        isCorrect: false,
        wrongMessage: messages.wrongMessage || null,
        comment: messages.comment || null,
        category: messages.category || null,
        keepGoing: keepGoing
      });
    },

    _flush: function () {
      if (!this.flushing) {
        this.flushing = true;
      }
      this.step();
    },

    clear: function () {
      this.flushing = false;
      this.gradingSteps = [];
      this.grader.endTests();
    },

    step: function () {
      var self = this;
      if (this.gradingSteps.length === 0) {
        this.clear();
      }

      function executeInPromise (fn) {
        return new Promise(function (resolve, reject) {
          if (fn) {
            try {
              var result = fn();
            } catch (e) {
              self.clear();
              console.log(e);
            }
          }
          resolve(result);
        });
      };

      function takeNextStep (test, result) {
        test.isCorrect = result;

        self.registerResults(test);

        if (test.isCorrect || test.keepGoing || self.alwaysGo) {
          self.step();
        } else {
          self.clear();
        }
      };

      if (this.flushing) {
        var test = this.gradingSteps.shift();

        if (this.grader.async) {
          executeInPromise(test.callback).then(function (resolve) {
            takeNextStep(test, resolve);
          });
        } else if (!this.grader.async) {
          try {
            var result = test.callback();
          } catch (e) {
            console.log(e);
            throw new Error();
          }
          takeNextStep(test, result);
        }

      }
    },

    registerResults: function (test) {
      this.grader.registerResults(test);
    }
  };

  function Grader (type, categoryMessages) {
    var self = this;
    this.specificFeedback = [];
    this.comments = [];
    this.isCorrect = false;
    this.correctHasChanged = false;
    this.queue = new Queue(self);
    this.async = false;
    this.categoryMessages = null;
    this.generalFeedback = [];
    this.onresult = function () {};

    for (n in arguments) {
      switch (typeof arguments[n]) {
        case 'string':
          if (arguments[n] === 'async') {
            this.async = true;
          } else if (arguments[n] === 'sync') {
            this.async = false;
          } else {
            throw new Error("Invalid type argument in Grader constructor");
          }
          break;
        case 'object':
          this.categoryMessages = arguments[n];
          break;
        default:
          throw new TypeError("Invalid argument in Grader constructor");
          break;
      }
    }
  };

  Grader.prototype = {
    addTest: function (callback, messages, keepGoing) {
      this.queue.add(callback, messages, keepGoing);
    },

    runTests: function (options) {
      if (options) {
        this.queue.alwaysGo = options.ignoreCheckpoints || false;
      }
      this.queue._flush();
    },

    endTests: function () {
      if (this.queue.flushing) {
        this.queue.clear();
      } else {
        var results = this.gatherResults();
        this.onresult(results);
      }
    },

    registerResults: function (test) {
      this.generateSpecificFeedback(test);
      this.generateGeneralFeedback(test);
      this.setCorrect(test);
    },

    generateSpecificFeedback: function (test) {
      if (!test.isCorrect && test.wrongMessage) {
        this.addSpecificFeedback(test.wrongMessage);
      } else if (test.isCorrect && test.comment) {
        this.addComment(test.comment)
      }
    },

    generateGeneralFeedback: function (test) {
      if (!test.isCorrect && test.category) {
        if (this.generalFeedback.indexOf(this.categoryMessages[test.category]) === -1) {
          this.generalFeedback.push(this.categoryMessages[test.category]);
        }
      }
    },

    setCorrect: function (test) {
      if (this.correctHasChanged) {
        this.isCorrect = this.isCorrect && test.isCorrect;
      } else {
        this.correctHasChanged = true;
        this.isCorrect = test.isCorrect;
      }
    },

    addSpecificFeedback: function (feedback) {
      this.specificFeedback.push(feedback);
    },

    addComment: function (feedback) {
      this.comments.push(feedback);
    },

    gatherResults: function () {
      var self = this;
      return {
        isCorrect: self.isCorrect,
        testFeedback: self.specificFeedback.concat(self.generalFeedback),
        testComments: self.comments
      }
    },

    getFormattedWrongMessages: function (separator) {
      var allMessages, message;

      allMessages = this.specificFeedback.concat(this.generalFeedback);
      message = allMessages.join(separator);

      return message;
    },

    getFormattedComments: function (separator) {
      return this.comments.join(separator);
    },

    isType: function (value, expectedType) {
      var isCorrect = false;

      if (typeof value !== expectedType) {

        if (typeof value === 'function') {
          value = value.name;
        };

        isCorrect = false;
      } else if (typeof value === expectedType){
        isCorrect = true;
      }
      return isCorrect;
    },

    isInstance: function (value, expectedInstance) {
      var isCorrect = false;

      if (value instanceof expectedInstance !== true) {

        isCorrect = false;
      } else if (value instanceof expectedInstance === true){
        isCorrect = true;
      }
      return isCorrect;
    },

    isValue: function (value1, value2) {
      var isCorrect = false;

      if (!deepCompare(value1, value2)) {
        isCorrect = false;
      } else if (deepCompare(value1, value2)) {
        isCorrect = true;
      }
      return isCorrect;
    },

    isInRange: function (value, lower, upper) {
      var isCorrect = false;

      if (typeof value !== 'number' || isNaN(value)) {
        isCorrect = false
      } else if (value > upper || value < lower) {
        isCorrect = false;

      } else if (value < upper || value > lower) {
        isCorrect = true;
      }
      return isCorrect;
    },

    isSet: function (value) {
      var isCorrect = false;

      if (value === undefined) {
        isCorrect = false;

      } else {
        isCorrect = true;
      }
      return isCorrect;
    },

    isjQuery: function (elem) {
      // could use obj.jquery, which will only return true if it is a jquery object
      var isjQ = false;
      if (elem instanceof $) {
        isjQ = true;
      }
      return isjQ;
    },

    hasCorrectTag: function (elem, tag) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var hasTag = false;
      if (elem.is(tag)) {
        hasTag = true;
      }
      return hasTag;
    },

    hasCorrectClass: function (elem, className) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var hasClass = false;
      if (elem.hasClass(className)) {
        hasClass = true;
      }
      return hasClass;
    },

    hasCorrectId: function (elem, id) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      if (elem.is('#' + id)) return true;
      return false;
    },

    hasCorrectText: function (elem, text) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var hasText = false;
      var re = new RegExp(text);
      if (elem.text().match(re)) {
        hasText = true;
      }
      return hasText;
    },

    hasAttr: function (elem, attrName, correctAttr) {
      var isCorrect = false;
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      if (correctAttr && elem.attr(attrName) === correctAttr) {
        isCorrect = true;
      } else if (!correctAttr && elem.attr(attrName)) {
        isCorrect = true;
      }
      return isCorrect;
    },

    hasCorrectLength: function (elems, _length) {
      if (!this.isjQuery(elems)) {
        elems = $(elems);
      }
      var correctLength = false;
      var cLength = elems.length;
      if (cLength === _length) {
        correctLength = true;
      }
      return correctLength;
    },

    isCorrectElem: function (elem, correctElem) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var is = false;
      if (elem.is(correctElem)) {
        is = true;
      }
      return is;
    },

    isCorrectCollection: function (collection, correctCollection) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var is = false;
      if (collection.is(correctCollection)) {
        is = true;
      }
      return is;
    },

    hasCorrectStyle: function (elem, cssProperty, _correctStyle) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var hasCorrectStyle = false;
      /* if one style is passed, convert to array */
      if (typeof _correctStyle === 'string') {
        _correctStyle = [_correctStyle];
      }
      var currentStyle = elem.css(cssProperty);
      for (var i = 0; i < _correctStyle.length; i++) {
          if (currentStyle === _correctStyle[i]) {
            hasCorrectStyle = true;
          }
       }
      return hasCorrectStyle;
    },

    hasCorrectFont: function (elem, cssProperty, _correctStyle) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var hasCorrectStyle = false;
      /* if one style is passed, convert to array */
      if (typeof _correctStyle === 'string') {
        _correctStyle = [_correctStyle];
      }
      var fonts = elem.css(cssProperty);
      fonts = fonts.split(',');
      var currentStyle = detectFont(fonts);
      for (var i = 0; i < _correctStyle.length; i++) {
          if (currentStyle === _correctStyle[i]) {
            hasCorrectStyle = true;
          }
       }
      return hasCorrectStyle;
    },

    propertyIsLessThan : function (elem, cssProperty, value) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var is = false;
      if (elem.css(cssProperty) < value) {
        is = true;
      }
      return is;
    },

    propertyIsGreaterThan : function (elem, cssProperty, value) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var is = false;
      if (elem.css(cssProperty) > value) {
        is = true;
      }
      return is;
    },

    doesExistInParent: function (elem, parentElem) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      if (!this.isjQuery(parentElem)) {
        parentElem = $(parentElem);
      }
      var inParent = false;
      if (parentElem.find(elem).length > 0) {
        inParent = true;
      }
      return inParent;
    },

    elemDoesExist: function (elem) {
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      var exists = false;
      if (elem.length > 0) {
        exists = true;
      }
      return exists;
    },

    areSiblings: function (elem1, elem2) {
      if (!this.isjQuery(elem1)) {
        elem1 = $(elem1);
      }
      if (!this.isjQuery(elem2)) {
        elem2 = $(elem2);
      }
      var siblingLove = false;
      if (elem1.siblings(elem2).length > 0) {
        siblingLove = true;
      }
      return siblingLove;
    },

    isImmediateChild: function (elem, parentElem) {
      var isCorrect = false;
      if (this.isjQuery(elem)) {
        throw new Error("elem needs to be a string for Grader.isImmediateChild()");
      }
      if (!this.isjQuery(parentElem)) {
        parentElem = $(parentElem);
      }
      if (parentElem.children(elem).length > 0) {
        isCorrect = true;
      }
      return isCorrect;
    },

    hasParent: function (elem, parentElem) {
      var isCorrect = false;
      if (this.isjQuery(parentElem)) {
        throw new Error("parentElem needs to be a string for Grader.hasParent()");
      }
      if (!this.isjQuery(elem)) {
        elem = $(elem);
      }
      if (elem.closest(parentElem).length > 0) {
        isCorrect = true;
      }
      return isCorrect;
    },

    sendResultsToExecutor: function () {
      var output = {
        isCorrect: false,
        test_feedback: "",
        test_comments: "",
        congrats: ""
      }
      for (arg in arguments) {
        var thisIsCorrect = arguments[arg].isCorrect;
        var thisTestFeedback = arguments[arg].getFormattedWrongMessages();
        var thisTestComment = arguments[arg].getFormattedComments();
        if (typeof thisIsCorrect !== 'boolean') {
          thisIsCorrect = false;
        }

        switch (arg) {
          case '0':
            output.congrats = arguments[arg];
          case '1':
            output.isCorrect = thisIsCorrect;
            output.test_feedback = thisTestFeedback;
            output.test_comments = thisTestComment;
            break;
          default:
            output.isCorrect = thisIsCorrect && output.isCorrect;
            if (output.test_feedback !== "") {
              output.test_feedback = [output.test_feedback, thisTestFeedback].join('\n');
            } else {
              output.test_feedback = thisTestFeedback;
            }

            if (output.test_comments !== "") {
              output.test_comments = [output.test_comments, thisTestFeedback].join('\n');
            } else {
              output.test_comments = thisTestComment;
            }
            break;
        }
      }
      output = JSON.stringify(output);
      console.info("UDACITY_RESULT:" + output);
    }
  }
  return Grader;
})();

function performTesting() {
  return {'result': 'noop'}
}

/**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.15 (21 Sep 2009)
 *          Changed comparision font to default from sans-default-default,
 *          as in FF3.0 font of child element didn't fallback
 *          to parent element if the font is missing.
 * Version: 0.2 (04 Mar 2012)
 *          Comparing font against all the 3 generic font families ie,
 *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
 *          then that font is 100% not available in the system
 * Version: 0.3 (24 Mar 2012)
 *          Replaced sans with serif in the list of baseFonts
 */

var Detector = function() {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    }

    this.detect = detect;
};

function detectFont(fonts) {
  var detective = new Detector(), i;
  for (i = 0; i < fonts.length; ++i) {
    if (detective.detect(fonts[i]) !== true) {
      continue
    }
    return fonts[i];
  }
}

function performSubmission() {
  var grader = new Grader({
    // can add shared messages here
  });

  grader.addTest(function() {
    return grader.hasCorrectText($('.udacity-text'), '^udacity$');
  }, {
    wrongMessage: "Did you change the text in the <h1></h1> tags?\nIf you want to capitalize \"udacity\" use CSS instead."
  }, false);

  grader.addTest(function() {
    return grader.hasCorrectStyle($('.udacity-text'), 'text-transform', 'uppercase');
  }, {
    wrongMessage: "\"udacity\" should be in ALL CAPS. Use the CSS property text-transform to change it."
  }, false);

  grader.addTest(function() {
    return grader.hasCorrectStyle($('.udacity-text'), 'text-decoration', 'underline');
  }, {
    wrongMessage: "The underline is missing. Check out the possible values for text-decoration."
  }, false);

  grader.addTest(function() {
    return grader.hasCorrectStyle($('.udacity-text'), 'color', 'rgb(128, 1, 255)');
  }, {
    wrongMessage: "The text should be colored purple. Use the hex value #8001ff."
  }, false);

  grader.addTest(function() {
    return grader.hasCorrectStyle($('.udacity-text'), 'font-size', '60px');
  }, {
    wrongMessage: "The font-size doesn't look quite right."
  });

  grader.addTest(function() {
    return grader.propertyIsGreaterThan($('.udacity-text'), 'font-size', '59px');
  }, {
    wrongMessage: "Try increasing the font-size to 60px."
  }, false);

  grader.addTest(function() {
    return grader.propertyIsLessThan($('.udacity-text'), 'font-size', '61px');
  }, {
    wrongMessage: "Try decreasing the font-size to 60px."
  }, false);

  grader.addTest(function() {
    return grader.hasCorrectFont($('.udacity-text'), 'font-family', ['arial', 'Arial', 'helvetica', 'Helvetica', 'sans-serif', 'Sans-serif']);
  }, {
    wrongMessage: "The text is using the wrong font.\nCheck out websafe, sans-serif fonts like Arial or Helvetica."
  });

  grader.runTests();

  result = {
    is_correct: grader.isCorrect,
    test_feedback: grader.getFormattedWrongMessages('\n'),
    test_comments: grader.getFormattedComments('\n'),
    congrats: "Perfect! There are a lot properties you can use to change font styles."
  };
  return result;
};