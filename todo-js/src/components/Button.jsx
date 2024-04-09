export default function Button(type, onclickFunction) {
  switch (type) {
    case "danger": {
      return (
        <button onClick={onclickFunction} className="btn btn-danger"></button>
      );
    }
  }
}
