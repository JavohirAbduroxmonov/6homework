"use client";

// import React from "react";
import BadgeComponent from "./components/BadgeComponent";

function AppBadge() {
  return (
    <div className="flex flex-wrap gap-2">
      <BadgeComponent color="info">Default</BadgeComponent>
      <BadgeComponent color="gray">Dark</BadgeComponent>
      <BadgeComponent color="failure">Failure</BadgeComponent>
      <BadgeComponent color="success">Success</BadgeComponent>
      <BadgeComponent color="warning">Warning</BadgeComponent>
      <BadgeComponent color="indigo">Indigo</BadgeComponent>
      <BadgeComponent color="purple">Purple</BadgeComponent>
      <BadgeComponent color="pink">Pink</BadgeComponent>
    </div>
  );
}

export default AppBadge;
