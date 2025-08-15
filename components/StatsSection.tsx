import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
  achievements: {
    title: string;
    count: number;
  }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ achievements }) => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-orange-600 mb-10">Our Achievements at luxury LRP cosmetics</h2>
      <div className="flex justify-around max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-orange-600 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">{achievement.title}</h3>
            <motion.div
              className="text-5xl font-extrabold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CountUp end={achievement.count} duration={2} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CountUp: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default StatsSection;