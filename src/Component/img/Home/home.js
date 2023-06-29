import Lottie from "lottie-react"
import Fade from "react-reveal";

import { Card, Container, HomeBg, LeftContent, MainButton, MainHeading, MainPara, RightContent } from "./homeStyle";
import Mobile from "../images/Mobile.json"
import Button from "../images/Button.json"

import "./home.css"
const Home = () => (
    <>
    <HomeBg >
        <Container >
            <Card style={{width:"80%"}}>
                <LeftContent>
<Fade left>
                    <MainHeading>Change Your Relationship With Money</MainHeading>
                    <MainPara>
                    Enjoy guilt-free spending and effortless saving with a friendly, flexible method for managing your finances.
                    </MainPara>
                    <MainButton>
                        Try YABN for 30 Days
                        {/* <Lottie animationData={Button} /> */}
                    </MainButton>
                    </Fade>  
                </LeftContent>
                <RightContent>
                <Fade right>
                    <Lottie className="mobile" animationData={Mobile}/>
                    </Fade>
                </RightContent>
            </Card>
        </Container>
    </HomeBg>
</>    
)

export default Home