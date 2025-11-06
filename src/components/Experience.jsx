


export const Experience = () => {
return (
  <section
    id="experience"
    className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent"
  >
    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Experience</h2>

    <div className="w-full max-w-4xl space-y-6">
      {/* ETC Experience */}
      <div className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-colors duration-300">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          IT Low-Code Developer
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Employment, ETC • July 2024 – Present</p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Supported the Innovation and Technology team by integrating low-code automation
            solutions across multiple internal systems.
          </li>
          <li>
            Designed and implemented digital forms and automated workflows in <span className="font-medium">Laserfiche</span>,
            improving operational efficiency and data management processes.
          </li>
          <li>
            Contributed to the development of AI-powered agents using <span className="font-medium">Copilot Studio</span>,
            focusing on enhancing internal support capabilities and user interaction workflows.
          </li>
          <li>
            Provided IT support and collaborated cross-functionally to streamline issue resolution,
            align system requirements, and ensure consistent delivery of innovative solutions.
          </li>
        </ul>
      </div>
    </div>
  </section>
);


}