<template>
     <section class="team-section" id="team">
    <div class="container">
        <span class="badge bg-primary px-3 py-2 mb-2">{{ $t('team.team1') }}</span>
        <h2 class="section-title mb-5">
            {{ $t('team.we') }} <span class="text-primary">{{ $t('team.NOUS') }}</span> 
        </h2>
        <div class="row g-4 justify-content-center">
        <div class=" col-lg-4 col-md-6" v-for="person in people" :key="person.name">
            <div class="team-card" @mouseenter="hover = person.name" @mouseleave="hover = ''">
                <img :src="person.photo" class="team-photo" alt="person.name" />
            <div class="team-info">
                <div class="name">{{ person.name }}</div>
                <div class="role">{{ person.role }}</div>
            </div>
            <div class="share-wrap" >
                <button class="share-btn">
                <i class="fa fa-share-alt"></i>
                </button>
                <transition name="fade">
                <div v-if="hover === person.name" class="socials">
                    <a :href="person.socials.instagram" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a :href="person.socials.facebook" target="_blank"><i class="bi bi-facebook"></i></a>
                    <a :href="person.socials.x" target="_blank"><i class="bi bi-twitter"></i></a>
                    <a :href="person.socials.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
                </div>
                </transition>
            </div>
            </div>
            
        </div>
        </div>
        
    </div>
    
  </section>

</template>

<script>
export default {
  name: "TeamSection",
  data() {
    return {
      hover: '',
      people: [
        {
          name: "Sofien Cheikh mohamed",
          role: "Frontend Developer",
          photo: new URL('../assets/profile-pic.png', import.meta.url).href,
          socials: {
            instagram: "https://instagram.com/yourprofile",
            facebook: "https://facebook.com/yourprofile",
            x: "https://x.com/yourprofile",
            linkedin: "https://linkedin.com/in/yourprofile"
          }
        },
        {
          name: "Khalil hmessi",
          role: "Full Stack Developer",
          photo: new URL('../assets/khalil-1.png', import.meta.url).href,
          socials: {
            instagram: "https://instagram.com/friendprofile",
            facebook: "https://facebook.com/friendprofile",
            x: "https://x.com/friendprofile",
            linkedin: "https://linkedin.com/in/friendprofile"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.team-section {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(7, 136, 255, 0.1);
}
.team-card {
  background: #fff;
  border-radius: 1.4rem;
  box-shadow: 0 2px 14px #7e8fa91a;
  padding: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.team-photo {
  border-radius: 1rem;
  width: 100%;
  max-height: 410px;
  object-fit: cover;
  margin-bottom: 1rem;
}
.name {
  font-weight: bold;
  color: #20254a;
  font-size: 1.05rem;
}
.role {
  color: #6c7e9e;
  font-size: .99rem;
  margin-bottom: .6rem;
}
.share-wrap {
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.share-btn {
  background: #f4f8ff;
  border-radius: 50%;
  border: none;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #356df3;
  font-size: 1.55rem;
  margin-bottom: 6px;
  cursor: pointer;
  transition: background .2s;
}
.share-btn:hover {
  background: #e4eaff;
}
.socials {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 2px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 1px 6px #d6d9e6;
  padding: 6px 0;
}
.socials a {
  color: #356df3;
  font-size: 1.15rem;
  background: #fff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .2s;
}
.socials a:hover {
  background: #f4f8ff;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .17s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

