function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import RcSwitch from 'rc-switch';
import classNames from 'classnames';
import omit from 'omit.js';
import { LoadingOutlined } from '@ant-design/icons';
import Wave from '../_util/wave';
import { ConfigConsumer } from '../config-provider';
import warning from '../_util/warning';

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));

    _this.saveSwitch = function (node) {
      _this.rcSwitch = node;
    };

    _this.renderSwitch = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          size = _this$props.size,
          loading = _this$props.loading,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          disabled = _this$props.disabled;
      var prefixCls = getPrefixCls('switch', customizePrefixCls);
      var classes = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
      var loadingIcon = loading ? React.createElement(LoadingOutlined, {
        className: "".concat(prefixCls, "-loading-icon")
      }) : null;
      return React.createElement(Wave, {
        insertExtraNode: true
      }, React.createElement(RcSwitch, _extends({}, omit(_this.props, ['loading']), {
        prefixCls: prefixCls,
        className: classes,
        disabled: disabled || loading,
        ref: _this.saveSwitch,
        loadingIcon: loadingIcon
      })));
    };

    warning('checked' in props || !('value' in props), 'Switch', '`value` is not validate prop, do you mean `checked`?');
    return _this;
  }

  _createClass(Switch, [{
    key: "focus",
    value: function focus() {
      this.rcSwitch.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSwitch.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ConfigConsumer, null, this.renderSwitch);
    }
  }]);

  return Switch;
}(React.Component);

export { Switch as default };
Switch.__ANT_SWITCH = true;
//# sourceMappingURL=index.js.map
