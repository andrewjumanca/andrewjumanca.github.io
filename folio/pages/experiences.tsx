import Layout from "../components/layout";
// import { ReactComponent as WorkIcon } from "./next.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../styles/global.css'

const Experiences: React.FC = () => {
    return (
        <Layout>
            <VerticalTimeline layout={'1-column-left'}>
                {
                    timelineElements.map(element => {
                        console.log(element.icon + "-icon")
                        console.log(`../public/${element.icon}.svg`)
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                icon={<img src={`./${element.icon}.svg`} className={"timeline-element-icon-" + element.icon}/>}

                                dateClassName="timeline-date"
                                iconClassName={element.icon + "-icon"} // Apply the class name
                                >
                                <div className="title-organization-container">
                                    <h3 className="vertical-timeline-element-title">
                                        {element.title}
                                    </h3>
                                    <h3 className="vertical-timeline-element-organization">
                                        {element.organization}
                                    </h3>
                                </div>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </Layout>
    );
  };
  
  export default Experiences;


let timelineElements = [
    {
        id: 1,
        title: "Student",
        organization: "TBD",
        location: "",
        description: "Pursuing my masters in computer science, with a focus in interactive intelligence.",
        date: "September 2024 - May 2026",
        icon: "school"
    },
    {
        id: 2,
        title: "Freelance Developer",
        organization: "Self-Employed",
        location: "Seattle, WA",
        description: "Building websites for local businesses, automating marketing, and working with professionals in a variety of industries to build them custom software. Applications in client-intake acceleration, data visualization, and service-progression tracking.",
        date: "June 2023 - Present",
        icon: "work"
    },
    {
        id: 3,
        title: "Capstone Project Engineer",
        organization: "NetPrism LLC",
        location: "Seattle, WA",
        description: "Through the Informatics capstone program, I was assigned to work with an e-commerce start up to design technology for a new feature. Leading a team of four others, I created an end-to-end solution to systemically scrape product-page links and avoid spam in order to collect data for a product recommendation system. ",
        date: "January 2023 - June 2023",
        icon: "internship"
    },
    {
        id: 4,
        title: "Software Engineer Intern",
        organization: "The Walt Disney Company",
        location: "Orlando, FL",
        description: "As an intern for the central accounting platform, I gained experience working with large-scale, distributed accounting systems by writing unit tests, enhancing SQL/NoSQL database transactions, and monitoring performance metrics.\
                      Overall, it was a valuable experience and a steep learning curve that sharpened my software skills.",
        date: "June 2022 - December 2022",
        icon: "internship"
    },
    {
        id: 5,
        title: "Research Assistant",
        organization: "Genetically Engineered Material Science & Engineering Center",
        location: "Seattle, WA",
        description: "Through my university's material science department, I took part in replicating methods in bioinformatics and computational biology by assisting PhD candidates in their endeavors. I explored statistical methods in biocomputation (Fourier transforms, cross-correlations, sequence encoding, neural networks) in order to analyze and predict protein-peptide binding affinity.",
        date: "January 2020 - January 2022",
        icon: "internship"
    },
    {
        id: 6,
        title: "Student",
        organization: "University of Washington",
        location: "Seattle, WA",
        description: "Pursued the study, design, and development of information technology for the good of people, organizations, and society. I chose a concentration in software development within my department and completed two minors in pure mathematics and data science.",
        date: "September 2019 - June 2023",
        icon: "school"
    }
]