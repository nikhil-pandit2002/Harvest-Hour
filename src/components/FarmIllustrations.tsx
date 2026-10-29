import React from 'react';

interface IllustrationProps {
  className?: string;
  alt: string;
}

/**
 * 1. Hero Landscape: 14 organic acres in golden morning light, Deccan hills, vegetable rows, harvester figure.
 */
export const HeroLandscapeGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg
    viewBox="0 0 1200 675"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={alt}
  >
    <defs>
      <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#DFD8C4" />
        <stop offset="45%" stopColor="#F2E6C8" />
        <stop offset="85%" stopColor="#E0C99A" />
        <stop offset="100%" stopColor="#C9AF85" />
      </linearGradient>
      <radialGradient id="morningSun" cx="68%" cy="32%" r="40%">
        <stop offset="0%" stopColor="#FFE8B5" stopOpacity="0.95" />
        <stop offset="40%" stopColor="#F5D082" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#E2BD73" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="hillBack" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8A9A82" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#5E7256" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="hillFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#586E50" />
        <stop offset="100%" stopColor="#3C5336" />
      </linearGradient>
      <linearGradient id="fieldGround" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A6542" />
        <stop offset="40%" stopColor="#344D30" />
        <stop offset="100%" stopColor="#253821" />
      </linearGradient>
      <linearGradient id="soilTrench" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3F3124" />
        <stop offset="100%" stopColor="#2A1F16" />
      </linearGradient>
      <linearGradient id="cropRowGlow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#6CA360" />
        <stop offset="50%" stopColor="#8EC27C" />
        <stop offset="100%" stopColor="#5B904F" />
      </linearGradient>
    </defs>

    {/* Sky & Sun Glow */}
    <rect width="1200" height="675" fill="url(#heroSky)" />
    <circle cx="820" cy="220" r="260" fill="url(#morningSun)" />

    {/* Distant Deccan Granite Hills */}
    <path
      d="M0 320 C180 270 320 290 480 320 C640 260 780 280 920 310 C1060 270 1140 295 1200 310 L1200 480 L0 480 Z"
      fill="url(#hillBack)"
    />
    <path
      d="M0 345 C150 315 280 340 420 320 C600 345 760 310 940 340 C1080 325 1160 338 1200 342 L1200 500 L0 500 Z"
      fill="url(#hillFront)"
    />

    {/* Tree line and gentle morning mist band */}
    <rect x="0" y="340" width="1200" height="40" fill="#EADBC0" fillOpacity="0.32" />
    <g fill="#2D3D2A" opacity="0.75">
      <circle cx="95" cy="350" r="14" />
      <circle cx="120" cy="346" r="18" />
      <circle cx="145" cy="352" r="12" />
      <circle cx="310" cy="348" r="16" />
      <circle cx="335" cy="344" r="20" />
      <circle cx="360" cy="350" r="15" />
      <circle cx="680" cy="352" r="14" />
      <circle cx="705" cy="346" r="18" />
      <circle cx="730" cy="350" r="13" />
      <circle cx="1020" cy="348" r="17" />
      <circle cx="1050" cy="344" r="22" />
    </g>

    {/* Farmland Basework */}
    <path d="M0 370 L1200 370 L1200 675 L0 675 Z" fill="url(#fieldGround)" />

    {/* Cultivated Crop Rows in Receding Perspective */}
    {/* Soil trenches */}
    <path d="M600 370 L180 675 L220 675 L605 370 Z" fill="url(#soilTrench)" opacity="0.6" />
    <path d="M610 370 L420 675 L460 675 L615 370 Z" fill="url(#soilTrench)" opacity="0.6" />
    <path d="M620 370 L660 675 L700 675 L625 370 Z" fill="url(#soilTrench)" opacity="0.6" />
    <path d="M630 370 L900 675 L940 675 L635 370 Z" fill="url(#soilTrench)" opacity="0.6" />

    {/* Lush Green Crop Rows */}
    <path d="M595 370 L-40 675 L160 675 L600 370 Z" fill="url(#cropRowGlow)" />
    <path d="M605 370 L220 675 L410 675 L610 370 Z" fill="url(#cropRowGlow)" />
    <path d="M615 370 L470 675 L650 675 L620 370 Z" fill="url(#cropRowGlow)" />
    <path d="M625 370 L710 675 L890 675 L630 370 Z" fill="url(#cropRowGlow)" />
    <path d="M635 370 L950 675 L1180 675 L640 370 Z" fill="url(#cropRowGlow)" />

    {/* Textured leafy clusters in foreground rows */}
    <g fill="#4F8244" opacity="0.8">
      <ellipse cx="280" cy="620" rx="35" ry="16" />
      <ellipse cx="340" cy="635" rx="42" ry="18" />
      <ellipse cx="530" cy="615" rx="36" ry="17" />
      <ellipse cx="590" cy="630" rx="44" ry="19" />
      <ellipse cx="780" cy="618" rx="38" ry="17" />
      <ellipse cx="840" cy="636" rx="46" ry="20" />
      <ellipse cx="1020" cy="625" rx="40" ry="18" />
    </g>
    <g fill="#7BB36E" opacity="0.9">
      <circle cx="260" cy="612" r="12" />
      <circle cx="310" cy="622" r="15" />
      <circle cx="365" cy="630" r="16" />
      <circle cx="510" cy="608" r="14" />
      <circle cx="560" cy="620" r="17" />
      <circle cx="760" cy="610" r="13" />
      <circle cx="810" cy="622" r="16" />
      <circle cx="865" cy="628" r="15" />
      <circle cx="1000" cy="618" r="14" />
    </g>

    {/* Farmer figure in middle distance carrying harvest crate */}
    <g transform="translate(645, 410)">
      {/* Shadow */}
      <ellipse cx="12" cy="46" rx="14" ry="4" fill="#1C2819" opacity="0.6" />
      {/* Legs & trousers */}
      <path d="M7 32 L8 45 L11 45 L10 32 Z" fill="#4A453A" />
      <path d="M14 32 L15 45 L18 45 L17 32 Z" fill="#4A453A" />
      {/* Cotton Kurta */}
      <path d="M4 14 L20 14 L18 34 L6 34 Z" fill="#E8DEC8" />
      {/* Head & cotton cloth wrap */}
      <circle cx="12" cy="8" r="5" fill="#8C5C38" />
      <path d="M7 6 Q12 3 17 6 Q12 9 7 6 Z" fill="#D9CBB0" />
      {/* Arms holding wooden crate */}
      <path d="M5 16 L-2 24 L3 26 L8 18 Z" fill="#8C5C38" />
      <path d="M19 16 L26 24 L21 26 L16 18 Z" fill="#8C5C38" />
      {/* Wooden Harvest Crate */}
      <rect x="-4" y="21" width="32" height="12" rx="1" fill="#A87948" />
      <line x1="-4" y1="27" x2="28" y2="27" stroke="#7E5630" strokeWidth="1" />
      {/* Greens spilling from crate */}
      <ellipse cx="12" cy="20" rx="14" ry="4" fill="#67A058" />
    </g>

    {/* Golden light rays filter */}
    <polygon points="760,0 920,0 800,675 660,675" fill="#FFEBB3" opacity="0.08" />
    <polygon points="840,0 980,0 940,675 810,675" fill="#FFEBB3" opacity="0.06" />
  </svg>
);

