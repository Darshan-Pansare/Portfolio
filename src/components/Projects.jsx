import React, { useState } from 'react';
import { ExternalLink, Github, Maximize2, X, Filter } from 'lucide-react';

const churnDrivers = [
  { factor: "Month-to-Month Contract", impact: 0.405, desc: "Strongest positive churn driver. Customers on short-term commitments are highly volatile." },
  { factor: "No Tech Support", impact: 0.322, desc: "High churn rate among clients who do not use or have access to technical assistance." },
  { factor: "Fiber Optic Internet", impact: 0.308, desc: "Higher pricing of fiber service correlates with elevated churn levels." },
  { factor: "Tenure (Months)", impact: -0.352, desc: "Strong negative correlation. Loyal customers with high tenure rarely churn." },
  { factor: "Two-Year Contract", impact: -0.282, desc: "Long-term contracts act as a solid customer retention buffer." }
];

// Excel dashboard values under different filter scenarios
const excelMockData = {
  All: { sales: "$2,296,919.49", profit: "$2,86,409.08", orders: "9,993", margin: "12.47%", yoy: "+20.62%" },
  "2011": { sales: "$484,247.44", profit: "$58,743.21", orders: "2,050", margin: "12.13%", yoy: "Baseline" },
  "2012": { sales: "$521,482.02", profit: "$66,812.33", orders: "2,284", margin: "12.81%", yoy: "+7.69%" },
  "2013": { sales: "$582,851.78", profit: "$72,610.45", orders: "2,547", margin: "12.46%", yoy: "+11.77%" },
  "2014": { sales: "$708,338.25", profit: "$88,243.09", orders: "3,112", margin: "12.46%", yoy: "+21.53%" },
};

