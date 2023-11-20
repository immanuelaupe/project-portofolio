const Skills = () => {
    return (
  <div> {/* Hard Skills*/}
    <section id="skills">
    <div class="section-title pb-5">
                  <h2>Skills</h2>
                </div>
      <div class="container skill-s">
        <div class="row">
          <div class="col">
            <div className="resume-section-content"></div>
              <h4 className="mb-4">Hard Skills</h4>
              <p>Python</p>
                <div class="bar-skill">
                <div class="skills python">85%</div>
                </div>

                <p>HTML</p>
                <div class="bar-skill">
                <div class="skills html">90%</div>
                </div>

                <p>React JS</p>
                <div class="bar-skill">
                <div class="skills js">75%</div>
                </div>
                
                <p>CANVA</p>
                <div class="bar-skill">
                <div class="skills canva">90%</div>
                </div>
          </div>
          <div class="col">
          <div className="resume-section-content"></div>
            <h4 className="mb-4">Soft Skills</h4>
            <div class="row"></div>
            <p>Public Speaking</p>
              <div class="bar-softskill">
              <div class="skills ps">95%</div>
              </div>

              <p>Work Team</p>
              <div class="bar-softskill">
              <div class="skills team">90%</div>
              </div>

              <p>Leadership</p>
              <div class="bar-softskill">
              <div class="skills leader">85%</div>
              </div>
              
              <p>Negotiation</p>
              <div class="bar-softskill">
              <div class="skills nego">90%</div>
              </div>
          </div>
        </div>
            
            


            
      </div>
    </section>
    <hr className="mb-0 mt-5" /></div>
    
    )
  }
  
  export default Skills