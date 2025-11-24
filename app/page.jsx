
import Input from "@/components/assets/Input.jsx";
import ImageSlider from "@/components/assets/ImageSlider.jsx";
import "@/styles/globals.css";

// Force dynamic rendering because this page contains interactive forms
export const dynamic = 'force-dynamic';

export default function LandingPage() {
  const images = [
    "https://media.gettyimages.com/id/1248515031/photo/officials-of-the-independent-national-electoral-commission-count-votes-at-a-polling-station.jpg?s=612x612&w=0&k=20&c=Brwj5GEeP7gaIo63RuDVmpZ1Sxe4bMGR-_xUJGEfy98=",
    "https://media.gettyimages.com/id/2224208224/photo/a-woman-votes-as-lagos-state-conducts-an-election-for-its-20-local-government-areas-and-37.jpg?s=612x612&w=0&k=20&c=iBikVSqSvP4uL9wewiVcr5TTZYsQE0G8UUrTxW37sjQ=",
    "https://media.gettyimages.com/id/1248497501/photo/a-voter-casts-her-ballot-at-a-polling-station-during-local-elections-in-lagos-on-march-18.jpg?s=612x612&w=0&k=20&c=3MwCjzgfAWOfbbLcdcOF8l6AA_gWrtNYE92xgaeDc2A=",
    "https://media.gettyimages.com/id/1246204588/photo/an-official-of-the-independent-national-electoral-commission-sort-out-permanent-voters-cards.jpg?s=612x612&w=0&k=20&c=GxhEun9xxUeH-qUs_jMdtsN3Y781tzjOfu6yoySsvk4=",
  ];
  
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
        <ImageSlider images={images} width={1000} height={500}/>

        <div>
          <h1>Welcome to the Voting Application</h1>
        </div>
      </section>
    </div>
  );
}