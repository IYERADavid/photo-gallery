import { useState } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Title from './Appcomponents/Title'
import AlbumsModal from './Appcomponents/AlbumsModal'
import Images from './Appcomponents/Images'
import Albums from './Appcomponents/Albums'
import AlbumImages from './Appcomponents/AlbumImages'
import TransitionsModal from './Appcomponents/ImageModal'
import NewAlbum from './Appcomponents/NewAlbum'
import usestyles from './App.styles'

const App = () => {
  const classes = usestyles()
  const [SelectedImage, setSelectedImage] = useState(null)
  const [shownewalbum, setshownewalbum] = useState(false)

  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <Typography varian="h2" className={classes.title}>
            My-photos
          </Typography>
          <div className={classes.navigations}>
            <a href="/"><Button variant="contained" >Home</Button></a>
            <a href="/albums"><Button variant="contained" >Albums</Button></a>
            <Button variant="contained" onClick={()=>{setshownewalbum(true)}}>New album</Button>
            <Button variant="contained" >Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      <main>
        <Container align="center">
          <Title/>
          <AlbumsModal/>
          <Router>
            <Route exact path="/"><Images setSelectedImage={setSelectedImage}/></Route>
            <Route exact path="/albums"><Albums/></Route>
            <Route exact path="/album/:album_name"><AlbumImages setSelectedImage={setSelectedImage}/></Route>
          </Router>
          {SelectedImage &&
          <TransitionsModal SelectedImage={SelectedImage} setSelectedImage={setSelectedImage} />
          }
        </Container>
      </main>
      <section id="optional-modal-view">
        {shownewalbum && <NewAlbum shownewalbum={shownewalbum} setshownewalbum={setshownewalbum} />}
      </section>
    </>
  );
}

export default App;