<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="contact-card p-5 rounded-4 mx-auto">
            <h2 class="text-center mb-2 fw-bold">{{ $t('contact.title') }}</h2>
            <p class="text-center text-light mb-4">{{ $t('contact.description') }}</p>
            <form @submit="sendEmail">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label small text-light">{{ $t('contact.firstNameLabel') }}</label>
                  <input type="text" name="name" class="form-control" :placeholder="$t('contact.firstNamePlaceholder')" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label small text-light">{{ $t('contact.emailLabel') }}</label>
                  <input type="email" name="email" class="form-control" :placeholder="$t('contact.emailPlaceholder')" required />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label small text-light">{{ $t('contact.subjectLabel') }}</label>
                <input type="text" name="title" class="form-control" :placeholder="$t('contact.subjectPlaceholder')" required />
              </div>
              <div class="mb-4">
                <label class="form-label small text-light">{{ $t('contact.messageLabel') }}</label>
                <textarea class="form-control" name="message" rows="4" :placeholder="$t('contact.messagePlaceholder')" required></textarea>
              </div>
              <button type="submit" class="btn btn-block btn-primary w-100 fw-bold py-2 rounded-pill gradient-blue">
                {{ $t('contact.sendButton') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_j2s0jio', 'template_fjvh4kr', e.target, '33uIxWhE3EuJmTXFo')
        .then((result) => {
            console.log('Email sent:', result.text);
        }, (error) => {
            console.error('Email error:', error.text);
        });
}
</script>

<style lang="scss" scoped>
.contact-section {
    // background: linear-gradient(90deg, #23283c 60%, #0a192f 100%);
    min-height: 70vh;
}

.contact-card {
    background: rgba(10, 25, 47, 0.93);
    border: 1px solid #23283c;
    box-shadow: 0 8px 40px 0 rgba(83, 206, 250, 0.08);
    color: #fff;
    margin-top: 2rem;
}

.form-control {
    background: rgba(88, 110, 148, 0.20);
    border: none;
    color: #fff;
    padding: 0.75rem 1rem;
}

.form-control::placeholder {
    color: #53cefa;
    opacity: 0.75;
}

.form-label {
    letter-spacing: 0.05em;
}

.gradient-blue {
    background: linear-gradient(90deg, #36c3f9 0%, #53cefa 100%);
    border: none;
}
</style>
