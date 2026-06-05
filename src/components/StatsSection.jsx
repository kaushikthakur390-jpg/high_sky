import { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

function useCountUp(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function StatCard({ value, suffix = '', label, extraClass = '' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 2000, inView);

  return (
    <div ref={ref} className={`stat-item ${extraClass}`}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* top-left */}
        <StatCard value={1000} suffix="+" label="Kids Treated"        extraClass="stat-item--left stat-item--top" />
        <div className="stat-divider" />
        {/* top-right */}
        <StatCard value={2}    label="Branches"                       extraClass="stat-item--top" />
        <div className="stat-divider" />
        {/* bottom-left */}
        <StatCard value={98}   suffix="%" label={<>Happy Parent<br />Rating</>}          extraClass="stat-item--left" />
        <div className="stat-divider" />
        {/* bottom-right */}
        <StatCard value={6}    suffix="+" label={<>years of<br />experience</>} />
      </div>
    </section>
  );
}
