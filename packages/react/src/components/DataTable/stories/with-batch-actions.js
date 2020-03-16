/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  Delete16 as Delete,
  Save16 as Save,
  Download16 as Download,
} from '@carbon/icons-react';

import Button from '../../Button';
import DataTable, {
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
} from '../../DataTable';

import { batchActionClick, initialRows, headers } from './shared';

export default props => (
  <DataTable
    rows={initialRows}
    headers={headers}
    {...props}
    render={({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getSelectionProps,
      getToolbarProps,
      getBatchActionProps,
      onInputChange,
      selectedRows,
      getTableProps,
      getTableContainerProps,
    }) => (
      <TableContainer
        title="DataTable"
        description="With batch actions"
        {...getTableContainerProps()}>
        <TableToolbar {...getToolbarProps()}>
          <TableBatchActions {...getBatchActionProps()}>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Delete}
              onClick={batchActionClick(selectedRows)}>
              Delete
            </TableBatchAction>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Save}
              onClick={batchActionClick(selectedRows)}>
              Save
            </TableBatchAction>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={Download}
              onClick={batchActionClick(selectedRows)}>
              Download
            </TableBatchAction>
          </TableBatchActions>
          <TableToolbarContent>
            <TableToolbarSearch
              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
              onChange={onInputChange}
            />
            <TableToolbarMenu
              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}>
              <TableToolbarAction primaryFocus onClick={() => alert('Alert 1')}>
                Action 1
              </TableToolbarAction>
              <TableToolbarAction onClick={() => alert('Alert 2')}>
                Action 2
              </TableToolbarAction>
              <TableToolbarAction onClick={() => alert('Alert 3')}>
                Action 3
              </TableToolbarAction>
            </TableToolbarMenu>
            <Button
              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
              onClick={action('Add new row')}
              size="small"
              kind="primary">
              Add new
            </Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              <TableSelectAll {...getSelectionProps()} tooltipText="Select all rows" />
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow {...getRowProps({ row })}>
                <TableSelectRow {...getSelectionProps({ row })} />
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);
