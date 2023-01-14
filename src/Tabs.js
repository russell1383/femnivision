import { useState, useEffect } from "react";
import './toggletab.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import {BiBody} from 'react-icons/bi'
import {RiMentalHealthLine} from 'react-icons/ri'
import {MdNoFood} from 'react-icons/md'
import {MdFamilyRestroom} from 'react-icons/md'
import {BiDonateHeart} from 'react-icons/bi'
import {GiLovers} from 'react-icons/gi'
import {FaRegFrownOpen} from 'react-icons/fa'
import {GiBackPain} from 'react-icons/gi'
import {BiTired} from 'react-icons/bi'

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
           
            <hr />
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <BiBody className="accoricon"/>
       Body Image
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      body - eating disturbance, body dissatisfaction, self-esteem, depression, history of being teased about physical appearance, frequency of appearance comparison, and importance of various individuals as appearance comparison targets.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <RiMentalHealthLine className="accoricon"/>
       Health Issues
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
Mental illness, also called mental health disorders, refers to a wide range of mental health conditions — disorders that affect your mood, thinking and behavior. Examples of mental illness include depression, anxiety disorders, schizophrenia, eating disorders and addictive behaviors these are the health issues
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <MdNoFood className="accoricon"/>
       Eating Disorder
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Although the term “eating” is in the name, eating disorders are about more than food. They’re complex mental health conditions that often require the intervention of medical and psychological experts to alter their course.

These disorders are described in the American Psychiatric Association’s Diagnostic and Statistical Manual of Mental Disorders, fifth edition 
      </div>
    </div>
  </div>
            </div>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
         
            <hr />
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     
        <MdFamilyRestroom className="accoricon"/>
      Family
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit dolorum in! Dolore aliquid sed ea mollitia inventore debitis itaque culpa ratione, neque perspiciatis optio sunt omnis tempora dolor fugit!
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     
      <BiDonateHeart className="accoricon"/>
       Care
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit dolorum in! Dolore aliquid sed ea mollitia inventore debitis itaque culpa ratione, neque perspiciatis optio sunt omnis tempora dolor fugit!
      </div>
    </div>
  </div>
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    
      <GiLovers className="accoricon"/>
       Romance
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit dolorum in! Dolore aliquid sed ea mollitia inventore debitis itaque culpa ratione, neque perspiciatis optio sunt omnis tempora dolor fugit!
      </div>
    </div>
  </div>
            </div>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
 
            <hr />
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <FaRegFrownOpen className="accoricon"/>
        Fears and Phobias
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      A fear and phobia is an anxiety disorder defined by a persistent and excessive fear of an object or situation. Phobias typically result in a rapid onset of fear and are usually present for more than six months.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <GiBackPain className='accoricon'/>
      Panic Attacks
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      A panic attack is a feeling of sudden and intense anxiety. Panic attacks can also have physical symptoms, including: shaking. feeling disorientated. nausea.
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <BiTired className="accoricon"/>
      Stress
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Stress can be defined as any type of change that causes physical, emotional or psychological strain. Stress is your body's response to anything that requires attention or action. Everyone experiences stress to some degree. The way you respond to stress, however, makes a big difference to your overall well-being.
      </div>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Tabs;