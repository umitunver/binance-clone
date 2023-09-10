import React, { useCallback, useMemo } from 'react'
import styles from './index.module.scss'

type ColumnType = {
  name: string | any;
  key: string;
  align?: "start" | "center" | "end";
}

interface TableProps<T> {
  columns: ColumnType[];
  data?: T[]; // mapped data for return row element
  element: (data: T) => JSX.Element | React.ReactNode; // row element
  style?: React.CSSProperties; // custom styles for table
  onCellClick?: (data: T) => void; // on cell click callback
}

function Table<T>(props: TableProps<T>) {
  const customStyles = useMemo(() => {
    return {
      ...(props.style ? { style: props.style as React.CSSProperties } : {})
    };
  }, [props.style]);

  return (
    <div className={styles.table_responsive}>
      <table className={styles.table}>
        <TableHead>
          <TableRow>
            {
              props.columns.map((col, index) => (
                <TableHeaderCell key={index} align={col.align || "start"}>
                  {col.name}
                </TableHeaderCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody {...customStyles}>
          {props.data && props.data.length > 0 ? (
            props.data?.map((data: any, index: number) =>
              props.element ? (
                <TableRow
                  key={index}
                  {...customStyles}
                >
                  {props.element(data)}
                </TableRow>
              ) : (
                <TableRow key={index}>
                  <TableNotFound />
                </TableRow>
              )
            )
          ) : (
            <TableRow key="no-data">
              <TableNotFound />
            </TableRow>
          )}

        </TableBody>
      </table>
    </div>
  )
}

export default React.memo(Table) as typeof Table;

interface TableElementProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const TableHead = React.memo((props: TableElementProps) => {
  return (
    <thead
      className={styles.table_header}
      {...(props.style ? { style: props.style as React.CSSProperties } : {})}
    >
      {props.children}
    </thead>
  );
});

TableHead.displayName = 'TableHead';

export const TableBody = React.memo((props: TableElementProps) => {
  return (
    <tbody
      className={styles.table_main}
      {...(props.style ? { style: props.style as React.CSSProperties } : {})}
    >
      {props.children}
    </tbody>
  );
});

TableBody.displayName = 'TableBody';

interface TableRowProps extends TableElementProps {
  onClick?: () => void;
}

export const TableRow = React.memo((props: TableRowProps) => {
  return (
    <tr className={styles.tr}>
      {props.children}
    </tr>
  );
});

TableRow.displayName = 'TableRow';

interface TableHeaderCell extends TableElementProps {
  align: "start" | "center" | "end";
  onClick?: () => void;
}

export const TableHeaderCell = React.memo((props: TableHeaderCell) => {
  return (
    <th className={styles.th} data-align={props.align}>
      {props.children}
    </th>
  );
});

TableHeaderCell.displayName = 'TableHeaderCell';

interface TableDataCellProps extends TableElementProps {
  className?: string;
  align?: "start" | "center" | "end";
}
export const TableDataCell = React.memo((props: TableDataCellProps) => {
  return (
    <td className={styles.td} data-align={props.align || "start"}>
      {props?.children}
    </td>
  )
})

TableDataCell.displayName = 'TableDataCell';

function TableNotFound() {
  return (
    <React.Fragment>
      <TableDataCell className={styles.no_data_cell}>
        Data Yok
      </TableDataCell>
    </React.Fragment>
  );
}