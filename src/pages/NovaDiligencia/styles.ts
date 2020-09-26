import styled from 'styled-components/native';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
  align-items: flex-start;
`;

export const Custom = styled(RNPickerSelect)<PickerSelectProps>``;

export const DropDown = styled.View`
  width: 100%;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
`;

export const DropDownGroup = styled.View`
  width: 100%;
  padding: 0 0 10px 0;
`;
export const DropDownTitle = styled.Text`
  padding: 0 8px 8px 10px;
  font-size: 20px;
  color: #fff;
`;
