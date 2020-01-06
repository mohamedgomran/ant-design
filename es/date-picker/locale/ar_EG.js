function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import CalendarLocale from "rc-picker/es/locale/ar_EG";
import TimePickerLocale from '../../time-picker/locale/ar_EG'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'اختيار التاريخ',
    rangePlaceholder: ['البداية', 'النهاية']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale),
  dateFormat: 'DD-MM-YYYY',
  monthFormat: 'MM-YYYY',
  dateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
  weekFormat: 'wo-YYYY'
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
//# sourceMappingURL=ar_EG.js.map
