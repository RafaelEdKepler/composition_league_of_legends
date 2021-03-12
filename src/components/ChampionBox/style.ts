import styled from 'styled-components';

interface ContainerProps {
    quantityBright: string
}


export const Container = styled.div<ContainerProps>`
    width: 26rem;
    height: 130px;
    background: url("https://img.redbull.com/images/c_crop,x_0,y_0,h_405,w_1215/c_fill,w_1680,h_520/q_auto,f_auto/redbullcom/2019/08/22/ef08fb89-2622-4dcf-be1a-72b3352861fe/kaisa-league-of-legends");
    background-size: cover;
    transition: all 0.3s ease;
    filter: brightness(${props => props.quantityBright}%);

    display: flex;
    direction: rtl;


`;

export const SelectChampion = styled.button`
    margin-top: 55px;
    width: 1rem;
    height: 1rem;

    &:hover {
        cursor: pointer;
    }
`;
