import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: "75vh",
    width: "60vw",
    objectFit: "cover"
  }
}));

export default function TransitionsModal({SelectedImage, setSelectedImage}) {
  const classes = useStyles();

  const handleClose = () => {
    setSelectedImage(null)
  };

  return (
    <div className={classes.modal}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Zoom in={true} style={{ transitionDelay: '200ms' }} timeout={2000}>
          <div className="selected-image">
            <img className={classes.img} src={SelectedImage} alt="family" />
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}