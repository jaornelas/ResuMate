import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent } from "../components";

const Signup = () => {
  const navigate = useNavigate();
  
  // Store user input
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Account created successfully!");
        navigate("/login"); // Redirect user to login page
      } else {
        alert("Error creating account. Try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Button type="submit">Create Account</Button>
          </form>
          <p>Already have an account? <span onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "blue" }}>Login</span></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
