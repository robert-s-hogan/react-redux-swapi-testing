const Cityscape = ({ surfaceColor, cityscape }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`cityscape z-2 absolute bottom-10 left-14 w-full h-full fill-${surfaceColor}-front`}
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g
          transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M5489 7190 c-113 -21 -216 -43 -227 -49 -27 -14 -28 -46 -6 -161 8
-45 14 -83 12 -85 -2 -1 -70 -14 -152 -29 -82 -15 -157 -31 -167 -37 -18 -9
-19 -42 -19 -906 l0 -896 -114 6 c-136 8 -146 3 -146 -74 0 -45 -2 -49 -23
-49 -38 0 -57 -30 -57 -88 l0 -52 -57 0 c-67 0 -117 -21 -147 -63 -21 -28 -21
-36 -24 -963 -2 -817 -4 -934 -17 -934 -12 0 -15 14 -15 59 0 38 -5 63 -14 70
-10 8 -95 11 -300 9 l-286 -3 -2 740 c-3 616 -5 745 -17 768 -20 39 -68 65
-134 73 l-57 7 0 51 c0 29 -5 57 -12 64 -8 8 -64 12 -185 12 l-172 0 -3 653
c-3 604 -4 655 -21 680 -27 41 -61 58 -127 64 l-60 6 0 59 c0 54 -2 59 -26 68
-14 6 -140 10 -282 10 -304 0 -302 0 -302 -84 l0 -53 -71 -5 c-49 -4 -79 -12
-97 -25 -57 -42 -57 -36 -60 -570 l-3 -493 -124 0 c-143 0 -145 -1 -145 -91 0
-35 -3 -50 -10 -43 -5 5 -11 90 -12 189 l-3 180 -508 3 -507 2 -10 -26 c-6
-16 -10 -602 -10 -1614 l0 -1589 -97 -3 -98 -3 -3 -988 -2 -987 5875 0 5875 0
-2 1857 -3 1858 -500 6 c-275 3 -508 2 -517 -3 -17 -8 -18 -44 -18 -548 l0
-540 -167 0 c-93 0 -174 -4 -182 -9 -8 -5 -16 -32 -19 -65 l-4 -56 -37 0 c-69
-1 -115 -17 -146 -53 l-30 -35 0 785 c0 765 0 785 -19 799 -14 10 -49 14 -116
14 l-97 0 -6 872 c-4 479 -7 1008 -7 1174 0 290 -1 304 -19 314 -13 6 -184 10
-487 10 l-467 0 -199 -35 c-109 -19 -207 -41 -218 -47 -24 -15 -25 -44 -6
-143 8 -38 13 -71 12 -73 -2 -1 -54 -11 -117 -23 -149 -26 -177 -36 -185 -62
-4 -12 -5 -267 -3 -567 l4 -545 -65 -3 c-35 -2 -70 -8 -77 -14 -10 -8 -13
-103 -13 -444 0 -283 -3 -434 -10 -434 -6 0 -10 56 -10 149 0 113 -3 151 -14
160 -9 8 -153 10 -517 9 l-504 -3 -3 -397 -2 -398 -100 0 -100 0 0 758 0 759
-21 19 c-20 18 -36 19 -260 16 l-239 -4 0 1066 c0 1053 0 1066 -20 1086 -20
20 -33 20 -567 19 l-548 -1 -206 -38z"
          />
        </g>
      </svg>
    </>
  );
};

export default Cityscape;
