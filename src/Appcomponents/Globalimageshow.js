import { Button, Card, CardMedia, CardActions , Grid } from "@material-ui/core"
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import SettingsOverscanRoundedIcon from '@material-ui/icons/SettingsOverscanRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import usestyles from '../App.styles'

const Globalimageshow = ({ docs, setSelectedImage }) => {
    const classes = usestyles()

    const get_image = async (url) =>{
        const image = await fetch(url)
        const imageBlog = await image.blob()
        return imageBlog
    }

    const download_image = async (url) => {
        const imageBlog = await get_image(url)
        const imageURL = URL.createObjectURL(imageBlog)
        
        const link = document.createElement('a')
        link.href = imageURL
        link.download = 'online-photo-gallery-image_' + imageURL
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const share_image = async (url) =>{
        const imageBlog = await get_image(url)
        const file = new File([imageBlog], "online-photo-gallery-image_shared.jpg", {type: 'image/jpeg'})
        alert("finish")
        const toShare = {
            title: document.title,
            files: [file]
          }
        alert(toShare)
        if (navigator.canShare && navigator.canShare(toShare)) {
            alert("nowwwwwwwwwwwwww")
            navigator.share(toShare)
        } else {
        console.warn('Sharing not supported', toShare)          
        }
    }

    return (
        <div className="all_images">
        {docs &&
            <Grid container spacing={4}>
            {docs.map((doc)=>(
            <Grid item key={doc.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia 
                        className={classes.cardmedia}
                        image={doc.url}
                        title="image-title"
                        onClick={() => setSelectedImage(doc.url)}
                    />
                    <CardActions>
                        <Button onClick={() => setSelectedImage(doc.url)}
                        size="small" color="primary"><SettingsOverscanRoundedIcon/>
                        </Button>
                        <Button size="small" color="primary" onClick={() => share_image(doc.url)}>
                            <ShareRoundedIcon/>
                        </Button>
                        <Button size="small" color="primary" onClick={() => download_image(doc.url)}>
                            <GetAppRoundedIcon/>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))}
            </Grid>
        }
        </div>
    )
}

export default Globalimageshow