export default function Container(props) {
  return (
    <div>
      <div className={props.bg}>
        <div className="container px-4 py-4 mx-auto">{props.children}</div>
      </div>
    </div>
  );
}
