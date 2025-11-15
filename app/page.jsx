
import Input from "@/components/assets/input.jsx";
import "@/styles/globals.css";

export default function LandingPage() {
  return (
    <div className="main-container">
      {/* background image will go in here..... */}
      <div className="section-1">
        <section>
          <Input />
        </section>
      </div>

      <div className="section-2">
        {/* some voter-action images will fit in here..... */}
        <section>
          <h1>Welcome to the Voting Application</h1>
          <p>Please navigate to the voting section to participate.</p>
        </section>

      </div>
      
      
      
    </div>
  )
}