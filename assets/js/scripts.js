
  $(document).ready(function () {
    const $testimonials = $(".testimonials");
    const $dotsContainer = $(".dots-container");

    // Create dots based on the number of testimonials
    $testimonials.find("div.eq_tcarousel_item").each(function (index) {
      $dotsContainer.append(`<span class="dot" data-index="${index}"></span>`);
    });

    const $dots = $(".dot");
    let currentIndex = 0;

    // Function to update the current slide and active dot
    function updateSlide() {
      $testimonials.css("transform", `translateX(-${currentIndex * 33}%)`);
      $dots.removeClass("active");
      $dots.eq(currentIndex).addClass("active");
    }

    // Initialize the slider
    updateSlide();

    // Click event for navigation dots
    $dots.on("click", function () {
      currentIndex = $(this).data("index");
      updateSlide();
    });

    // Automatic slide change (optional)
    setInterval(function () {
      currentIndex = (currentIndex + 1) % $dots.length;
      updateSlide();
    }, 5000); // Change slide every 5 seconds (adjust as needed)
  });

