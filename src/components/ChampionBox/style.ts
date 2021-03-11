import styled from 'styled-components';


export const Container = styled.div`
    width: 26rem;
    height: 130px;
    background: #000;
    border-style: solid;
    border-width: 0.2rem;
    border-color: #FF1;
    background: url("https://img.redbull.com/images/c_crop,x_0,y_0,h_405,w_1215/c_fill,w_1680,h_520/q_auto,f_auto/redbullcom/2019/08/22/ef08fb89-2622-4dcf-be1a-72b3352861fe/kaisa-league-of-legends");
    background-size: cover;
    transition: all 0.2s ease;
    filter: brightness(${props => props.bright}%);

`;
