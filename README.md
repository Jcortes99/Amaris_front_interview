# AmarisFort

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Installation

1. Clone the repository

```bash
git clone https://github.com/Jcortes99/Amaris_front_interview.git

cd amaris_front_interview
```

2. Install dependencies

```bash
npm install
```

## Build Application

Generar el build

ng build --configuration=production

This will create the files in dist/amaris_fort/browser

## Development Server

To run this project, follow these steps:

1) Navigate to the folder `dist/amaris_front/browser`

2) Run:
   ```sh
   npm install
   ```

3) Start the server using:
   ```sh
   http-server -p 4200
   ```
   You need this specific port because the backend CORS policy only allows requests from `localhost:4200`.

4) Open your web browser and go to:
   ```
   http://localhost:4200/index.csr.html
   ```
   Then, **click on home, in the menu** (this step is necessary for unknown reasons).

## The Web Application

The web application consists of three main views: [Home](#home), [Employees' Database](#db), and [Analytics](#analytics).

### Home

This view contains the clickable Amaris logo.

### Employees' Database (DB)

In this view, you can request employee information from the backend API. **There is a 30-second cooldown between requests** (anti-scraping measure).

1) If the search field is empty, the system returns a list of all employees. You can sort the columns by clicking on the headers.
2) If you enter a valid employee ID (1-24), the system returns the details of that specific employee.

### Analytics

When you enter this view, the frontend automatically makes a request to fetch all employees' data from the backend. **You must wait 30 seconds before making another request.**

This view displays **four charts** related to employee information, including age and salary distribution.

## Additional Comments

- I'm not very experienced in front-end development, so there are many things that could be improved.
- The application contains repeated blocks of code in various places; I forgot to create a proper service or apply better coding practices.
- The application **does not store employee information in memory**. This is why there is a waiting time between requests. A better approach would be to cache the data in memory to reduce unnecessary API calls.
- The reason for this design choice is that, during the interview, I focused on making requests and utilizing the provided API.
- This project is aiming to fetch the wildFly server. If you are testing the back-end using ```mvn spring-boot:run``` you have to avoid the name of the project in the url:
```bash
/src/app/data-fetcher/data-fetcher.component.ts

line 28: from http://localhost:8080/SoftwareInterview/Users/get-anual-salary/${this.number} to http://localhost:8080/Users/get-anual-salary/${this.number}
line 29: from http://localhost:8080/SoftwareInterview/Users/get-all-users to http://localhost:8080/Users/get-all-users
```
