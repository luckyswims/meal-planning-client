# Meal Planning Client

## Technologies Used
-HTML  
-Handlebars  
-CSS  
-SCSS  
-Bootstrap  
-JavaScript  
-jQuery  
-AJAX  

## About
This Client was develped for a project during my Software Engineering Immersive at
General Assembly. The goal was to create a full stack application with resources
the users could Create, Update, Read, and Delete. For the project I chose to
create a meal planning application to help users plan out their meals for the
week. The links to the deployed API and Client are below:

[Deployed API]
[Deployed Client]

## Development
### Version 1
Once I had finished Version 1 of the API I needed to build a client where users
could sign-up, sign-in, change password, sign-out, create a meal plan, view 
their meal plans, update their meal plans, and delete their meal plans. I
started by creating a wireframe of what I thought I wanted the layout to look
like. 

![Version 1 Wireframe][Wireframe1]

Now that I had a design, I started building the client. I first built the user
authentication forms, and implemented functions to send the user authentication
requests to the API. The next thing I decided to work on was the navigation bar.

I decided to try and use the Bootstrap navbar as my navigation tool. Here I ran
into a number of issues. I was working off of the official documentation, which
I had navigated to by searching for Bootstrap Navbar on google. I setup the
navbar as shown in the documentation, but it didn't appear to be doing anything
at all. My first thought was that I hadn't implemented Bootstrap correctly. I
looked through the documentation, followed their directions for configuring 
Bootstrap, and even reinstalled the node module. 

It was at this point that I discovered the first problem. I had been looking at 
the wrong version of the Bootstrap docs (version 3 instead of version 4). I 
tried to update the module, but it just updated to the latest release of version
3. After spending some time learning about the differences between versions 3 
and 4, trying to figure out how to update back to version 4, I ended up
uninstalling and reinstalling the Bootstrap module.  

That worked, so now armed with the correct version, and the correct docs, I 
updated the navbar, and it still didn't look the way I expected. It turned out
that the Bootstrap navbar didn't work as I expected. In the end I adjusted my
design for how it would look, as once I understood how the navbar worked from a
display standpoint it allowed for a different design that I liked better.  

With the navbar setup, I created the necessary listeners, and handlers to
navigate the page. I was then able to start working on the view for the 
resources. I had initially wanted a home view, a create view, a list view, and a
find view.  

I started by setting up the create view. I created a Handlebars template for the
form, and setup the navigation to display the template when the user selected 
"New Meal Plan" from the Meal Plan dropdown. I then built out the functions to
make a create request to the API when the user submitted the form.

The next step was to create the index view. I first built the functions to send
the index request to the API when the user selected "List Meal Plans" from the
dropdown. I then created a Handlebars template, that would generate the HTML for
each resource it received. Once I had the client displaying the meal plans I 
added buttons to the Handlebars template for edit and delete.  

I then setup listeners to listen for a click on any of the delete buttons within
the view. The buttons had the resource id stored in them so that I could retrieve
it when the button was clicked. I then created an event handler to submit a delete
request for the specific resource when the button was clicked.

At this point I moved on to setting up edit. For the edit function I wanted to
have the form show up in the space previously occupied by the resource, and have
it prefilled with the current information. I started by creating a Handlebars
template with the empty form, and setting up event listeners and handlers to
replace the resource with the form when the edit button was clicked.  

With that done I needed to figure out how I was going to prefill the form. The
first question was how was I going to get the data for the current resource. I
decided to have the index request store the result as an object inside the
JavaScript, and use JavaScript to search for the selected resource. Once that
was setup, I updated the Handlebars template to use that information to prefill
the form.

At this point I moved on to the find resource function. I created a Handlebars
template for the form that would appear, and setup the event listeners and
handlers so that it would be displayed when the user selected "Find Meal Plan"
from the Meal Plan dropdown. I then had to decide how to go about implementing
the search.

My initial thought was that I would create a custom route in the API so that I
could send it a search term, and it could then search for any matching values in
the database. I then realized that I could also send an index request to the API
and then search through the results in JavaScript. While I felt that implementing
the search in the API was the better solution from a technical standpoint, it
was going to take more time, and given the intended scale, and use cases for the
project, it didn't seem worth the extra time to do at this point. 

I ultimately decided to implement the search in the client, and setup the results
to be displayed using the same Handlebars template as the "List Meal Plans". This
meant that users could edit or delete a resource from the "Find Meal Plan" page.

At this point I then moved on to styling the project to give it a more professional
appearance.

## To Do list
-Add meals resource to the client  
-Update meal plan forms to reference meals  
-Add ingredient amounts to the client  
-Update meal forms to reference ingredient amounts  
-Update the search function to perform search on the API side instead of in the
client  
-Add UI to run shopping list API function and display the results

[Deployed API]: https://luckys-meal-planning-api.herokuapp.com
[Deployed Client]: https://luckyswims.github.io/meal-planning-client/
[Wireframe1]: https://github.com/luckyswims/meal-planning-api/blob/master/images/Initial%20Wireframe.jpeg
