import styled from "styled-components";

export default function CustomInput({...props}){
  return(
    <InputWrapper>
      <InputTitle>
        {props.title}
      </InputTitle>
      <Input 
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={ (e) => {props.onChange(e.target.value)}}
        disabled={props.disabled}
        required={props.required}
      />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
`

const InputTitle = styled.h3`
  color: #B1B1B1;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 5px;
`

const Input = styled.input`
  width: 100%;
  color: #3C3C3C;
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-bottom: 2px solid #B1B1B1;

  :focus{
    outline: none;
  }
`