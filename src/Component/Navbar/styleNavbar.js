import styled from "styled-components";
 
export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;   
    padding-block:0px;
    max-height:10vh;
    @media (max-width:767px){
        max-height:12vh;
      }
   `

export const NavbarHeading = styled.h2`
    color:#0d0c0d;
    font-weight:900;
    margin-left:2.75rem;
    font-size:32px;
    @media (max-width:767px){
        margin-left:1.75rem;
        font-size:31px;
      }
`
export const NavbarSpan = styled.span`
    color:#363fff;
`
export const NavbarButton = styled.button`
    background-color:#363fff;
    color:#ffffff;
    padding:9px 15px 9px 15px;
    font-size:13px;
    border-radius:5px;
    border:0px;
    margin-right:15px;
    @media (max-width:767px){
        margin-right:7px;
      }
`

export const Buttons = styled.div`
display:flex;
justify-content:flex-end;
margin-right:2.5rem;
width:50%;
 margin-right:2.75rem;
@media (max-width:767px){
    margin-right:1.75rem;
}
`