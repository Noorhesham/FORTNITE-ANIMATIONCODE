import React from "react";
import Title from "./Title";
import MaxWidthWrapper from "./MaxWidthWrapper";

const DrivingCard = ({ title, subtitle, description, image }) => {
  return (
    <div className="relative overflow-hidden group">
      {/* Image Container */}
      <div className="aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Text Content */}
      <div className="mt-4 space-y-2">
        <Title title={title} description={description} variant="small" classNameTitle="!text-left !mb-0" />
        <p className="text-[#ADFF00] font-semibold uppercase tracking-wide text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

const DrivingGrid = ({ title, description, items, variant = "default" }) => {
  return (
    <section className="bg-black py-20">
      <MaxWidthWrapper>
        {/* Main Title */}
        <div className="mb-16">
          <Title title={title} description={description} variant={variant} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <DrivingCard key={index} {...item} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DrivingGrid;
