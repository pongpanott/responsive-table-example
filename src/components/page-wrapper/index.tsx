const PageWrapper = (props: { children: React.ReactNode }) => {
  return (
    <div
      className="container-fluid table-wrapper"
      style={{ marginTop: "60px" }}
    >
      {props.children}
    </div>
  );
};

export default PageWrapper;
