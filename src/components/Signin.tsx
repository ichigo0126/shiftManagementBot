import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { teal } from "@mui/material/colors";
import React from "react";
// import { styled } from "@mui/system";

// const Container = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "100vh",
//   backgroundColor: "#f0f0f0",
// });

// const LoginCard = styled("div")({
//   backgroundColor: "#fff",
//   padding: "20px",
//   borderRadius: "10px",
//   boxShadow: "0 0 10px rgba(0,0,0,0.1)",
// });

export default function Signin() {
  return (
    <Grid>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: "70vh",
          width: "280px",
          m: "20px auto",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
          alignItems="center"
        >
          <Avatar sx={{ bgcolor: teal[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant={"h5"} sx={{ m: "30px" }}>
            Sign In
          </Typography>
        </Grid>
        <TextField label="Username" variant="standard" fullWidth required />
        <TextField
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          required
        />
        {/* ラベルとチェックボックス */}
        {/* <FormControlLabel
          labelPlacement="end"
          label="パスワードを忘れました"
          control={<Checkbox name="checkboxA" size="small" color="primary" />}
        /> */}

        <Box mt={3}>
          <Button type="submit" color="primary" variant="contained" fullWidth>
            サインイン
          </Button>

          <Typography variant="caption">
            <Link href="#">パスワードを忘れましたか？</Link>
          </Typography>
          <Typography variant="caption" display="block">
            アカウントを持っていますか？
            <Link href="#">アカウントを作成</Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>

    // <Container>
    //   <LoginCard>
    //     <Typography variant="h5" gutterBottom>
    //       ログイン
    //     </Typography>
    //     <TextField
    //       variant="outlined"
    //       margin="normal"
    //       fullWidth
    //       label="ユーザー名"
    //     />
    //     <TextField
    //       variant="outlined"
    //       margin="normal"
    //       fullWidth
    //       label="パスワード"
    //       type="password"
    //     />
    //     <Button variant="contained" color="primary" fullWidth>
    //       ログイン
    //     </Button>
    //     <Typography variant="caption" display="block">
    //       アカウントを持っていますか？
    //       <Link href="#">アカウントを作成</Link>
    //     </Typography>
    //   </LoginCard>
    // </Container>
  );
}