/**
 * 2. Pick your own: Hands harvesting methi/spinach with knife, rich damp soil, wicker basket.
 */
export const PickYourOwnGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="soilBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A3728" />
        <stop offset="50%" stopColor="#35261A" />
        <stop offset="100%" stopColor="#221810" />
      </linearGradient>
      <linearGradient id="wickerGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C99859" />
        <stop offset="100%" stopColor="#8A6032" />
      </linearGradient>
    </defs>
    {/* Rich damp earth background */}
    <rect width="800" height="600" fill="url(#soilBg)" />
    {/* Soil clods & texture */}
    <g fill="#281C13" opacity="0.7">
      <ellipse cx="140" cy="180" rx="45" ry="25" />
      <ellipse cx="280" cy="120" rx="60" ry="30" />
      <ellipse cx="460" cy="210" rx="55" ry="28" />
      <ellipse cx="200" cy="420" rx="70" ry="35" />
      <ellipse cx="640" cy="480" rx="90" ry="40" />
    </g>

    {/* Growing spinach & methi plant bed */}
    <g transform="translate(60, 140)">
      {/* Methi & spinach stems and leaves */}
      <path d="M120 220 Q140 160 160 110" stroke="#4C8A45" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="160" cy="100" rx="22" ry="32" fill="#5E9F54" transform="rotate(-15 160 100)" />
      <ellipse cx="135" cy="140" rx="18" ry="26" fill="#4B8942" transform="rotate(-35 135 140)" />
      <ellipse cx="180" cy="135" rx="20" ry="28" fill="#6FB363" transform="rotate(25 180 135)" />

      <path d="M220 230 Q240 150 250 80" stroke="#4C8A45" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="250" cy="70" rx="28" ry="40" fill="#5AA051" transform="rotate(5 250 70)" />
      <ellipse cx="215" cy="120" rx="22" ry="30" fill="#467F3D" transform="rotate(-25 215 120)" />
      <ellipse cx="280" cy="115" rx="24" ry="32" fill="#72BA66" transform="rotate(30 280 115)" />

      <path d="M70 240 Q100 180 110 130" stroke="#3F7539" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="110" cy="120" rx="20" ry="28" fill="#4E8B45" transform="rotate(-10 110 120)" />
    </g>

    {/* Wicker Harvest Basket on Right */}
    <g transform="translate(480, 180)">
      <ellipse cx="140" cy="220" rx="145" ry="60" fill="#1C140D" opacity="0.6" />
      {/* Basket body */}
      <path d="M20 180 Q140 280 260 180 L240 100 Q140 140 40 100 Z" fill="url(#wickerGrad)" />
      {/* Wicker weave lines */}
      <path d="M35 120 Q140 170 245 120" stroke="#684724" strokeWidth="3" fill="none" />
      <path d="M25 145 Q140 200 255 145" stroke="#684724" strokeWidth="3" fill="none" />
      <path d="M20 170 Q140 230 260 170" stroke="#684724" strokeWidth="3" fill="none" />
      {/* Basket rim */}
      <ellipse cx="140" cy="100" rx="105" ry="24" fill="#B38245" stroke="#553818" strokeWidth="3" />
      {/* Half full of freshly cut greens & radiant radishes */}
      <ellipse cx="140" cy="95" rx="90" ry="20" fill="#3A6634" />
      <circle cx="110" cy="90" r="16" fill="#6FB363" />
      <circle cx="145" cy="85" r="20" fill="#84C777" />
      <circle cx="175" cy="92" r="18" fill="#589B4E" />
      <ellipse cx="130" cy="82" rx="12" ry="6" fill="#C93847" /> {/* Radish tip */}
      <ellipse cx="160" cy="78" rx="14" ry="7" fill="#C93847" />
    </g>

    {/* Harvesting Hands & Knife in Centre Foreground */}
    <g transform="translate(180, 240)">
      {/* Left hand holding stems */}
      <path d="M60 210 Q90 140 140 120 Q160 125 155 145 Q130 175 110 230 Z" fill="#996846" />
      <circle cx="148" cy="130" r="10" fill="#A8734E" />
      <circle cx="158" cy="142" r="9" fill="#A8734E" />
      <circle cx="152" cy="156" r="8" fill="#A8734E" />

      {/* Right hand with traditional harvesting sickle/knife */}
      <path d="M320 220 Q280 150 220 160 Q200 175 210 195 Q250 230 280 250 Z" fill="#8E5D3B" />
      {/* Knife Handle */}
      <rect x="180" y="172" width="45" height="12" rx="3" fill="#422917" transform="rotate(-25 180 172)" />
      {/* Curved steel blade cutting stems */}
      <path d="M165 188 Q135 195 125 215 Q145 208 175 196 Z" fill="#E2E6E8" stroke="#9EABB2" strokeWidth="1" />
      {/* Tiny soil speckles on fingers */}
      <circle cx="150" cy="134" r="2.5" fill="#35261A" />
      <circle cx="218" cy="180" r="3" fill="#35261A" />
    </g>
  </svg>
);

/**
 * 3. Cook with the chef: Open rustic kitchen, resident chef, prep counter, steam, farm field view.
 */
