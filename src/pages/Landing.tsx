import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img src="/logo.svg" alt="Pixel editor logo" width={48} height={48} />
            </div>
            <h1 className="text-4xl -tracking-wider md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              BitBlox
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900/70 dark:text-white/70 mb-6">
              Create Beautiful Pixel Art
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              A powerful, intuitive pixel art editor for creating retro-style graphics, game assets, and digital art.
            </p>
            <Link
              to="/editor"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Start Creating
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Powerful Features for Pixel Artists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-layout-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>,
                title: 'Flexible Canvas',
                description: 'Choose from multiple canvas sizes and zoom levels for precise control.',
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette text-blue-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>,
                title: 'Color Management',
                description: 'Built-in retro palettes and custom color support for unlimited creativity.',
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-layers-intersect"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M4 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>,
                title: 'Essential Tools',
                description: 'Full set of drawing tools including brush, fill, shapes, and more.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-center"
              >
                <div className="flex justify-center mb-4 text-blue-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Editor?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our pixel art editor combines powerful features with an intuitive interface,
                making it perfect for both beginners and experienced artists. Create
                stunning pixel art for games, icons, or digital art projects with ease.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time preview of your artwork',
                  'Multiple export options',
                  'Keyboard shortcuts for efficiency',
                  'Dark mode support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <img
                  src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&q=80"
                  alt="Pixel art example"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <img src="/logo.svg" alt="BitBlox logo" width={48} height={48} />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                  Bitblox
                </span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Create, edit, and export pixel art with ease.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Resources
              </h3>
              <ul className="mt-4 space-y-4">
                {[
                  ['Documentation', '#'],
                  ['Tutorials', '#'],
                  ['Blog', '#'],
                ].map(([item, link]) => (
                  <li key={item}>
                    <a
                      href={link}
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                {[
                  ['Privacy Policy', '#'],
                  ['Terms of Service', '#'],
                ].map(([item, link]) => (
                  <li key={item}>
                    <a
                      href={link}
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-base text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} BitBlox. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing