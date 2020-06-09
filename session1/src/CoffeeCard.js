import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import { CardMedia } from "@material-ui/core";

function CoffeeCard(props) {
  const { title, price, description, avatarUrl, imageUrl } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={avatarUrl} />}
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia image={imageUrl} style={{ height: 200 }} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buw Now</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
