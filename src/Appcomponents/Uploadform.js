import { Input, Button } from '@material-ui/core'
import AddAPhotoRoundedIcon from '@material-ui/icons/AddAPhotoRounded';
import { useState, useRef } from 'react'
import ProgressBar from './ProgressBar'
import usestyles from '../App.styles'

const Uploadform = ({ selectedAlbum, handleclose }) => {
    const classes = usestyles()
    const [file, setfile] = useState(null)
    const [FileError, setFileError] = useState(null)
    const file_inputref = useRef(null)

    const types = ['image/png', 'image/jpeg']
    const handelonchange = (e) => {
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
        setfile(selected)
        setFileError(null)
        }
        else{
        setfile(null)
        const msg = "You must choose an image and its type must be png or jpeg"
        setFileError(msg)
        }
    }

    return (
        <form className={classes.form}>
            <Input type="file" className={classes.file}
            disableUnderline onChange={handelonchange} inputRef={file_inputref} />
            <Button variant="contained" onClick={()=>{file_inputref.current.click()}}
            size="large" align="center"> <AddAPhotoRoundedIcon />
            </Button>
            <div className="output">
                {FileError && <div className="error">{FileError}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setfile={setfile}fileref={file_inputref}
                handleclose={handleclose} selectedAlbum={selectedAlbum}/>}
            </div>
        </form>
    )
}

export default Uploadform