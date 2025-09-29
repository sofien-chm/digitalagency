<template>
<section class="projects-section" id="projects">
    <div class="container">
        <span class="badge rounded-pill bg-primary fs-6 px-3 py-2 mb-3">MY WORK</span>
        <h2 class="fw-bold display-5 text-white mb-4">{{ $t('project.title') }}</h2>
        <div class="row g-4">
            <!-- <div class="col-md-3" v-for="project in projet" :key="project.id">
                <div class="card h-100 project-card" @click="openProjectModal(project)" style="cursor:pointer;">
                    <img v-if="project.imageURL" :src="project.imageURL" alt="Project Image" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ project.title }}</h5>
                        <p class="card-text text-secondary">{{ project.tags }}</p>
                        <a v-if="project.liveUrl" class="btn btn-primary rounded-circle float-end rounded-circle_custom" :href="project.liveUrl" target="_blank" @click.stop>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div> -->
            <div class="col-md-3" v-for="(project, idx) in projects" :key="idx">
                <div class="card h-100 project-card" @click="openProjectModal(project)" style="cursor:pointer;">
                    <img :src="project.image" class="card-img-top" :alt="project.title" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ project.title }}</h5>
                        <p class="card-text text-secondary">{{ project.subtitle }}</p>
                        <button class="btn btn-primary rounded-circle float-end" @click.stop="openProjectModal(project)">
                            <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="modal-backdrop fade show" style="background: rgba(0,0,0,0.7); position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 1050;">
            <div class="modal-dialog modal-lg modal-dialog-centered px-modal" style="z-index: 1060; margin: auto;">
                <div class="modal-content">
                    <!-- <div class="modal-header">
                        <h5 class="modal-title">{{ selectedProject?.title }}</h5>
                    </div> -->
                    <div class="modal-body">
                        <button type="button" class="btn-close" aria-label="Close" @click="closeProjectModal"></button>

                        <a v-if="selectedProject?.liveUrl" :href="selectedProject.liveUrl" target="_blank" rel="noopener" class="btn btn-primary">Live Preview</a>
                        <div class="single-project-box">
                            <div class="row align-items-start">
                                <div class="col-lg-7">
                                    <img v-if="selectedProject?.imageURL || selectedProject?.image" :src="selectedProject.imageURL || selectedProject.image" class="img-fluid mb-3" alt="Project Image" />

                                </div>
                                <div class="col-lg-5 pt-4 pt-lg-0">
                                    <h4>
                                        <p class="fw-bold">{{ selectedProject?.tags || selectedProject?.subtitle }}</p>
                                    </h4>
                                    <div class="mb-3">
                                        <p v-if="selectedProject?.description">{{ selectedProject.description }}</p>
                                    </div>
                                    <div class="about-content">
                                        <ul>
                                            <li class="d-flex"><span v-if="selectedProject?.type" class="col-4 col-lg-3">Type:</span>
                                                <span>{{ selectedProject.type }}</span></li>
                                            <li class="d-flex"><span v-if="selectedProject?.Langages" class="col-4 col-lg-3">Langages:</span>
                                                <span>{{ selectedProject.Langages }}</span></li>
                                            <li class="d-flex"><span v-if="selectedProject?.Platform" class="col-4 col-lg-3">Platform:</span>
                                                <span>{{ selectedProject.Platform }}</span></li>
                                            <li class="d-flex"><span v-if="selectedProject?.Country" class="col-4 col-lg-3">Country:</span>
                                                <span>{{ selectedProject.Country   }}</span></li>
                                            <li class="d-flex"><span v-if="selectedProject?.URL" class="col-4 col-lg-3">Live URL:</span>
                                                <span>{{ selectedProject.URL   }}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
</template>

<script>
import {
    ref,
    onMounted
} from "vue";
import {
    getFirestore,
    collection,
    getDocs
} from "firebase/firestore";
import {
    getStorage
} from "firebase/storage";
import {
    getApp
} from "firebase/app";

export default {
    name: "projects",
    setup() {
        const db = getFirestore(getApp());
        const storage = getStorage(getApp());
        const projet = ref([]);

        const fetchProjects = async () => {
            const snap = await getDocs(collection(db, "projet"));
            projet.value = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        };

        const projects = [{
                image: new URL('../assets/pizzafina.png',
                    import.meta.url).href,
                title: 'Website Design',
                subtitle: 'Web Design, App Design',
                description: 'The website pizzafina.ca is an online platform for PizzaFina, a food service offering a range of menu items including pizzas, specials, chicken wings, sides, poutines, sandwiches, salads, fries, and beverages. Customers can place orders online for home delivery.',
                type: 'Website',
                Langages: 'PHP, HTML, CSS, JS',
                Platform: 'WordPress',
                Country: 'USA',
                URl: 'www.example.com',
            },
            {
                image: new URL('../assets/project2.jpg',
                    import.meta.url).href,
                title: 'Website Design',
                subtitle: 'Web Design, App Design',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                type: 'Website',
                Langages: 'PHP, HTML, CSS, JS',
                Platform: 'WordPress',
                Country: 'USA',
                URl: 'www.example.com',
            },
            {
                image: new URL('../assets/project3.jpg',
                    import.meta.url).href,
                title: 'Website Design',
                subtitle: 'Web Design, App Design',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                type: 'Website',
                Langages: 'PHP, HTML, CSS, JS',
                Platform: 'WordPress',
                Country: 'USA',
                URl: 'www.example.com',
            },
            {
                image: new URL('../assets/project4.jpg',
                    import.meta.url).href,
                title: 'Website Design',
                subtitle: 'Web Design, App Design',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        ];

        const selectedProject = ref(null);
        const showModal = ref(false);

        function openProjectModal(project) {
            selectedProject.value = project;
            showModal.value = true;
        }

        function closeProjectModal() {
            showModal.value = false;
            selectedProject.value = null;
        }

        onMounted(fetchProjects);

        return {
            projet,
            projects,
            selectedProject,
            showModal,
            openProjectModal,
            closeProjectModal
        };
    }
};
</script>

<style lang="scss">
.projects-section {
    min-height: 70vh;

    .modal-backdrop {
        opacity: 1 !important;

        .modal-dialog {
            background: white;
            max-width: 1200px;
            margin: 30px auto;
            padding: 30px;
            position: relative;

            .modal-content {
                position: relative;

                .btn-close {
                    position: absolute;
                    right: 0;
                    top: 0;
                }

                .about-content {
                    ul {
                        padding: 0;
                        margin: 0;
                        list-style: none;

                        li {
                            padding: 5px 0;
                        }
                    }
                }
            }
        }
    }
}

.project-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 14px 0 rgba(20, 48, 96, 0.12);
    background: #fff;
    cursor: pointer;

    .card-title {
        color: #0c1745;
    }

    .rounded-circle_custom {
        display: flex;
        align-items: anchor-center;
    }

    .btn {
        background: #2196f3;
        border: none;
        width: 40px;
        height: 40px;

        i {
            color: #fff;
            font-size: 1.2rem;
        }
    }
}

.modal-backdrop {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1050;
    display: flex;
    align-items: center;
    justify-content: center;

    .show {
        opacity: 1;
    }
}

.modal-dialog {
    z-index: 1060;
    margin: auto;
    max-width: 800px;
    width: 90vw;
}
</style>
