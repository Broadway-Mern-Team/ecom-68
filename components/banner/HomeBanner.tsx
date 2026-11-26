import Image from "next/image";
import CategoryBanner from "@/components/category/CategoryBanner"

export default function HomeBannerSection() {
  return (
    <section className="w-7xl mx-auto bg-gray-50 flex">
      <CategoryBanner />

      <div className="w-3/4">
        <Image
          src={
            "https://img.lazcdn.com/us/domino/3c834d21-ee50-4bfb-80b4-47a1656a155d_NP-1976-688.jpg"
          }
          className="w-full"
          alt="banner 1"
          width={1000}
          height={400}
        />
      </div>
    </section>
  );
}