import Fade from "react-reveal";
import { ExperienceCard, ExperienceHeading, ExperienceText } from "./styleExperience";

const Experienced=()=>(
    <ExperienceCard>
        <Fade left>
        <ExperienceHeading>Experience Less Financial Stress
        </ExperienceHeading>
        <ExperienceText>Gain clarity and confidence with <span>four-simple-but-life-changing rules.</span> The magic isn’t in the math—it’s in the method.
        </ExperienceText>
        </Fade>
    </ExperienceCard>
)

export default Experienced;