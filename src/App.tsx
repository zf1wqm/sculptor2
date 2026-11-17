import { useState } from 'react';
import { 
  ArrowUpRight, 
  SlidersHorizontal
} from 'lucide-react';
import heroPortrait from './assets/images/sculptor_hero_portrait_1794296908803.jpg';
import shoeDetail from './assets/images/sculptor_shoe_detail_1794296927806.jpg';

export default function App() {
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [activeCrop, setActiveCrop] = useState<number | null>(null);
  const [editorialMode, setEditorialMode] = useState<'standard' | 'high-contrast'>('standard');

  return (
    <div className={`min-h-screen bg-white text-black selection:bg-[#FF2A85] selection:text-white relative transition-colors duration-300 ${editorialMode === 'high-contrast' ? 'bg-[#FAFAFA]' : ''}`}>
      
      {/* =========================================================================
          TOP TICKER / EDITORIAL ARCHIVE BAR
          Clean, minimal 2000s print masthead metadata
      ========================================================================= */}
      <div className="w-full border-b border-black/10 px-6 py-2.5 flex items-center justify-between text-[11px] font-mono-edit tracking-widest text-black/70 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-bold text-black">
            <span className="inline-block w-1.5 h-1.5 bg-[#FF2A85]"></span>
            SCULPTOR APPAREL®
          </span>
          <span className="hidden md:inline text-black/40">/</span>
          <span className="hidden md:inline">ISSUE 26_SPRING</span>
          <span className="hidden md:inline text-black/40">/</span>
          <span className="hidden lg:inline text-black/50">VOL. 04 "UNREFINED TENSION"</span>
        </div>

        <div className="flex items-center gap-6">
          {/* Visual Prototype Control for Director Feedback */}
          <div className="flex items-center gap-2 bg-neutral-100 px-2 py-0.5 border border-black/10">
            <span className="text-[10px] uppercase text-black/60 font-mono-edit">Annotations:</span>
            <button 
              onClick={() => setShowAnnotations(!showAnnotations)}
              className={`text-[10px] px-1.5 py-0.2 transition-colors ${showAnnotations ? 'bg-[#FF2A85] text-white font-bold' : 'text-black/60 hover:text-black'}`}
            >
              {showAnnotations ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-black">
            <a href="#lookbook" className="hover:text-[#FF2A85] transition-colors">LOOKBOOK</a>
            <a href="#collection" className="hover:text-[#FF2A85] transition-colors">COLLECTION</a>
            <a href="#cart" className="hover:text-[#FF2A85] transition-colors font-bold">BAG [0]</a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PRIMARY HEADER: OFFICIAL SCULPTOR LOGO + EDITORIAL NAVIGATION
          - Original logo shape preserved (clean, assertive uppercase serif/sans)
          - No generic eCommerce menus; editorial issue navigation
      ========================================================================= */}
      <header className="w-full border-b border-black px-6 md:px-12 py-5 flex items-end justify-between bg-white">
        <div className="flex flex-col">
          <div className="text-[10px] font-mono-edit tracking-widest uppercase text-black/40 mb-1">
            EST. 2012 SEOUL / OFFICIAL EDITORIAL
          </div>
          {/* SCULPTOR Official Logo (Kept pure, authoritative, unwarped) */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-[-0.04em] uppercase font-display text-black leading-none">
            SCULPTOR
          </h1>
        </div>

        {/* Right masthead metadata */}
        <div className="text-right flex flex-col items-end">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-pixel text-[9px] text-[#FF2A85] tracking-widest px-1.5 py-0.5 border border-[#FF2A85]/40 bg-[#FF2A85]/5">
              DIGITAL EDITORIAL
            </span>
            <span className="font-mono-edit text-[11px] text-black/70">
              P. 01 — HERO SPREAD
            </span>
          </div>
          <p className="text-[11px] font-mono-edit text-black/50 tracking-tight hidden sm:block">
            DIRECT FLASH / RAW SILHOUETTE / 35MM
          </p>
        </div>
      </header>

      {/* =========================================================================
          HERO EDITORIAL SPREAD
          Asymmetrical 2000s magazine layout:
          - Left: Experimental Editorial Typography, staggered baselines, generous whitespace, bracketed footnotes
          - Right: Photography stack (Hero portrait + Asymmetric cropped detail + Vector hairline overlays)
      ========================================================================= */}
      <main className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-8 md:py-14 min-h-[calc(100vh-140px)] flex flex-col justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
          
          {/* ---------------------------------------------------------------------
              LEFT COLUMN (5 Cols): EXPERIMENTAL EDITORIAL TYPOGRAPHY & VOID
              Inspired by 'DUH!', 'Cheap Love', and 'Who's that girl?' in the moodboard
          --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            
            {/* Top Index Marker */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono-edit text-xs font-bold tracking-widest text-[#FF2A85]">
                [FIG. 01]
              </span>
              <div className="h-[1px] w-12 bg-black/20"></div>
              <span className="font-mono-edit text-xs uppercase tracking-wider text-black/60">
                SPRING / SUMMER 2026
              </span>
            </div>

            {/* Deconstructed Experimental Headline */}
            <div className="relative mb-8 select-none">
              
              {/* Stepped Pixel Graphic Accent (Top Left Accent, not excessive) */}
              {showAnnotations && (
                <div className="inline-flex items-center gap-1.5 mb-4 px-2 py-0.5 border border-[#FF2A85] bg-white text-[#FF2A85] font-pixel text-[10px] tracking-wider shadow-[2px_2px_0px_#FF2A85]">
                  <span>▲</span>
                  <span>RAW CONTOUR // 01</span>
                </div>
              )}

              {/* Line 1: Mixed High-Contrast Editorial Serif & Condensed Sans */}
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-editorial italic font-normal text-6xl md:text-8xl tracking-tight text-black">
                  New
                </span>
                <span className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter text-black">
                  SHAPE
                </span>
              </div>

              {/* Line 2: Staggered baseline with digital pink pop */}
              <div className="flex items-baseline gap-2 mt-[-6px] md:mt-[-12px]">
                <span className="font-display font-light text-4xl md:text-6xl uppercase tracking-widest text-black/90">
                  OF
                </span>
                <span className="font-editorial italic font-bold text-6xl md:text-8xl text-[#FF2A85] tracking-tight ml-2">
                  Youth
                </span>
                <span className="font-mono-edit text-sm md:text-base font-normal text-black/40 ml-2">
                  (2026)
                </span>
              </div>

              {/* Line 3: Deconstructed condensed letters like 'Cheap Love' */}
              <div className="mt-2 flex items-center gap-4">
                <span className="font-display font-extrabold text-2xl md:text-3xl tracking-[0.25em] uppercase text-black border-y border-black py-1">
                  TENSION
                </span>
                <span className="font-mono-edit text-[11px] text-black/60 tracking-wider">
                  &mdash; ARCHIVAL CUTS
                </span>
              </div>

              {/* Decorative Subtle Registration Cross */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-black/20 font-mono-edit text-xs hidden xl:block select-none pointer-events-none">
                +
              </div>
            </div>

            {/* Editorial Body Paragraph (Justified, dense magazine column) */}
            <div className="max-w-md border-t border-black/15 pt-6 pb-8">
              <div className="font-mono-edit text-[10px] uppercase tracking-widest text-[#FF2A85] font-bold mb-2">
                EDITORIAL STATEMENT
              </div>
              <p className="font-mono-edit text-xs leading-relaxed text-black/80 text-justify mb-4">
                SCULPTOR 2026 S/S reveals an experimental dialogue between sheer vulnerability and direct flash sharpness. 
                Deconstructed ribs, sheer sleeves, and low-slung waistlines are captured in unvarnished daylight and raw flash studio environments.
              </p>
              
              {/* Editorial Credits / Tags */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-dashed border-black/20 text-[11px] font-mono-edit text-black/60">
                <div>
                  <span className="text-black/40 block text-[9px] uppercase">STYLING</span>
                  <span>LAYERED KNIT / DENIM</span>
                </div>
                <div>
                  <span className="text-black/40 block text-[9px] uppercase">PHOTOGRAPHY</span>
                  <span>DIRECT FLASH 35MM</span>
                </div>
              </div>
            </div>

            {/* Editorial Action / Lookbook Portal */}
            <div className="pt-2 flex items-center gap-4">
              <button className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-black text-white hover:bg-[#FF2A85] transition-all duration-200">
                <span className="font-mono-edit text-xs tracking-widest uppercase font-bold">
                  EXPLORE EDITORIAL SPREAD
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button 
                onClick={() => setEditorialMode(editorialMode === 'standard' ? 'high-contrast' : 'standard')}
                className="inline-flex items-center gap-2 px-4 py-3 border border-black/20 text-xs font-mono-edit hover:border-black transition-colors"
                title="Toggle paper contrast"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-black/60" />
                <span className="hidden sm:inline">PAPER CONTRAST</span>
              </button>
            </div>

          </div>


          {/* ---------------------------------------------------------------------
              RIGHT COLUMN (7 Cols): FASHION PHOTOGRAPHY STACK & ASYMMETRIC CROP
              - Main soft-focus flash fashion portrait
              - Overlapping Mary Jane shoe / sock detail crop
              - Subtle digital pink vector trajectory & bracket markers
          --------------------------------------------------------------------- */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
            {/* The Outer Editorial Frame (Strict 90-degree corners, no round pills) */}
            <div className="relative w-full max-w-[620px] bg-white border border-black p-3 sm:p-5 shadow-[6px_6px_0px_#000000]">
              
              {/* Top Frame Status Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-black text-[10px] font-mono-edit text-black/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black"></span>
                  <span className="font-bold">SCULPTOR_EDIT_01.JPG</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>SCALE: 100%</span>
                  <span className="text-[#FF2A85] font-bold">CROP: 3:4 PORTRAIT</span>
                </div>
              </div>

              {/* Main Fashion Photo Container */}
              <div className="relative overflow-hidden bg-neutral-100 aspect-[3/4]">
                <img 
                  src={heroPortrait} 
                  alt="SCULPTOR 2026 Editorial Portrait" 
                  className="w-full h-full object-cover object-top filter contrast-[1.02] hover:scale-[1.01] transition-transform duration-700 ease-out"
                />

                {/* Subtle Digital Pink Vector Line Overlay (Accents only, as requested) */}
                {showAnnotations && (
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                  >
                    {/* Delicate pink hairline vector tracing from top collar down diagonally */}
                    <path 
                      d="M 50 15 L 75 35 L 70 75" 
                      fill="none" 
                      stroke="#FF2A85" 
                      strokeWidth="0.5" 
                      strokeDasharray="2,2" 
                    />
                    <circle cx="50" cy="15" r="1.2" fill="#FF2A85" />
                    <circle cx="75" cy="35" r="1.2" fill="#FF2A85" />
                    <circle cx="70" cy="75" r="1.2" fill="#FF2A85" />
                  </svg>
                )}

                {/* Technical Bracket Annotation [01] */}
                {showAnnotations && (
                  <div className="absolute top-6 left-6 z-20 pointer-events-none bg-white/90 backdrop-blur-xs px-2 py-1 border border-black/10 text-[9px] font-mono-edit">
                    <span className="text-[#FF2A85] font-bold">[01]</span> MOCK NECK RIB TOP
                  </div>
                )}

                {/* Technical Bracket Annotation [02] */}
                {showAnnotations && (
                  <div className="absolute top-44 right-6 z-20 pointer-events-none bg-white/90 backdrop-blur-xs px-2 py-1 border border-black/10 text-[9px] font-mono-edit">
                    <span className="text-[#FF2A85] font-bold">[02]</span> SHEER SLEEVE TENSION
                  </div>
                )}

                {/* Subtle Pink Pixel Stepped Ribbon (bottom edge accent) */}
                <div className="absolute bottom-3 left-4 z-20 flex items-center gap-1.5 bg-black/85 px-2.5 py-1 text-[9px] font-pixel text-[#FF2A85]">
                  <span>■■</span>
                  <span className="tracking-widest uppercase">SCULPTOR / S26</span>
                </div>
              </div>

              {/* ===============================================================
                  ASYMMETRIC FLOATING DETAIL CROP
                  Overlapping at the bottom-left edge, exactly as in the moodboard!
              =============================================================== */}
              <div 
                className={`absolute -bottom-8 -left-6 sm:-bottom-12 sm:-left-10 w-44 sm:w-56 bg-white border-2 border-black p-2 z-30 shadow-[5px_5px_0px_#FF2A85] transition-transform duration-300 ${activeCrop === 1 ? 'scale-105' : 'hover:scale-102'}`}
                onMouseEnter={() => setActiveCrop(1)}
                onMouseLeave={() => setActiveCrop(null)}
              >
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-black text-[8px] font-mono-edit">
                  <span className="font-bold text-[#FF2A85]">[DETAIL CROP 02]</span>
                  <span>SHEER / RED PATENT</span>
                </div>

                <div className="aspect-square overflow-hidden bg-neutral-200 relative">
                  <img 
                    src={shoeDetail} 
                    alt="SCULPTOR Mary Jane Footwear Detail" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Fine Crosshair on the crop */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="w-4 h-[1px] bg-white"></div>
                    <div className="h-4 w-[1px] bg-white absolute"></div>
                  </div>
                </div>

                <div className="mt-1.5 flex items-center justify-between text-[9px] font-mono-edit">
                  <span className="text-black font-bold">MARY JANE 40MM</span>
                  <span className="text-[#FF2A85] font-pixel text-[8px]">ZOOM IN</span>
                </div>
              </div>

              {/* Bottom Frame Credits Caption */}
              <div className="mt-3 pt-2 border-t border-black/15 flex items-center justify-between text-[10px] font-mono-edit text-black/60">
                <span>LOOK 01 / MODEL 01_PARK</span>
                <span className="text-[#FF2A85] font-mono-edit font-bold">SEOUL EDITORIAL</span>
              </div>

            </div>

            {/* Backstage Vertical Running Text on extreme right */}
            <div className="hidden xl:block absolute -right-8 top-12 h-64 select-none pointer-events-none">
              <span className="rotate-90 origin-top-left font-mono-edit text-[10px] tracking-[0.3em] uppercase text-black/30 whitespace-nowrap block">
                SCULPTOR S/S 2026 // EXPERIMENTAL EDITORIAL ARCHIVE
              </span>
            </div>

          </div>

        </div>

        {/* =========================================================================
            BOTTOM SPREAD FOOTER: MAGAZINE SPREAD METADATA & QUICK INDEX
            Stark editorial line with pagination and issue credits
        ========================================================================= */}
        <div className="w-full mt-16 md:mt-24 pt-4 border-t-2 border-black flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono-edit">
          <div className="flex items-center gap-6">
            <span className="font-bold text-black flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF2A85]"></span>
              SCULPTOR® 2026
            </span>
            <span className="text-black/40">|</span>
            <span className="text-black/70">ALL GARMENTS CRAFTED IN SEOUL</span>
            <span className="text-black/40 hidden sm:inline">|</span>
            <span className="text-black/50 hidden sm:inline">DESIGN DIRECTED BY SCULPTOR STUDIO</span>
          </div>

          <div className="flex items-center gap-8 text-[11px]">
            <span className="text-[#FF2A85] font-pixel">
              PAGE 01 / 12
            </span>
            <div className="flex items-center gap-1 font-mono-edit text-black/80">
              <span className="text-black font-bold">[01]</span>
              <span className="text-black/40">/</span>
              <span>[02]</span>
              <span className="text-black/40">/</span>
              <span>[03]</span>
              <span className="text-black/40">/</span>
              <span>[04]</span>
            </div>
            <span className="text-black/40 tracking-wider">
              SCROLL FOR INDEX &darr;
            </span>
          </div>
        </div>

      </main>

    </div>
  );
}
