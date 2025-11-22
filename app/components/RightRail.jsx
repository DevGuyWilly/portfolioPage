"use client";

const anchors = [
  { label: 'Hero', id: 'hero' },
  { label: 'Featured work', id: 'featured-work' },
  { label: 'Blog', id: 'blog' },
  { label: 'Footer', id: 'footer' }
];

export default function RightRail() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden xl:flex flex-col justify-center w-16 h-screen sticky top-0 right-0 p-4 z-50">
      <div className="flex flex-col gap-12 items-center">
        {anchors.map((anchor) => (
          <button
            key={anchor.id}
            onClick={() => scrollToSection(anchor.id)}
            className="text-xs font-medium text-gray-400 hover:text-black transition-colors vertical-text uppercase tracking-widest"
          >
            {anchor.label}
          </button>
        ))}
      </div>
    </aside>
  );
}

