const Forest = ({ surfaceColor }) => {
  return (
    <>
      <p className="text-white">
        <span className="bg-black">{surfaceColor}</span>
      </p>
      <svg
        className={`forest z-3 h-full bg-tree absolute bottom-10 -right-8 ${surfaceColor}`}
        viewBox="0 0 200 40"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          id="trees"
          d="M200,12.08h-.22c-.37-.05-.11-.39.12-.71l0-.06c.11-.15.06-.21,0-.26s-.3-.08-.38-.19-.37-.34-.09-.58-.16-.21-.36-.38a.66.66,0,0,1-.19-.45c-.95,0-.79.57-1,1s.28.39,0,.72-1.18,0-.9.43.78.22.27.74-2.56.1-2.4.31,1.46.17,1.61.48,0,.53-.47.89-.94.09-1.1.4.4.63.12.63-.71-.12-.67.19.47.4.55.81-.39,0-1,.33,1.45.7,1,1-1.81-.48-1.77-.05,1.22.89.43.89-.9,0-.43.48a8.76,8.76,0,0,0,1.2.74,5.89,5.89,0,0,1-.53.44c-.48.07-1.05.12-1,.35a.29.29,0,0,0,.11.2,3.66,3.66,0,0,1-1.54.44c-1,0-1,.37.18-.94s1.85-3.84,1.41-3.43a2.35,2.35,0,0,1-1.58.48c-.43,0-1.77-.27-1.06-1.09s1.41-3.43.88-3.23-.62.76-1.85.55.08-1.58.44-2.46.09-1.17-.71-.35-1.14,0-1.41-.62.27-1.51,0-2.54A3.8,3.8,0,0,0,187,5.84c-.88-.07-1.06.48-1.08,1.37s-1,3-1.3,2.47-.71-1.23-.88.07,1.14,2.13.35,1.79-.53-1.24-1.24-.42.09,1,.89,1.79.08,1.44-.44,1.37a4.32,4.32,0,0,1-2-1.23c-.71-.69-.79-.48-.79.41S182.28,15,183,15.79s-1,1-1.49.75-.8.35-.36,1.31S180.52,19,179.81,19s-.62-1.57-1.32-.75-.44,2.29.53,3.8,1.44,2,.83,2.08a1.81,1.81,0,0,1-1.19-.29c.17-.32.31-.69-.15-.5l-.41.14c-.29-.2-.61-.44-1-.72l.1-.09c.44-.33.71-1.1.14-.93a2.87,2.87,0,0,0-.84.57c-.25-.14-.42-.16-.53-.1,0-.23.23-.6.39-.91s.68-.81.19-.7-.43-.18-.77-.21c0,0,0-1.44-.26-1.58s-.07,1.23-.21,1.47-.76,0-1,0,.79.75.74,1-1.47.17-1.61-.21-.33.32.21.74.91,1.56.69,1.6a4.84,4.84,0,0,1-2.1-1.16c-.28-.44.3,1.89,1.09,2.23s0,.33-.83.6-.65.67-.11.89a6.27,6.27,0,0,1,.94.5h-.06c-.41,0-.47.2-.33.52a7.93,7.93,0,0,1-2-.62c-.31-.21-.22,0-.05.29-.3,0-.71-.05-.58-.2s.51-.49.21-.56-1.06,0-1.12-.34.27-.35.88-.44,1.12-.64,1.11-.83-.54-.07-1.11.05a4,4,0,0,1-2-.14c-.42-.21.21-.31.85-.33s.64-.43,1.06-.66,1.72-.73,1-.71a11.82,11.82,0,0,1-1.73-.26c-.27,0-.24-.45-.12-.61s.58-.38.21-.54-1.24.14-1.09-.31,1-1,.5-1-1.8-.35-1.85-.61.63-.33.75-.57-.52-.33-.82-.37-.06-.43.12-.76-.21-.23-.32-.44-.28-.33-.07-.57-.07-.25-.27-.38c-1.12-.72-.6-.82-.63-1.14s-.79-1.49-1.49.25c-.27.65-.79.19-1.15,1.22-.13.35-.73.33-.52.8s.25.22-.15.74-1.6.09-1.48.3.76.45.88.76,0,.51-.36.87-.73.09-.85.4.3.61.09.61-.55-.12-.52.19.37.4.43.8-1,.59-1.48.9,1.12.68.75,1-1.39-.47-1.36-.05.69.74.51.84c0-.05-.1-.06-.21,0-.53,0-.64,0-.37.38-.26.23-.45.34-.58.3s0-.22.24-.8A1.55,1.55,0,0,0,158.4,23c-.21-.31-.18.29-.39.29s-.52-.08-.39-.44,0-.58-.11-.5-.65,0-.44-.28.73-.55.73-.89,0-.42-.23-.16a1.26,1.26,0,0,1-.6.47c-.16,0-.37-.21-.13-.52s.46-.36.26-.68-.13,0-.37.16.16-.18.11-.68-.16-.23-.26,0-.38-.6-.39-.94-.06-.55-.32-.52a1.83,1.83,0,0,0-.18.55c-.08.39.08.73,0,1s-.18.55-.42.23-.31-.2-.2.14.49.85.13.93-.4-.13-.55-.21,0,.92.26,1.23-.19.41-.32.41a.58.58,0,0,1-.46-.18c-.13-.15.08.81.41,1.3s.36.36.06.36a1.54,1.54,0,0,1-1-.69c-.21-.34-.19,0-.16.33a11.34,11.34,0,0,1,.31,1.54c0,.26,0,.52-.21.33a3.14,3.14,0,0,1-.44-.9c-.08-.29-.1.55,0,1.08a7.28,7.28,0,0,0,.58,1.39c.13.32-.19-.08-.4-.23s-.26.05-.25.35-.34-.34-.55-.61,0,.41,0,.73.21,1.12,0,1.06-.49-.7-.65-1-.36-.11-.4.3c-.26-.07-.88,0-.73-.23s.5-.47.21-.54-1,0-1.09-.32.27-.35.85-.44,1.09-.62,1.08-.8-.52-.07-1.08.05a3.84,3.84,0,0,1-1.93-.14c-.42-.21.2-.3.82-.32s.62-.41,1-.64,1.67-.71.94-.69a11.67,11.67,0,0,1-1.68-.25c-.26,0-.23-.43-.12-.59s.56-.37.21-.53-1.2.14-1.06-.3.88-1.21.49-1a.47.47,0,0,1-.74-.32c-.06-.25.61-.32.72-.55s-.5-.32-.79-.36-.06-.41.12-.73-.21-.23-.32-.44-.27-.32-.06-.55-.12-.2-.27-.36a.74.74,0,0,1-.15-.44c-.7.05-.58.55-.76,1s.21.36,0,.68-.88,0-.68.41.59.21.21.71-1.91.09-1.79.3,1.09.16,1.2.46,0,.5-.35.84-.7.1-.82.39.29.6.09.6-.53-.12-.5.18.35.39.41.78-.3,0-.74.32,1.09.66.74,1-1.35-.46-1.32,0,.91.84.32.84-.68,0-.32.46,1.11.66.94.94-1.24.18-1.21.52.56.44.71.83-.88.18-1.56.52l-.15.08s-.14,0-.22-.09c-.78-.39-.41-.45-.44-.63s-.55-.8-1,.14c-.18.36-.55.1-.8.66-.08.19-.5.19-.35.44s.16.12-.11.4-.85.11-1,.13c0-.24-.31-.26-.39-.48-.26-.73-.63-.41-.82-.87-.5-1.23-1,.55-1.06.79s.35.3-.45.81c-.14.09-.34.1-.19.27s0,.25-.05.4-.36.09-.23.32.3.5.08.54-.66.1-.58.27.57.21.54.4-.84.44-1.32.43.24.39.35.71-.52.1-.77.22c0,0-.06,0-.07,0a2.21,2.21,0,0,1-.38-.11s-.06-.06-.16-.08-.07,0-.08-.08.49-.2.59-.34-.4-.2-.64-.23-.05-.26.09-.46-.16-.14-.25-.27-.22-.2-.05-.35-.06-.15-.22-.23c-.87-.44-.46-.5-.49-.7s-.62-.9-1.16.16a.54.54,0,0,1-.32.25c0-.09-.09-.12-.26,0a2.24,2.24,0,0,1-1.45.27c-.24-.15.06-.59.42-.91s.57-1.06.11-.9-.69.77-1,.62,0-.65.2-1,.55-.79.16-.68-.36-.17-.64-.2c0,0,0-1.38-.2-1.51s-.06,1.17-.18,1.4-.61,0-.82,0,.65.73.6.92-1.19.17-1.3-.19-.27.3.17.7.74,1.49.56,1.54a3.86,3.86,0,0,1-1.7-1.11c-.24-.43.23,1.81.88,2.13s0,.32-.68.57c-.38.15-.5.33-.45.51l-.08,0c-.11,0-.27-.16-.09-.39s.35-.27.19-.51-.1,0-.27.12.11-.14.08-.51-.12-.18-.2,0-.28-.45-.29-.7,0-.41-.24-.4a1.28,1.28,0,0,0-.14.42c0,.29.06.54,0,.72s-.13.41-.31.18-.23-.16-.16.1.38.64.1.7-.29-.1-.41-.16,0,.14,0,.35c-.28,0-1.17.11-1.43-.15s0-.17.18-.47-.42-.06-.57-.27.17-.16,0-.44,0-.62-.64-.65a.42.42,0,0,1-.13.29c-.12.1-.39.09-.22.24s0,.22,0,.35-.42.08-.27.29.35.45.1.48-.76.09-.66.24.65.19.61.35a.2.2,0,0,1,0,.08c-.59,0-1.14-.13-1.35-.1s-.23-.32-.15-.45.45-.31.14-.41-1,.17-.93-.17.66-1,.34-.75a.43.43,0,0,1-.66-.21c-.06-.19.5-.27.58-.45s-.45-.22-.71-.24-.08-.31,0-.56-.2-.17-.31-.32-.25-.22-.1-.41-.11-.15-.25-.26a.55.55,0,0,1-.16-.33c-.6.08-.46,1.42-.57,1.76s.2.26.08.52-.75,0-.54.35.51.12.23.52-1.62.18-1.5.33.94.06,1.06.28.07.38-.23.66-.59.11-.67.34.3.44.12.45-.45-.06-.41.17.34.27.42.56-.25,0-.6.29,1,.44.7.71-1.18-.6-1.13-.29.81.59.37.63c0-.08-.07-.12-.25,0a2.49,2.49,0,0,1-1.42.22c-.24-.11.06-.47.41-.73s.56-.52.1-.39-.66.61-1,.5,0-.52.2-.83.54-.63.15-.54-.35-.14-.62-.16c0,0,0-1.1-.2-1.21s-.06.94-.17,1.13-.61,0-.81,0,.64.58.59.73-1.16-.18-1.28-.47-.26.24.18.56.71,1.19.54,1.22a1.26,1.26,0,0,1-.41-.12c0-.05,0-.07-.1-.05h0a3.94,3.94,0,0,1-1.1-.67,3,3,0,0,0,.26-.5c.22-.53.06-.7-.42-.2s-.69,0-.85-.38.16-.9,0-1.52a2.36,2.36,0,0,0-.37-.87c-.53,0-.64.29-.65.82s-.57,1.82-.78,1.49-.43-.74-.53,0,.69,1.28.21,1.08-.32-.75-.74-.25,0,.58.53,1.07,0,.87-.27.83a1.9,1.9,0,0,1-.72-.34c.19-.13.87-.12,1-.23s-1,.08-1.39-.12l-.07-.06-.16-.14c-.07-.12.16-.07.29-.29s-.41-.06-.56-.25.17-.16,0-.42,0-.57-.64-.6a.38.38,0,0,1-.12.27c-.12.09-.39.08-.22.22s0,.21-.06.33-.41.07-.26.27.34.41.1.44-.76.08-.67.22.66.18.61.34a.43.43,0,0,1-.62.19c-.3-.14.18.24.37.51a2.05,2.05,0,0,0-.5-.08c-.22,0-.2-.35-.1-.48s.48-.29.18-.41-1,.11-.91-.24.76-1,.42-.76a.42.42,0,0,1-.64-.26c0-.2.52-.25.62-.44s-.42-.25-.67-.29,0-.32.1-.58-.18-.18-.27-.35-.24-.25-.06-.43-.1-.17-.23-.29a.59.59,0,0,1-.12-.35c-.61,0-.5.44-.66.78s.18.29,0,.55-.75,0-.58.33.5.16.18.56-1.64.07-1.53.24.92.12,1,.36,0,.4-.3.67a1,1,0,0,1-.57.2.15.15,0,0,0,0-.07c-.1-.6-.31-.29-.51,0s-.76-.73-.77-1.14-.12-.66-.64-.63a1.72,1.72,0,0,0-.36.66c-.15.47.16.88,0,1.17s-.36.66-.83.28-.57-.27-.48,0a.6.6,0,0,0-.16-.08c-.67-.27-1.32-.27-.67-.6s1.11-2.68.88-2.23a3.88,3.88,0,0,1-1.7,1.16c-.18-.05.11-1.18.55-1.61s.3-1.11.18-.73-1.26.4-1.31.2.81-1,.6-1-.7.27-.82,0,.06-1.6-.17-1.47-.21,1.59-.21,1.59c-.28,0-.23.33-.63.21s0,.3.15.7.51.94.2,1.09-.53-.49-1-.66-.24.6.11.94.66.8.42.95-1,0-1.45-.28-.14.5,0,.77,1.36,1,1,1.13a2.7,2.7,0,0,1-.71.06s0,0,0,0c-.34-.2-.66,0-.59-.22s.36-.26.41-.44-.23-.11-.4-.12.19-.17.12-.34-.37-.05-.66-.26-.34-.34-.22-.51.92-.1,1-.21-1.18.06-1.46-.25,0-.15.22-.4-.4-.08-.53-.27.2-.14.08-.4,0-.54-.56-.6a.39.39,0,0,1-.15.25c-.14.08-.4.06-.25.2s0,.2-.1.31-.42,0-.29.24.28.42,0,.43-.77,0-.69.18.62.21.56.35a.47.47,0,0,1-.64.16c-.31-.17.24.31.33.57s-.6,0-.91.13,0,.22.13.32a.24.24,0,0,1,0,.28l-.34.06c-.28,0-.74-.86-1.22-.89h-.13a2.1,2.1,0,0,1-.54-.14c-.35-.18.17-.26.7-.28s.53.61.88.42,1.43-.61.81-.59-1.21-1.2-1.44-1.18-.2-.37-.1-.51.48-.31.18-.45-1,.12-.91-.25.76-1,.42-.82a.41.41,0,0,1-.64-.28c0-.21.53-.27.63-.46s-.43-.28-.68-.32,0-.35.1-.62-.18-.2-.27-.38-.23-.27-.06-.47-.1-.17-.22-.31a.61.61,0,0,1-.13-.37c-.6,0-.5.47-.65.84s.17.31,0,.59-.75,0-.58.35.51.18.18.61-1.63.08-1.53.25.93.14,1,.39,0,.43-.3.73-.61.07-.71.33.25.51.08.51-.45-.1-.43.15.3.34.35.67-.25,0-.63.27.93.57.63.84-1.15-.39-1.13,0a.52.52,0,0,0,.12.25,1,1,0,0,0-.21-.08c-.66-.19-1.29-1.16-.66-1.4a2.31,2.31,0,0,0,.83-.63c-.3.26-1.47-.12-1.63-.15s.11-.86.54-1.17.29-.82.18-.54-1.24.29-1.28.15.79-.7.59-.7-.69.19-.81,0,.06-1.17-.17-1.07-.2,1.15-.2,1.15c-.27,0-.23.24-.62.16s0,.22.15.51.5.68.2.79-.48-.26-.84-.42a.28.28,0,0,0,0-.2c-.09-.25-.36,0-.67-.32s-.39-.45-.29-.7.6-.43.7-.6-.87.17-1.19-.24-.29-.21-.12-.59-.31-.36-.4-.64c-.29-.82-.71-.46-.92-1-.56-1.38-1.17-.46-1.2-.2s.4.34-.5.92c-.16.1-.38.11-.21.3s0,.28-.06.45-.4.1-.26.36.34.56.1.6-.75.11-.65.3.64.25.59.45-.23.22-.51.31c0-.07,0-.12,0-.11a2.93,2.93,0,0,0-.27.21l-.09,0s0,0,0,0,.22-.27.18-.37-.2,0-.28.1-.22.4-.41.34-.21-.24,0-.34.24-.87.3-1.06,0-.46-.07-.28-.59.37-.74.33,0-.36.11-.43.17-.16.1-.22-.4,0-.37-.22.29-.46.35-.63.19-.47.07-.34-.66.34-.7.26.22-.33.35-.42.17-.24,0-.35-.4-.1-.2-.23.33-1,.26-.87a1.12,1.12,0,0,1-.51.45,1,1,0,0,1,.17-.62c.13-.17.08-.44,0-.29s-.37.16-.39.08.24-.37.18-.37-.21.1-.24,0,0-.63,0-.58-.06.62-.06.62-.07.13-.19.08,0,.12,0,.28.15.36.06.42-.15-.19-.29-.26-.07.24,0,.37.2.31.13.37-.28,0-.43-.11,0,.19,0,.3.4.4.29.44a1.7,1.7,0,0,1-.5,0s-.06.2,0,.25-.16-.11-.5-.08.08.17.2.29a1.76,1.76,0,0,1,.36.46c0,.06.09.32-.17.24s-.14-.11-.38-.27-.47-.1-.33,0c.35.3.19.44.17.49s-.16.12,0,.4.25.36.11.37-.32-.31-.45-.2.22.24.24.41-.5-.12-.73-.1.41.28.53.45a.31.31,0,0,1,0,.1c-.35-.14-.8-.27-.77-.49s.28-.35.3-.57-.21-.14-.36-.14.15-.21.06-.43-.32,0-.6-.29-.35-.4-.26-.62.54-.38.62-.53-.77.15-1-.22-.26-.19-.11-.52-.27-.33-.36-.57c-.26-.74-.63-.41-.82-.87-.5-1.24-1-.41-1.06-.18s.35.3-.45.81c-.14.1-.34.1-.19.27s0,.25,0,.4-.36.09-.23.32.3.51.08.54a2.51,2.51,0,0,0-.44.1c.11-.13.26-.21.28-.36s-.29-.14-.49-.14.2-.23.08-.46-.43,0-.8-.29-.46-.42-.34-.65,1.06-.19,1.17-.35-1.38.16-1.75-.22,0-.2.2-.55-.49-.07-.66-.31.2-.19,0-.52-.06-.72-.75-.75a.48.48,0,0,1-.14.33c-.14.12-.46.1-.26.28s0,.26-.06.42-.49.08-.31.33.4.52.11.56-.89.1-.77.28.76.22.71.41a.49.49,0,0,1-.73.25c-.39-.19.33.4.48.73s-.69.11-1,.23.09.28.2.4.15.47-.11.45a7.38,7.38,0,0,0-.88.14v0c0-.2.49-.25.58-.44s-.4-.26-.63-.29,0-.33.09-.59-.16-.18-.25-.35-.22-.25-.05-.44-.1-.16-.22-.29a.63.63,0,0,1-.11-.35c-.57,0-.48.44-.62.79s.17.29,0,.55-.71,0-.55.33.48.16.17.57-1.53.07-1.44.24.87.12,1,.36,0,.41-.28.68-.57.08-.66.31.23.48.07.48-.43-.09-.4.15.28.31.33.62-.17.09-.45.19a2.49,2.49,0,0,0-.39-.14c-.33-.1-.31-.18-.19-.26s.22.06.54,0,.36-.1.2-.14,0-.27-.16-.25a.64.64,0,0,1-.48-.19c-.08-.08-.15-.2,0-.24a.4.4,0,0,1,.37,0,.36.36,0,0,0,.33.09c.08,0,0-.28,0-.39s-.05-.21-.29-.27a1,1,0,0,1-.46-.25.85.85,0,0,1-.36-.39c-.12-.21.06-.24.14-.12a.29.29,0,0,0,.31.11c.06,0,0-.27,0-.33s.15-.16.25-.09a.7.7,0,0,0,.45.08c.17,0,.13-.13,0-.16s-.16-.27-.23-.38a.41.41,0,0,0-.23-.22c-.13-.05-.67-.11-.66-.21s.29,0,.48,0,.32-.21.28-.26-.3,0-.24-.11.14-.18.06-.21-.31,0-.33-.12.08-.13.26-.16A.49.49,0,0,0,49,25c0-.07-.16,0-.32,0a.9.9,0,0,1-.57-.05c-.13-.08.06-.11.24-.12s.18-.16.3-.24.5-.27.28-.27a2.91,2.91,0,0,1-.49-.09c-.08,0-.07-.17,0-.23s.17-.14.06-.2-.35.06-.31-.11.26-.46.14-.36-.2,0-.22-.13.18-.12.22-.2-.15-.13-.24-.14,0-.16,0-.28-.06-.09-.1-.17-.08-.12,0-.2,0-.08-.07-.14a.31.31,0,0,1-.05-.17c-.2,0-.17.21-.22.38s.06.13,0,.26-.26,0-.2.15.17.08.06.27-.57,0-.53.11.32.07.35.18,0,.19-.1.32-.21,0-.24.15S47,24,47,24s-.15,0-.14.07.1.15.12.3-.09,0-.22.12.32.25.22.37-.4-.17-.39,0,.27.33.09.33-.2,0-.09.17.33.25.27.36-.36.06-.35.2.16.16.21.31-.15.09-.32.14a.1.1,0,0,0,0-.14c-.09-.14-.17,0-.43,0a1.12,1.12,0,0,1-.59-.22c-.16-.14-.26-.29,0-.25s.21,0,.27-.06.14-.29-.06-.29-.32.1-.4-.1-.07-.27.14-.28.31,0,.41,0,.09-.1-.11-.23-.5,0-.46-.2.3-.18.31-.31S45,24.12,45,24s.07-.18.17-.35.08-.18-.09-.18.09-.16.09-.32-.28.14-.39,0,.35-.26.22-.37-.44-.19-.42-.33.11-.19.12-.3-.09-.07-.15-.07.06-.11,0-.23-.13,0-.25-.14-.14-.21-.1-.32.22-.2.25-.28-.31.08-.42-.11-.11-.1,0-.27-.11-.17-.15-.3c-.1-.38-.25-.21-.33-.45-.2-.64-.41-.21-.42-.09s.14.15-.18.42c-.06.05-.14.05-.08.14s0,.13,0,.21-.15,0-.09.16.12.26,0,.28-.27.05-.23.14.23.11.21.21-.34.22-.53.22.1.2.14.37-.21.05-.31.11,0,.14.06.2,0,.23,0,.23a3.33,3.33,0,0,1-.5.09c-.22,0,.16.17.28.26a.91.91,0,0,1,.13.16l-.24.19A1,1,0,0,1,41,23.1c-.38-.39-.36-.19-.15-.55a.2.2,0,0,0,0-.29c.37-.3.56-.5.16-1-.53-.62-.39-.05-.87.26a.59.59,0,0,0-.19-.13,1.88,1.88,0,0,0,.35-1.25c-.15-1.06-.43-.5-.72-.05s-1-1.29-1.06-2-.16-1.18-.88-1.12a3.3,3.3,0,0,0-.5,1.17c-.21.84.22,1.57,0,2.07s-.5,1.17-1.14.5-.86-.44-.58.28,1.36,1.84.36,2-1.07-.28-1.5-.45h0a2.49,2.49,0,0,1,.23-.23c.29-.25-.12-.4-.67,0s-.27.4-.78.56-.34-.37-.34-.51a3.88,3.88,0,0,1,.74-.93c.23-.24,1.08-.55.39-.61s-1,.29-1,.18,0-.52-.08-.52a3.54,3.54,0,0,1-1,0c-.22-.09.52-.69.6-.91s.3-.81,0-.61-.73.35-.87.23,0-.5.25-.77.34-.88.06-.74-.41.64-.59.52,0-.55.12-.87.33-.66.09-.56-.21-.15-.38-.17c0,0,0-1.16-.12-1.27s0,1-.11,1.18-.37,0-.49,0,.39.61.36.77-.71.14-.78-.16-.16.25.1.58a2.07,2.07,0,0,1,.34,1.29,2.37,2.37,0,0,1-1-.93c-.14-.36.14,1.52.53,1.78s0,.27-.41.49-.32.53,0,.71.8.69.71.86-1.16-.27-1.41-.54c.22-.28.15-.63-.47-.88-.85-.35-1.66-.35-.85-.79s1.4-3.5,1.11-2.91a4.81,4.81,0,0,1-2.14,1.51c-.23-.06.14-1.54.7-2.1s.37-1.45.22-1-1.59.53-1.64.26,1-1.25.75-1.25-.88.35-1,0,.07-2.1-.22-1.92-.26,2.07-.26,2.07c-.35,0-.3.43-.79.27s0,.4.19.92.64,1.23.25,1.42-.67-.63-1.25-.85-.3.79.14,1.22.83,1,.53,1.25-1.19-.05-1.83-.37-.17.65,0,1a1.7,1.7,0,0,0,.34.38,4.34,4.34,0,0,1-1.68.73c-.52.05-1.21-.42-.43-1.05s1.55-.73.86-1.36-.43.05-1.21.31.52-.36.35-1.36-.52-.47-.87-.05-1.24-1.21-1.27-1.89-.19-1.1-1-1A2.63,2.63,0,0,0,16.4,15c-.25.78.26,1.46,0,1.93S15.8,18,15,17.4a2.8,2.8,0,0,0-.39-.27.58.58,0,0,0,.41-.07c.35-.23.76-.37.56-.66s-.37.07-.95,0a2.43,2.43,0,0,1-1.33-.49c-.35-.31-.58-.64-.1-.57s.49.12.61-.13.31-.65-.14-.65-.7.24-.9-.23-.62-.61-.15-.63.93.1,1.17,0,.19-.21-.26-.5-1.13-.12-1-.45S13,12.3,13,12s-.68-.22-.8-.45.39-.41.62-.8.18-.39-.21-.39.19-.37.21-.72-.64.31-.87,0,.78-.59.48-.84-.52.05-.48-.28.25-.41.27-.66-.2-.16-.33-.16.13-.25.06-.5-.3,0-.55-.34-.31-.46-.23-.72S11.88,6,12,5.8,11,6,10.77,5.55s0-.22.13-.61-.33-.07-.45-.35.14-.21,0-.58,0-.8-.5-.84a.75.75,0,0,1-.1.37c-.1.14-.31.12-.18.31s0,.29,0,.47-.33.1-.21.37.27.59.08.62-.61.12-.53.32.52.25.48.46-.23.49-.49.28.22.45.32.82-.47.11-.7.25.06.31.14.45.09.53-.08.51a7.35,7.35,0,0,1-1.11.21c-.49,0,.35.39.62.59s.27.52.68.54.82.1.55.28a2.06,2.06,0,0,1-1.29.11c-.37-.09-.71-.19-.71,0a1,1,0,0,0,.71.69c.39.08.61.09.57.37s-.53.21-.72.27,0,.29.13.47-.45.12-.54.23.19.49.62.59,1.07-.12,1.09.12-1.21.35-1.48.46a1.05,1.05,0,0,0-.53.49l-.07.15c-.4-.18-1.26-.18-1.45-.46s.81-.66,1.29-1.29.36-.62-.44-.62S7,11,7,10.4s-1.33.5-1.81.06,1.61-.94,1-1.34-1.09.09-1-.44.52-.66.56-1.07-.4-.25-.68-.25.28-.41.12-.81S4.61,6.48,4.08,6s-.64-.75-.48-1.15,1.49-.35,1.65-.63-1.93.28-2.45-.41,0-.34.28-1-.68-.12-.93-.56.29-.35,0-.94S2.11.06,1.15,0A1,1,0,0,1,1,.59C.75.82.3.78.58,1.1s.06.47-.09.75S.22,2,.1,2.1s-.15.14,0,.34l0,.08c.24.42.5.87.12.93L0,3.47V40.3H200Z"
        />
      </svg>
    </>
  );
};
export default Forest;
