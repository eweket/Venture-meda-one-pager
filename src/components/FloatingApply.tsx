import { X, Clock, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingApply() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.paddingTop = '52px';
    } else {
      document.body.style.paddingTop = '0px';
    }

    return () => {
      document.body.style.paddingTop = '0px';
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary/95 to-primary text-white shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="relative flex items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <div className="hidden sm:flex items-center space-x-2">
                  <Clock className="w-4 h-4 animate-pulse text-secondary" />
                  <p className="text-sm font-medium text-secondary">
                    Application Deadline: <span className="font-semibold font-poppins ">February 02, 2025</span>
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/apply"
                    className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 
                      px-4 py-1.5 rounded-full text-sm font-medium border border-white/20 
                      backdrop-blur-sm transition-all duration-300"
                  >
                    <span className="font-poppins text-secondary">Apply Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-secondary" />
                  </Link>
                </motion.div>
              </div>

              <motion.button
                onClick={() => setIsVisible(false)}
                className="absolute right-0 p-1.5 hover:bg-white/10 rounded-full transition-colors"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                aria-label="Close notification"
              >
                <X size={16} />
              </motion.button>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full blur-xl" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 