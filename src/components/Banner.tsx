"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full relative">
        <div className="w-full overflow-hidden">
          <Image
            src="/images/Banner.png"
            alt="Build with Waffle Banner"
            width={1920}
            height={600}
            className="w-[125%] h-auto object-cover object-left"
            style={{ transform: 'translateX(0%)' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
