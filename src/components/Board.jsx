import Card from "./Card";
import { resources } from "../data";

function Board() {
  return (
    <div className="board">
      {resources.map((resource) => (
        <Card
          key={resource.id}
          title={resource.title}
          description={resource.description}
          link={resource.link}
          image={resource.image}
        />
      ))}
    </div>
  );
}

export default Board;