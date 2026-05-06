const _baseIconProps = {
  width: 20, height: 20, viewBox: "0 0 24 24",
  fill: "none", stroke: "currentColor", strokeWidth: 1.5,
  strokeLinecap: "round", strokeLinejoin: "round",
};

const AppIcon = {
  Home: (p) => <svg {..._baseIconProps} {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5h-2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
  Bot: (p) => <svg {..._baseIconProps} {...p}><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 4v4M8 2v2M16 2v2"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/></svg>,
  Workflow: (p) => <svg {..._baseIconProps} {...p}><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></svg>,
  Library: (p) => <svg {..._baseIconProps} {...p}><path d="M4 4v16M20 4v16M8 4v16M12 4v16M16 4v16"/></svg>,
  Chart: (p) => <svg {..._baseIconProps} {...p}><path d="M3 3v18h18"/><path d="M7 15l4-4 4 4 5-6"/></svg>,
  Settings: (p) => <svg {..._baseIconProps} {...p}><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  Search: (p) => <svg {..._baseIconProps} {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>,
  Bell: (p) => <svg {..._baseIconProps} {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  Plus: (p) => <svg {..._baseIconProps} {...p}><path d="M12 5v14M5 12h14"/></svg>,
  Send: (p) => <svg {..._baseIconProps} {...p}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>,
  ArrowUp: (p) => <svg {..._baseIconProps} {...p}><path d="M12 19V5M5 12l7-7 7 7"/></svg>,
  ArrowDown: (p) => <svg {..._baseIconProps} {...p}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>,
  ChevronRight: (p) => <svg {..._baseIconProps} {...p}><path d="M9 18l6-6-6-6"/></svg>,
  MessageCircle: (p) => <svg {..._baseIconProps} {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  Database: (p) => <svg {..._baseIconProps} {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>,
};

window.AppIcon = AppIcon;
