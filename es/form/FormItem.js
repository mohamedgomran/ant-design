function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { Field } from 'rc-field-form';
import omit from 'omit.js';
import Row from '../grid/row';
import { ConfigContext } from '../config-provider';
import { tuple } from '../_util/type';
import warning from '../_util/warning';
import FormItemLabel from './FormItemLabel';
import FormItemInput from './FormItemInput';
import { FormContext, FormItemContext } from './context';
import { toArray, getFieldId } from './util';
var ValidateStatuses = tuple('success', 'warning', 'error', 'validating', '');

var FormItem = function FormItem(props) {
  var name = props.name,
      fieldKey = props.fieldKey,
      noStyle = props.noStyle,
      dependencies = props.dependencies,
      customizePrefixCls = props.prefixCls,
      style = props.style,
      className = props.className,
      shouldUpdate = props.shouldUpdate,
      hasFeedback = props.hasFeedback,
      help = props.help,
      rules = props.rules,
      validateStatus = props.validateStatus,
      children = props.children,
      required = props.required,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'onChange' : _props$trigger,
      _props$validateTrigge = props.validateTrigger,
      validateTrigger = _props$validateTrigge === void 0 ? 'onChange' : _props$validateTrigge,
      restProps = __rest(props, ["name", "fieldKey", "noStyle", "dependencies", "prefixCls", "style", "className", "shouldUpdate", "hasFeedback", "help", "rules", "validateStatus", "children", "required", "trigger", "validateTrigger"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var formContext = React.useContext(FormContext);

  var _React$useContext2 = React.useContext(FormItemContext),
      updateItemErrors = _React$useContext2.updateItemErrors;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      domErrorVisible = _React$useState2[0],
      setDomErrorVisible = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      inlineErrors = _React$useState4[0],
      setInlineErrors = _React$useState4[1];

  var formName = formContext.name; // Cache Field NamePath

  var nameRef = React.useRef([]); // Should clean up if Field removed

  React.useEffect(function () {
    return function () {
      updateItemErrors(nameRef.current.join('__SPLIT__'), []);
    };
  }, []);
  var prefixCls = getPrefixCls('form', customizePrefixCls);
  return React.createElement(Field, _extends({}, props, {
    trigger: trigger,
    validateTrigger: validateTrigger,
    onReset: function onReset() {
      setDomErrorVisible(false);
    }
  }), function (control, meta, context) {
    var _itemClassName;

    var errors = meta.errors,
        metaName = meta.name;
    var mergedName = toArray(name).length ? metaName : []; // ======================== Errors ========================
    // Collect noStyle Field error to the top FormItem

    var updateChildItemErrors = noStyle ? updateItemErrors : function (subName, subErrors) {
      if (!isEqual(inlineErrors[subName], subErrors)) {
        setInlineErrors(_extends(_extends({}, inlineErrors), _defineProperty({}, subName, subErrors)));
      }
    };

    if (noStyle) {
      nameRef.current = _toConsumableArray(mergedName);

      if (fieldKey) {
        nameRef.current[nameRef.current.length - 1] = fieldKey;
      }

      updateItemErrors(nameRef.current.join('__SPLIT__'), errors);
    }

    var mergedErrors;

    if (help) {
      mergedErrors = toArray(help);
    } else {
      mergedErrors = errors;
      Object.keys(inlineErrors).forEach(function (subName) {
        var subErrors = inlineErrors[subName] || [];

        if (subErrors.length) {
          mergedErrors = [].concat(_toConsumableArray(mergedErrors), _toConsumableArray(subErrors));
        }
      });
    } // ======================== Status ========================


    var mergedValidateStatus = '';

    if (validateStatus !== undefined) {
      mergedValidateStatus = validateStatus;
    } else if (meta.validating) {
      mergedValidateStatus = 'validating';
    } else if (!help && mergedErrors.length) {
      mergedValidateStatus = 'error';
    } else if (meta.touched) {
      mergedValidateStatus = 'success';
    } // ====================== Class Name ======================


    var itemClassName = (_itemClassName = {}, _defineProperty(_itemClassName, "".concat(prefixCls, "-item"), true), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-with-help"), domErrorVisible || help), _defineProperty(_itemClassName, "".concat(className), !!className), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-feedback"), mergedValidateStatus && hasFeedback || mergedValidateStatus === 'validating'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-success"), mergedValidateStatus === 'success'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-warning"), mergedValidateStatus === 'warning'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-error"), mergedValidateStatus === 'error'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-error-leave"), !help && domErrorVisible && mergedValidateStatus !== 'error'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-is-validating"), mergedValidateStatus === 'validating'), _itemClassName);
    var isRequired = required !== undefined ? required : !!(rules && rules.some(function (rule) {
      if (rule && _typeof(rule) === 'object' && rule.required) {
        return true;
      }

      if (typeof rule === 'function') {
        var ruleEntity = rule(context);
        return ruleEntity && ruleEntity.required;
      }

      return false;
    })); // ======================= Children =======================

    var fieldId = getFieldId(mergedName, formName);

    var mergedControl = _extends(_extends({}, control), {
      id: fieldId
    });

    var childNode;

    if (Array.isArray(children) && !!name) {
      warning(false, 'Form.Item', '`children` is array of render props cannot have `name`.');
      childNode = children;
    } else if (typeof children === 'function' && (!shouldUpdate || !!name)) {
      warning(false, 'Form.Item', '`children` of render props only work with `shouldUpdate`.');
    } else if (!mergedName.length && !shouldUpdate && !dependencies) {
      childNode = children;
    } else if (React.isValidElement(children)) {
      var childProps = _extends(_extends({}, children.props), mergedControl); // We should keep user origin event handler


      var triggers = new Set();
      [].concat(_toConsumableArray(toArray(trigger)), _toConsumableArray(toArray(validateTrigger))).forEach(function (eventName) {
        triggers.add(eventName);
      });
      triggers.forEach(function (eventName) {
        if (eventName in mergedControl && eventName in children.props) {
          childProps[eventName] = function () {
            var _children$props;

            mergedControl[eventName].apply(mergedControl, arguments);

            (_children$props = children.props)[eventName].apply(_children$props, arguments);
          };
        }
      });
      childNode = React.cloneElement(children, childProps);
    } else if (typeof children === 'function' && shouldUpdate && !name) {
      childNode = children(context);
    } else {
      warning(!mergedName.length, 'Form.Item', '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.');
      childNode = children;
    }

    if (noStyle) {
      return childNode;
    }

    return React.createElement(Row, _extends({
      className: classNames(itemClassName),
      style: style,
      key: "row"
    }, omit(restProps, ['colon', 'extra', 'getValueFromEvent', 'hasFeedback', 'help', 'htmlFor', 'id', 'label', 'labelAlign', 'labelCol', 'normalize', 'required', 'validateStatus', 'valuePropName', 'wrapperCol'])), React.createElement(FormItemLabel, _extends({
      htmlFor: fieldId
    }, props, {
      required: isRequired,
      prefixCls: prefixCls
    })), React.createElement(FormItemInput, _extends({}, props, meta, {
      errors: mergedErrors,
      prefixCls: prefixCls,
      onDomErrorVisibleChange: setDomErrorVisible,
      validateStatus: mergedValidateStatus
    }), React.createElement(FormItemContext.Provider, {
      value: {
        updateItemErrors: updateChildItemErrors
      }
    }, childNode)));
  });
};

export default FormItem;
//# sourceMappingURL=FormItem.js.map