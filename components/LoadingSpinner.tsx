const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-primary-600/20 border-t-primary-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-primary-400 rounded-full animate-spin animate-reverse"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner