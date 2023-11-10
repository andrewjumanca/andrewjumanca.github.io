import '../styles/global.css';
import Image from 'next/image';

const SocialLinks: React.FC = () => {
    return (
        <div className="social-media-container">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/andrew-jumanca" target="_blank">
                    <Image src="linkedin_icon.svg" alt="LinkedIn" width={100} height={100}/>
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/andrewjumanca/" target="_blank">
                    <Image src="instagram_icon.svg" alt="Instagram" width={100} height={100}/>
                </a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/andrewjumanca" target="_blank" >
                    <Image src="github_icon.svg" alt="GitHub" width={100} height={100}/>
                </a>
            </div>
        </div>

    );
};

export default SocialLinks;