export default function Loading() {
  const loading = {
    textAlign: "center",
    margin: "1rem 0",
  };
  const loader = {
    height: " 1.5rem",
    width: " 1.5rem",
    borderRadius: " 50%",
    border: " 3px solid var(--primary)",
    borderBottom: " 3px solid transparent",
    display: "inline-block",
    animation: "rotate 0.5s cubic-bezier(0.58, 0.29, 0.53, 0.79) infinite",
  };
  // \{^_^}/ hi!
  return (
    <h2 className="loading" style={loading}>
      <span className="loader" style={loader}></span> Loading...
    </h2>
  );
}
