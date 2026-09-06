import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import VideoPlayer from "@/components/VideoPlayer";
import { descriptions } from "@/utils/dummydatas";

export default async function LearningPage({ params }) {
  const { "learn-sec": id } = await params;
  const decodedId = decodeURIComponent(id);
  const description = descriptions[decodedId || "موضوع یافت نشد"];

  return (
    <Container
      component="main"
      disableGutters
      style={{
        marginTop: "200px",
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "200px",
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
        <Grid
          component="div"
          xs={12}
          sm={5}
          sx={{ aspectRatio: "1920/1080" }}
          id="99027909101"
        >
          <VideoPlayer
            src="https://www.aparat.com/video/video/embed/videohash/r940e25/vt/frame?muted=true"
            title={decodedId}
          />
        </Grid>
        <Grid xs={12} sm={7} sx={{ direction: "rtl", alignItems: "center" }}>
          <Typography variant="title">{decodedId}</Typography>
          <Typography variant="normalBodyCap">{description}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
