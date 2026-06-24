import React, { useState } from 'react';
import { X, Award, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "SynergyConnect Data Innovations Pvt Ltd",
    location: "Mumbai, Maharashtra, India (On-site)",
    totalPeriod: "Jan 2025 - Present · 1 yr 6 mos",
    roles: [
      {
        title: "Junior Data Analyst",
        type: "Full-time",
        period: "Jul 2025 - Present · 1 yr",
        desc: "Transforming raw information into meaningful insights that support decision-making, improving analytical skills, and growing as a data professional in a challenging and fast-paced environment.",
        bullets: [
          "Perform data cleaning and advanced analysis.",
          "Build and maintain reports and basic data visualizations using MS Excel & SQL.",
          "Analyze datasets to understand business requirements and support decision-making."
        ]
      },
      {
        title: "Data Analyst Intern",
        type: "Internship",
        period: "Jan 2025 - Jul 2025 · 6 mos",
        desc: "Worked as part of the Analytics Team under the mentorship of Mr. Rajeshwar Shinde. Enhanced analytical capabilities and gained real-world exposure in data handling, parsing, and pipeline updates.",
        bullets: [
          "Collected, cleaned, and organized raw data from various sources.",
          "Assisted in generating dynamic reports and executive dashboards.",
          "Identified trends and patterns using statistical tools to drive business insights.",
          "Collaborated with senior analysts to interpret data insights and support data-driven decision making."
        ],
        certificate: "/internship_certificate.png"
      }
    ]
  },
  {
    company: "IT Education Centre, Pune, Maharashtra",
    location: "Pune, Maharashtra, India",
    totalPeriod: "Professional Training",
    roles: [
      {
        title: "Data Analyst Trainee",
        type: "Training",
        period: "Professional Coursework",
        desc: "Underwent intensive hands-on training in statistical methodologies, predictive modeling, database queries, and BI tools. Created various project models and dashboards to optimize business requirements."
      }
    ]
  }
];

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="container" style={{ background: 'var(--bg-secondary)', borderRadius: '32px', padding: '6rem 2rem' }}>
      <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
      <p className="section-subtitle">
        Professional history demonstrating growth in analytical roles, corporate data operations, and database query modeling.
      </p>

      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((companyBlock, cIdx) => (
          <div key={cIdx} className="glass" style={{ padding: '2.5rem', position: 'relative', border: '1px solid var(--glass-border)' }}>
            
            {/* Company Info Header */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '2rem', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>{companyBlock.company}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                  <MapPin size={14} color="var(--brand-primary)" />
                  <span>{companyBlock.location}</span>
                </div>
              </div>
              <div style={{ padding: '0.4rem 1rem', background: 'var(--bg-accent)', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', fontFamily: 'var(--mono)', border: '1px solid var(--border-light)' }}>
                {companyBlock.totalPeriod}
              </div>
            </div>

            {/* Roles Sub-Timeline */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Vertical line inside the company block */}
              {companyBlock.roles.length > 1 && (
                <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '10px', width: '2px', background: 'var(--border-light)' }}></div>
              )}

              {companyBlock.roles.map((role, rIdx) => (
                <div key={rIdx} style={{ paddingLeft: '2.5rem', position: 'relative' }}>
                  {/* Timeline Dot */}
                  <div style={{ 
                    position: 'absolute', 
                    left: '4px', 
                    top: '6px', 
                    width: '16px', 
                    height: '16px', 
                    borderRadius: '50%', 
                    background: rIdx === 0 ? 'var(--brand-primary)' : 'var(--bg-main)', 
                    border: `3px solid ${rIdx === 0 ? 'var(--brand-primary)' : 'var(--border-light)'}`,
                    boxShadow: rIdx === 0 ? '0 0 10px var(--brand-glow)' : 'none',
                    zIndex: 1 
                  }}></div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>{role.title}</h4>
                      <span className="tag" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', marginTop: '0.25rem' }}>{role.type}</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500, fontFamily: 'var(--mono)' }}>{role.period}</span>
                      {role.certificate && (
                        <button 
                          onClick={() => setSelectedCert(role.certificate)}
                          className="btn-secondary" 
                          style={{ 
                            padding: '0.35rem 0.75rem', 
                            fontSize: '0.75rem', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.3rem',
                            borderRadius: '6px'
                          }}
                        >
                          <Award size={12} /> Certificate
                        </button>
                      )}
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{role.desc}</p>
                  
                  {role.bullets && (
                    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)', listStyleType: 'disc' }}>
                      {role.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox Modal overlay for Certificate */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>
              <X size={20} /> Close Certificate
            </button>
            <img src={selectedCert} alt="Internship Certificate Enlarged View" style={{ border: '1px solid rgba(255, 255, 255, 0.15)' }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
