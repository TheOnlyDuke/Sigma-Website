import GooglePLay from "../../../../public/images/Download/GooglePlay.png";
import AppStore from "../../../../public/images/Download/AppStore.png";
import DirectDownload from "../../../../public/images/Download/DirectDownload.png";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function DownloadOptions() {
  return (
    <Grid
      container
      spacing={0.5}
      sx={{
        width: "320px",
        marginTop: "20px",
        "& img": {
          cursor: "pointer",
        },
      }}
    >
      <Grid xs={6}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={GooglePLay}
            width={150}
            height={50}
            alt="Direct android download link"
          />
        </a>
      </Grid>
      <Grid xs={6}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={AppStore}
            width={150}
            height={50}
            alt="IOS PWA Download Link"
          />
        </a>
      </Grid>
      <Grid xs={6}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={DirectDownload}
            width={150}
            height={50}
            alt="Windows direct download link"
          />
        </a>
      </Grid>
    </Grid>
  );
}
