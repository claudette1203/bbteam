import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Fact.css";

export interface FactT {
    num: number;
    fact: string;
    image: string;
}

const Fact: React.FC<{ fact: FactT }> = ({ fact }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = fact.num;
            const duration = 2000;
            const increment = end / (duration / 10);

            const animateCount = () => {
                start += increment;
                if (start < end) {
                    setCount(Math.ceil(start));
                    setTimeout(animateCount, 10);
                } else {
                    setCount(end);
                }
            };

            animateCount();
        }
    }, [inView, fact.num]);

    return (
        <div className="fact">
            <div className="fact-text">
                <h2 ref={ref}>{count}</h2>
                <p>{fact.fact}</p>
            </div>
            <div className="fact-image">
                <img src={fact.image} alt={fact.fact} />
            </div>
        </div>
    );
}

export default Fact;