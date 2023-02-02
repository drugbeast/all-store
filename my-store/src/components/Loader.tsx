import React from "react";
import { CSSProperties } from "react";
import { PropagateLoader } from "react-spinners";

type LoaderType = {
  loading: boolean;
};

function Loader(props: LoaderType) {
  const override: CSSProperties = {
    display: "flex",
    margin: "50vh auto",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  };
  const color = "#6366f1";
  const { loading } = props;
  return (
    <div>
      <PropagateLoader
        color={color}
        loading={loading}
        size={20}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
