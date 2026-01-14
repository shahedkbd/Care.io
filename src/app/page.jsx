import AboutSection from "@/components/Home/AboutSection";
import HeroBanner from "@/components/Home/HeroBanner";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import UserCard from "@/components/UserCard";

export const metadata = {
  title: "Care.xyz | Baby Sitting & Elderly Care Service Platform",
  description:
    "Care.IO is a trusted caregiving platform that helps users book reliable baby sitting, elderly care, and sick people care services based on their preferred time duration and location. Our mission is to make caregiving simple, safe, and accessible for everyone.",

  keywords: [
    "Care.IO",
    "Care.xyz",
    "Baby Sitting Service",
    "Elderly Care Service",
    "Sick People Care",
    "Care Service Platform",
    "Caregiver Booking",
    "Home Care Service",
    "Bangladesh Care Service"
  ],

  authors: [{ name: "Care.IO Team" }],

  openGraph: {
    title: "Care.xyz | Trusted Baby Sitting & Elderly Care Services",
    description:
      "Book trusted baby sitting, elderly care, and sick people care services easily with Care.IO. Choose your preferred duration and location with confidence.",
    url: "https://care-io-delta.vercel.app",
    siteName: "Care.IO",
    images: [
      {
        url: "https://i.ibb.co.com/VcQKvyD1/image.png",
        width: 1200,
        height: 630,
        alt: "Care.IO Home Page – Baby Sitting & Elderly Care Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "https://i.ibb.co.com/tPb0RZxB/logo.png",
    apple: "https://i.ibb.co.com/tPb0RZxB/logo.png",
  },

  metadataBase: new URL("https://care-io-delta.vercel.app"),
};


export default function Home() {
  return (
    <div className="min-h-screen justify-center">
      {/* <UserCard></UserCard> */}
      <HeroBanner></HeroBanner>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <TestimonialsSection></TestimonialsSection>
      
    </div>
  );
}
