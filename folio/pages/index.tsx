import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';
import SocialLinks from '../components/social_links';

const LandingPage: React.FC = () => {
    return (
            <Layout>
                <section className="flex flex-col items-center py-5">
                    <div className="flex flex-row py-3 text-center">
                        <h1 className='font-sans text-xl px-1'>
                            Welcome to my
                        </h1>
                        <h1 className='font-sans text-xl px-1.5 font-semibold'>
                            portfolio
                        </h1>
                        <h1 className='font-sans text-xl'>
                            /
                        </h1>
                        <h1 className='font-sans text-xl px-1.5 font-semibold'>
                            blog
                        </h1>
                        <h1 className='font-sans text-xl'>
                            /
                        </h1>
                        <h1 className='font-sans text-xl px-1.5 font-semibold'>
                            website
                        </h1>
                    </div>
                </section>
                <section>
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
                                Hi, I&apos;m Andrew, welcome to my portfolio website. 
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
