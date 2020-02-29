import React from "react";
import * as S from "./styled";

export interface IInputProps {
  isTextarea?: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<IInputProps> = props => {
  const { isTextarea, ...otherProps } = props;
  const [isFocus, setIsFocus] = React.useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const Component = isTextarea ? (S.Textarea as any) : S.Input;

  return (
    <Component
      {...otherProps}
      onFocus={onFocus}
      onBlur={onBlur}
      isFocus={isFocus}
    />
  );
};

export default Input;
