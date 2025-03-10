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

//store AI prompt response
const [aiResponse, setAiResponse] = useState("");

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

  //Call AI API to help create content for resume
  const generateWithAI = async () => {
    const fullPrompt= ` Using the provided user information, please create a clean, well-structured, easy-to-read resume with clear section headers.
      Make sure it is optimized for Applicant Tracking Systems. Highlight the user’s strengths.
      Use strong action words and focus on measurable achievements.
      Include a brief 2-3 sentence summary that highlights experience, key skills, and user career goals when applicable.

      User Information:
      - Name: ${resumeData.name}
      - Email: ${resumeData.email}
      - Experience: ${resumeData.experience}`;
    try{
      const response = await fetch("http://localhost:5000/api/ai/generate", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({prompt: fullPrompt}),
      });
    
      const data= await response.json();
      setAiResponse(data.text || "Failed to generate content.");
    } catch (error) {
      console.error("AI Error:", error);
      setAiResponse("Error generating AI response.");
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

      {/*AI Prompt Integration */}
      <Card>
        <CardContent>
          <h2>Generate Resume</h2>
          <Button onClick={generateWithAI}>Generate Resume</Button>
          {aiResponse && (
            <div>
              <h3>AI-Generated Resume:</h3>
              <p>{aiResponse}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeInput;
