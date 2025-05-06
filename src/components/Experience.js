import { useState } from 'react';
import jobData from './jobData.json';

const Experience = () => {
    const [activeJob, setActiveJob] = useState(0);

    return (
        <div name='experience' className="Skills">
            <div className="heading">
                <div className="headings flex items-baseline">
                    <h1
                        className="px-5 text-2xl lg:px-10 lg:text-4xl font-semibold"
                        id="achievementheading"
                    >
                        Experience
                    </h1>
                </div>
            </div>
            <div className="aboutdiv min-h-screen bg-[#010206] text-white p-4 md:p-16 flex items-center justify-center">
                {/* 0a192f */}
                <div className="w-full max-w-5xl">
                    <h2 className="text-teal-400 text-2xl md:text-2xl font-mono">
                        <span className="text-white">Where I've Worked</span>
                    </h2>

                    <div className="flex flex-col md:flex-row mt-6">
                        {/* Company List */}
                        <div className="flex md:flex-col md:w-1/4 overflow-x-auto md:overflow-x-hidden border-b md:border-b-0 md:border-r border-gray-700">
                            {jobData.map((job, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveJob(index)}
                                    className={`px-4 py-2 text-md whitespace-nowrap transition-all duration-300${activeJob === index
                                            ? 'border-b-2 md:border-b-0 md:border-l-4 border-teal-400 bg-[#112240]'
                                            : 'border-b-2 md:border-b-0 md:border-l-4 border-transparent hover:bg-[#112240]'} md:w-full md:text-left`}
                                >
                                    {job.company}
                                </button>

                            ))}
                        </div>

                        {/* Job Description */}
                        <div className="md:w-3/4 mt-4 md:mt-0 md:pl-8">
                            <h3 className="text-2xl font-semibold">
                                {jobData[activeJob].role}{' '}
                                <span className="text-teal-400">@ {jobData[activeJob].company}</span>
                            </h3>
                            <p className="text-xl text-gray-400 mt-1">{jobData[activeJob].duration}</p>
                            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                                {jobData[activeJob].description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