export const CookWithChefGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="kitchenBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#DFD2BD" />
        <stop offset="60%" stopColor="#C4B49C" />
        <stop offset="100%" stopColor="#8C7960" />
      </linearGradient>
      <linearGradient id="counterWood" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#5E3C22" />
        <stop offset="50%" stopColor="#7E5230" />
        <stop offset="100%" stopColor="#54351E" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#kitchenBg)" />

    {/* Background open window showing green farm rows */}
    <rect x="120" y="60" width="560" height="220" rx="4" fill="#699C5D" />
    <path d="M120 180 Q400 130 680 180 L680 280 L120 280 Z" fill="#4B7742" />
    <line x1="400" y1="60" x2="400" y2="280" stroke="#8A6E53" strokeWidth="8" />
    <line x1="120" y1="160" x2="680" y2="160" stroke="#8A6E53" strokeWidth="6" />

    {/* Chef figure in centre */}
    <g transform="translate(340, 110)">
      {/* Chef head & neat cotton toque/cap */}
      <circle cx="60" cy="50" r="22" fill="#8C5C38" />
      <path d="M40 38 Q60 15 80 38 Q60 32 40 38 Z" fill="#FCFDF9" stroke="#E2E6DE" strokeWidth="2" />
      {/* Dark apron over cream linen */}
      <path d="M30 74 L90 74 L98 220 L22 220 Z" fill="#2E5A2B" />
      <path d="M42 74 L78 74 L76 130 L44 130 Z" fill="#1E3C1C" />
      {/* Apron neck strap */}
      <path d="M44 74 Q60 55 76 74" stroke="#B87518" strokeWidth="3" fill="none" />
      {/* Left arm guiding a guest */}
      <path d="M30 90 L-10 130 L10 145 L40 105 Z" fill="#8C5C38" />
      {/* Right arm tossing pan */}
      <path d="M90 90 L130 130 L115 145 L80 105 Z" fill="#8C5C38" />
    </g>

    {/* Guest 1 on left */}
    <g transform="translate(160, 140)">
      <circle cx="50" cy="50" r="20" fill="#9C6B46" />
      <path d="M25 72 L75 72 L82 200 L18 200 Z" fill="#C48446" />
      <path d="M70 95 L110 135 L95 148 L60 110 Z" fill="#9C6B46" />
    </g>

    {/* Guest 2 on right */}
    <g transform="translate(530, 135)">
      <circle cx="50" cy="50" r="20" fill="#7D4F2E" />
      <path d="M25 72 L75 72 L82 200 L18 200 Z" fill="#4B6B5D" />
      <path d="M30 95 L-10 135 L5 148 L40 110 Z" fill="#7D4F2E" />
    </g>

    {/* Solid Teak Prep Counter in Foreground */}
    <rect x="0" y="320" width="800" height="280" fill="url(#counterWood)" />
    <rect x="0" y="320" width="800" height="24" fill="#8F5F3A" />

    {/* Rising culinary steam */}
    <g stroke="#FCFDF9" strokeWidth="3" opacity="0.45" strokeLinecap="round">
      <path d="M390 310 Q380 260 395 210 Q405 160 390 120" />
      <path d="M420 310 Q435 250 415 200 Q405 150 420 110" />
      <path d="M450 315 Q440 270 460 220" />
    </g>

    {/* Prep counter items: brass pan, chopping board, vegetables */}
    {/* Heavy brass skillet / kadai */}
    <ellipse cx="420" cy="335" rx="55" ry="16" fill="#B8860B" stroke="#8C6504" strokeWidth="2" />
    <path d="M365 335 Q420 358 475 335" stroke="#7A5802" strokeWidth="3" fill="#5E4301" />

    {/* Wooden chopping board with chopped greens */}
    <rect x="180" y="340" width="160" height="90" rx="6" fill="#A87545" stroke="#754E29" strokeWidth="2" />
    <g fill="#4F8E45">
      <ellipse cx="230" cy="380" rx="25" ry="15" />
      <ellipse cx="250" cy="385" rx="20" ry="12" />
      <ellipse cx="215" cy="390" rx="18" ry="10" />
    </g>
    <rect x="270" y="355" width="40" height="8" rx="2" fill="#D0D5D8" transform="rotate(35 270 355)" />

    {/* Terracotta bowl of fresh red tomatoes and green chillies */}
    <ellipse cx="610" cy="365" rx="55" ry="24" fill="#A8563C" stroke="#7E3A25" strokeWidth="2" />
    <circle cx="595" cy="358" r="14" fill="#D63A2F" />
    <circle cx="620" cy="354" r="15" fill="#C93228" />
    <circle cx="635" cy="365" r="13" fill="#E2463B" />
    <path d="M580 375 Q600 365 625 372" stroke="#4C8A45" strokeWidth="3" fill="none" />
  </svg>
);

/**
 * 4. Pottery Shed: Wheel, wet terracotta clay, artisan fingers, warm clay tones.
 */
