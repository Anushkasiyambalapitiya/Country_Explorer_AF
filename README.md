# 🌍 Country Explorer

A React frontend application that integrates with the REST Countries API to display country information with search and filtering capabilities.

## 🚀 Features

- View all countries with key information (name, flag, population, region, capital)
- Search countries by name
- Filter by region (Africa, Americas, Asia, Europe, Oceania)
- Filter by language
- Responsive design for all devices
- Dark/light mode toggle
- User authentication (optional)

## 🔧 Technologies Used

- **Frontend**: React (Functional Components)
- **CSS Framework**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **API**: [REST Countries API](https://restcountries.com)
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel (Free Tier)

## 📌 API Endpoints Used

1. `GET /all` - Fetch all countries
2. `GET /name/{name}` - Search by country name
3. `GET /region/{region}` - Filter by region
4. `GET /alpha/{code}` - Get detailed country information

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-IT22557292.git
   cd country-explorer