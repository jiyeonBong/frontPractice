/*eslint-disable*/
import React from 'react';
import { TextField, Paper, Typography, Grid,Button,TableCell, TableContainer, Table, TableRow, IconButton } from '@mui/material';

const AutoTrading = () => {
    return(
        <>
        <Grid item xs={12} sm={7.5}>
        <Paper sx={{ padding:10, display: 'flex', justifyContent: 'center' }}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 8 }}>
        <Grid item>
            기간선택: 
            에서  
            모델선택
            <Button>매매 시작</Button>
            <Button>매매 중지</Button>
        </Grid>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableRow>
                <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>No.</TableCell>
                <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>날짜</TableCell>
                <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>현재 수익률</TableCell>
                <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>보유 코인 수</TableCell>
                <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>보유 현금($)</TableCell>
                <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>매수/매도 신호</TableCell>
                </TableRow>
            </Table>
        </TableContainer>
        </Grid>
        </Paper>
        </Grid>
        </>
    )
};

export default AutoTrading;