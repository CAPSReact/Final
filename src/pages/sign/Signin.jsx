import React, { useState } from "react";
import {
  Wrapper,
  Label,
  Input,
  Title,
  Introduce,
  ButtonStyle,
} from "../../styles/style";

export default function Signin() {
  const [id, setId] = useState("");
  const [pw, setPW] = useState("");
  const [option, setOption] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value); // 'id' 상태를 업데이트하는 함수
  };

  const handlePWChange = (event) => {
    setPW(event.target.value); // 'id' 상태를 업데이트하는 함수
  };

  return (
    <Wrapper>
      <Title top="132px">로그인</Title>
      <Introduce>반갑습니다.</Introduce>
      <Label htmlFor="id" top="67px">
        ID
      </Label>
      <Input
        id="id"
        type="text"
        value={id}
        onChange={handleIdChange}
        placeholder="id"
      />
      <Label htmlFor="pw" top="16px">
        Password
      </Label>
      <Input
        id="pw"
        type="text"
        value={pw}
        onChange={handlePWChange}
        placeholder="password"
      />
      <ButtonStyle top="140px">로그인</ButtonStyle>
    </Wrapper>
  );
}
