import { useState, useRef, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./../../data/products";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = "همه" | "سایه‌بان" | "گلدان" | "آتشدان" | "صندلی" | "چراغ";

interface ProductColor {
  label: string;
  hex: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  features: { public: string[]; technical: string[] };
  images: { normal: string[]; bordered: string[] };
  category: Category;
  brand?: string;
  discount?: number;
  colors?: ProductColor[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatPrice = (v: number) => v.toLocaleString("fa-IR");
const discountedPrice = (price: number, discount?: number) =>
  discount ? Math.round(price - price * (discount / 100)) : price;

// ─── Image Gallery ────────────────────────────────────────────────────────────
const ImageGallery = ({
  images,
  borderedImages,
  title,
}: {
  images: string[];
  borderedImages: string[];
  title: string;
}) => {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const prev = useCallback(
    () => setActive((a) => (a - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setActive((a) => (a + 1) % images.length),
    [images.length],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > 40 && dy < 60) dx > 0 ? prev() : next();
  };

  // Use bordered image for main display, fall back to normal if not available
  const mainSrc = borderedImages[active] ?? images[active];

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Main image — uses bordered version */}
        <div
          className="relative w-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 cursor-zoom-in select-none"
          style={{ aspectRatio: "4/3" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={() => setLightbox(true)}
        >
          {/* Blurred bg fills empty sides */}
          <img
            key={`bg-${active}`}
            src={mainSrc}
            alt=""
            aria-hidden={true}
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{ filter: "blur(20px) brightness(0.8) saturate(0.6)" }}
            draggable={false}
          />
          {/* Sharp product image */}
          <img
            key={active}
            src={mainSrc}
            alt={title}
            className="relative w-full h-full object-contain drop-shadow-lg"
            draggable={false}
          />

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 shadow flex items-center justify-center text-gray-500 hover:bg-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 shadow flex items-center justify-center text-gray-500 hover:bg-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`block w-1.5 h-1.5 rounded-full transition-all ${i === active ? "bg-blue-400 w-3" : "bg-gray-300"}`}
                />
              ))}
            </div>
          )}

          {/* Zoom hint */}
          <div className="absolute top-2 left-2 bg-white/70 rounded-md px-1.5 py-0.5 text-[10px] text-gray-600">
            بزرگ‌نمایی
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div
            className="flex justify-center gap-2 overflow-x-auto pb-1 pt-0.5 px-0.5"
            style={{ scrollbarWidth: "none" }}
          >
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-1 h-14 min-w-0 max-w-20 rounded-xl overflow-hidden border-2 transition-all duration-150 bg-gray-100 shadow-sm ${
                  active === i
                    ? "border-blue-400 shadow-blue-100"
                    : "border-transparent hover:border-gray-300 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`${title} - ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 40) dx > 0 ? prev() : next();
          }}
        >
          {/* Close */}
          <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-white/60">
            {active + 1} / {images.length}
          </span>

          {/* Image */}
          <img
            key={active}
            src={images[active]}
            alt={title}
            className="max-w-full max-h-full object-contain p-4"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto p-2"
            style={{ scrollbarWidth: "none", maxWidth: "min(90vw, 480px)" }}
          >
            {images.map((src, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(i);
                }}
                className={`flex-1 min-w-16 max-w-20 rounded-xl overflow-hidden border-2 transition-all duration-150 bg-white/10 shadow-sm ${i === active ? "border-blue-400 shadow-blue-100" : "border-white/20 opacity-70 hover:opacity-100 hover:border-white/40"}`}
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// ─── Color Selector ───────────────────────────────────────────────────────────
const ColorSelector = ({
  colors,
  selected,
  onChange,
}: {
  colors: ProductColor[];
  selected: number;
  onChange: (i: number) => void;
}) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500">رنگ</span>
      <span className="text-xs font-medium text-gray-700">
        {colors[selected].label}
      </span>
    </div>
    <div className="flex gap-2 flex-wrap">
      {colors.map((color, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          title={color.label}
          className={`w-7 h-7 rounded-full border-2 transition-all duration-150 ${
            selected === i
              ? "border-blue-400 scale-110 shadow-md"
              : "border-gray-200 hover:border-gray-400"
          }`}
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </div>
  </div>
);

// ─── Counter ─────────────────────────────────────────────────────────────────
const Counter = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) => (
  <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden w-fit">
    <button
      onClick={() => onChange(Math.max(1, value - 1))}
      className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-gray-50 active:bg-gray-100 transition-colors text-lg leading-none"
    >
      −
    </button>
    <span className="w-10 h-9 flex items-center justify-center text-sm font-semibold text-gray-700 border-x border-gray-200">
      {value}
    </span>
    <button
      onClick={() => onChange(value + 1)}
      className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-gray-50 active:bg-gray-100 transition-colors text-lg leading-none"
    >
      +
    </button>
  </div>
);

// ─── SVG Icon components ──────────────────────────────────────────────────────
const Icon = ({ d, size = 16 }: { d: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {d.split(" M").map((segment, i) => (
      <path key={i} d={i === 0 ? segment : "M" + segment} />
    ))}
  </svg>
);

// ─── Public feature categories (position-based, 4 fixed slots) ───────────────
// Slot 0: Space / location suitability
// Slot 1: Protection (what it protects against)
// Slot 2: Resistance (what it resists)
// Slot 3: Design style / standards compliance

// ─── Land Plot SVG Icon (for Slot 0 — location suitability) ──────────────────
const LandPlotIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 8 6-3-6-3v10" />
    <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
    <path d="m6.49 12.85 11.02 6.3" />
    <path d="M17.51 12.85 6.5 19.15" />
  </svg>
);

const PUBLIC_SLOTS: {
  label: string;
  icon: string;
  CustomIcon?: React.FC<{ size?: number }>;
}[] = [
  {
    label: "مکان مناسب",
    icon: "",
    CustomIcon: LandPlotIcon,
  },
  {
    label: "محافظت در برابر",
    // shield with check — protection against threats
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10 M9 12l2 2 4-4",
  },
  {
    label: "مقاومت",
    // dumbbell — physical strength and resistance
    icon: "M6.5 6.5h11 M6.5 17.5h11 M3 9.5h3v5H3z M18 9.5h3v5h-3z M6.5 12h11",
  },
  {
    label: "طراحی و استاندارد",
    // pen-tool / nib — design craft and standards compliance
    icon: "M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586 M11 11a2 2 0 100-4 2 2 0 000 4",
  },
];

const classifyPublic = (
  _: string,
  index: number,
): {
  icon: string;
  label: string;
  CustomIcon?: React.FC<{ size?: number }>;
} => {
  const slot = PUBLIC_SLOTS[index] ?? {
    label: "ویژگی",
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2z M12 8v4 M12 16h.01",
  };
  return { icon: slot.icon, label: slot.label, CustomIcon: slot.CustomIcon };
};

// ─── Technical spec parser (position-based, 6 fixed slots) ──────────────────
// Slot 0: Product type (material)
// Slot 1: Energy source
// Slot 2: Coating type
// Slot 3: Dimensions
// Slot 4: Weight
// Slot 5: Thickness  (optional — only some products have it)

const TECHNICAL_SLOTS: { label: string; icon: string }[] = [
  {
    label: "نوع محصول",
    // package / box
    icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12",
  },
  {
    label: "منبع انرژی",
    // bolt / zap
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8",
  },
  {
    label: "نوع پوشش",
    // paint-roller — surface coating, paint, lacquer, powder coat
    icon: "M4 2 L16 2 A2 2 0 0 1 18 4 L18 6 A2 2 0 0 1 16 8 L4 8 A2 2 0 0 1 2 6 L2 4 A2 2 0 0 1 4 2 Z M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2 M9 16 L11 16 A1 1 0 0 1 12 17 L12 21 A1 1 0 0 1 11 22 L9 22 A1 1 0 0 1 8 21 L8 17 A1 1 0 0 1 9 16 Z",
  },
  {
    label: "ابعاد",
    // ruler / resize
    icon: "M21 3H3 M21 21H3 M3 3v18 M21 3v18 M8 3v2 M8 19v2 M16 3v2 M16 19v2 M3 8h2 M19 8h2 M3 16h2 M19 16h2",
  },
  {
    label: "وزن",
    // weight / kettlebell (was previously a mismatched shopping-bag path)
    icon: "M9 5 A3 3 0 0 1 15 5 A3 3 0 0 1 9 5 Z M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.5 8Z",
  },
  {
    label: "ضخامت",
    // layers
    icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  },
];

const parseTechnical = (items: string[]) =>
  items.map((item, index) => {
    const slot = TECHNICAL_SLOTS[index] ?? {
      label: "مشخصه",
      icon: "M12 2a10 10 0 100 20A10 10 0 0012 2z M12 8v4 M12 16h.01",
    };
    return {
      type: slot.label,
      label: slot.label,
      icon: slot.icon,
      value: item,
    };
  });

// ─── Features Accordion ───────────────────────────────────────────────────────
const FeaturesAccordion = ({ features }: { features: Product["features"] }) => {
  const [open, setOpen] = useState<"public" | "technical" | null>("public");

  const sections = [
    { key: "public" as const, label: "ویژگی‌ها" },
    { key: "technical" as const, label: "مشخصات فنی" },
  ];

  const technicalItems = parseTechnical(features.technical);

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 divide-y divide-gray-200">
      {sections.map((s) => {
        const isOpen = open === s.key;
        return (
          <div key={s.key} className="bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : s.key)}
              className="w-full flex items-center justify-between px-4 py-3 text-right"
            >
              <span
                className={`text-sm font-semibold transition-colors duration-200 ${isOpen ? "text-gray-800" : "text-gray-400"}`}
              >
                {s.label}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition:
                  "grid-template-rows 0.32s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                {s.key === "public" ? (
                  <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.public.map((item, i) => {
                      const { icon, label, CustomIcon } = classifyPublic(
                        item,
                        i,
                      );
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5"
                        >
                          <div className="w-7 h-7 rounded-lg bg-gray-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                            {CustomIcon ? (
                              <CustomIcon size={14} />
                            ) : (
                              <Icon d={icon} size={14} />
                            )}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] text-gray-400 leading-none mb-0.5">
                              {label}
                            </span>
                            <span className="text-xs font-semibold text-gray-700 leading-snug text-right wrap-break-word">
                              {item}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {technicalItems.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5"
                      >
                        <div className="w-7 h-7 rounded-lg bg-gray-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Icon d={spec.icon} size={14} />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] text-gray-400 leading-none mb-0.5">
                            {spec.label}
                          </span>
                          <span className="text-xs font-semibold text-gray-700 wrap-break-word text-right">
                            {spec.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ─── Product Detail ───────────────────────────────────────────────────────────
function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id)) as
    | Product
    | undefined;

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <p className="text-sm text-gray-400">محصول یافت نشد</p>
        <Link to="/products" className="text-xs text-blue-500 hover:underline">
          بازگشت به محصولات
        </Link>
      </div>
    );
  }

  const finalPrice = discountedPrice(product.price, product.discount);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-3">
      {/* Back */}
      <Link
        to="/products"
        className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-blue-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="size-3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        بازگشت به محصولات
      </Link>

      {/* ── Two-column on md+, stacked on mobile ── */}
      <div className="md:grid md:grid-cols-2 md:gap-3 md:items-stretch space-y-3 md:space-y-0">
        {/* Left col: Gallery */}
        <div className="bg-gray-100  border-2 rounded-lg p-3 shadow-sm">
          <ImageGallery
            images={product.images.normal}
            borderedImages={product.images.bordered}
            title={product.title}
          />
        </div>

        {/* Right col: Info */}
        <div className="bg-gray-100 border-2 rounded-lg p-4 space-y-4">
          {/* Title + badge */}
          <div className="flex items-start justify-between gap-2">
            <h1 className="text-base font-bold text-gray-800 leading-snug text-right flex-1">
              {product.title}
            </h1>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] bg-blue-50 text-blue-500 border border-blue-100 rounded-md px-2 py-0.5 font-medium">
                {product.category}
              </span>
              {product.brand && (
                <span className="text-[10px] bg-emerald-50 text-emerald-500 border border-gray-200 rounded-md px-2 py-0.5 font-medium">
                  {product.brand}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed text-right">
            {product.description}
          </p>

          <div className="border-t border-gray-200" />

          {/* Features accordion */}
          <FeaturesAccordion features={product.features} />

          <div className="border-t border-gray-200" />

          {/* Price */}
          {product.discount ? (
            /* ── Discount mode ── */
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)",
              }}
            >
              {/* Grid texture */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="16"
                    height="16"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 16 0 L 0 0 0 16"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              <div className="relative px-4 py-4 flex items-center gap-4">
                {/* Discount stamp */}
                <div
                  className="shrink-0 flex flex-col items-center justify-center rounded-xl w-14 h-14 shadow-lg"
                  style={{
                    background: "oklch(53.2% 0.157 131.589)",
                    boxShadow: "0 0 24px oklch(53.2% 0.157 131.589 / 0.45)",
                  }}
                >
                  <span className="text-[18px] font-black text-white leading-none tracking-tighter">
                    {product.discount}٪
                  </span>
                  <span
                    className="text-[8px] font-bold tracking-[0.18em] mt-0.5 uppercase"
                    style={{ color: "oklch(85% 0.1 131.589)" }}
                  >
                    تخفیف
                  </span>
                </div>

                {/* Prices + savings */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-0" dir="rtl">
                  {/* Original price — struck through */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-500 line-through leading-none">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-[9px] text-gray-600">ریال</span>
                  </div>

                  {/* Final price — hero */}
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-[18px] font-black leading-none tracking-tight"
                      style={{ color: "oklch(80% 0.15 131.589)" }}
                    >
                      {formatPrice(finalPrice)}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      ریال
                    </span>
                  </div>

                  {/* Savings callout */}
                  <span className="text-[10px] text-gray-400 leading-relaxed">
                    صرفه‌جویی:{" "}
                    <span className="text-white font-semibold">
                      {formatPrice(product.price - finalPrice)} ریال
                    </span>
                  </span>

                  {/* Progress bar */}
                  <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${product.discount}%`,
                        background: "oklch(53.2% 0.157 131.589)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ── No discount: clean price card ── */
            <div
              className="rounded-2xl px-4 py-4 flex items-center justify-between"
              style={{
                background: "linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)",
              }}
            >
              <div className="flex flex-col gap-0.5" dir="rtl">
                <span className="text-[10px] text-gray-500">قیمت محصول</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[18px] font-black tracking-tight leading-none text-white">
                    {formatPrice(finalPrice)}
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">
                    ریال
                  </span>
                </div>
              </div>
              {/* Decorative tag icon */}
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200" />

          {/* Color selector */}
          {product.colors && product.colors.length > 0 && (
            <>
              <ColorSelector
                colors={product.colors}
                selected={selectedColor}
                onChange={setSelectedColor}
              />
              <div className="border-t border-gray-200" />
            </>
          )}

          {/* Counter + Add to cart */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-gray-400">تعداد</span>
              <Counter value={count} onChange={setCount} />
            </div>
            <button
              onClick={handleAddToCart}
              className={`w-full h-12 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center ${
                added
                  ? "bg-green-500 text-white scale-95"
                  : "bg-gray-800 text-white hover:bg-gray-700 active:scale-95"
              }`}
            >
              {added ? "افزوده شد" : "افزودن به سبد خرید"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Similar Products ─────────────────────────────────────────────────────────
const SimilarProducts = ({
  currentId,
  category,
}: {
  currentId: number;
  category: Category;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const similar = (products as Product[]).filter(
    (p) => p.category === category && p.id !== currentId,
  );

  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.pageX - startX.current;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  };

  const onMouseUp = () => {
    if (!trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    trackRef.current.style.userSelect = "";
  };

  if (similar.length === 0) return null;

  return (
    <div className="bg-gray-100 border-2 rounded-lg p-3 space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-semibold text-gray-700">
          محصولات مشابه · {category}
        </h2>
        <span className="text-[10px] text-gray-400 bg-white border border-gray-200 rounded-md px-1.5 py-0.5">
          {similar.length}
        </span>
      </div>

      {/* Track */}
      <style>{`
        .similar-track { scrollbar-width: none; }
        .similar-track::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="overflow-x-hidden">
        <div
          ref={trackRef}
          className="similar-track flex gap-2.5 overflow-x-auto pb-2"
          style={{ cursor: "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {similar.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-32 sm:w-36 bg-white rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 active:brightness-95"
            >
              <Link
                to={`/product/${product.id}`}
                draggable={false}
                className="block"
              >
                <div className="w-full aspect-square p-1 pb-0">
                  <img
                    src={product.images.bordered[0]}
                    alt={product.title}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>
              </Link>
              <div className="p-2 space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <p className="text-[11px] font-medium text-gray-700 text-right truncate leading-relaxed flex-1">
                    {product.title}
                  </p>
                  {product.discount && (
                    <span className="shrink-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md leading-none">
                      %{product.discount}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  {product.discount && (
                    <span
                      className="text-[10px] text-gray-300 line-through leading-none"
                      dir="ltr"
                    >
                      {formatPrice(product.price)}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1 justify-end">
                    <span className="text-[10px] text-gray-400 leading-none">
                      ریال
                    </span>
                    <span
                      className="text-xs font-bold text-gray-800 leading-none"
                      dir="ltr"
                    >
                      {formatPrice(
                        discountedPrice(product.price, product.discount),
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-2 mt-auto">
                <Link
                  to={`/product/${product.id}`}
                  className="block w-full text-center text-[11px] font-medium text-blue-500 border border-blue-200 rounded-lg py-1.5 hover:bg-blue-50 transition-colors"
                >
                  مشاهده
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
const ProductID = () => {
  const { id } = useParams<{ id: string }>();
  const product = (products as Product[]).find((p) => p.id === Number(id));

  return (
    <div className="space-y-3">
      <ProductDetail />
      {product && (
        <SimilarProducts currentId={product.id} category={product.category} />
      )}
    </div>
  );
};

export default ProductID;
