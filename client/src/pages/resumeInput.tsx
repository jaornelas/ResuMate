//input user info
import { useState } from "react";
import { Button, Card, CardContent } from "../components";

const ResumeInput = () => {
    //store user input for the resume
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    experience: "",
  });

  //handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  //send resume data to backend 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/resumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resumeData),//send data to sequelize db
      });

      if (response.ok) {
        alert("Resume submitted successfully!");
        setResumeData({ name: "", email: "", experience: "" });//clears form
      } else {
        alert("Error submitting resume.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div>
      <h1>Resume Input</h1>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={resumeData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={resumeData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="experience"
              placeholder="Work Experience"
              value={resumeData.experience}
              onChange={handleChange}
              required
            />
            <Button type="submit">Save Resume</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeInput;
