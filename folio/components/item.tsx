import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import '../styles/item.css';

interface ItemProps {
    title: string;
    content: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({ title, content }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section 
            // style={{opacity}}
            ref={ref}>
            <figure className="progress">
                    <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="indicator"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                </figure>
            <div className="item-head">
                <h2>{title}</h2>
            </div>
            <div className="item-body">
                {content}
            </div>
        </section>
    );
};