export const PotteryShedGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="shedAmbient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4A3425" />
        <stop offset="50%" stopColor="#2D1F16" />
        <stop offset="100%" stopColor="#1C130D" />
      </linearGradient>
      <radialGradient id="wheelSpot" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#A8563C" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#shedAmbient)" />
    <circle cx="400" cy="350" r="280" fill="url(#wheelSpot)" />

    {/* Wooden workshop shelves in background with drying terracotta pots */}
    <line x1="80" y1="120" x2="720" y2="120" stroke="#684A33" strokeWidth="8" />
    <g fill="#A8563C" stroke="#7A3925" strokeWidth="2">
      <ellipse cx="160" cy="110" rx="22" ry="12" />
      <path d="M142 110 L146 80 L174 80 L178 110 Z" />
      <ellipse cx="280" cy="108" rx="30" ry="14" />
      <path d="M255 108 L262 70 L298 70 L305 108 Z" />
      <ellipse cx="500" cy="110" rx="20" ry="10" />
      <path d="M483 110 L488 85 L512 85 L517 110 Z" />
      <ellipse cx="620" cy="108" rx="26" ry="13" />
      <path d="M598 108 L604 75 L636 75 L642 108 Z" />
    </g>

    {/* The Potter's Wheel Base */}
    <g transform="translate(400, 380)">
      {/* Outer flywheel */}
      <ellipse cx="0" cy="60" rx="260" ry="85" fill="#1F1610" />
      <ellipse cx="0" cy="50" rx="240" ry="75" fill="#3D2D22" stroke="#5E4636" strokeWidth="4" />
      {/* Inner spinning wheelhead */}
      <ellipse cx="0" cy="30" rx="160" ry="50" fill="#241912" />
      <ellipse cx="0" cy="24" rx="145" ry="44" fill="#5E4230" stroke="#7A5840" strokeWidth="3" />

      {/* Terracotta Clay Vessel being thrown */}
      <path d="M-55 20 Q-70 -60 -45 -110 Q0 -125 45 -110 Q70 -60 55 20 Z" fill="#A8563C" />
      <ellipse cx="0" cy="-110" rx="45" ry="14" fill="#C2684D" stroke="#783420" strokeWidth="2" />
      <ellipse cx="0" cy="-110" rx="32" ry="10" fill="#8E4129" />

      {/* Clay slip groove rings */}
      <ellipse cx="0" cy="-40" rx="60" ry="16" stroke="#D97A5C" strokeWidth="2" fill="none" opacity="0.6" />
      <ellipse cx="0" cy="-75" rx="52" ry="14" stroke="#D97A5C" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Hands shaping the clay */}
      {/* Left Hand */}
      <path d="M-170 -40 Q-110 -60 -65 -65 Q-55 -40 -70 -15 Q-120 20 -180 0 Z" fill="#996846" />
      <circle cx="-62" cy="-55" r="14" fill="#A8563C" /> {/* Clay covered fingers */}
      {/* Right Hand */}
      <path d="M170 -40 Q110 -60 65 -65 Q55 -40 70 -15 Q120 20 180 0 Z" fill="#996846" />
      <circle cx="62" cy="-55" r="14" fill="#A8563C" />
    </g>
  </svg>
);

/**
 * 5. Farm School for Children: Indian children crouched over seedling tray, potting soil, sprouts.
 */
export const FarmSchoolGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="schoolSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E5EFE2" />
        <stop offset="60%" stopColor="#D2E4CC" />
        <stop offset="100%" stopColor="#AFC9A7" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#schoolSky)" />

    {/* Farm rows background */}
    <path d="M0 240 Q400 200 800 240 L800 600 L0 600 Z" fill="#3A5534" />
    <path d="M0 320 Q400 280 800 320 L800 600 L0 600 Z" fill="#2E4429" />

    {/* Low wooden potting workbench */}
    <rect x="140" y="340" width="520" height="180" rx="6" fill="#6B4B32" stroke="#483120" strokeWidth="3" />

    {/* Child 1 (Girl on left) crouched forward */}
    <g transform="translate(150, 190)">
      <circle cx="50" cy="50" r="22" fill="#8C5C38" />
      {/* Hair plait */}
      <path d="M35 55 Q25 80 30 110" stroke="#1F1A15" strokeWidth="8" strokeLinecap="round" />
      {/* Yellow cotton top */}
      <path d="M25 75 L75 75 L85 180 L15 180 Z" fill="#D49B28" />
      {/* Hand reaching to soil tray */}
      <path d="M65 100 L115 155 L95 168 L50 115 Z" fill="#8C5C38" />
    </g>

    {/* Child 2 (Boy in middle) watching absorbed */}
    <g transform="translate(350, 180)">
      <circle cx="50" cy="48" r="22" fill="#996846" />
      <path d="M32 35 Q50 20 68 35 Q50 26 32 35 Z" fill="#1F1A15" />
      {/* Forest green tee */}
      <path d="M25 72 L75 72 L80 180 L20 180 Z" fill="#3D6B37" />
      {/* Hands resting on table */}
      <path d="M30 95 L10 160 L28 165 L48 105 Z" fill="#996846" />
      <path d="M70 95 L90 160 L72 165 L52 105 Z" fill="#996846" />
    </g>

    {/* Adult Mentor on right gently guiding */}
    <g transform="translate(540, 130)">
      <circle cx="50" cy="45" r="24" fill="#7D4F2E" />
      {/* Linen shirt */}
      <path d="M20 72 L80 72 L90 240 L10 240 Z" fill="#F0EDE3" />
      {/* Arm pointing toward seedling */}
      <path d="M30 100 L-40 180 L-25 195 L45 120 Z" fill="#7D4F2E" />
      {/* Pointing index finger */}
      <line x1="-40" y1="180" x2="-65" y2="198" stroke="#7D4F2E" strokeWidth="6" strokeLinecap="round" />
    </g>

    {/* The Seedling Tray with grid cells & tiny green sprouts */}
    <g transform="translate(260, 310)">
      {/* Wooden seed flat */}
      <rect x="0" y="0" width="280" height="70" rx="4" fill="#422E1F" stroke="#2B1E14" strokeWidth="2" />
      {/* Dark rich potting soil */}
      <rect x="6" y="6" width="268" height="58" rx="2" fill="#1F160F" />
      {/* Seedling grid dividers */}
      <line x1="56" y1="6" x2="56" y2="64" stroke="#35261A" strokeWidth="2" />
      <line x1="112" y1="6" x2="112" y2="64" stroke="#35261A" strokeWidth="2" />
      <line x1="168" y1="6" x2="168" y2="64" stroke="#35261A" strokeWidth="2" />
      <line x1="224" y1="6" x2="224" y2="64" stroke="#35261A" strokeWidth="2" />

      {/* Tiny bright green sprouts with cotyledons */}
      <g stroke="#5BA852" strokeWidth="3" strokeLinecap="round">
        <path d="M30 35 L30 15" />
        <ellipse cx="24" cy="12" rx="6" ry="3" fill="#6EC264" transform="rotate(-20 24 12)" />
        <ellipse cx="36" cy="12" rx="6" ry="3" fill="#6EC264" transform="rotate(20 36 12)" />

        <path d="M85 35 L85 12" />
        <ellipse cx="78" cy="9" rx="7" ry="4" fill="#7FD175" transform="rotate(-25 78 9)" />
        <ellipse cx="92" cy="9" rx="7" ry="4" fill="#7FD175" transform="rotate(25 92 9)" />

        <path d="M140 35 L140 18" />
        <ellipse cx="135" cy="16" rx="5" ry="3" fill="#6EC264" transform="rotate(-15 135 16)" />
        <ellipse cx="145" cy="16" rx="5" ry="3" fill="#6EC264" transform="rotate(15 145 16)" />

        <path d="M195 35 L195 10" />
        <ellipse cx="188" cy="7" rx="8" ry="4" fill="#7FD175" transform="rotate(-20 188 7)" />
        <ellipse cx="202" cy="7" rx="8" ry="4" fill="#7FD175" transform="rotate(20 202 7)" />

        <path d="M250 35 L250 16" />
        <ellipse cx="244" cy="14" rx="6" ry="3" fill="#6EC264" transform="rotate(-20 244 14)" />
        <ellipse cx="256" cy="14" rx="6" ry="3" fill="#6EC264" transform="rotate(20 256 14)" />
      </g>
    </g>
  </svg>
);

