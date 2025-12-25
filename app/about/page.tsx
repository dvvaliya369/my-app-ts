import Button from "@/components/Button";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-8">
          About NextApp
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            NextApp is a modern web application built with the latest technologies
            to provide the best developer and user experience.
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We believe in building fast, accessible, and beautiful web applications
                that work seamlessly across all devices. Our mission is to provide
                developers with the tools and frameworks they need to create amazing
                digital experiences.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Technology Stack
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                NextApp is built with cutting-edge technologies:
              </p>
              <ul className="space-y-3 text-lg text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-900 dark:text-white">•</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-white">Next.js 16</strong> - 
                    The React framework for production with App Router
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-900 dark:text-white">•</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-white">React 19</strong> - 
                    The latest version of React with improved performance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-900 dark:text-white">•</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-white">TypeScript</strong> - 
                    Type-safe JavaScript for better developer experience
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-900 dark:text-white">•</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-white">Tailwind CSS v4</strong> - 
                    Utility-first CSS framework for rapid UI development
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    Server Components
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Leverage React Server Components for improved performance and SEO.
                  </p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    Optimized Images
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Automatic image optimization with Next.js Image component.
                  </p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    API Routes
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Built-in API routes for serverless functions and backend logic.
                  </p>
                </div>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    Edge Runtime
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Deploy to the edge for ultra-fast response times worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact">Get in Touch</Button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
