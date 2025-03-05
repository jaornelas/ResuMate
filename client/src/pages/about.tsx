import { useState } from "react";
import { Button, Card, CardContent, Input, Textarea } from "../components";
import "./about.css"
import React from "react";
//import components
//import CSS

const About = () => {
    const [issue, setIssue] = useState("");
    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!email || !issue ){
            setMessage("Please fill in all required fields.");
            return;
        }
        console.log("Issue reported:", {email, issue});
        setMessage("Thanks for your feedback!");
        setIssue("");
        setEmail("");
    };

    return(
    <div className= "about-container">
        <div className= "about-content">
            <h1>About ResuMate</h1>
            <p className= "description">ResuMate is an AI-powered resume builder designed to help job seekers
          craft professional, ATS-friendly resumes effortlessly. Our intelligent
          tools analyze your resume, suggest optimizations, and help you stand
          out in the job market.</p>
        </div>
        <Card className= "report-issue">
            <h2>Report an Issue</h2>
            <p>Encountered a problem? Let us know!</p>
            <CardContent onSubmit={handleSubmit} className= "issue-form">
                <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                required
                />
                <Textarea
                placeholder= "Please describe the issue you've encountered."
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
                />
                <Button type= "submit">
                    Submit Issue
                </Button>
            </CardContent>
        </Card>
    </div>
    ); 
}

export default About;