// STROOMLIJN - Custom icon set
// Stroke 1.6px, rounded caps. Slightly more organic than Lucide:
// gentle curves echoing the S-mark's flow metaphor.

const baseIconProps = {
  width: 22, height: 22, viewBox: "0 0 24 24",
  fill: "none", stroke: "currentColor", strokeWidth: 1.6,
  strokeLinecap: "round", strokeLinejoin: "round",
};

const Icon = {
  // Wayfinding & motion
  ArrowRight: (p) => <svg {...baseIconProps} {...p}><path d="M4 12h15"/><path d="M13 6l6.5 6L13 18"/></svg>,
  ArrowLeft:  (p) => <svg {...baseIconProps} {...p}><path d="M20 12H5"/><path d="M11 6l-6.5 6L11 18"/></svg>,
  ArrowUpRight: (p) => <svg {...baseIconProps} {...p}><path d="M7 17L17 7"/><path d="M9 7h8v8"/></svg>,
  ChevronDown: (p) => <svg {...baseIconProps} {...p}><path d="M6 9l6 6 6-6"/></svg>,
  ChevronRight: (p) => <svg {...baseIconProps} {...p}><path d="M9 6l6 6-6 6"/></svg>,
  Check:      (p) => <svg {...baseIconProps} {...p}><path d="M5 12.5l4.2 4.2L19 7"/></svg>,
  Plus:       (p) => <svg {...baseIconProps} {...p}><path d="M12 5v14M5 12h14"/></svg>,
  Close:      (p) => <svg {...baseIconProps} {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>,
  Menu:       (p) => <svg {...baseIconProps} {...p}><path d="M3 7h18M3 12h18M3 17h18"/></svg>,

  // Brand-flavored - a gentle wave runs through where it makes sense
  Flow: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M3 9c2.5-3 5-3 7 0s4.5 3 7 0 4-3 4-3"/>
      <path d="M3 15c2.5-3 5-3 7 0s4.5 3 7 0 4-3 4-3" opacity="0.55"/>
    </svg>
  ),
  Stream: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M3 7h12c2.2 0 4 1.8 4 4s-1.8 4-4 4H8c-2.2 0-4 1.8-4 4"/>
      <path d="M16 11l3-3M16 19l3-3" opacity="0.6"/>
    </svg>
  ),
  Compass: (p) => (
    <svg {...baseIconProps} {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M14.5 9.5L13 14l-4.5 1.5L10 11l4.5-1.5z"/>
    </svg>
  ),

  // Aanbod / diensten
  Strategy: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M4 20V8l8-5 8 5v12"/>
      <path d="M9 20v-6h6v6"/>
      <circle cx="12" cy="11" r="1.2"/>
    </svg>
  ),
  Training: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M3 8l9-4 9 4-9 4-9-4z"/>
      <path d="M7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5"/>
      <path d="M21 8v5"/>
    </svg>
  ),
  Implementation: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M14 3h5v5"/>
      <path d="M19 3l-7 7"/>
      <path d="M9 14l-2 2 2 2"/>
      <path d="M5 16h6"/>
      <rect x="3" y="11" width="10" height="10" rx="2"/>
    </svg>
  ),

  // Platform features
  Agent: (p) => (
    <svg {...baseIconProps} {...p}>
      <rect x="4" y="6" width="16" height="12" rx="3"/>
      <circle cx="9" cy="12" r="1.2"/>
      <circle cx="15" cy="12" r="1.2"/>
      <path d="M12 3v3M9 18v2M15 18v2"/>
    </svg>
  ),
  Chat: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M20 14c0 3-3 5-7 5-1 0-2-.1-3-.4L4 20l1.5-3.7C4.5 15.2 4 13.7 4 12c0-3 3-6 8-6s8 3 8 6"/>
    </svg>
  ),
  Knowledge: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M5 4h12a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H5z"/>
      <path d="M5 4v14"/>
      <path d="M9 9h6M9 12h6"/>
    </svg>
  ),
  Workflow: (p) => (
    <svg {...baseIconProps} {...p}>
      <rect x="3" y="3" width="6" height="6" rx="1.5"/>
      <rect x="15" y="15" width="6" height="6" rx="1.5"/>
      <rect x="15" y="3" width="6" height="6" rx="1.5"/>
      <path d="M9 6h6M18 9v6M15 18H9a3 3 0 0 1-3-3V9"/>
    </svg>
  ),
  Voice: (p) => (
    <svg {...baseIconProps} {...p}>
      <rect x="9" y="3" width="6" height="11" rx="3"/>
      <path d="M5 11a7 7 0 0 0 14 0"/>
      <path d="M12 18v3"/>
    </svg>
  ),
  Plug: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M9 2v4M15 2v4"/>
      <rect x="6" y="6" width="12" height="8" rx="2"/>
      <path d="M12 14v3a4 4 0 0 1-4 4"/>
    </svg>
  ),

  // Trust / signals
  Shield: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z"/>
      <path d="M9 12.5l2 2 4-4.5"/>
    </svg>
  ),
  Sparkles: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z"/>
      <path d="M19 4l.7 1.8L21.5 6.5l-1.8.7L19 9l-.7-1.8L16.5 6.5l1.8-.7L19 4z" opacity="0.6"/>
    </svg>
  ),
  Star: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6-5.4-2.9L6.6 19.8l1-6L3.2 9.5l6.1-.9L12 3z"/>
    </svg>
  ),
  Heart: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>
    </svg>
  ),
  Quote: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M7 7h3v6c0 2-1.5 3.5-3.5 3.5"/>
      <path d="M14 7h3v6c0 2-1.5 3.5-3.5 3.5"/>
    </svg>
  ),

  // Practical
  Clock: (p) => (
    <svg {...baseIconProps} {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3.5 2"/>
    </svg>
  ),
  Calendar: (p) => (
    <svg {...baseIconProps} {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2"/>
      <path d="M8 3v4M16 3v4M3 10h18"/>
    </svg>
  ),
  MapPin: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  Mail: (p) => (
    <svg {...baseIconProps} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
  ),
  Phone: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 1-2z"/>
    </svg>
  ),
  Linkedin: (p) => (
    <svg {...baseIconProps} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <path d="M8 10v7M8 7v0.1"/>
      <path d="M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>
    </svg>
  ),

  // Misc UI
  Search: (p) => (
    <svg {...baseIconProps} {...p}>
      <circle cx="11" cy="11" r="7"/>
      <path d="M16 16l5 5"/>
    </svg>
  ),
  Settings: (p) => (
    <svg {...baseIconProps} {...p}>
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1A2 2 0 1 1 4.3 17l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>
    </svg>
  ),
  Bell: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
      <path d="M10 21a2 2 0 0 0 4 0"/>
    </svg>
  ),
  User: (p) => (
    <svg {...baseIconProps} {...p}>
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>
    </svg>
  ),
  Logout: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <path d="M16 17l5-5-5-5"/>
      <path d="M21 12H9"/>
    </svg>
  ),
  Send: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M21 3L11 13"/>
      <path d="M21 3l-7 18-3-8-8-3 18-7z"/>
    </svg>
  ),
  Document: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
      <path d="M14 3v6h6"/>
    </svg>
  ),
  Upload: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <path d="M17 8l-5-5-5 5"/>
      <path d="M12 3v13"/>
    </svg>
  ),
  Globe: (p) => (
    <svg {...baseIconProps} {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18"/>
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>
    </svg>
  ),
  Briefcase: (p) => (
    <svg {...baseIconProps} {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2"/>
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
      <path d="M3 12h18"/>
    </svg>
  ),
  Headphones: (p) => (
    <svg {...baseIconProps} {...p}>
      <path d="M3 17v-5a9 9 0 0 1 18 0v5"/>
      <path d="M3 17a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5a2 2 0 0 0-2 2z"/>
      <path d="M21 17a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  PlayCircle: (p) => (
    <svg {...baseIconProps} {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M10 8.5l6 3.5-6 3.5z"/>
    </svg>
  ),
};

window.Icon = Icon;
