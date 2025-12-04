import React from 'react';

const CourseLanding = ({ courses, onSelect }) => {

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quizzy / Velg fag
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Velg en et fag for å teste dine ferdigheter med quizzer..
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {
                courses.map(course => (
                    <div
                        key={`course_${course}`}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => onSelect("selectedCourse", course)}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {course.charAt(0).toUpperCase() + course.slice(1)}
                                </h2>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Velg fag
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default CourseLanding;