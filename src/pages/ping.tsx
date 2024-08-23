// pages/index.js

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [pingResult, setPingResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePing = async () => {
    setLoading(true);
    setError("");
    setPingResult("");

    try {
      const response = await fetch(`/api/ping?url=${url}`);
      const data = await response.json();

      if (response.ok) {
        setPingResult(data.output);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to fetch ping results.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Ping a URL</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to ping"
        className="rounded border px-3 py-1"
      />
      <button
        onClick={handlePing}
        disabled={loading}
        className="rounded border ml-4 px-3 py-1"
      >
        {loading ? "Pinging..." : "Ping"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {pingResult && <pre>{pingResult}</pre>}
    </div>
  );
}
