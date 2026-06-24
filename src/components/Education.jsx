import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="container">
      <h2 className="section-title">Academic <span className="gradient-text">Journey</span></h2>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '12px', 
              background: 'var(--bg-accent)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <GraduationCap size={28} color="var(--brand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Bachelor of Computer Science</h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
                Savitribai Phule Pune University
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Graduation Period</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>2020 – 2023</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>CGPA Score</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--brand-primary)', marginTop: '0.2rem' }}>8.42 / 10</div>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Key Competences Studied:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["Data Structures", "Algorithms", "Database Management Systems", "Object-Oriented Programming", "Mathematics", "Probability & Statistics"].map(course => (
                <span key={course} className="tag" style={{ background: 'var(--bg-main)' }}>{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
