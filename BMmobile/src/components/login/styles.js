import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  /* height: 30%; */
  /* margin-bottom: 10px; */
`;

export const Input = styled.TextInput`
  height: 45px;
  margin: 5px 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cedece; 
  align-self: stretch;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  margin: 5px 15px;
  padding: 10px;
  border-radius: 5px;
  align-self: stretch;
  background: #00084e;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  text-transform: uppercase;
`;