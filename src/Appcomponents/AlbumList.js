import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginBottom: "30px"
  },
  imageList: {
    width: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  image:{
    height: "260px",
    width: "100%",
    objectFit: "cover"
  }
}));

export default function AlbumList({ albums }) {
  const classes = useStyles();
  console.log(albums)
    //TODO fuction to return col number of imgelist item
    //depending on user screen width (page/window) width

  return (
    <>
        {(albums && albums[0].createdAt) &&
        <div className={classes.root}>
            <ImageList rowHeight='auto' cols={3} gap={30} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={3} style={{ height: 'auto' }}>
                <ListSubheader component="div">Albums</ListSubheader>
                </ImageListItem>
                {albums.map((album, index) => (
                <ImageListItem key={index}>
                    <Link to={"/album/"+ album.id}>
                    <img src={album.img} className={classes.image} alt={"No img added yet"}/>
                    </Link>
                    <ImageListItemBar
                    title={album.id}
                    subtitle={<span>Created At : {String(album.createdAt.toDate())}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${album.id}`} className={classes.icon}>
                        <InfoIcon />
                        </IconButton>
                    }
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </div>
        }
    </>
  );

}