import "./Skills.css";
const services = [
    {
        icon: "⚙️",
        title: "Odoo Customization",
        description:
            "Custom Odoo ERP modules, workflow automation, XML views, access rules, reports, and integrations tailored to business operations.",
    },
    {
        icon: "🧩",
        title: "Full Stack Development",
        description:
            "End-to-end web application development, from backend APIs to responsive frontend UIs using MERN stack, PostgreSQL, and cloud services.",
    },
    {
        icon: "🎨",
        title: "Frontend Design",
        description:
            "Crafting pixel-perfect, accessible interfaces using Next.js,React.js, Tailwind CSS, and design systems that enhance user engagement and responsiveness.",
    },
];


export default function Services() {
    return (
        <div name='services' className="Skills bg-black text-white">
            <div className="heading">
                <div className="headings flex items-baseline">
                    <h1 className="px-5 text-2xl lg:px-20 lg:text-4xl text-black font-semibold">
                        Services
                    </h1>
                </div>
            </div>
            <section className=" skilldiv bg-[#010206] text-white py-20 px-4 md:px-16">
                <div className="text-center">
                    <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        ✦ SERVICES
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                    I build business-focused ERP customizations, web applications, and frontend experiences that are practical, scalable, and easy to use.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#112240] border border-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
