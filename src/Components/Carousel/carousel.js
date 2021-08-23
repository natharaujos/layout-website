import React from "react";
import "../../loader";
import img from "../../images/gondola.png";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
  return (
    <div style={{height: '550px', background: 'gray'}}>
      <div className="tittle">
        <h1 class="text-center pt-3"><strong>Nossos Produtos</strong></h1>
      </div>
      <div style={{width: '800px'}} class="container">
          <OwlCarousel className="owl-theme mt-5" loop margin={20} nav marginTop={100}>
            <div class="item">
              <div  style={{background:'white'}}>
                  <img class="ms-0" src={img} alt="">
                    </img>
              </div>
              <p class="text-center text-dark mb-0">Gondola XYZ</p>
              <p class="text-center text-dark"><strong>199,90</strong></p>
            </div>
            <div class="item">
              <div  style={{background:'white'}}>
                  <img class="ms-0" src={img} alt="">
                    </img>
              </div>
              <p class="text-center text-dark mb-0">Gondola XYZ</p>
              <p class="text-center text-dark"><strong>199,90</strong></p>
            </div>
            <div class="item">
              <div  style={{background:'white'}}>
                  <img class="ms-0" class="ms-0" src={img} alt="">
                    </img>
              </div>
              <p class="text-center text-dark mb-0">Gondola XYZ</p>
              <p class="text-center text-dark"><strong>199,90</strong></p>
            </div>
            <div class="item">
              <div  style={{background:'white'}}>
                  <img class="ms-0" src={img} alt="">
                    </img>
              </div>
              <p class="text-center text-dark mb-0">Gondola XYZ</p>
              <p class="text-center text-dark"><strong>199,90</strong></p>
            </div>
          </OwlCarousel>
      </div>
    </div>
  );
};

export default Carousel;
