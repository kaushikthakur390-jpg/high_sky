import { useState } from 'react';
import './Consultation.css';

export default function Consultation() {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', age: '',
    service: '', consultationType: '', assessmentType: '', therapyType: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Your consultation request has been submitted! We will contact you soon.'); };

  return (
    <div className="consultation-page">
      {/* Top purple hero */}
      <div className="consult-hero">
        <h1>Book a Consultation</h1>
        <p>Fill in the form below and our team will get back to you shortly.</p>
      </div>

      <div className="consult-form-wrap">
        <div className="consult-form-card">
          <h2 className="consult-form-title">Consultation Form</h2>
          <form onSubmit={handleSubmit} className="consult-form">
            <div className="consult-form-row">
              <div className="consult-field">
                <label>Full Name of the Child</label>
                <input name="fullName" placeholder="Full Name of the Child" value={form.fullName} onChange={handleChange} required />
              </div>
              <div className="consult-field">
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="consult-form-row">
              <div className="consult-field">
                <label>Phone No.</label>
                <input name="phone" placeholder="Phone No." value={form.phone} onChange={handleChange} required />
              </div>
              <div className="consult-field">
                <label>Age of Child</label>
                <input name="age" placeholder="Age of Child" value={form.age} onChange={handleChange} required />
              </div>
            </div>

            <div className="consult-form-row">
              <div className="consult-field">
                <label>Our Service</label>
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">– Select –</option>
                  <option value="consultation">Consultation</option>
                  <option value="assessments">Assessments</option>
                  <option value="therapy">Therapy</option>
                </select>
              </div>
              <div className="consult-field">
                <label>Consultation Type</label>
                <select name="consultationType" value={form.consultationType} onChange={handleChange}>
                  <option value="">– Select –</option>
                  <option value="online">Online Consultation</option>
                  <option value="face-to-face">Face to Face Consultation</option>
                </select>
              </div>
            </div>

            <div className="consult-form-row">
              <div className="consult-field">
                <label>Assessments Types</label>
                <select name="assessmentType" value={form.assessmentType} onChange={handleChange}>
                  <option value="">– Select –</option>
                  <option value="ot">Occupational therapy</option>
                  <option value="physio">Physiotherapy</option>
                  <option value="speech">Speech therapy</option>
                  <option value="psych">Psychological assessment (developmental assessment)</option>
                  <option value="school">School readiness assessment</option>
                </select>
              </div>
              <div className="consult-field">
                <label>Therapy Types</label>
                <select name="therapyType" value={form.therapyType} onChange={handleChange}>
                  <option value="">– Select –</option>
                  <option value="ot">Occupational Therapy</option>
                  <option value="speech">Speech Therapy</option>
                  <option value="behavioural">Behavioral Therapy</option>
                  <option value="physio">Physiotherapy</option>
                  <option value="special-ed">Special Education</option>
                  <option value="uddeshya">Uddeshya</option>
                  <option value="feeding">Feeding Therapy</option>
                </select>
              </div>
            </div>

            <div className="consult-submit-row">
              <button type="submit" className="consult-submit-btn">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
