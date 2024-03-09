import styled, { css } from 'styled-components';

export const InputSearchContainer = styled.div`
  margin-bottom: 32px;
  width: 100%;

  & > input {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 25px;
    outline: 0;
    padding: 0 16px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    &::placeholder{
      color: #BCBCBC;
    }
  }
`;

export const ErrorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 24px;

  .info {
    span {
      font-size: 22px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.danger.main};
      margin-bottom: 16px;
      display: block;
    }
  }
`;

export const Container = styled.div`
  margin-top: 32px;
`;

export const ListContainer = styled.div`
  margin-top: 16px;
`;

export const ListHeader = styled.header`
  margin-bottom: 8px;

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    border: none;

    span {
      font-weight: bold;
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transition: transform 0.2s ease-in;
      transform: ${({ orderby }) => (orderby === 'asc' ? 'rotate(180deg)' : 'rotate(0)')};
    }
}
`;

export const Header = styled.header`
  display: flex;
  justify-content: ${({ hasError }) => (hasError ? 'flex-end' : 'space-between')};
  align-items: center;

  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray['200-opacity-20']};

  & > strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]}
  }

  & > a {
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    padding: 8px 16px;
    font-weight: 600;
    transition: all 0.2s ease-in;

    ${({ hasContacts }) => !hasContacts && css`
      margin: 0 auto;
    `}

    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0px 4px 10px 0px #0000000A;

  & + & {
    margin-top: 16px;
  }

  .info{

    span {
      display: block;
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    .contact-name {
      display: flex;
      align-items: center;

      strong {
        color: ${({ theme }) => theme.colors.gray[900]};
        margin-right: 8px;
      }

      small {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        background-color: ${({ theme }) => theme.colors.primary.light};
        border-radius: 4px;
        padding: 4px 6px;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      border: none;
      background-color: transparent;
      margin-left: 8px;
    }
  }
`;

export const NoContactsContainer = styled.div`
  margin-top: 16px;

  img {
    margin-bottom: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }

  }

  text-align: center;
`;
