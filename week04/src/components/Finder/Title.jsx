import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    /* color: white; */
    font-size: 32;
`;

export default function Title(props) {
    const {title} = props
    return <StyledTitle>{title}</StyledTitle>;
}
