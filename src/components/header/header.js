import { 
    Button,Navbar,Nav,NavDropdown,Form
 } from 'react-bootstrap';


function Header(props) {
    const scrollToBottom = () =>{ 
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'auto'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{cursor:"pointer"}} onClick={()=>props.click()}>Anime4U</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link style={{cursor:"pointer"}} onClick={()=>props.click()}>Home</Nav.Link>
                        <Nav.Link style={{cursor:"pointer"}} onClick={()=>scrollToBottom()}>About Us</Nav.Link>
                        <Nav.Link style={{cursor:"pointer"}} onClick={()=>scrollToBottom()}>Licence</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;