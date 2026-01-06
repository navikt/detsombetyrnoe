import React from "react";
import styles from "./CardItem.module.css";

interface CardItemProps {
  children: React.ReactNode;
  className?: string;
}

export const CardItem = React.forwardRef<HTMLLIElement, CardItemProps>(({ children, className }, ref) => {
  const combinedClassName = `${styles.cardItem} ${className || ""}`;

  return (
    <li ref={ref} className={combinedClassName}>
      {children}
    </li>
  );
});

CardItem.displayName = "CardItem";
