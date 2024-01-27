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

export const InputSearchContainer = styled.div`
  margin-top: 48px;
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
