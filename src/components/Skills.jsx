export default function Skills() {
  const skills = ["HTML","CSS","JavaScript","C","Java","GitHub"];

  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="text-3xl font-semibold mb-6 text-accent1 text-center">Skills</h2>

      <div className="skills-pills">
        {skills.map((s) => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>
    </section>
  );
}