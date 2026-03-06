export function MobileWireframe() {
  return (
    <div className="w-full bg-white border-2 border-black" style={{ width: '375px' }}>
      {/* Navbar */}
      <div className="border-b-2 border-black">
        <div className="px-4 pt-2 pb-1">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider">NAVBAR</p>
        </div>
        <div className="px-4 pb-4 flex justify-between items-center">
          <div className="w-24 h-6 bg-black"></div>
          <div className="w-6 h-6 bg-gray-400 flex items-center justify-center">
            <div className="text-gray-600 text-[8px]">☰</div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b-2 border-black">
        <div className="px-4 pt-4 pb-1">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider">HERO</p>
        </div>
        <div className="px-6 pb-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gray-300 border-2 border-black rounded-lg mb-6 flex items-center justify-center">
              <div className="text-gray-500 text-[10px]">Photo</div>
            </div>
            <div className="w-24 h-4 bg-gray-400 mb-2"></div>
            <div className="w-40 h-8 bg-black mb-3"></div>
            <div className="w-36 h-5 bg-gray-400 mb-6"></div>
            <div className="space-y-2 mb-6 w-full">
              <div className="w-full h-3 bg-gray-300"></div>
              <div className="w-full h-3 bg-gray-300"></div>
              <div className="w-4/5 h-3 bg-gray-300 mx-auto"></div>
            </div>
            <div className="w-32 h-10 bg-black"></div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="border-b-2 border-black">
        <div className="px-4 pt-4 pb-1">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider">SKILLS</p>
        </div>
        <div className="px-6 pb-8">
          <div className="w-20 h-6 bg-black mb-6 mx-auto"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-12 bg-gray-300 border-2 border-black flex items-center justify-center">
              <div className="text-gray-500 text-[10px]">React</div>
            </div>
            <div className="h-12 bg-gray-300 border-2 border-black flex items-center justify-center">
              <div className="text-gray-500 text-[10px]">JavaScript</div>
            </div>
            <div className="h-12 bg-gray-300 border-2 border-black flex items-center justify-center">
              <div className="text-gray-500 text-[10px]">Python</div>
            </div>
            <div className="h-12 bg-gray-300 border-2 border-black flex items-center justify-center">
              <div className="text-gray-500 text-[10px]">Next.js</div>
            </div>
            <div className="h-12 bg-gray-300 border-2 border-black flex items-center justify-center">
              <div className="text-gray-500 text-[10px]">Git</div>
            </div>
            <div className="h-12 bg-gray-300 border-2 border-black flex items-center justify-center">
              <div className="text-gray-500 text-[10px]">Tailwind</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="border-b-2 border-black">
        <div className="px-4 pt-4 pb-1">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider">PROJECTS</p>
        </div>
        <div className="px-6 pb-8">
          <div className="w-24 h-6 bg-black mb-6 mx-auto"></div>
          <div className="space-y-6">
            {/* Project Card 1 */}
            <div className="border-2 border-black">
              <div className="w-full h-40 bg-gray-300 border-b-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-[10px]">Image</div>
              </div>
              <div className="p-4">
                <div className="w-24 h-5 bg-black mb-4"></div>
                <div className="w-full h-9 bg-gray-400 border-2 border-black flex items-center justify-center">
                  <div className="text-gray-600 text-[10px]">View Project</div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="border-2 border-black">
              <div className="w-full h-40 bg-gray-300 border-b-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-[10px]">Image</div>
              </div>
              <div className="p-4">
                <div className="w-24 h-5 bg-black mb-4"></div>
                <div className="w-full h-9 bg-gray-400 border-2 border-black flex items-center justify-center">
                  <div className="text-gray-600 text-[10px]">View Project</div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="border-2 border-black">
              <div className="w-full h-40 bg-gray-300 border-b-2 border-black flex items-center justify-center">
                <div className="text-gray-500 text-[10px]">Image</div>
              </div>
              <div className="p-4">
                <div className="w-24 h-5 bg-black mb-4"></div>
                <div className="w-full h-9 bg-gray-400 border-2 border-black flex items-center justify-center">
                  <div className="text-gray-600 text-[10px]">View Project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="border-b-2 border-black">
        <div className="px-4 pt-4 pb-1">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider">CONTACT</p>
        </div>
        <div className="px-6 pb-8">
          <div className="w-24 h-6 bg-black mb-6 mx-auto"></div>
          
          {/* Contact Form */}
          <div className="space-y-3 mb-6">
            <div className="w-full h-10 bg-white border-2 border-black flex items-start px-3 pt-2">
              <div className="text-gray-400 text-[10px]">Name</div>
            </div>
            <div className="w-full h-10 bg-white border-2 border-black flex items-start px-3 pt-2">
              <div className="text-gray-400 text-[10px]">Email</div>
            </div>
            <div className="w-full h-24 bg-white border-2 border-black flex items-start px-3 pt-2">
              <div className="text-gray-400 text-[10px]">Message</div>
            </div>
            <div className="w-full h-10 bg-black flex items-center justify-center">
              <div className="text-white text-[10px]">Send</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <div className="w-16 h-5 bg-gray-400 flex items-center justify-center">
              <div className="text-gray-600 text-[10px]">GitHub</div>
            </div>
            <div className="w-20 h-5 bg-gray-400 flex items-center justify-center">
              <div className="text-gray-600 text-[10px]">LinkedIn</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pt-2 pb-1">
        <p className="text-[9px] text-gray-400 uppercase tracking-wider">FOOTER</p>
      </div>
      <div className="p-6 pt-2">
        <div className="flex flex-col items-center gap-3">
          <div className="w-32 h-4 bg-gray-400 flex items-center justify-center">
            <div className="text-gray-600 text-[10px]">Oskar Ortiz — 2026</div>
          </div>
          <div className="flex gap-2">
            <div className="w-14 h-3 bg-gray-300 flex items-center justify-center">
              <div className="text-gray-600 text-[9px]">GitHub</div>
            </div>
            <div className="text-gray-400 text-[10px]">|</div>
            <div className="w-16 h-3 bg-gray-300 flex items-center justify-center">
              <div className="text-gray-600 text-[9px]">LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
