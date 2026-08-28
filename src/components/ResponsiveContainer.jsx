import { Container } from "@mui/material";

export default function ResponsiveContainer({
  children,
  sx,
  maxWidth = "lg",
  disableGutters = false,
  ...props
}) {
  const isNumeric = typeof maxWidth === "number";
  const containerMaxWidth = isNumeric ? false : maxWidth;

  return (
    <Container
      maxWidth={containerMaxWidth}
      disableGutters={disableGutters}
      sx={{
        px: {
          xs: "32px",
          sm: "48px",
          md: "64px",
          lg: "128px",
          lgp: "128px",
          xl: "128px",
          xlp: "128px",
        },
        mx: "auto",
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...(isNumeric ? { maxWidth: `${maxWidth}px` } : null),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
