import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url('/images/background/main.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  const items = [
    {
      label: "دانشگاه",
      value: "دانشگاه آزاد اسلامی واحد یادگار امام",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M10 18v-7" />
          <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
          <path d="M14 18v-7" />
          <path d="M18 18v-7" />
          <path d="M3 22h18" />
          <path d="M6 18v-7" />
        </svg>
      ),
    },
    {
      label: "استاد",
      value: "جناب آقای پیام خداقلی",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      label: "واحد درسی",
      value: "طراحی واسط کاربری",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      ),
    },
    {
      label: "دانشجو",
      value: "زهرا صداقت خانیکی",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M12 7v14" />
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        </svg>
      ),
    },
    {
      label: "تاریخ ارائه",
      value: "۱۴۰۵/۰۳/۲۳",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
          <path d="M15 22v-5a1 1 0 0 1 1-1h5" />
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <path d="M3 10h18" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden border border-green-700/15 shadow-xl shadow-green-900/10">
        {/* Header */}
        <div className="bg-[#497d00] px-6 pt-7 pb-6 text-center">
          <h2 className="text-xl font-bold text-white tracking-wide">
            درباره ما
          </h2>
        </div>

        {/* Logo */}
        <div className="flex justify-center py-6">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full border-2 border-green-700/25 animate-pulse" />
            <div className="absolute -inset-3 rounded-full border border-green-700/10 animate-pulse [animation-delay:0.6s]" />
            <img
              src="/images/logos/univercity.png"
              alt="لوگو دانشگاه"
              className="relative w-24 h-24 rounded-full object-contain border-[3px] border-[#497d00] bg-green-50 p-1.5"
            />
          </div>
        </div>

        {/* Items */}
        <div className="px-4 pb-4 flex flex-col gap-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-green-700/13 bg-green-50/60 hover:bg-green-100/70 hover:border-green-700/30 hover:-translate-x-0.5 transition-all duration-200"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-green-700/10 flex items-center justify-center text-[#497d00]">
                {item.icon}
              </span>
              <div className="flex-1 min-w-0 text-right">
                <span className="block text-[10px] font-semibold text-[#6aab10] tracking-widest mb-0.5">
                  {item.label}
                </span>
                <span className="block text-[13px] text-[#2e5000] leading-snug">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-green-700/10 bg-green-50 px-5 py-3 text-center">
          <p className="text-[11px] text-green-700/50 tracking-wide">
            پروژه درس طراحی واسط کاربری — نیمسال ۱۴۰۵
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
