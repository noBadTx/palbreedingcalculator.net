import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palworld Passive Skills Guide — Best Passives for Breeding | PalBreed",
  description: "A guide to Palworld passive skills and how they pass down through breeding. Plan your perfect Pal with the right passive combination.",
};

const skills = [
  { name: "Lucky", effect: "+15% attack", tier: "S", inheritance: "Can pass to child" },
  { name: "Legend", effect: "+20% attack / +20% defense", tier: "S", inheritance: "Can pass to child" },
  { name: "Serious", effect: "+20% work speed", tier: "A", inheritance: "Can pass to child" },
  { name: "Swift", effect: "+10% movement speed", tier: "A", inheritance: "Can pass to child" },
  { name: "Hard Worker", effect: "+15% work speed", tier: "B", inheritance: "Can pass to child" },
  { name: "Muscular", effect: "+10% carrying capacity", tier: "B", inheritance: "Can pass to child" },
];

export default function PassiveSkillsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <h1>Palworld Passive Skills Guide</h1>
        <p style={{ color: "var(--text-secondary)" }}>Passive skills can turn a good Pal into a great one. Learn which passives stack, which are best for combat or work, and how to plan your breeding around them.</p>

        <div className="card mt-8">
          <h2 className="card-title">Tier List</h2>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Effect</th>
                  <th>Tier</th>
                  <th>Inheritance</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((s) => (
                  <tr key={s.name}>
                    <td style={{ fontWeight: 600, color: "var(--text-primary)" }}>{s.name}</td>
                    <td>{s.effect}</td>
                    <td><span className={`badge ${s.tier === "S" ? "badge-primary" : "badge-secondary"}`}>{s.tier}</span></td>
                    <td>{s.inheritance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
