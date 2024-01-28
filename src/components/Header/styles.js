import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 48px;

  & > img {
    max-width: 200px;
  }
`;
