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
        <FinderContainer>
            <Title>GitHub Profile Finder</Title>
            <Input
                type="text"
                placeholder="GitHub Username..."
                onKeyPress={handleKeyPress}
                onClick={handleOnClick}
                ref={searchRef}
            ></Input>
            {!hidden &&
                githubSearchList.map((username, index) => (
                    <SearchListWrap key={index}>
                        <Username>{username}</Username>
                        <button
                            type="button"
                            style={{
                                backgroundColor: 'blue',
                                cursor: 'pointer',
                            }}
                            onClick={handleDeleteClick}
                        >
                            X
                        </button>
                    </SearchListWrap>
                ))}
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
const SearchListWrap = styled.div`
    display: flex;
    justify-content: space-beteween;
    align-items: center;
    background-color: orange;
`;

const Username = styled.div`
    width: 200px;
    height: 30px;
    justify-content: space-between;
    align-items: center;
`;
