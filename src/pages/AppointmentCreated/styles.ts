import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 32px;
  text-align: center;
  color: #f4ede8;
  margin-top: 48px;
`;

export const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #999591;
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
  background: #ff9000;
`;

export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;