import React from 'react';
import styled from 'styled-components';
import image from '../../images/25231.png';

export default function Index(props) {
    const { githubData, deleteContent } = props;
    return (
        <ContentContainer>
            <Button type="button" onClick={deleteContent}>
                X
            </Button>
            <UserImage src={githubData['avatar_url']} />
            <Title>{githubData['login']}</Title>
            <Title>{githubData['name']}</Title>
            <FollowWrap>
                <Title>
                    Follower
                    <div>{githubData['followers']}</div>
                </Title>
                <Title>
                    Following
                    <div>{githubData['following']}</div>
                </Title>
            </FollowWrap>
            <Title>
                <a href={githubData['html_url']}>
                    <LinkImage src={image} alt="프로필방문로고" />
                </a>
            </Title>
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

const FollowWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 100px;
`;

const UserImage = styled.img`
    width: 150px;
    height: 150px;
    margin-top: 20px;
    border-radius: 8px;
    object-fit: cover;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    color: #fff;
`;

const LinkImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: fill;
    border-radius: 50px;
    margin-bottom: 20px;
`;

const Button = styled.button`
    width: 45px;
    height: 45px;
    margin-top: 20px;
    border-radius: 50px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
`;
