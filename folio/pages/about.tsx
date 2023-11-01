import Link from "next/link";
import Layout from "../components/layout";

const About: React.FC = () => {
    return (
        <Layout>
            <div className="px-page">
              <h1>About Me</h1>
                <p>
                    I&apos;m a 22-year-old software developer actively seeking employment in full-stack and data engineer roles. My main
                    areas of expertise are in server-side development and testing, API design, and pipeline engineering for data-related
                    applications, particularly machine learning. I have more specific details about my  experiences and skill areas in my
                    <Link href={"/projects/"}> projects</Link> and <Link href={"/experiences/"}>experiences</Link> pages.
                </p>
                <p>          
                </p>
                <p>
                    But first, why did I choose software development, and what part of software am I even involed in? In short, my answer now
                    will probably be different in a few years, or even months. To be frank, even the software and frameworks used to write this 
                    very website have probably had multiple patches or new features since my last use. My point is, I didn&apos;t get into writing
                    software because I had an end goal in mind; I got into software because at its core, it is all about logic, design, and implementation, 
                    regardless of what branch of technology you&apos;re working in.             
                    
                </p>
                <p>
                    Besides programming, I spend my time cooking, staying active, and doing a variety of different hobbies.
                    I love cars, music and videography, snowboarding in the cold months, and wakeboarding/surfing/hiking in warmer months.
                    I&apos;m currently working on displaying some of my photographic work and edits on this website.
                </p>
            </div>
        </Layout>
        
    );
  };
  
  export default About;
  