import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-center py-8 bg-white">
        <h1 className="text-4xl font-bold text-blue-900">About Us Page</h1>
      </div>

      {/* Hero Section with Background Image */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgj2u6B_O8Lr9-J8ZvB8vpN-gU0lPk_I4vzQ&s")`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl font-bold mb-4">ABOUT US</h2>
          <p className="text-xl font-semibold">
            MUKWANO INDUSTRIES UGANDA LTD.
          </p>
          <div className="flex gap-8 mt-6">
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded text-sm font-semibold transition-colors">
              AWARDS & RECOGNITION
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded text-sm font-semibold transition-colors">
              CONTACT
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Our Pledge Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Pledge</h3>
          <p className="text-gray-700 leading-relaxed">
            At Mukwano Industries Uganda limited, we acknowledge that the
            community in which we operate is an essential component of our
            business because it is here that we get our resources including
            staff, suppliers, and other business facilitators who include our
            customers. It is for this reason that we engage in community
            programs that seek to uplift the livelihood of the community.
          </p>
        </div>

        {/* About Mukwano Industries Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            ABOUT MUKWANO INDUSTRIES UGANDA LTD.
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Company Description */}
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed text-justify">
            Mukwano industries Uganda Limited is the leading conglomerate in
            East and Central Africa and a major player in key business sectors
            covering manufacturing, agriculture, and logistics supply chain that
            drives the Ugandan economy. Its origins date back to 1910 when
            members of the family first set foot in East Africa and established
            a trading company. The business has grown through the visionary
            diversification into various areas of manufacturing, agriculture,
            property development, and logistics, and supply-chain management.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">OUR MISSION</h3>
            <p className="leading-relaxed">
              To become the supplier of choice for Fast Moving Consumer Goods in
              East and Central Africa.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">OUR VISION</h3>
            <p className="leading-relaxed">
              We are committed to produce safe and quality brands that enrich
              the lives of people in East and Central Africa every day.
            </p>
          </div>
        </div>

        {/* Our Legacy Section */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">
            OUR LEGACY
          </h3>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Text Content */}
            <div className="md:col-span-2 space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                The Mukwano Industries Uganda Ltd. began operations in the early
                1980s in Kampala, Uganda with a single enterprise store dealing
                in general merchandise and produce.
              </p>
              <p>
                The first major step in the growth of the company was the
                purchase of its first manufacturing unit. These were the
                mainstay of the company until the late 1980s when the company
                diversified by investing in the manufacturing of detergents and
                plastic products, this etched Mukwano's position at the helm of
                the manufacturing sector.
              </p>
              <p>
                Additional investment into the production of personal care
                products such as petroleum jelly and packaged drinking water
                further extended our presence in the Fast Moving Consumer Goods
                market segment.
              </p>
              <p>
                We expanded our business portfolio by investing in wholesale and
                retail trade in agriculture, property development and logistics.
              </p>
              <p>
                Today, Mukwano Industries Uganda Ltd. employs over 7,000 staff
                directly and indirectly within our various companies and are
                among the top 10 largest taxpayers in Uganda.
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-lg mb-4 overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/portrait-wise-person_52683-100915.jpg?semt=ais_items_boosted&w=740" // replace with your image URL
                  alt="Mzee Mukwano - Amirali Karmali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-blue-900 text-sm">
                  MZEE MUKWANO - AMIRALI KARMALI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
