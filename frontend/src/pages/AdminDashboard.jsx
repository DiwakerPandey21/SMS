import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { FaUserGraduate, FaChalkboardTeacher, FaLayerGroup } from 'react-icons/fa';

const AdminDashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">SMS Admin</h1>
                </div>
                <nav className="mt-6">
                    <a href="#" className="flex items-center px-6 py-3 bg-gray-800 text-white">
                        <FaUserGraduate className="mr-3" /> Dashboard
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-800 text-gray-300">
                        <FaUserGraduate className="mr-3" /> Students
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-800 text-gray-300">
                        <FaChalkboardTeacher className="mr-3" /> Courses
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-800 text-gray-300">
                        <FaLayerGroup className="mr-3" /> Batches
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-6 bg-white shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                    <div className="flex items-center">
                        <span className="mr-4 text-gray-600">Welcome, {user && user.name}</span>
                        <button
                            onClick={logout}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Stats Cards */}
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                    <FaUserGraduate size={24} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Total Students</p>
                                    <p className="text-2xl font-semibold text-gray-900">120</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-green-100 text-green-600">
                                    <FaChalkboardTeacher size={24} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Total Courses</p>
                                    <p className="text-2xl font-semibold text-gray-900">15</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                                    <FaLayerGroup size={24} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Active Batches</p>
                                    <p className="text-2xl font-semibold text-gray-900">8</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        {/* Recent Activity or List */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p>Select an option from the sidebar to manage records.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
