import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Navbar, Input } from "../components";
import { useAuth } from "../context/AuthContext";
import "./home.css";

const Home = () => {
    console.log('Home component rendered');

    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Logged in with:", data);
                login(data);
                navigate("/resumeInput");
            } else {
                console.error("Authentication failed");
            }
        } catch (error) {
            console.error("Error during authentication:", error);
        }
    };

    return (
        <div>
            <h1 className="title">ResuMate</h1>
            <h2 className="tagLine">Get Noticed. Get Hired. Get ResuMate.</h2>
            <Card className="logIn">
                <h2>Log In or Create an Account</h2>
                <form onSubmit={handleLogin}>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Log In</Button>
                    <p>Don't have an account?<span onClick={() => navigate("/signup")} style={{ cursor: "pointer", color: "blue" }}>Sign up</span></p>
                </form>
            </Card>
            <Card className="testimonials">
                <p>"ResuMate completely changed my job search! The AI-powered resume helped me land my dream job. Highly recommend!"- Anna P., Wisconsin, a real user</p>
                <p>"ResuMate makes job hunting easy. The AI-powered resume suggestions gave me the confidence to apply for top positions. I landed multiple interviews within a week!"- Jake R., Texas</p>
                <p>"ResuMate saved my life."- Marc S., Pennsylvania</p>
            </Card>
        </div>
    );
};

export default Home;