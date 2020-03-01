import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../Input";
import { Button, Paragraph, Select } from "../styled";
import { ticketCreate } from "../../actions/ticket";
import * as S from "./styled";
import { categories } from "./constants";

export interface ITicketFormProps {
  isEdit?: boolean;
  title?: string;
  category?: string;
  isPrivate?: boolean;
  description?: string;
  onClose: () => void;
}

const TicketForm: React.FC<ITicketFormProps> = props => {
  const { isEdit, onClose } = props;
  const [isPrivate, setIsPrivate] = React.useState(Boolean(props.isPrivate));
  const [title, setTitle] = React.useState(props.title || "");
  const [description, setDescription] = React.useState(props.description || "");
  const [category, setCategory] = React.useState(
    props.category || categories[0]
  );

  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const handleSave = React.useCallback(async () => {
    const { id: ticketId } = await dispatch(
      ticketCreate({
        title,
        description,
        isPrivate,
        category,
        isEdit,
        ticketId: id
      })
    );
    onClose();
    if (!isEdit) {
      history.push(`/${ticketId}`);
    }
  }, [title, description, isPrivate, category, isEdit, id]);

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Paragraph>Название обращения</Paragraph>
        <Input value={title} onChange={setTitle} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>Категория</Paragraph>
        <Select onChange={event => setCategory(event.target.value)}>
          {categories.map((categoryItem, index) => (
            <option key={index} selected={category === categoryItem}>
              {categoryItem}
            </option>
          ))}
        </Select>
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>Описание</Paragraph>
        <Input isTextarea value={description} onChange={setDescription} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>Тип</Paragraph>
        <S.RadioWrapper>
          <S.Label>
            <input
              type="radio"
              checked={!isPrivate}
              onClick={() => setIsPrivate(false)}
            />
            <Paragraph>Публичное</Paragraph>
          </S.Label>
          <S.Label>
            <input
              type="radio"
              checked={isPrivate}
              onClick={() => setIsPrivate(true)}
            />
            <Paragraph>Приватное</Paragraph>
          </S.Label>
        </S.RadioWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>
          Публичное обращение будет видно всем пользователям, приватное только
          Вам
        </Paragraph>
      </S.InputWrapper>
      <Button onClick={handleSave}>
        {isEdit ? "Редактировать" : "Сообщить о проблеме"}
      </Button>
    </S.Wrapper>
  );
};

export default TicketForm;
