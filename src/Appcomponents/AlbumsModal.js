import { useState, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import useFirestore from '../hooks/useFirestore'
import Uploadform from './Uploadform'

const useStyles = makeStyles((theme) => ({
    form:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    btn:{
        marginBottom: "60px"
    },
    upload:{
      display: "flex",
      justifyContent: "center"
    }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlbumsModal() {
  const classes = useStyles();
  const { docs } = useFirestore('Albums')
  const [open, setOpen] = useState(false);
  const [selectedAlbum, setselectedAlbum] = useState('Default');
  
  let docs_list = []
  if(docs){
    docs_list = [...docs]
    if(docs_list[docs_list.length -1].id === 'Default'){
      docs_list.pop()
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleclose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setselectedAlbum(event.target.value);
  };

  return (
    <>
    {docs_list &&
    <div>
      <Button variant="outlined" onClick={handleClickOpen}
      className={classes.btn}>
        <AddCircleOutlineRoundedIcon fontSize="large" />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleclose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Select the Album to upload into!</DialogTitle>
        <DialogContent>
        <form className={classes.form}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-dialog-select-label">Album</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={selectedAlbum}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem key="default" value="Default">Default</MenuItem>
                {docs_list.map((doc, index) => (
                    <MenuItem key={index} value={doc.id}>{doc.id}</MenuItem>
                ))}
              </Select>
            </FormControl>
        </form>
        </DialogContent>
        <DialogActions className={classes.upload}>
          <Uploadform selectedAlbum={selectedAlbum} handleclose={handleclose} />
        </DialogActions>
      </Dialog>
    </div>
    }
    </>
  );
}