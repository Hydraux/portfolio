import { TOPICS } from "../data";
import './Topic.css'
export default function Topic({selectedTopic}){
    return(
        <div className="topic">
            <p>
                {/* {selectedTopic} */}
            {TOPICS[selectedTopic].body}
            </p>
        </div>
    );
  }