/**
 * 6. Growing Workshop: Adults around compost bed, seed packets, terracotta pots.
 */
export const GrowingWorkshopGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="wsBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#DFDCCF" />
        <stop offset="60%" stopColor="#C8C4B2" />
        <stop offset="100%" stopColor="#A8A38E" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#wsBg)" />

    {/* Raised timber garden bed in center */}
    <g transform="translate(120, 260)">
      {/* Raised bed timber walls */}
      <rect x="0" y="60" width="560" height="180" rx="4" fill="#5E3F27" stroke="#3D2919" strokeWidth="4" />
      <line x1="0" y1="120" x2="560" y2="120" stroke="#3D2919" strokeWidth="3" />
      <line x1="0" y1="180" x2="560" y2="180" stroke="#3D2919" strokeWidth="3" />
      {/* Dark rich compost layer */}
      <ellipse cx="280" cy="60" rx="275" ry="45" fill="#241911" stroke="#453020" strokeWidth="3" />
      {/* Compost texture and micro-flora */}
      <g fill="#4E3624">
        <circle cx="160" cy="55" r="14" />
        <circle cx="280" cy="65" r="18" />
        <circle cx="390" cy="52" r="16" />
      </g>
      {/* Small terracotta seedling pots sitting on bed ledge */}
      <g transform="translate(40, 20)">
        <path d="M0 25 L6 48 L28 48 L34 25 Z" fill="#A8563C" stroke="#7A3B28" strokeWidth="1.5" />
        <ellipse cx="17" cy="25" rx="17" ry="5" fill="#C2684D" />
        <path d="M17 25 L17 12" stroke="#52964A" strokeWidth="2.5" />
        <ellipse cx="13" cy="11" rx="4" ry="2" fill="#6DB365" />
      </g>
      <g transform="translate(90, 22)">
        <path d="M0 25 L6 48 L28 48 L34 25 Z" fill="#A8563C" stroke="#7A3B28" strokeWidth="1.5" />
        <ellipse cx="17" cy="25" rx="17" ry="5" fill="#C2684D" />
        <path d="M17 25 L17 8" stroke="#52964A" strokeWidth="2.5" />
        <ellipse cx="22" cy="7" rx="5" ry="2.5" fill="#6DB365" />
      </g>
    </g>

    {/* Adults gathered around the compost table */}
    {/* Person 1 on left with clipboard */}
    <g transform="translate(100, 110)">
      <circle cx="45" cy="45" r="22" fill="#996846" />
      <path d="M20 70 L70 70 L78 200 L12 200 Z" fill="#3A533E" />
      {/* Holding seed guide */}
      <rect x="55" y="105" width="30" height="42" rx="2" fill="#E8DEC8" stroke="#8C7960" strokeWidth="1" transform="rotate(15 55 105)" />
    </g>

    {/* Instructor in middle gesturing */}
    <g transform="translate(350, 85)">
      <circle cx="50" cy="45" r="23" fill="#8C5C38" />
      <path d="M20 72 L80 72 L88 220 L12 220 Z" fill="#2E5A2B" />
      {/* Hands holding a handful of dark crumbly compost */}
      <path d="M25 95 L-10 150 L10 165 L45 110 Z" fill="#8C5C38" />
      <path d="M75 95 L110 150 L90 165 L55 110 Z" fill="#8C5C38" />
      <ellipse cx="50" cy="165" rx="22" ry="9" fill="#241911" />
    </g>

    {/* Person 3 on right listening */}
    <g transform="translate(600, 115)">
      <circle cx="45" cy="45" r="22" fill="#7D4F2E" />
      <path d="M20 70 L70 70 L76 195 L14 195 Z" fill="#B87518" />
    </g>
  </svg>
);

/**
 * 7. Farm Shop and Crates: Overhead still life of wooden crate packed with seasonal vegetables on rough teak wood table.
 */
