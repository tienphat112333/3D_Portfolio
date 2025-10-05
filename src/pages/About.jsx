import { skills, experiences } from "../constant";
import WorkExperienceTimeline from "../components/WorkExperienceTimeline";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Phát
        </span>
      </h1>
      <div className="MT-5 flex flex-col gap-3 text-slate-500">
        <p>
          Final-year Software Engineering student, eager to kickstart my career
          as an intern/fresher. With 2 months of internship experience, I’m
          passionate about hands-on learning and building real-world
          applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl " />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3>Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            During my internship, I had the chance to learn from talented people
            and grow my skills through real projects. Here’s the rundown:
          </p>
        </div>
        <div className="mt-12 flex text-slate-500">
          <WorkExperienceTimeline experiences={experiences} />
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};
export default About;
