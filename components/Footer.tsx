const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 section-padding">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} M. Jefri Agiansyah. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with Next.js, Tailwind CSS, and Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer