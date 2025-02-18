import React from 'react';
import './ApplicationForm.css';

const ApplicationFormWithSidebar: React.FC = () => {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">PlanÉire</h2>
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link active">
            Home
          </a>
          <a href="#" className="sidebar-link">
            Apply
          </a>
          <a href="#" className="sidebar-link">
            Support
          </a>
          <a href="#" className="sidebar-link">
            Settings
          </a>
          <a href="#" className="sidebar-link">
            About
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="form-header">
          <h1 className="form-title">PlanÉire</h1>
          <input
            type="text"
            className="form-search"
            placeholder="Search PlanÉire"
          />
          <div className="user-info">
            <p>John Smith</p>
            <button className="mygov-button">MyGov</button>
          </div>
        </header>
        <main className="form-main">
          <h2 className="form-subtitle">Apply</h2>

          {/* Applicant's Details */}
          <section className="form-section">
            <h3>Applicant's Details</h3>
            <p className="form-note">
              You cannot edit this field. If this is not you, please{' '}
              <span className="form-signout">sign out</span>. This must be your
              legal name and address, not an agent.
            </p>
            <div className="form-grid">
              <input type="text" className="form-input" value="Mr." readOnly />
              <input type="text" className="form-input" value="John" readOnly />
              <input
                type="text"
                className="form-input"
                value="Smith"
                readOnly
              />
              <input
                type="text"
                className="form-input"
                value="1 Patrick Street"
                readOnly
              />
              <input
                type="text"
                className="form-input"
                value="Ballymore"
                readOnly
              />
              <input
                type="text"
                className="form-input"
                value="Co. Tipperary"
                readOnly
              />
              <input
                type="text"
                className="form-input"
                value="X12 AB34"
                readOnly
              />
            </div>
          </section>

          {/* Type of Application */}
          <section className="form-section">
            <h3>Type of Application</h3>
            <div className="button-group">
              {[
                'Permission',
                'Retention Permission',
                'Outline Permission',
                'Permission on foot of Outline Permission',
              ].map((type) => (
                <button key={type} className="form-button">
                  {type}
                </button>
              ))}
            </div>
          </section>

          {/* Postal Address */}
          <section className="form-section">
            <h3>Postal Address</h3>
            <div className="form-grid">
              <input
                type="text"
                className="form-input"
                placeholder="House No. (Optional)"
              />
              <input type="text" className="form-input" placeholder="Street" />
              <input type="text" className="form-input" placeholder="City" />
              <input type="text" className="form-input" placeholder="County" />
              <input type="text" className="form-input" placeholder="Eircode" />
            </div>
          </section>

          <button className="form-continue-button">Continue</button>
        </main>
      </div>
    </div>
  );
};

export default ApplicationFormWithSidebar;
