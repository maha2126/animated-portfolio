import './portfolio.scss';
import { useRef } from 'react';
import {motion, useScroll, useSpring, useTransform, } from "framer-motion";


const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, exercitationem culpa quaerat ab quod nisi voluptatibus. Sit neque tenetur, officiis voluptatem ullam in? Numquam amet deserunt facere, voluptatibus natus vitae!"
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, exercitationem culpa quaerat ab quod nisi voluptatibus. Sit neque tenetur, officiis voluptatem ullam in? Numquam amet deserunt facere, voluptatibus natus vitae!"
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, exercitationem culpa quaerat ab quod nisi voluptatibus. Sit neque tenetur, officiis voluptatem ullam in? Numquam amet deserunt facere, voluptatibus natus vitae!"
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, exercitationem culpa quaerat ab quod nisi voluptatibus. Sit neque tenetur, officiis voluptatem ullam in? Numquam amet deserunt facere, voluptatibus natus vitae!"
    }
]

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                  <h2>{item.title}</h2> 
                  <p>{item.desc}</p> 
                  <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>)
}

const Portfolio = () => {

        const ref = useRef();

        const {scrollYProgress} = useScroll({
            target: ref, 
            offset:["end end", "start start"]
        });

        const scaleX = useSpring(scrollYProgress,{
            stiffness: 100,
            damping: 30,
        })
  
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div 
                style={{ scaleX  }} 
                className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
        
    )
}

export default Portfolio