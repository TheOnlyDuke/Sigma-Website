import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const StyledPaper = styled(Paper)(() => ({
  gap: "50px",
  backgroundColor: "var(--notActiveBG)",
  boxShadow: "none",
  border: "1px solid",
  borderColor: "var(--border)",
  borderRadius: "var(--border-radius)",
  transition: "all 200ms ease-out",
  direction: "rtl",
  cursor: "pointer",
  padding: "25px",
  "& *": {
    transition: "inherit",
    cursor: "inherit",
  },
  "&:hover": {
    backgroundColor: "var(--blackBG)",
    "& .katex *": {
      color: "var(--activeText)",
    },
    "& .MuiTypography-normalBody": {
      color: "var(--activeText)",
    },
    "& path": {
      stroke: "var(--notActiveBG)",
    },
    "& .MuiTypography-smallBodyCap": {
      color: "var(--secondaryActiveText)",
    },
  },
}));

function QuestionOptions({ option, latex, handleSubmit }) {
  return (
    <StyledPaper
      onClick={() => {
        handleSubmit(option);
      }}
      className="flexColumn"
    >
      <Typography
        variant="normalBodyCap"
        component="div"
        sx={{ direction: "ltr" }}
      >
        <BlockMath math={latex} />
      </Typography>
    </StyledPaper>
  );
}

export default memo(QuestionOptions);
