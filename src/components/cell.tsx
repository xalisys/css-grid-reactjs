import React, { useCallback } from "react";
import styles from "./cell.scss";
import { CellProps, HeaderCellProps } from "./types";
import { makeClassName, SortDirection } from "../utils";

export const Cell = (props: CellProps) => {
    const { className, children, overrideStyles } = props;
    const classes = makeClassName([styles.cell, className]);

    return (
        <div style={overrideStyles} className={classes}>
            {children}
        </div>
    );
};

export const HeaderCell = (props: HeaderCellProps) => {
    const { sortDirection, sortedBy, overrideStyles, onSort, className, children, dataField } = props;
    const sortable = !!onSort ? styles.sortable : null;
    const classes = makeClassName([styles.cell, styles.headerCell, className, sortable]);
    const sorted = !!onSort && sortedBy === dataField;

    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            sortable && onSort(dataField);
        },
        [sortable, dataField, onSort]
    );
    const sortedClass = sortDirection === SortDirection.Descending ? styles.sortDes : styles.sortAsc;
    return (
        <div style={overrideStyles} onClick={onClick} className={classes}>
            {!sorted && <div>{children}</div>}
            {sorted && (
                <div className={styles.sorted}>
                    <div>{children}</div>
                    <div className={sortedClass}></div>
                </div>
            )}
        </div>
    );
};
