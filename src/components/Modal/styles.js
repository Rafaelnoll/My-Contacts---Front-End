import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: #22222299;
  backdrop-filter: blur(5px);

  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.medium : theme.colors.gray[900])};
  }

  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;

  margin-top: 32px;

  .cancel-button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-right: 8px;
  }
`;
