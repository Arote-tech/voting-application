
import Input from "@/components/assets/Input.jsx";
import ImageSlider from "@/components/ImageSlider.jsx";
import "@/styles/globals.css";

export default function LandingPage() {

   const images = [
    "https://www.gettyimages.com/detail/news-photo/an-official-of-the-independent-national-electoral-news-photo/1246204588",
    "https://www.gettyimages.com/detail/news-photo/voter-casts-her-ballot-at-a-polling-station-during-local-news-photo/1248497296",
    "https://www.gettyimages.com/detail/news-photo/lagos-state-independent-electoral-commission-officials-news-photo/2224207892",
    "https://www.gettyimages.com/detail/news-photo/voters-queue-to-vote-at-a-polling-station-during-local-news-photo/1248497244",
    "https://www.gettyimages.com/detail/news-photo/police-officer-tries-to-calm-a-situation-at-a-polling-news-photo/1248497656"
  ];

  return (
    <div className="main-container">
      {/* background image will go in here..... */}
      <div className="section-1">
        <section>
          <Input />
        </section>
      </div>

      <div className="section-2">
        <ImageSlider images={images} interval={5000} />

        <section>
          <h1>Welcome to the Voting Application</h1>
          <p>Please navigate to the voting section to participate.</p>
        </section>
      </div>
    </div>
  );
}