"use client";
import { Box } from "@mui/material";
import Image from "next/image";

export default function LearningPagination({
  chapters,
  currentChapter,
  onChapterChange,
}) {
  const total = chapters.length;
  const isPrevDisabled = currentChapter <= 1;
  const isNextDisabled = currentChapter >= total;

  const navBtnBase = {
    width: "44px",
    height: "36px",
    borderRadius: "5.5px",
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.2s ease",
    padding: 0,
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        direction: "rtl",
      }}
    >
      {/* Back button (right in RTL = previous) */}
      <Box
        component="button"
        onClick={() =>
          onChapterChange && onChapterChange(Math.max(1, currentChapter - 1))
        }
        disabled={isPrevDisabled}
        sx={{
          ...navBtnBase,
          opacity: isPrevDisabled ? 0.4 : 1,
          cursor: isPrevDisabled ? "not-allowed" : "pointer",
          "&:hover:not(:disabled)": {
            opacity: 0.8,
          },
        }}
      >
        <Image
          src="/svg/arrow-back.svg"
          alt="Previous"
          width={44}
          height={36}
        />
      </Box>

      {/* Chapter number buttons */}
      {chapters.map((chapter, index) => {
        const isActive = index + 1 === currentChapter;
        return (
          <Box
            key={index}
            component="button"
            onClick={() => onChapterChange && onChapterChange(index + 1)}
            sx={{
              width: "38px",
              height: "36px",
              borderRadius: "6px",
              border: "1px solid #B3B3B3",
              backgroundColor: isActive
                ? "var(--activeBG)"
                : "var(--notActiveBG)",
              color: isActive ? "#FFFFFF" : "var(--primary-text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "17px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: isActive
                  ? "var(--blackBG)"
                  : "var(--activeBG)",
                color: "#FFFFFF",
                borderColor: isActive ? "var(--blackBG)" : "var(--activeBG)",
              },
            }}
          >
            {chapter.number ?? chapter.id ?? index + 1}
          </Box>
        );
      })}

      {/* Next button (left in RTL = next) */}
      <Box
        component="button"
        onClick={() =>
          onChapterChange &&
          onChapterChange(Math.min(total, currentChapter + 1))
        }
        disabled={isNextDisabled}
        sx={{
          ...navBtnBase,
          opacity: isNextDisabled ? 0.4 : 1,
          cursor: isNextDisabled ? "not-allowed" : "pointer",
          "&:hover:not(:disabled)": {
            opacity: 0.8,
          },
        }}
      >
        <Image
          src="/svg/arrow-next.svg"
          alt="Next"
          width={44}
          height={36}
        />
      </Box>
    </Box>
  );
}