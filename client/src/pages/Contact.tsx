// import { useState } from "react";
// import { Button, Card, CardContent, Input, Textarea, Navbar } from "../components";
// import "./home.css"
// import React from "react";

// const Contact = () => {
//     const [issue, setIssue] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!email || !issue) {
//             setMessage("Please fill in all required fields.");
//             return;
//         }
//         console.log("Issue reported:", { email, issue });
//         setMessage("Thanks for your feedback!");
//         setIssue("");
//         setEmail("");
//     };
//     return (
//         <div>
//             <Navbar/>
//             <Card className="report-issue">
//                 <h2>Report an Issue</h2>
//                 <p>Encountered a problem? Let us know!</p>
//                 <form onSubmit={handleSubmit} className="issue-form">
//                     <CardContent>
//                         <Input
//                             type="email"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//                             required
//                         />
//                         <Textarea
//                             placeholder="Please describe the issue you've encountered."
//                             value={issue}
//                             onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setIssue(e.target.value)}
//                             required
//                         />
//                         <Button type="submit">
//                             Submit Issue
//                         </Button>
//                     </CardContent>
//                 </form>
//             </Card>
//         </div>
//     );
// }

// export default Contact;