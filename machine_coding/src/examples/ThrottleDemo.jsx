import React, { useState, useEffect } from "react";
import { useThrottle } from "../hooks/useThrottle";

export function ThrottleDemo() {
  const [query, setQuery] = useState("");
  const throttledQuery = useThrottle(query, 1000); // run once every 1 sec

  useEffect(() => {
    if (throttledQuery) {
      console.log("API Call with:", throttledQuery);
    }
  }, [throttledQuery]);

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      <p>Search Query: {query}</p>
      <p>Throttle Query: {throttledQuery}</p>
    </div>
  );
}
