export default function Home() {
    return (
        <main className="container mx-auto p-4 sm:p-6 md:p-12">
            {/* Company Logo */}
            <img src="/logo.png" alt="TamarSoft Logo" className="w-36 h-auto mx-auto mt-4 mb-6" />
            <header
                className="text-center mb-12 py-40 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg relative overflow-hidden"
                style={{ backgroundImage: "url(/bg.png)" }}
            >
                <div className="absolute inset-0 bg-[#000000] bg-opacity-65"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl md:text-6xl font-black mb-4">
                        Transform Your Association
                    </h1>
                    <p className="text-lg md:text-2xl font-semibold max-w-4xl mx-auto">
                        Introducing the Online Student Management Portal
                    </p>
                    <p className="text-md md:text-lg">
                        A Comprehensive Proposal from{" "}
                        <span className="font-bold">Tamar Software Solutions Co. Ltd</span>
                    </p>
                </div>
            </header>

            {/* Introduction Section */}
            <section id="introduction" className="mb-16">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-8 border-[#EDC951]">
                    <h2 className="text-3xl font-bold text-[#6A4A3C] mb-4">
                        Empowering Campus Associations
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Tamar Software Solutions Co. Ltd is dedicated to enhancing organizational
                        efficiency through innovative digital solutions. We are pleased to present a
                        proposal for a robust online management portal designed specifically for
                        campus associations. Our solution is crafted to streamline operations, save
                        valuable time and resources, and foster a more connected and efficient
                        student community.
                    </p>
                </div>
            </section>

            {/* Current Needs Section */}
            <section id="current-needs" className="mb-16">
                <h2 className="text-3xl font-bold text-center text-[#CC333F] mb-8">
                    Understanding Your Current Needs
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    We recognize the challenges many associations face with traditional, manual
                    processes. These often lead to inefficiencies and hinder smooth operations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-[#CC333F]">
                        <div className="text-5xl mb-4">✍️</div>
                        <h3 className="text-xl font-semibold mb-2">Manual Registrations</h3>
                        <p className="text-gray-600">
                            Dealing with congestion and confusion during freshers' registration
                            processes.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-[#CC333F]">
                        <div className="text-5xl mb-4">💰</div>
                        <h3 className="text-xl font-semibold mb-2">Manual Payments</h3>
                        <p className="text-gray-600">
                            Cumbersome cash handling for dues and souvenir sales, leading to missing
                            receipts.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-[#CC333F]">
                        <div className="text-5xl mb-4">🗳️</div>
                        <h3 className="text-xl font-semibold mb-2">External Voting</h3>
                        <p className="text-gray-600">
                            Relying on external bodies for voting campaigns, lacking direct control
                            and integration.
                        </p>
                    </div>
                </div>
            </section>

            {/* Proposed Solution Section */}
            <section id="proposed-solution" className="mb-16">
                <h2 className="text-3xl font-bold text-center text-[#00A0B0] mb-8">
                    Our Proposed Solution & Key Features
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    TamarSoft's web-based application is designed to revolutionize your operations
                    with these powerful functionalities:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#EB6841]">
                        <div className="text-4xl">📱</div>
                        <div>
                            <h3 className="text-xl font-bold text-[#6A4A3C] mb-2">
                                Online Registration
                            </h3>
                            <p className="text-gray-700">
                                Students can easily register from their mobile devices, eliminating
                                physical queues and confusion.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#EB6841]">
                        <div className="text-4xl">💳</div>
                        <div>
                            <h3 className="text-xl font-bold text-[#6A4A3C] mb-2">
                                Convenient Mobile Payments
                            </h3>
                            <p className="text-gray-700">
                                Seamless payments for dues and souvenirs via Mobile Money wallets
                                with electronic receipts.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#EB6841]">
                        <div className="text-4xl">📩</div>
                        <div>
                            <h3 className="text-xl font-bold text-[#6A4A3C] mb-2">
                                Bulk SMS Messaging
                            </h3>
                            <p className="text-gray-700">
                                Executives can send timely alerts and important messages to all
                                students or specific groups.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#EB6841]">
                        <div className="text-4xl">🗃️</div>
                        <div>
                            <h3 className="text-xl font-bold text-[#6A4A3C] mb-2">
                                Student Record Management
                            </h3>
                            <p className="text-gray-700">
                                Admins can efficiently manage and maintain accurate records of all
                                association members.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#EB6841]">
                        <div className="text-4xl">🛍️</div>
                        <div>
                            <h3 className="text-xl font-bold text-[#6A4A3C] mb-2">
                                Souvenir Stock Control
                            </h3>
                            <p className="text-gray-700">
                                Keep track of souvenir inventory and manage purchases directly
                                within the system.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#EB6841]">
                        <div className="text-4xl">🎉</div>
                        <div>
                            <h3 className="text-xl font-bold text-[#6A4A3C] mb-2">
                                Integrated Voting Platform
                            </h3>
                            <p className="text-gray-700">
                                Create and manage voting campaigns for events like Dinner and Awards
                                nights effortlessly.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#EB6841]">
                        <div className="text-4xl">🎂</div>
                        <div>
                            <h3 className="text-xl font-bold text-[#6A4A3C] mb-2">
                                Automatic Birthday Wishes
                            </h3>
                            <p className="text-gray-700">
                                Personalized birthday messages are automatically sent to students,
                                fostering community spirit and engagement.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#EB6841]">
                        <div className="text-4xl">🏦</div>
                        <div>
                            <h3 className="text-xl font-bold text-[#6A4A3C] mb-2">
                                Centralized Fund Management
                            </h3>
                            <p className="text-gray-700">
                                Link all payments to a central account, ensuring direct and
                                transparent fund reception from the payment gateway.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-World Example Section */}
            <section id="real-world-example" className="mb-16">
                <h2 className="text-3xl font-bold text-center text-[#00A0B0] mb-8">
                    Real-World Example: Successfully Deployed
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    See our solution in action! Below are screenshots from a live deployment for the
                    Physics Association of Ghana (PHYSAG), demonstrating the actual working portal
                    that students and executives use daily.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-[#6A4A3C] mb-4 text-center">
                            Student Portal
                        </h3>
                        <a
                            href="https://physag-ug.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-90 transition-opacity"
                        >
                            <img
                                src="/physag3.png"
                                alt="Physics Association Student Portal Dashboard"
                                className="w-80 h-auto rounded-lg shadow-md mx-auto"
                            />
                        </a>
                        <p className="text-gray-700 mt-4 text-center">
                            Clean, intuitive interface where students can register, make payments,
                            and access association services.
                        </p>
                        <p className="text-sm text-[#00A0B0] text-center mt-2">
                            <a
                                href="https://physag-ug.web.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                🔗 View Live Demo
                            </a>
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-[#6A4A3C] mb-4 text-center">
                            Admin Management Panel
                        </h3>
                        <img
                            src="/physag2.png"
                            alt="Physics Association Admin Management Interface"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        <p className="text-gray-700 mt-4 text-center">
                            Comprehensive admin panel for executives to manage members, track
                            payments, and send communications.
                        </p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#00A0B0] to-[#6A4A3C] text-white rounded-xl p-6 mt-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">Proven Success</h3>
                    <p className="text-lg">
                        This live deployment serves hundreds of students and has processed thousands
                        of transactions, proving the reliability and effectiveness of our solution.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="mb-16">
                <h2 className="text-3xl font-bold text-center text-[#EDC951] mb-8">
                    Unlocking Value & Efficiency
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-8 border-[#00A0B0]">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="text-6xl md:text-8xl font-black text-[#CC333F]">🚀</div>
                        <div>
                            <p className="text-4xl md:text-5xl font-black text-[#EB6841] mb-2">
                                Streamlined Operations
                            </p>
                            <p className="text-xl text-gray-700">
                                Save valuable time and resources by automating manual processes.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                <li>Enhanced Convenience for Students & Executives</li>
                                <li>Improved Accuracy of Records & Transactions</li>
                                <li>Stronger Online Presence & Engagement</li>
                                <li>Cost-Effectiveness Through Digitalization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Section */}
            <section id="investment" className="mb-16">
                <h2 className="text-3xl font-bold text-center text-[#6A4A3C] mb-8">
                    Transparent Investment Structure
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Our pricing model is designed to be straightforward and covers the essential
                    running costs and continuous maintenance of your portal.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gradient-to-br from-[#EB6841] to-[#CC333F] text-white rounded-xl shadow-xl p-8 text-center">
                        <h3 className="text-3xl font-bold mb-4">Standard Package</h3>
                        <p className="text-6xl font-black">8%</p>
                        <p className="text-xl font-semibold mt-2">per transaction</p>
                        <p className="text-lg mt-4">
                            Includes all core functionalities <br />
                            (excluding voting platform)
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#00A0B0] to-[#6A4A3C] text-white rounded-xl shadow-xl p-8 text-center">
                        <h3 className="text-3xl font-bold mb-4">Premium Package</h3>
                        <p className="text-6xl font-black">10%</p>
                        <p className="text-xl font-semibold mt-2">per transaction</p>
                        <p className="text-lg mt-4">
                            Includes all core functionalities <br />
                            PLUS the Integrated Voting Platform
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-8 border-[#EDC951]">
                    <h3 className="text-2xl font-bold text-[#6A4A3C] mb-4">
                        What the 8% Reserve Covers:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            <span className="font-semibold">3%</span> allocated for payment
                            processing fees (PayStack)
                        </li>
                        <li>
                            <span className="font-semibold">10,000 SMS credits</span> per academic
                            year (MNotify SMS)
                        </li>
                        <li>
                            <span className="font-semibold">20-30 USD</span> per year for hosting
                            services (Firebase)
                        </li>
                        <li>
                            <span className="font-semibold">10-12 USD</span> per year for domain
                            renewal (HostAfrica)
                        </li>
                        <li>General updates and maintenance services</li>
                    </ul>
                </div>
            </section>

            {/* Why TamarSoft Section */}
            <section id="why-tamarsoft" className="mb-16">
                <h2 className="text-3xl font-bold text-center text-[#00A0B0] mb-8">
                    Why Choose TamarSoft?
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-8 border-[#EB6841] text-center">
                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Tamar Software Solutions Co. Ltd combines cost-effectiveness with advanced
                        functionality and dedicated support. Our team possesses the expertise and
                        technical capability to ensure your online portal operates seamlessly and
                        efficiently, promoting the association's growth and continued success for
                        years to come. We are fully prepared to commence work immediately upon
                        contract award.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center mt-12 pt-8 border-t border-gray-300">
                <h3 className="text-2xl font-bold text-[#6A4A3C] mb-4">
                    Connect with TamarSoft Today!
                </h3>
                <p className="text-lg text-gray-700 mb-2">Tel: 0240214327</p>
                <p className="text-lg text-gray-700 mb-6">Email: tamarsoftgh@gmail.com</p>
                <p className="text-lg text-gray-700 mb-6">
                    Website:{" "}
                    <a
                        href="https://studentappgh.web.app/"
                        target="_blank"
                        className="text-[#368dc4]"
                    >
                        studentappgh.web.app
                    </a>
                </p>
                <p className="text-gray-500">
                    Proposal created by Tamar Software Solutions Co. Ltd.
                </p>
            </footer>
        </main>
    );
}
