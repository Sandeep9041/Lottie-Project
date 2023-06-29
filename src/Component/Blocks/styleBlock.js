import styled from "styled-components";

export const BlockCard = styled.div`
  width:100%;
 min-height:35vh;
//   margin-top:10.5rem;
margin-bottom:5.5rem;
//    background-color:red;
  @media (max-width:767px){
    width:100%;
  }
`;

export const BlockHeading = styled.h2`
  padding: 100px 0px 35px 0px;
   text-align: center;
   font-size: 32px;
   line-height: 40px;
   margin-bottom: 2rem;
    font-family: circularMedium;
    color: #35364D;
    width: 100%;
`;

export const Blocks = styled.div`
  width:100%;
  display:flex;
  flex-wrap: wrap;
 justify-content:space-evenly;
`;

export const BlockOne = styled.div`

  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 15px;
  box-shadow: rgba(47,62,168,0.3) 2px 2px 20px 0px;
  border-radius: 20px;
  margin-bottom: 15px;
  height: 270px;
  width: 267px;
  padding: 30px 20px 20px 20px;
`;

export const BlockOneHeading = styled.h3`
  width:85%;
  font-family: circularMedium;
    display: flex;
    align-items: center;
    text-align: center;
    color: #22324f;
    font-size: 26px;
    line-height: 27px;
    margin-top: 10px;
    margin-bottom: 0px;
    padding-bottom: 0px;
}
`;

export const BlockOneText = styled.p`
  width:55%;
  text-align: center;
    margin-top: 20px;
    line-height: 1.2;
    color: #5D5E71;
}
`;