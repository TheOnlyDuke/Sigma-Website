"use client";
import React from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  Box,
  Typography,
} from "@mui/material";
import Link from "next/link";

const DIFFICULTY_LABELS = {
  1: "مبتدی",
  2: "متوسط",
  3: "دشوار",
};

export default function DrawerSubmenu({
  id,
  open,
  items = [],
  type = "subjects",
  onClose,
}) {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List
        id={id}
        disablePadding
        sx={{
          pr: 3.5,
          pl: 1,
          py: 0.5,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        {items.map((item) => {
          let itemHref = "";
          if (type === "subjects") {
            itemHref = `/topics/${item.slug || item.name}`;
          } else {
            itemHref = item.href || (item.slug ? `/blog/${item.slug}` : `/blog/${item.title}`);
          }

          return (
            <ListItem key={item.id} disablePadding>
              <Link
                href={itemHref}
                onClick={onClose}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ListItemButton
                  sx={{
                    py: 0.8,
                    px: 1.5,
                    borderRadius: "8px",
                    bgcolor: "transparent",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "var(--activeBG)",
                      ml: 1.5,
                      flexShrink: 0,
                    }}
                  />

                  {type === "subjects" ? (
                    <>
                      <Typography
                        sx={{
                          fontFamily: "inherit",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--primary-text)",
                          flex: 1,
                        }}
                      >
                        {item.name}
                      </Typography>
                      {item.difficulty && (
                        <Box
                          component="span"
                          sx={{
                            fontSize: "11px",
                            color: "var(--secondary-text)",
                            bgcolor: "rgba(0, 0, 0, 0.05)",
                            px: "6px",
                            py: "1px",
                            borderRadius: "4px",
                          }}
                        >
                          {DIFFICULTY_LABELS[item.difficulty] || "متوسط"}
                        </Box>
                      )}
                    </>
                  ) : (
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: "inherit",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--primary-text)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.title}
                      </Typography>
                      {item.description && (
                        <Typography
                          sx={{
                            fontFamily: "inherit",
                            fontSize: "11px",
                            color: "var(--secondary-text)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  )}
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
}
