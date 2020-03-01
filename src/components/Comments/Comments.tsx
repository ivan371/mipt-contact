import React from "react";
import { useSelector } from "react-redux";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import * as S from "./styled";

export interface ICommentsProps {
  commentList: string[];
}

const Comments: React.FC<ICommentsProps> = ({ commentList }) => {
  const comments = useSelector<IState, ICommentState["comments"]>(
    state => state.comment.comments
  );

  const isAuth = Boolean(window.localStorage.getItem("token"));

  if (!commentList) {
    return null;
  }

  return (
    <S.Wrapper>
      <React.Fragment>
        {commentList.map(commentId => (
          <Comment key={commentId} comment={comments[commentId]} />
        ))}
      </React.Fragment>
      {isAuth && <CommentForm />}
    </S.Wrapper>
  );
};

export default Comments;
