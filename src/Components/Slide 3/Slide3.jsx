import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Logo from '../../Images/ROf Image 1.png';

const projectLocations = {
    'Project A': 'Location A',
    'Project B': 'Location B',
    'Project C': 'Location C',
    'Project D': 'Location D',
};

const Slide3 = () => {
    const [selectedProject, setSelectedProject] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleProjectChange = (project) => {
        setSelectedProject(project);
        setIsDropdownOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <img src={Logo} alt="ROF" className="mx-auto mb-4" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Project Name
                    </label>
                    <div className="relative">
                        <button
                            className="w-full px-4 py-2 text-left bg-white border rounded-md shadow-sm focus:outline-none"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {selectedProject || 'Choose Project'}
                        </button>
                        <Transition
                            show={isDropdownOpen}
                            enter="transition-all duration-300"
                            enterFrom="max-h-0 opacity-0"
                            enterTo="max-h-60 opacity-100"
                            leave="transition-all duration-300"
                            leaveFrom="max-h-60 opacity-100"
                            leaveTo="max-h-0 opacity-0"
                        >
                            <div className="absolute left-0 right-0 z-10 w-full mt-2 bg-white border rounded-md shadow-lg overflow-hidden">
                                {Object.keys(projectLocations).map((project) => (
                                    <div
                                        key={project}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                        onClick={() => handleProjectChange(project)}
                                    >
                                        {project}
                                    </div>
                                ))}
                            </div>
                        </Transition>
                    </div>
                </div>
                <div className={`transition-all duration-300 ${isDropdownOpen ? 'mt-44' : 'mt-4'}`}>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Project Location
                    </label>
                    <input
                        type="text"
                        value={selectedProject ? projectLocations[selectedProject] : ''}
                        readOnly
                        placeholder="123, Street Name, City"
                        className="w-full px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none"
                    />
                </div>
                <button className="w-full px-4 py-2 text-black bg-brown-600 rounded-md focus:outline-none">
                    Assign Executive
                </button>
            </div>
        </div>
    );
};

export default Slide3;
