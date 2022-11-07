import styled from 'styled-components';

const StyledContent = styled.main`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledScore = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 700;
`;

const ImageBox = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 5px;
    object-fit: cover;
`;

const NameList = styled.div`
    list-style: none;
    width: 400px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

const NameItem = styled.button`
    list-style: none;
    width: 75px;
    height: 35px;
`;

const ResetBtn = styled.button`
    list-style: none;
    width: 210px;
    height: 35px;
`;

const BtnWrap = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

Content.defaultProps = {
    point: '0',
};

export default function Content(props) {
    const { image, example, checkPerson, resetGame, index, length } = props;

    return (
        <StyledContent>
            <StyledScore>{props.point} 점</StyledScore>
            <ImageBox src={image}></ImageBox>
            {index !== length && (
                <NameList>
                    <NameItem onClick={() => checkPerson(example[0])}>
                        {example[0]}
                    </NameItem>
                    <NameItem onClick={() => checkPerson(example[1])}>
                        {example[1]}
                    </NameItem>
                    <NameItem onClick={() => checkPerson(example[2])}>
                        {example[2]}
                    </NameItem>
                    <NameItem onClick={() => checkPerson(example[3])}>
                        {example[3]}
                    </NameItem>
                    <NameItem onClick={() => checkPerson(example[4])}>
                        {example[4]}
                    </NameItem>
                </NameList>
            )}
            <BtnWrap>
                <ResetBtn onClick={resetGame}>다시하기</ResetBtn>
            </BtnWrap>
        </StyledContent>
    );
}
