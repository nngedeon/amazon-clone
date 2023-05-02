import styled from "@emotion/styled";
import Card from "./Card";
const Home = ({}) => {
  return (
    <Container>
      <Banner className="banner">
        <img
          src={"https://m.media-amazon.com/images/I/81d5OrWJAkL._SX3000_.jpg"}
          alt="site baner"
        />
      </Banner>
      <Main>
        <Card
          title={"un casque bluetooth"}
          rating={3.8}
         
          image={
            "https://m.media-amazon.com/images/I/71WdPCSOq+L._AC_SL1500_.jpg"
          }
          price={200}
        />
        <Card title={"un casque bluetooth"}
        rating={3.8}
    
        image={
          "https://m.media-amazon.com/images/I/71WdPCSOq+L._AC_SL1500_.jpg"
        }
        price={200}/>
        <Card title={"un casque bluetooth"}
        rating={3.8}
      
        image={
          "https://m.media-amazon.com/images/I/71WdPCSOq+L._AC_SL1500_.jpg"
        }
        price={200}/>
        <Card title={"un casque bluetooth"}
        rating={3.8}
       
        image={
          "https://m.media-amazon.com/images/I/71WdPCSOq+L._AC_SL1500_.jpg"
        }
        price={200}/>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 232);
`;
const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    &:nth-of-type(2) {
      display: none;
    }
    @media only screen and (max-width: 767px) {
      &:nth-of-type(1) {
        display: none;
      }
      &:nth-of-type(2) {
        display: block;
      }
    }
  }
`;
const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 20px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0px;
  }
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Home;
