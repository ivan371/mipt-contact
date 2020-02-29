import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../Input";
import { ticketCreate } from "../../actions/comment";
import { Button, Section } from "../styled";
import * as S from "./styled";

const CommentForm: React.FC = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  const onSave = () => {
    dispatch(ticketCreate({ body: text, ticketId: id! }));
    setText("");
  };

  return (
    <Section>
      <S.Wrapper>
        <Input isTextarea fullWidth onChange={setText} value={text} />
        <Button onClick={onSave}>Оставить комментарий</Button>
      </S.Wrapper>
    </Section>
  );
};

export default CommentForm;
