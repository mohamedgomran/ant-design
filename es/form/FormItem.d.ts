import * as React from 'react';
import { FormInstance } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';
import { FormItemLabelProps } from './FormItemLabel';
import { FormItemInputProps } from './FormItemInput';
declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
export declare type ValidateStatus = typeof ValidateStatuses[number];
declare type RenderChildren = (form: FormInstance) => React.ReactElement;
declare type RcFieldProps = Omit<FieldProps, 'children'>;
export interface FormItemProps extends FormItemLabelProps, FormItemInputProps, Omit<RcFieldProps, 'children'> {
    prefixCls?: string;
    noStyle?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactElement | RenderChildren | React.ReactElement[];
    id?: string;
    hasFeedback?: boolean;
    validateStatus?: ValidateStatus;
    required?: boolean;
    /** Auto passed by List render props. User should not use this. */
    fieldKey?: number;
}
declare const FormItem: React.FC<FormItemProps>;
export default FormItem;
