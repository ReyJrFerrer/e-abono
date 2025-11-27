import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', comment: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80')`,
          }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Get in touch with our team for any inquiries about E-Abono.
            </p>
          </div>
        </section>

        <section className="py-0">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-lg overflow-hidden">
              <div className="h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.4067943799947!2d120.59624631483!3d16.46042688863584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a167d98bd975%3A0x8c784ae24e5974fe!2sBenguet%20State%20University!5e0!3m2!1sen!2sph!4v1638888888888!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Benguet State University Location"
                ></iframe>
              </div>

              <div className="bg-eabono-green p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-eabono-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-eabono-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="comment"
                      className="block text-white font-semibold mb-2"
                    >
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-eabono-gold focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  {submitMessage && (
                    <div className="bg-white text-eabono-green px-4 py-3 rounded-lg font-semibold">
                      {submitMessage}
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-eabono-gold text-black px-12 py-3 rounded-lg font-bold text-lg hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <p className="text-center text-eabono-green text-lg font-semibold">
              You may find us in our Main Office or in Benguet State University, La Trinidad.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
