import React, { useState } from "react";
import { Link } from "react-scroll";

function Main() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
    scrollToBottom(10);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <div className="container flex flex-col items-center h-full mx-auto  relative px-7 pt-10 mb-12">
      <section className="flex gap-10  mb-7">
        <div className={`min-w-[250px] ${showMore ? "text-center" : ""}`}>
          <div className="bg-gray-50">
            <div className="title text-3xl font-medium text-orange-500 mb-3 ">
              Sneak peek
            </div>
            <div className="title title-black text-3xl font-medium mb-6">
              The First Steps into Our New
            </div>
          </div>
          <div className="line min-w-[250px] h-2 bg-gray-100 "></div>
        </div>
        <div
          className={`flex flex-row gap-10 transition-all duration-500 ${
            showMore ? "hidden" : ""
          }`}
        >
          <div>
            <div className="bg-gray-50 mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. dicta
              voluptas nobis voluptatum dolorum possimus numquam deserunt. Sint
              aliquam earum quod perspiciatis enim nihil sequi? Nisi, alias.
              Libero, dicta? Optio velit, accusamus eaque, ipsa ips Lorem.
              <span className="underline cursor-pointer">
                <a href="https://kgd-group.pl/" className="">
                  Modi distinctio
                </a>
              </span>
              ipsum dolor sit rspiciatis enim nihil sequi? .
            </div>

            <div className="bg-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              distinctio dicta voluptas nobis voluptatum dolorum possimus
              numquam deserunt. Sint aliquam <br />
              earum quod perspiciatis enim nihil sequi? Nisi, alias. Libero,
              dicta? Optio velit, accusamus eaque, ipsa ips Lorem ipsum dolor
              sit.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-gray-50 mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              distinctio dicta voluptas nobis voluptatum dolorum possimus
              numquam deserunt. Sint aliquam <br />
              earum quod perspiciatis enim nihil sequi? Nisi, alias. Libero,
              dicta? Optio velit, accusamus eaque, ipsa ips Lorem ipsum dolor
              sit.
            </div>
            <div className="bg-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <span className="underline cursor-pointer">
                <a href="https://kgd-group.pl/" className="transition-none">
                  Modi distinctio
                </a>
              </span>
              dicta voluptas nobis voluptatum dolorum possimus numquam deserunt.
              Sint aliquam earum quod perspiciatis enim nihil sequi? Nisi,
              alias. Libero, dicta? Optio velit, accusamus eaque, ipsa ips Lorem
              ipsum dolor sit rspiciatis enim nihil sequi?.
            </div>
          </div>
        </div>
      </section>

      <div className={`${showMore ? "show-more" : ""}`}>
        {showMore && (
          <div className="bg-gray-50 p-5 mb-5 text-lg text-justify ">
            We bring dreams to life, one brick at a time. With years of
            expertise in the construction industry, we pride ourselves on
            delivering high-quality, innovative, and sustainable solutions
            tailored to meet the unique needs of our clients. Whether you're
            envisioning a new residential home, a commercial space, or a
            renovation project, our dedicated team of professionals is committed
            to turning your ideas into reality. Our approach is rooted in a
            blend of craftsmanship, cutting-edge technology, and a deep
            understanding of the ever-evolving construction landscape. We
            prioritize excellence, safety, and client satisfaction in every
            project we undertake. What sets us apart is our commitment to
            transparency and clear communication. From the initial consultation
            to the final nail, we keep our clients informed and involved at
            every stage of the construction process. We believe in building not
            just structures but lasting relationships with our clients. Our
            comprehensive range of services includes architectural design,
            construction planning, project management, and quality assurance. We
            collaborate with a network of skilled architects, engineers, and
            craftsmen to ensure that every project is executed with precision
            and meets the highest industry standards. At , we understand that
            each project is unique. That's why we approach every endeavor with a
            fresh perspective, combining creativity with practicality to deliver
            solutions that stand the test of time. Whether it's a residential
            property, a commercial complex, or an industrial facility, we have
            the expertise to bring your vision to fruition. As a socially
            responsible company, we are also dedicated to sustainable building
            practices. We integrate eco-friendly materials and energy-efficient
            technologies into our projects to minimize environmental impact and
            create spaces that are both functional and environmentally
            conscious. Thank you for considering for your construction needs. We
            look forward to the opportunity to collaborate with you and build
            something extraordinary together. Your vision, our expertise – let's
            We bring dreams to life, one brick at a time. With years of
            expertise in the construction industry, we pride ourselves on
            delivering high-quality, innovative, and sustainable solutions
            tailored to meet the unique needs of our clients. Whether you're
            envisioning a new residential home, a commercial space, or a
            renovation project, our dedicated team of professionals is committed
            to turning your ideas into reality. Our approach is rooted in a
            blend of craftsmanship, cutting-edge technology, and a deep
            understanding of the ever-evolving construction landscape. We
            prioritize excellence, safety, and client satisfaction in every
            project we undertake. What sets us apart is our commitment to
            transparency and clear communication. From the initial consultation
            to the final nail, we keep our clients informed and involved at
            every stage of the construction process. We believe in building not
            just structures but lasting relationships with our clients. Our
            comprehensive range of services includes architectural design,
            construction planning, project management, and quality assurance. We
            collaborate with a network of skilled architects, engineers, and
            craftsmen to ensure that every project is executed with precision
            and meets the highest industry standards. At , we understand that
            each project is unique. That's why we approach every endeavor with a
            fresh perspective, combining creativity with practicality to deliver
            solutions that stand the test of time. Whether it's a residential
            property, a commercial complex, or an industrial facility, we have
            the expertise to bring your vision to fruition. As a socially
            responsible company, we are also dedicated to sustainable building
            practices. We integrate eco-friendly materials and energy-efficient
            technologies into our projects to minimize environmental impact and
            create spaces that are both functional and environmentally
            conscious. Thank you for considering for your construction needs. We
            look forward to the opportunity to collaborate with you and build
            something extraordinary together. Your vision, our expertise – let's
            build the future. We bring dreams to life, one brick at a time. With
            years of expertise in the construction industry, we pride ourselves
            on delivering high-quality, innovative, and sustainable solutions
            tailored to meet the unique needs of our clients. Whether you're
            envisioning a new residential home, a commercial space, or a
            renovation project, our dedicated team of professionals is committed
            to turning your ideas into reality. Our approach is rooted in a
            blend of craftsmanship, cutting-edge technology, and a deep
            understanding of the ever-evolving construction landscape. We
            prioritize excellence, safety, and client satisfaction in every
            project we undertake. What sets us apart is our commitment to
            transparency and clear communication. From the initial consultation
            to the final nail, we keep our clients informed and involved at
            every stage of the construction process. We believe in building not
            just structures but lasting relationships with our clients. Our
            comprehensive range of services includes architectural design,
            construction planning, project management, and quality assurance. We
            collaborate with a network of skilled architects, engineers, and
            craftsmen to ensure that every project is executed with precision
            and meets the highest industry standards. At , we understand that
            each project is unique. That's why we approach every endeavor with a
            fresh perspective, combining creativity with practicality to deliver
            solutions that stand the test of time. Whether it's a residential
            property, a commercial complex, or an industrial facility, we have
            the expertise to bring your vision to fruition. As a socially
            responsible company, we are also dedicated to sustainable building
            practices. We integrate eco-friendly materials and energy-efficient
            technologies into our projects to minimize environmental impact and
            create spaces that are both functional and environmentally
            conscious. Thank you for considering for your construction needs. We
            look forward to the opportunity to collaborate with you and build
            something extraordinary together. Your vision, our expertise – let's
            build the future. build the future.
          </div>
        )}
      </div>

      <Link
        to="bottom"
        spy={true}
        smooth={true}
        duration={100}
        offset={10}
        className="cursor-pointer"
      >
        <button
          className={`px-5 py-2 border-2 border-black font-medium  hover:bg-gray-200`}
          onClick={handleReadMore}
        >
          {showMore ? "Read less" : "Read more"}
        </button>
      </Link>
    </div>
  );
}

export default Main;
