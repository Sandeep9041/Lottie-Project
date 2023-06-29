import {FaGithubSquare} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import {MdMail} from "react-icons/md"
import { BottomContainer } from "./styleBottom"
import Fade from "react-reveal";


const Bottom =() => (
    <BottomContainer>
    <Fade left>
    <h5> Copyright Ⓒ 2023 Lorem Ipsum.</h5>   
        <div className="icons">
            <a rel="noreferrer" href="https://github.com/Sandeep9041"  target="_blank">
            <FaGithubSquare style={{fontSize:"35px",color:"#ffffff",marginRight:"25px",marginBottom:"1px"}}/>
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/sandeepsks/"  target="_blank">
            <AiFillLinkedin  style={{fontSize:"38px",color:"#ffffff",marginRight:"25px"}}/>
            </a>
            <a rel="noreferrer" href="mailto:sandeepkaur.sk.9041@gmail.com"  target="_blank">
            <MdMail  style={{fontSize:"38px",color:"#ffffff",marginBottom:"0px"}}/></a>
    </div>
    </Fade>
    </BottomContainer>
)

export default Bottom