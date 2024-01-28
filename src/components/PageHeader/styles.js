import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 8px;

    img {
      transform: rotate(270deg);
      margin-right: 8px;
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};
    font-weight: 700;
  }

`;
