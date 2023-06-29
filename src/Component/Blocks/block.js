import Fade from "react-reveal";
import { BlockCard, BlockHeading, BlockOne, Blocks,BlockOneHeading,BlockOneText } from "./styleBlock";


const Block =()=> (
<BlockCard>
    <BlockHeading>
    <Fade left>
    Reach your financial goals with confidence 
    </Fade>
    </BlockHeading>
    <Blocks>
        <Fade left>
        <BlockOne>
            <img src="https://cdn-icons-png.flaticon.com/512/2845/2845703.png"
            alt="" style={{width:"75px",height:"75px"}}/>
            <BlockOneHeading>Save more money</BlockOneHeading>
            <BlockOneText>Uncover more ways to save & react your goals</BlockOneText>
        </BlockOne>
        <BlockOne>
            <img src="https://cdn-icons-png.flaticon.com/512/1761/1761422.png"
            alt="" style={{width:"75px",height:"75px"}}/>
            <BlockOneHeading>Get a personalized budget</BlockOneHeading>
            <BlockOneText>Manage your spending & see where you money goes</BlockOneText>
        </BlockOne><BlockOne>
            <img src="https://cdn-icons-png.flaticon.com/512/10116/10116380.png"
            alt="" style={{width:"75px",height:"75px"}}/>
            <BlockOneHeading>Stay on top of monthly bills</BlockOneHeading>
            <BlockOneText>Track and manage your bills from one convenient place</BlockOneText>
        </BlockOne>
        <BlockOne>
            <img src="https://cdn-icons-png.flaticon.com/512/5673/5673180.png"
            alt="" style={{width:"75px",height:"75px"}}/>
            <BlockOneHeading>Easily track spending</BlockOneHeading>
            <BlockOneText>Get an automatically generated spending plan that's customizable to your needs</BlockOneText>
        </BlockOne>
        </Fade>
    </Blocks>
</BlockCard>    
)

export default Block;