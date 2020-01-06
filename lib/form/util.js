"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCacheErrors = useCacheErrors;
exports.toArray = toArray;
exports.getFieldId = getFieldId;
exports.useForm = useForm;

var React = _interopRequireWildcard(require("react"));

var _rcFieldForm = require("rc-field-form");

var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Always debounce error to avoid [error -> null -> error] blink
 */
function useCacheErrors(errors, changeTrigger) {
  var cacheRef = React.useRef({
    errors: errors,
    visible: !!errors.length
  });
  React.useEffect(function () {
    var timeout = setTimeout(function () {
      var prevVisible = cacheRef.current.visible;
      var newVisible = !!errors.length;
      cacheRef.current.errors = errors;
      cacheRef.current.visible = newVisible;

      if (prevVisible !== newVisible) {
        changeTrigger(newVisible);
      }
    }, 10);
    return function () {
      return clearTimeout(timeout);
    };
  }, [errors]);
  return [cacheRef.current.visible, cacheRef.current.errors];
}

function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}

function getFieldId(namePath, formName) {
  if (!namePath.length) return undefined;
  var mergedId = namePath.join('_');
  return formName ? "".concat(formName, "_").concat(mergedId) : mergedId;
}

function useForm(form) {
  var wrapForm = form || _extends(_extends({}, (0, _rcFieldForm.useForm)()[0]), {
    __INTERNAL__: {},
    scrollToField: function scrollToField(name) {
      var namePath = toArray(name);
      var fieldId = getFieldId(namePath, wrapForm.__INTERNAL__.name);
      var node = fieldId ? document.getElementById(fieldId) : null;

      if (node) {
        (0, _scrollIntoViewIfNeeded["default"])(node, {
          scrollMode: 'if-needed',
          block: 'nearest'
        });
      }
    }
  });

  return [wrapForm];
}
//# sourceMappingURL=util.js.map
