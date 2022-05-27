import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Background from "../../assets/images/newsletter-bg-2.jpg";
const Subscription = () => {
  return (
    // <div className='h-80' style={{
    //   backgroundImage: `url(${Background})`,
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundAttachment: "fixed"
    // }}>
    //   <h1>hello world
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, accusantium dicta temporibus, dolor id voluptas eum harum veritatis ducimus, aspernatur unde provident incidunt possimus facere aut dolores quibusdam vel?
    //     lorem1000
    //   </h1>
    // </div>
    <div
      class="hero"
      style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: "fixed"
        }}
    >
      <div class="lg:py-56 md:py-48 sm:py-44 py-24 bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <input type="text" placeholder="Email Address" class="input input-bordered w-full text-white rounded-full bg-[#444] max-w-xs" />
          <p class="sm:my-5 py-2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="px-4 py-1 sm:px-12 sm:py-3 text-sm text-white rounded-md border-0 bg-neutral">Subscribe Now <FontAwesomeIcon  icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
