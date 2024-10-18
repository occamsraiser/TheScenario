"use client";
import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";

const TableComponent = ({columns, items, label, handleEdit, handleDelete}) => {

    return (
        <Table aria-label={label}>
        <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody  emptyContent={"No rows to display."} items={items}>
        {(item) => (
            <TableRow key={item._id}>
            <TableCell>{item._id}</TableCell>
            <TableCell>{item.content}</TableCell>
            <TableCell>{item.updatedAt}</TableCell>
            <TableCell>
                <Button size="sm" onClick={() => handleEdit(item._id, item.content)}>Edit</Button>
                <Button size="sm" onClick={() => handleDelete(item._id)}>Delete</Button>
            </TableCell>  
            </TableRow>
        )}
        </TableBody>
        </Table>
    )
}

export default TableComponent;