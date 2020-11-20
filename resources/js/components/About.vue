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
                <router-link :to="{ name: 'about' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger active">About</router-link></li>

                <li class="nav-item mx-0 mx-lg-1">
                <router-link :to="{ name: 'contact' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Contact</router-link></li>

	            </ul>
	          </div>
	        </div>
	      </nav>

		  <!-- About Section -->
		  <section class="page-section about bg-primary text-white">
		    <div class="container">

		      <!-- About Section Heading -->
		      <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>

		      <!-- Icon Divider -->
		      <div class="divider-custom divider-light">
		        <div class="divider-custom-line"></div>
		        <div class="divider-custom-icon">
		          <i class="fas fa-star"></i>
		        </div>
		        <div class="divider-custom-line"></div>
		      </div>

		      <!-- About Section Content -->
		      <div class="row">
		        <div class="col-lg-4 ml-auto">
		          <p class="lead">I made this website to showcase my work samples. This website is a Single Page Application (SPA) using Laravel and Vue.js and it's a freelancer theme that I downloaded from StartBootstrap.</p>
		        </div>
		        <div class="col-lg-4 mr-auto">
		          <p class="lead">I provide service in making your static website, your theme or your template into a Single Page Application (SPA) using Laravel and Vue.js and also I can make  customise web applications.</p>
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