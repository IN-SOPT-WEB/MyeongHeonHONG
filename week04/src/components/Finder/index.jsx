import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import UserList from './UserList';

export default function index(props) {
    const { bringUsername } = props;

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            bringUsername(e.target.value);
        }
    };

    return (
        <FinderContainer>
            <Title>GitHub Profile Finder</Title>
            <Input
                type="text"
                placeholder="GitHub Username..."
                onKeyPress={handleKeyPress}
            ></Input>
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
