import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 28px;
  padding: 2rem 1rem 0;
`;

export const Title = styled.h1`
  color: #292c48;
  font-size: 48px;
  font-weight: 500;
  padding: 0px 1.4rem;
  margin: 1rem auto;
`;

export const Search = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  height: 50px;
  flex-direction: row;
  margin: 20px 40px 0 40px;
  padding-left: 24px;
  padding-right: 24px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  border-radius: 24px;
`;

export const SearchInput = styled.input`
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: rgb(68, 68, 68);
  border: 0;
  padding: 0 1rem;
  outline: none;
  -webkit-font-smoothing: antialiased;
`;

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  margin: 18px;
  max-width: 244px;
  height: 126px;
  padding: 18px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #292C48;
    }
  }

  section {
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #000;
    }
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    h1 {
      margin-top: 14px;
      font-size: 36px;
      font-weight: 100;
      line-height: 54px;
    }
  }
`;

export const CategoryContainer = styled.div`
   position: relative;
   min-width: 90%;

height: 200px;
  margin: auto 40px;
`;

export const CategoryItem = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  margin: 25px auto;
  max-width: 116px;
  height: 144px;
  padding: 18px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;


  header {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #292C48;
    }
  }
`;
