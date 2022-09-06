import './App.css';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import theme from './theme';
import Albums from './views/albums/pages/Albums';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {albumsActions, selectAlbums} from "./views/albums/slice/albumsSlice";
import {Navigate, Route, Routes} from "react-router-dom";
import ViewAlbums from "./views/viewAlbums/pages/ViewAlbums";


function App() {
  const dispatch = useDispatch();
  const albums = useSelector(selectAlbums);

  useEffect(() => {
    dispatch(albumsActions.fetchAlbums())
  }, [dispatch])

  useEffect(() => {
    if (albums.length > 0) {
      const albumIds = albums.map((el) => el.id);
      const uniqueAlbumIds = [...new Set(albumIds)];
      dispatch(albumsActions.fetchPhotos(uniqueAlbumIds));
    }
  }, [albums])

  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<ViewAlbums />} />
          <Route path="/" element={<Navigate to="/albums" />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
