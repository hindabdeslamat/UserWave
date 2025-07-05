import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "../Config/actions";
import { Link } from "react-router-dom";

function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserAction(id));
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">
            UserWave
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add-user" className="nav-link">
                  Add User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="py-5"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold text-dark">All Users</h2>
            <Link to="/add-user" className="btn btn-success fw-semibold shadow-sm">
              + Add User
            </Link>
          </div>

          {users.length === 0 ? (
            <div className="alert alert-warning text-center">No users found.</div>
          ) : (
            <div className="table-responsive shadow rounded-3 overflow-hidden">
              <table className="table table-striped table-hover bg-white align-middle">
                <thead className="table-primary text-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr key={user.id}>
                      <td>{idx + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td className="text-center">
                        <Link
                          to={`/update-user/${user.id}`}
                          className="btn btn-outline-primary btn-sm me-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <footer className="bg-primary text-white text-center py-3 mt-auto">
        <div className="container">
          <small>© {new Date().getFullYear()} UserWave. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default UserList;
// This code defines a React component for displaying a list of users with options to edit or delete them.