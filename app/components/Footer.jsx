export default function Footer() {
  return (
    <footer id="footer" className="p-8 md:p-12 lg:p-16 border-t border-gray-100 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <p>© 2025 Wilson Dagah. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-black transition-colors">Twitter</a>
                <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-black transition-colors">Github</a>
                <a href="mailto:hello@emanuele.dev" className="hover:text-black transition-colors">Email</a>
            </div>
        </div>
    </footer>
  );
}

