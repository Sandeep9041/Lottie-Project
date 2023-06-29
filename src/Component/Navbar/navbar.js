import Fade from "react-reveal";
import { Buttons, NavbarButton, NavbarContainer, NavbarHeading, NavbarSpan } from "./styleNavbar"

const Navbar =() => (
    <NavbarContainer>
        <Fade top>
        <NavbarHeading>YABN<NavbarSpan>.</NavbarSpan></NavbarHeading>
        <Buttons>
        <NavbarButton type="button">Register</NavbarButton>
        <NavbarButton type="button">Login</NavbarButton>
        </Buttons>
        </Fade>
    </NavbarContainer>
)

export default Navbar