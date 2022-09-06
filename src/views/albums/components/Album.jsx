import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectPhotos} from "../slice/albumsSlice";
import {useNavigate} from "react-router-dom";

export default function Album({ title, albumId }) {
  const photos = useSelector(selectPhotos);
  const navigate = useNavigate();

  const thumbnails = photos.filter((el) =>  el.albumId === albumId)

  return (
    <Card onClick={() => navigate(`/albums/${albumId}`)} sx={{ maxWidth: 150, cursor: 'pointer'}}>
      <CardMedia
        component="img"
        image={thumbnails[0]?.thumbnailUrl}
        alt={thumbnails[0]?.title}
        sx={{
          width: 150,
          height: 150
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ({thumbnails.length || 'No'} pictures)
        </Typography>
      </CardContent>
    </Card>
  );
}