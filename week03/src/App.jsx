import Header from './components/Header';
import styled from 'styled-components';
import Nav from './components/Nav';

function App() {
    return (
        <div className="App">
            <Title>Hello</Title>
            <Title>Hello</Title>
            <Title>Hello</Title>
            <Title>Hello</Title>
            <Header data="헤더" />
            <Nav />
        </div>
    );
}

export default App;

const Title = styled.h1`
    color: red;
`;
