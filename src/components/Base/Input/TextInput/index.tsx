import React from 'react';
import {TextInputProps} from 'react-native';
import styled from '@emotion/native';
import {COLORS, DEFAULTS, FONTS, SIZES} from '@constants/theme';
import {ColorsType} from '@constants/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DEFAULT_BORDER_COLOR = '#dedede';

const InputWrapper = styled.View``;

const InputAndIconWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const LabelStyled = styled.Text`
  padding-left: 5px;
`;

const IconWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  right: 8px;
  top: -3px;
  justify-content: center;
  align-items: center;
`;

export interface ITextInputBaseProps extends TextInputProps {
  borderColorType?: keyof ColorsType;
  label?: string;
  rounded?: boolean;
  /**
   * Defines what type of input
   * @default 'text'
   */
  type?: 'text' | 'password';
}

type TextInputStyleProps = Pick<
  ITextInputBaseProps,
  'rounded' | 'borderColorType'
>;

const TextInputStyled = styled.TextInput<TextInputStyleProps>`
  flex-grow: 1;
  margin-bottom: 5px;
  border-width: 1px;
  line-height: 0;
  padding: 3px;
  padding-left: ${SIZES.padding + 3 + 'px'};
  padding-right: ${SIZES.padding + 'px'};
  border-radius: ${props =>
    `${props.rounded ? SIZES.radius : DEFAULTS.RADIUS}px`};
  border-color: ${props =>
    props.borderColorType
      ? COLORS[props.borderColorType]
      : DEFAULT_BORDER_COLOR};
`;

const TextInputBase: React.FC<ITextInputBaseProps> = ({
  label,
  rounded = false,
  type = 'text',
  ...props
}) => {
  const [value, setValue] = React.useState<string>(props.value ?? '');
  const [visible, setVisible] = React.useState<boolean>(false);

  const isPassword = React.useMemo(
    () => type == 'password' && !visible,
    [type, visible],
  );

  return (
    <InputWrapper>
      <LabelStyled style={{...FONTS.body5}}>{label}</LabelStyled>
      <InputAndIconWrapper>
        <TextInputStyled
          {...props}
          value={value}
          rounded={rounded}
          secureTextEntry={type == 'password' && !visible}
          underlineColorAndroid="transparent"
          style={{
            ...FONTS.body5,
            letterSpacing:
              isPassword && value !== '' ? 5 : FONTS.body5.letterSpacing,
            fontFamily:
              isPassword && value !== ''
                ? 'Poppins-ExtraBold'
                : FONTS.body5.fontFamily,
          }}
          onChangeText={e => {
            props.onChangeText?.(e);
            setValue(e);
          }}
        />
        <IconWrapper onPressIn={e => setVisible(!visible)}>
          <Icon
            name={!visible ? 'visibility' : 'visibility-off'}
            size={20}
            color="#7a7a7a"
            style={{
              display: type === 'password' && value !== '' ? 'flex' : 'none',
            }}
          />
        </IconWrapper>
      </InputAndIconWrapper>
    </InputWrapper>
  );
};

export default TextInputBase;
