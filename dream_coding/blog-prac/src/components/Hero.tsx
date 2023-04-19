import React from "react";
import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"I'm Jisooround."}</h2>
      <h3 className="text-xl font-semibold">프론트엔드 개발자</h3>
      <p>안녕하세요 반갑습니다.</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
