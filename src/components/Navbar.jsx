import styled from "@emotion/styled";
import { useStateValue } from './StateProvider';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const [{basket}] = useStateValue()
  return (
    <Container>
      <Inner>
        <Logo>
          <img src={require("../assets/img/amazon.png")} alt="amazon logo" />
        </Logo>
        <SearchBar>
          <input type="text" placeholder="search...." />
          <SearchIcon>
            <img src={require("../assets/img/search .png")} alt="amazon logo" />
          </SearchIcon>
        </SearchBar>
        <RightContainer>
          <NavButton>
            <p>hello</p>
            <p>guest</p>
          </NavButton>

          <NavButton>
            <p>Returns</p>
            <p>Order</p>
          </NavButton>
          <BasketButton onClick={()=> navigate("/checkout")}>
          <img src={require("../assets/img/basket.png")} alt="basket image"/>
          <p>{ basket.length }</p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchBar>
          <input type="text" placeholder="search...." />
          <SearchIcon>
            <img src={require("../assets/img/search .png")} alt="amazon logo" />
          </SearchIcon>
        </MobileSearchBar>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  position: sticky;
  alignitems: center;
  background-color: #131921;
  @media only screen and (max-width: 767px) {
    height:120px;
    flex-direction:column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;
const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;

const MobileSearchBar = styled.div`
  height: 35px;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  input {
      flex: 1;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    outline:none;
    &::placeholder {
      padding-left: 10px;
  }
  }
  @media only screen and (min-width: 768px) {
    display:none;
  }
`;
const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  input {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    outline:none;
    &::placeholder {
      padding-left: 10px;
  }
  }
  @media only screen and (max-width: 767px) {
    display:none;
  }
`;
const RightContainer = styled.div`
display:flex;
align-items:center;
height:100%;
width: fit-content;
padding: 5px 15px;
justify-content: space-between;

`;
const SearchIcon = styled.div`
  margin-top: 5px;
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  cursor:pointer;
  img {
    width: 22px;
  }
`;
const NavButton = styled.div`
color:#fff;
padding:5px;
display:flex;
cursor:pointer;
flex-direction: column;
justify-content:center;
margin-left:15px;
height: 80%;

p {
    &:nth-of-type(1) {
        font-size: 12px;

    }
    &:nth-of-type(2) {
        font-size:15px;
        font-weigt: 600;
    }
}
`;
const BasketButton = styled.div`
display:flex;
align-items:center;
height: 90%;
cursor:pointer;
margin-left: 10px;


p {
  color: #fff;
  margin-left: 10px;
  font-weight: 600;
  width:30px;
}

img {
    width:33px;
}
`;
export default Navbar;
