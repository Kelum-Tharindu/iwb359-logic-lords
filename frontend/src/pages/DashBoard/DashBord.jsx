import react from 'react';
// import Footer from '../../Components/Footer/Footer';
import './DashBoard.css'

const DashBord = ({ name, title, company, email, phone }) => {

    const businessCards = [
        { name: 'John Doe', title: 'Software Engineer', company: 'Tech Solutions Inc.', email: 'john@example.com', phone: '+123 456 7890' },
        { name: 'Jane Smith', title: 'Product Manager', company: 'Innovate Labs', email: 'jane@example.com', phone: '+123 654 3210' },
        { name: 'Emily Davis', title: 'UX Designer', company: 'Creative Studio', email: 'emily@example.com', phone: '+123 987 6543' },
        { name: 'Michael Brown', title: 'Data Scientist', company: 'AI Corp', email: 'michael@example.com', phone: '+123 765 4321' },
        { name: 'Sarah Wilson', title: 'Marketing Lead', company: 'Growth Inc.', email: 'sarah@example.com', phone: '+123 555 1212' },
    ];

    return (
        <>
            
            {/* <div className='Dashcotainer'>
            {businessCards.map((card, index) => (
                    <div key={index} className="business-card">
                        <div className="business-card-header">
                            <h2>{card.name}</h2>
                            <h4>{card.title}</h4>
                        </div>
                        <div className="business-card-body">
                            <p><strong>Company:</strong> {card.company}</p>
                            <p><strong>Email:</strong> {card.email}</p>
                            <p><strong>Phone:</strong> {card.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer /> */}
        </>
    )
}
export default DashBord