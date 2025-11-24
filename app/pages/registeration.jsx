import "@/styles/globals.css";

// Static page with no user interaction or API calls
export const dynamic = 'auto'; // Default: prerender as static

export default function RegistrationInfo() {
    return (
        <div className="registration-info">
            <h2>Not Available!</h2>
            <p>Visit any INEC office in your area for voter registeration.</p>
        </div>
    );
}
