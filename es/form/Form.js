function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import omit from 'omit.js';
import classNames from 'classnames';
import FieldForm, { List } from 'rc-field-form';
import { ConfigContext } from '../config-provider';
import { FormContext } from './context';
import { useForm } from './util';

var InternalForm = function InternalForm(props, ref) {
  var _classNames;

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var form = props.form,
      colon = props.colon,
      name = props.name,
      labelAlign = props.labelAlign,
      labelCol = props.labelCol,
      wrapperCol = props.wrapperCol,
      customizePrefixCls = props.prefixCls,
      hideRequiredMark = props.hideRequiredMark,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'horizontal' : _props$layout;
  var prefixCls = getPrefixCls('form', customizePrefixCls);
  var formClassName = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(layout), true), _defineProperty(_classNames, "".concat(prefixCls, "-hide-required-mark"), hideRequiredMark), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var formProps = omit(props, ['prefixCls', 'className', 'layout', 'hideRequiredMark', 'wrapperCol', 'labelAlign', 'labelCol', 'colon']);

  var _useForm = useForm(form),
      _useForm2 = _slicedToArray(_useForm, 1),
      wrapForm = _useForm2[0];

  wrapForm.__INTERNAL__.name = name;
  React.useImperativeHandle(ref, function () {
    return wrapForm;
  });
  return React.createElement(FormContext.Provider, {
    value: {
      name: name,
      labelAlign: labelAlign,
      labelCol: labelCol,
      wrapperCol: wrapperCol,
      vertical: layout === 'vertical',
      colon: colon
    }
  }, React.createElement(FieldForm, _extends({
    id: name
  }, formProps, {
    form: wrapForm,
    className: formClassName
  })));
};

var Form = React.forwardRef(InternalForm);
export { useForm, List };
export default Form;
//# sourceMappingURL=Form.js.map