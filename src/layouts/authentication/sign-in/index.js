import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Users } from "components/models/user";
import { useUser } from "context/UserContext";
import { useNavigate } from "react-router-dom";
import { Role } from "components/models/role";

function Basic() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    if (isValidEmail && password.length > 0) {
      const user = Users.filter(
        (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
      )[0];

      if (user) {
        setUser(user);
        let routePath = "";

        switch (user.role) {
          case Role.Admin:
            routePath = "/trending?page=1";
            break;
          case Role.UserWhoCanOnlySeeMovie:
            routePath = "/movies";
            break;
          case Role.UserWhoCanOnlySeeTvSeries:
            routePath = "/tv-series";
            break;
          default:
            break;
        }

        navigate(routePath);
      } else {
        alert("Email or password is invalid");
      }
    } else alert("Email or password is invalid");
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <div>
                <MDInput
                  type="email"
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  error={!isValidEmail}
                  helperText={!isValidEmail ? "Invalid email address" : ""}
                />
              </div>
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                value={password}
                onChange={handlePasswordChange}
                label="Password"
                fullWidth
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                onClick={handleSignIn}
                disabled={!isValidEmail}
                variant="gradient"
                color="info"
                fullWidth
              >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center"></MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
