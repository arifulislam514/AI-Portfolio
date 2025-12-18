import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // ✅ modal state

  async function onSubmit(e) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setLoading(true);

      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setOpen(true); // ✅ show modal
      } else {
        alert("Oops! There was a problem sending your message. Please try again.");
      }
    } catch {
      alert("Oops! There was a problem sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-gray-800">
      <h2 className="text-4xl section-title">Get In Touch</h2>

      <div className="mt-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">Let's Chat</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm actively looking for opportunities to apply my full-stack skills. Whether you have a question about my
                portfolio, a project idea, or just want to connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#58a6ff]">Contact Details</h3>

              <a
                href="mailto:ariful425616@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#58a6ff] transition duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#58a6ff]">
                  <i className="fas fa-envelope" />
                </div>
                <span className="text-lg">ariful425616@gmail.com</span>
              </a>

              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#58a6ff]">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <span className="text-lg">Bangladesh</span>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Socials</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/ariful-islam-337247390/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#58a6ff] hover:text-white transition duration-300"
                >
                  <i className="fab fa-linkedin-in" />
                </a>

                <a
                  href="https://github.com/arifulislam514"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#58a6ff] hover:text-white transition duration-300"
                >
                  <i className="fab fa-github" />
                </a>

                <a
                  href="https://codeforces.com/profile/ariful425616"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#58a6ff] hover:text-white transition duration-300"
                >
                  <i className="fas fa-code" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <form
              id="contact-form"
              action="https://formsubmit.co/ariful425616@gmail.com"
              method="POST"
              className="space-y-5"
              onSubmit={onSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Submission from Portfolio" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_next" value="https://arifulislam514.github.io/AI-Portfolio/" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="form-input w-full bg-[#0d1117] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="form-input w-full bg-[#0d1117] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="form-input w-full bg-[#0d1117] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition duration-300"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-[#58a6ff] hover:bg-[#79a9e7] text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition hover:scale-[1.02] duration-300 flex items-center justify-center ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2" /> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Success Modal (React version of your HTML design) */}
      {open && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false); // close on backdrop click
          }}
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-sm mx-4 shadow-2xl modal-animate text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#58a6ff]/20 mb-6">
              <i className="fas fa-check text-3xl text-[#58a6ff]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400 mb-6">
              Thank you for reaching out. I've received your message and will get back to you shortly.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 px-4 bg-[#58a6ff] hover:bg-[#79a9e7] text-white font-bold rounded-lg transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
