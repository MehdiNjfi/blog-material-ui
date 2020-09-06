import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Avatar,
  Box,
} from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  postsContainer: {
    paddingTop: theme.spacing(3),
  },
  postsTitle: {
    paddingBottom: theme.spacing(3),
  },
  card: {
    margin: "1em",
    maxWidth: "100%",
  },
  media: {
    height: 200,
  },
  cardActions: {
    display: "felx",
    justifyContent: "space-between",
    margin: "0 10px",
  },
  author: {
    display: "flex",
    alignItems: "center",
  },
  authorDetail: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Posts = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.postsContainer}>
      <Typography variant="h4" className={classes.postsTitle}>
        Posts
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://blog.logrocket.com/wp-content/uploads/2020/05/javascript-payment-request-api-nocdn.jpg"
                title="Cashing in on the JavaScript Payment Request API"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cashing in on the JavaScript Payment Request API
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://marketplace.canva.com/p8EPc/MADvusp8EPc/1/s2/canva-person-using-headphone-MADvusp8EPc.jpg" />
                <Box className={classes.authorDetail} ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Terence Jeong
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    May 6, 2020 ・ 9 min read
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--XTZfb7kj--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/6izq05v1iof81oh5pl2n.png"
                title="Is React Native Good for Startups?"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Is React Native Good for Startups?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1521838987/photosp/371b7901-4b1f-453c-b3fb-ae40efb8f153/371b7901-4b1f-453c-b3fb-ae40efb8f153.jpg" />
                <Box className={classes.authorDetail} ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Eslam Hefnawy
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    May 5, 2020 ・ 6 min read
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://blog.logrocket.com/wp-content/uploads/2020/06/improve-performance-inlining-css-nocdn.jpg"
                title="Improve site performance by inlining your CSS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Improve site performance by inlining your CSS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1521838987/photosp/28202868-ae4f-43ba-9b61-4b8a69803a96/28202868-ae4f-43ba-9b61-4b8a69803a96.jpg" />
                <Box className={classes.authorDetail} ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Timothy Vernon
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    June 4, 2020 ・ 7 min read
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--SnVNfIdj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/etfxkw4syies3pt35tny.png"
                title="Functional Programming in Javascript"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Functional Programming in Javascript
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1588714045/photosp/1ad328b5-76d7-4dd3-b0f1-f5d73b2851a7/1ad328b5-76d7-4dd3-b0f1-f5d73b2851a7.jpg" />
                <Box className={classes.authorDetail} ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Alexander Nnakwue
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    April 16, 2020 ・ 12 min read
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--LTPUwi3a--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ndrio4uyls3c9bz5wtt3.png"
                title="Learn Data Structure & Algorithm in JavaScript | Part 01"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Learn Data Structure & Algorithm in JavaScript | Part 01
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://res.cloudinary.com/practicaldev/image/fetch/s--jco1cnkE--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/315388/181f2614-de17-468d-8089-f7cc51155aef.png" />
                <Box className={classes.authorDetail} ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Edison Pebojot(👨‍💻)
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    Sep 06, 2020 ・13 min read
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--_Sail8sN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/524r9p9t34df4rn2135t.png"
                title="Two worlds of Front-End Development"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Two worlds of Front-End Development
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://res.cloudinary.com/practicaldev/image/fetch/s--p1bh5_Jv--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/464381/6aca711f-e387-4e00-a0dc-633040137694.jpeg" />
                <Box className={classes.authorDetail} ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Abhinav Jha
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    Sep 6 2020 ・ 2 min read
                  </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
