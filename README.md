VitalChain - Centralized Digital Health Record System

Problem Statement
Government hospitals lack a centralized patient record system, requiring patients to manually track their medical history. This results in:

- Treatment delays due to missing records.
- Repeated diagnostic tests, increasing costs and inconvenience.
- Medical errors caused by the lack of accurate history.
- Inefficiencies in emergency situations, as patients struggle to find hospitals with the necessary facilities.

A unified digital system is essential to ensure seamless medical care, faster emergency responses, and accurate health records. Additionally, it can provide valuable insights for government healthcare policies.

Solution
VitalChain is a decentralized, secure, and scalable digital patient record system designed to address these challenges. The system provides:

- A centralized repository for patient medical histories across hospitals.
- Real-time emergency care assistance by identifying hospitals with the required facilities.
- A management system for doctors and hospital staff with role-based access.
- A seamless record retrieval process for authorized medical personnel.
- Data analytics to assist the government in shaping effective healthcare policies.

Advantages of Using VitalChain:

- Reduces paperwork, eliminates redundant tests, and improves emergency response efficiency.
- Implements secure role-based authentication to protect sensitive patient records.
- Utilizes real-time healthcare analytics to assist in government policymaking.
- Designed for scalability, allowing future expansion to private hospitals and integration with insurance providers.

Key Features

Secure Patient Record Management
- Stores medical history in a centralized database.
- Allows easy retrieval by authorized hospital staff.
- Prevents unauthorized access through encryption and authentication.

Emergency Care Assistance
- Helps patients locate hospitals with available resources in real time.
- Reduces critical delays by providing immediate hospital status updates.

Doctor and Staff Management
- Registers doctors and hospital staff for efficient administration.
- Provides access control based on roles such as doctor, nurse, and administrator.

Hospital Directory and Search
- Lists all government hospitals with details on available facilities.
- Enables filtering based on location, specialty, and emergency services.

Government Health Reports and Data Insights
- Analyzes real-time patient records to assist in policy formation.
- Tracks disease trends to support pandemic preparedness and public health planning.

Secure Role-Based Authentication
- Ensures appropriate access for doctors, hospital administrators, and government officials.
- Uses encryption techniques to safeguard patient data.

Technology Stack

Category      | Technology Used
-------------|------------------------------
Frontend     | React (TypeScript), Tailwind CSS
Backend      | Node.js (TypeScript), Express.js
Database     | MySQL
API Testing  | Postman
Authentication | JWT (JSON Web Token)

Installation and Setup

Prerequisites
Ensure the following software is installed before proceeding:

- Node.js (v16 or later)
- MySQL Server
- Git
- Postman (for API testing)

Clone the Repository
```
git clone https://github.com/MUKESHBABUA/VitalChain.git
cd VitalChain
```

Install Dependencies
```
npm install
```

Set Up the Database
1. Open MySQL and create a new database:
```
CREATE DATABASE vitalchain;
```
2. Import the provided SQL schema file into MySQL.

3. Configure the database connection in the `.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=vitalchain
```

Run the Backend Server
```
cd server
npm run dev
```
The server will start at `http://localhost:5000`.

Run the Frontend Application
```
cd client
npm run dev
```
Open `http://localhost:5173` in a web browser.

Testing APIs with Postman
- Import the provided Postman Collection to test API endpoints.
- Verify patient registration, hospital lookup, and data retrieval features.

API Endpoints Overview

| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| POST   | /api/register   | Register a new patient    |
| GET    | /api/hospitals  | Retrieve a list of hospitals |
| GET    | /api/patient/:id | Fetch patient records    |
| POST   | /api/login      | Authenticate users        |

For detailed API documentation, refer to the Postman collection in the project repository.

Future Enhancements

- Implementation of blockchain-based medical records for enhanced security.
- Mobile application integration for easier patient access.
- Integration with insurance companies to streamline claim processing.
- AI-powered health recommendations based on patient data trends.


Demo Video Link:
https://drive.google.com/drive/folders/1GnENXXZaB019dXkhmQWNAPIiTzGZ2XEp
