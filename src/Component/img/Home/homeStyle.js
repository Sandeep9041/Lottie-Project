import styled from "styled-components";
import bg from "../images/bg.svg"

export const HomeBg = styled.div`
  background-image: url(${bg});
  background-repeat:no-repeat;
  background-size:cover;
  background-position-y:100%;
  width:100%;
  height:100vh;
  // margin-top:10px;
  @media (max-width:767px){
    background-position:10%;

  }
`;
export const Container = styled.div`
 width:100%;  
 display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  height:100vh;
  @media (max-width:767px){
    align-items:center;
  justify-content: flex-start;
  }
  
`;

export const Card = styled.div`
  width:90%;
  display:flex;
  @media (max-width:767px){
    flex-direction:column;
    width:100%;
  }
  @media (max-width:1000px){
    flex-direction : column;
  }
`;

export const LeftContent = styled.div`
  width:50%;
  margin-top:55px;
  text-align:left;
@media (max-width:1000px){
  width:100%;
  margin-top:15px;
}
`;

export const RightContent = styled.div`
  width:50%;
  @media (max-width:1000px){
    width:100%;
    margin-top:15px;
  }
`;

export const MainHeading = styled.h1`
color:#ffffff;
font-family: 'Caprasimo', cursive;
font-size: 3rem;
line-height: 1.2;
margin-bottom: 1rem;
font-weight:400;
// width:95%;
text-align:left;
@media (max-width:767px){
   font-size: 1.95rem;
}
`;
export const MainPara = styled.p`
font-feature-settings: "pnum" on,"lnum" on;
    color:#f1f1f1;
    font-family: KlinicSlab;
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.3;
    text-align:left;
    width:90%;
    @media (max-width:767px){
      font-size: 1.1rem;
   }
`;

export const MainButton = styled.button`
    color:#f1f1f1;
    background-color:#0d0c0d;
    border:0px;
    padding:11px 13px;
    font-family: "Roboto", sans-serif;
    // font-style: italic;
    font-size: 1rem;
  border-radius:5px;
// width:75px;
// height:35px;
@media (max-width:767px){
  font-size: 0.75rem;
}
`;
