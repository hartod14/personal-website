import Image from "next/image";
import 'swiper/css';
import Slider from "@/components/slider";
import Slider2 from "@/components/slider2";
import Slider3 from "@/components/slider3";

export default function Home() {
  return (
    <section>
      <section id="section-1" className="sticky top-0 z-10">
        <nav className="bg-black px-6 py-8 flex items-center justify-between" >
          <a href="/en-id"><Image width={120} height={120} src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" alt="logo" /></a>
          <div className="flex gap-10 text-white text-base font-semibold">
            <a href="#">Home</a>
            <a href="#" className="flex items-end gap-2">Partner with us <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1800 1800"><path fill="currentColor" d="m600.006 989.352l178.709-178.709L1200 389.357l-178.732-178.709L600.006 631.91L178.721 210.648L0 389.369l421.262 421.262l178.721 178.721z" /></svg></a>
            <a href="#">GoCorp</a>
            <a href="#">Careers</a>
            <a href="#" className="flex items-end gap-2">Company <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1800 1800"><path fill="currentColor" d="m600.006 989.352l178.709-178.709L1200 389.357l-178.732-178.709L600.006 631.91L178.721 210.648L0 389.369l421.262 421.262l178.721 178.721z" /></svg></a>
            <a href="#">Products</a>
            <a href="#">Blog</a>
            <a href="#">Help</a>
            <a href="#" className="flex items-end gap-2">EN <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1800 1800"><path fill="currentColor" d="m600.006 989.352l178.709-178.709L1200 389.357l-178.732-178.709L600.006 631.91L178.721 210.648L0 389.369l421.262 421.262l178.721 178.721z" /></svg></a>
          </div>
        </nav>
      </section>
      <section id="section-2" className="w-full brightness-90 relative">
        <Image className="h-screen w-full object-cover z-0 lg:block lg:h-auto"
          width={1280} height={720} src="https://cdn-site.gojek.com/uploads/hero_b18c33ed07.jpg" alt="banner" />
        <div className="absolute h-full w-full top-0 left-0 py-16">
          <div className="flex px-16 w-full h-full flex-col md:justify-center m-auto w-75 text-white justify-end">
            <h1 className=" w-2/3 text-white sm:text-5xl font-bold">3 countries. 20+ products. 1 leading on-demand platform.</h1>
          </div>
        </div>
      </section>
      <section id="section-3">
        <div style={{ paddingBottom: "120px" }} className="flex items-center flex-col gap-5 m-auto w-full h-full pt-16 bg-black text-white">
          <h2 className="font-bold text-5xl">We’re Gojek, the drivers of change</h2>
          <button className="font-semibold bg-green-600 py-2 px-3 rounded-2xl">Explore Careers</button>
        </div>
      </section>
      <section id="section-4">
        <div className="bg-black">
          <div style={{ borderRadius: "90px 90px 0px 0px" }} className="bg-white w-50 relative">
            <div className="flex justify-center gap-9 py-6 px-12">
              <div className="flex flex-col items-center relative bottom-24">
                <Image className="mb-4" src="/gojek/svg1.png" width={160} height={160} alt="svg1" />
                <h2 className="font-bold text-2xl mb-2 text-center">Fortune’s favorite</h2>
                <p className="text-base text-center text-gray-800">Southeast Asia’s only company to make it to Fortune’s ‘Change the World’ list twice.</p>
              </div>
              <div className="flex flex-col items-center relative bottom-24">
                <Image className="mb-4" src="/gojek/svg2.png" width={160} height={160} alt="svg2" />
                <h2 className="font-bold text-2xl mb-2 text-center">$7.1 b contribution</h2>
                <p className="text-base text-center text-gray-800">Value added to the Indonesian economy in 2019</p>
              </div>
              <div className="flex flex-col items-center relative bottom-24">
                <Image className="mb-4" src="/gojek/svg3.png" width={160} height={160} alt="svg3" />
                <h2 className="font-bold text-2xl mb-2 text-center">Tonne times greener</h2>
                <p className="text-base text-center text-gray-800">Saved 11.3 tonnes of plastic in cutlery since October 2020.</p>
              </div>
              <div className="flex flex-col items-center relative bottom-24">
                <Image className="mb-4" src="/gojek/svg4.png" width={160} height={160} alt="svg4" />
                <h2 className="font-bold text-2xl mb-2 text-center">Digitising merchants</h2>
                <p className="text-base text-center text-gray-800">Resulted in 80% growth in number of GoFood merchants during pandemic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-5">
        <div className="flex flex-col items-center gap-5 mb-20">
          <h2 className="font-bold text-5xl text-center">We scale like a dream</h2>
          <div>
            <button className="font-semibold bg-green-600 py-2 px-3 rounded-2xl text-white">Scale with us</button>
          </div>
        </div>
      </section>
      <section id="section-6">
        <div className="flex justify-center  gap-12 px-32 py-10">
          <div style={{ backgroundColor: "rgb(124 204 108)", boxShadow: "0px 0px 32px 10px #b2e5b8" }} className="rounded-3xl">
            <div className="relative bottom-24">
              <Image width={300} height={300} src="/scale/scale1.png" alt="scale" />
            </div>
            <div className="px-8 pb-8">
              <h1 className="font-extrabold text-4xl mb-3">190 million+</h1>
              <h6 className="">app downloads since 2015</h6>
            </div>
          </div>
          <div style={{ backgroundColor: "rgb(212 139 200)", boxShadow: "0px 0px 32px 10px #d0b4d4" }} className="rounded-3xl">
            <div className="relative bottom-24">
              <Image width={300} height={300} src="/scale/scale2.png" alt="scale" />
            </div>
            <div className="px-8 pb-8">
              <h1 className="font-extrabold text-4xl mb-3">2 million+</h1>
              <h6 className="">driver partners</h6>
            </div>
          </div>
          <div style={{ backgroundColor: "rgb(1255 174 98)", boxShadow: "0px 0px 32px 10px #d0b4d4" }} className="rounded-3xl">
            <div className="relative bottom-24">
              <Image width={300} height={300} src="/scale/scale3.png" alt="scale" />
            </div>
            <div className="px-8 pb-8">
              <h1 className="font-extrabold text-4xl mb-3">900,000+</h1>
              <h6 className="">GoFood merchants</h6>
            </div>
          </div>
          <div style={{ backgroundColor: "rgb(74 201 227)", boxShadow: "0px 0px 32px 10px #b2e6f2" }} className="rounded-3xl">
            <div className="relative bottom-24">
              <Image width={300} height={300} src="/scale/scale4.png" alt="scale" />
            </div>
            <div className="px-8 pb-8">
              <h1 className="font-extrabold text-4xl mb-3">2.448x</h1>
              <h6 className="">jump in downloads from 2015 to 2020</h6>
            </div>
          </div>
        </div>
      </section>
      <section id="section-7">
        <Slider />
      </section>
      <section id="section-8">
        <div className="pt-16 pb-48">
          <h1 className="font-black text-center text-5xl mb-10">Join the ride</h1>
          <div className="px-32 flex gap-12 items-center justify-center">
            <div>
              <Image className="mb-3" width={30} height={30} src="/join/join1.svg" alt="join1" />
              <h3 className="text-xl mb-3 font-bold">Employees</h3>
              <p className="text-sm mb-6">Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.</p>
              <button className="font-semibold bg-green-600 py-2 px-3 rounded-2xl text-white">Join as employee</button>
            </div>
            <div>
              <Image className="mb-3" width={30} height={30} src="/join/join2.svg" alt="join1" />
              <h3 className="text-xl mb-3 font-bold">Driver partners</h3>
              <p className="text-sm mb-6">We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.</p>
              <button className="font-semibold bg-green-600 py-2 px-3 rounded-2xl text-white">Join as drive partner</button>
            </div>
            <div>
              <Image className="mb-3" width={30} height={30} src="/join/join3.svg" alt="join1" />
              <h3 className="text-xl mb-3 font-bold">Merchants</h3>
              <p className="text-sm mb-6">We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.</p>
              <button className="font-semibold bg-green-600 py-2 px-3 rounded-2xl text-white">Join as merchant</button>
            </div>
          </div>
        </div>
      </section>
      <section id="section-9">
        <div className="px-16 pb-24">
          <h1 className="font-black text-center text-5xl mb-10">Perks of being in good company
          </h1>
          <Slider2 />
        </div>
      </section>
      <section id="section-10">
        <div className="bg-black flex flex-col items-center text-white py-16">
          <h1 className="font-black text-center text-5xl mb-3 ">We build products that nations run on
          </h1>
          <div>
            <button className="font-semibold bg-green-600 py-2 px-3 rounded-2xl text-white">View all products</button>
          </div>
        </div>
      </section>
      <section id="section-11">
        <div className="p-16 bg-black">
          <Slider3 />
        </div>
      </section>
      <section id="section-12">
        <div className="bg-black text-white py-6 px-32 flex items-center gap-24">
          <Image src="https://cdn-site.gojek.com/uploads/home_spot_image_goclub_0555c2c8fe.svg" width={500} height={500} alt="loyality" />
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-4xl">Gojek Loyalty Program</h1>
            <p>Make more transactions, get more rewards!</p>
            <div>
              <button className="font-semibold bg-green-600 py-2 px-3 rounded-2xl text-white">View More</button>
            </div>
          </div>
        </div>
      </section>
      <section id="section-13">
        <div className="bg-gray-800 w-full relative">
          <Image src="https://cdn-site.gojek.com/uploads/download_desktop_ccdc61425a.png" width={2000} height={1200} alt="goodToGo" />
          <div className="absolute h-full w-full top-0 left-0 py-16">
            <div className="flex px-16 w-full h-full flex-col md:justify-center m-auto w-75 gap-6 text-white justify-end">
              <h1 className=" w-1/2 text-white sm:text-5xl font-bold"> Good to Go? Download the Gojek app today!</h1>
              <div className="flex gap-5">
                <button className="font-semibold text-black py-2 px-5 rounded-2xl bg-gray-100">App Store</button>
                <button className="font-semibold text-black py-2 px-5 rounded-2xl bg-gray-100">Play Store</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-14">
        <div className="px-40 py-20 bg-black text-white">
          <div className="mb-10">
            <Image src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" width={100} height={100} alt="gogogo" />
          </div>
          <div className="flex gap-40">
            <div>
              <h5 className="font-bold mb-3">Company</h5>
              <div className="flex flex-col gap-3">
                <h6>About</h6>
                <h6>Products</h6>
                <h6>Blog</h6>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-3">Join with us</h5>
              <div className="flex flex-col gap-3">
                <h6>Driver Partners</h6>
                <h6>Merchant Partners</h6>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-3">Careers</h5>
              <div className="flex flex-col gap-3">
                <h6>Student</h6>
                <h6>Professional</h6>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-3">Get in touch</h5>
              <div className="flex flex-col gap-3">
                <h6>Help Center</h6>
                <h6>Our Location</h6>
              </div>
            </div>
            <div>
              <div>
                <h5 className="font-bold mb-3">Connect with Us</h5>
                <div className="flex gap-3">
                  <Image src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" width={100} height={100} alt="goodToGo" />
                </div>
              </div>
              <div className="mt-10">
                <h5 className="font-bold mb-3">Download the app</h5>
                <div className="flex gap-3">
                  <Image src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" width={100} height={100} alt="goodToGo" />
                </div>
              </div>
            </div>
          </div>
          <hr className="text-gray-800 my-12" />
          <div className="flex gap-10">
            <h5 className="underline">Privacy Notice</h5>
            <h5 className="underline">Terms & Conditions</h5>
            <h5 className="underline">Data Attribution</h5>
            <h5 className="underline">Cookie Settings</h5>
          </div>
          <div className="mt-5">
            © 2023 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia.
          </div>
        </div>
      </section>
    </section>
  );
}
