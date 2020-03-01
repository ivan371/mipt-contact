import React from "react";
import * as S from "./styled";

export interface IInputProps {
  isTextarea?: boolean;
  fullWidth?: boolean;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const Input: React.FC<IInputProps> = props => {
  const { isTextarea, onChange, ...otherProps } = props;
  const [isFocus, setIsFocus] = React.useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange!(event.target.value);
  };

  const Component = isTextarea ? (S.Textarea as any) : S.Input;

  return (
    <Component
      {...otherProps}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      isFocus={isFocus}
    />
  );
};

export default Input;
