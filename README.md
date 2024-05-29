# Rent ChaCha

## Overview

A platform for freelance yoga/pilates/marital arts instructors to seacrh rental spaces worldwide. 

### Problem

A worldwide database of churches, temples, rental studios with price points for online bookings to increase productivity for freelancers who coordinates private classes to build schedule in advance and travel the world. 

### User Profile

Made for freelancers. They will be loggining to the website in order to proceed with bookings. 

### Features

As a freelance instructor,
I want to create an account and log in,
So that I can access the platform's features and make bookings.
I want to choose the country I want to go to, navigate to the city,
search for a location with good reviews as it is important for my business to not disappoint clients with the chosen location.
After booking, I am able to leave a review for the rental space.

## Implementation

### Tech Stack

Frontend: React.js
Backend: Node.js, Express.js,
APIs (GET, POST)
Authentication
2 user profiles (instructors and rental places)

### APIs

Google Maps API: Maps, geolocation, place information.


### Sitemap

- Welcome Page
    - questionaire to excite for the website entry;

- About Page
    -  moto and mission to unite 

- Home Page 
    - overview of spaces by cities 
    - sign up/log in (maybe)
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

POST method: user email, user password, making the booking, review for the rental space 
GET method: rental spaces, retrieve booking 

useParams for rental space ID 
useState for fetching and manipulating with data
useAxios 


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
    Front-end:
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
    Calendar API
    

