import React from 'react'
import './aboutUs.css'
import Footer from './../../footer/footer'

const About = () => {
  return (
    <div className='abt_main'>
    <div className='main_about'>
        <div className="about-title">
            Shapers Community</div>   
    <div className="comm">
        <div className="vid">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/S_TCp_GcO34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
        <div className="pa">
        <h3 className="para_head">About Global Shapers Community</h3>
        <hr></hr>
        <p className="community_para">
        The Global Shapers Community, an initiative of the World Economic Forum, is a network of city-based hubs developed and led by young leaders aged 18 and 33 years old who want to develop their leadership potential towards serving society. To that end, Hubs undertake local projects to improve their communities. The Global Shapers Community is one of several multi-stakeholder communities at the World Economic Forum.
        </p>
<p className="community_para">
Through the Global Shapers Community, Shapers are provided with opportunities to connect with the worldwide network of Global Shapers, to network with other World Economic Forum communities, and to represent the voice of youth at World Economic Forum events. Today, there are 457 Hubs worldwide, with more than 10,827 Shapers in 148 countries doing work that is changing and shaping their communities in important, impactful ways.
        </p>
        </div>
    </div>
    <div className="sh_ktm">
    <div className="pa">
    <h3 className="para_head">About Global Shapers Kathmandu Hub</h3>
<hr></hr>
      <p className="community_para">Kathmandu Hub was formed in 2012 bringing together youth from diverse backgrounds united in their collective goal to shape a more equitable, inclusive, and greener future for our community. Past hub initiatives include raising over $500,000 to build one school and two health clinics in response to the devastating earthquake in 2015. Our approach has been adapted in response to new challenges facing the community as we moved from post-earthquake recovery into the COVID-19 pandemic era.

We currently have initiatives that work across broad topics of Mental Health, Education, Climate Change, Civic Engagement. The days ahead will see the Kathmandu Hub expand efforts to contribute across Global Shapers Community’s six impact areas:</p>
<ol>
  <li>Protect the planet,</li>
  <li>Reskill for the future,</li>
  <li>Strengthen civic engagement,</li>
  <li>Create inclusive communities,</li>
  <li>Improve health and well-being and Deliver basic needs.</li>

</ol>
      </div>
      <div className="ima">
      <img src="https://www.yogajournal.com/wp-content/uploads/2007/08/sunset-meditation-mudra.jpg?width=730" alt="" className="community" />
      </div>
      </div>
      <div className="ovm">
        <div className="cards sc5">
          <h2 className="o">Our Objective</h2>
          <hr />
          <p className="oo">Global Shapers Kathmandu Hub aims to shape a more equitable, inclusive and greener future for our community.

</p>
        </div>
        <div className="cards sc5">
          <h2 className='o'>Our Values</h2>
          <hr />
          <p className="oo">Global Shapers Kathmandu Hub (GSKH) is guided by seven core values in line with the Global Shapers Community:

</p>
<ol>
  <li>Passion: GSKH will use passion to channel our energy into positive action</li>
  <li>Integrity: GSKH will have integrity through the unity of our actions and values</li>
  <li>Service: GSKH will practice service by striving to understand the needs of our community and taking actions to improve it</li>
  <li>Commitment: GSKH members will be committed to consistently honoring their obligation and selflessly supporting the agreed agenda and goals of the GSKH</li>
  <li>Cooperation: GSKH members will demonstrate cooperation by proactively working with others to achieve a common goal.</li>
  <li>Equity and inclusion: GSKH fosters inclusion and ensures fair treatment and equitable opportunity for all.</li>
  <li>Sustainability: GSKH puts people and the planet first to help shape a positive and sustainable future.</li>
</ol>
        </div>
        <div className="cards sc5">
          <h3 className="o">Our Mission</h3>
          <hr />
          <p>Global Shapers Kathmandu Hub (GSKH) supports Global Shapers Community’s global movement of young people to influence positive change through dialogue and action. Our objectives are consistently delivered through three pillars – Interaction, Insight, and Impact:</p>
          <p>GSKH is vitalized by the many interactions generated inside each hub, between hubs and on a global level. These interactions always include relevant local or global stakeholders. Complementing face-to-face meetings, emphasis is also placed on virtual connections – to allow for collaboration and learning from across the the Global Shapers Community global network.</p>
          <p>GSKH creates value as part of the Global Shapers Community by providing Shapers with insights that engender a better understanding of the global, regional and industry agendas. Shapers are also encouraged toto generate and voice youth-driven insights relevant for their community context.</p>
          <p>GSKH delivers impact by catalyzing and enhancing, individually and collectively, innovative solutions to pressing local and global challenges. Shapers are engaged in projects related to specific challenges identified by the local hub and by the Global Shapers Team head-quartered in Geneva. Hub projects must benefit local stakeholders</p>
        </div>
      </div>

    </div>
    <Footer/>
    </div>
  )
}

export default About