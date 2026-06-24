import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  { title: "Python Programming", authority: "Technical Certification", description: "Advanced data manipulation, scripting, and predictive analytics structures." },
  { title: "MySQL & Database Management", authority: "Technical Certification", description: "Database designing, query optimization, joins, indexing, and management workflows." },
  { title: "Tableau Visualization", authority: "Technical Certification", description: "Crafting interactive reports, worksheets, and executive dashboard designs." },
  { title: "Advanced Excel", authority: "Technical Certification", description: "Pivot tables, array lookup functions, dynamic charts, and financial analytics structures." }
];

const Achievements = () => {
  return (
    <section id="achievements" className="container" style={{ textAlign: 'center' }}>
      <h2 className="section-title">Professional <span className="gradient-text">Certifications</span></h2>
      <p className="section-subtitle">
        Validated industry-aligned certifications demonstrating skills in Python scripting, SQL administration, and dashboard visualization tools.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: '1.5rem',
        marginTop: '2rem' 
      }}>
        {certifications.map((item, index) => (
          <div key={index} className="glass" style={{ 
            padding: '2rem 1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            gap: '1rem',
            transition: 'var(--transition)'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: 'var(--bg-accent)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--brand-primary)'
            }}>
              <Award size={24} />
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--brand-primary)', marginTop: '0.25rem', fontFamily: 'var(--mono)', fontWeight: 500 }}>
                <CheckCircle size={12} />
                <span>VERIFIED</span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
