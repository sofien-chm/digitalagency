<template>
  <section class="contact-section py-5" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="contact-card p-5 rounded-4 mx-auto">
            <h2 class="text-center mb-2 fw-bold">Let’s Discuss Your Project</h2>
            <p class="text-center text-light mb-4">
              Always available for freelancing if the right project comes along.<br>
              Feel free to contact me.
            </p>
            <form>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label small text-light">FIRST NAME</label>
                  <input type="text" class="form-control" placeholder="Name *" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label small text-light">YOUR EMAIL</label>
                  <input type="email" class="form-control" placeholder="Email *" required>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label small text-light">SUBJECT</label>
                <input type="text" class="form-control" placeholder="Subject *" required>
              </div>
              <div class="mb-4">
                <label class="form-label small text-light">YOUR MESSAGE</label>
                <textarea class="form-control" rows="4" placeholder="Your message *" required></textarea>
              </div>
              <button type="submit" class="btn btn-block btn-primary w-100 fw-bold py-2 rounded-pill gradient-blue">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Add your form logic here (e.g., emit event or use v-model)
</script>

<style scoped lang="scss">
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
