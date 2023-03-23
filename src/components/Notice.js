/*eslint-disable*/
import React from 'react';
import { Paper, Box , TextField, FormControl} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@mui/material/styles';



const Notice = () =>{
    return(
     <>
        <Paper variant="outlined" sx={{width: '90%', maxWidth: '1000px', margin: '0 auto', padding: '10px' ,mt:7 }}>
        <p>공지사항</p>
        <FormControl></FormControl>
        <TextField id="standard-search" label="search" type="search" variant="standard" />
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
            


            {/* <TextField
                id =""/> */}
            <table>
                <thread>
                    <tr>
                        <th>no.</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thread>
            </table>
        </Box>
        </Paper>  
     </>
    )
}

export default Notice;