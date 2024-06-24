import './App.css';
import {
  Typography,
  Button,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@mui/material';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  const color = 'white';

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              Payment Gateway
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              fugiat nemo veritatis labore, quaerat cupiditate dolore doloremque
              corporis fugit aliquam blanditiis esse nam architecto deleniti
              laboriosam officia tempora! Deleniti, error.
            </Typography>
            <div>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Pay Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Pay Later
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" style={{ marginTop: '100px' }}>
          <Grid container spacing={4}>
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://picsum.photos/200"
                  alt="Random Image"
                />
                <CardMedia className="" title="Image title" />
                <CardContent className="">
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