export const FarmCratesGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="teakTable" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#4A301D" />
        <stop offset="25%" stopColor="#5E3E26" />
        <stop offset="50%" stopColor="#452B19" />
        <stop offset="75%" stopColor="#593A23" />
        <stop offset="100%" stopColor="#3F2716" />
      </linearGradient>
      <linearGradient id="crateWood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#9E7044" />
        <stop offset="100%" stopColor="#734F2C" />
      </linearGradient>
    </defs>
    {/* Rough weathered teak wood tabletop */}
    <rect width="800" height="600" fill="url(#teakTable)" />
    {/* Wood grain grooves */}
    <line x1="200" y1="0" x2="200" y2="600" stroke="#332012" strokeWidth="2" opacity="0.6" />
    <line x1="420" y1="0" x2="420" y2="600" stroke="#332012" strokeWidth="3" opacity="0.6" />
    <line x1="640" y1="0" x2="640" y2="600" stroke="#332012" strokeWidth="2" opacity="0.6" />

    {/* Handcrafted Harvest Crate in Center (Overhead Perspective) */}
    <g transform="translate(140, 80)">
      {/* Outer Crate shadow */}
      <rect x="-10" y="-10" width="540" height="460" rx="6" fill="#1C120A" opacity="0.75" />
      {/* Wooden crate rim */}
      <rect x="0" y="0" width="520" height="440" rx="4" fill="url(#crateWood)" stroke="#55371B" strokeWidth="6" />
      {/* Interior bottom */}
      <rect x="24" y="24" width="472" height="392" fill="#3D2716" />

      {/* Branded Harvest Hour stamp on crate edge */}
      <text x="260" y="18" fill="#52351A" fontSize="11" fontFamily="Fraunces, Georgia, serif" fontWeight="bold" textAnchor="middle" letterSpacing="2">
        HARVEST HOUR · ESTD 2024 · BENGALURU
      </text>

      {/* Fresh Seasonal Vegetables Packed Neatly Inside */}
      {/* Cluster of deep red Heirloom Tomatoes */}
      <g>
        <circle cx="100" cy="110" r="32" fill="#D33528" stroke="#A82318" strokeWidth="2" />
        <circle cx="150" cy="100" r="30" fill="#E24436" stroke="#A82318" strokeWidth="2" />
        <circle cx="115" cy="155" r="34" fill="#C92D21" stroke="#A82318" strokeWidth="2" />
        <circle cx="165" cy="145" r="28" fill="#D9392D" stroke="#A82318" strokeWidth="2" />
        {/* Green tomato calyx stars */}
        <path d="M100 110 L94 104 M100 110 L106 104 M100 110 L100 118" stroke="#3D6B37" strokeWidth="3" />
        <path d="M150 100 L144 94 M150 100 L156 94 M150 100 L150 108" stroke="#3D6B37" strokeWidth="3" />
      </g>

      {/* Fresh leafy Methi & Spinach bunches */}
      <g transform="translate(240, 60)">
        <ellipse cx="70" cy="70" rx="75" ry="45" fill="#386B30" />
        <circle cx="40" cy="60" r="24" fill="#52964A" />
        <circle cx="75" cy="50" r="26" fill="#67B05E" />
        <circle cx="110" cy="65" r="25" fill="#46873D" />
        <circle cx="60" cy="85" r="28" fill="#5BA251" />
        <circle cx="95" cy="90" r="26" fill="#4B8E42" />
        {/* Natural twine tie on bunch */}
        <line x1="20" y1="95" x2="125" y2="95" stroke="#C49B5B" strokeWidth="4" />
      </g>

      {/* Purple Indian Brinjals (Eggplants) */}
      <g transform="translate(70, 240)">
        <ellipse cx="60" cy="50" rx="35" ry="48" fill="#3D1D4A" stroke="#25102E" strokeWidth="2" transform="rotate(-20 60 50)" />
        <ellipse cx="120" cy="65" rx="32" ry="44" fill="#4D255E" stroke="#25102E" strokeWidth="2" transform="rotate(25 120 65)" />
        {/* Green cap */}
        <path d="M45 15 Q60 25 75 15 L60 5 Z" fill="#588C4F" />
        <path d="M110 30 Q125 40 140 30 L125 20 Z" fill="#588C4F" />
      </g>

      {/* Crisp White & Crimson Radishes with Greens */}
      <g transform="translate(240, 200)">
        <path d="M40 30 C50 60 45 130 35 170 C30 130 25 60 35 30 Z" fill="#F0EDE6" stroke="#D5CEC2" strokeWidth="2" />
        <path d="M30 30 Q40 25 50 30 L45 50 L35 50 Z" fill="#C93847" /> {/* Red collar */}
        <path d="M80 20 C90 50 85 120 75 160 C70 120 65 50 75 20 Z" fill="#F0EDE6" stroke="#D5CEC2" strokeWidth="2" />
        <path d="M70 20 Q80 15 90 20 L85 42 L75 42 Z" fill="#C93847" />
      </g>

      {/* Long fresh Drumsticks & vibrant Green Chillies */}
      <g transform="translate(360, 180)">
        {/* Drumsticks */}
        <line x1="20" y1="20" x2="90" y2="210" stroke="#46783A" strokeWidth="12" strokeLinecap="round" />
        <line x1="45" y1="10" x2="115" y2="200" stroke="#558F48" strokeWidth="11" strokeLinecap="round" />
        {/* Bright green chillies */}
        <path d="M-20 120 Q0 150 20 180 Q10 160 -10 130 Z" fill="#46A035" />
        <path d="M-10 150 Q10 180 30 210 Q20 190 0 160 Z" fill="#46A035" />
      </g>
    </g>
  </svg>
);

/**
 * 8. The Long Table: Communal table under shaded pavilion, plated farm food, guests dining, view of organic fields.
 */
