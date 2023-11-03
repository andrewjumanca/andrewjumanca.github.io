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
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                dateClassName="timeline-date"
                                iconClassName={element.icon + "-icon"} // Apply the class name
                                >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
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
        location: "Online",
        description: "",
        date: "September 2024 - May 2026",
        icon: "school"
    },
    {
        id: 2,
        title: "Freelance Developer",
        location: "Seattle, WA",
        description: "",
        date: "June 2023 - Present",
        icon: "work"
    },
    {
        id: 3,
        title: "Software Developer",
        location: "Seattle, WA",
        description: "",
        date: "January 2023 - June 2023",
        icon: "internship"
    },
    {
        id: 4,
        title: "Software Engineer Intern",
        location: "Orlando, FL",
        description: "",
        date: "June 2022 - December 2022",
        icon: "internship"
    },
    {
        id: 5,
        title: "Assistant Researcher",
        location: "Seattle, WA",
        description: "",
        date: "January 2020 - January 2022",
        icon: "internship"
    },
    {
        id: 6,
        title: "Student",
        location: "Seattle, WA",
        description: "",
        date: "September 2019 - June 2023",
        icon: "school"
    }
]