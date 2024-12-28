import { useState, FormEvent, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2, CheckCircle, AlertCircle, X } from 'lucide-react'

// New component for the success message
const SuccessMessage = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4 relative transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="mb-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-6">{message}</p>
        <button
          className="bg-purple-500 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600 transition-colors"
          onClick={onClose}
        >
          Back to Form
        </button>
      </div>
    </div>
  )
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })

    try {
      const form = e.target as HTMLFormElement
      await emailjs.sendForm(
        'service_eo4i68e', // Replace with your Service ID
        'template_p83hlqi', // Replace with your Template ID
        form,
        'R9ZW9yL7ykNOmY-8K' // Replace with your Public Key
      )

      setFormStatus({
        type: 'success',
        message: 'Thanks for reaching out! I\'ll get back to you soon.'
      })
      setShowSuccess(true)
      form.reset()
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessMessage = () => {
    setShowSuccess(false)
    setFormStatus({ type: null, message: '' })
  }

  return (
    <section className="bg-[#0d1117] py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           text-white placeholder-gray-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           text-white placeholder-gray-400 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           text-white placeholder-gray-400 resize-none transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-purple-500 text-white font-medium rounded-lg 
                       hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 
                       focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 
                       disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Error Message */}
            {formStatus.type === 'error' && (
              <div
                className="p-4 rounded-lg bg-red-900/50 text-red-400 border border-red-800 flex items-center transition-all duration-300 ease-in-out"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <SuccessMessage
          message={formStatus.message}
          onClose={closeSuccessMessage}
        />
      )}
    </section>
  )
}

