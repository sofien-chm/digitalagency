<template>
  <div class="dashboard d-flex min-vh-100">
    <!-- Sidebar -->
    <aside class="sidebar d-flex flex-column p-4">
      <div class="sidebar-logo mb-4">AS</div>
      <div>
        <div class="sidebar-section mb-2">
          <span class="fw-semibold"><i class="bi bi-journal-text me-2"></i>Portfolio</span>
          <ul class="list-unstyled mt-2 ps-3">
            <li><a href="#" class="sidebar-link">Add portfolio</a></li>
            <li><a href="#" class="sidebar-link">Show portfolio</a></li>
          </ul>
        </div>
      </div>
    </aside>
    <div class="content-area flex-fill d-flex flex-column">
      <header class="dashboard-topbar d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
        <button class="btn btn-link"><i class="bi bi-list"></i></button>
        <div class="profile-menu-wrapper" style="position: relative;">
          <div class="profile d-flex align-items-center" @click="toggleProfileMenu">
            <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Anna Adame" class="rounded-circle me-2" width="36" height="36" style="cursor:pointer;" />
            <div>
              <div class="fw-bold" style="cursor:pointer;">Anna Adame</div>
              <div class="small text-muted" style="cursor:pointer;">Founder</div>
            </div>
          </div>
          <transition name="fade">
            <div v-if="showProfileMenu" class="profile-dropdown shadow rounded">
              <button @click="logout" class="btn btn-logout w-100">Log Out</button>
            </div>
          </transition>
        </div>
      </header>
      <main class="flex-fill bg-dashboard"></main>
      <footer class="dashboard-footer text-end text-muted p-2 small">
        2025 © Velzon. Design & Develop by Themesbrand
      </footer>
    </div>
  </div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const showProfileMenu = ref(false);
    const toggleProfileMenu = () => {
      showProfileMenu.value = !showProfileMenu.value;
    };
    const logout = () => {
      signOut(auth)
        .then(() => {
          router.push("/");
          console.log("User signed out successfully");
          // Optionally redirect or update UI here
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    };
    // click-outside logic
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.profile-menu-wrapper');
      if (menu && !menu.contains(event.target)) {
        showProfileMenu.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener('mousedown', handleClickOutside);
    });
    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', handleClickOutside);
    });
    return { showProfileMenu, toggleProfileMenu, logout  };
  },
};
</script>

<style scoped>
.dashboard { background: #f2f2f7; }
.menu{
  display: none !important;
}
.sidebar {
  background: #48568d;
  min-width: 250px;
  color: #fff;
  min-height: 100vh;
}
.sidebar-logo {
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2px;
}
.sidebar-link {
  color: #b0b8d0;
  text-decoration: none;
  display: block;
  padding: 4px 0;
}
.sidebar-link:hover { color: #fff; }
.bg-dashboard { background: #f7f7fb; height: 100%; }
.profile img { border: 2px solid #e7eaf3; object-fit: cover; }



/* ...existing styles... */
.profile-menu-wrapper {
  position: relative;
}
.profile-dropdown {
  position: absolute;
  top: 60px;
  right: 0;
  background: #fff;
  border: 1px solid #e6e6e6;
  min-width: 140px;
  z-index: 11;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  padding: 8px;
}
.btn-logout {
  background: #ef4444;
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 5px;
  margin-top: 5px;
  transition: background 0.2s;
}
.btn-logout:hover {
  background: #d32f2f;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
