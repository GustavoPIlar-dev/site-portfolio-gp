import {data, apresentation} from '../data/data';
import Header from './header';

export default function Sections(){
    return (
        <div className='sections'>
            <div className='section'>
                <Header/>
                {apresentation}
            </div>
            
            {data.sections.map(section => <Section s={section}/>)}
        </div>
    ); 
};

function Section(params){
    const s = params.s;
    const content = s.content;  

    return(
        <div className='section'>
            {content}
        </div>
    );
};