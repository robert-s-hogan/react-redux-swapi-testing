const Swamp = ({ surfaceColor }) => {
  return (
    <>
      <p className="text-white">Swamp: {surfaceColor}</p>
      <div className="bg-murky h-28 lg:h-24 xl:h-36 w-full absolute bottom-0 z-20"></div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        className={`z-30 top-16 lg:top-0 2xl:top-24 absolute bg-swamp`}
        viewBox="0 0 900.000000 1350.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g
          transform="translate(0.000000,1350.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M135 10112 c-13 -13 -104 -32 -122 -25 -11 4 -13 -810 -13 -5041 l0
-5046 4500 0 4500 0 0 1398 0 1398 -23 -1 c-12 0 -35 -10 -51 -23 -40 -31 -60
-29 -52 4 8 29 -12 30 -26 1 -4 -9 -12 -25 -17 -34 -4 -10 -20 -19 -35 -21
-14 -2 -26 -7 -26 -11 0 -4 -14 -8 -31 -9 -42 -1 -59 -18 -53 -52 4 -15 1 -31
-5 -34 -11 -7 -14 0 -15 43 -1 34 -24 38 -36 5 -10 -25 -12 -26 -24 -9 -10 14
-17 15 -32 7 -11 -6 -29 -10 -39 -9 -12 1 -24 -7 -29 -19 -6 -12 -29 -31 -53
-43 -24 -11 -43 -26 -43 -33 0 -9 -3 -9 -12 1 -11 10 -10 15 4 25 22 16 23 36
3 36 -8 0 -15 -5 -15 -11 0 -6 -10 -21 -22 -34 -19 -20 -24 -21 -47 -9 -14 7
-35 11 -47 8 -22 -6 -64 25 -64 46 0 13 -17 13 -25 0 -3 -6 1 -13 9 -16 25
-10 19 -34 -8 -34 -13 0 -30 -7 -37 -16 -10 -12 -23 -14 -51 -10 -37 6 -38 5
-38 -24 0 -39 -19 -39 -26 -1 -8 38 -32 48 -44 18 l-9 -22 0 22 c-1 16 -9 24
-28 29 -16 4 -36 16 -46 28 -16 19 -18 20 -30 4 -12 -15 -14 -15 -23 -1 -11
18 -59 25 -85 12 -11 -5 -28 -13 -39 -19 -30 -15 -50 -12 -50 8 0 23 -19 42
-42 42 -11 0 -15 -5 -12 -14 9 -24 -56 -25 -83 -2 -12 10 -34 19 -48 19 -14 0
-28 3 -31 8 -10 17 -24 9 -35 -18 l-11 -28 -10 28 c-5 15 -16 27 -23 27 -7 0
-15 5 -17 12 -2 6 -12 9 -21 5 -22 -8 -35 -39 -19 -45 21 -7 13 -22 -12 -22
-14 0 -32 9 -40 22 -19 27 -86 37 -86 13 0 -9 9 -15 24 -15 37 0 56 -10 56
-31 0 -20 -34 -27 -44 -10 -3 5 -17 11 -30 13 -17 4 -23 1 -19 -8 10 -26 -29
-29 -49 -3 -41 52 -48 59 -59 59 -8 0 -6 -7 5 -18 15 -18 15 -20 -3 -36 -12
-11 -21 -14 -26 -7 -9 15 -42 14 -49 -2 -3 -6 -4 -3 -3 8 3 27 -47 31 -73 5
-11 -11 -22 -14 -27 -9 -6 6 -28 -1 -57 -16 -27 -14 -51 -23 -54 -20 -4 3 0
10 8 15 13 8 13 11 -2 26 -9 9 -28 17 -42 17 -14 0 -26 3 -26 8 0 5 -9 9 -20
9 -11 0 -20 -6 -20 -13 0 -32 -91 -43 -127 -14 -10 7 -12 3 -9 -19 2 -16 1
-23 -1 -16 -7 19 -51 15 -55 -5 -2 -12 -6 -14 -11 -6 -4 6 0 18 8 26 35 35 7
57 -29 24 -17 -16 -34 -23 -50 -20 -13 3 -42 -4 -65 -15 -26 -13 -41 -16 -40
-9 3 28 -3 36 -32 42 -23 5 -34 3 -40 -8 -7 -12 -17 -12 -58 -3 -28 6 -56 17
-62 23 -8 8 -18 9 -29 3 -14 -7 -24 -3 -44 16 -15 16 -32 24 -41 20 -21 -8
-19 -26 3 -26 11 0 23 -10 29 -23 7 -17 5 -26 -11 -41 -14 -14 -18 -15 -13 -4
6 16 -34 63 -45 53 -3 -4 -18 5 -33 19 -29 27 -55 34 -55 15 0 -7 7 -17 17
-24 10 -7 14 -19 10 -29 -6 -14 -10 -14 -27 -4 -16 10 -28 10 -62 -3 -44 -16
-78 -15 -78 2 0 5 11 9 25 9 14 0 25 6 25 13 0 23 -13 28 -31 11 -16 -14 -18
-14 -30 8 -6 13 -13 24 -14 26 -1 2 -16 -11 -33 -28 -18 -17 -41 -30 -56 -30
-29 0 -43 15 -21 24 20 7 19 22 -2 30 -10 4 -26 -3 -42 -18 -26 -24 -40 -29
-76 -27 -15 1 -16 4 -7 13 17 17 15 45 -4 52 -21 8 -34 -1 -27 -19 7 -20 -25
-19 -48 1 -16 14 -16 18 -3 31 8 8 12 19 9 24 -8 12 -45 12 -45 -1 0 -5 -13
-10 -30 -10 -19 0 -34 -7 -42 -20 -7 -11 -21 -20 -30 -20 -10 0 -18 -4 -18 -9
0 -5 -17 -1 -37 9 -21 10 -41 16 -46 13 -4 -2 -15 1 -23 8 -13 11 -19 10 -32
-8 -27 -33 -51 -36 -64 -8 -12 27 -28 31 -59 15 -16 -9 -21 -7 -29 15 -6 16
-15 23 -21 19 -7 -4 -28 -7 -48 -8 -30 -1 -36 -4 -34 -21 1 -11 0 -14 -3 -7
-3 6 -19 12 -34 12 -19 0 -33 7 -40 20 -13 25 -30 26 -30 2 0 -32 -12 -32 -47
-1 -37 32 -59 34 -56 3 1 -10 0 -13 -3 -6 -3 6 -10 12 -15 12 -20 0 -104 43
-115 58 -10 14 -14 14 -29 2 -10 -8 -25 -15 -34 -15 -10 0 -15 -7 -13 -17 3
-21 -16 -23 -53 -6 -14 6 -25 19 -25 30 0 22 -26 24 -38 2 -6 -11 -17 -15 -31
-11 -16 4 -21 1 -21 -13 0 -11 -5 -22 -10 -25 -15 -9 -25 24 -11 38 6 6 11 15
11 21 0 5 -16 -5 -35 -24 -30 -29 -35 -31 -36 -14 -1 10 -1 23 0 28 1 5 -1 16
-4 24 -7 20 -31 -1 -40 -36 -13 -53 -55 -77 -55 -31 0 20 -24 26 -35 9 -10
-17 -35 -11 -69 15 -18 14 -40 25 -49 25 -9 0 -21 8 -26 18 -10 16 -12 16 -25
-1 -13 -17 -14 -16 -19 5 -4 13 -4 34 -1 46 5 17 1 24 -19 31 -14 5 -28 15
-32 20 -3 6 -21 11 -39 11 -19 0 -39 7 -46 15 -17 20 -106 20 -126 0 -9 -8
-25 -15 -37 -15 -12 0 -31 -7 -41 -15 -11 -8 -28 -15 -39 -15 -16 0 -18 -6
-15 -30 3 -17 1 -30 -4 -30 -4 0 -8 9 -8 21 0 13 -10 23 -31 31 -28 10 -30 13
-24 44 5 27 2 36 -12 41 -10 4 -22 12 -26 20 -4 7 -12 13 -17 13 -15 0 -12
-21 4 -34 10 -8 12 -17 5 -35 -8 -20 -14 -23 -41 -17 -22 4 -34 2 -43 -11 -11
-15 -13 -15 -20 7 -5 16 -3 25 9 32 20 11 21 38 1 38 -8 0 -15 -9 -15 -20 0
-11 -6 -20 -14 -20 -26 0 -37 -25 -20 -48 14 -21 14 -22 -10 -22 -27 0 -35 14
-13 24 6 3 -1 4 -18 3 -26 -2 -30 1 -27 20 2 17 -1 21 -12 17 -13 -5 -16 2
-16 37 0 31 -3 40 -10 29 -13 -21 -22 -7 -25 44 -4 58 -28 80 -107 100 -35 9
-68 22 -73 29 -16 19 -74 47 -98 47 -12 0 -35 7 -51 15 -15 8 -36 15 -46 15
-10 0 -23 7 -30 15 -7 8 -21 15 -31 15 -10 0 -21 5 -24 11 -4 5 -17 15 -28 20
-12 5 -42 21 -66 34 -24 14 -48 25 -52 25 -4 0 -28 14 -52 30 -25 17 -47 30
-51 30 -3 0 -21 11 -41 24 -19 14 -58 29 -86 35 -28 6 -58 15 -67 20 -9 5 -54
11 -100 14 -45 3 -88 9 -95 15 -14 11 -94 28 -119 24 -10 -1 -43 9 -74 23 -31
14 -64 25 -74 25 -10 0 -23 7 -30 15 -7 8 -20 15 -29 15 -9 0 -29 7 -45 15
-15 8 -47 15 -70 15 -23 0 -51 7 -62 15 -10 8 -31 15 -46 15 -14 0 -41 12 -58
26 -34 29 -97 64 -115 64 -23 0 -75 53 -75 77 0 13 -8 36 -17 50 -10 14 -16
39 -14 55 2 22 -4 32 -28 46 -40 22 -40 52 -1 74 39 22 39 47 0 55 -30 5 -30
6 -30 72 0 44 -5 74 -15 87 -20 26 -19 31 8 38 32 8 63 75 48 104 -15 29 -14
62 3 68 17 7 33 44 41 102 5 33 3 48 -10 62 -16 18 -16 19 6 24 13 3 44 7 69
10 79 8 174 26 193 36 12 8 26 6 48 -6 25 -13 49 -14 131 -8 70 5 106 3 121
-5 32 -17 57 -4 106 52 44 52 47 62 30 100 -8 19 -8 31 3 52 13 23 13 34 1 69
-7 22 -18 49 -24 59 -12 22 -15 19 41 47 25 13 61 41 80 62 24 28 47 42 75 48
88 19 132 35 181 66 41 26 53 39 58 67 7 35 24 47 72 47 12 0 35 7 50 15 16 8
45 15 64 15 20 0 69 12 110 26 75 25 97 32 180 57 25 7 63 22 86 34 50 26 152
63 176 63 9 0 32 6 50 14 18 8 51 22 73 31 22 9 48 20 58 26 9 5 39 12 65 15
26 4 70 17 97 30 28 12 73 26 100 29 57 8 165 35 180 45 6 4 23 10 39 14 16 4
41 16 54 27 14 10 33 19 43 19 10 0 21 5 24 10 3 6 23 10 44 10 42 0 86 36 76
62 -10 25 26 53 115 87 47 19 92 39 100 45 28 22 119 59 185 75 17 4 40 13 52
19 32 18 90 15 97 -4 3 -8 3 -33 0 -54 -4 -22 -2 -40 4 -44 14 -8 62 14 62 28
0 6 11 23 25 38 29 31 31 44 10 52 -20 7 -19 53 1 64 15 8 32 69 34 114 0 10
-10 20 -24 24 -48 12 -56 32 -44 112 7 45 16 72 24 72 26 0 23 19 -12 74 -36
55 -48 63 -69 48 -20 -14 -15 -106 10 -184 33 -102 30 -109 -53 -103 -77 5
-164 19 -207 34 -16 6 -73 15 -125 21 -134 14 -216 26 -229 34 -6 4 -44 9 -83
12 -40 3 -89 10 -108 15 -60 16 -252 23 -880 33 -179 3 -372 8 -430 11 -96 5
-107 8 -128 32 -13 14 -25 38 -29 53 -9 47 -47 75 -99 72 -56 -2 -56 -2 -105
-68 l-40 -54 -74 0 c-66 0 -77 3 -97 25 -53 56 -131 105 -169 105 -64 0 -94
-11 -138 -50 -37 -33 -47 -37 -68 -29 -13 5 -52 9 -86 9 -34 1 -91 7 -127 15
-36 8 -100 14 -143 15 -64 0 -92 6 -153 31 -102 43 -138 94 -94 134 22 20 25
46 10 75 -8 15 -6 20 13 25 12 4 36 12 52 20 36 16 114 35 175 44 25 4 51 10
58 15 12 7 43 13 172 34 25 4 65 5 90 2 25 -3 138 -3 251 0 185 4 209 7 228
24 18 17 29 18 93 10 131 -15 442 -1 468 21 8 7 26 15 39 17 38 5 49 33 28 70
-10 17 -16 32 -15 33 9 5 169 38 203 41 166 16 253 28 270 37 11 6 61 12 111
14 50 2 122 8 160 14 38 5 86 13 107 16 20 3 43 1 50 -5 6 -5 30 -13 52 -17
l40 -8 -29 -8 c-16 -5 -63 -9 -103 -11 -46 -1 -78 -7 -85 -15 -8 -9 -46 -13
-144 -13 -146 0 -170 -5 -208 -46 -24 -27 -24 -29 -8 -47 25 -28 80 -49 152
-59 81 -11 338 -12 487 -2 98 6 114 10 137 31 31 28 24 51 -24 80 -35 20 -40
38 -7 28 44 -13 205 -26 367 -29 91 -2 176 -7 190 -13 46 -19 160 -24 241 -12
63 10 84 10 103 0 13 -8 29 -10 35 -6 7 4 17 2 24 -3 32 -25 116 -34 358 -39
187 -4 262 -2 278 7 18 9 26 9 38 -2 13 -10 62 -12 210 -11 l194 3 10 -29 c9
-24 17 -30 57 -36 41 -7 44 -9 22 -16 -14 -4 -51 -7 -83 -8 -97 -2 -126 -34
-64 -71 69 -43 257 -14 257 40 0 27 23 35 58 21 15 -6 71 -17 125 -25 54 -7
103 -18 110 -25 6 -6 31 -11 57 -11 67 0 135 -23 136 -46 1 -45 24 -74 59 -74
11 0 36 -13 56 -29 23 -19 40 -27 48 -21 18 10 92 1 111 -15 15 -13 22 -15
123 -38 36 -8 69 -23 87 -40 25 -24 31 -26 54 -16 20 9 32 9 51 1 14 -7 34
-12 43 -12 9 -1 33 -14 52 -30 19 -17 46 -30 61 -30 15 0 46 -7 69 -15 23 -8
55 -15 70 -15 15 0 51 -7 79 -17 44 -14 57 -14 91 -3 37 12 47 11 104 -9 35
-12 88 -26 117 -31 276 -43 277 -44 259 -65 -9 -10 0 -14 42 -19 29 -4 82 -13
118 -21 102 -22 256 -44 360 -50 169 -10 313 -27 395 -46 44 -10 104 -19 133
-19 l52 0 0 1269 0 1269 -32 5 c-18 4 -58 10 -89 15 -31 6 -64 14 -75 20 -10
5 -44 17 -74 27 -30 9 -89 30 -130 45 -154 57 -165 58 -550 47 -78 -2 -85 -4
-85 -22 0 -15 -8 -21 -32 -23 -28 -3 -33 -7 -33 -29 0 -22 -2 -24 -16 -12 -14
11 -18 10 -31 -6 -7 -11 -26 -21 -41 -23 -15 -2 -36 -4 -47 -5 -14 -2 -19 -8
-17 -21 3 -14 -1 -17 -13 -12 -13 4 -15 2 -10 -13 7 -25 -9 -35 -34 -21 -27
14 -69 -3 -81 -35 -13 -34 -50 -35 -50 0 0 17 -5 25 -18 25 -24 0 -42 -19 -35
-37 5 -11 -2 -14 -28 -11 -27 2 -34 -1 -34 -14 0 -10 -6 -23 -13 -30 -11 -11
-16 -10 -27 6 -15 19 -35 14 -35 -10 0 -15 -4 -17 -70 -18 -66 -2 -107 -22
-113 -55 -6 -31 -34 -48 -51 -31 -7 7 -3 16 12 30 25 23 27 35 11 46 -7 4 -16
-1 -21 -10 -5 -9 -21 -21 -35 -27 -14 -5 -23 -15 -20 -22 7 -19 -21 -80 -33
-72 -5 3 -10 15 -10 26 0 20 -24 26 -35 9 -3 -5 -25 -10 -49 -10 -23 0 -51 -7
-62 -15 -25 -19 -34 -19 -34 0 0 8 -4 15 -10 15 -5 0 -7 -6 -4 -14 4 -9 -7
-15 -35 -20 -27 -4 -41 -11 -41 -21 0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8
-7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -8 15 -17 15 -9 0 -24 7 -34 16 -10 9
-23 13 -29 9 -15 -9 -2 -25 21 -25 23 0 25 -15 3 -24 -24 -9 -29 -8 -60 17
-35 27 -94 31 -94 5 0 -35 -12 -48 -46 -48 -29 0 -34 3 -33 23 0 12 3 16 6 10
7 -19 31 -16 43 6 14 27 15 26 -32 26 -36 0 -43 -3 -43 -20 0 -12 -8 -21 -20
-24 -11 -2 -25 -11 -31 -20 -11 -14 -15 -14 -38 8 -25 23 -27 24 -45 7 -19
-17 -20 -17 -37 3 -13 15 -22 18 -36 10 -10 -5 -18 -16 -18 -23 0 -21 -32 -29
-49 -11 -14 13 -13 16 3 28 14 10 16 16 7 21 -6 4 -18 2 -26 -4 -9 -7 -26 -9
-45 -5 -24 5 -35 3 -45 -11 -11 -16 -15 -16 -29 -5 -9 8 -20 10 -24 6 -4 -4
-1 -10 6 -12 6 -3 12 -14 12 -26 -1 -20 -2 -20 -11 -5 -13 23 -87 44 -102 29
-15 -15 -44 -14 -49 1 -4 11 -22 13 -183 20 -75 3 -80 2 -76 -17 3 -19 2 -19
-16 -2 -11 9 -30 17 -42 17 -34 0 -113 -20 -143 -36 -18 -10 -40 -13 -62 -9
-22 5 -44 1 -65 -10 -18 -9 -40 -14 -49 -12 -9 2 -28 -2 -42 -8 -40 -20 -98
-27 -106 -14 -3 6 -30 21 -58 34 -28 13 -62 35 -75 49 -27 29 -51 34 -51 11 0
-8 7 -15 15 -15 8 0 15 -9 15 -20 0 -18 -3 -19 -22 -9 -13 6 -31 20 -41 30
-10 11 -24 16 -34 12 -12 -5 -15 -2 -10 10 8 22 -10 33 -63 40 -25 2 -53 8
-62 12 -15 6 -18 2 -18 -20 0 -22 -3 -26 -17 -20 -31 13 -65 14 -89 3 -31 -14
-61 -3 -44 17 15 18 5 35 -20 35 -12 0 -21 10 -25 29 -3 16 -17 41 -30 55
l-23 25 29 6 c34 8 46 22 30 38 -15 15 -14 27 4 27 17 0 20 26 4 35 -6 4 -16
-1 -24 -11 -13 -18 -14 -18 -20 -2 -9 24 3 40 26 33 25 -8 39 24 16 37 -11 6
-17 22 -17 43 0 24 -6 38 -19 45 -27 14 -41 13 -41 -4 0 -8 -4 -17 -9 -20 -15
-10 -42 5 -39 22 2 10 -11 23 -33 33 -19 10 -41 24 -48 33 -18 22 -31 20 -31
-5 0 -11 -5 -17 -10 -14 -7 4 -7 12 0 25 15 27 14 27 -39 22 -47 -4 -48 -3
-54 26 -5 23 -13 31 -39 36 -108 23 -680 33 -898 15 -69 -5 -203 -10 -298 -10
-95 -1 -175 -5 -178 -10 -9 -15 -21 -10 -27 10 -4 18 -44 27 -130 31 -11 1
-16 8 -15 18 2 10 -9 22 -28 32 -17 8 -29 21 -27 28 7 17 -14 15 -21 -3 -3 -8
-14 -15 -25 -15 -14 0 -21 10 -28 37 -7 31 -16 40 -61 62 -48 23 -53 29 -48
52 5 26 4 27 -42 24 -51 -2 -92 23 -92 57 0 13 -10 19 -41 24 -22 4 -43 13
-46 20 -3 8 -15 14 -27 14 -38 0 -86 73 -78 117 5 23 -20 25 -43 3 -19 -18
-23 -29 -18 -53 l6 -30 -21 21 c-25 25 -28 42 -10 60 15 15 -6 41 -49 59 -18
7 -33 18 -33 24 0 23 -33 43 -67 41 -52 -4 -73 6 -73 34 0 17 -6 24 -19 24
-11 0 -23 -4 -26 -10 -3 -5 -16 -10 -28 -10 -16 0 -18 3 -9 12 18 18 15 27
-13 38 -17 7 -23 14 -18 26 6 15 1 16 -35 10 -34 -5 -42 -3 -42 9 0 17 -25 21
-35 5 -3 -5 -15 -10 -27 -10 -17 0 -18 2 -8 15 17 21 -3 46 -22 27 -9 -9 -14
-7 -24 5 -10 15 -15 16 -40 3 -16 -8 -32 -16 -36 -18 -5 -2 -8 8 -8 21 0 20
-6 27 -30 32 -16 4 -34 3 -40 0 -15 -9 -62 3 -56 14 3 4 27 6 54 3 32 -3 52 0
57 8 5 8 0 11 -16 9 -13 -1 -53 1 -89 5 -36 3 -158 8 -272 10 -119 2 -213 7
-220 13 -7 6 -49 13 -93 17 -44 3 -111 15 -150 27 -143 42 -312 68 -330 51z
m1745 -498 c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6 -3 10
-13 10 -21z m5345 -990 c13 -5 14 -8 3 -15 -19 -13 -28 -11 -28 6 0 17 2 18
25 9z m-2705 -92 c0 -13 -12 -22 -22 -16 -10 6 -1 24 13 24 5 0 9 -4 9 -8z
m-1719 -417 c26 -21 37 -22 225 -24 108 -1 201 -4 206 -7 5 -3 7 -11 5 -18
-20 -53 -19 -54 20 -54 21 1 59 -5 85 -11 36 -9 52 -10 68 -1 l22 12 -28 29
c-24 25 -26 31 -14 39 21 14 36 12 50 -5 7 -8 26 -15 42 -15 17 0 71 -7 122
-15 50 -8 134 -22 186 -31 52 -8 109 -20 125 -26 40 -13 92 -25 195 -43 47 -8
110 -21 141 -28 57 -12 116 -44 104 -55 -3 -4 -34 -12 -68 -17 -60 -10 -62
-11 -62 -40 0 -20 7 -33 21 -40 12 -6 28 -16 35 -22 18 -14 131 -33 200 -33
73 0 88 -10 65 -44 -19 -30 -49 -33 -120 -14 -43 11 -46 11 -70 -15 -16 -17
-35 -27 -54 -27 -15 0 -33 -5 -39 -11 -6 -6 -63 -13 -127 -16 -94 -5 -119 -3
-134 9 -47 40 -122 46 -184 13 -15 -7 -48 -16 -75 -20 -39 -5 -52 -3 -62 9
-11 13 -35 16 -118 16 -62 0 -113 5 -126 12 -15 8 -88 13 -217 14 -523 6 -953
15 -962 20 -5 3 -97 6 -204 6 l-196 1 -9 23 c-7 20 -16 24 -48 24 -22 0 -50 4
-63 9 -13 5 -68 17 -123 27 -55 9 -119 23 -143 30 -23 8 -81 14 -127 14 -77 0
-110 10 -86 24 11 7 390 22 781 31 146 4 290 11 320 16 30 5 96 13 145 19 121
15 191 36 215 67 24 31 25 43 4 43 -9 0 -31 9 -48 19 -22 14 -68 23 -164 32
-78 7 -128 16 -120 20 14 10 -36 14 -117 10 -42 -2 -54 1 -70 20 -11 12 -15
19 -8 15 7 -4 27 1 45 10 25 13 72 19 203 24 233 10 323 3 356 -25z m-626 -16
c4 -6 4 -13 0 -17 -4 -4 -10 -1 -12 5 -3 10 -27 11 -94 6 -64 -4 -89 -3 -89 6
0 15 186 15 195 0z m1410 -810 l16 -30 -28 3 c-22 2 -29 9 -31 31 -5 38 23 36
43 -4z m-171 -4455 c23 -9 1 -34 -30 -34 -28 0 -30 8 -6 26 21 16 17 15 36 8z
m101 -15 c10 -15 -1 -23 -20 -15 -9 3 -13 10 -10 16 8 13 22 13 30 -1z m-21
-55 c8 -21 8 -24 -3 -24 -5 0 -11 9 -14 20 -6 24 8 27 17 4z m102 -9 c18 -15
18 -15 -5 -13 -14 2 -26 9 -29 16 -5 17 10 15 34 -3z m114 -35 c18 -6 4 -8
-48 -9 -47 -1 -71 3 -67 9 7 12 79 12 115 0z m660 -15 c0 -8 -7 -15 -15 -15
-8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m4480 5 c12 -8 11 -10 -7
-10 -13 0 -23 5 -23 10 0 13 11 13 30 0z m-3505 -40 c-3 -5 0 -18 7 -29 10
-17 10 -23 0 -33 -10 -10 -14 -8 -18 10 -4 12 -10 22 -15 22 -14 0 -11 38 4
43 16 6 29 -2 22 -13z m-1715 -70 c0 -5 -9 -10 -19 -10 -11 0 -23 5 -26 10 -4
6 5 10 19 10 14 0 26 -4 26 -10z m1820 -10 c0 -5 -7 -10 -15 -10 -8 0 -15 5
-15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m1280 0 c0 -5 -10 -10 -22 -10 -19 0
-20 2 -8 10 19 13 30 13 30 0z m755 0 c4 -6 -5 -10 -19 -10 -14 0 -26 5 -26
10 0 6 9 10 19 10 11 0 23 -4 26 -10z m332 -11 c26 -16 31 -24 21 -30 -24 -16
-45 -9 -56 16 -20 43 -15 45 35 14z"
          />
          <path d="M3148 8013 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z" />
          <path
            d="M2755 7210 c-8 -13 20 -24 36 -15 8 6 7 10 -2 16 -18 11 -26 11 -34
-1z"
          />
          <path
            d="M5594 6935 c-13 -32 23 -48 47 -19 10 13 10 17 -2 25 -21 13 -39 11
-45 -6z"
          />
          <path
            d="M6343 6752 c-60 -25 -83 -49 -83 -89 0 -37 12 -44 97 -63 63 -15 317
-14 345 1 41 21 68 52 68 79 0 36 -63 64 -149 66 -60 2 -130 9 -206 19 -16 3
-49 -3 -72 -13z"
          />
          <path
            d="M4875 6450 c-3 -5 -24 -10 -45 -10 -21 0 -41 -4 -45 -9 -9 -15 50
-51 84 -51 34 0 53 27 43 62 -5 19 -27 24 -37 8z"
          />
          <path
            d="M7672 6423 c2 -10 10 -18 18 -18 22 0 18 29 -3 33 -14 3 -18 -1 -15
-15z"
          />
          <path
            d="M7928 6323 c-32 -5 -52 -27 -44 -48 4 -12 24 -15 93 -15 86 0 132 12
140 37 2 6 -4 14 -14 16 -29 8 -145 15 -175 10z"
          />
          <path
            d="M1656 4239 l-49 -30 20 -21 c23 -23 115 -37 250 -38 101 0 133 10
133 45 0 19 -6 26 -27 30 -16 4 -50 12 -78 20 -27 8 -84 17 -125 20 -72 5 -78
4 -124 -26z"
          />
          <path d="M3130 2981 c0 -5 7 -14 15 -21 18 -15 42 1 31 19 -8 13 -46 15 -46 2z" />
          <path
            d="M3459 2914 c-11 -14 -10 -16 9 -12 13 1 23 7 23 13 1 17 -17 16 -32
-1z"
          />
          <path
            d="M5210 2700 c0 -13 5 -20 13 -17 6 2 12 10 12 17 0 7 -6 15 -12 18 -8
2 -13 -5 -13 -18z"
          />
          <path
            d="M8210 2665 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
-15 -7 -15 -15z"
          />
          <path d="M6832 2651 c4 -13 18 -16 19 -4 0 4 -5 9 -11 12 -7 2 -11 -2 -8 -8z" />
          <path
            d="M8300 2610 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11
0 -20 -4 -20 -10z"
          />
        </g>
      </svg>
    </>
  );
};
export default Swamp;
