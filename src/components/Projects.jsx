import { FiArrowRight } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

      <div className="flex flex-col gap-8 max-w-3xl mx-auto">

        {/* Project 1 */}
        <div className="project-card bg-white dark:bg-cardbg text-white-900 dark:text-gray-200 shadow-md dark:shadow-none">
          <h3 className="text-xl font-semibold">To-Do List App</h3>
          <p className="text-gray-400">Simple task manager with add & delete functionality.</p>
          <p className="text-sm text-gray-500 mt-2">HTML • CSS • JavaScript</p>

          <a
            href="https://github.com/ChetanaBehere/To-Do-List-"
            target="_blank"
            className="project-link flex items-center gap-1 mt-2"
          >
            View on GitHub <FiArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card bg-white dark:bg-cardbg text-white-900 dark:text-gray-200 shadow-md dark:shadow-none">
          <h3 className="text-xl font-semibold">QR Generator</h3>
          <p className="text-gray-400">Generate QR codes from text or URL.</p>
          <p className="text-sm text-gray-500 mt-2">HTML • CSS • JavaScript</p>

          <a
            href="https://github.com/ChetanaBehere/QR-Code-Generator"
            target="_blank"
            className="project-link flex items-center gap-1 mt-2"
          >
            View on GitHub <FiArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card bg-white dark:bg-cardbg text-white-900 dark:text-gray-200 shadow-md dark:shadow-none">
          <h3 className="text-xl font-semibold">Calculator Project</h3>
          <p className="text-gray-400">Fully functional JS calculator.</p>
          <p className="text-sm text-gray-500 mt-2">HTML • CSS • JavaScript</p>

          <a
            href="https://github.com/ChetanaBehere/CalculatorProject"
            target="_blank"
            className="project-link flex items-center gap-1 mt-2"
          >
            View on GitHub <FiArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}