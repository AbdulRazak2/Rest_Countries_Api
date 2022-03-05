import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 10px 30px;
`;

export const InputField = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  max-width: 400px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  svg {
    width: 20px !important;
    height: auto;
    margin: 0 20px;
  }
  input {
    color: ${({ theme }) => theme.colors.white};
    width: calc(100% - 65px);
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border: none;
    font-weight: 600;
    outline: none;
    font-family: inherit;
    caret-color: ${({ theme }) => theme.colors.white};
    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;