import React, { useState, useEffect } from "react";
import "./StarsAnimation.css"; // فایل CSS برای انیمیشن

const StarsAnimation = () => {
  const [isIdle, setIsIdle] = useState(false);
  const idleTime = 100; // 5 ثانیه غیرفعالی

  useEffect(() => {
    // تنظیم تایمر برای غیرفعال شدن
    const setIdleTimer = () => {
      setTimeout(() => {
        setIsIdle(true);
      }, idleTime);
    };

    setIdleTimer();
  }, []);

  return (
    <div className="stars-container">
      {isIdle && (
        <div className="stars">
          {[...Array(60)].map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                top: `${Math.random() * 100}%`, // موقعیت تصادفی
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`, // تاخیر تصادفی
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StarsAnimation;
