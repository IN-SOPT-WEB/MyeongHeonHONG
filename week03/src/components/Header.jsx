import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: 700;
    color: white;
`;

export default function Header() {
    return <StyledHeader>👩🏻‍🦰👩🏻‍🦳인물퀴즈 게임👨🏻‍🦳👨🏻‍🦰</StyledHeader>;
}
