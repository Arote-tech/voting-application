import { React } from "react";
import "@/styles/globals.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <section>
        <Input />
      </section>
      <section>
        <h1>Welcome to the Voting Application</h1>
        <p>Please navigate to the voting section to participate.</p>
      </section>
      
    </div>
  )
}