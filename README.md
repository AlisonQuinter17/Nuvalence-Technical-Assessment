# Address Book Web Front-End
### Description
- This project developed in Angular represents the web interface for an "Address Book" considering a mostly mobile audience and a minority of desktop users.

- Below you will find instructions to install and run the project.

### Main features
- **Contact List:** You can view a list of ten people in the directory.

- **Contact Details:**  You can select a person from the list and navigate to a details page for mobile users, and a Sidebar will be displayed for desktop users where more detailed information about the selected contact is displayed.

- **Filter:** You can search through the filter functionality for the user you have in mind.

- **Pagination:** You will be able to navigate through multiple pages of the contact list, displaying a limited number (10) of contacts per page for better organization and visualization. You can move forward or backward between pages according to your needs.

- **Sorting:** List of contacts ordered by last name in alphabetical order, facilitating the systematic location and display of contacts.

### Improvements
- **Animations and effects:**  If I had more time I would add different CSS animations and effects that would make the user interface more dynamic and attractive to the user.

- **Improved UI/UX:** If I had more time I would like to improve the interface and user experience by focusing more specifically on the details. Estimate: 4 hours.

- **Automated Tests:** It would incorporate unit and integration tests to guarantee the robustness of the code and prevent possible errors in future iterations. Estimate: 8 hours.

##### This project was developed only with HTML/CSS in terms of UI/UX.

## Deployment/running instructions.
- **Node.js** and **npm**
- **Angular CLI:** You can install it globally using npm:

```bash
$ npm install -g @angular/cli
```

## Installations
- Clone this repository to your local machine using:

```bash
$ git clone https://github.com/AlisonQuinter17/Nuvalence-Technical-Assessment.git
```

- Navigate to the project directory:

```bash
$ cd address-book
```

- Install the dependencies:

```bash
$ npm install
```

## Run the Project
- Once you have installed all the dependencies, you can run the project in development mode with:

```bash
$ ng serve
```

- Next, open your browser and go to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build the Project
- To build the project and get a production version, run:

```bash
$ ng build --prod
```
- The compiled files will be saved in the dist/ directory.

## Additional Help
For more help on the Angular CLI, run ng help or check out the Angular CLI README.
