
export default function PageTitle (props) {

  const titleStyle = {
    textAlign: "center",
    padding: "2rem 0",
    color: "gray",
  }

  return (
    <h1 style={titleStyle}>{props.children}</h1>
  );
}
