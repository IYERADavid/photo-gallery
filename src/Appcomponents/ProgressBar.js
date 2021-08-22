import LinearWithValueLabel from './LinearWithValueLabel'
import useStorage from '../hooks/useStorage'
import { useEffect } from 'react'

const ProgressBar = ({ file, selectedAlbum,
    setfile, fileref, handleclose }) => {

    const { progress, url } = useStorage(file, selectedAlbum)
    console.log(progress, url)
    useEffect(() =>{
        if(url){
            fileref.current.value = ""
            setfile(null)
            handleclose()
        }
    },[url, setfile, fileref, handleclose])

    return (
        <>
            <LinearWithValueLabel upload_progress={progress} />
        </>
    )
}

export default ProgressBar