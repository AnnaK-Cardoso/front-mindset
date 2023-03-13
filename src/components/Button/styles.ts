import styled from 'styled-components';

interface SelectedType {
    type2: boolean;
}
interface OnClickButton {
    selected: boolean;
}

export const Container = styled.div<SelectedType>`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #272727;
    width: fit-content;
    padding: 4px;
    height: 48px;
    border: ${(props) => (props.type2 ? '2px solid #faff00' : 'none')};
    border-radius: ${(props) => (props.type2 ? '8px' : 'none')};
`;
export const Button = styled.span<OnClickButton>`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.25px;
    cursor: pointer;
    text-transform: uppercase;
    text-underline-offset: 4px;
    text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
    color: ${(props) => (props.selected ? '#faff00' : '#fafafa')};
`;
