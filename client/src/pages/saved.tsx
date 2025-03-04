//saved resumes and cover letters
import { useState, useEffect } from "react";
import { Button, Card, CardContent } from "../components";
import "./saved.css"; // Import CSS for styling

interface Resume {
  id: number;
  title: string;
  updatedAt: string;
  fileUrl: string; // URL to download the resume
}

const Saved = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/resumes") // Adjust API URL if needed
      .then((response) => response.json())
      .then((data) => {
        setResumes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching resumes:", err);
        setError("Failed to load saved resumes.");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/resumes/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setResumes(resumes.filter((resume) => resume.id !== id));
      } else {
        console.error("Failed to delete resume.");
      }
    } catch (error) {
      console.error("Error deleting resume:", error);
    }
  };

  return (
    <div className="saved-container">
      <h1 className="title">Saved Resumes</h1>
      {loading && <p>Loading saved resumes...</p>}
      {error && <p className="error">{error}</p>}
      {resumes.length === 0 && !loading && <p>No saved resumes found.</p>}

      <div className="resume-list">
        {resumes.map((resume) => (
          <Card key={resume.id} className="resume-card">
            <CardContent>
              <h2 className="resume-title">{resume.title}</h2>
              <p className="resume-date">Last Updated: {new Date(resume.updatedAt).toLocaleDateString()}</p>
              <div className="resume-actions">
                <Button onClick={() => window.open(resume.fileUrl, "_blank")}>
                  Download
                </Button>
                <Button onClick={() => handleDelete(resume.id)} className="delete-btn">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Saved;
