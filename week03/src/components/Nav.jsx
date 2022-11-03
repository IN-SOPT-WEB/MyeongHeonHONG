import styled from 'styled-components';

const StyleddNav = styled.nav`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
`;

Nav.defaultProps = {
    point: '0',
};

export default function Nav(props) {
    return <StyleddNav>{props.point} 점</StyleddNav>;
}
