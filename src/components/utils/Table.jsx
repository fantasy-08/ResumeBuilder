import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function BasicTable({ column, rows }) {
    return (
        <TableContainer>
            <Table aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        {
                            column.map((element) => {
                                return (
                                    <TableCell size="small" sx={{
                                        fontSize: 12,
                                        gap: 0,
                                        fontWeight: 'bold',
                                        pb:0
                                    }}>
                                        {element}
                                    </TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {
                                row.map((element, i) => {
                                    if (i === 0) {
                                        return (
                                            <TableCell component="th" scope="row" size="small" sx={{ fontSize: 10 }}>
                                                {element}
                                            </TableCell>
                                        )
                                    }
                                    return <TableCell size="small" sx={{ fontSize: 10 }}>{element}</TableCell>
                                })
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
