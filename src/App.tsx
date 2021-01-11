import { Icon } from "@fluentui/react/lib/Icon";
import * as React from "react";

export default function App() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
        }}>
        <span style={{ marginRight: "10px" }}>
          <Icon iconName="Health" style={{ color: "red" }} />
        </span>
        <span>FLUENT UI demo</span>
      </h1>
    </div>
  );
}
