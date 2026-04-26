import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SavingsCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [consumption, setConsumption] = useState('');
  const [systemSize, setSystemSize] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill) || 0;
    const units = parseFloat(consumption) || 0;
    const size = parseFloat(systemSize) || 0;

    if (!bill || !units || !size) {
      return { annualSavings: 0, lifetimeSavings: 0, co2Saved: 0, paybackYears: 0 };
    }

    const perUnitCost = bill / units;
    const annualGeneration = size * 365 * 5;
    const annualSavings = annualGeneration * perUnitCost;
    const lifetimeSavings = annualSavings * 25;
    const co2Saved = size * 0.8 * 365 * 25;
    const systemCost = size * 40000;
    const paybackYears = systemCost / annualSavings;

    return { annualSavings, lifetimeSavings, co2Saved, paybackYears };
  };

  const handleCalculate = () => {
    if (monthlyBill && consumption && systemSize) {
      setShowResult(true);
    }
  };

  const { annualSavings, lifetimeSavings, co2Saved, paybackYears } = calculateSavings();

  return (
    <section
      id="calculator"
      style={{
        padding: '120px 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 168, 37, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <span style={{
            display: 'inline-block',
            color: '#f9a825',
            fontSize: '0.9rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '15px',
          }}>
            Solar Savings Calculator
          </span>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '20px',
          }}>
            See Your Solar Savings <span style={{
              background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Instantly
            </span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#b0b0b0',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Calculate the savings you can realise by switching to solar energy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%)',
            borderRadius: '25px',
            padding: '50px',
            border: '1px solid rgba(249, 168, 37, 0.2)',
            maxWidth: '700px',
            margin: '0 auto',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div style={{ display: 'grid', gap: '25px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                style={{ position: 'relative' }}
              >
                <label style={{ display: 'block', color: '#fff', marginBottom: '10px', fontWeight: 500, fontSize: '0.9rem' }}>
                  Monthly Electricity Bill (₹)
                </label>
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => {
                    setMonthlyBill(e.target.value);
                    setShowResult(false);
                  }}
                  placeholder="e.g. 10000"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(249, 168, 37, 0.3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#f9a825')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(249, 168, 37, 0.3)')}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} style={{ position: 'relative' }}>
                <label style={{ display: 'block', color: '#fff', marginBottom: '10px', fontWeight: 500, fontSize: '0.9rem' }}>
                  Monthly Consumption (kWh)
                </label>
                <input
                  type="number"
                  value={consumption}
                  onChange={(e) => {
                    setConsumption(e.target.value);
                    setShowResult(false);
                  }}
                  placeholder="e.g. 1000"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(249, 168, 37, 0.3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#f9a825')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(249, 168, 37, 0.3)')}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} style={{ position: 'relative' }}>
                <label style={{ display: 'block', color: '#fff', marginBottom: '10px', fontWeight: 500, fontSize: '0.9rem' }}>
                  System Size (kW)
                </label>
                <input
                  type="number"
                  value={systemSize}
                  onChange={(e) => {
                    setSystemSize(e.target.value);
                    setShowResult(false);
                  }}
                  placeholder="e.g. 10"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(249, 168, 37, 0.3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#f9a825')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(249, 168, 37, 0.3)')}
                />
              </motion.div>
            </div>

            <motion.button
              onClick={handleCalculate}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(249, 168, 37, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                color: '#0a0a1a',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '12px',
                fontSize: '1.05rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: '10px',
                boxShadow: '0 8px 30px rgba(249, 168, 37, 0.3)',
              }}
            >
              Calculate Savings
            </motion.button>
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              style={{ marginTop: '35px', paddingTop: '35px', borderTop: '1px solid rgba(249, 168, 37, 0.2)' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    background: 'rgba(249, 168, 37, 0.1)',
                    borderRadius: '15px',
                    padding: '25px',
                    textAlign: 'center',
                    border: '1px solid rgba(249, 168, 37, 0.2)',
                  }}
                >
                  <p style={{ color: '#b0b0b0', fontSize: '0.85rem', marginBottom: '10px' }}>Annual Savings</p>
                  <p style={{ color: '#f9a825', fontSize: '1.5rem', fontWeight: 700 }}>
                    ₹{annualSavings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    background: 'rgba(76, 175, 80, 0.1)',
                    borderRadius: '15px',
                    padding: '25px',
                    textAlign: 'center',
                    border: '1px solid rgba(76, 175, 80, 0.2)',
                  }}
                >
                  <p style={{ color: '#b0b0b0', fontSize: '0.85rem', marginBottom: '10px' }}>25-Year Savings</p>
                  <p style={{ color: '#4caf50', fontSize: '1.5rem', fontWeight: 700 }}>
                    ₹{lifetimeSavings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    background: 'rgba(0, 212, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '25px',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                  }}
                >
                  <p style={{ color: '#b0b0b0', fontSize: '0.85rem', marginBottom: '10px' }}>CO₂ Saved</p>
                  <p style={{ color: '#00d4ff', fontSize: '1.5rem', fontWeight: 700 }}>
                    {co2Saved.toLocaleString('en-IN', { maximumFractionDigits: 0 })} kg
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    background: 'rgba(255, 152, 0, 0.1)',
                    borderRadius: '15px',
                    padding: '25px',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 152, 0, 0.2)',
                  }}
                >
                  <p style={{ color: '#b0b0b0', fontSize: '0.85rem', marginBottom: '10px' }}>Payback Period</p>
                  <p style={{ color: '#ff9800', fontSize: '1.5rem', fontWeight: 700 }}>
                    {paybackYears.toFixed(1)} Years
                  </p>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  color: '#6b6b7b',
                  textAlign: 'center',
                  marginTop: '20px',
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                }}
              >
                *Estimated values. Actual savings may vary based on location, weather conditions, and system performance.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .container > div:last-child > div:first-child {
            grid-template-columns: 1fr !important;
          }
          .container > div:last-child > div:last-child > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </section>
  );
};

export default SavingsCalculator;