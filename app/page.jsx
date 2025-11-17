
import Input from "@/components/assets/Input.jsx";
import ImageSlider from "@/components/assets/ImageSlider.jsx";
import Image from 'next/image';
import "@/styles/landing.css";

// Force dynamic rendering because this page contains interactive forms
export const dynamic = 'force-dynamic';

export default function LandingPage() {

   const images = [
    "https://media.gettyimages.com/id/1246204588/photo/an-official-of-the-independent-national-electoral-commission-sort-out-permanent-voters-cards.jpg?s=612x612&w=0&k=20&c=GxhEun9xxUeH-qUs_jMdtsN3Y781tzjOfu6yoySsvk4=",
    "https://media.gettyimages.com/id/96468470/photo/a-woman-casts-her-vote-in-a-ballot-box-n-empty-ballot-box-at-agulu-in-anambra-state-on-february.jpg?s=612x612&w=0&k=20&c=iryzZ7j36g8UGzalp8-gemge7RHQKUxpbhMlfzpoCpQ=",
    "https://media.gettyimages.com/id/1248497318/photo/voters-check-a-register-at-a-polling-station-during-local-elections-in-lagos-on-march-18-2023.jpg?s=612x612&w=0&k=20&c=JMRPcyd-woCjj1Gpyd3xe6lOfv35RXCiw8yWDSSwP2c=",
    "https://media.gettyimages.com/id/1247473647/photo/independent-national-electoral-commission-officials-go-through-ballot-papers-during-the.jpg?s=612x612&w=0&k=20&c=FM8omvDQgOLG6REsHDV0enzuRIevTx7KLsMi7PcGkg0=",
    "https://media.gettyimages.com/id/1247507047/photo/a-voter-cast-her-ballots-at-a-polling-unit-during-the-nigeria-presidential-election-at-a.jpg?s=612x612&w=0&k=20&c=21LC6u4-7W1C7Vh6ZRLz2_KIbHhD33Gt7SEEKyVEBLA="
  ];

  return (
    <div className="main-container">
      <section className="section-1">
        <Image src="public/images/salvatore-andrea-santacroce-y8ZTCeKT39w-unsplash.jpg" 
        alt="Background" width={600} height={600}/>
        <div>
          <Input />
        </div>
      </section>

      <section className="section-2">
        <ImageSlider images={images} interval={5000} />

        <div>
          <h1>Welcome to the Voting Application</h1>
        </div>
      </section>
    </div>
  );
}