import styled from "styled-components";
 export const Info= styled.div`
 display:flex;
 gap:8px;
 padding:0 24px 48px 24px;
 max-width:600px;
 margin: 0 auto;
 @media (min-width:768px){
    grid-area: info;
    flex-flow: row;
    justify-content: space-between;
    gap: 11px;
    padding: 0 0 36px 0;
    max-width: unset;
    margin: 0;

 }
 @media (min-width:1025px){
    gap:30px
 }
 `
 export const Item = styled.li`
 list-style-type:none;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
 border:1px solid ${(props)=>props.theme.colors.grayDark};
 height:auto;
 padding:0 24px;
 

 @media (min-width:768px){
    flex-flow: column;
        align-items: flex-start;
        gap: 6px;
        height: unset;
        padding: 16px 0 19px 15px;
        width: 100%;

 }
 @media (min-width:1025px){
    padding:20px 0px 34px 23px;
    gap:8px;
 }
 `
 export const Heading = styled.h4`
 font-size:0.6rem;
 line-height:16px
 letter-spacing:0.046rem;
 text-transform:uppercase;
 color:${(props)=> props.theme.colors.grayLight};

 @media (min-width:1025px){
    font-size:0.68rem;
    line-height:25px;
    letter-spacing:0.0625;

 }

 `;
 export const Desc = styled.p`
 font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.secondary};
    line-height: 100%;
    letter-spacing: -0.047rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};

    @media (min-width: 768px) {
        font-size: 1.5rem;
        letter-spacing: -0.056rem;
    }
 
 @media (min-width: 1025px) {
    font-size: 2.5rem;
    letter-spacing: -0.09375rem;
}
 `