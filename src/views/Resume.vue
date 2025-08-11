<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Michael Wibisono</strong>, a fresh graduate with a Bachelor's degree from Duta Wacana Christian University, bringing experience in both Game Development and Machine Learning.
      <br />My background has equipped me with a unique blend of discipline, strategic thinking, and the ability to perform under pressure. I excel at both team collaboration and independent projects.
      <br />I'm actively seeking jobs where I can combine my technical expertise with creative solutions and innovative approaches.
      <br />If you have any opportunity feel free to <router-link to="/contact">contact me</router-link>.
      <br />

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Michael Wibisono - Game Programmer - Resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/me.png" alt="Photo of Michael" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Machine Learning Cohort</h3>
      <h4>Bangkit Academy</h4>
      <h5>Aug 2023 - Dec 2023</h5>

      <div>Developing mobile application for fruit calorie estimation, powered by machine learning.</div>

      <div class="tech-stack">Tensorflow, Python, Kaggle, Flask</div>

      <h3>Research Assistant</h3>
      <h4>Duta Wacana Christian University</h4>
      <h4>Feb 2024 - May 2024 </h4>

      <div>Internship Program working on Virtual Campus Multiplayer</div>

      <div class="tech-stack">Unity, FishNet Multiplayer, Avaturn</div>

      <h3>Student Exchange Program</h3>
      <h4>Chulalongkorn University, Bangkok, Thailand</h4>
      <h5>Oct 2024 - Nov 2024</h5>

      <div>Working on several minigame project for MANGO 8 (Metaverse of Academic Nexus for Global Opportunities)</div>

      <div class="tech-stack">Unity, Firebase</div>

      <h3>Research Assistant</h3>
      <h4>Duta Wacana Christian University</h4>
      <h5>Feb 2025 - Aug 2025</h5>

      <div>Working on a virtual reality game called Pasukan Kuning. Refining the Pasukan Kuning Game. Implementing asset management remotely</div>

      <div class="tech-stack">Unity, Unity Cloud, Unity Cloud Content Delivery, Pico XR</div>

      <h3>Research Assistant</h3>
      <h4>Duta Wacana Christian University</h4>
      <h5>June 2025 - July 2025</h5>

      <div>Developing a virtual reality game set in a beach environment. Players can choose and interact with two different types of avatars: Normal and Disabled.</div>

      <div class="tech-stack">Unity, Open XR, VRIF</div>

      <h2>Certification</h2>

      <div>
        <h3>Technical Skill</h3>
        <h4>Unity Junior Programmer</h4>
        <a href="https://www.credly.com/badges/68bfeeaf-ebe9-4f8b-b198-cd515e0c9fcf/linked_in_profile" target="_blank">Unity Junior Programmer Certification</a>
        <h4>Tensorflow Developer</h4>
        <a href="https://www.credential.net/e9085cc7-5a0f-4191-98e0-4c48e16391e3#acc.w4mCibcf" target="_blank">Tensorflow Developer Certification</a>
      </div>


      <h2>Education</h2>

      <h3>Duta Wacana Christian University</h3>
      <h4>Bachelor Degree Informatics</h4>
      <h5>Aug 2021 - Aug 2025</h5>
      <div>GPA 3.82</div>

      <h2>Languages</h2>

      <h3>Indonesian</h3>
      <div>Native Speaker</div>

      <h3>English</h3>
      <div>Proficient in English</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>