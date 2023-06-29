import Lottie from "lottie-react"
import Fade from "react-reveal";
import { MoneyCard, MoneyHeading,MoneyPara,GrowthAnimation,MoneyContent, MoneyButton } from "./styleAboutMoney"
import Growth from "../img/images/Growth.json"
import Management from "../img/images/Management.json"
import Money from "../img/images/Money.json"
import "../../App.css"

const AboutMoney =()=> (
    <MoneyCard>
        <GrowthAnimation>
        <Fade left>
            <Lottie animationData={Money}  className="money"/>
        </Fade>
        </GrowthAnimation>
        <MoneyContent>
        <Fade right>
            <MoneyHeading>Money Doesn’t Have To Be Messy
        </MoneyHeading>
        <MoneyPara>
            Stop wondering where all your hard-earned dollars go. The YNAB Method for money management will help you grow your savings, and you’ll love how you spend your money.
        </MoneyPara>
        <MoneyButton>Start Free Trial Now</MoneyButton>
        </Fade>
        </MoneyContent>
    </MoneyCard>
)

export default AboutMoney