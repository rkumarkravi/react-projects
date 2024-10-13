/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import './WelcomePage.css';
const Login: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Paper variant="elevation">
        <Grid container spacing={4}>
          {/* Left Side - Welcome and Features */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Welcome to InstaClone! 📸
            </Typography>
            <Typography variant="body1" paragraph>
              Unleash your creativity, share moments, and connect with the
              world. InstaClone is your canvas for self-expression, a place
              where your stories come to life through photos and videos. Join
              the community of visual storytellers, explore inspiring content,
              and let your unique perspective shine.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Get started now:
            </Typography>
            <Typography variant="body1">
              📷 Capture Moments: Share the beauty of your world through
              stunning photos and videos.
            </Typography>
            <Typography variant="body1">
              🤝 Connect with Friends: Follow, like, and comment to stay close
              to the people who matter most.
            </Typography>
            <Typography variant="body1">
              🌐 Explore: Discover new perspectives and connect with a global
              community of creators.
            </Typography>
            <Typography variant="body1">
              🎨 Express Yourself: Customize your profile, share your passions,
              and let your personality shine.
            </Typography>
            <Typography variant="body1">
              Ready to embark on a visual journey? Dive into InstaClone and
              start sharing your story today!
            </Typography>
          </Grid>

          {/* Right Side - Login/Sign Up Form */}
          <Grid item xs={12} sm={6}>
            <Paper
              variant="outlined" className="login-form-wrapper"
            >
              {/* Your Login/Sign Up form components go here */}
              <Typography variant="h5" gutterBottom>
                Login / Sign Up
              </Typography>
              {/* Your form components go here, e.g., text fields, buttons */}
              <form className="login-form">
                {/* Example: */}
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <Button variant="contained" color="primary" type="submit">
                  Login
                </Button>
                {/* Additional form fields and buttons as needed */}
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
