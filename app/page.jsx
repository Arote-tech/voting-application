import React from 'react';
import Input from "@/components/assets/Input.jsx";
import ImageSlider from "@/components/assets/ImageSlider.jsx";
import "./styles/globals.css";

// Force dynamic rendering because this page contains interactive forms
export const dynamic = 'force-dynamic';

export default function LandingPage() {
  
  return (
    <div className="main-container">
      <section className="section-1">
        <img src="/images/salvatore-andrea-santacroce-y8ZTCeKT39w-unsplash.jpg" 
        alt="Background" width={1000} height={500}/>
        <div>
          <Input />
        </div>
      </section>

      <section className="section-2">
        <ImageSlider className="images"/>

        <div>
          <h1>Welcome to the Voting Application</h1>
        </div>
      </section>
    </div>
  );
}