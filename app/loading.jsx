export default function Loading() {
      return (
        <div class="flex items-center justify-center h-screen">
          <div class="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-16 w-16"></div>
          <span class="ml-4 text-xl font-semibold text-gray-800">Loading...</span>
        </div>
      );
    }