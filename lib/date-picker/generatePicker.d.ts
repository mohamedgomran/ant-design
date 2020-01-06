import * as React from 'react';
import { GenerateConfig } from 'rc-picker/lib/generate/index';
import { PickerBaseProps as RCPickerBaseProps, PickerDateProps as RCPickerDateProps, PickerTimeProps as RCPickerTimeProps } from 'rc-picker/lib/Picker';
import { RangePickerBaseProps as RCRangePickerBaseProps, RangePickerDateProps as RCRangePickerDateProps, RangePickerTimeProps as RCRangePickerTimeProps } from 'rc-picker/lib/RangePicker';
import enUS from './locale/en_US';
declare type InjectDefaultProps<Props> = Omit<Props, 'locale' | 'generateConfig' | 'prevIcon' | 'nextIcon' | 'superPrevIcon' | 'superNextIcon' | 'hideHeader' | 'components'> & {
    locale?: typeof enUS;
    size?: 'large' | 'default' | 'small';
};
export declare type PickerBaseProps<DateType> = InjectDefaultProps<RCPickerBaseProps<DateType>>;
export declare type PickerDateProps<DateType> = InjectDefaultProps<RCPickerDateProps<DateType>>;
export declare type PickerTimeProps<DateType> = InjectDefaultProps<RCPickerTimeProps<DateType>>;
export declare type PickerProps<DateType> = PickerBaseProps<DateType> | PickerDateProps<DateType> | PickerTimeProps<DateType>;
export declare type RangePickerBaseProps<DateType> = InjectDefaultProps<RCRangePickerBaseProps<DateType>>;
export declare type RangePickerDateProps<DateType> = InjectDefaultProps<RCRangePickerDateProps<DateType>>;
export declare type RangePickerTimeProps<DateType> = InjectDefaultProps<RCRangePickerTimeProps<DateType>>;
export declare type RangePickerProps<DateType> = RangePickerBaseProps<DateType> | RangePickerDateProps<DateType> | RangePickerTimeProps<DateType>;
declare function generatePicker<DateType>(generateConfig: GenerateConfig<DateType>): React.ComponentClass<PickerProps<DateType>, any> & {
    WeekPicker: React.ComponentClass<Pick<InjectDefaultProps<RCPickerDateProps<DateType>>, "value" | "style" | "direction" | "className" | "prefixCls" | "locale" | "getPopupContainer" | "onChange" | "disabled" | "onClick" | "size" | "open" | "suffixIcon" | "clearIcon" | "mode" | "defaultValue" | "allowClear" | "defaultOpen" | "dropdownClassName" | "dropdownAlign" | "transitionName" | "autoFocus" | "placeholder" | "tabIndex" | "onSelect" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "role" | "onContextMenu" | "onMouseUp" | "name" | "onOpenChange" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "showToday" | "showTime" | "disabledTime" | "format" | "popupStyle" | "inputReadOnly" | "pickerRef">, any>;
    MonthPicker: React.ComponentClass<Pick<InjectDefaultProps<RCPickerDateProps<DateType>>, "value" | "style" | "direction" | "className" | "prefixCls" | "locale" | "getPopupContainer" | "onChange" | "disabled" | "onClick" | "size" | "open" | "suffixIcon" | "clearIcon" | "mode" | "defaultValue" | "allowClear" | "defaultOpen" | "dropdownClassName" | "dropdownAlign" | "transitionName" | "autoFocus" | "placeholder" | "tabIndex" | "onSelect" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "role" | "onContextMenu" | "onMouseUp" | "name" | "onOpenChange" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "showToday" | "showTime" | "disabledTime" | "format" | "popupStyle" | "inputReadOnly" | "pickerRef">, any>;
    YearPicker: React.ComponentClass<Pick<InjectDefaultProps<RCPickerDateProps<DateType>>, "value" | "style" | "direction" | "className" | "prefixCls" | "locale" | "getPopupContainer" | "onChange" | "disabled" | "onClick" | "size" | "open" | "suffixIcon" | "clearIcon" | "mode" | "defaultValue" | "allowClear" | "defaultOpen" | "dropdownClassName" | "dropdownAlign" | "transitionName" | "autoFocus" | "placeholder" | "tabIndex" | "onSelect" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "role" | "onContextMenu" | "onMouseUp" | "name" | "onOpenChange" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "showToday" | "showTime" | "disabledTime" | "format" | "popupStyle" | "inputReadOnly" | "pickerRef">, any>;
    RangePicker: React.ComponentClass<RangePickerProps<DateType>, any>;
    TimePicker: React.ComponentClass<Pick<InjectDefaultProps<RCPickerTimeProps<DateType>>, "value" | "style" | "direction" | "className" | "prefixCls" | "locale" | "getPopupContainer" | "onChange" | "disabled" | "onClick" | "size" | "open" | "suffixIcon" | "clearIcon" | "mode" | "defaultValue" | "allowClear" | "defaultOpen" | "dropdownClassName" | "dropdownAlign" | "transitionName" | "autoFocus" | "placeholder" | "tabIndex" | "onSelect" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "role" | "onContextMenu" | "onMouseUp" | "name" | "onOpenChange" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "format" | "showHour" | "showMinute" | "showSecond" | "use12Hours" | "hourStep" | "minuteStep" | "secondStep" | "hideDisabledOptions" | "disabledHours" | "disabledMinutes" | "disabledSeconds" | "popupStyle" | "inputReadOnly" | "pickerRef">, any>;
};
export default generatePicker;
