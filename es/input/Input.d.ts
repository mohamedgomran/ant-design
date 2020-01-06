import * as React from 'react';
import Group from './Group';
import Search from './Search';
import TextArea from './TextArea';
import Password from './Password';
import { Omit } from '../_util/type';
import ClearableLabeledInput from './ClearableLabeledInput';
import { ConfigConsumerProps } from '../config-provider';
export declare const InputSizes: ["small", "default", "large"];
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    prefixCls?: string;
    size?: typeof InputSizes[number];
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    allowClear?: boolean;
}
export declare function fixControlledValue<T>(value: T): "" | T;
export declare function resolveOnChange(target: HTMLInputElement | HTMLTextAreaElement, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>, onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void): void;
export declare function getInputClassName(prefixCls: string, size?: typeof InputSizes[number], disabled?: boolean, direction?: any): string;
export interface InputState {
    value: any;
}
declare class Input extends React.Component<InputProps, InputState> {
    static Group: typeof Group;
    static Search: typeof Search;
    static TextArea: typeof TextArea;
    static Password: typeof Password;
    static defaultProps: {
        type: string;
    };
    input: HTMLInputElement;
    clearableInput: ClearableLabeledInput;
    direction: any;
    constructor(props: InputProps);
    static getDerivedStateFromProps(nextProps: InputProps): {
        value: string | number | string[] | undefined;
    } | null;
    componentDidUpdate(): void;
    getSnapshotBeforeUpdate(prevProps: InputProps): null;
    focus(): void;
    blur(): void;
    select(): void;
    saveClearableInput: (input: ClearableLabeledInput) => void;
    saveInput: (input: HTMLInputElement) => void;
    setValue(value: string, callback?: () => void): void;
    handleReset: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    renderInput: (prefixCls: string) => JSX.Element;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    renderComponent: ({ getPrefixCls, direction }: ConfigConsumerProps) => JSX.Element;
    render(): JSX.Element;
}
export default Input;
