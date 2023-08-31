import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const BoundsBox = ({ bounds, setBounds }) => {
    const removeBound = React.useCallback(
        (startX, endX) => {
            setBounds([...bounds.filter(({ start, end }) => start !== startX && end !== endX)]);
        },
        [bounds, setBounds]
    );

    if (!bounds.length) return null;

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Start Depth</TableCell>
                        <TableCell align="center">End Depth</TableCell>
                        <TableCell align="right">Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bounds.map(({ start, end }) => (
                        <TableRow key={`${start}-${end}`}>
                            <TableCell align="left">{start}</TableCell>
                            <TableCell align="center">{end}</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    onClick={() => removeBound(start, end)}
                                    aria-label="delete"
                                    size="small"
                                    color="error"
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell />
                        <TableCell align="center" />
                        <TableCell align="right">
                            <Button variant="contained">IMPUTE</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BoundsBox;
