<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello there!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Michael Wibisono</strong>, a fresh graduate from Duta Wacana Christian University with a Bachelor's degree in Informatics.<br/>
        As a passionate game developer and Unity programmer, I thrive on discussing, designing, and developing apps and games.
      </div>

      <div style="margin-top: 20px;">My experience includes developing <router-link to="/game-projects">games</router-link> through university research projects, my final academic project, and freelance projects. I also have an experience working on <router-link to="/other-projects">other projects</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game programmer. You can reach me at <a href="mailto:michael.wibisono93@gmail.com">michael.wibisono93@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/me.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>