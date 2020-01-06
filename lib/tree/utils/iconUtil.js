"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderSwitcherIcon;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@ant-design/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderSwitcherIcon(prefixCls, switcherIcon, showLine, _ref) {
  var isLeaf = _ref.isLeaf,
      expanded = _ref.expanded,
      loading = _ref.loading;

  if (loading) {
    return _react["default"].createElement(_icons.LoadingOutlined, {
      className: "".concat(prefixCls, "-switcher-loading-icon")
    });
  }

  if (isLeaf) {
    if (showLine) {
      return _react["default"].createElement(_icons.FileOutlined, {
        className: "".concat(prefixCls, "-switcher-line-icon")
      });
    }

    return null;
  }

  var switcherCls = "".concat(prefixCls, "-switcher-icon");

  if (_react["default"].isValidElement(switcherIcon)) {
    var switcherOriginCls = switcherIcon.props.className || '';
    return _react["default"].cloneElement(switcherIcon, {
      className: (0, _classnames["default"])(switcherOriginCls, switcherCls)
    });
  }

  if (switcherIcon) {
    return switcherIcon;
  }

  if (showLine) {
    return expanded ? _react["default"].createElement(_icons.MinusSquareOutlined, {
      className: "".concat(prefixCls, "-switcher-line-icon")
    }) : _react["default"].createElement(_icons.PlusSquareOutlined, {
      className: "".concat(prefixCls, "-switcher-line-icon")
    });
  }

  return _react["default"].createElement(_icons.CaretDownFilled, {
    className: switcherCls
  });
}
//# sourceMappingURL=iconUtil.js.map