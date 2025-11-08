


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
        <p className="text-gray-600 dark:text-gray-400 mt-1">ETC | Southport • Sep 2025 – Dec 2025</p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
           Built and automated workflow solutions using Laserfiche Forms to streamline internal operations.
          </li>
          <li>
            Supported the Innovation Team in developing AI agents and process automation using Microsoft Copilot Studio.
          </li>
          <li>
       Triaged and resolved internal support tickets via Freshservice, improving response efficiency and issue tracking.
          </li>
          <li>
         Collaborated across teams to implement low-code solutions, enhancing productivity and digital adoption.
          </li>
          <li>
            Gained exposure to Microsoft 365 suite, workflow design, and low-code automation best practices.
          </li>
        </ul>
      </div>
    </div>
  </section>
);


}