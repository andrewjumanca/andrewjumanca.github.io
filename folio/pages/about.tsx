import Link from "next/link";
import Layout from "../components/layout";

const About: React.FC = () => {
    return (
        <Layout>
            <section>
                    <div>
                        <h1 className='welcome-header-font'>
                            A bit about me
                        </h1>
                    </div>
                    <div className='index-header'>
                    <div className='index-header-text-container'>
                        <h1 className='header'>
                            more to come soon...after I convert all my CSS to Tailwind!
                        </h1>
                        {/* <h1 className='header'>
                            Why software?
                        </h1>
                        <h1 className='header'>
                            Some of my hobbies:
                        </h1> */}
                    </div>
                        
                    </div>

                </section>
        </Layout>
        
    );
  };
  
  export default About;
  