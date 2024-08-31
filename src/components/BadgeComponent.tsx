"use client";

import React from "react";

type BadgeProps = {
  color?: keyof typeof badgeColors;
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  href?: string;
};

const badgeColors = {
  info: {
    backgroundColor: "#3b82f6",
    color: "white",
  },
  gray: {
    backgroundColor: "#6b7280",
    color: "white",
  },
  failure: {
    backgroundColor: "#ef4444",
    color: "white",
  },
  success: {
    backgroundColor: "#10b981",
    color: "white",
  },
  warning: {
    backgroundColor: "#f59e0b",
    color: "white",
  },
  indigo: {
    backgroundColor: "#6366f1",
    color: "white",
  },
  purple: {
    backgroundColor: "#8b5cf6",
    color: "white",
  },
  pink: {
    backgroundColor: "#ec4899",
    color: "white",
  },
};

const sizeStyles = {
  sm: {
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
  },
  md: {
    fontSize: "0.875rem",
    padding: "0.375rem 0.75rem",
  },
  lg: {
    fontSize: "1rem",
    padding: "0.5rem 1rem",
  },
};

export default function BadgeComponent({
  color = "info",
  children,
  icon,
  size = "md",
  href,
}: BadgeProps) {
  const styles = badgeColors[color];
  const sizeStyle = sizeStyles[size];

  return (
    <span
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        borderRadius: "12px",
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {icon && <span>{icon}</span>}
      {href ? <a href={href}>{children}</a> : <span>{children}</span>}
    </span>
  );
}
