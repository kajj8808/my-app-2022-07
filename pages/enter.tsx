function Enter() {
  return (
    <div className="h-screen w-full bg-[#333333]">
      <div></div>
      <div></div>
      <div>
        <input
          className="placeholder: placeholder: bg-black text-sm"
          type="text"
          placeholder="Your ID"
        />
        <button>
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Enter;
