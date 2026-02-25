import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // Import download icon
import AboutImg from "../assets/profile.jpeg"; // Replace with your image

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900 flex flex-col items-center gap-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
        About Me
      </h2>

      {/* Two Columns */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">

        {/* Left Column - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={AboutImg}
            alt="About Me"
            className="w-full max-w-sm rounded-2xl object-cover"
          />
        </motion.div>

        {/* Right Column - Text + Skills */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Bio */}
<div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
  <p>
    I am an Electrical Engineering undergraduate with a strong passion for web development and software engineering. My journey from core engineering to coding has shaped my analytical thinking and problem-solving mindset.
  </p>
  <p>
    I specialize in building modern, responsive, and scalable web applications using technologies like React, Node.js, and JavaScript. I enjoy transforming ideas into real-world digital solutions that are efficient and user-focused.
  </p>
  <p>
    With a continuous learning attitude and a growth-driven mindset, I actively work on improving my data structures, backend architecture, and full-stack development skills.
  </p>
  <p>
    I am currently seeking opportunities to contribute to impactful projects, collaborate with innovative teams, and grow as a professional full-stack developer.
  </p>
</div>

          {/* Skills */}
          <div className="flex flex-wrap gap-4 mt-4">
            {["React", "Node.js", "JavaScript", "MongoDb", "SQL"].map((skill, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 px-5 py-2 rounded-xl shadow-md font-semibold text-gray-800 dark:text-gray-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Download CV Button - Centered Below Both Columns */}
      <a
        href="/my_resume.pdf"
        download
        className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition text-center"
      >
        <FiDownload size={20} /> Download CV
      </a>

    </section>
  );
}
