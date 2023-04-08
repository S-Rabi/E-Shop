import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <div className="max-w-[1024px] mx-auto">
        <h2 className="pt-8 font-semi-bold text-center text-[24px]">
          Contact Us
        </h2>
        <p className="mb-4 p-4 ">
          Whether you’re curious about our products or our discounted product
          we’re ready to answer any and all questions.
        </p>
        <div className=" w-full flex">
          <form className="p-6 m-1 w-full shadow-xl">
            <h2 className="mt-2 mb-4 mx-auto fw-bold text-[25px] flex items-center">
              <span>
                <MdEmail className="mr-2" />
              </span>
              Write to us:
            </h2>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="name"
                className=" py-2.5 text-sm w-full  bg-transparent border-b-2  focus:outline-none"
                placeholder="Your Name "
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                id="email"
                className=" py-2.5 text-sm w-full  bg-transparent border-b-2  focus:outline-none"
                placeholder=" Your Email "
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="address"
                className=" py-2.5 text-sm w-full  bg-transparent border-b-2  focus:outline-none"
                placeholder=" Your Message"
              />
            </div>
            <button className="text-white bg-[#4cbead]  py-2 px-6  active:bg-[#f1bc31]">
              SUBMIT
            </button>
          </form>

          <div className=" m-2 w-full shadow-xl">
            <iframe
              style={{ width: "100%", height: "350px" }}
              title="map"
              src="https://maps.google.com/maps?width=520&amp;height=424&amp;hl=en&amp;q=ballindamm%20Hamburg+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>

        <div className=" p-4">
          <h2 className=" mt-4 mb-3 font-bold">Support</h2>
          <h4>+491521333433</h4>
          <h4>support@behnam.com</h4>
          <p>Call us for payment related issues</p>
          <h3 className=" mt-4 mb-1 font-medium">Money Back Guarantee</h3>
          <p>Within 14 Working days</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
