import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';

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
                        <h1 className='header'>
                            Hi, I'm Andrew. This is my portfolio/business/project update page!
                        </h1>
                    </div>
                        
                    </div>

                </section>
                    
            </Layout>        
      );
    }

export default LandingPage;
