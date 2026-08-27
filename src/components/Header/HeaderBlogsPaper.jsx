import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import HeaderBlogsItem from "./HeaderBlogsGridItem";

export default function HeaderBlogsPaper({ items, onClick }) {
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "300px" }}>
      {groupedItems.map((group, groupIndex) => (
        <Fragment key={groupIndex}>
          <Grid size={{ xs: 12, md: 3 }} sx={{ height: "100%" }}>
            {group.slice(0, 2).map((item) => (
              <Grid
                size={{ xs: 12 }}
                key={item.id}
                sx={{
                  height: "50%",
                  p: 0,
                  paddingBottom: item.id % 3 === 1 ? "7.5px" : 0,
                  paddingTop: item.id % 3 === 2 ? "7.5px" : 0,
                }}
              >
                <HeaderBlogsItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  onClick={onClick}
                />
              </Grid>
            ))}
          </Grid>
          {group[2] && (
            <Grid size={{ xs: 12, md: 3 }} sx={{ height: "100%" }}>
              <HeaderBlogsItem
                icon={group[2].icon}
                title={group[2].title}
                description={group[2].description}
                onClick={onClick}
              />
            </Grid>
          )}
        </Fragment>
      ))}
    </Grid>
  );
}
