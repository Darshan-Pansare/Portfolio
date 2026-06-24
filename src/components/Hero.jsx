import React from 'react';
import { MapPin, Mail, Phone, Code, BarChart3, Database, Layers } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      title: "Data Analytics Projects",
      value: "2+",
      description: "Production-grade analyses",
      icon: <BarChart3 size={20} color="var(--brand-primary)" />,
      sparkline: (
        <svg width="60" height="30" viewBox="0 0 60 30">
          <path d="M0 25 L15 15 L30 20 L45 5 L60 10" fill="none" stroke="var(--brand-primary)" strokeWidth="2" />
          <circle cx="45" cy="5" r="3" fill="var(--brand-primary)" />
        </svg>
      )
    },
    {
      title: "Python Analytics",
      value: "Pandas/NumPy",
      description: "EDA and statistical modeling",
      icon: <Code size={20} color="var(--brand-secondary)" />,
      sparkline: (
        <svg width="60" height="30" viewBox="0 0 60 30">
          <path d="M0 15 Q15 0 30 15 T60 15" fill="none" stroke="var(--brand-secondary)" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Dashboard Development",
      value: "Power BI/Tableau",
      description: "Interactive visualization",
      icon: <Layers size={20} color="var(--brand-primary)" />,
      sparkline: (
        <svg width="60" height="30" viewBox="0 0 60 30">
          <rect x="5" y="15" width="8" height="15" fill="var(--brand-primary)" opacity="0.4" />
          <rect x="18" y="10" width="8" height="20" fill="var(--brand-primary)" opacity="0.7" />
          <rect x="31" y="5" width="8" height="25" fill="var(--brand-primary)" />
          <rect x="44" y="12" width="8" height="18" fill="var(--brand-primary)" opacity="0.6" />
        </svg>
      )
    },
    {
      title: "SQL & DB Management",
      value: "MySQL/Excel",
      description: "Optimized queries & pipelines",
      icon: <Database size={20} color="var(--brand-secondary)" />,
      sparkline: (
        <svg width="60" height="30" viewBox="0 0 60 30">
          <circle cx="15" cy="15" r="5" fill="var(--brand-secondary)" opacity="0.5" />
          <circle cx="45" cy="15" r="5" fill="var(--brand-secondary)" />
          <line x1="20" y1="15" x2="40" y2="15" stroke="var(--brand-secondary)" strokeWidth="2" strokeDasharray="3,3" />
        </svg>
      )
    }
  ];

  return (
    <section className="container" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Main Info */}
        <div style={{ textAlign: 'center', maxWidth: '900px', marginInline: 'auto' }}>
          
          {/* Location Badge */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.5rem 1rem', 
            background: 'var(--bg-accent)', 
            borderRadius: '99px', 
            border: '1px solid var(--border-light)', 
            marginBottom: '1.5rem', 
            color: 'var(--brand-primary)', 
            fontSize: '0.9rem', 
            fontWeight: 500 
          }}>
            <MapPin size={16} />
            Mumbai, Maharashtra, India
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Hi, I'm <span className="gradient-text">Darshan Pansare</span>
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: 'var(--text-primary)', 
            fontWeight: 500, 
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
            fontFamily: 'var(--mono)'
          }}>
            Data Analyst | Python Developer | Dashboard Developer
          </p>

          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '750px', 
            margin: '0 auto 2.5rem',
            lineHeight: '1.7'
          }}>
            Transforming raw data into actionable business insights through analytics, visualization, and data-driven decision making.
          </p>

          {/* Contact Details Quick Links */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            marginBottom: '3rem',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)'
          }}>
            <a href="mailto:darshanpansare17@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="nav-hover">
              <Mail size={16} color="var(--brand-primary)" />
              darshanpansare17@gmail.com
            </a>
            <a href="tel:+917249474977" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="nav-hover">
              <Phone size={16} color="var(--brand-primary)" />
              +91 72494 74977
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '1.5rem',
          marginTop: '2rem' 
        }}>
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass glass-interactive" 
              style={{ 
                padding: '1.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                height: '160px',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px', 
                  background: 'var(--bg-accent)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {stat.icon}
                </div>
                {stat.sparkline}
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: '1.2', color: 'var(--text-primary)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)', marginTop: '0.2rem' }}>{stat.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
