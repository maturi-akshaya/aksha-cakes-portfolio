export default function Testimonials() {
  return (
    <section className="py-20 bg-pink-50 px-6 text-center">

      <h2 className="text-4xl font-bold mb-10">What Customers Say</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="bg-white p-6 rounded-2xl shadow">
          ⭐⭐⭐⭐⭐
          <p>Best cake ever! Everyone loved it 🎂</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          ⭐⭐⭐⭐⭐
          <p>Perfect design and taste</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          ⭐⭐⭐⭐⭐
          <p>Delivered on time and fresh</p>
        </div>

      </div>

    </section>
  );
}