const Projects = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [hoveredChurn, setHoveredChurn] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
      <p className="section-subtitle">
        Analytics pipelines, statistical models, and custom interactive business intelligence solutions.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        
        {/* Project 1: Customer Churn Analysis */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--brand-primary)', fontWeight: 700, fontFamily: 'var(--mono)' }}>PYTHON & MACHINE LEARNING</div>
            <h3 style={{ fontSize: '2rem' }}>Customer Churn Analysis</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
              Performed Exploratory Data Analysis (EDA) on telecom customer churn datasets. 
              Built key statistical models to identify churn drivers and assist retention strategies.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0' }}>
              {["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div style={{ marginTop: '1rem', borderLeft: '3px solid var(--brand-primary)', paddingLeft: '1rem' }}>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Key Outcomes:</div>
              <ul style={{ padding: '0.5rem 0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)', listStyleType: 'disc' }}>
                <li>Identified month-to-month contracts and lack of tech support as primary churn risk factors.</li>
                <li>Built distribution plots, correlation heatmaps, scatter plots, and box plots.</li>
                <li>Supplied recommendations that informed retention strategies.</li>
              </ul>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" className="btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                <Github size={16} /> Code Repo
              </a>
            </div>
          </div>

          {/* Interactive Chart Preview */}
          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Correlation with Churn</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>Interactive SVG Plot</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', minHeight: '260px', justifyContent: 'center' }}>
              {churnDrivers.map((driver, idx) => {
                const isPositive = driver.impact > 0;
                const widthPercent = Math.abs(driver.impact) * 100;
                const isHovered = hoveredChurn === idx;

                return (
                  <div 
                    key={idx} 
                    onMouseEnter={() => setHoveredChurn(idx)}
                    onMouseLeave={() => setHoveredChurn(null)}
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '0.25rem',
                      cursor: 'pointer',
                      opacity: hoveredChurn !== null && !isHovered ? 0.4 : 1,
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 500 }}>{driver.factor}</span>
                      <span style={{ fontFamily: 'var(--mono)', color: isPositive ? 'var(--brand-primary)' : '#f43f5e', fontWeight: 600 }}>
                        {isPositive ? `+${driver.impact}` : driver.impact}
                      </span>
                    </div>

                    <div style={{ display: 'flex', width: '100%', height: '14px', background: 'var(--bg-accent)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                      <div 
                        style={{ 
                          width: `${widthPercent}%`, 
                          height: '100%', 
                          background: isPositive 
                            ? 'linear-gradient(90deg, var(--brand-primary), var(--brand-deep-blue))' 
                            : 'linear-gradient(90deg, #f43f5e, #be123c)',
                          borderRadius: '4px',
                          marginLeft: isPositive ? 'auto' : '0',
                          marginRight: isPositive ? '0' : 'auto',
                          transition: 'var(--transition)'
                        }} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Detail Tooltip */}
            <div style={{ 
              minHeight: '80px', 
              background: 'var(--bg-accent)', 
              borderRadius: '8px', 
              padding: '0.75rem',
              border: '1px solid var(--border-light)',
              fontSize: '0.85rem',
              color: hoveredChurn !== null ? 'var(--text-primary)' : 'var(--text-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              {hoveredChurn !== null 
                ? churnDrivers[hoveredChurn].desc 
                : "Hover over the correlation bars above to see detailed insights."
              }
            </div>
          </div>
        </div>

        {/* Project 2: Ecommerce Sales Dashboard */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Dashboard Image Visual Component */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div 
              onClick={() => setIsLightboxOpen(true)}
              style={{ 
                position: 'relative', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                cursor: 'zoom-in', 
                border: '1px solid var(--glass-border)',
                transition: 'var(--transition)'
              }}
              className="glass glass-interactive"
            >
              <img 
                src="/sales_dashboard.png" 
                alt="Ecommerce Sales Dashboard" 
                style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.95 }} 
              />
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: 'rgba(0,0,0,0.3)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                opacity: 0, 
                transition: 'var(--transition)'
              }} className="overlay-hover">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  background: 'rgba(15, 23, 42, 0.8)', 
                  padding: '0.75rem 1.25rem', 
                  borderRadius: '99px',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}>
                  <Maximize2 size={16} /> Click to expand
                </div>
              </div>
            </div>

            {/* Quick Slicers Simulator */}
            <div className="glass" style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <Filter size={14} color="var(--brand-primary)" />
                <span>Simulate Year Slicer:</span>
              </div>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {["All", "2011", "2012", "2013", "2014"].map(year => (
                  <button 
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      background: selectedYear === year ? 'var(--brand-primary)' : 'var(--bg-accent)',
                      color: selectedYear === year ? '#ffffff' : 'var(--text-primary)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Live KPIs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              <div className="glass" style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Sales</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--brand-primary)', marginTop: '0.1rem' }}>
                  {excelMockData[selectedYear].sales}
                </div>
              </div>
              <div className="glass" style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Profit</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--brand-secondary)', marginTop: '0.1rem' }}>
                  {excelMockData[selectedYear].profit}
                </div>
              </div>
              <div className="glass" style={{ padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>YoY Growth</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.1rem' }}>
                  {excelMockData[selectedYear].yoy}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--brand-secondary)', fontWeight: 700, fontFamily: 'var(--mono)' }}>EXCEL BUSINESS INTELLIGENCE</div>
            <h3 style={{ fontSize: '2rem' }}>Ecommerce Sales Dashboard</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
              Analyzed global ecommerce transaction histories, constructed dynamic pivot tables, and built a fully customized Excel-based executive dashboard with slicers and KPI metrics.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0' }}>
              {["Advanced Excel", "Pivot Tables", "Dashboard Design", "KPI Reporting", "Business Intelligence"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div style={{ marginTop: '1rem', borderLeft: '3px solid var(--brand-secondary)', paddingLeft: '1rem' }}>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Key Outcomes:</div>
              <ul style={{ padding: '0.5rem 0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)', listStyleType: 'disc' }}>
                <li>Product & category profit margins tracked to identify underperforming sectors.</li>
                <li>Calculated year-over-year revenue growths, showing peak transaction seasons.</li>
                <li>Set up dynamic KPI indicators (Sales, Profit, Quantity, Profit Margin).</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal overlay */}
      {isLightboxOpen && (
        <div className="modal-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsLightboxOpen(false)}>
              <X size={20} /> Close Preview
            </button>
            <img src="/sales_dashboard.png" alt="Ecommerce Sales Dashboard Enlarged View" />
          </div>
        </div>
      )}

      <style>{`
        .glass-interactive:hover .overlay-hover {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;
