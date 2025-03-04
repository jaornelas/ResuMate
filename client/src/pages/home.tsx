//home.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, card, cardContent }from "./components";
//import needed components from components/ui?- button, card, etc.
import "./home.css";

const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail]= useState("");
    const [password,setPassword]= useState("");

const handleLogin= (e: React.FormEvent)=> {
    e.preventDefault();
    //api call for authenticaion logic???
    console.log( "logged in with:", email, password);
    navigate("/resumeInput");
};

return(
    <div>
        <h1 className = "title">ResuMate</h1>
        <h2 className= "tagLine">Get Noticed. Get Hired. Get ResuMate.</h2>
        <card className = "logIn">
            <cardContent>
            <h2>Log In or Create an Account</h2>
            <form onSubmit={handleLogin}>
                <Input
                type="email"
                placeholder= "Enter your email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <Input 
                type= "password"
                placeholder= "Enter your password"
                value= {password}
                onChange= {(e) => setPassword(e.target.value)}
                />
            <Button type="submit">Log In</Button>
            <p>Don't have an account?</p>
            </form>
            </cardContent>
        </card>
        <card className="testimonials">
            <cardContent>
            <p>"ResuMate completely changed my job search! The AI-powered resume helped me land my dream job. Highly recommend!"- Anna P., Wisconsin, a real user</p>
            <p>"ResuMate makes job hunting easy. The AI-powered resume suggestions gave me the confidence to apply for top positions. I landed multiple interviews within a week!"- Jake R., Texas</p>
            <p>"ResuMate saved my life."- Marc S., Pennsylvania</p>
            </cardContent>
        </card>
    </div>
);
};

export default Home;