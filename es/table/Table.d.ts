/// <reference types="react" />
import { TableProps as RcTableProps } from 'rc-table/lib/Table';
import { SpinProps } from '../spin';
import { PaginationConfig } from '../pagination';
import { TableRowSelection, ColumnsType, TableCurrentDataSource, SorterResult, Key, GetPopupContainer, TableSize, TablePaginationConfig, SortOrder, TableLocale } from './interface';
export { ColumnsType, TablePaginationConfig };
export interface TableProps<RecordType> extends Omit<RcTableProps<RecordType>, 'transformColumns' | 'internalHooks' | 'internalRefs' | 'data' | 'columns' | 'expandIconColumnIndex' | 'scroll'> {
    dropdownPrefixCls?: string;
    dataSource?: RcTableProps<RecordType>['data'];
    columns?: ColumnsType<RecordType>;
    pagination?: false | TablePaginationConfig;
    loading?: boolean | SpinProps;
    size?: TableSize;
    bordered?: boolean;
    locale?: TableLocale;
    onChange?: (pagination: PaginationConfig, filters: Record<string, Key[] | null>, sorter: SorterResult<RecordType> | SorterResult<RecordType>[], extra: TableCurrentDataSource<RecordType>) => void;
    rowSelection?: TableRowSelection<RecordType>;
    getPopupContainer?: GetPopupContainer;
    scroll?: RcTableProps<RecordType>['scroll'] & {
        scrollToFirstRowOnChange?: boolean;
    };
    sortDirections?: SortOrder[];
}
declare function Table<RecordType extends object = any>(props: TableProps<RecordType>): JSX.Element;
declare namespace Table {
    var defaultProps: {
        rowKey: string;
    };
    var SELECTION_ALL: string;
    var SELECTION_INVERT: string;
    var Column: typeof import("rc-table/lib/sugar/Column").default;
    var ColumnGroup: typeof import("rc-table/lib/sugar/ColumnGroup").default;
}
export default Table;