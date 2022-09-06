import React from 'react';
import {Card, CardMedia} from "@mui/material";

export default function Album({url, title}) {
  return (
    <Card sx={{ maxWidth: 300, cursor: 'pointer'}}>
      <CardMedia
        component="img"
        image={url}
        alt={title}
      />
    </Card>
  );
}