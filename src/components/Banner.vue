<template>
<section class="banner-section container">
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
            <h1 class="fw-bold display-6 text-white mb-2">{{ $t('banner.heading1') }}</h1>
            <h2 class="fw-bold display-5" style="color:#2196f3; font-size:26px;">{{ $t('banner.heading2') }}</h2>
            <p class="text-light mt-4 fs-5" style="max-width: 500px;">
                {{ $t('banner.paragraph1') }}<br>
                {{ $t('banner.paragraph2') }}<br>
                {{ $t('banner.paragraph3') }}<br>
                {{ $t('banner.paragraph4') }}<br>
                {{ $t('banner.paragraph5') }}
            </p>
        </div>
        <div class="col-lg-6 col-md-12 banner-pic position-relative">
            <img src="../assets/logo-ks2.png" alt="Profile" class="rounded-circle img-fluid banner-image" />
        </div>
    </div>
</section>
</template>

<script>
// No additional logic needed for static banner
</script>

<style lang="scss">
.banner-section {
    min-height: 75vh;
    // background: linear-gradient(90deg,#07233B 1.67%,#041D34 39.95%,#04192D 58.24%,#040E18 80.28%,#050C16 101.48%);
}

.banner-pic {
    min-width: 320px;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-image {
    width: 320px;
    height: 320px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 100px 10px rgba(0, 0, 0, 0.5);
}
</style>
