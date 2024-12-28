import { Play, FileText, Download, Clock } from 'lucide-react'

const VideoSection = ({ videoId, title }: { videoId: string; title: string }) => (
  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full"
    />
  </div>
)

export const Features = () => {
  return (
    <div className="bg-[#0d1117] py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-32">
          <span className="text-purple-400 mb-4 block">Why You'll Love Learning Here</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Quality, Structure, and Real Results
          </h2>
        </div>

        {/* First Feature */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Play className="text-purple-500" size={20} />
              <span className="text-purple-400">A clear path to master coding</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Perfectly Structured Courses
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              No more jumping between random YouTube tutorials. Follow a clear, logical path
              designed to build your skills step-by-step.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <VideoSection 
              videoId="dQw4w9WgXcQ"
              title="Course Preview"
            />
          </div>
        </div>

        {/* Second Feature */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <VideoSection 
              videoId="dQw4w9WgXcQ"
              title="Lesson Preview"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-purple-500" size={20} />
              <span className="text-purple-400">Straightforward and to the point</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Clear and Bite-Sized Lessons
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Each lesson is focused and fluff-free, so you can make real progress—even with a busy
              schedule. Get exactly what you need without wasting a minute.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

