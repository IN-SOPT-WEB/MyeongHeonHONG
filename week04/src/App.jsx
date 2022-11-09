import styled from 'styled-components';
import './App.css';
import Finder from './components/Finder';
import { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = 'https://api.github.com/users/';

export default function App() {
    const [githubData, setGithubData] = useState();
    const [githubUserList, setGithubUserList] = useState(new Set());

    const bringUsername = (username) => {
        axios
            .get(`${API_URL + username}`)
            .then((resopnse) => {
                if (resopnse['status'] === 200) {
                    setGithubData(resopnse['data']);
                    setGithubUserList((prev) => new Set(prev.add(username)));
                }
            })
            .catch((error) => {
                alert(error);
            });
    };
    console.log(githubUserList);

    return (
        <Container>
            <Finder
                bringUsername={bringUsername}
                githubUserList={githubUserList}
            ></Finder>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
