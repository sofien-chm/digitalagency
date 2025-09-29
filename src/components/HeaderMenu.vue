<template>
<nav v-if="!isdashbordPage" :class="['menu', { 'scrolled': isScrolled }]">
    <div class="container desk-menu d-none d-md-block">
        <div class="logo">KS</div>
        <ul class="list">
            <router-link class="custom-link" to="/">{{ $t('menu.home') }}</router-link>
            <li>
                <router-link class="custom-link" :to="{ path: '/#about', hash: '#about' }">{{ $t('menu.aboutMe') }}</router-link>
            </li>
            <li>
                <router-link class="custom-link" :to="{ path: '/#services', hash: '#services' }">{{ $t('menu.services') }}</router-link>
            </li>
            <li>
                <router-link class="custom-link" :to="{ path: '/#projects', hash: '#projects' }">{{ $t('menu.projects') }}</router-link>
            </li>
            <li>
                <router-link class="custom-link" :to="{ path: '/', hash: '#contact' }">{{ $t('menu.contact') }}</router-link>
            </li>
        </ul>
        <a href="#letstalk" class="lets-talk-btn">{{ $t('menu.letsTalk') }}</a>

        <!-- LANGUAGE DROPDOWN, FINAL VERSION -->
        <div class="dropdown dropdown-langue ms-3">
            <button class="btn btn-light dropdown-toggle" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <span v-if="$i18n.locale === 'en'"><img src="./../assets/united-kingdom.png" alt="" srcset=""></span>
                <span v-else-if="$i18n.locale === 'fr'"><img src="./../assets/france.png" alt="" srcset=""></span>
                <span v-else-if="$i18n.locale === 'it'"><img src="./../assets/italy.png" alt="" srcset=""></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="langDropdown">
                <li><button class="dropdown-item" @click="changeLanguage('en')"> EN </button></li>
                <li><button class="dropdown-item" @click="changeLanguage('fr')"> FR </button></li>
                <li><button class="dropdown-item" @click="changeLanguage('it')"> IT </button></li>
            </ul>
        </div>
    </div>
    <div class="burger-menu">
        <!-- Hidden Checkbox to Control Menu -->
        <input type="checkbox" id="burger-toggle">
        <!-- Burger Icon -->
        <label for="burger-toggle" class="burger-container">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </label>
        <!-- Navigation Menu -->
        <nav class="nav-menu">
            <ul class="">
                <li>
                    <router-link class="custom-link" to="/">{{ $t('menu.home') }}</router-link>
                </li>
                <li>
                    <router-link class="custom-link" :to="{ path: '/#about', hash: '#about' }">{{ $t('menu.aboutMe') }}</router-link>
                </li>
                <li>
                    <router-link class="custom-link" :to="{ path: '/#services', hash: '#services' }">{{ $t('menu.services') }}</router-link>
                </li>
                <li>
                    <router-link class="custom-link" :to="{ path: '/#projects', hash: '#projects' }">{{ $t('menu.projects') }}</router-link>
                </li>
                <li>
                    <router-link class="custom-link" :to="{ path: '/', hash: '#contact' }">{{ $t('menu.contact') }}</router-link>
                </li>
            </ul>
            <ul class="" aria-labelledby="langDropdown">
                <li><button class="dropdown-item" @click="changeLanguage('en')">EN </button></li>
                <li><button class="dropdown-item" @click="changeLanguage('fr')">🇫🇷 </button></li>
                <li><button class="dropdown-item" @click="changeLanguage('it')">🇮🇹 </button></li>
            </ul>
        </nav>
    </div>
</nav>
</template>

<script>
import {
    ref,
    onMounted,
    onBeforeUnmount
} from 'vue';
import {
    useRoute
} from 'vue-router';
import {
    computed
} from 'vue';

