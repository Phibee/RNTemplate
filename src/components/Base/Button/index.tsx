import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import styled from '@emotion/native';
import {ALIGNMENT, COLORS, DEFAULTS, FONTS, SIZES} from '@constants/theme';
import {AlignmentType, ColorsType} from '@constants/types';

const color = require('color');
const DEFAULT_ALIGNMENT: keyof AlignmentType = 'left';
const DEFAULT_COLOR: keyof ColorsType = 'primary';

export interface IButtonBaseProps {
  align?: keyof AlignmentType;
  buttonStyle?: StyleProp<TextStyle> | undefined;
  color?: string;
  label: string;
  rounded?: boolean;
  onPress?: () => void;
  colorType?: keyof ColorsType;
  textStyle?: StyleProp<TextStyle> | undefined;
}

type ButtonStyleProps = Pick<
  IButtonBaseProps,
  'rounded' | 'align' | 'colorType'
>;

const ButtonWrapper = styled.TouchableOpacity<ButtonStyleProps>`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${props =>
    `${props.rounded ? SIZES.radius : DEFAULTS.RADIUS}px`};
  justify-content: ${props => ALIGNMENT[props.align ?? DEFAULT_ALIGNMENT]};
  background-color: ${props => COLORS[props.colorType ?? DEFAULT_COLOR]};
`;

const TextStyled = styled.Text``;

const ButtonBase: React.FC<IButtonBaseProps> = ({
  buttonStyle,
  color,
  label,
  rounded = false,
  onPress,
  textStyle,
  ...props
}) => {
  return (
    <ButtonWrapper
      {...props}
      onPress={onPress}
      rounded={rounded}
      style={[
        buttonStyle
      ]}>
      <TextStyled {...props} style={[FONTS.body5, textStyle]}>
        {label}
      </TextStyled>
    </ButtonWrapper>
  );
};

export default ButtonBase;
