import React, { useState, useEffect } from 'react';
import { 
    AppBar, 
    Box, 
    Button,
    Drawer,
    Icon,
    Paper,
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow, Toolbar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { TransactionDetails } from './TransactionDetails';
import './Dashboard.css';

export const Dashboard = () => {
    const [transaction, setTransaction] = useState(null)
    const [transactions, setTransactions] = useState(null);
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setChecked(!checked);
    }

    useEffect(() => {
        fetch('/transactions', {
            method: 'GET',
            headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'}),
            mode: 'cors',
        }).then((res) => res.json())
        // Update the state with the received response
        .then(setTransactions)
        .catch((err) => {
            console.log(err);
        });
        return () => {}
    }, []);

    useEffect(() => {
        if(transactions){
            console.log(transactions);
        }
    }, [transactions]);

    return(
        <>
            <Box sx={{ flexGrow: 1, width: '100%', position: 'relative', zIndex: '1' }}>
                <AppBar position="static" sx={{width: '100%', borderRadius: '0 0 12px 12px'}}>
                    <Toolbar className='navbar'>
                        <Button className='logout_button' variant='outlined' onClick={() => navigate('/')}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <div style={{height: 'auto'}}>
                    <h2 style={{ textDecoration: 'underline' }}>Recent Activity</h2>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {transactions && transactions.data.map((elem, i) => {
                                    return(<TableRow 
                                        key={i}
                                        sx={{ maxWidth: '100%', '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{(new Date(elem.posted_date)).toDateString()}</TableCell>
                                        <TableCell align="right">{elem.description}</TableCell>
                                        <TableCell align="right">${elem.charge}</TableCell>
                                        <TableCell align="right">
                                            <Icon onClick={(e) => {
                                                setTransaction(elem)
                                                e.preventDefault();
                                                toggleDrawer(e);
                                                }}
                                                 className="options_button">
                                                <ArrowForwardIosIcon/>
                                            </Icon>
                                        </TableCell>
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Box>
            <Drawer anchor="right" open={checked} onClose={toggleDrawer}>
                <TransactionDetails onClose={toggleDrawer} details={transaction}></TransactionDetails>
            </Drawer>
        </>
    )
}