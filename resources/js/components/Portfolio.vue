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
              <router-link :to="{ name: 'portfolio' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger active">Portfolio</router-link></li>

              <li class="nav-item mx-0 mx-lg-1">
              <router-link :to="{ name: 'about' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">About</router-link></li>

              <li class="nav-item mx-0 mx-lg-1">
              <router-link :to="{ name: 'contact' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Contact</router-link></li>

            </ul>
          </div>
        </div>
      </nav>

	  <!-- Portfolio Section -->
	  <section class="page-section portfolio">
	    <div class="container">

	      <!-- Portfolio Section Heading -->
	      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

	      <!-- Icon Divider -->
	      <div class="divider-custom">
	        <div class="divider-custom-line"></div>
	        <div class="divider-custom-icon">
	          <i class="fas fa-star"></i>
	        </div>
	        <div class="divider-custom-line"></div>
	      </div>

	      <!-- Portfolio Grid Items -->
	      <div class="row">

	        <!-- Portfolio Item 1 -->
	        <div class="col-md-6 col-lg-4">
	          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
	            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
	              <div class="portfolio-item-caption-content text-center text-white">
	                <i class="fas fa-plus fa-3x"></i>
	              </div>
	            </div>
	            <img class="img-fluid" src="img/portfolio/spa-vue.png" alt="">
	          </div>
	        </div>

	        <!-- Portfolio Item 2 -->
	        <div class="col-md-6 col-lg-4">
	          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
	            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
	              <div class="portfolio-item-caption-content text-center text-white">
	                <i class="fas fa-plus fa-3x"></i>
	              </div>
	            </div>
	            <img class="img-fluid" src="img/portfolio/crud-operation.png" alt="">
	          </div>
	        </div>

	        <!-- Portfolio Item 3 -->
	        <div class="col-md-6 col-lg-4">
	          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
	            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
	              <div class="portfolio-item-caption-content text-center text-white">
	                <i class="fas fa-plus fa-3x"></i>
	              </div>
	            </div>
	            <img class="img-fluid" src="img/portfolio/spa-crud.png" alt="">
	          </div>
	        </div>

	      </div>
	      <!-- /.row -->

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

  <!-- Portfolio Modals -->

  <!-- Portfolio Modal 1 -->
  <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i class="fas fa-times"></i>
          </span>
        </button>
        <div class="modal-body text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <!-- Portfolio Modal - Title -->
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">SPA (Single Page Application)</h2>
                <!-- Icon Divider -->
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Modal - Image -->
                <img class="img-fluid rounded mb-5" src="img/portfolio/spa-vue.png" alt="">
                <!-- Portfolio Modal - Text -->
                <p class="mb-5">From Wikipedia, the free encyclopedia. A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.</p>
                <button class="btn btn-primary" href="#" data-dismiss="modal">
                  <i class="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Portfolio Modal 2 -->
  <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i class="fas fa-times"></i>
          </span>
        </button>
        <div class="modal-body text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <!-- Portfolio Modal - Title -->
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">CRUD (Create, Read, Update, Delete)</h2>
                <!-- Icon Divider -->
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Modal - Image -->
                <img class="img-fluid rounded mb-5" src="img/portfolio/crud-operation.png" alt="">
                <!-- Portfolio Modal - Text -->
                <p class="mb-5">In computer programming, create, read, update, and delete are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete. Wikipedia</p>
                <button class="btn btn-primary" href="#" data-dismiss="modal">
                  <i class="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Portfolio Modal 3 -->
  <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <i class="fas fa-times"></i>
          </span>
        </button>
        <div class="modal-body text-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <!-- Portfolio Modal - Title -->
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">SPA + CRUD</h2>
                <!-- Icon Divider -->
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Modal - Image -->
                <img class="img-fluid rounded mb-5" src="img/portfolio/spa-crud.png" alt="">
                <!-- Portfolio Modal - Text -->

                <p class="mb-5">From Wikipedia, the free encyclopedia. A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.</p>

                <p class="mb-5">In computer programming, create, read, update, and delete are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete. Wikipedia</p>

                <button class="btn btn-primary" href="#" data-dismiss="modal">
                  <i class="fas fa-times fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

