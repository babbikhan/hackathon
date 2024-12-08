'use client'; // This marks the component as a client-side component

const FourSplitBanner = () => {
  // Sample data for banners
  const banners = [
    {
      image: '/ap2.png',
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard',
    },
    {
      image: '/ap3.png',
      title: 'Made by true artisans',
      description: 'Handmade crafted goods made with real passion and craftsmanship',
    },
    {
      image: '/ap3.png',
      title: 'Unbeatable prices',
      description: 'For our materials and quality, you won’t find better prices anywhere',
    },
    {
      image: '/ap4.png',
      title: 'Recycled packaging',
      description: 'We use 100% recycled materials to ensure our footprint is more manageable',
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto text-center py-8">
      {/* Section Title */}
      <h2 className="text-3xl text-[#272343] font-semibold mb-8">What makes our Brand Different</h2>

      {/* Flexbox for Banners in One Row */}
      <div className="flex justify-between gap-4">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-[309px] h-[244px] bg-[#F9F9F9] flex flex-col p-4"
          >
            {/* Banner Image with width and height 24x24, moved down slightly */}
            <img
              src={banner.image}
              alt={banner.title}
              className="w-6 h-6 object-cover rounded-md mb-4 mt-4 mx-7"  // Added mx-2 for reduced horizontal padding
            />

            {/* Title - Left aligned with reduced padding */}
            <h3 className="text-lg text-[#007580] font-inter mb-3 text-left mx-7">{banner.title}</h3>

            {/* Description - Left aligned with reduced padding */}
            <p className="text-2x1 text-[#007580] text-left mx-7 overflow-hidden whitespace-normal" style={{ WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
              {banner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourSplitBanner;
