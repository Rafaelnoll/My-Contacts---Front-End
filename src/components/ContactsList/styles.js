import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const ListContainer = styled.div`
  margin-top: 16px;

  header {
    margin-bottom: 8px;

    button {
      display: flex;
      align-items: center;

      background-color: transparent;
      border: none;

      & span {
        font-weight: bold;
        margin-right: 8px;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
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
