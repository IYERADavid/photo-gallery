import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from '@material-ui/core'
import  Globalimageshow from './Globalimageshow'
import { projectFirestore } from '../firebase/config'

const AlbumImages = ({ setSelectedImage }) => {
    const [docs, setdocs] = useState(null)
    const { album_name } = useParams()

    useEffect(()=>{
        const collectionref = projectFirestore.collection('family-images')
        let document = []
        const get_data = async () =>{
            await collectionref
            .where("album_name", "==", album_name)
            .orderBy('createdAt', "desc")
            .get()
            .then((querySnapshot)=> {
                querySnapshot.forEach((doc)=> {
                    document.push({ ...doc.data(), id: doc.id })
                })
            })
            setdocs(document)
        }
        get_data()

    },[album_name])

    return (
        <>
          <div>
              <Typography paragraph>
                Album : {album_name}
              </Typography>
          </div>
          <Globalimageshow docs={docs} setSelectedImage={setSelectedImage} />  
        </>
    )
}

export default AlbumImages
