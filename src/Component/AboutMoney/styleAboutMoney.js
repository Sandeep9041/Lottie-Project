import styled from "styled-components";

export const MoneyCard = styled.div`
  width:80%;
  // height:35vh;
  margin-top:5.5rem;
  // background-color:red;
  display:flex;
  align-items: center;
  justify-content:flex-start;
  @media (max-width:767px){
    flex-direction:column;
    width:100%;
    margin-top:2.5rem;
  }
`;

export const MoneyHeading = styled.h1`
color:#35364D;
font-family: Gilroy Heavy,Arial,sans-serif;
font-size: 2.55rem;
line-height: 1.2;
margin-bottom: 1rem;
font-weight:700;
width:85%;
text-align:left;
@media (max-width:767px){
  text-align:center;
  align-self:center;
  font-size:2rem;
}
`;

export const MoneyPara = styled.p`
    color:#35364D;
    opacity:0.7;
    font-family: KlinicSlab;
    font-size: 1.35rem;
    font-style: italic;
    line-height: 1.3;
    text-align:left;
    width:90%;
    @media (max-width:767px){
      text-align:center;
      align-self:center;
      font-size:1rem;
    }
`;


export const MoneyContent = styled.div`
  width:50%;
  @media (max-width:767px){
     width:85%;
     text-align:center;
     display:flex;
     flex-direction:column;
  }
`;

export const GrowthAnimation = styled.div`
  width:50%;
  display:flex;
  justify-content:center;
  @media (max-width:767px){
    width:80%;
  }
`;

export const MoneyButton = styled.button`
    color:#f1f1f1;
    background-color:#35364D;
    border:0px;
    padding:11px 13px;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  border-radius:5px;
  @media (max-width:767px){
    align-self:center;
  }
`;