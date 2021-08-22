import useFirestore from '../hooks/useFirestore'
import  Globalimageshow from './Globalimageshow'
const Images = ({ setSelectedImage }) => {
    const { docs } = useFirestore('family-images')

    return (
        <>
          <Globalimageshow docs={docs} setSelectedImage={setSelectedImage} />
        </>
    )
}

export default Images