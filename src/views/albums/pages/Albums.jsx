import React from 'react';
import {Grid} from "@mui/material";
import Album from "../components/Album";
import {useSelector} from "react-redux";
import {selectAlbumIsLoading, selectAlbums, selectPhotosIsLoading} from "../slice/albumsSlice";
import Loader from "../../../common/components/Loader";

const Albums = () => {
  const fetchAlbumsIsLoading = useSelector(selectAlbumIsLoading);
  const fetchPhotosIsLoading = useSelector(selectPhotosIsLoading);
  const albums = useSelector(selectAlbums);

  if (fetchAlbumsIsLoading || fetchPhotosIsLoading) {
    return (
      <Loader />
    );
  }

  return (
    <Grid
      container
      gap="20px"
      sx={{
        margin: '50px 0'
      }}>
      {
        albums.map((item) => (
          <Album key={item.id} title={item.title} albumId={item.id} />
        ))
      }
    </Grid>
  )
}

export default Albums;