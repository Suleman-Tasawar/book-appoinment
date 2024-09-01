# BookEaser

**BookEaser** is a Next.js application designed to facilitate appointment bookings with doctors. It provides a user-friendly interface for booking appointments, viewing appointment details, and managing booked appointments. This README file covers everything from project setup to running the application locally.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Running the Application Locally](#running-the-application-locally)
7. [API Endpoints](#api-endpoints)
8. [SEO Optimization](#seo-optimization)
9. [Contributing](#contributing)
10. [License](#license)

## Overview

BookEaser is a comprehensive appointment booking system with the following pages:
- **Home Page**: Displays general content and information about the service.
- **Booking Page**: Allows users to book an appointment with a doctor.
- **Success Page**: Confirms successful appointment bookings.
- **Staff Page**: Provides a list of all booked appointments for staff to manage.

## Features

- User-friendly interface for booking appointments.
- Automatic routing to a success page upon booking.
- Staff page for viewing all booked appointments.
- SEO optimization for better search engine visibility.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Vercel**: Deployment platform (if applicable).

## Project Structure

The project is organized as follows:

```
  app
    /api
      /book
      route.ts 
    /bookings
        page.tsx
    /staff
        page.tsx
    /sucessfull
        page.tsx
    page.tsx            
    layout.tsx      
  /components
    NavBar.tsx   
    Footer.tsx    
    Button.tsx
    Card.tsx
    DatePicker.tsx
    HeaderCard.tsx
    SelectInput.tsx
    TextInput.tsx
    TextArea.tsx
    TimePicker.tsx

  global.css
  
```

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/bookeaser.git
   cd bookeaser
   ```

2. **Install Dependencies**

   Ensure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

## Running the Application Locally

1. **Start the Development Server**

   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

2. **Access the Application**

   Open your browser and go to `http://localhost:3000` to view the application.

## API Endpoints

### GET /api/appointments

- **Description**: Fetches a list of all appointments.
- **Response**: JSON array of appointments.

### POST /api/appointments

- **Description**: Books a new appointment.
- **Request Body**: JSON object with appointment details (e.g., `name`, `date`, `time`).
- **Response**: Confirmation message or error.

## SEO Optimization

SEO has been implemented to improve the visibility of the application on search engines. This includes:

- Meta tags for title and description.
- Structured data for better indexing.
- Proper use of heading tags (`<h1>`, `<h2>`, etc.).

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a pull request.

---