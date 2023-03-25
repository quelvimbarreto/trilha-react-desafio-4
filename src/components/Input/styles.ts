import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 42px;
  color: #fff;

  border: 1px solid #650b9e;
  border-radius: 21px;
  overflow: hidden;

  & input {
    width: 100%;
    height: 42px;
    border-radius: 21px;
    background-color: #fafaface;
    border: 0;
    outline: none;
    padding: 10px 20px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  margin-left: 10px;
`;
