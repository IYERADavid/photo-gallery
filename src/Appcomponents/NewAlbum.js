import { useRef } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import add_new_album from './add_new_album'

export default function NewAlbum({shownewalbum, setshownewalbum}) {
  const album_nameref = useRef(null)

  const throw_error = (msg) =>{
    if(document.getElementById("album-error")){
        const span_element = document.getElementById("album-error")
        span_element.innerText = msg 
    }
    else{
    const near_parent_element = album_nameref.current.parentNode
    const top_parent_element = near_parent_element.parentNode
    const span_element = document.createElement("span")
    span_element.innerText = msg
    span_element.style.color = 'red'
    span_element.id = "album-error"
    top_parent_element.appendChild(span_element)
    }
  }

  const add_album = async () => {
    if(album_nameref.current.value){
        const result = await add_new_album(album_nameref.current.value)
        if(result){
            setshownewalbum(false)
        }
        else{
            const msg = "The album name you entered already exists"
            throw_error(msg)
        }
    }
    else{
        const msg = "You must fill out the above field!"
        throw_error(msg)
    }
  }

  const handleClose = () => {
    setshownewalbum(false)
  };

  return (
    <div>
      <Dialog open={shownewalbum} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">CREATE NEW ALBUM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of your new album in the bellow field
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            inputRef={album_nameref}
            label="Album name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={add_album} color="primary">
            Add
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}