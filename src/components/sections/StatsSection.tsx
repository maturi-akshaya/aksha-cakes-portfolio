export default function StatsSection() {
  return (
    <section className="py-16 bg-pink-50 text-center">

      <div className="grid md:grid-cols-3 max-w-5xl mx-auto gap-8">

        <div>
          <h2 className="text-4xl font-bold text-pink-600">500+</h2>
          <p className="text-gray-600">Cakes Delivered</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-pink-600">300+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-pink-600">5★</h2>
          <p className="text-gray-600">Ratings</p>
        </div>

      </div>

    </section>
  );
}