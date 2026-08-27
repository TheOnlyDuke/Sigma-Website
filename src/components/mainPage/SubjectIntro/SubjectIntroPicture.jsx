import { Box } from "@mui/material";
import Image from "next/image";

export default function SubjectIntroPicture({ src, alt, pos }) {
  return (
    <Box
      data-slide-image={true}
      sx={{
        position: "absolute",
        borderTop: "2px solid",
        borderRight: "2px solid",
        borderBottom: "6px solid",
        borderLeft: "6px solid",
        borderColor: "var(--blackBG)",
        width: { xs: "100%", sm: "550px" },
        aspectRatio: "550/350",
        top: { sm: pos === 2 ? "125px" : pos === 1 ? 0 : undefined },
        bottom: { sm: pos === 0 ? 0 : undefined },
        left: { sm: pos === 2 ? 0 : undefined },
        right: { sm: pos === 0 ? 0 : pos === 1 ? "150px" : undefined },
        [["@media (max-width: 450px)"]]: {
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
        },
        zIndex: 999 - pos,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Image src={src} fill alt={alt} sizes="(max-width: 600px) 100vw, 550px" />
    </Box>
  );
}
