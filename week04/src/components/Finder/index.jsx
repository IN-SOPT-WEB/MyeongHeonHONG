import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

export default function Index(props) {
    const { bringUsername, githubSearchList, deleteUsername } = props;

    const searchRef = useRef(null);
    const [hidden, setHidden] = useState(true);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            bringUsername(e.target.value);
            setHidden(true);
        }
    };

    const handleOnClick = (e) => {
        setHidden(false);
    };

    const handleOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setHidden(true);
        }
    };

    const handleDeleteClick = (e) => {
        deleteUsername(e.target.parentElement.firstChild.innerText);
    };

    useEffect(() => {
        window.addEventListener('click', handleOutside);
    }, [searchRef]);

    return (
        <>
            <FinderContainer>
                <Title>GitHub Profile Finder</Title>
                <Input
                    type="text"
                    placeholder="GitHub Username..."
                    onKeyPress={handleKeyPress}
                    onClick={handleOnClick}
                    ref={searchRef}
                ></Input>
            </FinderContainer>
            {!hidden &&
                githubSearchList.map((username, index) => (
                    <SearchListWrap key={index}>
                        <Username>{username}</Username>
                        <Button type="button" onClick={handleDeleteClick}>
                            X
                        </Button>
                    </SearchListWrap>
                ))}
        </>
    );
}

const FinderContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 550px;
    height: 100px;
    margin: 40px 0;
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
const SearchListWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 204px;
    background-color: #4078c0;
    opacity: 0.7;
`;

const Username = styled.li`
    display: flex;
    align-items: center;
    height: 30px;
    margin-left: 15px;
`;

const Button = styled.button`
    margin-right: 15px;
`;
