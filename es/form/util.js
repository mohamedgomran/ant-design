function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { useForm as useRcForm } from 'rc-field-form';
import scrollIntoView from 'scroll-into-view-if-needed';
/**
 * Always debounce error to avoid [error -> null -> error] blink
 */

export function useCacheErrors(errors, changeTrigger) {
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
export function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}
export function getFieldId(namePath, formName) {
  if (!namePath.length) return undefined;
  var mergedId = namePath.join('_');
  return formName ? "".concat(formName, "_").concat(mergedId) : mergedId;
}
export function useForm(form) {
  var wrapForm = form || _extends(_extends({}, useRcForm()[0]), {
    __INTERNAL__: {},
    scrollToField: function scrollToField(name) {
      var namePath = toArray(name);
      var fieldId = getFieldId(namePath, wrapForm.__INTERNAL__.name);
      var node = fieldId ? document.getElementById(fieldId) : null;

      if (node) {
        scrollIntoView(node, {
          scrollMode: 'if-needed',
          block: 'nearest'
        });
      }
    }
  });

  return [wrapForm];
}
//# sourceMappingURL=util.js.map
