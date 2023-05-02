import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import { useStateValue } from "./StateProvider";
const Card = ({ title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket ...", basket);
  const addToCard = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      items: {
        title,
        image,
        rating,
        price,
      },
    });
  };

  return (
    <Container>
      <Image>
        <img src={image} alt="an philips casque" />
      </Image>
      <Description>
        <h5>{title}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p>$ {price}</p>
        <button onClick={addToCard}> Add to card </button>
      </Description>
    </Container>
  );
};
const Container = styled.div`
  color: black;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 200px;
    margin-top: 20px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    font-weight: 600;
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;
