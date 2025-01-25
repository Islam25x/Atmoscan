import React from 'react'
import { motion } from "framer-motion";
const CircleAnimation1 = () => {
    return (
      <motion.svg
        className="circle1"
        height="1500"
        viewBox="0 0 120 120"
      >
        {/* الأنيميشن من الجهة اليمنى */}
        <motion.circle
          cx="60" // مركز الدائرة على محور X
          cy="60" // مركز الدائرة على محور Y
          r="50" // نصف قطر الدائرة
          fill="none" // بدون تعبئة
          stroke="#3498db" // لون الحدود
          strokeWidth="1" // سماكة الحدود
          strokeDasharray="314" // طول الحدود الكلي (2 * π * نصف القطر)
          strokeDashoffset="314" // يبدأ الأنيميشن مخفي تمامًا
          animate={{ strokeDashoffset: 157 }} // يتحرك تدريجيًا إلى نصف المحيط من الجهة اليمنى
          transition={{
            duration: 2, // مدة الحركة: ثانيتان
            ease: "easeInOut", // نمط الحركة
          }}
        />
        
        {/* الأنيميشن من الجهة اليسرى */}
        <motion.circle
          cx="60" // مركز الدائرة على محور X
          cy="60" // مركز الدائرة على محور Y
          r="50" // نصف قطر الدائرة
          fill="none" // بدون تعبئة
          stroke='#5886e2' // لون الحدود الثاني
          strokeWidth="1" // سماكة الحدود
          strokeDasharray="314" // طول الحدود الكلي
          strokeDashoffset="314" // يبدأ الأنيميشن مخفي تمامًا
          animate={{ strokeDashoffset: 157 }} // يتحرك تدريجيًا إلى نصف المحيط من الجهة اليسرى
          transition={{
            duration: 2, // مدة الحركة: ثانيتان
            ease: "easeInOut", // نمط الحركة
          }}
        />
      </motion.svg>
    );
  };

export default CircleAnimation1