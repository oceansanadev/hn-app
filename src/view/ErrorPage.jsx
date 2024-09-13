import { Button, Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Link as RouterLink } from "react-router-dom";

const GoBackButton = () => (
  <Button LinkComponent={RouterLink} to="/">
    Go Back
  </Button>
);

function ErrorPage() {
  const error = useRouteError();

  const containerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  };

  if (error.status === 404) {
    return (
      <Container sx={{ ...containerStyle }}>
        <SentimentDissatisfiedIcon fontSize="large" />
        <Typography variant="h5">404 Page Not found</Typography>
        <Typography variant="body1">
          Sorry, we couldn&apos;t find the page you&apos;re looking for
        </Typography>
        <GoBackButton />
      </Container>
    );
  }

  return (
    <Container sx={{ ...containerStyle }}>
      <SentimentDissatisfiedIcon fontSize="large" />
      <Typography variant="h5">Oops!!! Something went wrong </Typography>
      <Typography variant="body1">
        {error.statusText || error.message}
      </Typography>
      <GoBackButton />
    </Container>
  );
}

export default ErrorPage;
