import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const StudentDashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-800">Student Portal</h1>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-4 text-gray-600">Welcome, {user && user.name}</span>
                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Profile Section */}
                        <div className="md:col-span-1 bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center justify-center">
                                    <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-gray-600">
                                        {user && user.name.charAt(0)}
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-medium text-gray-900">{user && user.name}</h3>
                                    <p className="text-sm text-gray-500">{user && user.email}</p>
                                    <div className="mt-4 flex justify-center">
                                        <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enrolled Courses Section */}
                        <div className="md:col-span-2 bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Enrolled Courses</h3>
                            </div>
                            <ul className="divide-y divide-gray-200">
                                {/* Placeholder for enrolled courses */}
                                <li className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-medium text-indigo-600 truncate">
                                            Introduction to Computer Science
                                        </div>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Active
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                Batch: A 2023
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* More items... */}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
