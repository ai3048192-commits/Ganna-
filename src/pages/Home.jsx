import React, { useState } from 'react';
import ganaImage from '../assets/gana.jpeg';
import ganaImage2 from '../assets/gana2.jpeg';

export default function Home({ onLogout }) {
  const [openCard, setOpenCard] = useState(null);
  
  // التعديل هنا: هذه الـ States الآن تتحكم في التبديل بين النص والصورة في سكشن الصور
  const [showImageText1, setShowImageText1] = useState(false);
  const [showImageText2, setShowImageText2] = useState(false);

  const handleCardClick = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  // دالة تسجيل الخروج والرجوع لصفحة Login
  const handleGoBack = () => {
    localStorage.removeItem('engaged_auth');
    if (onLogout) {
      onLogout();
    } else {
      window.location.reload();
    }
  };

  // بيانات الكروت النصية مرتبة ومنظمة
  const cardsData = [
    {
      id: 1,
      title: "اول المره نزلنا الزمالك",
      content: (
        <div className="space-y-3 text-right text-[#ded3ed] text-sm leading-relaxed">
          <p>أنا فاكر اليوم ده كله، فاكر كل حاجة حصلت فيه، فاكر الكلام اللي قلناه، ولما اتمشينا كتير وقعدنا تحت الكوبري وشربنا شاي.</p>
          <div className="bg-[#171021] border-r-4 border-[#8b65bc] p-3 rounded-xl text-[#f5f0fb] font-medium">
            اليوم ده هيفضل في قلبي؛ علشان وقتها أنا حسيت إنك بتحبيني بجد، وإني فارق معاكي بجد، فاهمني؟
          </div>
          <p className="text-[#c9b5e2]">عايز أقول إن اليوم ده من أهم أيام حياتي كلها، وأنا بحب اليوم ده جداً.</p>
        </div>
      )
    },
    {
      id: 2,
      title: "تاني المره  نزلنا في الزمالك",
      content: (
        <div className="space-y-3 text-right text-[#ded3ed] text-sm leading-relaxed">
          <p>اليوم ده محفورة في قلبي باللي حصل فيه، ولأول مرة نكون قريبين من بعض بالشكل ده، أنا مكنتش متخيل كدا!</p>
          <p>أه كانت جراءة مني أنا أبوسك، بس أنا كنت عايز أعمل كدا وحاسس بيكي، فاهمني؟</p>
          <div className="bg-[#171021] border-r-4 border-[#8b65bc] p-3 rounded-xl text-[#f5f0fb] font-medium">
            وقتها كنا محتاجين اليوم ده جداً؛ لأننا كنا بايزين جداً.. وأنا عايز أقول إني بحبك، وبحب كل تفصيلة احنا عايشينها سوا، وبحب كل حاجة فيكي جداً.
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "أنا بعمل كده ليه؟ 🤍",
      content: (
        <div className="space-y-3 text-right text-[#ded3ed] text-sm leading-relaxed">
          <p>أنا بعمل كده علشان إنتي تستاهلي كل حاجة أنا بعملها، وتستاهلي أني أحاول علشانك حتى لو مع بعض.. أنا بعمل كده لأنك واحدة نضيفة من جواكي، وتستاهلي اللي يحبك بجد.</p>
          <p>أنا بحبحس إنك تستاهلي أكتر من كده بكتير، وإني أنا كده معملتش حاجة أصلاً، إنتي تستاهلي حتة من الجنة على فكرة! لما كنت بحكي لستتي عنك، كانت مسميكي "حور الجنة".. وده بيخليني لما أتكلم في أي وقت عايز أقول عايز أقوله عن "حور الجنة" اللي شوفتها إمبارح وكانت بتفهمني. ربنا يرحمها يارب.</p>
          <p>على فكرة أنا بحمد ربنا كل مرة إنك دخلتي حياتي؛ كل اللي أنا فيه ده سببه ربنا الأول، وإنتي ثانياً. بجد إنتي اللي خلتني أصل لكده بحبك وبدعمك وبدعواتك وتحفيزك وكل شي عملتيه.</p>
          <p>أنا فاكر يوم المطر بجد.. وقتها أنا حسيت إن قلبي اتخلع من مكانه علشان شوفتك كده، وأنا آسف إنك وقتها خلتك توصلي لكده بجد.</p>
          <div className="bg-[#171021] border-r-4 border-[#8b65bc] p-3 rounded-xl text-[#f5f0fb] font-medium">
            أنا عايز أقولك إني فخور بيكي بجد، وفخور بكل حاجة بتعمليها وهتعمليها.. وأنا عايز أقولك إني بحبك قوي 🤍
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "لما جيت أخدك..",
      content: (
        <div className="space-y-3 text-right text-[#ded3ed] text-sm leading-relaxed">
          <p>من قريب، لما جيت أخدك، لغاية لما ركبتي مكنتش مصدق فعلاً.. عشان مأضحكيش عليكي أنا مستغرب بجد ومبسوط.</p>
          <p>وأحكي بقى لما مسكت إيدك.. كنت خايف أعملها عشان متزعليش مني، وكانت إيدك حاسس بيها جنبي فقررت أمسكها. أول ما حسيت إيدك في إيدي، كأن كل هموم الدنيا راحت! والله حاسس إني كنت في عالم تاني خلاص، وبجد كنت في عالم أتمنى إني أفضل هناك على طول.</p>
          <p>علشان كده أنا بقى بيتقالي إني مجنون بيكي، وأنا مبسوط بكده جداً، وهفضل مكمل في كده برغم أي ظروف.</p>
          <div className="bg-[#171021] border-r-4 border-[#8b65bc] p-3 rounded-xl text-[#f5f0fb] font-medium">
            عايز أقول إنك هتفضلي محفورة في قلبي مهما عدت السنين.. أه ممكن مشكونش مع بعض دلوقتي، بس عمري ما هعرف أحب حد زيك ولا في أسلوبك دا أصلاً. أنا مش متخيل في يوم من الأيام إني أوصل لكده، إني أحب حد بالطريقة والأسلوب ده.
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "رسالة اعتذار من القلب 💌",
      content: (
        <div className="space-y-3 text-right text-[#ded3ed] text-sm leading-relaxed">
          <p>أنا آسف.. حقك عليا. أنا آسف إني معرفتش أحافظ عليكي، وآسف إني معرفتش أودّي العلاقة لطريق الصح. حقك عليا في كل مرة تسبب فيها بأذى ليكي، وحقك عليا في أي حاجة حصلت مني بجد.</p>
          <p>حابب أحكي عن رسالة.. أنا لما كتبتها كنت واثق إن جنة هتفهمني صح وهتفهم كل حاجة، بس اللي حصل عكس كدا.. بس عادي الحمد لله.</p>
          <p>أنا مش ندمان في أي مرة جيت قلتلك بحبك، ومش ندمان إني دخلتك حياتي، أنا فخور إني دخلتك حياتي وأنك بقيتي جزء كويس فيها.</p>
          <div className="bg-[#171021] border-r-4 border-[#8b65bc] p-3 rounded-xl text-[#f5f0fb] font-medium">
            أنا بحبك مهما حصل، ومكانك في قلبي دايماً محفوظ 🤍
          </div>
        </div>
      )
    }
  ];

  // بيانات الأماكن (خريطة ذكرياتنا)
  const specialPlaces = [
    {
      id: 1,
      title: "عباس (عند العربيات آخر الشارع)",
      icon: "🚗",
      description: "هناك كانت أول مرة أقولك فيها بحبك.. فاكر اليوم ده بتفاصيله وبحبه جداً."
    },
    {
      id: 2,
      title: "تاون سنتر (السلام)",
      icon: "🛍️",
      description: "يوم العيد لما تقابلنا هناك، وبجد بحب اليوم ده جداً."
    },
    {
      id: 3,
      title: "الزمالك (عند كلية الفنون)",
      icon: "🎨",
      description: "مقابلتنا في الزمالك عند كلية الفنون، مكان غالي وبحب اليوم ده أوي."
    },
    {
      id: 4,
      title: "التجمع الخامس (السينما)",
      icon: "🎬",
      description: "أول مرة أشاركك حاجة إنتي بتحبيها ودخلنا السينما، بحب اليوم ده لإننا كنا مع بعض."
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#15101f] text-[#ede6f5] selection:bg-[#8b65bc]/35 selection:text-white flex flex-col justify-between p-5 sm:p-8">
      
      {/* خلفية ضوئية ناعمة ومتوازنة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-[#3b2756]/20 via-[#1f162c]/10 to-transparent blur-[130px] pointer-events-none"></div>

      <div className="w-full max-w-3xl mx-auto py-6 space-y-8 relative z-10">
        
        {/* زر الرجوع للخلف فوق */}
        <div className="flex justify-start">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#21182e]/80 border border-[#36274b]/50 hover:border-[#8b65bc] text-[#c9b5e2] hover:text-white text-xs sm:text-sm transition-all duration-300 shadow-lg backdrop-blur-xl group cursor-pointer"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>الرجوع لتسجيل الدخول</span>
          </button>
        </div>

        {/* الترويسة (Header) */}
        <header className="text-center space-y-3 max-w-lg mx-auto">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#291f3b] border border-[#594278]/40 flex items-center justify-center shadow-md">
            <span className="text-xl">💜</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f0fb]">
            حكايتنا معاً
          </h1>
          <p className="text-[#a491bc] text-xs sm:text-sm leading-relaxed">
            مساحة هادئة تجمع تفاصيل ذكرياتنا وأجمل أيامنا الصادقة
          </p>
        </header>

        {/* التنويه العام */}
        <div className="text-center pt-2">
          <h2 className="text-sm font-semibold tracking-wider text-[#c9b5e2] uppercase">ذاكرة الأيام</h2>
          <p className="text-[#a491bc] text-xs mt-1">انقر على أي بطاقة أو سكشن لاسترجاع الحكاية</p>
        </div>

        {/* ================= عرض الكروت النصية بشكل منظم تلقائياً ================= */}
        <div className="space-y-6">
          {cardsData.map((card) => {
            const isOpen = openCard === card.id;
            return (
              <section key={card.id}>
                <div 
                  onClick={() => handleCardClick(card.id)}
                  className={`cursor-pointer transition-all duration-300 bg-[#21182e]/80 backdrop-blur-xl border rounded-3xl p-6 sm:p-7 shadow-xl hover:border-[#8b65bc]/60 relative overflow-hidden ${
                    isOpen ? 'border-[#8b65bc] bg-[#291e39]' : 'border-[#36274b]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-[#f5f0fb]">
                      {card.title}
                    </h3>
                    <span className={`text-xs text-[#a491bc] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#c9b5e2]' : ''}`}>
                      ▼
                    </span>
                  </div>

                  {isOpen && (
                    <div className="mt-5 pt-4 border-t border-[#36274b]/50 animate-fadeIn">
                      {card.content}
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        {/* ================= سكشن الصور المميزة مع التفاعل المطلوب ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* الكارد الأول */}
          <div className="bg-[#21182e]/80 backdrop-blur-xl border border-[#36274b]/50 rounded-3xl p-6 shadow-xl text-center space-y-5 flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-[#f5f0fb]">
              أحلى صورة بينا 
            </h3>

            {/* كونتينر الصورة */}
            <div 
              onClick={() => setShowImageText1(!showImageText1)} // التبديل عند الضغط
              className="cursor-pointer group relative w-full h-80 rounded-2xl overflow-hidden border-2 border-[#594278]/40 hover:border-[#8b65bc] transition-all duration-300 shadow-lg mx-auto bg-[#0f0a17] flex items-center justify-center p-2"
            >
              {/* الصورة (تظهر عند الـ Hover، وتختفي عند الضغط على الصورة) */}
              <img 
                src={ganaImage} 
                alt="أحلى صورة بينا 1" 
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 rounded-xl ${showImageText1 ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}
              />

              {/* طبقة النص (تظهر افتراضياً، وتختفي عند الـ Hover، وتظهر مرة أخرى عند الضغط) */}
              <div className={`absolute inset-0 bg-[#0f0a17]/95 p-5 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${showImageText1 ? 'opacity-100' : 'opacity-100 group-hover:opacity-0'}`}>
                <span className="text-xl">💜</span>
                <p className="text-[#ded3ed] text-sm leading-relaxed text-center">
                  أنا فاكر الصورة دي برغم إننا اتصورنا يومها صور حلوة كتير، بس هي دي أحلاهم الصراحة... انقر هنا لرؤية الحكاية كاملة.
                </p>
                <span className="text-[#8b65bc] text-xs font-medium">انقر لعرض الصورة</span>
              </div>
              
              {/* مؤشر توضيحي يظهر عند الـ Hover */}
              {!showImageText1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <span className="bg-[#8b65bc]/80 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm">اضغط لعرض النص</span>
                </div>
              )}
            </div>

            {/* مساحة النص التفصيلي (تظهر فقط عند الضغط على الصورة) */}
            {showImageText1 && (
              <div className="space-y-3 text-right animate-fadeIn text-[#ded3ed] text-sm leading-relaxed pt-3 border-t border-[#36274b]/50 mt-4">
                <p>
                  أنا فاكر الصورة دي برغم إننا اتصورنا يومها صور حلوة كتير، بس هي دي أحلاهم الصراحة؛ كانت أول مقابلة بينا بعد مرحلة مش أحسن حاجة لينا، كانت فترة كبيرة ومش مع بعض، وقتها كان شكلك جميل وحلو أوي بجد.
                </p>
                <p>
                  كل ما افتكر اليوم ده انبهر بجمالك كل مرة! أنا فاكر لما وصلنا إيه اللي حصل، لما طلعتي بره وقعدتي مع شهد واتكلمتوا، وأنا واقف ومحدش يعرف حاجة ولا عارفين نتكلم حتى.
                </p>
                <p>
                  بس دخلنا بقا الفرح واليوم عدى بحلاوتك وروحك، وفاكر لما خلاص كنا هنروح، سبت صحابي وجيت معاكي في العربية مع الحاج سيد علشان نكون مع بعض. الحاج سيد قعد يتكلم ويتريق عليا بعدين، وأنا فاكر وقعدنا نتكلم نتكلم كتير، وكانت أول مرة نقعد مع بعض بجد في اليوم ده.
                </p>
                <div className="bg-[#171021] border-r-4 border-[#8b65bc] p-3 rounded-xl text-[#f5f0fb] font-medium">
                  أنا وقتها كنت مبسوط بيكي، وعلى فكرة أنا مبسوط بيكي لغاية دلوقتي برضه.. أنا بحب الصورة دي أوي، وبحبك أوي 🤍
                </div>
                {/* زر إخفاء النص */}
                <button 
                  onClick={() => setShowImageText1(false)}
                  className="text-xs text-[#8b65bc] hover:text-white pt-2 transition-colors"
                >
                  إخفاء النص ▲
                </button>
              </div>
            )}
          </div>

          {/* الكارد الثاني (بنفس المنطق) */}
          <div className="bg-[#21182e]/80 backdrop-blur-xl border border-[#36274b]/50 rounded-3xl p-6 shadow-xl text-center space-y-5 flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-[#f5f0fb]">
              أحلى صورة ليكي انا بحبها  
            </h3>

            <div 
              onClick={() => setShowImageText2(!showImageText2)}
              className="cursor-pointer group relative w-full h-80 rounded-2xl overflow-hidden border-2 border-[#594278]/40 hover:border-[#8b65bc] transition-all duration-300 shadow-lg mx-auto bg-[#0f0a17] flex items-center justify-center p-2"
            >
              <img 
                src={ganaImage2} 
                alt="أحلى صورة بينا 2" 
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 rounded-xl ${showImageText2 ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}
              />
              <div className={`absolute inset-0 bg-[#0f0a17]/95 p-5 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${showImageText2 ? 'opacity-100' : 'opacity-100 group-hover:opacity-0'}`}>
                 <span className="text-xl">🤍</span>
                <p className="text-[#ded3ed] text-sm leading-relaxed text-center">
                  إنتي بجد أحلى حاجة موجودة.. شكلك قمر فعلاً، وأنا ربنا بيحبني عشان إنتي في حياتي.
                </p>
                <span className="text-[#8b65bc] text-xs font-medium">انقر لعرض الصورة</span>
              </div>
                {!showImageText2 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <span className="bg-[#8b65bc]/80 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm">اضغط لعرض النص</span>
                </div>
              )}
            </div>

            {showImageText2 && (
              <div className="space-y-3 text-right animate-fadeIn text-[#ded3ed] text-sm leading-relaxed pt-3 border-t border-[#36274b]/50 mt-4">
                <p>
                  أنا بحب شعرك أوي وبخاف عليه جداً، وعايز دايم يكون كويس وفي أحسن حال على قد ما أقدر.
                </p>
                <p>
                  إنتي بجد أحلى حاجة موجودة.. شكلك قمر فعلاً، وأنا ربنا بيحبني عشان إنتي في حياتي.
                </p>
                <div className="bg-[#171021] border-r-4 border-[#8b65bc] p-3 rounded-xl text-[#f5f0fb] ">
                  أه إحنا مش مع بعض دلوقتي، بس هيجي يوم وهنكون مع بعض، وأنا متأكد بكدا ومش هتنازل عنه 🤍
                </div>
                <button 
                  onClick={() => setShowImageText2(false)}
                  className="text-xs text-[#8b65bc] hover:text-white pt-2 transition-colors"
                >
                  إخفاء النص ▲
                </button>
              </div>
            )}
          </div>

        </section>

        {/* ================= سكشن خريطة ذكرياتنا والأماكن الغالية ================= */}
        <section className="bg-[#21182e]/80 backdrop-blur-xl border border-[#36274b]/50 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#f5f0fb]">
              🗺️ خريطة ذكرياتنا والأماكن الغالية
            </h3>
            <p className="text-[#a491bc] text-xs sm:text-sm">
              أماكن شهدت على أجمل اللحظات والذكريات اللي جمعتنا
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {specialPlaces.map((place) => (
              <div 
                key={place.id}
                className="bg-[#171021] border border-[#36274b]/60 rounded-2xl p-5 text-right space-y-3 hover:border-[#8b65bc]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#291e39] border border-[#594278]/40 flex items-center justify-center text-lg shadow-sm shrink-0">
                    {place.icon}
                  </div>
                  <h4 className="font-bold text-[#f5f0fb] text-sm sm:text-base">
                    {place.title}
                  </h4>
                </div>
                <p className="text-[#ded3ed] text-xs sm:text-sm leading-relaxed pr-1">
                  {place.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= سكشن رسالة خاصة ================= */}
        <section className="bg-gradient-to-br from-[#241a33] via-[#1c1427] to-[#15101f] border-2 border-[#8b65bc]/40 rounded-3xl p-7 sm:p-10 shadow-2xl relative overflow-hidde n text-right">
          {/* تأثيرات جمالية */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b65bc]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between border-b border-[#36274b] pb-4">
              <span className="text-xs text-[#a491bc] tracking-widest uppercase">رسالة خاصة وخالدة</span>
              <span className="text-xl">💌</span>
            </div>

            <div className="space-y-4 text-[#ded3ed] text-sm sm:text-base leading-loose">
              <p className="text-[#f5f0fb] font-semibold text-base sm:text-lg">إلى جنة، حبيب ايامي  التي دخلت حياتي .. 🤍</p>
              
              <p>
                لو في حاجة واحدة متأكد منها في الدنيا دي، فهي إن وجودك في حياتي مش صدفة، دي نعمة ربنا رزقني بيها عشان أعرف يعني ايه حب صادق وأسلوب نقي من جوه.
              </p>
              
              <p>
                عارف إننا ممكن نكون مش مع بعض دلوقتي بالصورة اللي انا عايزها  بس إنتي تفاصيلك كلها محفورة جوا قلبي؛ من أول يوم في عباس لحد 
                الزمالك والتجمع، كل دقيقة عشناها سوا بتسوى عندي الدنيا بحالها.
              </p>
              
              <p className="bg-[#15101f]/70 border-r-4 border-[#8b65bc] p-4 rounded-xl text-[#f5f0fb]  text-sm">
                "أنا مش ندمان على أي حاجة انا بعملها ليكي انتي تستاهلي  ولا على أي خطوة خطيتها عشانك..
                 ومكانك في قلبي دايماً محفوظ مهما عدت السنين، وهفضل مستني اليوم اللي نكون فيه مع بعض بجد."
              </p>

              <div className="pt-2 flex justify-between items-center text-xs text-[#a491bc] ">
                <span>بحبك بكل ما في قلبي</span>
                <span className="text-[#f5f0fb] font-bold">مُحبك دائماً 🤍</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= سكشن الأغنية المفضلة في الأسفل ================= */}
        <section className="bg-gradient-to-r from-[#21182e] via-[#291e39] to-[#21182e] backdrop-blur-xl border border-[#8b65bc]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#8b65bc]/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#36274b]/60 border border-[#8b65bc]/40 flex items-center justify-center shadow-md">
            <span className="text-xl">🎶</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#f5f0fb]">
              أغنيتنا المفضلة 🤍
            </h3>
            <p className="text-[#a491bc] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              هذه الأغنية تحمل ذكريات كل لحظة حلوة جمعتنا.. اضغط بالأسفل للاستماع إليها.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://www.youtube.com/watch?v=AcuHWDvoBuc&list=RDAcuHWDvoBuc&index=1&pp=8AUB" // استبدل هذا الرابط برابط الأغنية بتاعتك
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#724e9f] to-[#8b65bc] hover:from-[#8b65bc] hover:to-[#9c75ce] text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-[#8b65bc]/25 hover:scale-[1.02] cursor-pointer"
            >
              <span>استمع للأغنية الآن</span>
              <span className="text-lg">↗</span>
            </a>
          </div>
        </section>

      </div>

      {/* التذييل (Footer) */}
      <footer className="w-full text-center py-5 text-[#826e9c] text-xs border-t border-[#251b33] mt-12">
        مكانك محفوظ في قلبي مهما حصل 🤍
      </footer>
    </div>
  );
}
