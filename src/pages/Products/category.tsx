import { useRef, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "./../../data/products";

type Category = "همه" | "سایه‌بان" | "گلدان" | "آتشدان" | "صندلی" | "چراغ";

type Brand = "سولارا" | "ولوره" | "آرئون" | "نووارا" | "ونتورا" | "والورا";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  features: {
    public: string[];
    technical: string[];
  };
  images: { normal: string[]; bordered: string[] };
  category: Category;
  brand: Brand;
  colors: { label: string; hex: string }[];
  discount?: number;
}

const CATEGORIES: Category[] = [
  "همه",
  "سایه‌بان",
  "گلدان",
  "آتشدان",
  "صندلی",
  "چراغ",
];
const BRANDS: Brand[] = [
  "سولارا",
  "ولوره",
  "آرئون",
  "نووارا",
  "ونتورا",
  "والورا",
];
const PAGE_SIZE_OPTIONS = [6, 12, 24, 48];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatPrice = (value: number): string => value.toLocaleString("fa-IR");

const fuzzyMatch = (query: string, target: string): boolean => {
  if (!query) return true;
  let qi = 0;
  for (let i = 0; i < target.length && qi < query.length; i++) {
    if (target[i] === query[qi]) qi++;
  }
  return qi === query.length;
};

// ─── Special Offers ───────────────────────────────────────────────────────────
const SpecialOffers = ({ initialCategory }: { initialCategory?: Category }) => {
  const specialProducts: Product[] = products.filter((p): p is Product => {
    const matchCat =
      !initialCategory ||
      initialCategory === "همه" ||
      p.category === initialCategory;
    return (p as Product).discount !== undefined && matchCat;
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const rafId = useRef<number>(0);

  const applyMomentum = () => {
    if (!trackRef.current) return;
    velocity.current *= 0.92;
    trackRef.current.scrollLeft += velocity.current;
    if (Math.abs(velocity.current) > 0.5)
      rafId.current = requestAnimationFrame(applyMomentum);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    cancelAnimationFrame(rafId.current);
    isDragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    velocity.current = lastX.current - e.clientX;
    lastX.current = e.clientX;
    trackRef.current.scrollLeft =
      scrollStart.current + (startX.current - e.clientX);
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    rafId.current = requestAnimationFrame(applyMomentum);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    cancelAnimationFrame(rafId.current);
    startX.current = e.touches[0].clientX;
    lastX.current = e.touches[0].clientX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    velocity.current = lastX.current - e.touches[0].clientX;
    lastX.current = e.touches[0].clientX;
    trackRef.current.scrollLeft =
      scrollStart.current + (startX.current - e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    rafId.current = requestAnimationFrame(applyMomentum);
  };

  if (specialProducts.length === 0) return null;

  return (
    <div className="bg-gray-100 border-2 rounded-lg space-y-1 p-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">پیشنهادهای ویژه</h2>
        <Link to="/products" className="text-xs text-blue-500">
          مشاهده همه
        </Link>
      </div>
      <div className="overflow-x-hidden">
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto overflow-y-visible select-none p-2"
          style={{
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {specialProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id.toString()}
              /* Responsive card width: smaller on mobile, bigger on sm+ */
              className="shrink-0 w-24 sm:w-28 md:w-32 bg-gray-50 rounded-xl overflow-hidden block transition-all duration-200 hover:scale-105 active:scale-95 active:brightness-95"
              draggable={false}
            >
              <div className="relative w-full aspect-square bg-gray-100">
                <img
                  src={product.images.normal[0]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
                {product.discount && (
                  <span className="absolute top-1.5 left-1.5 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md leading-none">
                    %{product.discount}
                  </span>
                )}
              </div>
              <div className="p-2 space-y-1.5">
                <p className="text-[11px] font-medium text-gray-700 text-right truncate leading-relaxed">
                  {product.title}
                </p>
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
                      className="text-xs font-bold text-red-500 leading-none"
                      dir="ltr"
                    >
                      {product.discount
                        ? formatPrice(
                            Math.round(
                              product.price -
                                product.price * (product.discount / 100),
                            ),
                          )
                        : formatPrice(product.price)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Product Grid ─────────────────────────────────────────────────────────────
const ProductGrid = ({ initialCategory }: { initialCategory?: Category }) => {
  const [category, setCategory] = useState<Category>(initialCategory ?? "همه");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [brand, setBrand] = useState<Brand | "همه">("همه");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [pageSizeOpen, setPageSizeOpen] = useState(false);

  const filtered = useMemo<Product[]>(() => {
    return products.filter((p): p is Product => {
      const matchCat = category === "همه" || p.category === category;
      const matchBrand = brand === "همه" || p.brand === brand;
      const matchSearch = fuzzyMatch(search, p.title);
      return matchCat && matchBrand && matchSearch;
    });
  }, [category, brand, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize,
  );

  const handleCategory = (cat: Category) => {
    setCategory(cat);
    setPage(1);
    setDropdownOpen(false);
    setBrandOpen(false);
    setPageSizeOpen(false);
  };

  const handleBrand = (b: Brand | "همه") => {
    setBrand(b);
    setPage(1);
    setBrandOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageSize = (size: number) => {
    setPageSize(size);
    setPage(1);
  };

  const pageWindow = (): (number | "...")[] => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (safePage <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (safePage >= totalPages - 2)
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    return [1, "...", safePage - 1, safePage, safePage + 1, "...", totalPages];
  };

  return (
    <div className="bg-gray-100 border-2 rounded-lg p-3 space-y-3">
      {/* Row 1: Search — right-aligned, clean pill */}
      <div className="flex justify-start">
        <div className="relative group w-full sm:max-w-xs md:max-w-sm">
          {/* Search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-blue-400 transition-colors duration-150 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="جستجو..."
            dir="rtl"
            className="w-full h-9 bg-white border border-gray-200 rounded-lg pr-9 pl-8 text-xs text-gray-700 placeholder-gray-300 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-150"
          />

          {/* Clear button */}
          <button
            onClick={() => {
              setSearch("");
              setPage(1);
            }}
            className={`absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full text-gray-400 hover:text-gray-500 flex items-center justify-center transition-all duration-150 ${
              search ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="پاک کردن جستجو"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 h-2.5"
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
        </div>
      </div>

      {/* Row 2: dropdowns on one line, product count below on mobile / inline on sm+ */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Category dropdown — locked when navigated from home page */}
        {!initialCategory ? (
          <div className="relative shrink-0">
            <button
              onClick={() => {
                setDropdownOpen((o) => !o);
                setBrandOpen(false);
                setPageSizeOpen(false);
              }}
              className={`w-full flex items-center gap-1.5 h-9 px-3 rounded-lg border text-sm transition-all ${
                dropdownOpen || category !== "همه"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="11" y1="18" x2="13" y2="18" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                {category === "همه" ? "دسته‌بندی" : category}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-3 h-3 mr-auto transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
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

            {dropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+6px)] z-20 w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    className={`w-full text-right px-4 py-2.5 text-sm transition-colors ${
                      category === cat
                        ? "text-blue-500 font-semibold bg-blue-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-1.5 h-9 px-3 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
            <span className="text-xs font-semibold whitespace-nowrap">
              {category}
            </span>
          </div>
        )}

        {/* Brand dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => {
              setBrandOpen((o) => !o);
              setDropdownOpen(false);
              setPageSizeOpen(false);
            }}
            className={`w-full flex items-center gap-1.5 h-9 px-3 rounded-lg border text-sm transition-all ${
              brandOpen || brand !== "همه"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
            </svg>
            <span className="text-xs font-medium whitespace-nowrap">
              {brand === "همه" ? "برند" : brand}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 h-3 mr-auto transition-transform duration-200 ${brandOpen ? "rotate-180" : ""}`}
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

          {brandOpen && (
            <div className="absolute right-0 top-[calc(100%+6px)] z-20 min-w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
              {(["همه", ...BRANDS] as (Brand | "همه")[]).map((b) => (
                <button
                  key={b}
                  onClick={() => handleBrand(b)}
                  className={`w-full text-right px-4 py-2.5 text-sm transition-colors ${
                    brand === b
                      ? "text-blue-500 font-semibold bg-blue-50"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Page-size dropdown — same style as category */}
        <div className="relative shrink-0">
          <button
            onClick={() => {
              setPageSizeOpen((o) => !o);
              setDropdownOpen(false);
              setBrandOpen(false);
            }}
            className={`w-full flex items-center gap-1.5 h-9 px-3 rounded-lg border text-sm transition-all ${
              pageSizeOpen
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
            }`}
          >
            {/* grid/count icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            <span className="text-xs font-medium whitespace-nowrap">
              {pageSize} تایی
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 h-3 mr-auto transition-transform duration-200 ${pageSizeOpen ? "rotate-180" : ""}`}
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

          {pageSizeOpen && (
            <div className="absolute right-0 top-[calc(100%+6px)] z-20 w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
              {PAGE_SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    handlePageSize(size);
                    setPageSizeOpen(false);
                  }}
                  className={`w-full text-right px-4 py-2.5 text-sm transition-colors ${
                    pageSize === size
                      ? "text-blue-500 font-semibold bg-blue-50"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {size} تایی
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product count — inline on sm+, wraps to own line on mobile */}
        <span className="sm:mr-auto w-full sm:w-auto text-xs text-gray-400 whitespace-nowrap text-left">
          {filtered.length} محصول
        </span>
      </div>

      {/* Grid — 1 cols on mobile, 3 on sm, 4 on md, 6 on lg */}
      {paginated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
          {paginated.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden flex flex-col shadow-sm"
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
                  <p className="text-[11px] font-medium text-gray-700 text-right truncate leading-relaxed">
                    {product.title}
                  </p>
                  {product.discount && (
                    <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md leading-none">
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
                      {product.discount
                        ? formatPrice(
                            Math.round(
                              product.price -
                                product.price * (product.discount / 100),
                            ),
                          )
                        : formatPrice(product.price)}
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
      ) : (
        <div className="py-16 flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-gray-200"
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
          <p className="text-sm text-gray-300">محصولی یافت نشد</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pt-2 border-t border-gray-200 space-y-2">
          {/* Mobile: compact prev/[x of n]/next */}
          <div className="flex sm:hidden items-center justify-between gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="flex items-center gap-1 px-3 h-9 rounded-lg text-xs text-gray-400 border border-gray-200 bg-white hover:border-blue-300 hover:text-blue-400 disabled:opacity-30 disabled:cursor-default transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              قبلی
            </button>
            <span className="text-xs text-gray-500 font-medium">
              {safePage} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="flex items-center gap-1 px-3 h-9 rounded-lg text-xs text-gray-400 border border-gray-200 bg-white hover:border-blue-300 hover:text-blue-400 disabled:opacity-30 disabled:cursor-default transition-all"
            >
              بعدی
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </div>

          {/* Desktop: full page window */}
          <div className="hidden sm:flex items-center justify-center gap-1 flex-wrap">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="flex items-center gap-1 px-3 h-9 rounded-lg text-xs text-gray-400 border border-gray-200 bg-white hover:border-blue-300 hover:text-blue-400 disabled:opacity-30 disabled:cursor-default transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              قبلی
            </button>

            {pageWindow().map((p, i) =>
              p === "..." ? (
                <span
                  key={`e-${i}`}
                  className="w-8 h-9 flex items-center justify-center text-xs text-gray-300"
                >
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p as number)}
                  className={`w-9 h-9 rounded-lg text-xs border transition-all duration-150 ${
                    safePage === p
                      ? "bg-blue-500 text-white border-blue-500 font-semibold"
                      : "bg-white text-gray-400 border-gray-200 hover:border-blue-300 hover:text-blue-400"
                  }`}
                >
                  {p}
                </button>
              ),
            )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="flex items-center gap-1 px-3 h-9 rounded-lg text-xs text-gray-400 border border-gray-200 bg-white hover:border-blue-300 hover:text-blue-400 disabled:opacity-30 disabled:cursor-default transition-all"
            >
              بعدی
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Slug → Category mapping ──────────────────────────────────────────────────
const SLUG_TO_CATEGORY: Record<string, Category> = {
  shade: "سایه‌بان",
  pot: "گلدان",
  hearth: "آتشدان",
  chair: "صندلی",
  light: "چراغ",
};

// ─── Main ─────────────────────────────────────────────────────────────────────
const Products = () => {
  const { category: categoryParam } = useParams<{ category?: string }>();

  const initialCategory: Category | undefined = categoryParam
    ? (SLUG_TO_CATEGORY[categoryParam.toLowerCase()] ??
      (CATEGORIES.includes(categoryParam as Category)
        ? (categoryParam as Category)
        : undefined))
    : undefined;

  return (
    <div className="space-y-3">
      {initialCategory && (
        <div className="flex items-center justify-between px-1">
          <h1 className="text-sm font-semibold text-gray-700">
            {initialCategory}
          </h1>
          <Link to="/products" className="text-xs text-blue-500">
            همه دسته‌ها
          </Link>
        </div>
      )}
      <SpecialOffers initialCategory={initialCategory} />
      <ProductGrid initialCategory={initialCategory} />
    </div>
  );
};

export default Products;
