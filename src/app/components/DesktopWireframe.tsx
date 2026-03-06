export function DesktopWireframe() {
  return (
    <div className="w-full bg-white border-2 border-black" style={{ width: '1440px', transformOrigin: 'top left' }}>
      {/* Navbar */}
      <div className="border-b-2 border-black">
        <div className="px-6 pt-2 pb-1">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">NAVBAR</p>
        </div>
        <div className="px-6 pb-6 flex justify-between items-center">
          <div className="w-32 h-8 bg-black"></div>
          <div className="flex gap-8">
            <div className="w-16 h-6 bg-gray-400"></div>
            <div className="w-20 h-6 bg-gray-400"></div>
            <div className="w-20 h-6 bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b-2 border-black">
        <div className="px-6 pt-6 pb-2">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">HERO</p>
        </div>
        <div className="px-16 pb-16">
          <div className="max-w-5xl mx-auto flex items-center gap-16">
            <div className="flex-1">
              <div className="w-32 h-5 bg-gray-400 mb-3"></div>
              <div className="w-64 h-12 bg-black mb-4"></div>
              <div className="w-56 h-6 bg-gray-400 mb-8"></div>
              <div className="space-y-3 mb-8">
                <div className="w-full h-4 bg-gray-300"></div>
                <div className="w-full h-4 bg-gray-300"></div>
                <div className="w-3/4 h-4 bg-gray-300"></div>
              </div>
              <div className="w-40 h-12 bg-black"></div>
            </div>
            <div className="w-64 h-64 bg-gray-300 border-2 border-black rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-xs">Photo Placeholder</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="border-b-2 border-black">
        <div className="px-6 pt-6 pb-2">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">SKILLS</p>
        </div>
        <div className="px-16 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-32 h-10 bg-black mb-10 mx-auto"></div>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="h-16 bg-gray-300 border-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-xs">React</div>
              </div>
              <div className="h-16 bg-gray-300 border-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-xs">JavaScript</div>
              </div>
              <div className="h-16 bg-gray-300 border-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-xs">Python</div>
              </div>
              <div className="h-16 bg-gray-300 border-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-xs">Next.js</div>
              </div>
              <div className="h-16 bg-gray-300 border-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-xs">Git</div>
              </div>
              <div className="h-16 bg-gray-300 border-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-xs">Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="border-b-2 border-black">
        <div className="px-6 pt-6 pb-2">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">PROJECTS</p>
        </div>
        <div className="px-16 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-48 h-10 bg-black mb-12 mx-auto"></div>
            <div className="grid grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="border-2 border-black">
                <div className="w-full h-48 bg-gray-300 border-b-2 border-black flex items-center justify-center">
                  <div className="text-gray-500 text-xs">Image</div>
                </div>
                <div className="p-6">
                  <div className="w-32 h-6 bg-black mb-6"></div>
                  <div className="w-full h-10 bg-gray-400 border-2 border-black flex items-center justify-center">
                    <div className="text-gray-600 text-xs">View Project</div>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="border-2 border-black">
                <div className="w-full h-48 bg-gray-300 border-b-2 border-black flex items-center justify-center">
                  <div className="text-gray-500 text-xs">Image</div>
                </div>
                <div className="p-6">
                  <div className="w-32 h-6 bg-black mb-6"></div>
                  <div className="w-full h-10 bg-gray-400 border-2 border-black flex items-center justify-center">
                    <div className="text-gray-600 text-xs">View Project</div>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="border-2 border-black">
                <div className="w-full h-48 bg-gray-300 border-b-2 border-black flex items-center justify-center">
                  <div className="text-gray-500 text-xs">Image</div>
                </div>
                <div className="p-6">
                  <div className="w-32 h-6 bg-black mb-6"></div>
                  <div className="w-full h-10 bg-gray-400 border-2 border-black flex items-center justify-center">
                    <div className="text-gray-600 text-xs">View Project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="border-b-2 border-black">
        <div className="px-6 pt-6 pb-2">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">CONTACT</p>
        </div>
        <div className="px-16 pb-16">
          <div className="max-w-2xl mx-auto">
            <div className="w-48 h-10 bg-black mb-12 mx-auto"></div>
            
            {/* Contact Form */}
            <div className="space-y-4 mb-8">
              <div className="w-full h-12 bg-white border-2 border-black flex items-start px-3 pt-2">
                <div className="text-gray-400 text-xs">Name</div>
              </div>
              <div className="w-full h-12 bg-white border-2 border-black flex items-start px-3 pt-2">
                <div className="text-gray-400 text-xs">Email</div>
              </div>
              <div className="w-full h-32 bg-white border-2 border-black flex items-start px-3 pt-2">
                <div className="text-gray-400 text-xs">Message</div>
              </div>
              <div className="w-full h-12 bg-black flex items-center justify-center">
                <div className="text-white text-xs">Send</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8">
              <div className="w-20 h-6 bg-gray-400 flex items-center justify-center">
                <div className="text-gray-600 text-xs">GitHub</div>
              </div>
              <div className="w-24 h-6 bg-gray-400 flex items-center justify-center">
                <div className="text-gray-600 text-xs">LinkedIn</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pt-2 pb-1">
        <p className="text-[10px] text-gray-400 uppercase tracking-wider">FOOTER</p>
      </div>
      <div className="p-8 pt-4">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="w-40 h-5 bg-gray-400 mx-auto flex items-center justify-center">
            <div className="text-gray-600 text-xs">Oskar Ortiz — 2026</div>
          </div>
          <div className="flex justify-center gap-3">
            <div className="w-16 h-4 bg-gray-300 flex items-center justify-center">
              <div className="text-gray-600 text-[10px]">GitHub</div>
            </div>
            <div className="text-gray-400 text-xs">|</div>
            <div className="w-20 h-4 bg-gray-300 flex items-center justify-center">
              <div className="text-gray-600 text-[10px]">LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
