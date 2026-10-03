import GooglePLay from "../../../../public/images/Download/GooglePlay.png";
import AppStore from "../../../../public/images/Download/AppStore.png";
import DirectDownload from "../../../../public/images/Download/DirectDownload.png";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function DownloadOptions() {
  return (
    <Grid
      container
      spacing={1.5}
      sx={{
        width: "100%",
        maxWidth: "340px",
        marginTop: "20px",
        "& img": {
          cursor: "pointer",
          width: "100%",
          height: "auto",
        },
      }}
    >
      <Grid item xs={6}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={GooglePLay}
            width={150}
            height={50}
            alt="Direct android download link"
          />
        </a>
      </Grid>
      <Grid item xs={6}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={AppStore}
            width={150}
            height={50}
            alt="IOS PWA Download Link"
          />
        </a>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "100%", maxWidth: "160px", display: "inline-block" }}
        >
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
