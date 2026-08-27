import Grid from "@mui/material/Grid";
import QuestionPreview from "./QuestionPreview";

export default function GridView({ questions }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        position: "relative",
        display: { xs: "none", sm: "flex" },
        "&::before": {
          content: '""',
          position: "absolute",
          height: "250px",
          left: "0",
          right: "0",
          bottom: "0",
          background:
            "linear-gradient(to bottom, rgb(0,0,0,0), var(--notActiveBG) 90%)",
          pointerEvents: "none",
          zIndex: 998,
        },
      }}
    >
      {questions.map((each, index) => (
        <Grid xs={12} sm={6} md={3} key={index}>
          <QuestionPreview
            title={each.title}
            icon={each.icon}
            group={each.group}
            difficulty={each.difficulty}
            score={each.score}
            latex={each.latex}
          />
        </Grid>
      ))}
    </Grid>
  );
}