export default {
    name: 'HeaderComponent',
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang
        }
    },
    setup() {
        const route = useRoute();
        const isdashbordPage = computed(() => route.path.startsWith('/dashbord'));
        const isScrolled = ref(false);
        const activeSection = ref('home');
        const updateActiveSection = () => {
            const hash = window.location.hash;
            if (hash === '#about') activeSection.value = 'about';
            else if (hash === '#services') activeSection.value = 'services';
            else if (hash === '#projects') activeSection.value = 'projects';
            else if (hash === '#contact') activeSection.value = 'contact';
            else activeSection.value = 'home';
        };
        const onScroll = () => {
            isScrolled.value = window.scrollY > 50; // change 50 to your scroll threshold
        };

        onMounted(() => {
            window.addEventListener('scroll', onScroll);
            window.addEventListener('hashchange', updateActiveSection);
            updateActiveSection(); // Check initial hash
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('hashchange', updateActiveSection);
        });

        return {
            isScrolled,
            isdashbordPage,
            activeSection,
        };
    },
};
</script>

<style lang="scss" scoped>
.menu {
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    color: white;
    transition: background-color 0.3s, box-shadow 0.3s;
    z-index: 1000;

    ul.list {
        display: flex;
        list-style: none;
        gap: 2rem;
        margin: 0;
        padding: 0;
    }
    @media screen and (min-width:768px){
            display: flex !important;

    }
    .desk-menu{
        @media screen and (min-width:768px){
            display: flex !important;

    }
    }
}

.menu>.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1000;
}

.logo {
    font-weight: bold;
    font-size: 2rem;
}

li a,
.lets-talk-btn {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

.lets-talk-btn {
    background-color: #2196f3;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    white-space: nowrap;
}

.custom-link {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

/* Add this at the end of your style block */
.dropdown-menu {
    flex-direction: column !important;
    min-width: 10rem;
    /* default Bootstrap, adjust if needed */
    padding: 0.5rem 0;
}

.dropdown-item {
    width: 100%;
}

.dropdown-langue {
    position: absolute;
    right: 15px;
    max-width: 30px;
    margin-left: 0 !important;
    img{
    max-width: 30px;
    }
    .dropdown-toggle{
        background: transparent;
        border: none;
        padding: 0;
    }
}

.burger-menu {
    @media (min-width: 768px) {
        display: none;
    }
    @media (min-width: 768px) {
        .nav-menu {
            width: 750px;
        }
    }

    /*Medium Screens */
    @media (min-width: 922px) {
        .nav-menu {
            width: 970px;
        }
    }

    /*Large Screens */
    @media (min-width: 1200px) {
        .nav-menu {
            width: 1170px;
        }
    }

    /* Burger Icon Container */
    .burger-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        cursor: pointer;
        width: 40px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
        border-radius: 5px;
        background: hwb(0 100% 0% / 0.1);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px #0000001a;
    }

    /* Burger Icon Lines */
    .burger-line {
        width: 100%;
        height: 3px;
        background-color: var(--primary-color);
        border-radius: 2px;
        transform-origin: center;
        transition: all 0.4s ease-in-out;
    }

    /* Checkbox Hack */
    #burger-toggle {
        display: none;
    }

    /* Navigation Styles */
    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        max-width: 100%;
        height: 100%;
        background: black;
        transition: right 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
        box-shadow: -4px 0 15px #00000033;
        overflow-y: auto;
        padding-top: 100px;
    }

    .nav-menu::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        background: #ffffff0d;
        backdrop-filter: blur(10px);
    }

    .nav-menu ul {
        list-style-type: none;
    }

    .nav-menu ul li {
        margin: 0 15px;
        border-bottom: 1px solid #ffffff1a;
    }

    .nav-menu ul li a {
        color: white;
        text-decoration: none;
        display: block;
        padding: 15px;
        font-weight: 500;
        position: relative;
        overflow: hidden;
    }

    .nav-menu ul li a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background-color: var(--secondary-color);
        transition: left 0.3s ease;
    }

    .nav-menu ul li a:hover::after {
        left: 0;
    }

    /* Burger Icon Animation on Checkbox Checked */
    #burger-toggle:checked~.burger-container .burger-line:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    #burger-toggle:checked~.burger-container .burger-line:nth-child(2) {
        opacity: 0;
    }

    #burger-toggle:checked~.burger-container .burger-line:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    /* Navigation Slide In */
    #burger-toggle:checked~.nav-menu {
        right: 0;
    }
}


</style>
