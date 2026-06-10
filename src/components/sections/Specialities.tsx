export default function Specialities() {
  const items = [
    "Custom Birthday Cakes",
    "Wedding Cakes",
    "Eggless Cakes",
    "Chocolate Special Cakes",
    "Designer Fondant Cakes",
    "Midnight Delivery"
  ];

  return (
    <section id="specialities" className="py-20 px-6 bg-pink-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10 text-gray-900">
          Our Specialities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {items.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-800">{item}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}