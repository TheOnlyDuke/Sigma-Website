import Stars from "../../../../public/images/Download/Stars.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

// baraye alan static hast ta user gerefte beshe va base oon ha khahad bood!
export default function DownloadAppsRatings() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <Image src={Stars} width={24} height={24} alt="Stars" />
      <Typography variant="smallBody" sx={{ color: "var(--activeText)" }}>
        دانلود مستقیم برای :
      </Typography>
    </Box>
  );
}
