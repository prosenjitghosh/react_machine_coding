import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

export function DebounceDemo() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API call with:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Debounce Hook Demo</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p>Search Query: {query}</p>
      <p>Debounced Query: {debouncedQuery}</p>
    </div>
  );
}
