
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
  export const CardsList = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, 320px);
  justify-content: space-evenly;
  margin: 0 auto;
  gap: 80px 30px;
  @media (max-width: 500px) {
    gap: 40px 30px;
  }
  `;

  const jump = keyframes`
  0%{
    transform: rotate(0)
  }100%{
    transform: rotate(360deg)
  }
`;

import styled, { keyframes } from 'styled-components';
