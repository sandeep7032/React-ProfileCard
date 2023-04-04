import { useState } from "react";
import "./Style.css";

const ProfileCard = () => {
  const [theme, setTheme] = useState({
    bgColor: "white",
    color: "black",
    title: "Switch to Dark Mode",
  });
  const [user, setUser] = useState({
    name: "Ayush Verma",
    Gender: "Male",
    email: "Ayushverma@gmail.com",
    image:
      "https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?b=1&s=170667a&w=0&k=20&c=XHgfBiyCmq395nlgKrVVvxLdOrvttXzR7ZUdLibhzaU=",
  });

  const changeData = (e) => {
    if (e.target.id === "Ziya") {
      setUser({
        name: "Ziya Sharma",
        Gender: "Female",
        email: "Ziyasharma@gmail.com",
        image:
          "https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?b=1&s=170667a&w=0&k=20&c=4yOdpsESNHBHt13YdrgMBAbt6mxjsDOWKGUJw0CC-Zs=",
      });
    } else {
      setUser({
        name: "Ayush Verma",
        Gender: "Male",
        email: "Ayushverma@gmail.com",
        image:
          "https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?b=1&s=170667a&w=0&k=20&c=XHgfBiyCmq395nlgKrVVvxLdOrvttXzR7ZUdLibhzaU=",
      });
    }
  };

  const themeChange = (e) => {
    if (e.target.checked) {
      setTheme({
        bgColor: "black",
        color: "white",
        title: "Switch to Light Mode",
      });
    } else {
      setTheme({
        bgColor: "white",
        color: "black",
        title: "Switch to Dark Mode",
      });
    }
  };

  return (
    <div className="card">
      <div className="profile">
        <img src={user.image} width="100%" height="100%" />
      </div>
      <div
        className="content"
        style={{ backgroundColor: theme.bgColor, color: theme.color }}
      >
        <dl>
          <b>
            <dt>User Name</dt>
          </b>
          <dd>{user.name}</dd>
          <b>
            <dt>Gender</dt>
          </b>
          <dd>{user.Gender}</dd>
          <b>
            <dt>Email</dt>
          </b>
          <dd>{user.email}</dd>
          <b>
            <dt>Description</dt>
          </b>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            eveniet magni neque vel facere, id assumenda deserunt minus soluta
            quaerat, quibusdam odio aspernatur recusandae officia nihil quas
            exercitationem accusantium necessitatibus iusto! Ratione cupiditate
            dolorem asperiores facilis atque quo sequi magni, nemo nesciunt!
            Aliquam quis unde officia laudantium nisi, corrupti quam!
          </dd>
        </dl>
        <button id="Ayush" onClick={changeData}>
          Ayush Verma
        </button>
        &emsp;
        <button id="Ziya" onClick={changeData}>
          Ziya Sharma
        </button>
        <br />
        <br />
        <input onChange={themeChange} type="checkbox" />
        <label>{theme.title}</label>
      </div>
    </div>
  );
};

export default ProfileCard;
