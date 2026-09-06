import { Box, Container } from "@mui/material";
import CategoryPaper from "./HeaderCategoryPaper";
import { subjects, blogs } from "@/utils/dummydatas";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import HeaderBlogsPaper from "./HeaderBlogsPaper";

export default function HeaderMenu({ handleMouseLeave, openMenu }) {
  return (
    <Box>
      <Box
        onMouseEnter={handleMouseLeave}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: "105px",
          left: 0,
          width: "100%",
          backgroundColor: "var(--notActiveBG)",
          padding: "16px",
          zIndex: 1001,
          boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2)",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            margin: "auto",
            direction: "rtl",
            maxWidth: "lg",
          }}
        >
          {openMenu === "subjects" ? (
            subjects.map((each) => (
              <Grid xs={12} sm={6} md={4} lg={3} key={each.id}>
                <Link
                  href={`/learning/${each.name}`}
                  onClick={handleMouseLeave}
                >
                  <CategoryPaper
                    title={each.name}
                    difficulty={
                      each.difficulty === 1
                        ? "مبتدی"
                        : each.difficulty === 2
                          ? "متوسط"
                          : "دشوار"
                    }
                    numOfEpisodes={each.numOfEp}
                    icon={each.icon}
                  />
                </Link>
              </Grid>
            ))
          ) : (
            <HeaderBlogsPaper items={blogs} onClick={handleMouseLeave} />
          )}
        </Grid>
      </Box>
    </Box>
  );
}
