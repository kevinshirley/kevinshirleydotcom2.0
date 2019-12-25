import React from 'react';
import cx from 'classnames';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ImgMediaCard(props: any) {
  const { title, description, image, isModal, isCard } = props;

  const cardClasses = cx({
    'card': isCard,
    'card-width': isCard,
    'modal': isModal,
    'modal-width': isModal,
  });

  return (
    <Card className={cardClasses}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {isCard ? (
              <div className="project">
                <span className="label">Project</span>
                <p>{description}</p>
              </div>
            ) : (
              <React.Fragment>
                <div className="project">
                  <span className="label">Project</span>
                  <span>{description}</span>
                </div>
                <div className="tech-stack">
                  <span className="label">Tech Stack</span>
                  <span>{description}</span>
                </div>
              </React.Fragment>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {isCard ? 'Details' : 'View Project'}
        </Button>
        {isModal && (
          <Button size="small" color="primary">
            View Code
          </Button>
        )}
      </CardActions>
    </Card>
  );
}