import Lottie from "lottie-react"
import Fade from "react-reveal";
import { TransactionCard,Para,Paras,TransactionTexts,TransactionOneHeading,TransactionOneHeadings, TransactionHeading,TransactionOne,TransactionOnes,TransactionText,TransactionContainer } from "./styleTransaction";
import Banner from "../img/images/Banner.json"


const Transaction=()=>(
    <TransactionCard>
        <TransactionHeading>
            <Fade right>
            Pick your plan. Try free for 30 days.
            </Fade>
            </TransactionHeading>
        <TransactionContainer>
        <Fade left>

        <TransactionOnes>
            <div style={{display:"flex",flexDirection:"column"}}>
        <Lottie style={{marginbottom:"0px",height:"185px",marginTop:"-33px"}} animationData={Banner} />
            <TransactionOneHeading>ANNUAL</TransactionOneHeading>
            </div>
            <TransactionText><sup style={{fontSize:"13px"}}>$</sup>2.99<span style={{fontSize:"11px"}}>/month</span></TransactionText>
            <Para>Billed annually*</Para>
        <button type="button" style={{border:"3px solid red",color:"red",backgroundColor:"white",borderRadius:"11px",fontSize:"13px",padding:"7px 15px 7px 15px"}}>Start Free Trial</button>
        </TransactionOnes>
        </Fade>
        <Fade right>
         <TransactionOne>
            <TransactionOneHeadings>Monthly</TransactionOneHeadings>
            <TransactionTexts><sup style={{fontSize:"13px"}}>$</sup>5.99<span style={{fontSize:"11px"}}>/month</span></TransactionTexts>
        <Paras>Billed annually*</Paras>
        <button type="button" style={{border:"1px solid #363fff",color:"#363fff",backgroundColor:"transparent",borderRadius:"11px",fontSize:"13px",padding:"7px 15px 7px 15px"}}>Start Free Trial</button>        
        </TransactionOne>
        </Fade>
        </TransactionContainer>
    </TransactionCard>
)

export default Transaction;