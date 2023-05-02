import React from "react";
import { useStateValue } from "./StateProvider";
import styled from "@emotion/styled";
const Checkout = () => {
//   const [{ basket }] = useStateValue();
  return (
    <Container>
      <Main>
        <ShppingCard>
          <h2>Shopping Cart</h2>
          <Product>
            <Image>
              <img
                src="https://m.media-amazon.com/images/I/71jMc3SVUxL._AC_SL1500_.jpg"
                alt="True HEPA Cleans up"
              />
            </Image>
            <Description>
              <h4>
                Shark HE601 Air Purifier 6 True HEPA Cleans up to 1200 Sq. Ft.,
                Captures 99.98% of Particles, dust, allergens, Smoke, 0.1–0.2
                microns, Advanced Odor Lock, Quiet, 6 Fan, White
              </h4>
              <p>$ 104</p>
            </Description>
          </Product>
        </ShppingCard>
        <Subtotal></Subtotal>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  heigt: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);
  border: 1px solid red;
  position: relative;
`;
const Main = styled.div`
  display: flex;
  padding: 15px;
`;
const ShppingCard = styled.div`
  background-color: #fff;
  padding: 15px;
  flex: 0.7;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: red;
`;
const Product = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  flex: 0.3;

  img {
    width: 100%;
  }
`;
const Description = styled.div``;

export default Checkout;
