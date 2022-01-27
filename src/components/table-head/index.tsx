import React from "react";

type TableHeadComponent = {
  children?: React.ReactNode;
  className?: string;
};

const TableHead = ({
  children,
  className = "thead-dark",
}: TableHeadComponent) => {
  return <thead className={className}>{children}</thead>;
};

export default TableHead;
