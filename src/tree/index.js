import React from "react";
import Tree from "./Tree";
import data from "./data";

export default function TreeApp() {
  return <Tree data={data} width={600} height={500} />;
};
