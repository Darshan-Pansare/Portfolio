import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
      <p className="section-subtitle">
        Have an analytical query, business issue, or project requirement? Let's connect and solve it with data.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
        
        {/* Contact Info Card */}
        <div className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Connection Hub</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Feel free to reach out via direct call, email, or social profiles. I will respond within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px', 
                  background: 'var(--bg-accent)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--brand-primary)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>EMAIL ADDRESS</div>
                  <a href="mailto:darshanpansare17@gmail.com" style={{ fontSize: '1rem', fontWeight: 500 }} className="nav-hover">
                    darshanpansare17@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px', 
                  background: 'var(--bg-accent)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--brand-primary)'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>PHONE NUMBER</div>
                  <a href="tel:+917249474977" style={{ fontSize: '1rem', fontWeight: 500 }} className="nav-hover">
                    +91 72494 74977
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px', 
                  background: 'var(--bg-accent)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--brand-primary)'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>OFFICE LOCATION</div>
                  <div style={{ fontSize: '1rem', fontWeight: 500 }}>Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Professional Networks</div>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary" 
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', width: 'fit-content' }}
            >
              <Linkedin size={16} color="#0a66c2" /> LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass" style={{ padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send Message</h3>
          
          {submitted ? (
            <div style={{ 
              background: 'rgba(6, 182, 212, 0.1)', 
              border: '1px solid var(--brand-primary)', 
              borderRadius: '8px', 
              padding: '1.5rem', 
              textAlign: 'center',
              color: 'var(--text-primary)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Message Transmitted!</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Thank you for reaching out, Darshan will review your analytics inquiry shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe" 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com" 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
                <input 
                  type="text" 
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Data Consulting Inquiry" 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Message *</label>
                <textarea 
                  required 
                  rows="4" 
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your analytics or project requirements here..." 
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '1rem', marginTop: '0.5rem' }}>
                <Send size={16} /> Transmit Query
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
