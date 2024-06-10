# MoveMountains

## Overview

MoveMountains is a motivational platform designed for freelancers such as yoga, pilates, and martial arts instructors to search for rental spaces worldwide. The platform provides a comprehensive database of churches, temples, and rental studios with price points for online bookings, enabling freelancers to increase productivity by coordinating private classes, building schedules in advance, and traveling the world.

### Problem

Freelance instructors often face challenges in finding suitable rental spaces for their classes. MoveMountains solves this problem by offering a worldwide database of rental spaces, complete with price points and online booking capabilities. This allows instructors to plan their schedules in advance and ensure they choose high-quality locations for their clients.

### User Profile

MoveMountains is tailored for freelance instructors who need reliable and convenient rental spaces. They can create accounts, log in, and proceed with bookings through the website.

### Features

As a freelance instructor:
I want to create an account and log in, so that I can access the platform's features and make bookings.
I want to choose the country I want to go to, navigate to the city, search for a location with good reviews as it is important for my business to not disappoint clients with the chosen location.
After booking, I am able to leave a review for the rental space.

## Implementation

### Tech Stack

Frontend: React.js
Backend: Node.js, Express.js,
APIs: Google Maps API for maps, geolocation, and place information
Database: MySQL for storing rental spaces and user data

### APIs

Google Maps API: Provides maps, geolocation, and place information.


### Sitemap

- Welcome Page
    - questionaire to excite for the website entry

- About Page
    -  Moto and mission to unite instructors and rental spaces

- Home Page 
    - overview of spaces by cities 
    - contact us

- City Rentals Page
    - by location
    - by address
    - by price
    - bo contact info 

- Rental Space Details 
    - google maps
    - description
    - calendar for availability
    - photos 

### Mockups

Please find the attached mockups: https://www.icloud.com/notes/050lrn5SQ1JVWoo6DeqJXUWDw 

### Data

Rental Spaces:
- MySql database to create a rental spaces list (Space ID, name, description, address, reviews)
- Users can have multiple bookings, reviews, and favorite rental spaces.

### Endpoints

POST: User email, user password, make a booking, review for the rental space.
GET: Rental spaces, retrieve bookings.


### Auth

Users can register for an account by providing their username, email, and password.
When users want to access restricted areas of the platform, they will need to log in.
Users will need to re-authenticate after the token expires to continue accessing restricted areas.
 A JWT will be used to generate, verify JWTs.

## Roadmap

Day 1-2 (2 days)
    Project Set Up: 
    client and server set up - react vite
    database schema for rental spaces and users - mySql
    API's endpoints for user registration, login, and rental space retrieval.

Day 3-4 (2 days)
    Part I 
    Develop the welcome page 
    Design and implement the about page
    Develop the home page with an overview and footer "contact us" 

Day 5-7 (3 days)
    Part II
    Implement the city rentals page with filters for location, address, and price.
    Design and integrate Google Maps API to display rental spaces.
    Develop the rental space details page with a description, availability calendar, and photos

Day 8-9 (2 days)
    User authentification - login/signup 
    Testing 

## Nice-to-haves
    User authentification - login/signup 
    Separate accounts for rental space providers

    
