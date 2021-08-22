import { projectFirestore, timestamp } from '../firebase/config'

const collectionref = projectFirestore.collection('Albums')

const check_new_album = (album_name) => {
    const docRef = collectionref.doc(album_name)
    return(
        docRef.get()
        .then((doc)=>{
            if (doc.exists){
                return true
            }
            return false
        })
    )
}

const add_new_album = async (album) => {
    const album_exists = await check_new_album(album)
    if (album_exists){
        return null
    }
    else{
        const createdAt = timestamp()
        collectionref.doc(album).set({ createdAt })
        return album
    }
}

export default add_new_album