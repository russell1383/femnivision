import { useState, useEffect } from "react";
import './toggletab.css'
import Aos from "aos";
import 'aos/dist/aos.css'
function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
    useEffect(()=>{
      Aos.init({duration:3000})
    },[])
    return (
      
      <div data-aos="fade-up" className="tabcontainer">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Weight Management
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Relationships
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Self Esteem
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Weight Management</h2>
            <hr />
            <ul>
              <li>Body Image</li>
              <li>Health	Issues</li>
              <li>Wellness</li>
              <li>Eating Disorders</li>
            </ul>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Relationships</h2>
            <hr />
           <ul>
            <li>Family</li>
            <li>Care</li>
            <li>Romance</li>
           </ul>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Self Esteem</h2>
            <hr />
            <ul>
            <li>Fears and Phobias</li>
            <li>  Panic Attacks
</li>
            <li>Motivation</li>
            <li>Stress
</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Tabs;