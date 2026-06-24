import React from 'react';
import { Terminal, Database, LineChart, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: <Terminal size={22} color="var(--brand-primary)" />,
    skills: ["Python", "SQL", "MySQL"]
  },
  {
    title: "Data Analysis",
    icon: <Cpu size={22} color="var(--brand-secondary)" />,
    skills: ["Pandas", "NumPy", "Data Cleaning", "Data Transformation"]
  },
  {
    title: "Visualization",
    icon: <LineChart size={22} color="var(--brand-primary)" />,
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"]
  },
  {
    title: "Tools & Others",
    icon: <Database size={22} color="var(--brand-secondary)" />,
    skills: ["Advanced Excel", "Git", "GitHub"]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)', borderRadius: '32px', padding: '6rem 2rem' }}>
      <div className="container">
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">
          A toolbox of technologies and methodologies focused on extracting, parsing, and visualizing data patterns.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '2rem' 
        }}>
          {skillCategories.map((cat, index) => (
            <div key={index} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: 'var(--bg-main)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{cat.title}</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                {cat.skills.map((skill) => (
                  <div key={skill} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{skill}</span>
                    </div>
                    {/* Visual bar tracker */}
                    <div style={{ width: '100%', height: '6px', background: 'var(--bg-accent)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          background: index % 2 === 0 
                            ? 'linear-gradient(90deg, var(--brand-primary), var(--brand-deep-blue))' 
                            : 'linear-gradient(90deg, var(--brand-secondary), var(--brand-primary))',
                          borderRadius: '3px'
                        }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
