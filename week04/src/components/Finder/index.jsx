import React from 'react';
import styled from 'styled-components';

export default function index() {
    return (
        <FinderContainer>
            <Title>GitHub Profile Finder</Title>
            <Input type="text" placeholder="GitHub Username..."></Input>
        </FinderContainer>
    );
}

const FinderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 550px;
    height: 100px;
    margin: 40px;
    border-radius: 10px;
    background-color: #6e5494;
`;

const Title = styled.h1`
    color: white;
    font-size: 32px;
    font-weight: 700;
`;

const Input = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 7px;
    border: none;
    text-indent: 15px;
`;
