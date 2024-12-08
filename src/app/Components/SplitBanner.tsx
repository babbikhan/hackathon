'use client'; // This marks the component as a client-side component

const SplitBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex gap-4 py-8">
      {/* Left Banner */}
      <div className="w-[672px] h-[478px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/banner1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#007481] p-12 flex flex-col justify-between">
          {/* Title and Description */}
          <div>
            <h2 className="text-3xl font-bold text-white mx-12 mb-4">About Us - Comforty</h2>
            <p className="text-white text-1x1 mx-12 leading-relaxed">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. 
            </p>
          </div>

          {/* Button */}
          <button className="mt-4 bg-[#248993] text-white py-2 mx-12 px-6 self-start">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Banner */}
      <div
        className="w-[672px] h-[478px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/ap1.png')`,
        }}
      >
      </div>
    </div>
  );
};

export default SplitBanner;
