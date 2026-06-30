import { useEffect } from "react";

const ContactUs = () => {
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

  const contacts = [
    {
      label: "تلگرام",
      value: "@skylerwalker_x",
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
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
      ),
    },
    {
      label: "X (Twitter)",
      value: "@skylerwalker4199",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
        </svg>
      ),
    },
    {
      label: "ایمیل",
      value: "skyler.walker4199@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
    {
      label: "پشتیبانی",
      value: "+98 933 524 2103",
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
          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
          <path d="M12 11h.01" />
          <path d="M16 11h.01" />
          <path d="M8 11h.01" />
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
            تماس با ما
          </h2>
        </div>

        {/* Avatar */}
        <div className="flex justify-center py-6">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full border-2 border-green-700/25 animate-pulse" />
            <div className="absolute -inset-3 rounded-full border border-green-700/10 animate-pulse [animation-delay:0.6s]" />
            <img
              src="/images/logos/support.png"
              alt="پشتیبانی"
              className="relative w-24 h-24 rounded-full object-cover border-[3px] border-[#497d00] bg-green-50"
            />
            <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-[#6aab10] border-2 border-white" />
          </div>
        </div>

        {/* Contact rows */}
        <div className="px-4 pb-4 flex flex-col gap-2">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-green-700/13 bg-green-50/60 hover:bg-green-100/70 hover:border-green-700/30 hover:-translate-x-0.5 transition-all duration-200"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-green-700/10 flex items-center justify-center text-[#497d00]">
                {c.icon}
              </span>
              <div className="flex-1 min-w-0 text-right">
                <span className="block text-[10px] font-semibold text-[#6aab10] tracking-widest mb-0.5">
                  {c.label}
                </span>
                <span
                  className="block text-[13px] text-[#2e5000] leading-snug"
                  dir="ltr"
                >
                  {c.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-green-700/10 bg-green-50 px-5 py-3 text-center">
          <p className="text-[11px] text-green-700/50 tracking-wide">
            پاسخگوی شما هستیم — ۲۴ ساعته، ۷ روز هفته
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
