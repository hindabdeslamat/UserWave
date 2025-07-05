import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../Config/actions";
import { useState, useEffect } from "react";

function UpdateUser() {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find((u) => u.id === parseInt(id))
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(updateUserAction({ id: parseInt(id), name, email }));
    navigate("/");
  };

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h2>User not found</h2>
      </div>
    );
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
        <h2 className="text-center mb-4 text-dark fw-bold">Edit User</h2>
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
              placeholder="John Doe"
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
              placeholder="john@example.com"
            />
          </div>
          <button
            onClick={handleClick}
            className="btn btn-primary w-100 py-2 fw-bold rounded-3"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