export const TheLongTableGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="diningSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#DFD8C4" />
        <stop offset="100%" stopColor="#A6C29E" />
      </linearGradient>
      <linearGradient id="longTableWood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8A5A35" />
        <stop offset="100%" stopColor="#54351D" />
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#diningSky)" />

    {/* Background: Open lush green farm fields bathed in warm afternoon sunlight */}
    <path d="M0 240 Q600 180 1200 240 L1200 460 L0 460 Z" fill="#4C8A45" />
    <path d="M0 310 Q600 260 1200 310 L1200 480 L0 480 Z" fill="#3D7037" />

    {/* Timber Pavilion Structure */}
    {/* High exposed timber beams */}
    <rect x="0" y="0" width="1200" height="45" fill="#422917" />
    <line x1="80" y1="45" x2="160" y2="120" stroke="#5E3C22" strokeWidth="16" />
    <line x1="1120" y1="45" x2="1040" y2="120" stroke="#5E3C22" strokeWidth="16" />
    {/* Giant solid wood pillar on left */}
    <rect x="120" y="45" width="48" height="630" fill="#52341D" stroke="#382110" strokeWidth="3" />
    {/* Giant solid wood pillar on right */}
    <rect x="1032" y="45" width="48" height="630" fill="#52341D" stroke="#382110" strokeWidth="3" />

    {/* Hanging brass lantern */}
    <line x1="600" y1="45" x2="600" y2="140" stroke="#B87518" strokeWidth="3" />
    <polygon points="585,140 615,140 625,180 575,180" fill="#B87518" stroke="#8A5610" strokeWidth="2" />
    <circle cx="600" cy="188" r="8" fill="#FFE59E" />

    {/* Communal Dining Guests sitting on both sides */}
    {/* Far side guests */}
    <g fill="#996846">
      <circle cx="280" cy="330" r="20" />
      <path d="M260 350 L300 350 L305 400 L255 400 Z" fill="#2E5A2B" />

      <circle cx="440" cy="325" r="20" />
      <path d="M420 345 L460 345 L465 400 L415 400 Z" fill="#B87518" />

      <circle cx="600" cy="328" r="20" fill="#8C5C38" />
      <path d="M580 348 L620 348 L625 400 L575 400 Z" fill="#4B6B5D" />

      <circle cx="760" cy="325" r="20" fill="#7D4F2E" />
      <path d="M740 345 L780 345 L785 400 L735 400 Z" fill="#A8563C" />

      <circle cx="920" cy="330" r="20" />
      <path d="M900 350 L940 350 L945 400 L895 400 Z" fill="#3D5337" />
    </g>

    {/* The Long Communal Table */}
    <polygon points="140,430 1060,430 1140,640 60,640" fill="url(#longTableWood)" stroke="#3B2211" strokeWidth="4" />
    {/* Tabletop edge highlight */}
    <polygon points="140,430 1060,430 1055,445 145,445" fill="#A87348" />

    {/* Table settings: Handcrafted terracotta & brass plates with garden-fresh lunch */}
    {/* Place 1 */}
    <g transform="translate(180, 480)">
      <ellipse cx="50" cy="30" rx="42" ry="22" fill="#A8563C" stroke="#7A3B28" strokeWidth="2" />
      <ellipse cx="50" cy="30" rx="34" ry="16" fill="#C2684D" />
      <ellipse cx="50" cy="30" rx="20" ry="10" fill="#52964A" /> {/* Green curry */}
      <circle cx="38" cy="28" r="5" fill="#E24436" />
      <circle cx="105" cy="20" r="10" fill="#C99859" /> {/* Brass tumbler */}
    </g>

    {/* Place 2 */}
    <g transform="translate(380, 490)">
      <ellipse cx="50" cy="30" rx="44" ry="24" fill="#B8860B" stroke="#7A5802" strokeWidth="2" />
      <ellipse cx="50" cy="30" rx="35" ry="18" fill="#D4AF37" />
      <ellipse cx="50" cy="30" rx="22" ry="11" fill="#4B7742" />
      <circle cx="62" cy="28" r="6" fill="#D33528" />
      <circle cx="110" cy="20" r="10" fill="#C99859" />
    </g>

    {/* Communal vegetable bowls down the center */}
    <g transform="translate(560, 470)">
      <ellipse cx="40" cy="25" rx="52" ry="24" fill="#A8563C" stroke="#783420" strokeWidth="2" />
      <ellipse cx="40" cy="25" rx="42" ry="18" fill="#67B05E" />
      <circle cx="28" cy="22" r="7" fill="#E24436" />
      <circle cx="52" cy="24" r="8" fill="#E24436" />
    </g>

    {/* Place 4 */}
    <g transform="translate(740, 490)">
      <ellipse cx="50" cy="30" rx="44" ry="24" fill="#B8860B" stroke="#7A5802" strokeWidth="2" />
      <ellipse cx="50" cy="30" rx="35" ry="18" fill="#D4AF37" />
      <ellipse cx="50" cy="30" rx="22" ry="11" fill="#4B7742" />
      <circle cx="110" cy="20" r="10" fill="#C99859" />
    </g>

    {/* Place 5 */}
    <g transform="translate(930, 480)">
      <ellipse cx="50" cy="30" rx="42" ry="22" fill="#A8563C" stroke="#7A3B28" strokeWidth="2" />
      <ellipse cx="50" cy="30" rx="34" ry="16" fill="#C2684D" />
      <ellipse cx="50" cy="30" rx="20" ry="10" fill="#52964A" />
      <circle cx="105" cy="20" r="10" fill="#C99859" />
    </g>
  </svg>
);

/**
 * 9. Leaf Texture & Soil Detail Shot: Macro curry leaf sprig with dew drops on fertile loam.
 */
