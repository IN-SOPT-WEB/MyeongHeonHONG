import styled from 'styled-components';
import '../App.css';
import Finder from '../components/Finder';
import Content from '../components/Content';
import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

export default function Main() {
    const [githubData, setGithubData] = useState();
    const [githubSearchList, setGithubSearchList] = useState([]);
    const [openContent, setOpenContent] = useState(false);

    const bringUsername = (username) => {
        axios
            .get(`${API_URL + username}`)
            .then((resopnse) => {
                if (resopnse['status'] === 200) {
                    setGithubData(resopnse['data']);
                    setGithubSearchList((prev) => [
                        ...new Set(prev).add(username),
                    ]);
                    setOpenContent(true);
                }
            })
            .catch((error) => {
                alert(error);
            });
    };


    const deleteUsername = (username) => {
        setGithubSearchList((prev) =>
            prev.filter((data) => {
                return data !== username;
            })
        );
    };

    const deleteContent = () => {
        setOpenContent(false);
    };

    return (
        <Container>
            <Finder
                bringUsername={bringUsername}
                githubSearchList={githubSearchList}
                deleteUsername={deleteUsername}
            ></Finder>
            {openContent && (
                <Content
                    githubData={githubData}
                    deleteContent={deleteContent}
                ></Content>
            )}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
