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

export default function Signup() {
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
            Sign Up
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
            Sign Up
          </Button>

          <Typography variant="caption" display="block">
            アカウントを持っていますか？
            <Link href="#">Sign In</Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>

    // <Container>
    //   <LoginCard>
    //     <Typography variant="h5" gutterBottom>
    //       アカウント作成
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
    //       アカウント作成
    //     </Button>
    //     <Typography variant="caption" display="block">
    //       アカウントを持っていますか？
    //       <Link href="#">ログイン</Link>
    //     </Typography>
    //   </LoginCard>
    // </Container>
  );
}
