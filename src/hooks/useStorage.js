import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (file, selectedAlbum) => {
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)

    useEffect(()=>{
        const storageref = projectStorage.ref(file.name)
        const collectionref = projectFirestore.collection('family-images')

        storageref.put(file).on('state_changed', (snap) => {
            let progress = snap.bytesTransferred / snap.totalBytes * 100
            setprogress(progress)
        },(error) => {
            seterror(error)
        }, async () => {
            const album_name = selectedAlbum
            const url = await storageref.getDownloadURL()
            const createdAt = timestamp()
            collectionref.add({ album_name, url, createdAt})
            seturl(url)
        })

    },[file, selectedAlbum])

    return { progress, error, url}
}

export default useStorage