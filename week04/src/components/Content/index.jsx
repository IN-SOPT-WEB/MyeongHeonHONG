import React from 'react';
import styled from 'styled-components';

export default function Index(props) {
    const { githubData } = props;
    console.log(githubData);
    return (
        <ContentContainer>
            <div>{githubData['followers']}</div>
            <div>{githubData['following']}</div>
            <a href={githubData['html_url']}>깃허브 주소방문</a>
            <img src={githubData['avatar_url']} alt="" />
            <div>{githubData['login']}</div>
            <div>{githubData['name']}</div>
        </ContentContainer>
    );
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 550px;
    height: 400px;
    border-radius: 10px;
    background-color: #6e5494;
`;
