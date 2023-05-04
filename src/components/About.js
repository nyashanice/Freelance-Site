import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div>
      <div className="text-center about-title m-5">
        "Transforming Dreams into Digital Reality"
      </div>
      <div className="info m-5">
        <div className="about-title text-center">PURPOSE</div>
        <div className="body p-3">
          My purpose is to bring creativity, professionalism, and an authentic
          touch to every web development project I undertake. I am passionate
          about crafting visually stunning and highly functional websites that
          not only captivate users but also reflect the unique essence of my
          clients' brands. With a commitment to pushing boundaries and staying
          ahead of the latest industry trends, I deliver innovative solutions
          that leave a lasting impact. My dedication to professionalism ensures
          seamless communication, timely delivery, and a collaborative approach
          that builds trust and long-term partnerships. By staying true to my
          authentic values, I create online experiences that resonate with users
          and help my clients achieve their business objectives. I am more than
          just a web developer; I am your creative partner in bringing your
          vision to life.
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="info m-4">
          <div className="about-title text-center">VISION</div>
          <div className="body p-3">
            To redefine web development by delivering exceptional results,
            leaving clients with a positive experience. I aim to attract and
            engage users through unique and imaginative approaches, expanding my
            creativity to better serve clients and create memorable online
            experiences.
          </div>
        </div>
        <div className="info m-4">
          <div className="about-title text-center">MISSION</div>
          <div className="body p-3">
            My mission is to empower beauty and travel entrepreneurs with
            captivating web experiences. I combine creativity, attention to
            detail, and continuous learning to craft authentic and responsive
            websites that leave a lasting impression. By finding unique ways to
            attract and engage users, I aim to expand my creativity and deliver
            positive experiences that help my clients thrive in the digital
            world.
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center m-3 about-title">ABOUT ME</h1>
        <div className="body d-flex flex-row m-3">
          <div>
            <img className="bio-pic m-2" src="../images/bio.png" alt=""></img>
          </div>
          <div className="bio">
            <div className="p-2">
              Hey there! My name is Nya and I'm an Atlanta based web developer.
              My coding journey started late in 2022 and I graduated from
              Georgia Institute of Technology's full stack coding bootcamp in
              March 2023.
            </div>
            <div className="p-2">
              I've always been passionate about STEM, and I recently graduated
              with a B.S. in biology in December 2022. But you know what? Along
              the way, I discovered my love for coding too. It's incredible
              because it lets me unleash my creativity and keeps me on a
              continuous learning journey. I thrive on the challenge it brings.
            </div>
            <div className="p-2">
              What brings me immense joy is being able to help others shine and
              showcase their talents through my skills. It's like a burst of
              happiness every time I see someone's abilities come to life.
            </div>
            <div className="p-2">
              During bootcamp, I dived into various programming languages and
              libraries like the MERN stack (MongoDB, Express.js, ReactJS,
              Node.js), HTML5, CSS3, JavaScript ES6, MySQL, NoSQL, API
              integration, and object-oriented programming. It's been a
              fantastic experience, and I'm always eager to explore new
              technologies.
            </div>
            <div className="p-2">
              When I'm not coding, you can find me creating cool content on
              YouTube, Instagram, and TikTok. Cooking, reading, and my absolute
              favorite – traveling – also top my list of hobbies. There's
              something magical about exploring new places and immersing myself
              in different cultures.
            </div>
            <div className="p-2">
              So, that's a bit about me! I can't wait to connect, collaborate,
              and bring your ideas to life. Let's create something amazing
              together!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
