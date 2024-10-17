const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'CEO, TechCorp',
    content: 'The products and services provided by this company have transformed our business operations. Highly recommended!',
  },
  {
    name: 'Bob Smith',
    role: 'CTO, InnovateTech',
    content: 'Exceptional quality and customer service. They truly understand our needs and deliver beyond expectations.',
  },
  {
    name: 'Carol Williams',
    role: 'Marketing Director, GrowthCo',
    content: 'Their innovative solutions have given us a significant edge in the market. A pleasure to work with!',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;