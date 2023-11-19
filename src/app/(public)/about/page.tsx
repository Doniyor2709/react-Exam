import { Metadata } from "next";
import Image from "next/image";

import about from "@/assets/about.png";

import "./style.scss";

export const metadata: Metadata = {
  title: "Vodiy perfume | About",
  description:
    "Vodiy perfume",
};

const AboutPage = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__main">
          <div className="about__desc">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sint odit exercitationem sed, earum quo. Iusto, rem voluptas distinctio dolorem sint rerum aspernatur pariatur nostrum impedit praesentium, voluptatum, assumenda iure dolorum corrupti autem numquam nihil! Repellat, nisi! Recusandae minus accusamus fuga laudantium perferendis! Nobis dolorum minus ipsa totam facilis ullam repellendus officiis id dolore aperiam ipsam et obcaecati debitis animi placeat illo, similique molestiae delectus assumenda earum eius soluta enim! Modi quidem beatae dicta sed sunt ratione voluptatum ipsam labore accusamus voluptatem id cupiditate distinctio, illo dolorum? Quo molestiae asperiores porro voluptatibus eligendi, nisi culpa facilis eius error. Delectus, veritatis.</p>
          </div>
          <div className="about__img">
            <Image src={about} alt="about" fill objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
