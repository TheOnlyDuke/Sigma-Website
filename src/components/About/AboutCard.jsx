import {
  Avatar,
  Typography,
  Box,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";

const TEAM_FIELDS = {
  devs: [
    { key: "role", label: "نقش" },
    { key: "education", label: "تحصیلات" },
    { key: "framework", label: "فریم‌ورک" },
  ],
  question: [
    { key: "role", label: "تخصص" },
    { key: "education", label: "تحصیلات" },
  ],
};

const SocialButton = ({ href, label, children }) => {
  if (!href) return null;
  return (
    <Tooltip title={label} arrow placement="top">
      <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        size="small"
        sx={{
          color: "primary.main",
          transition: "all 0.2s ease",
          "&:hover": {
            color: "primary.main",
            transform: "translateY(-2px)",
            backgroundColor: "action.hover",
          },
        }}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default function AboutCard({ data, teamType = "devs" }) {
  const fields = TEAM_FIELDS[teamType] ?? TEAM_FIELDS.devs;
  const hasSocials = data.github || data.email || data.telegram;

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid var(--border)",
        borderRadius: "var(--border-radius)",
        padding: { xs: "20px", sm: "30px", lg: "40px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 30px rgba(70, 43, 239, 0.12)",
          borderColor: "primary.main",
        },
      }}
    >
      <Avatar
        sx={{
          width: { xs: 96, sm: 120, lg: 150 },
          height: { xs: 96, sm: 120, lg: 150 },
          border: "3px solid var(--border)",
        }}
        alt={`${data.name} avatar`}
        src={data.avatar}
      />

      <Typography
        variant="smallTitle"
        sx={{ mt: 2, fontSize: { xs: "18px", lg: "20px" } }}
      >
        {data.name}
      </Typography>

      <Stack spacing={0.5} sx={{ width: "100%", my: 2, alignItems: "stretch" }}>
        {fields.map(({ key, label }) =>
          data[key] ? (
            <Typography
              key={key}
              variant="smallBody"
              sx={{ color: "text.secondary" }}
            >
              <Box
                component="span"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {label}:
              </Box>{" "}
              {data[key]}
            </Typography>
          ) : null,
        )}
      </Stack>

      {hasSocials && (
        <Stack direction="row" spacing={1} sx={{ mt: "auto", pt: 1 }}>
          <SocialButton href={data.github} label="گیت‌هاب">
            <GitHubIcon fontSize="small" />
          </SocialButton>
          <SocialButton href={data.telegram} label="تلگرام">
            <TelegramIcon fontSize="small" />
          </SocialButton>
          <SocialButton
            href={data.email ? `mailto:${data.email}` : ""}
            label="ایمیل"
          >
            <EmailOutlinedIcon fontSize="small" />
          </SocialButton>
        </Stack>
      )}
    </Box>
  );
}
