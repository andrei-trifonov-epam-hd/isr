"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { api, regenerateData } from "@repo/cms/data.service";

export const ClientComponent = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>();

  const onClick = async () => {
    try {
      const response = await api(false);
      setResponse(response.name);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch response");
    }
  };

  return (
    <div>
      <h2>Client Component</h2>
      <Button onClick={async () => void (await regenerateData())}>
        Refresh data!
      </Button>
      <Button onClick={onClick}>Get Data!</Button>
      {error && (
        <div>
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}
      {response && (
        <div>
          <h3>Runtime data fetched:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};
