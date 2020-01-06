import * as React from 'react';
import RcTreeSelect, { TreeNode, TreeSelectProps as RcTreeSelectProps } from 'rc-tree-select';
import { ConfigConsumerProps } from '../config-provider';
import { Size } from '../select';
declare type RawValue = string | number;
export interface LabeledValue {
    key?: string;
    value: RawValue;
    label: React.ReactNode;
}
export declare type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[];
export interface TreeSelectProps<T> extends Omit<RcTreeSelectProps<T>, 'showTreeIcon' | 'treeMotion' | 'inputIcon' | 'mode' | 'getInputElement' | 'backfill'> {
    size?: Size;
}
declare class TreeSelect<T> extends React.Component<TreeSelectProps<T>, {}> {
    static TreeNode: React.FC<import("rc-tree-select/lib/TreeNode").TreeNodeProps>;
    static SHOW_ALL: string;
    static SHOW_PARENT: string;
    static SHOW_CHILD: string;
    static defaultProps: {
        transitionName: string;
        choiceTransitionName: string;
    };
    selectRef: React.RefObject<RcTreeSelect<import("rc-tree-select/lib/interface").DefaultValueType>>;
    constructor(props: TreeSelectProps<T>);
    focus(): void;
    blur(): void;
    renderTreeSelect: ({ getPopupContainer: getContextPopupContainer, getPrefixCls, renderEmpty, direction, }: ConfigConsumerProps) => JSX.Element;
    render(): JSX.Element;
}
export { TreeNode };
export default TreeSelect;
