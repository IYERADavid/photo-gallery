import { useEffect, useState } from 'react'
import AlbumList from './AlbumList'
import useFirestore from '../hooks/useFirestore'
import { projectFirestore } from '../firebase/config'

const Albums = () => {
    const { docs } = useFirestore('Albums')
    const [albums, setalbums] = useState(null)

    useEffect(()=>{
        if(docs && docs.length > 0){
            const collectionref = projectFirestore.collection('family-images')
            let current_data = docs
            let doc_index = 0
            const updated_data = new Promise((resolve, reject) =>{
                docs.forEach( async (doc)=> {
                    await
                    collectionref
                    .where("album_name", "==", doc.id)
                    .orderBy('createdAt', "desc")
                    .limit(1)
                    .get()
                    .then((doc)=>{
                        doc.forEach((doc)=> {
                            current_data[doc_index].img = doc.data().url
                        })
                    })
                    doc_index += 1
                    if(doc_index === docs.length) resolve()
                })
            })
            updated_data.then(()=> setalbums(current_data))
        }
    },[docs])
    return (
        <>
            <AlbumList albums={albums} />
        </>
    )
}

export default Albums