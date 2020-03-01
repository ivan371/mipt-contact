import React from "react";
import vk from "../../assets/vk.png";
import fb from "../../assets/fb.png";
import * as S from "./styled";

interface ISocialShareProps {
  title?: string;
  description?: string;
}

const SocialShare: React.FC<ISocialShareProps> = ({ title, description }) => {
  const url = window.location.href;
  const vkLink = `http://vk.com/share.php?title=${title}&description=${description}&url=${url}`;
  const fbLink = `http://www.facebook.com/sharer.php?src=sp&t=${title}&u=${url}`;

  if (!title && !description) {
    return null;
  }

  return (
    <S.Wrapper>
      <a href={vkLink} target="_blank">
        <img src={vk} />
      </a>
      <a href={fbLink} target="_blank">
        <img src={fb} />
      </a>
    </S.Wrapper>
  );
};

export default SocialShare;
