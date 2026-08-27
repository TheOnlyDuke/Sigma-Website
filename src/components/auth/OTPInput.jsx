import React, { useState, useRef, useEffect } from "react";
import { Box, TextField } from "@mui/material";

const OTPInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    onChange(newOtp.join(""));
    if (element.value !== "" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .slice(0, length)
      .split("")
      .filter((char) => !isNaN(parseInt(char, 10)));

    const newOtp = [...otp];
    pasteData.forEach((char, index) => {
      newOtp[index] = char;
    });

    setOtp(newOtp);
    onChange(newOtp.join(""));
    const focusIndex = Math.min(pasteData.length, length - 1);
    inputRefs.current[focusIndex].focus();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 1,
        width: "100%",
        px: "5px",
        my: "30px",
        direction: "ltr",
      }}
    >
      {otp.map((data, index) => (
        <TextField
          key={index}
          inputRef={(ref) => (inputRefs.current[index] = ref)}
          variant="outlined"
          margin="normal"
          name={`otp-${index}`}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          type="text"
          slotProps={{
            input: {
              maxLength: 1,
              style: { textAlign: "center", height: "37px" },
            },
          }}
          sx={{ width: "3.75rem", height: "70px" }}
        />
      ))}
    </Box>
  );
};

export default OTPInput;
