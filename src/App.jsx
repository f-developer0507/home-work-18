import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    users.push(form);
    setUsers([...users]);
    e.target.reset();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>T/R</td>
                <td>Name</td>
                <td>Age</td>
                <td>Phone number</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <div>
                <h1 className="text-center">Add User</h1>
              </div>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  className="form form-control my-2"
                  required
                />
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  onChange={handleChange}
                  className="form form-control my-2"
                  required
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  onChange={handleChange}
                  className="form form-control my-2"
                  required
                />
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  onChange={handleChange}
                  className="form form-control my-2"
                  required
                />
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-success" form="submit">
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
