// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar, Container, Nav} from 'react-bootstrap'

// function Navibar(){
//     return(
//         <div>
//       <Navbar bg="success" variant="dark">
//         <Container>
//         <Navbar.Brand href="#home">CMT</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#model">모델생성</Nav.Link>
//           <Nav.Link href="#backtesting">백테스팅</Nav.Link>
//           <Nav.Link href="#virtual">모의투자</Nav.Link>
//           <Nav.Link href="#autotrade">실전자동매매</Nav.Link>
//           <Nav.Link href="#coinnews">코인동향</Nav.Link>
//           <Nav.Link href="#notice">공지사항</Nav.Link>
//         </Nav>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Navbar.Text>
//             <Nav.Link href="/Login.js">로그인</Nav.Link>
//             <Nav.Link href="#signup">회원가입</Nav.Link>
//           </Navbar.Text>
//         </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//     )
// }


// export default Navibar;

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navibar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            My Site
          </Link>
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button component={Link} to="/menu1" color="inherit">
            Menu 1
          </Button>
          <Button component={Link} to="/menu2" color="inherit">
            Menu 2
          </Button>
          <Button component={Link} to="/menu3" color="inherit">
            Menu 3
          </Button>
          <Button component={Link} to="/menu4" color="inherit">
            Menu 4
          </Button>
          <Button component={Link} to="/menu5" color="inherit">
            Menu 5
          </Button>
        </div>
        <Button component={Link} to="/login" color="inherit" sx={{ ml: 'auto' }}>
          Login
        </Button>
        <Button component={Link} to="/signup" color="inherit">
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navibar;