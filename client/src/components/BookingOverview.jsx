import React from "react";

const BookingOverview = () => {
    // Placeholder data for demonstration
    const statisticsData = {
        totalBookings: 100,
        upcomingBookings: 20,
        completedBookings: 80,
        revenue: "$5000",
        averageRevenuePerBooking: "$50",
    };

    const upcomingBookingsData = [
        { id: 1, movieName: "Movie A", showtime: "2024-03-01 18:00", bookingDate: "2024-02-28", customerName: "John Doe" },
        { id: 2, movieName: "Movie B", showtime: "2024-03-02 15:00", bookingDate: "2024-02-28", customerName: "Jane Doe" },   
    ];

    const recentBookingsData = [
        { id: 3, movieName: "Movie C", showtime: "2024-02-28 20:00", bookingDate: "2024-02-27", customerName: "Alice Smith" },
        { id: 4, movieName: "Movie D", showtime: "2024-02-27 17:00", bookingDate: "2024-02-26", customerName: "Bob Johnson" },
        // Add more data as needed
    ];

    // Placeholder function for handling actions on bookings
    const handleBookingAction = (bookingId) => {
        // Implement your booking action logic here
        console.log(`Action on booking with ID ${bookingId}`);
    };

    return (
        <div className="booking-overview">
            <div className="statistics-cards">
                <div className="card">
                    <h3>Total Bookings: {statisticsData.totalBookings}</h3>
                </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="upcoming-bookings">
                <h2>Upcoming Bookings</h2>
                {/* Display list of upcoming bookings */}
                <ul>
                    {upcomingBookingsData.map((booking) => (
                        <li key={booking.id}>
                            <span>{booking.movieName}</span>
                            <span>{booking.showtime}</span>
                            <span>{booking.bookingDate}</span>
                            <span>{booking.customerName}</span>
                            {/* Add action buttons for each booking */}
                            <button onClick={() => handleBookingAction(booking.id)}>Action</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Bookings */}
            <div className="recent-bookings">
                <h2>Recent Bookings</h2>
                {/* Display list of recent bookings */}
                <ul>
                    {recentBookingsData.map((booking) => (
                        <li key={booking.id}>
                            <span>{booking.movieName}</span>
                            <span>{booking.showtime}</span>
                            <span>{booking.bookingDate}</span>
                            <span>{booking.customerName}</span>
                            {/* Add action buttons for each booking */}
                            <button onClick={() => handleBookingAction(booking.id)}>Action</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Add more sections such as revenue summary, booking status summary, filtering options, booking calendar, etc. */}
        </div>
    );
};

export default BookingOverview;
