import React from "react";
import { Button, Title } from "../styled";
import { getStatusActionText, getStatusAction } from "./../../utils";
import * as S from "./styled";

export interface IStatusChangeProps {
  status: IStatus;
  onChangeStatus: (status: IStatus) => void;
  onClose: () => void;
}

const StatusChange: React.FC<IStatusChangeProps> = ({
  status,
  onChangeStatus,
  onClose
}) => {
  const title =
    status === "RESOLVE"
      ? "Выберите статус для перевода"
      : `Перевести проблему в статус "${getStatusActionText(status)}" ?`;

  const activeButton =
    status === "RESOLVE" ? (
      <S.ButtonInner>
        <Button fullWidth onClick={() => onChangeStatus("OPEN")}>
          Вернуть на доработку
        </Button>
        <Button
          fullWidth
          onClick={() => onChangeStatus(getStatusAction(status)!)}
        >
          Закрыть
        </Button>
      </S.ButtonInner>
    ) : (
      <Button
        fullWidth
        onClick={() => onChangeStatus(getStatusAction(status)!)}
      >
        Перевести
      </Button>
    );

  return (
    <div>
      <Title>{title}</Title>
      <S.ButtonWrapper>
        {activeButton}
        <Button fullWidth isMuted onClick={onClose}>
          Отмена
        </Button>
      </S.ButtonWrapper>
    </div>
  );
};

export default StatusChange;
