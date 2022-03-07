import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 50px 100px;
  @media (max-width: 1000px) {
    padding: 50px;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
  `;
