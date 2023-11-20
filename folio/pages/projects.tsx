import Layout from "../components/layout";
import { Item } from "../components/item";
import "../styles/global.css"
import ImageModal from "../components/modal_image";
import { useState } from "react";


const Projects: React.FC = () => {
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
                            <ImageModal
                                src={"/GitReps_system_design.png"}
                                alt="GitReps System Design Explanation"
                                width={1059}
                                height={522}
                                className="subcontainer-image"
                            />
                            <br/>             
                            <p>
                                This project is currently under development, and I aim to test and continue
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
                                The E-Telligence API bridges the gap between legitimate product data 
                                and the e-commerce services that rely on that data.
                                <br />
                                <br />
                                Partnered with NetPrism LLC for my senior year capstone project, I led the 
                                design and development of this e-commerce data ingestion service. You can 
                                learn more about the mission and interact with a demo version&nbsp;
                                 <a className="link" href="https://etelligenceapi.live">here</a>.
                                <br />
                                <br />
                                In the diagram below, you can see how tasks would be queued within the 
                                application in order to aggregate filtered product data to be sent to the 
                                client. The API itself was designed to be extremely lightweight and detached from 
                                the product filteration process. This way, simple interaction with small amounts of data would be 
                                allowed for previewing via the React app, but the large amounts of product data would be sent 
                                directly to the client throught the API upon scheduled task completion.
                                <br />
                                <br />
                                <ImageModal
                                    src="/E-Telligence-PPFD.jpg"
                                    alt="E-Telligence Project PPFD"
                                    width={9785}
                                    height={5007}
                                    className="subcontainer-image"
                                />
                                <br />
                                <strong>Takeaways:</strong> 
                                <ul className="list">
                                    <li><strong>1. Plan ahead</strong></li>
                                        <li className="sub-bullet">While working on this project, I learned how valuable
                                        it can be to plan optimizations ahead of time. Even though I wasn&apos;t working with a 
                                        commercial amount of data, my team quickly ran into rate limiting issues and the boundaries
                                        of our personal computers. </li>
                                        <li className="sub-bullet">By implementing a queueing system using a tool like RabbitMQ 
                                        and leveraging a cache with Redis instead of permanently storing data unnecessarily, we could
                                        increase efficiency and decrease the need for storage.</li>
                                        <br />
                                    <li><strong>2. Take time with key design decisions</strong></li>
                                        <li className="sub-bullet">Take more time to write the important code once so that you don&apos;t need 
                                        to come back and write it again. Half way through this project I realized that having a Node.js backend 
                                        for an application that revolved almost entirely around Scrapy (a Python web-crawling framework) was a bad design decision. 
                                        </li>
                                        <li className="sub-bullet">The initial logic was that the entire team had more experience with JavaScript, Node, & Express, however
                                         we realized soon after that script execution and thread management using a Python-based framework was much more logical given 
                                         the scope of the project.</li>
                                </ul>
                            </p>
                        </div>
                    }
                />
                <Item 
                    title="Tic Tac Toe RFC"
                    content={
                        <div className="item-subcontainer">
                            <p>
                            Working on adding this one!
                            </p>
                        </div>
                    }
                />
            </div>
            
        </Layout>
    );
  };
  
  export default Projects;
  