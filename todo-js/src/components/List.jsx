import ListItem from "./ListItem";

export default function List(items) {
  return (
    <>
      <ul>
        <h1 className="header">TODO List</h1>
        {items.forEach((item) => {
          <ListItem key={item.id} value={item.title} />;
        })}
      </ul>
    </>
  );
}
