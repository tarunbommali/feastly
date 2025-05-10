import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  return (
    <div className="err-page">
      <h1 className="text-lg font-thin">Hmm. something went wrong.</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
}
