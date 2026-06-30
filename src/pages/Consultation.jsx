import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Consultation.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ASSESSMENT_LABELS = {
  ot:     'Occupational Therapy',
  physio: 'Physiotherapy',
  speech: 'Speech Therapy',
  psych:  'Psychological Assessment (Developmental Assessment)',
  school: 'School Readiness Assessment',
};

const THERAPY_LABELS = {
  ot:          'Occupational Therapy',
  speech:      'Speech Therapy',
  behavioural: 'Behavioral Therapy',
  physio:      'Physiotherapy',
  'special-ed':'Special Education',
  uddeshya:    'Uddeshya',
  feeding:     'Feeding Therapy',
};

const SERVICE_LABELS = {
  consultation: 'Consultation',
  assessments:  'Assessments',
  therapy:      'Therapy',
};

const CONSULT_TYPE_LABELS = {
  online:       'Online Consultation',
  'face-to-face':'Face to Face Consultation',
};

export default function Consultation() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', age: '',
    service: '', consultationType: '', assessmentType: '', therapyType: ''
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Build a human-readable summary for the email template
    const templateParams = {
      to_email:         'kaushikthakur390@gmail.com',
      child_name:       form.fullName,
      parent_email:     form.email,
      phone:            form.phone,
      child_age:        form.age,
      service:          SERVICE_LABELS[form.service]       || form.service       || '—',
      consultation_type: CONSULT_TYPE_LABELS[form.consultationType] || form.consultationType || '—',
      assessment_type:  ASSESSMENT_LABELS[form.assessmentType] || form.assessmentType || '—',
      therapy_type:     THERAPY_LABELS[form.therapyType]   || form.therapyType   || '—',
      submitted_at:     new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      // Reset form after success
      setForm({
        fullName: '', email: '', phone: '', age: '',
        service: '', consultationType: '', assessmentType: '', therapyType: ''
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

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

          {/* ── Success Banner ── */}
          {status === 'success' && (
            <div className="consult-banner consult-banner--success">
              ✅ Your consultation request has been submitted! We will contact you soon.
            </div>
          )}

          {/* ── Error Banner ── */}
          {status === 'error' && (
            <div className="consult-banner consult-banner--error">
              ❌ Something went wrong. Please try again or call us directly.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="consult-form">
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
              <button
                type="submit"
                className={`consult-submit-btn${status === 'sending' ? ' consult-submit-btn--loading' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'SENDING…' : 'SUBMIT'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
