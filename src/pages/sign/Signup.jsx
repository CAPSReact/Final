import React, { useState } from "react";
import {
  Wrapper,
  Input,
  Label,
  Title,
  Introduce,
  ButtonStyle,
  Select,
} from "../../styles/style";

export default function SignUp() {
  const [id, setId] = useState("");
  const [pw, setPW] = useState("");
  const [option, setOption] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value); // 'id' 상태를 업데이트하는 함수
  };

  const handlePWChange = (event) => {
    setPW(event.target.value); // 'id' 상태를 업데이트하는 함수
  };

  const handleSelectChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Wrapper>
      <Title top="80px">회원가입</Title>
      <Introduce>반갑습니다.</Introduce>
      <Label htmlFor="id" top="30px">
        ID
      </Label>
      <Input id="id" type="text" value={id} onChange={handleIdChange} />
      <Label htmlFor="pw" top="16px">
        PW
      </Label>
      <Input id="pw" type="text" value={pw} onChange={handlePWChange} />
      <Label htmlFor="person" top="16px">
        회원 유형
      </Label>
      <Select id="person" value={option} onChange={handleSelectChange}>
        <option value="0">부원</option>
        <option value="1">집행부</option>
        <option value="2">부회장</option>
        <option value="3">회장</option>
      </Select>
      <ButtonStyle top="140px">가입</ButtonStyle>
    </Wrapper>
  );
}
