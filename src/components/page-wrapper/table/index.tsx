import React from "react";

const Table = (props: { children: React.ReactNode }) => {
  return <table className="table">{props.children}</table>;
};

export default Table;
