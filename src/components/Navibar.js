import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

function Navibar(){
    return(
        <div>
      <Navbar bg="success" variant="dark">
        <Container>
        <Navbar.Brand href="#home">CMT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#model">모델생성</Nav.Link>
          <Nav.Link href="#backtesting">백테스팅</Nav.Link>
          <Nav.Link href="#virtual">모의투자</Nav.Link>
          <Nav.Link href="#autotrade">실전자동매매</Nav.Link>
          <Nav.Link href="#coinnews">코인동향</Nav.Link>
          <Nav.Link href="#notice">공지사항</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link href="/Login.js">로그인</Nav.Link>
            <Nav.Link href="#signup">회원가입</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
}


export default Navibar;