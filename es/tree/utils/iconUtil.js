import React from 'react';
import classNames from 'classnames';
import { LoadingOutlined, FileOutlined, MinusSquareOutlined, PlusSquareOutlined, CaretDownFilled } from '@ant-design/icons';
export default function renderSwitcherIcon(prefixCls, switcherIcon, showLine, _ref) {
  var isLeaf = _ref.isLeaf,
      expanded = _ref.expanded,
      loading = _ref.loading;

  if (loading) {
    return React.createElement(LoadingOutlined, {
      className: "".concat(prefixCls, "-switcher-loading-icon")
    });
  }

  if (isLeaf) {
    if (showLine) {
      return React.createElement(FileOutlined, {
        className: "".concat(prefixCls, "-switcher-line-icon")
      });
    }

    return null;
  }

  var switcherCls = "".concat(prefixCls, "-switcher-icon");

  if (React.isValidElement(switcherIcon)) {
    var switcherOriginCls = switcherIcon.props.className || '';
    return React.cloneElement(switcherIcon, {
      className: classNames(switcherOriginCls, switcherCls)
    });
  }

  if (switcherIcon) {
    return switcherIcon;
  }

  if (showLine) {
    return expanded ? React.createElement(MinusSquareOutlined, {
      className: "".concat(prefixCls, "-switcher-line-icon")
    }) : React.createElement(PlusSquareOutlined, {
      className: "".concat(prefixCls, "-switcher-line-icon")
    });
  }

  return React.createElement(CaretDownFilled, {
    className: switcherCls
  });
}
//# sourceMappingURL=iconUtil.js.map
