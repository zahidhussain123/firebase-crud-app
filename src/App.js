import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  const createUser = () => {
    addDoc(userCollectionRef, { name: name, age: Number(age) });
    setAge("");
    setName("");
    alert("User successfully added.")
  };

  const updateUser = async (id, age) => {
    const newUser = doc(db, "users", id);
    const userField = { age: age + 1 };
    await updateDoc(newUser, userField);
  };

  const deleteUser = async (id) => {
    const newUser = doc(db, "users", id);
    await deleteDoc(newUser);
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm bg-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Crud-App
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Storage
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="form">
        <div className="first">
          <label>Name</label>
          <input
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="second">
          <label>Age</label>
          <input
            placeholder="Age..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={createUser}>
          Create User
        </button>
      </div>
      <hr />
      <div className="map-obj">
        {users.map((user) => (
          <div>
            <h1>Name : {user.name}</h1>
            <h1>Age :{user.age}</h1>
            <button
              className="btn btn-primary"
              onClick={() => updateUser(user.id, user.age)}
            >
              Update
            </button>
            <button
            id="button-danger"
              className="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
