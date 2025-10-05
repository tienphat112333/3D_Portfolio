import { motion } from "framer-motion";

const WorkExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative wrap overflow-hidden p-6 md:p-10 h-full">
      {/* vertical line */}
      <div className="absolute hidden md:block border-l-2 border-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

      {experiences.map((exp, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            // thêm gap-y cho khoảng cách dọc, thay vì margin cứng
            className={`relative mb-16 flex flex-col md:flex-row md:justify-between items-center gap-y-10 ${
              isLeft ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Card */}
            <div className="w-full md:w-5/12">
              <div
                className="bg-white p-6 rounded-xl shadow-md border-b-4"
                style={{ borderBottomColor: exp.iconBg }}
              >
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-gray-500">{exp.company_name}</p>
                <motion.ul
                  className="mt-3 list-disc ml-5 space-y-1"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.15 } },
                  }}
                >
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-600 text-sm"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* Icon + Date */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="z-10 flex flex-col items-center md:mx-4"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full shadow-md"
                style={{ backgroundColor: exp.iconBg }}
              >
                <img
                  src={exp.icon}
                  alt={exp.company_name}
                  className="w-6 h-6"
                />
              </div>
              <span className="mt-2 text-sm text-gray-500 w-[190px] text-center">
                {exp.date}
              </span>
            </motion.div>

            {/* Spacer để cân layout khi desktop */}
            <div className="hidden md:block w-5/12"></div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default WorkExperienceTimeline;
