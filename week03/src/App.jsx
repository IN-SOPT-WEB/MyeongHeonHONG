import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import image1 from './image/공유.jpeg';
import image2 from './image/마동석.jpeg';
import image3 from './image/서프라이즈.jpeg';
import image4 from './image/손석구.jpg';
import image5 from './image/윤지영.jpeg';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ecc9c9;
`;

const people = [
    ['공유', image1, ['홍명헌', '정현욱', '이주함', '공유', '김형겸']],
    ['마동석', image2, ['박현지', '장명지', '이서영', '마동석', '윤지영']],
    ['이수완', image3, ['이수완', '이수안', '서프라이즈 걔', '이수온', '이수']],
    ['손석구', image4, ['김필', '홍명헌', '손석구', '발석구', '티벳여우']],
];

const Done = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    font-size: 32px;
    font-weight: 700;
`;

export default function App() {
    const [index, setIndex] = useState(0);
    const [point, setPoint] = useState(0);
    const [answer, setAnswer] = useState(false);
    const [reset, setReset] = useState();

    const checkPerson = (example) => {
        if (example === people[index][0]) {
            alert('정답!!');
            setAnswer(true);
        } else {
            alert('땡!!');
            setAnswer(false);
        }
    };

    const resetGame = () => {
        setReset(true);
    };

    useEffect(() => {
        if (reset === true) {
            setIndex(0);
            setPoint(0);
        }
        setReset(false);
    }, [reset]);

    useEffect(() => {
        if (answer) {
            setPoint(point + 1);
            setIndex(index + 1);
        }
        setAnswer(false);
    }, [answer]);

    return (
        <Container>
            <Header />
            <Nav point={point} />
            {index === people.length && <Done>!끝!</Done>}
            {index < people.length && (
                <Main
                    image={people[index][1]}
                    example={people[index][2]}
                    person={people[index][0]}
                    checkPerson={checkPerson}
                    resetGame={resetGame}
                    index={index}
                    lenght={people.length}
                />
            )}
            {index === people.length && (
                <Main
                    image={image5}
                    example={people[index - 1][2]}
                    person={people[index - 1][0]}
                    checkPerson={checkPerson}
                    resetGame={resetGame}
                />
            )}
        </Container>
    );
}
