'use client'
import React, { useEffect, useRef, useState } from 'react'

const PythonIde = () => {
  const pyodideRef = useRef(null)
  const [code, setCode] = useState(`print("Hello from Python!")
import math
print(f"Square root of 16: {math.sqrt(16)}")
print("Python is running in the browser!")`)
  const [output, setOutput] = useState('Loading Pyodide...')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPyodideScript = async () => {
      // Check if Pyodide is already loaded
      if (window.loadPyodide) {
        try {
          const pyodide = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
          })
          pyodideRef.current = pyodide
          
          // Redirect Python stdout to capture print statements
          pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`)
          
          setOutput('✅ Pyodide loaded successfully! You can now run Python code.')
          setIsLoading(false)
        } catch (err) {
          setOutput(`❌ Failed to initialize Pyodide: ${err}`)
          setIsLoading(false)
        }
        return
      }

      // Load Pyodide script
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
      
      script.onload = async () => {
        try {
          const pyodide = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
          })
          pyodideRef.current = pyodide
          
          // Redirect Python stdout to capture print statements
          pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`)
          
          setOutput('✅ IDE loaded successfully! You can now run Python code.')
          setIsLoading(false)
        } catch (err) {
          setOutput(`❌ Failed to initialize Pyodide: ${err}`)
          setIsLoading(false)
        }
      }
      
      script.onerror = () => {
        setOutput('❌ Failed to load Pyodide script.')
        setIsLoading(false)
      }
      
      document.head.appendChild(script)
    }

    loadPyodideScript()
  }, [])

  const runCode = async () => {
    if (!pyodideRef.current) {
      setOutput('❌ IDE not loaded yet. Please wait.')
      return
    }

    try {
      const pyodide = pyodideRef.current
      
      // Reset stdout
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`)
      
      // Run the user's code
      const result = pyodide.runPython(code)
      
      // Get the captured output from stdout
      const stdout = pyodide.runPython('sys.stdout.getvalue()')
      
      let finalOutput = ''
      
      // Add print output if any
      if (stdout && stdout.trim()) {
        finalOutput += stdout
      }
      
      // Add the result if it's not None and not empty
      if (result !== undefined && result !== null && result !== '') {
        if (finalOutput) finalOutput += '\n'
        finalOutput += `Return value: ${result}`
      }
      
      // If no output, show a success message
      if (!finalOutput) {
        finalOutput = '✅ Code executed successfully (no output)'
      }
      
      setOutput(finalOutput)
      
    } catch (err) {
      setOutput(`❌ Python Error:\n${err}`)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const textarea = e.target
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newValue = code.substring(0, start) + '    ' + code.substring(end)
      setCode(newValue)
      // Set cursor position after the inserted spaces
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4
      }, 0)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-transparent">
      <h1 className="md:text-3xl text-xl font-bold mb-6 text-black dark:text-gray-300">Python IDE</h1>
      
      <div className="w-full max-w-4xl space-y-4">
        <div>
          <label className="block text-sm text-black dark:text-gray-300 font-medium mb-2">Write your python code here:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-64 p-4 text-sm text-orange-700 bg-blue-300 dark:bg-transparent dark:text-green-400  border border-yellow-400 rounded-lg font-mono resize-both focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your Python code here..."
          />
       </div>
        
        <button
          onClick={runCode}
          disabled={isLoading}
          className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition-all ${
            isLoading 
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
              : 'bg-yellow-500 hover:bg-yellow-600 text-black hover:shadow-xl'
          }`}
        >
          {isLoading ? 'Loading...' : 'Run Python'}
        </button>
        
        <div>
          <label className="block text-sm font-medium mb-2">Output:</label>
          <pre className="w-full text-blue-700 bg-blue-300 dark:bg-transparent dark:text-purple-400 p-4 rounded-lg border border-gray-600 text-sm overflow-auto min-h-32 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default PythonIde