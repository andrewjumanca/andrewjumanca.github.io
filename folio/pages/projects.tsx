import Layout from "../components/layout";
import { Item } from "../components/item";
import "../styles/global.css"
import ImageModal from "../components/modal_image";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


const Projects: React.FC = () => {
    return (
        <Layout>
            <div className="project-items-container">
                <Item 
                    title="GitReps Community"
                    project_link="https://github.com/GitRepsCommunity/platform"
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
                    title= "E-Telligence API"
                    project_link="https://etelligenceapi.live"
                    content={
                        <div className="item-subcontainer">
                                <p>
                                The E-Telligence API bridges the gap between legitimate product data 
                                and the e-commerce services that rely on that data.
                                </p>
                                <br />
                                <p>
                                Partnered with NetPrism LLC for my senior year capstone project, I led the 
                                design and development of this e-commerce data ingestion service. You can 
                                learn more about the project and interact with a demo version&nbsp;<a className="link" href="https://etelligenceapi.live">here</a>.
                                </p>
                                 
                                <br />
                                <p>
                                In the diagram below, you can see how tasks would be queued within the 
                                application in order to aggregate filtered product data to be sent to the 
                                client. The API itself was designed to be extremely lightweight and detached from 
                                the product filteration process. This way, simple interaction with small amounts of data would be 
                                allowed for previewing via the React app, but the large amounts of product data would be sent 
                                directly to the client throught the API upon scheduled task completion.
                                </p>
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
                        </div>
                    }
                />
                <Item 
                    title="Tic Tac Toe RFC"
                    project_link="https://github.com/andrewjumanca/TicTacToeRFC"
                    content={
                        <div className="item-subcontainer">
                            <p>
                                Imagine Tic Tac Toe, but instead of a pen and paper we&apos;re sending and recieving
                                <em> your choice</em> of TCP or UDP packets to and from the opponent.
                            </p>
                            <br />
                            <p>
                                Implementing strict protocols for sent and recieved moves, we can play a simple game
                                of tic tac toe with any other player who follows the same RFC. Here&apos;s an example of the move
                                types being sent on either end:
                            </p>
                            <br />
                            <div className="dual-image-container">
                                <Image  src={"/client_messages.png"}
                                        alt={"List of client-sent messages"}
                                        width={300}
                                        height={100}>
                                </Image>
                                <Image  src={"/server_messages.png"}
                                        alt={"List of server-sent messages"}
                                        width={300}
                                        height={100}>
                                </Image>
                            </div>
                            <p>
                                Here&apos;s an example of what a game might look like, with one user using a TCP/UDP connection
                                from their computer and their opponent from another (click to expand):
                            </p>
                            <br />
                            <div className="dual-image-container">
                                <ImageModal 
                                    src="/player1.png"
                                    alt="player1 output commands"
                                    width={300}
                                    height={350}
                                    className="subcontainer-image" />
                                <ImageModal 
                                    src="/player2.png"
                                    alt="player2 output commands"
                                    width={300}
                                    height={350}
                                    className="subcontainer-image" />
                            </div>
                            <br />
                            <p>
                                The purpose of this project is to demonstrate how important attention to detail is when you&apos;re 
                                prioritizing interoperability. We use TC and UDP protocols every day in our personal and professional 
                                technologies. 
                            </p>
                            <br />
                            <br />
                        </div>
                    }
                />
            </div>
            
        </Layout>
    );
  };
  
  export default Projects;
  