import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="logo_box">
            <div className="logo"></div>
          </div>
          <div className="tabs_box">
            <div className="tab_name">Products</div>
            <div className="tab_name">Resources</div>
            <div className="tab_name">Support</div>
            <div className="tab_name">Events</div>
            <div className="tab_name">Developer</div>
          </div>
          <div className="contact_box">
            <div className="accounts">View Accounts</div>
            <div className="contact">Contact Sales</div>
          </div>
        </div>
        <div className="content">
          <div className="column one">
            <div className="text_box">
              <div className="text_cloud">Oracle Cloud</div>
              <div className="text_title">Infrastructure</div>
              <div className="text_subtitle">Highly Automated and Secure</div>
              <div className="text_content">Oracle Cloud infrastructure combines the elasticity and utility of public cloud with the granular control, security, and predictability of on-premises infrastructure. Simplify operations and spend less with database, platform, and infrastructure services running in public regions and customer data centers.</div>
              <div className="text_button">Explore products</div>
            </div>
            <div className="image_box one"></div>
          </div>
          <div className="column two">
            <div className="text_box">
              <div className="text_cloud">Oracle Cloud</div>
              <div className="text_title">Applications</div>
              <div className="text_subtitle">Complete Suite of Integrated Apps</div>
              <div className="text_content">Streamline your enterprise business process. With ERP Financials, Procurement, Project Portfolio Management and more, you can increase productivity, lower costs, and improve controls.</div>
              <div className="text_button">Explore products</div>
            </div>
            <div className="image_box two"></div>
          </div>
          <div className="column three">
            <div className="text_box">
              <div className="text_cloud">Oracle Cloud</div>
              <div className="text_title">Analytics</div>
              <div className="text_subtitle">Complete Suite of Integrated Apps</div>
              <div className="text_content">Streamline your enterprise business process. With ERP Financials, Procurement, Project Portfolio Management and more, you can increase productivity, lower costs, and improve controls.</div>
              <div className="text_button">Explore products</div>
            </div>
            <div className="image_box three"></div>
          </div>
        </div>
        <div className="footer">
          <div className="section">
            <div className="section_title">Resources for</div>
            <div className="section_subtitle">Developers</div>
            <div className="section_subtitle">Startups</div>
            <div className="section_subtitle">Students and Educators</div>
          </div>
          <div className="section">
            <div className="section_title">Partners</div>
            <div className="section_subtitle">Oracle PartnerNetwork</div>
            <div className="section_subtitle">Find a Partner</div>
            <div className="section_subtitle">Log in to OPN</div>
          </div>
          <div className="section">
            <div className="section_title">Solutions</div>
            <div className="section_subtitle">Artificial Intelligence</div>
            <div className="section_subtitle">Internet of Things</div>
            <div className="section_subtitle">Blockchain</div>
          </div>
          <div className="section">
            <div className="section_title">What’s New</div>
            <div className="section_subtitle">How we’re taking on COVID-19</div>
            <div className="section_subtitle">Java SE Downloads</div>
            <div className="section_subtitle">Try Oracle Cloud Free Tier</div>
          </div>
          <div className="section">
            <div className="section_title">Contact Us</div>
            <div className="section_subtitle">US Sales: +1.800.633.0738</div>
            <div className="section_subtitle">How can we help?</div>
            <div className="section_subtitle">Subscribe to emails</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
