# AmarisFort

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

For run this project you need to follow:

1) go inside the folder dist/amaris_front/browser

2) ```npm install```

3) ``` http-serve -p 4200 ``` You need this port because the backend cors just allow request from localhost:4200.

4) put in the web browser: http://localhost:4200/index.csr.html and reload the web (I don't know why but you need to reload the web page)

## The Web Page

The web has 3 views, the [home](#home) (homeyes), the [Employees' Data Base](#db) (DB) and the [Analytics](#analytics).

### HOME

Here you can find the clickable logo of amaris.

### DB

Here you can ask TO THE BACKEND the information of the Employees API. You have to wait 30 second between request. (Anti-scrapping web page)

1) If the field is empty, it returns the list of all the employees. You can sort de columns by clicking on the header.

2) If you put a valid id (1-24) it returns the information of that employee.

YOU HAVE TO WAIT 30 SECONDS BETWEEN THE REQUESTING.

### Analytics

At the moment you enter into this view, the front ask to the back a full request of all the employees. So, YOU HAVE TO WAIT 30 SECONDS after any request.

This view will display 4 charts about the information of the employees, ages and salary. 

## Additional comments

I'm not good making front-end the are many things to improve

The aplication have repeted block of code in many parts, I just forgot to make a service o better pratices in this aplication.

The app DO NOT save the employees information in memory. For that reason you have to wait between request. The best solution is to have all the information saved in memory to improve the program, avoiding useless request to the employees' API. I did it because in this interview I tried to make the request and use the API.