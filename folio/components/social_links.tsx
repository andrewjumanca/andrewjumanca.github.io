import '../styles/global.css';

const SocialLinks: React.FC = () => {
    return (
        <div className="social-media-container">
            <div className="social-icon">
                <a href="https://www.linkedin.com/" target="_blank">
                <img src="linkedin-icon.png" alt="LinkedIn" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/" target="_blank">
                <img src="instagram-icon.png" alt="Instagram" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/" target="_blank" />
                <img src="github-icon.png" alt="GitHub">
                </a>
            </div>
        </div>

    );
};