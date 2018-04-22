#Project

Title of our project, 'Foodphilia', is a combination of 'food' and 'philia', which means crazy fan of food! Under this name, food and restaurant are the core element in our project.

##Problem Statement

We love foods! And we need some web application to address nearby restaurants. Although Yelp did a mostly great job, there are still something to be improved. 

The first thing is there are not professional food bloggers in Yelp while there are many in Instagram and we want to do the both in same web application.

The second is information of restaurants in yelp is not always represented in a very useful way.

The third is that the Google Map API used by Yelp is just a static image! Although it is easy to implement, it would be inconvenient for users to find the location.

##Proposed Solution

For the first problem, we used Yelp API as basic and added professional blog as one of our main features to combine these two into one web service.

For the second, we use our own database, and hence we can make these information more helpful because we can use optimized information set.

For the third, we use Google Maps JS API (not the static one) to enable more operations (zoom in, zoom out and drag, etc.) on the map.

##APIs

1. Yelp Fusion
2. Google Maps
3. Facebook Login

##Domain Objects

1. **Restaurant** can be searched from Yelp API and can be created by 'owner' type of users. It contains restaurant informations like title, location, price, image and rating, etc.
2. **Review** can be added by customers under a restaurant. It contains a rating and a text content.
3. **Blog** can be created by a 'professional' type of user and other users can write text reviews under a blog. Blog contains images, rating and text contents.
4. **FAQ** can be created by all users including 'support' stuffs and except 'anonymous' type of users. A FAQ may have follow-up questions and answers. 

## Users

1. **Admin**: administrator
2. **Owner**: restaurant owner
3. **Customer**: usual customer
4. **Professional**: professional bloggers who can get paid and post some long blogs
5. **Support**: technical support stuffs who can answer technical problems
6. **Anonymous**: users who do not login

##Users' Goals

1. **Admin**: control the website
2. **Owner**: control the restaurants ownered by them
3. **Customer**: seek restaurants and food blogs and then leave reviews
4. **Professional**: create professional food blogs
5. **Support**: answer frequently answered questions
6. **Anonymous**: view restaurants, blogs and faqs

## User Relation with Users

1. **Admin**: control other users
2. **Owner**: own restaurants which can be viewed by other users
3. **Customer**: leave message under restaurants, faqs and blogs which can be viewed by other users
4. **Professional**: own blogs which can be viewed by other users
5. **Support**: manipulate faqs which can be viewed by other users
6. **Anonymous**: can view objects created by other users

##User Relation with Domain Objects

**All users** (including anonymous)

​	1) can search restaurant and view search result

​	2) can view restaurant page

​	3) can view blog page

​	4) can view faqs

1. **Admin** can do most of the CRUD operations.

2. **Owner**

   1) can create restaurant from scratch

   2) can update/delete restaurants created by himself/herself

   3) can create plain reviews under a blog

   4) can create faqs

3. **Customer**

   1) can create reviews object under restaurant

   2) can create plain reviews under a blog

   3) can create faqs

4. **Professional** bloggers

   1) can manipulate professional blog which contains images, rating and text contents

   2) can create plain reviews under a blog

   3) can create faqs

5. **Support** staffs

   1) can manipulate faq

6. **Anonymous** do not have special operations

##Domain Relation with Domains

1. **Restaurant** have multiple reviews.
2. **Review** is created under restaurant.
3. **Blog** content can be related to certain restaurants.
4. **FAQ** content can be related to restaurants, reviews and blogs. 