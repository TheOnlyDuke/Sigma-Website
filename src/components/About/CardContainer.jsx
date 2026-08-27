import Grid from "@mui/material/Grid";
import AboutCard from "./AboutCard";

export default function CardsContainer({ data, bit = false }) {
  return (
    <Grid
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "solid 2px var(--border)",
        borderRadius: "var(--border-radius)",
        padding: "20px",
        display: "flex",
        justifyContent: "cneter",
        alignItems: "center",
        width: "100%",
      }}
      container
      spacing={2}
    >
      <Grid xs={12} sm={3}>
        <AboutCard data={bit ? data.front : data[0]} bit={bit} />
      </Grid>
      <Grid xs={12} sm={3}>
        <AboutCard data={bit ? data.back : data[1]} bit={bit} />
      </Grid>
      <Grid xs={12} sm={3}>
        <AboutCard data={bit ? data.android : data[2]} bit={bit} />
      </Grid>
      {/* {bit && (
        <Grid xs={12} sm={3}>
          <AboutCard data={data.design} bit={bit} />
        </Grid>
      )} */}
    </Grid>
  );
}
