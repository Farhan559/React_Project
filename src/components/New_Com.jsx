import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

const New_Com = () => {
  const [data, setData] = useState([
    { name: "Ali", email: "Ali@gmail.com", contact: "1234345" },
    { name: "Asad", email: "Asad@gmail.com", contact: "1234345" },
    { name: "Ahmed", email: "Ahmed@gmail.com", contact: "1234345" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddData = () => {
    setData([...data, formData]);
    setFormData({ name: "", email: "", contact: "" }); // Clear form after adding
  };

  return (
    <>
      <h2>New Component</h2>
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddData}>
          Add to Table
        </Button>
      </Form>

      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default New_Com;
