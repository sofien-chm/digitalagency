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
        <div class="profile d-flex align-items-center">
              <button @click="logout">Log Out</button>

          <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Anna Adame" class="rounded-circle me-2" width="36" height="36" />
          <div>
            <div class="fw-bold">Anna Adame</div>
            <div class="small text-muted">Founder</div>
          </div>
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

export default {
  setup() {
    const auth = getAuth();
    const router = useRouter();

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

    return { logout };
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

</style>
