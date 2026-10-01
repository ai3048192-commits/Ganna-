import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [enteredCode, setEnteredCode] = useState('');
  const [error, setError] = useState(false);

  // الكود السري (1310)
  const correctCode = '1310';

  // حروف كلمة جنة تظهر بالترتيب من اليمين للشمال (ج - ن - ة - ♥)
  const letters = ['♥', 'ة', 'ن', 'ج']; // من اليمين للشمال (المربع الأول من اليمين هياخد أول حرف يتكتب)

  // دالة الضغط على الأرقام
  const handleNumberClick = (num) => {
    setError(false);
    if (enteredCode.length < 4) {
      const newCode = enteredCode + num;
      setEnteredCode(newCode);
      
      // لو وصل لـ 4 أرقام نتأكد صح ولا غلط
      if (newCode.length === 4) {
        if (newCode === correctCode) {
          setTimeout(() => {
            onLoginSuccess(); // الدخول للموقع
          }, 300);
        } else {
          setError(true);
          setTimeout(() => {
            setEnteredCode('');
            setError(false);
          }, 800); // يمسح الرقم لو غلط ويهتز شوية
        }
      }
    }
  };

  // دالة مسح رقم (Backspace)
  const handleDelete = () => {
    setEnteredCode(enteredCode.slice(0, -1));
    setError(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* خلفية "جنه" المتحركة الكبيرة في الخلفية */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <h1 className="text-[20vw] font-black text-purple-800/30 select-none animate-slow-bg-kenburns">
          جنة
        </h1>
        {/* نجوم وقلوب خلفية إضافية */}
        <span className="absolute text-5xl animate-pulse top-10 left-10 text-purple-700">💜</span>
        <span className="absolute text-6xl animate-bounce bottom-10 right-10 text-indigo-600">✨</span>
      </div>

      {/* كارت تسجيل الدخول بحجم طبيعي ومتناسق */}
      <div className="relative z-10 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-sm text-center border border-purple-100">
        
        {/* أيقونة القلب */}
        <div className="w-16 h-16 bg-purple-50 mx-auto rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner border-2 border-purple-100">
          💜
        </div>
        
        <h1 className="text-2xl font-bold text-purple-950 mb-2">أول ما تحسي إني وحشتك</h1>
        <p className="text-sm text-purple-700/80 mb-6 font-medium leading-relaxed">
          خشي هنا، هتلاقي حتة من قلبي مستنياكي، وهتفتكريني دايماً 💜
        </p>

        {/* شاشة عرض الرموز (من اليمين للشمال: [3], [2], [1], [0]) */}
        <div className={`flex flex-row-reverse justify-center gap-3 mb-6 transition-transform ${error ? 'animate-horizontal-shake text-red-500' : ''}`}>
          {[0, 1, 2, 3].map((index) => {
            // عشان نربط الحرف بالمربع حسب اتجاه اليمين للشمال
            const charIndex = enteredCode.length - 1 - index;
            const hasChar = charIndex >= 0 && charIndex < enteredCode.length;
            
            return (
              <div
                key={index}
                className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                  hasChar
                    ? 'border-purple-600 bg-purple-600 text-white shadow-md shadow-purple-500/30 scale-105' 
                    : 'border-purple-100 bg-purple-50/50 text-purple-300'
                }`}
              >
                {/* بيعرض الحرف المقابل بالترتيب من اليمين */}
                {hasChar ? letters[enteredCode.length - 1 - index] : ''}
              </div>
            );
          })}
        </div>

        {error && <p className="text-red-500 text-xs mb-4 font-semibold animate-pulse">الكود مش مظبوط يا غالية، جربي تاني 🌹❌</p>}

        {/* لوحة المفاتيح (Keypad) - تصميم أزرار فخم بستايل ناعم ومريح */}
        <div className="grid grid-cols-3 gap-3 mb-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="h-14 bg-gradient-to-b from-purple-50/80 to-purple-100/50 hover:from-purple-100 hover:to-purple-200 active:scale-95 text-purple-950 font-bold text-xl rounded-2xl transition-all shadow-sm flex items-center justify-center cursor-pointer border border-purple-200/60"
            >
              {num}
            </button>
          ))}

          {/* زرار فاضي للتنسيق */}
          <div></div>

          {/* رقم 0 */}
          <button
            onClick={() => handleNumberClick('0')}
            className="h-14 bg-gradient-to-b from-purple-50/80 to-purple-100/50 hover:from-purple-100 hover:to-purple-200 active:scale-95 text-purple-950 font-bold text-xl rounded-2xl transition-all shadow-sm flex items-center justify-center cursor-pointer border border-purple-200/60"
          >
            0
          </button>

          {/* زرار المسح (Backspace) - ستايل مميز وناعم */}
          <button
            onClick={handleDelete}
            className="h-14 bg-gradient-to-b from-rose-50/80 to-rose-100/50 hover:from-rose-100 hover:to-rose-200 active:scale-95 text-rose-700 font-bold text-sm rounded-2xl transition-all shadow-sm flex items-center justify-center cursor-pointer border border-rose-200/60"
          >
            مسح
          </button>
        </div>

      </div>

      {/* إضافة Keyframes للأنيميشن */}
      <style>{`
        @keyframes slow-bg-kenburns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(-2%, -2%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-slow-bg-kenburns {
          animation: slow-bg-kenburns 15s ease-in-out infinite alternate;
        }
        @keyframes horizontal-shake {
          0% { transform: translateX(0) }
          25% { transform: translateX(8px) }
          50% { transform: translateX(-8px) }
          75% { transform: translateX(8px) }
          100% { transform: translateX(0) }
        }
        .animate-horizontal-shake {
          animation: horizontal-shake 0.4s ease-in-out;
          animation-iteration-count: 1;
        }
      `}</style>
    </div>
  );
}