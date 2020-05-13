import styled from 'styled-components/native';

export const FundoImagem = styled.View`
    border: 1.5px solid #000; 
    height: ${props => (props.focused ? '25px' : '0px')};
    width: ${props => (props.focused ? '25px' : '0px')};
    border-radius: ${props => (props.focused ? '12.5px' : '0px')};
    align-items: center;
    justify-content: center;
`;

export const ImageProfile = styled.Image`
    height: ${props => (props.focused ? '20px' : '24px')};
    width: ${props => (props.focused ? '20px' : '24px')};
    border-radius: ${props => (props.focused ? '10px' : '12px')};
`;

