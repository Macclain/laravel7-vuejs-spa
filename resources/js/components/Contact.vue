<template>
	<div>
	  <!-- Navigation -->
      <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
         <router-link :to="{ name: 'home' }" class="navbar-brand js-scroll-trigger">Single Page Application</router-link>
          <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item mx-0 mx-lg-1">
              <router-link :to="{ name: 'portfolio' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Portfolio</router-link></li>

              <li class="nav-item mx-0 mx-lg-1">
              <router-link :to="{ name: 'about' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">About</router-link></li>

              <li class="nav-item mx-0 mx-lg-1">
              <router-link :to="{ name: 'contact' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger active">Contact</router-link></li>

            </ul>
          </div>
        </div>
      </nav>

	  <!-- Contact Section -->
	  <section class="page-section contact">
	    <div class="container">

	      <!-- Contact Section Heading -->
	      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

	      <!-- Icon Divider -->
	      <div class="divider-custom">
	        <div class="divider-custom-line"></div>
	        <div class="divider-custom-icon">
	          <i class="fas fa-star"></i>
	        </div>
	        <div class="divider-custom-line"></div>
	      </div>

	      <!-- Contact Section Form -->
	      <div class="row">
	        <div class="col-lg-8 mx-auto">
	          <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
	          <form name="sentMessage" id="contactForm" novalidate="novalidate">
	            <div class="control-group">
	              <div class="form-group floating-label-form-group controls mb-0 pb-2">
	                <label>Name</label>
	                <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name.">
	                <p class="help-block text-danger"></p>
	              </div>
	            </div>
	            <div class="control-group">
	              <div class="form-group floating-label-form-group controls mb-0 pb-2">
	                <label>Email Address</label>
	                <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address.">
	                <p class="help-block text-danger"></p>
	              </div>
	            </div>
	            <div class="control-group">
	              <div class="form-group floating-label-form-group controls mb-0 pb-2">
	                <label>Phone Number</label>
	                <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number.">
	                <p class="help-block text-danger"></p>
	              </div>
	            </div>
	            <div class="control-group">
	              <div class="form-group floating-label-form-group controls mb-0 pb-2">
	                <label>Message</label>
	                <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
	                <p class="help-block text-danger"></p>
	              </div>
	            </div>
	            <br>
	            <div id="success"></div>
	            <div class="form-group">
	              <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
	            </div>
	          </form>
	        </div>
	      </div>

	    </div>
	  </section>

	  <!-- Footer -->
      <footer class="footer text-center">
        <div class="container">
          <div class="row">

            <!-- Footer Location -->
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Location</h4>
              <p class="lead mb-0">Municipality of Liloan
                <br>Cebu, Philippines 6002</p>
            </div>

            <!-- Footer Social Icons -->
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              <a class="btn btn-outline-light btn-social mx-1" href="#">
                <i class="fab fa-fw fa-facebook-f"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#">
                <i class="fab fa-fw fa-linkedin-in"></i>
              </a>
            </div>

            <!-- Footer About Text -->
            <div class="col-lg-4">
              <h4 class="text-uppercase mb-4">About Freelancer Site</h4>
              <p class="lead mb-0">Provide solutions for a Single Page Application using Laravel and Vue.js</p>
            </div>

          </div>
        </div>
      </footer>

  <!-- Copyright Section -->
  <section class="copyright py-4 text-center text-white">
    <div class="container">
      <small>Copyright &copy; Freelancer Site 2020</small>
    </div>
  </section>

  <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
  <div class="scroll-to-top d-lg-none position-fixed ">
    <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
      <i class="fa fa-chevron-up"></i>
    </a>
  </div>
  
  
	</div>
</template>