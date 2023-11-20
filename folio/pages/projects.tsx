import Layout from "../components/layout";
import { Item } from "../components/item";
import "../styles/global.css"
import Image from "next/image";
import { useState } from "react";


const Projects: React.FC = () => {
    const [showImage, setShowImage] = useState(false);

    const toggleImage = () => {
        setShowImage(!showImage);
    };

    return (
        <Layout>
            <div className="project-items-container">
                <Item 
                    title="GitReps Community"
                    content={
                        <div className="item-subcontainer">
                            <p>
                                GitReps is a way to more easily show off your GitHub reputation, 
                                get in touch with open-source projects, and showcase your collaboration 
                                skills.
                                <br />
                                <br />
                                Designed with the Ruby on Rails framework, the application authenticates 
                                directly with GitHub using Omniauth. This way, the user&apos;s information
                                can be directly accessed from the GitHub REST api and presented in a 
                                meaningful manner.
                            </p>
                            
                            <div className="subcontainer-image" onClick={toggleImage}>
                                <Image
                                    src={"/GitReps_system_design.png"}
                                    alt="GitReps System Design Explanation"
                                    width={1059}
                                    height={522}
                                    className="subcontainer-image">
                                </Image>
                            </div>
                            
                            {showImage && (
                                <div className="modal-overlay" onClick={toggleImage}>
                                    <div className="modal-content">
                                        <Image
                                            src={"/GitReps_system_design.png"}
                                            alt="GitReps System Design Explanation"
                                            width={1059}
                                            height={522}
                                            className="subcontainer-image">
                                        </Image>
                                    </div>
                                </div>
                            )}  
                            <br/>             
                            <p>
                                This project is currently under development, but I aim to test and continue
                                developing it with the help of new users as soon as an MVP is produced.
                                <br />
                                The goal is to get early-stage software engineers to use and give feedback
                                about GitReps in order to understand what type of data is most important for
                                 people to understand at first sight.
                                <br />
                                <br />
                                Getting involved in meaningful projects involves a lot of research and 
                                knowledge relevant to the subject-matter, and that&apos;s something I want help provide 
                                people with in order to inspire collaboration and transparency in open-source work.
                            </p>
                        </div>
                    }
                />
                <Item 
                    title="E-Telligence API"
                    content={
                        <div className="item-subcontainer">
                            <p>
                            blank
                            </p>
                        </div>
                    }
                />
                <Item 
                    title="Tic Tac Toe RFC"
                    content={
                        <div className="item-subcontainer">
                            <p>
                            blanks
                            </p>
                        </div>
                    }
                />
            </div>
            
        </Layout>
    );
  };
  
  export default Projects;
  