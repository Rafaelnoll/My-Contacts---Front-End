import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;

  & > img {
    max-width: 200px;
  }
`;
