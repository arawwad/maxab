import styled from 'styled-components';

const Title = styled.h2`
    font-size: ${ props => props.size ? props.size : '46px' };
    text-align: ${ props => props.center ? 'center' : 'left' };
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.28;
    letter-spacing: 1.79px;
    color: #e9475b;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 10px;
`

export default Title



