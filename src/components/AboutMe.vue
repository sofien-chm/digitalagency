<template>
<section class="about-section" id="about">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-5 text-center position-relative">
                <img src="../assets/3.png" alt="About Us" class="about-photo rounded-3 shadow" />
                <div class="about-circle decor-circle"></div>
                <!-- You can duplicate and position more decor circles if needed -->
            </div>
            <div class="col-md-7">
                <span class="badge rounded-pill bg-primary px-3 py-2 mb-3">{{ $t('about.badge') }}</span>
                <h2 class="fw-bold text-white mb-3">{{ $t('about.heading') }}<span class="accent-blue">{{ $t('about.uiux') }}</span> {{ $t('about.PROJECTS') }}</h2>
                <p class="text-light mb-4">
                    {{ $t('about.paragraph') }} </p>
                <div class="row mb-4">
                    <div class="col-lg-4 col-md-12">
                        <div class="about-feature bg-dark rounded-3 p-3 text-center text-white">
                            <div class="fs-4 fw-bold">100+</div>
                            <div class="fs-6">{{ $t('about.projectsDelivered') }}</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="about-feature bg-dark rounded-3 p-3 text-center text-white">
                            <div class="fs-4 fw-bold">7+</div>
                            <div class="fs-6">{{ $t('about.yearsExperience') }}</div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="about-feature bg-dark rounded-3 p-3 text-center text-white">
                            <div class="fs-4 fw-bold">49+</div>
                            <div class="fs-6">{{ $t('about.customIntegrations') }}</div>
                        </div>
                    </div>
                </div>

                <a href="#contact" class="btn btn-primary rounded-pill px-4 py-2">{{ $t('about.getInTouch') }}</a>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'WhatWeOffer',
    data() {
        return {
            services: [{
                    title: 'Web Development',
                    points: [
                        'Vue.js, Angular, .NET, WordPress, Drupal, PrestaShop',
                        'Custom Web Applications',
                        'E-commerce Solutions',
                    ],
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5C5AFF" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
                },
                {
                    title: 'Website Design',
                    points: [
                        'Modern UI/UX Design',
                        'Responsive & Mobile-Friendly',
                        'Custom Branding',
                    ],
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5C5AFF" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paint-brush"><path d="M2.5 19.5l5-5a4.5 4.5 0 016.36 0l3.78 3.78a3 3 0 010 4.24l-3.78 3.78a4.5 4.5 0 01-6.36 0l-5-5z"/></svg>`,
                },
                {
                    title: 'Maintenance & Support',
                    points: [
                        'Fast Issue Resolution',
                        'Updates & Security Improvements',
                        'Technical Consulting',
                    ],
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5C5AFF" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.about-section {
    // background: linear-gradient(90deg, #133364 60%, #071836 100%);
}

.about-photo {
    width: 100%;
    object-fit: cover;
    z-index: 1;
}

.about-circle {
    position: absolute;
    left: 25px;
    bottom: -40px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #36c3f9;
    opacity: 0.4;
}

.accent-blue {
    color: #36c3f9;
}

.about-feature {
    background: #193b63;
    border: none;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: #222;
}

.cards-container {
    display: flex;
    justify-content: space-between;
    // gap: 1rem;
    flex-wrap: wrap;
}

.card {
    // flex: 1 1 30%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
    padding: 2rem 1.5rem;
    text-align: left;
    transition: box-shadow 0.3s ease;
}

.card:hover {
    box-shadow: 0 6px 18px rgb(0 0 0 / 0.15);
}

.icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
    color: #5C5AFF;
}

.card-title {
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #222;
}

.card-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    color: #666;
}

.card-list-item {
    margin-bottom: 0.7rem;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
}

.read-more {
    font-weight: 600;
    color: #5C5AFF;
    text-decoration: none;
    font-size: 0.95rem;
}

.read-more:hover {
    text-decoration: underline;
}

.section-title {
    font-size: 2.5rem;
    color: #fff;
}
</style>
