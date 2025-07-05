import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../Config/actions";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const count = useSelector((state) => state.users.length);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
    dispatch(
      addUserAction({
        id: count + 1,
        name: name,
        email: email,
      })
    );
    navigate("/");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <h2 className="text-center mb-4 text-dark fw-bold">Add New User</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control rounded-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control rounded-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
            />
          </div>
          <button
            onClick={handleClick}
            className="btn btn-success w-100 py-2 fw-bold rounded-3"
            type="submit"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
// This code defines a React component for adding a new user.