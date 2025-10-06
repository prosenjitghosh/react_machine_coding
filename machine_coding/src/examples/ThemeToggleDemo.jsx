import React from "react";
import { useThemeToggle } from "../hooks/useThemeToggle";

export const ThemeToggleDemo = () => {
  const { theme, setToggleTheme } = useThemeToggle();

  const bgColor = theme === "dark" ? "#121212" : "#ffffff";
  const textColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        height: "550px",
        width:"1400px",
        marginLeft:"35px",
        textAlign: "center",
      }}
    >
      <h1>Current Theme: {theme.toUpperCase()}</h1>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "1px solid gray",
          cursor: "pointer",
          backgroundColor: theme === "dark" ? "#333" : "#eee",
          color: theme === "dark" ? "#fff" : "#000",
          transition: "all 0.3s ease",
        }}
        onClick={() => setToggleTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle Theme
      </button>
    </div>
  );
};