export const LeafTextureGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 1200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="loamBg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#221810" />
        <stop offset="50%" stopColor="#352619" />
        <stop offset="100%" stopColor="#1E150E" />
      </linearGradient>
    </defs>
    <rect width="1200" height="240" fill="url(#loamBg)" />

    {/* Earthy soil textures */}
    <g fill="#18110A" opacity="0.6">
      <ellipse cx="120" cy="120" rx="60" ry="25" />
      <ellipse cx="380" cy="80" rx="80" ry="30" />
      <ellipse cx="700" cy="160" rx="95" ry="35" />
      <ellipse cx="980" cy="100" rx="70" ry="28" />
    </g>

    {/* Elegant curving curry leaf stem with leaflets across divider */}
    <path d="M-40 140 Q300 70 600 130 Q900 180 1240 100" stroke="#3D6B37" strokeWidth="5" strokeLinecap="round" />

    {/* Fresh dark green curry leaves with morning dew */}
    {[
      { x: 120, y: 110, angle: -30, r: 24 },
      { x: 180, y: 100, angle: 35, r: 26 },
      { x: 260, y: 95, angle: -25, r: 28 },
      { x: 330, y: 90, angle: 30, r: 27 },
      { x: 420, y: 105, angle: -20, r: 28 },
      { x: 500, y: 120, angle: 25, r: 27 },
      { x: 590, y: 135, angle: -25, r: 29 },
      { x: 670, y: 145, angle: 30, r: 27 },
      { x: 760, y: 155, angle: -20, r: 28 },
      { x: 840, y: 150, angle: 25, r: 26 },
      { x: 920, y: 135, angle: -30, r: 27 },
      { x: 1000, y: 120, angle: 35, r: 25 },
      { x: 1080, y: 105, angle: -25, r: 24 },
    ].map((leaf, i) => (
      <g key={i} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.angle})`}>
        <ellipse cx="0" cy="0" rx={leaf.r} ry={leaf.r * 0.45} fill="#4C8A45" stroke="#2E5A2B" strokeWidth="1.5" />
        <line x1={-leaf.r} y1="0" x2={leaf.r} y2="0" stroke="#6DB365" strokeWidth="1.2" />
        {/* Morning Dew Water Droplet */}
        <circle cx={leaf.r * 0.25} cy="-2" r="3.5" fill="#E8F4F8" fillOpacity="0.85" />
        <circle cx={leaf.r * 0.22} cy="-3" r="1.2" fill="#FFFFFF" />
      </g>
    ))}
  </svg>
);

/**
 * 10. Stylised Map Graphic for Visit Section:
 * Bengaluru at the top, Kanakapura Road running south, Harvest Hour marked at bottom: "58 km · 90 min"
 */
export const RouteMapGraphic: React.FC<IllustrationProps> = ({ className, alt }) => (
  <svg viewBox="0 0 540 680" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={alt}>
    <defs>
      <linearGradient id="mapBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5F7F1" />
        <stop offset="100%" stopColor="#E9EFE4" />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Map Canvas */}
    <rect width="540" height="680" rx="16" fill="url(#mapBg)" stroke="var(--color-border)" strokeWidth="2" />

    {/* Subtle topographic contour lines of Ramanagara Deccan hills */}
    <g stroke="var(--color-text-secondary)" strokeWidth="1" opacity="0.15" fill="none">
      <path d="M40 380 Q90 320 160 350 Q230 380 200 450 Q160 510 80 470 Z" />
      <path d="M60 400 Q100 350 150 370 Q190 400 170 440 Q140 480 90 450 Z" />
      <path d="M380 440 Q440 390 500 420 Q540 460 510 520 Q460 560 400 520 Z" />
      <path d="M400 460 Q440 420 480 440 Q510 470 490 500 Q450 530 415 500 Z" />
    </g>

    {/* Bengaluru Urban Cluster at Top */}
    <g transform="translate(60, 40)">
      {/* City Zone block */}
      <rect x="0" y="0" width="420" height="90" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" filter="url(#shadow)" />
      {/* City grid lines */}
      <line x1="40" y1="20" x2="160" y2="20" stroke="var(--color-border)" strokeWidth="2" />
      <line x1="40" y1="40" x2="200" y2="40" stroke="var(--color-border)" strokeWidth="2" />
      <line x1="80" y1="10" x2="80" y2="70" stroke="var(--color-border)" strokeWidth="2" />
      <line x1="140" y1="10" x2="140" y2="70" stroke="var(--color-border)" strokeWidth="2" />

      {/* City landmark labels */}
      <circle cx="210" cy="45" r="5" fill="#2E5A2B" />
      <text x="225" y="42" fill="var(--color-text)" fontSize="16" fontFamily="Fraunces, Georgia, serif" fontWeight="600">
        Bengaluru (MG Road)
      </text>
      <text x="225" y="60" fill="var(--color-text-secondary)" fontSize="12" fontFamily="Karla, sans-serif">
        Origin · 0 km mark
      </text>
    </g>

    {/* NICE Road Ring Road Junction */}
    <path d="M40 180 Q270 210 500 180" stroke="var(--color-text-secondary)" strokeWidth="3" strokeDasharray="6 4" opacity="0.6" />
    <text x="50" y="172" fill="var(--color-text-muted)" fontSize="10" fontFamily="Karla, sans-serif" letterSpacing="1">
      NICE RING ROAD INTERCHANGE
    </text>

    {/* Kanakapura Road (NH 948) Highway Route */}
    <path
      d="M270 130 L270 210 Q270 280 250 330 Q230 380 230 450 L230 510"
      stroke="#2E5A2B"
      strokeWidth="7"
      strokeLinecap="round"
      fill="none"
    />
    {/* Highway center dash */}
    <path
      d="M270 135 L270 205 Q270 280 250 330 Q230 380 230 450 L230 505"
      stroke="#F3F5EF"
      strokeWidth="2"
      strokeDasharray="8 6"
      fill="none"
    />

    {/* Intermediate Town Markers along the route */}
    {/* Kaggalipura */}
    <circle cx="265" cy="255" r="4" fill="#B87518" />
    <text x="280" y="259" fill="var(--color-text-secondary)" fontSize="12" fontFamily="Karla, sans-serif">
      Kaggalipura · 28 km
    </text>

    {/* Harohalli Industrial Gate */}
    <g transform="translate(230, 480)">
      <circle cx="0" cy="0" r="6" fill="#B87518" stroke="var(--color-surface)" strokeWidth="2" />
      <text x="18" y="4" fill="var(--color-text)" fontSize="13" fontFamily="Karla, sans-serif" fontWeight="600">
        Harohalli Industrial Gate
      </text>
      <text x="18" y="20" fill="var(--color-text-secondary)" fontSize="11" fontFamily="Karla, sans-serif">
        Turn left here (56 km mark)
      </text>
    </g>

    {/* 2 km Farm Track turning left into Bilikal Betta Road */}
    <path
      d="M230 480 Q290 485 330 520 Q360 550 370 575"
      stroke="#B87518"
      strokeWidth="4"
      strokeDasharray="5 4"
      fill="none"
    />
    <text x="310" y="505" fill="#B87518" fontSize="11" fontFamily="Karla, sans-serif" fontWeight="600">
      2 km farm track
    </text>

    {/* Destination Destination Pin: Harvest Hour Farm */}
    <g transform="translate(370, 580)">
      {/* Outer halo */}
      <circle cx="0" cy="0" r="28" fill="#B87518" fillOpacity="0.15" />
      <circle cx="0" cy="0" r="14" fill="#2E5A2B" stroke="#B87518" strokeWidth="3" />
      <circle cx="0" cy="0" r="5" fill="#F3F5EF" />

      {/* Destination Tag */}
      <g transform="translate(-140, 22)">
        <rect x="0" y="0" width="280" height="52" rx="8" fill="var(--color-surface)" stroke="#B87518" strokeWidth="2" filter="url(#shadow)" />
        <text x="140" y="22" fill="var(--color-text)" fontSize="15" fontFamily="Fraunces, Georgia, serif" fontWeight="700" textAnchor="middle">
          Harvest Hour Farm
        </text>
        <text x="140" y="40" fill="#B87518" fontSize="12" fontFamily="Karla, sans-serif" fontWeight="700" textAnchor="middle">
          58 km · ~90 min from MG Road
        </text>
      </g>
    </g>

    {/* Compass Rose */}
    <g transform="translate(470, 80)">
      <circle cx="0" cy="0" r="18" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
      <polygon points="0,-12 4,0 0,12 -4,0" fill="var(--color-border)" />
      <polygon points="0,-12 4,0 0,0" fill="#B87518" />
      <text x="0" y="-14" fill="var(--color-text)" fontSize="10" fontFamily="Karla, sans-serif" fontWeight="bold" textAnchor="middle">
        N
      </text>
    </g>

    {/* Route Note Footer */}
    <g transform="translate(40, 620)">
      <rect x="0" y="0" width="460" height="42" rx="6" fill="var(--color-surface-subtle)" />
      <text x="230" y="26" fill="var(--color-text-secondary)" fontSize="11" fontFamily="Karla, sans-serif" textAnchor="middle">
        Survey No. 112/3, Bilikal Betta Road, Harohalli · South of Bengaluru
      </text>
    </g>
  </svg>
);
