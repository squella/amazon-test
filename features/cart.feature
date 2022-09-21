Feature:Gamestry home page
As a user 
I want to make a purchase in Amazon web
So that get the product

Scenario: Validate the cart
  Given a logged user on 'amazon.com'
  When he searchs for the book 'Refactoring' and select the book with the title 'Refactoring: Improving the Design of Existing Code (2nd Edition) (Addison-Wesley Signature Series (Fowler))'
  And add the article to the cart
  Then the user can see the book written 'by Martin Fowler' in his cart
