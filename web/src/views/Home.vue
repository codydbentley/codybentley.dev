<template>
  <div id="home_page">
    <PageHeader title="Cody Bentley" subtitle="Software Engineer" />
    <section id="about">
      <h2>About</h2>
      <article id="readme.md">
        <h3>README.md</h3>
        <p>
          Hello and welcome to my site! My name is Cody Bentley and I am a software engineer. I've worked in a range of
          environments, with most of my time spent in the web space, but more recently I have been spending a lot of
          time working on Windows desktop applications. For the longest time I always believed that writing code was my
          passion, but lately I've come around to the idea that <em>learning</em> is my real passion, and programming is
          my favorite topic. I enjoy learning about and employing design patterns, tweaking code to get a bit more
          performance, and digging into open source libraries to see what makes them tick. I love writing code that does
          <em>something</em>, and <strong>does it well</strong>. I also happen to be a motorcycle and other motorsports
          enthusiast, but that's another topic for another time.
        </p>
      </article>
      <article id="techstack.dat">
        <h3>TechStack.dat</h3>
        <p>
          Throughout my career, I have had the pleasure of working with quite a few technologies. Listed below are some
          of my strongest skills:
        </p>
        <ul class="tech-icons">
          <li v-for="tech in techStack" :key="tech.name" class="tech-icon">
            <div class="logo-container">
              <img :src="tech.logo" :alt="tech.name" />
            </div>
            <span>{{ tech.name }}</span>
          </li>
        </ul>
      </article>
      <article id="interests.json">
        <h3>Interests.json</h3>
        <p>
          Aside from technologies that I have used extensively, there are also a number of other interests I have. These
          include languages and concepts, and cover things I have experience with and things I'd like to learn.
        </p>
        <pre class="code">{{ interestsJson }}</pre>
      </article>
    </section>
    <section id="experience">
      <h2>Experience</h2>
      <article id="worker.exe">
        <h3>Worker.exe</h3>
        <p>
          I have been incredibly fortunate to work for some great companies and clients, as well as learn from some
          amazing colleagues who shared their valuable knowledge with me. These experiences have shaped who I am
          professionally.
        </p>
        <section v-for="work in workExperience" :key="work.name">
          <h4 class="work-title">
            {{ work.name }}
            <a :href="work.url" target="_blank" class="material-icons link-icon">link</a>
          </h4>
          <article v-for="project in work.projects" :key="project.title" class="project-article">
            <h5 class="project-title">{{ project.title }}</h5>
            <div class="project-article-cols">
              <p class="project-description">{{ project.description }}</p>
              <div class="project-stack">
                <div class="project-tech">
                  <span class="project-tech-name"><strong>Technology</strong></span>
                  <span class="project-tech-type"><strong>Type</strong></span>
                </div>
                <div v-for="tech in project.stack" :key="tech.name" class="project-tech">
                  <span class="project-tech-name">{{ tech.name }}</span>
                  <span class="project-tech-type">{{ tech.type }}</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </article>
      <article id="projects.md">
        <h3>Projects.md</h3>
        <p>
          When I find time and inspiration, I enjoy making projects and prototypes. Whether it's something game related,
          or I just want to simply learn something new, I love to try my hand at creating something.
        </p>
        <ul class="projects-list">
          <li v-for="project in projects" :key="project.name">
            <h4>
              {{ project.name }}
              <a v-if="project.url" :href="project.url" target="_blank" class="material-icons link-icon">link</a>
            </h4>
            - {{ project.description }}
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import { Tech, Work, Interests, Projects } from '@/data'

export default defineComponent({
  name: 'Home',
  components: { PageHeader },
  setup() {
    return {
      techStack: Tech,
      interestsJson: JSON.stringify(Interests, null, 2),
      workExperience: Work,
      projects: Projects,
    }
  },
})
</script>

<style lang="scss" scoped>
@import 'src/assets/css/variables';
.tech-icons {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .tech-icon {
    margin: 5px;
    font-size: 0.8rem;
    height: 100px;
    width: 100px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 10px rgba($dark-primary-0, 0.3);
    .logo-container {
      width: 65px;
      height: 65px;
      img {
        width: 100%;
        max-height: 100%;
      }
    }
  }
}
pre.code {
  overflow-x: auto;
  margin: 20px 0;
}
.work-title {
  margin-top: 30px;
}
.link-icon {
  color: $color-primary-0;
  transform: translateY(6px);
}
.project-article {
  margin: 40px 0;
  padding: 10px;
  box-shadow: 1px 3px 10px rgba(black, 0.1);
  .project-title {
    margin: 5px 0;
  }
  .project-article-cols {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1024px) {
      flex-wrap: nowrap;
    }
    .project-description {
      font-size: 0.9rem;
      padding-right: 10px;
    }
    .project-stack {
      margin-top: 20px;
      width: 100%;
      font-size: 0.9rem;
      @media (min-width: 1024px) {
        margin-top: 0;
        min-width: 240px;
      }
      .project-tech {
        display: flex;
        border-bottom: 1px solid rgba(black, 0.1);
        .project-tech-name {
          font-family: $font-code;
          width: 50%;
        }
        .project-tech-type {
          font-size: 0.8rem;
          text-align: right;
          text-transform: uppercase;
          width: 50%;
        }
      }
    }
  }
}
.projects-list {
  margin: 20px 0;
  line-height: 30px;
  list-style: none;
  li {
    margin: 20px 0;
    &:before {
      color: $color-primary-0;
      font-weight: 600;
      content: '> ';
    }
    h4 {
      margin: 0;
      display: inline-block;
    }
  }
}
</style>
