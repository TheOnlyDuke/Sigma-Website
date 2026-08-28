import Box from "@mui/material/Box";
import AboutCard from "./AboutCard";

export default function CardsContainer({ data = [], teamType = "devs" }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  const count = data.length;

  // Build a responsive column count that always fills the row so there is
  // never a large empty gap to the side of the cards.
  const gridTemplateColumns = {
    xs: "1fr",
    sm: count >= 2 ? "repeat(2, 1fr)" : "1fr",
    md: `repeat(${Math.min(count, 3)}, 1fr)`,
    lg: `repeat(${Math.min(count, 4)}, 1fr)`,
  };

  return (
    <Box
      sx={{
        border: "solid 2px var(--border)",
        borderRadius: "var(--border-radius)",
        padding: { xs: "12px", sm: "16px", lg: "20px" },
        width: "100%",
        display: "grid",
        gap: 2,
        gridTemplateColumns,
      }}
    >
      {data.map((member) => (
        <AboutCard
          key={member.id ?? member.name}
          data={member}
          teamType={teamType}
        />
      ))}
    </Box>
  );
}
