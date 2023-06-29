import styled from "styled-components";

export const TransactionCard = styled.div`
  width:100%;
  min-height:41vh;
  margin-top:15.5rem;
  margin-bottom:7.5rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media (max-width:767px){
    flex-direction:column;
    width:100%;
    margin-top:5.5rem
    margin-bottom:2.5rem;
  }
`;

export const TransactionContainer = styled.div`
  width:60%;
  display:flex;
  align-items:center;
  justify-content:center;
  @media (max-width:767px){
    flex-wrap:wrap;
    width:80%;
  }
`;

export const TransactionHeading = styled.h2`
color:#35364D;
postion:absolute;
font-size: 2.575rem;
line-height: 1.2;
margin-bottom:2rem;
font-weight:500;
text-align:center;
@media (max-width:767px){
  font-size: 2rem;
}
`;

export const TransactionOne = styled.div`
    width:15rem;
    margin-top:2.5rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px 15px;
    box-shadow: rgba(47,62,168,0.3) 2px 2px 20px 0px;
    border-radius: 20px;
    height:21rem;
    padding: 30px 20px 20px 20px;
    @media (max-width:767px){
      // width:95%;
      // margin-right:0px;
      // height:25rem;
    }
`;
export const TransactionOnes = styled.div`
    width:15rem;
    margin-top:2.5rem;
    background-color:#363fff;
    color: #fff;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(47,62,168,0.3) 2px 2px 20px 0px;
    border-radius: 20px;
    height:23rem;
    padding: 0px 20px 20px 20px;
    margin-right:1.4rem;
    @media (max-width:767px){
       margin-right:0px;
    }
`;

export const TransactionText = styled.h1`
    color: #ffffff;
    width:75%;
    text-align: center;
    margin-top: 20px;
    line-height: 1.2;
    font-weight:800;
    font-size:47px;
`;
export const TransactionTexts = styled.h1`
    color: #363fff;
    width:75%;
    text-align: center;
    margin-top:9px;
    line-height: 1.2;
    font-weight:800;
    font-size:47px;
`;

export const TransactionOneHeading = styled.h2`
   text-align: center;
   line-height: 1.2;
   margin-top:0px;
   margin-bottom: 1rem;
    color: #ffffff;
    width: 55%;
    font-size:2rem;
    margin-left:21px;
    @media (max-width:767px){
      font-size:1.75rem;
    }
`;

export const TransactionOneHeadings = styled.h2`
   text-align: center;
   margin-top:11px;
   line-height: 1.2;
  margin-bottom: 1rem;
  font-size:2rem;
    color: #363fff;
    width: 75%;
    @media (max-width:767px){
      font-size:1.75rem;
    }
`;

export const Para = styled.p`
   text-align: center;
    color: #ffffff;
    width: 75%;
    font-size:13px;
    font-weight:600;
    margin-top:0px;
`;

export const Paras = styled.p`
   text-align: center;
    color: #363fff;
    width: 75%;
    font-size:13px;
    font-weight:600;
`;