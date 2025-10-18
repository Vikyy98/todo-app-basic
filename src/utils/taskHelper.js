import React from "react";

const taskHelper = () => {
  const handleStatusToggle = (status) => {
    return status === "pending" ? "completed" : "pending";
  };
  return { handleStatusToggle };
};

export default taskHelper;
