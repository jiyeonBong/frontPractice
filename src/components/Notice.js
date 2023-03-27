/*eslint-disable*/
// import React from 'react';
// import { Button, Paper, Box , TextField, FormControl} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import styled from '@mui/material/styles';



// const Notice = () =>{
//     return(
//      <>
//         <Paper variant="outlined" sx={{width: '90%', maxWidth: '1000px', margin: '0 auto', padding: '10px' ,mt:7 }}>
        
//         <div style={{ margin: 20, padding: 20 }}>
//         <Box component="form" sx={{
//           "& .MuiTextField-root": { m: 1, width: "40ch" },
//         }} noValidate autoComplete="off">
//         공지사항
//         {""}
//         <TextField id="standard-search" label="search" type="search" variant="standard" sx={{ p: "5px" }}/>
//         <Button variant="contained" color="success" sx={{ p: "10px" }}>검색</Button>
//         </Box>
//         </div>
//         <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
            


//             {/* <TextField
//                 id =""/> */}
//             <table>
//                 <thread>
//                     <tr>
//                         <th>no.</th>
//                         <th>제목</th>
//                         <th>등록일</th>
//                         <th>조회수</th>
//                     </tr>
//                 </thread>
//             </table>
//         </Box>
//         </Paper>  
//      </>
//     )
// }

// export default Notice;
import { useState } from 'react';
import '../css/Notice.css';
import { TextField, Paper, Typography, Grid,Button,TableCell, TableContainer, Table, TableRow, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const categories = ['전체', '거래소1', '거래소2', '거래소3', '거래소4'];

const notices = [
    { id: 1, category: '거래소1', title: '어쩌구저쩌구', date: '2022-12-01', views: 10 },
    { id: 2, category: '거래소3', title: '자유로운우리를봐자유로워', date: '2022-11-25', views: 5 },
    { id: 3, category: '거래소4', title: '졸작하기싫누', date: '2022-11-20', views: 8 },
    { id: 4, category: '거래소2', title: '울랄라울랄라', date: '2022-11-15', views: 15 },
];

const Notices = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    // 여기에서 검색 기능을 구현하세요
    console.log(`"${searchValue}" 검색`);
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredNotices = notices.filter((notice) => {
    if (selectedCategory === '전체') {
      return notice.title.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return notice.category === selectedCategory && notice.title.toLowerCase().includes(searchValue.toLowerCase());
    }
  });

  const handleSearch = () => {
    // 검색어를 입력 후 검색 버튼을 클릭할 때 실행되는 함수
    console.log('검색어:', searchValue);
  };

  return (
    <Grid container spacing={2} sx={{paddingTop:10, display: 'flex', justifyContent: 'center'}} >
        {/* 거래소랑 공지사항 칸 간격 */}
      <Grid item xs={1} sm={2} >
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            거래소
          </Typography>
          {categories.map((category) => (
            <Typography key={category} sx={{ marginBottom: 1, cursor: 'pointer' }} onClick={() => handleCategoryClick(category)}>
              {category}
            </Typography>
          ))}
          {/* 배열 categories순회 map함수는 배열의 각 요소를 함수에 적용하고
          그 결과를 새로운 배열로 반환 . 각 요소를 하나의 typography요소로 변환하고
          생성된 모든 요소를 배열로 반환.
          key 프롭은 배열의 요소를 식별하는 역할, sx프롭은 스타일 지정. */}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={7.5}>
        <Paper sx={{ padding: 2 }}>
          <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
            <Grid item>
              <Typography variant="h5">공지사항</Typography>
            </Grid>
            <Grid item >
              <TextField
                size="small"
                placeholder="검색"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <Button variant="contained" color="success" onClick={handleSearchClick}>
              검색
              </Button>
            </Grid> 
          </Grid>

          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={15}> */}
                {/* <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 4}}> */}
                    {/* <Grid item sx={{ fontWeight: 'bold' }}>
                    No.
                    </Grid>
                    <Grid item xs={6} sm={7} sx={{ fontWeight: 'bold' }}>
                    제목
                    </Grid>
                    <Grid item xs={3} sm={2} sx={{ fontWeight: 'bold' }}>
                    등록일
                    </Grid>
                    <Grid item xs={3} sm={1} sx={{ fontWeight: 'bold' }}>
                    조회수
                    </Grid> */}
                     <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>No.</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>제목</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>등록일</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottomWidth: 2 }}>조회수</TableCell>
                    </TableRow>

                {/* </Grid> */}
                {/* {filteredNotices.map((notice, index) => (
                    <Typography key={notice.id} sx={{ marginBottom: 3 }}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                        {index + 1}.
                        </Grid>
                        <Grid item xs={6} sm={7}>
                        {notice.title}
                        </Grid>
                        <Grid item xs={3} sm={2}>
                        {notice.date}
                        </Grid>
                        <Grid item xs={3} sm={1}>
                        {notice.views}
                        </Grid>
                    </Grid>
                    </Typography>
                ))} */}

                {filteredNotices.map((notice, index) => (
                <TableRow key={notice.id}>
                    <TableCell component="th" scope="row" sx={{ borderBottomWidth: 2 }}>
                    {index + 1}
                    </TableCell>
                    <TableCell sx={{ borderBottomWidth: 2 }}>{notice.title}</TableCell>
                    <TableCell sx={{ borderBottomWidth: 2 }}>{notice.date}</TableCell>
                    <TableCell sx={{ borderBottomWidth: 2 }}>{notice.views}</TableCell>
                </TableRow>
                ))}
                </Table>
                </TableContainer>
           
            {/* </Grid>
            </Grid> */}

        </Paper>
      </Grid>
    </Grid>
  );
};

export default Notices;
