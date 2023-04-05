/*eslint-disable*/
import React, {useState} from 'react';
import { Box,TextField, Paper, Typography, Grid,Button,TableCell, TableContainer, Table, TableRow, IconButton } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';

const AutoTrading = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const handleStartDateChange = (date) => {
      setStartDate(date);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
    };
  
    const handleApplyButtonClick = () => {
      console.log('Selected date range:', startDate, endDate);
    };
  
    const handleClearButtonClick = () => {
      setStartDate(null);
      setEndDate(null);
    };
    return(
        <>
        <Grid item xs={12} sm={7.5}>
        <Paper sx={{ padding:10, display: 'flex', justifyContent: 'center' }}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 8 }}>
            <Box display="flex" alignItems="center">
            <DatePicker
                label="Start Date"
                value={startDate}
                onChange={handleStartDateChange}
                renderInput={(params) => <TextField {...params} />}
                sx={{ mr: 1 }}
            />
            <DatePicker
                label="End Date"
                value={endDate}
                onChange={handleEndDateChange}
                renderInput={(params) => <TextField {...params} />}
                sx={{ mr: 1 }}
            />
            <Box flexGrow={1} />
            <Button onClick={handleApplyButtonClick}>Apply</Button>
            <Button onClick={handleClearButtonClick}>Clear</Button>
            </Box>
        {/* <Grid item>
            기간선택: 
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            에서 
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
            까지 
            모델선택
            <Button variant="contained" color="success">매매 시작</Button>{" "}
            <Button variant="contained" color="success">매매 중지</Button>
        </Grid> */}
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