import logo from "../assets/nis-kitchen.webp";

/**
 * Decorative replica of the Mbolo Eats customer app home screen.
 * Drawn in markup rather than shipped as a screenshot: it stays crisp at any
 * DPR, re-themes with the design tokens and costs no download beyond the
 * restaurant logo, which is the one part CSS cannot draw.
 *
 * Glyphs live here rather than in Icon.jsx because they are app chrome for
 * this mockup only, and the whole block is aria-hidden.
 */
const glyphs = {
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  cart: (
    <>
      <path d="M3 4h2l2.4 10.4A2 2 0 0 0 9.3 16h7.8a2 2 0 0 0 2-1.6L20.5 7H6" />
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="17.5" cy="20" r="1.4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.9-3.9" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="9" cy="7" r="2.2" />
      <circle cx="15" cy="12" r="2.2" />
      <circle cx="7" cy="17" r="2.2" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9.5 8V6.5a2.5 2.5 0 0 1 5 0V8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  bike: (
    <>
      <circle cx="5.5" cy="17.5" r="3.4" />
      <circle cx="18.5" cy="17.5" r="3.4" />
      <path d="m8 17.5 4-8.5h3.4l2.6 4M10 9h4.5" />
    </>
  ),
  bell: (
    <>
      <path d="M18 15.6V11a6 6 0 1 0-12 0v4.6L4.4 18h15.2L18 15.6Z" />
      <path d="M10 20.4a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3.5h12v17l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4v-17Z" />
      <path d="M9.5 8.5h5M9.5 12.5h5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.8" />
      <path d="M5 20.5c0-3.9 3.1-6.2 7-6.2s7 2.3 7 6.2" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 9.2a15 15 0 0 1 19 0M5.5 12.6a10.5 10.5 0 0 1 13 0M8.6 16a6 6 0 0 1 6.8 0" />
      <circle cx="12" cy="19.2" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
};

const solidGlyphs = {
  heart: <path d="M12 20.6s-7.6-4.8-7.6-10.1A4.6 4.6 0 0 1 12 7.5a4.6 4.6 0 0 1 7.6 3c0 5.3-7.6 10.1-7.6 10.1Z" />,
  star: <path d="m12 3.4 2.7 5.5 6 .9-4.35 4.2 1.03 6L12 17.2l-5.38 2.8 1.03-6L3.3 9.8l6-.9L12 3.4Z" />,
  sparkle: (
    <>
      <path d="m12.5 3 1.9 5.6 5.6 1.9-5.6 1.9-1.9 5.6-1.9-5.6L5 10.5l5.6-1.9L12.5 3Z" />
      <path d="m5.5 16.5.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6L2 20l2.6-.9.9-2.6Z" />
    </>
  ),
  home: <path d="M12 3.1 3.4 10.4V21h6.1v-5.6h5V21h6.1V10.4L12 3.1Z" />,
  person: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M4.5 21c0-4.2 3.4-6.8 7.5-6.8s7.5 2.6 7.5 6.8Z" />
    </>
  ),
};

function G({ name, size = 14 }) {
  const solid = name in solidGlyphs;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {solid ? solidGlyphs[name] : glyphs[name]}
    </svg>
  );
}

const categories = ["Achu", "Fried Rice", "Corn Chaff", "Ndolé"];

export default function PhoneMockup() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__screen">
        <div className="pm__status">
          <span className="pm__time">
            11:27 <G name="person" size={11} />
          </span>
          <span className="pm__signal">
            <i /> <i /> <i /> <i />
          </span>
          <G name="wifi" size={12} />
          <span className="pm__battery">85</span>
        </div>

        <div className="pm__header">
          <small>Delivery to:</small>
          <div className="pm__address">
            <G name="pin" size={15} />
            <strong>Akwa, Douala</strong>
            <G name="chevron" size={14} />
            <span className="pm__cart">
              <G name="cart" size={17} />
            </span>
          </div>
        </div>

        <div className="pm__body">
          <div className="pm__chips">
            <span className="pm__chip pm__chip--on">
              All
              <svg viewBox="0 0 24 24" width="11" height="11" focusable="false">
                <circle cx="12" cy="12" r="11" fill="#fff" />
                <path
                  d="m7 12.4 3.3 3.3L17 9"
                  fill="none"
                  className="pm__check"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {categories.map((category) => (
              <span className="pm__chip" key={category}>
                {category}
              </span>
            ))}
          </div>

          <div className="pm__searchrow">
            <span className="pm__search">
              <G name="search" size={13} />
              Search for restaurants
            </span>
            <span className="pm__tool">
              <G name="sliders" size={13} />
            </span>
            <span className="pm__tool pm__tool--round">
              <G name="sparkle" size={13} />
            </span>
          </div>

          <div className="pm__card">
            <img
              className="pm__logo"
              src={logo}
              width="420"
              height="495"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="pm__title">
              <b>Ni&apos;s Kitchen</b>
              <span className="pm__likes">
                <G name="heart" size={14} /> 1
              </span>
            </div>
            <div className="pm__meta pm__meta--rating">
              <G name="star" size={13} /> <b>4.5</b>
            </div>
            <div className="pm__meta">
              <G name="bag" size={12} /> Locals dishes
            </div>
            <div className="pm__meta">
              <G name="clock" size={12} /> 60 min
            </div>
            <div className="pm__meta">
              <G name="bike" size={12} /> Delivery calculated at checkout
            </div>
          </div>
        </div>

        <div className="pm__nav">
          <span className="pm__nav-item pm__nav-item--on">
            <G name="home" size={15} />
          </span>
          <span className="pm__nav-item">
            <G name="bell" size={14} />
            Alerts
          </span>
          <span className="pm__nav-item">
            <G name="receipt" size={14} />
            Orders
          </span>
          <span className="pm__nav-item">
            <G name="user" size={14} />
            Profile
          </span>
        </div>
      </div>
    </div>
  );
}
