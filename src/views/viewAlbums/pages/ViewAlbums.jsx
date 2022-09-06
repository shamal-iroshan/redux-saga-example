import React from "react";
import {Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectAlbumIsLoading, selectAlbums, selectPhotos, selectPhotosIsLoading} from "../../albums/slice/albumsSlice";
import Loader from "../../../common/components/Loader";
import {useParams} from "react-router-dom";
import Photo from "../components/Photo";

const ViewAlbums = () => {
  const fetchAlbumsIsLoading = useSelector(selectAlbumIsLoading);
  const fetchPhotosIsLoading = useSelector(selectPhotosIsLoading);
  const albums = useSelector(selectAlbums);
  const photos = useSelector(selectPhotos);

  const { id: albumId } = useParams();

  const albumTitle = albums.find((el) => el.id.toString() === albumId)?.title;
  const albumPhotos = photos.filter((el) => el.albumId.toString() === albumId);

  if (fetchAlbumsIsLoading || fetchPhotosIsLoading) {
    return (
      <Loader />
    );
  }

  if (albumTitle === undefined) {
    return (
      <Grid
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: window.innerHeight * 0.8
        }}
      >
        <Typography>
          No Album found
        </Typography>
      </Grid>
    );
  }

  return (
    <>
      <Grid>
        <Typography variant="h2">
          {albumTitle}
        </Typography>
      </Grid>
      <Grid
        container
        gap="20px"
      >
        {
          albumPhotos.map((item) => (
            <Photo key={item.id} title={item.title} url={item.url} />
          ))
        }
      </Grid>
    </>
  );
}

export default ViewAlbums;