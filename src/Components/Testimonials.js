import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "react-multi-carousel";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
class Testimonials extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div className="row" style={{width: '100%!important'}}>
        <div className="four columns">
          <Card
            style={{
              textAlign: "left",
              margin: "5px",
              // maxWidth: "300px",
              height: "100%",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ronnyroehrig
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  <i className="fa fa-quote-left" /> &nbsp; Absolutely great
                  job. Seller answers quick and do any change you ask for. I
                  will do definitiv do business with him again. Best regards
                  from Germany <i className="fa fa-quote-right" />
                </Typography>
                <Rating name="size-large" value={5} readOnly size="large" />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="four columns">
          <Card
            style={{
              textAlign: "left",
              margin: "5px",
              // maxWidth: "300px",
              height: "100%",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ronnyroehrig
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  <i className="fa fa-quote-left" /> &nbsp; Absolutely great
                  job. Seller answers quick and do any change you ask for. I
                  will do definitiv do business with him again. Best regards
                  from Germany <i className="fa fa-quote-right" />
                </Typography>
                <Rating name="size-large" value={5} readOnly size="large" />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="four columns">
          <Card
            style={{
              textAlign: "left",
              margin: "5px",
              // maxWidth: "300px",
              height: "100%",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ronnyroehrig
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  <i className="fa fa-quote-left" /> &nbsp; Absolutely great
                  job. Seller answers quick and do any change you ask for. I
                  will do definitiv do business with him again. Best regards
                  from Germany <i className="fa fa-quote-right" />
                </Typography>
                <Rating name="size-large" value={5} readOnly size="large" />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>


      </div>
    );
  }
}

export default Testimonials;
