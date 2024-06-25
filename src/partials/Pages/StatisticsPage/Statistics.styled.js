import styled from 'styled-components';

export const StatSection = styled.div`
  color: var(--white);
  margin-top: 40px;
  width: 100%;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0px 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin: 0 auto;
    padding: 0 32px;
    max-width: 444px;
  }
  @media screen and (min-width: 1280px) {
    margin: 40px auto 0 auto;
    padding: 0;
    max-width: none;
  }
`;

export const RightSideStatWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const LeftSideWrapper = styled.div`
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 68px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
    margin-left: 69px;
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 10px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const DataWrapper = styled.div`
  width: 100%;
  padding-bottom: 45px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TitleStyled = styled.h1`
  color: var(--white);
  text-align: start;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

export const NoTransactionsMessage = styled.p`
  color: var(--white);
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;
