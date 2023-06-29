import styled from "styled-components";
export const ExperienceCard = styled.div`
  width:100%;
  height:41vh;
  margin-top:10.5rem;
  background-color:#35364D;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media (max-width:767px){
    flex-direction:column;
  }
`;

export const ExperienceHeading = styled.h1`
color:#ffffff;
font-family: Gilroy Heavy,Arial,sans-serif;
font-size: 2.375rem;
line-height: 1.2;
margin-bottom: 1rem;
font-weight:700;
text-align:center;
@media (max-width:767px){
   font-size:2rem;
   margin-bottom:0rem;
}
`;

export const ExperienceText = styled.p`
    color:#ffffff;
    opacity:0.7;
    font-family: KlinicSlab;
    font-size: 1.35rem;
    font-style: italic;
    line-height: 1.3;
    text-align:center;
    width:90%;
    @media (max-width:767px){
       font-size: 1rem;
    }
`;