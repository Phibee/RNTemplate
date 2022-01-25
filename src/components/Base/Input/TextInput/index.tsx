import React from 'react';
import {Text, TextInput, TextInputProps} from 'react-native';
import styled from '@emotion/native'
import { COLORS, DEFAULTS, FONTS, SIZES } from '@constants/theme';
import { ColorsType } from '@constants/types';


const DEFAULT_BORDER_COLOR = '#dedede'

const InputWrapper = styled.View``

const LabelStyled = styled.Text`
    padding-left: 5px;
`

export interface ITextInputBaseProps extends TextInputProps {
    label?: string;
    rounded?: boolean;
    borderColorType?: keyof ColorsType;
  }
  
type TextInputStyleProps = Pick<ITextInputBaseProps, 'rounded' | 'borderColorType'>;

const TextInputStyled = styled.TextInput<TextInputStyleProps>`
   margin-bottom: 5px;
   border-width: 1px;
   line-height: 0;
   padding: 3px;
   padding-left: ${(SIZES.padding + 3) + 'px'};
   padding-right: ${SIZES.padding + 'px'};
   border-radius:  ${props => `${props.rounded ? SIZES.radius : DEFAULTS.RADIUS}px`};
   border-color: ${props => props.borderColorType ? COLORS[props.borderColorType] : DEFAULT_BORDER_COLOR};
`

const TextInputBase: React.FC<ITextInputBaseProps> = ({label, rounded = false, ...props}) => {
  return (
    <InputWrapper>
      <LabelStyled style={{...FONTS.body5}}>{label}</LabelStyled>
      <TextInputStyled {...props} rounded={rounded} style={{...FONTS.body5}} />
    </InputWrapper>
  );
};

export default TextInputBase;
