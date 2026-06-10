import { BUSINESS_INFO } from "@/constants/business";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white via-pink-50 to-white py-16 px-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-pink-700">
            About Aksha Cakes 🎂
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Homemade • Eggless • Made with Love 💕
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
            Aksha Cakes is a home-based bakery located in Gudivada,
            specializing in freshly baked, completely eggless cakes.
            Every cake is handcrafted with love, ensuring both taste and
            beautiful presentation for your special moments.
          </p>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-pink-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-pink-700 mb-2">🎂 Custom Cakes</h3>
              <p className="text-gray-700">
                Fully customized cakes designed for your special occasions.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-pink-700 mb-2">🥚 Eggless Baking</h3>
              <p className="text-gray-700">
                100% eggless cakes without compromising taste or quality.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-pink-700 mb-2">🎉 All Occasions</h3>
              <p className="text-gray-700">
                Birthday, anniversary, theme cakes & more.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-pink-700 mb-2">📍 Location</h3>
              <p className="text-gray-700">
                Gudivada – Fresh homemade cakes near you.
              </p>
            </div>

          </div>

          {/* CONTACT INFO */}
          <div className="mt-10 text-center">

            <p className="text-lg font-medium text-gray-800">
              📞 Contact: 7337335674
            </p>

            <p className="text-gray-600 mt-2">
              📩 DM or WhatsApp to place your order
            </p>

            <p className="text-sm text-gray-500 mt-4">
              FSSAI License: 20126121000045
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}