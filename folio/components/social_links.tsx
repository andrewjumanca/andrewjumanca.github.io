import '../styles/global.css';

const SocialLinks: React.FC = () => {
    return (
        <div className="social-media-container">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/andrew-jumanca" target="_blank">
                    <img src="linkedin_icon.svg" alt="LinkedIn" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/andrewjumanca/" target="_blank">
                    <img src="instagram_icon.svg" alt="Instagram" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/andrewjumanca" target="_blank" >
                    <img src="github_icon.svg" alt="GitHub" />
                </a>
            </div>
        </div>

    );
};

export default SocialLinks;