import styled from "styled-components"

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 0 auto 8px;
  padding: 8px 4px;
  display: block;
  width: 90%;
  &[disabled] {
    opacity: 0.3;
  }
`

export const Button = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  margin: 0 auto;
  width: 90%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  margin-left: 5%;
`

export const Error = styled.span`
  font-size: 14px;
  color: red;
  margin-left: 5%;
`
