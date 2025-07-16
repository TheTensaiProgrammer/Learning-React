import "./styles.list.css";
import { useState } from "react";
import { Button } from "../../../../componets/button";
import image1 from "./images/The Godfather.jpeg";
import image2 from "./images/Schindler's List.jpg";
import image3 from "./images/Casablanca.jpg";
import image4 from "./images/Star Wars.jpg";
import image5 from "./images/The Dark Knight.jpg";
import image6 from "./images/The Shawshank Redemption.jpg";
import image7 from "./images/Citizen Kane.jpg";
import image8 from "./images/Pulp Fiction.jpeg";

const massiv = [
  { id: 1, name: "The Godfather", pic: image1 },
  { id: 2, name: "Schindler's List", pic: image2 },
  { id: 3, name: "Casablanca", pic: image3 },
  { id: 4, name: "Star Wars", pic: image4 },
  { id: 5, name: "The Dark Knight", pic: image5 },
  { id: 6, name: "The Shawshank Redemption", pic: image6 },
  { id: 7, name: "Citizen Kane", pic: image7 },
  { id: 8, name: "Pulp Fiction", pic: image8 },
];

const List = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />

      <ul className="movie-grid">
        {massiv
          .filter((item) => item.name.includes(value))
          .map((item) => (
            <Button
              onClick={() => (document.location.href = `./#/TheGodfather/`)}
            >
              <li key={item.id} style={{ marginTop: 4 }} className="debug">
                <div>{item.pic && <img src={item.pic} />}</div>
                <div>{item.name}</div>
              </li>
            </Button>
          ))}
      </ul>
    </div>
  );
};

export { List };
