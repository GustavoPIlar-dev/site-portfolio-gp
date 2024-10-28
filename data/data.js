import styles from '../styles/sections.module.css';
import Image from 'next/image';
import {IoLogoJavascript,IoLogoCss3,IoLogoHtml5,IoLogoReact} from "react-icons/io5";
import {SiPowerbi } from 'react-icons/si';

export const apresentation = (
    <div className={styles.intro}>
        <div className={styles.title}>
            <p>Hi, im a</p>
            <h1>Full Stack<br />Software<br />Developer</h1>
            <p>ready for every challenge!</p>
        </div>
        <Image src='/images/me.png' width={900} height={900} />
        <div className={styles.meBG} />
    </div>
);

export const aboutMe = (
    <div className={styles.abtMe}>
        <h2>About Me</h2>
        <div className={styles.abtContent}>
            <div className={styles.me}>
                <div className={styles.text}>
                    <p>Gustavo Pilar works in the Information Technology Department at HAYMAN-WOODWARD, bringing 5 years of extensive experience in the field. Fluent in Portuguese, Gustavo excels in software development, data analysis, integrations between various tools, and business administration. He has a proven track record in managing complex projects with efficiency and dedication.
                        <br /><br />
                        Throughout his career, Gustavo has developed a deep understanding of client needs and industry best practices. His experience includes the creation of a personal financial management app designed to help individuals improve their financial lives. This project exemplifies his ability to deliver tailored and effective solutions for each client.
                        <br /><br />
                        At HAYMAN-WOODWARD, Gustavo is committed to promoting global mobility and facilitating clients' transitions into new markets. His proactive and results-oriented approach ensures that each project is executed to the highest standards.
                        <br /><br />
                        Outside of work, Gustavo is passionate about solving people's everyday problems, athletics, and philanthropy. These interests complement his global perspective and cultural understanding, further enriching his role on our team.</p>
                </div>
                <img src='/images/me2.png' />
            </div>
        </div>
        <div className={styles.abtBG}></div>
    </div>
);


export const skills = (
    <div className={styles.skills}> 
        <h2>Skills</h2>
        <div className={`${styles.wrapper} ${styles.wrapperLeft}`}>
            <div className={`${styles.itens} ${styles.left}`}>
                <div className={styles.item}><IoLogoJavascript size={120}/><p>JavaScript</p></div>
                <div className={styles.item}><IoLogoCss3  size={120}/><p>CSS</p></div>
                <div className={styles.item}><IoLogoHtml5  size={120}/><p>HTML</p></div>
                <div className={styles.item}><IoLogoReact  size={120}/><p>React</p></div>
                <div className={styles.item}><SiPowerbi  size={120}/><p>PowerBI</p></div>                

            </div>
            <div className={`${styles.itens} ${styles.left}`}>
                <div className={styles.item}><IoLogoJavascript size={120}/><p>JavaScript</p></div>
                <div className={styles.item}><IoLogoCss3  size={120}/><p>CSS</p></div>
                <div className={styles.item}><IoLogoHtml5  size={120}/><p>HTML</p></div>
                <div className={styles.item}><IoLogoReact  size={120}/><p>React</p></div>
                <div className={styles.item}><SiPowerbi  size={120}/><p>PowerBI</p></div>

            </div>
        </div>
        {
            /*
            <div className={`${styles.wrapper} ${styles.wrapperRight}`}>
            <div className={`${styles.itens} ${styles.right}`}>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                

            </div>
            <div className={`${styles.itens} ${styles.right}`}>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>
                <div className={styles.item}>TESTE</div>

            </div>
        </div>
            */
        }
        
    </div>
);

export const projects = (
    /*var temp = (<Card idProj='2'/>
<Card idProj='1'/>
<Card idProj='3'/>);*/
    <div className={styles.proj}>
        <h2>Projects</h2>
        <p>Lorem ipsum</p>
    </div>
);

export const contacts = (
    <div className={styles.contact}>
        <h2>Contacts</h2>
        <p>Lorem ipsum</p>
    </div>
);


export const data = {
    "sections": [
        {
            "name": "About Me",
            "content": aboutMe
        },
        {
            "name": "Skills",
            "content": skills
        },
        {
            "name": "Projects",
            "content": projects
        },
        {
            "name": "Contacts",
            "content": contacts
        }
    ]
};