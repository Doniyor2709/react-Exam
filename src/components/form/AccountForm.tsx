"use client";
import "globals.scss"
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { request } from "@/server/request";
import { useRouter } from "next/navigation";
import { UserType } from "@/types/user";

const defaultTheme = createTheme();

export default function AccountForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserType | null>(null);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setLoading(true);
        const { data } = await request.get("auth/me");
        setUserInfo(data);
        setFormValues({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          username: data.username || "",
          phoneNumber: data.phoneNumber || "",
        });
      } finally {
        setLoading(false);
      }
    }
    getUserInfo();
  }, [setUserInfo])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(event.currentTarget);
      const userData = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        username: data.get("username"),
        phoneNumber: data.get("phoneNumber"),
      };

      await request.put("auth/update", userData);
      toast.success("saved is successfully!");
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" className="main_info">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}

        >
          <Typography component="h1" variant="h5" sx={{ mt: 5, }}>
            Account Information
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
           <div className="register__input">
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="Firstname"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={formValues.firstName}
              onChange={(e) =>
                setFormValues({ ...formValues, firstName: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Lastname"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              value={formValues.lastName}
              onChange={(e) =>
                setFormValues({ ...formValues, lastName: e.target.value })
              }
            />
            </div>
           <div className="register__input">
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formValues.username}
              onChange={(e) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone number"
              name="phoneNumber"
              autoComplete="phoneNumber"
              autoFocus
              value={formValues.phoneNumber}
              onChange={(e) =>
                setFormValues({ ...formValues, phoneNumber: e.target.value })
              }
            />

           </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
