//saved resumes and cover letters
import { useState, useEffect } from "react";
import { Button, Card, CardContent } from "./components";
import "./saved.css"; // Import CSS for styling

interface Resume {
  id: number;
  name: string;
  email: string;
  experience: string;
}

const Saved = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //fetch saved resumes from the backend when the component loads
  useEffect(() => {
    fetch("http://localhost:5000/api/resumes") // fetch from sequelize api
      .then((response) => response.json())
      .then((data) => {
        setResumes(data); //stores resume
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching resumes:", err);
        setError("Failed to load saved resumes.");
        setLoading(false);
      });
  }, []);


//deletes a resume
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/resumes/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setResumes(resumes.filter((resume) => resume.id !== id));//removes deleted resume
      } else {
        console.error("Failed to delete resume.");
      }
    } catch (error) {
      console.error("Error deleting resume:", error);
    }
  };

  return (
    <div className="saved-container">
      <h1>Saved Resumes</h1>
      {loading && <p>Loading saved resumes...</p>}
      {error && <p className="error">{error}</p>}
      {resumes.length === 0 && !loading && <p>No saved resumes found.</p>}

      <div className="resume-list">
        {resumes.map((resume) => (
          <Card key={resume.id} className="resume-card">
            <CardContent>
              <h2>{resume.name}</h2>
              <p>Email: {resume.email}</p>
              <p>Experience: {resume.experience}</p>
              <p>Last Updated: {new Date(resume.updatedAt).toLocaleDateString()}</p>
              <Button onClick={() => handleDelete(resume.id)}>Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Saved;
