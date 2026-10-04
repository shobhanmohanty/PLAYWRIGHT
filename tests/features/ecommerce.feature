Feature:Ecommerce validation
Scenario:Cart page validation
Given a login to ecommerce application with "shobhan" and "shobhan"
When Start to type your When step here wait till the "logout" button appeares
Then add "Nexus 6" to the cart
When navigate to the cart page
Then verify the product "Nexus 6" is added to the cart
