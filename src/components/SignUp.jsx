import { Stack, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";

const Login = () => {
  return (
    <Box
    sx={{
      width: "100%",
      minWidth:'450px',
      mx: "auto",
      display:'flex',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      p: 15,
    
    }}
  >
      <img
        src={require("../assets/img/amazon.png")}
        alt="an amazon logo"
        className="imgLogo"
      />
      <Stack spacing={2} sx={{ mt: "20px" }} className="login">
        <Typography variant="h4" sx={{ mb: "5px" }}>
          Sign Up
        </Typography>
        <Box component="form"
        
        >
          <Typography variant="body1">Name</Typography>
          <Input type="text" />
          <Typography variant="body1">Email</Typography>
          <Input type="mail" />
          <Typography variant="body1">Password </Typography>
          <Input type="text" />
          <Box sx={{ width: "90%", mt: 2 }}>
          <Button variant="outlined" sx={{ width: "100%"  }}>
          {" "}
          Create an acount{" "}
        </Button></Box>

          
          <DivText>
          <Typography variant="subtitle1" sx={{ mt: 2}}>
            {" "}
            By countinuing, you agree to Amazon's conditions of use Privacy
            Notice.
          </Typography></DivText>
        </Box>
      </Stack>
      <Box sx={{ width: "25%", mt:3 }}>
      <Button
        variant="contained"
        sx={{ width: "100%", borderRadius: "5px"}}
      >
        Login
      </Button>
    </Box>
    </Box>
  );
};
const Input = styled.input`
  margin-bottom: 20px;
  padding-left: 5px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;

  width: 95%;
`;
const DivText = styled.div`
  text-align-last: justify;
  text-align: justify;
&:after {
  display: inline-block;
  width: 100%;
 
}
`

export default Login;
