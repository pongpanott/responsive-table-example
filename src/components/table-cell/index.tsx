type CellComponent = {
  children?: React.ReactNode;
  className?: string;
  scope?: string;
};

const Cell = ({ children, className, scope }: CellComponent) => {
  return (
    <th className={className} scope={scope}>
      {children}
    </th>
  );
};

export default Cell;
