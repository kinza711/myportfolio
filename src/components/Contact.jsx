import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full -mb-48 -mr-48"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT CONTACT INFO */}
        <div>
          <h2 className="text-4xl font-heading font-bold mb-8">
            <span className="text-gradient"> Connect with Kinza </span>
          </h2>
          <p className="text-lg text-brand-muted mb-12">
            I build modern web applications using MERN stack and integrate AI
            tools for smarter experiences. Reach out for freelance projects,
            collaborations, or AI integration inquiries.
          </p>

          {/* Email & Location */}
          <div className="space-y-6">
            {/* <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                <HiMail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-brand-muted">
                  Email
                </p>
                <p className="text-brand-navy font-semibold">
                  kinzashahzadi7811@gmail.com
                </p>
              </div>
            </div> */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                <HiLocationMarker className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-brand-muted">
                  Location
                </p>
                <p className="text-brand-navy font-semibold">
                  Remote / Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-12">
            <a
              className="w-10 h-10 border border-brand-navy/20 rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all"
              href="https://www.linkedin.com/in/kinza-shahzadi-5487532b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="w-10 h-10 border border-brand-navy/20 rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all"
              href="https://github.com/kinza711"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithubInverted />
            </a>
            <a
              className="w-10 h-10 border border-brand-navy/20 rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all"
              href="mailto:kinzashahzadi7811@gmail.com"
            >
              <GrMail />
            </a>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="glass-card p-10 rounded-3xl shadow-xl border border-brand-cyan">
          {/* Simple mailto form */}
          <form
            action="mailto:kinzashahzadi7811@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                  Name
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-brand-navy/10 focus:border-brand-cyan transition-colors outline-none py-2"
                  placeholder="Your Name"
                  type="text"
                  name="Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                  Email
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-brand-navy/10 focus:border-brand-cyan transition-colors outline-none py-2"
                  placeholder="your.email@example.com"
                  type="email"
                  name="Email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                Subject
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-brand-navy/10 focus:border-brand-cyan transition-colors outline-none py-2"
                placeholder="Project Inquiry"
                type="text"
                name="Subject"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                Message
              </label>
              <textarea
                className="w-full bg-transparent border-b-2 border-brand-navy/10 focus:border-brand-cyan transition-colors outline-none py-2 resize-none"
                placeholder="Write your message here..."
                rows="4"
                name="Message"
                required
              ></textarea>
            </div>
            <button
              className="w-full py-4 bg-brand-navy text-white font-heading font-bold rounded-xl hover:bg-brand-teal transition-all shadow-lg shadow-brand-navy/10"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
