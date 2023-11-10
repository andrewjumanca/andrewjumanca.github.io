import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';
import SocialLinks from '../components/social_links';

const LandingPage: React.FC = () => {
    return (
            <Layout>
                <section>
                    <div>
                        <h1 className='welcome-header-font'>
                            Welcome to my website!
                        </h1>
                    </div>
                    <div className='index-header'>
                    <Image
                        src="/profile_pic3.jpg" // Provide the path to your image in the "public" directory
                        alt="GitHub Profile Picture"
                        width={200} // Set the desired width
                        height={100} // Set the desired height
                        className="rounded-image"
                    />
                    <div className='index-header-text-container'>
                        <SocialLinks></SocialLinks>
                        <h1 className='header'>
                            Hi, Im Andrew, welcome to my portfolio website. 
                        </h1>
                        <h2>
                            Check out the experiences section to learn more about my work.
                        </h2>
                    </div>
                        
                    </div>

                </section>
                    
            </Layout>        
      );
    }

export default LandingPage;
