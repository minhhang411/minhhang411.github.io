import React from 'react';

const Portfolio = () => {
    const projects = [
        { title: "Bus Ticket System", tech: "Laravel, React", desc: "Hệ thống đặt vé xe buýt trực tuyến." },
        { title: "Bookstore Manager", tech: ".NET, MySQL", desc: "Phần mềm quản lý kho và bán sách." },
        { title: "English Center Web", tech: "Spring Boot, React", desc: "Quản lý khóa học và học viên." }
    ];

    return (
        <div className="min-h-screen bg-[#F5F5DC] text-gray-800 font-sans"> {/* Màu Cream chủ đạo */}

            {/* Header / Hero Section */}
            <header className="bg-[#B0E0E6] py-20 px-10 text-center shadow-sm"> {/* Màu Baby Blue */}
                <h1 className="text-4xl font-bold mb-2">Mao Thị Minh Hằng</h1>
                <p className="text-xl opacity-80">Software Engineering Student | Full-stack Developer</p>
                <div className="mt-6 space-x-4">
                    <button className="bg-white px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">Download CV</button>
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">Contact Me</button>
                </div>
            </header>

            {/* Tech Stack */}
            <section className="max-w-4xl mx-auto py-16 px-6">
                <h2 className="text-2xl font-bold mb-8 border-b-2 border-[#B0E0E6] inline-block">Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['React', 'TailwindCSS', 'Laravel', 'Spring Boot', '.NET', 'MySQL', 'Git'].map(skill => (
                        <div key={skill} className="bg-white p-3 rounded shadow-sm text-center border border-blue-50">
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="max-w-4xl mx-auto py-16 px-6">
                <h2 className="text-2xl font-bold mb-8 border-b-2 border-[#B0E0E6] inline-block">Featured Projects</h2>
                <div className="grid md:grid-cols-1 gap-8">
                    {projects.map((proj, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-blue-600">{proj.title}</h3>
                            <p className="text-sm text-gray-500 mb-2 italic">{proj.tech}</p>
                            <p className="text-gray-700">{proj.desc}</p>
                            <a href="#" className="mt-4 inline-block text-sm font-semibold text-blue-400">View on GitHub →</a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-10 opacity-60 text-sm">
                © 2026 Minh Hằng. Built with React & TailwindCSS.
            </footer>
        </div>
    );
};

export default Portfolio;