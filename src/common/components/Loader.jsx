import React from "react";
import {PuffLoader} from "react-spinners";

const styles = {
  loader: {
    minHeight: window.innerHeight * 0.8,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: { paddingLeft: 11, paddingRight: 11 },
};

export default function Loader() {
  return (
    <div style={styles.loader}>
      <PuffLoader size={50} color="#07456b" loading />
    </div>
  );
}