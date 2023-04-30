# Bitplexo Project

Bitplexo is a prototype financial web app designed to showcase the capabilities of swapping fiat and crypto currencies, laying the foundations for a real implementation.

What sets this project apart from others in the same domain is the agnostic financial integrations approach it takes, allowing for both fiat swaps (banking connections) and crypto swaps (blockchain connections), as well as the ability to buy/sell crypto for fiat and viceversa.

The agnostic financial integrations approach is about creating a platform that is flexible and inclusive, allowing users to choose the financial systems that work best for them without imposing any biases or restrictions.

For the "fiat swap" capability, users can simply connect to their bank using a private key and public key infrastructure, with identifying information such as their name and email address included in a certificate file that needs to be uploaded for each login, followed by a password. There is no need for complicated authentication to a centralized system.

For the "crypto swap" capability, a Metamask login will be required to connect to the site's smart contract(s) and start swapping.

Initial setting for a "Buy/sell" capability has been also integrated.

By mixing up different technologies and interfaces, a neat web3 application can be brought to life without leaving behind the actual traditional system. In this scenario, we believe that a financial platform or bank could implement Bitplexo's idea in their daily forex and defi operations.

The semi-dynamic website is built on HTML, CSS, and JavaScript. It is fully responsive, well-structured, and organized.

The state of this current iteration should be considered an MVP for the main features.

Ultimately, we suggest the cohabitation of traditional banking systems and decentralized systems through a functional website, making the technology invisible to users while keeping it simple and applying user-centric design at all times.

Please note that this project is not available for public deployment; it is intended solely for learning and demonstration purposes, although it is ready for use.


![Responsive Mockup image](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/responsive-mockup.webp)

**Preview Link:** [Bitplexo](#)


## Index <a name="index"></a>

- [Bitplexo Project](#bitplexo-project)
  - [Index <a name="index"></a>](#index-)
  - [Badges](#badges)
  - [Strategy Plane <a name="strategy-plane"></a> | #](#strategy-plane---)
    - [Research](#research)
    - [Research Graphic](#research-graphic)
  - [Scope Plane <a name="scope-plane"></a> | #](#scope-plane---)
    - [User Story](#user-story)
  - [Structure Plane <a name="structure-plane"></a> | #](#structure-plane---)
  - [Skeleton Plane <a name="skeleton-plane"></a> | #](#skeleton-plane---)
  - [Surface Plane <a name="surface-plane"></a> | #](#surface-plane---)
    - [Color](#color)
      - [Pallet](#pallet)
    - [Layout](#layout)
    - [Fonts](#fonts)
    - [Images](#images)
    - [Order](#order)
    - [Sequences](#sequences)
  - [Technologies Used <a name="technologies"></a> | #](#technologies-used---)


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Strategy Plane <a name="strategy-plane"></a> | [#](#index)

A bank or financial platform has discovered the potential of decentralized technologies, including their impact on UX design. For their first iteration, they decided to showcase a real functional website to their users, demonstrating that traditional and revolutionary systems, such as blockchain, can truly coexist because it is necessary. The project took into account the legal, commercial, technological, and social challenges, especially those related to the latter.

Following the philosophy of making technology invisible to users, the project was designed to satisfy a financial platform's desires.

Currently, users are able to swap between fiat and crypto currencies through the platform. The bank can also allow buy & sell functionality, which will then appear in the crypto section for swapping to other coins, or vice versa for fiat currencies (not limited to just swapping coins).

Although this iteration is only meant to showcase the future financial capabilities of the project, it remains useful and interactive through Javascript, CSS, and HTML.

Investors, stakeholders, and clients are fully satisfied with the Bitplexo project since they are interested in forex and defi. The project's ability to seamlessly integrate traditional and decentralized financial systems appeals to a diverse range of users and offers a more comprehensive and holistic financial experience.

These insights stem from comprehensive research, as evidenced by the accompanying table and graphic.

### Research

| Goals                                             | Relevancy (0-5)      | Viability (0-5)   | N. Items (0-~) |
| ------------------------------------------------- | -------------------- | ----------------- | -------------- |
| Welcome Alert                                     | 3                    | 5                 |                |
| Fiat Swap <br>- Secure Login <br>- FAQ button     | 5                    | 2                 |                |
| Crypto Swap <br>- Metamask Login <br>- FAQ button | 5                    | 2                 |                |
| Contact page                                      | 5                    | 5                 |                |
| Buy/sell option <br>- Fiat & Crypto section       | 3                    | 2                 |                |
| SSL Badge                                         | 5                    | 5                 |                |
| CAPTCHA Verification                              | 3                    | 2                 |                |
| N. Items                                          |                      |                   | 7              |
| Max. Points                                       |                      |                   | 35             |
| Results                                           | 29                   | 24                |                |
| Percentage                                        | 82.85%<br>(Strategy) | 65.71%<br>(Scope) |                |

We created a list of items, elements, or features that should be included in this iteration. After conducting research, we have compiled the following results, which will assist us in developing the next point for further understading and development:

### Research Graphic

![Table Graphic](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/strategy.png)

We understand that a hard work on this plane will contribute to the success of the next one, as all planes are interconnected.

Analyzing these results, only two points (features) scored 5 out of 5 in both `importance and viability`. This is expected due to the simplicity of the features and their significance in security, as in the case of the `SSL badge`.

Another point that `scored 5` is the one in `blue color`, which has a viability of 5 because it can be achieved using CSS and JavaScript. Although its importance could be considered optional, I recommend using it to inform users of their location and the content they are about to view.

Examining the other elements at the bottom of the graphic, we see two elements that scored `5 and 2`, respectively. These scores are for the most critical parts of our project: the `crypto and fiat swapping` features. Although they are highly important, we cannot create a fully functional swapping environment for the public yet, as it is only meant to showcase our future financial application.

On the other hand, two points scored `3 and 2`, respectively: the `Buy & Sell button` and `CAPTCHA verification`. At this stage, we believe that we can include `only one` of these features in this iteration, depending on our resources and time.

- Timeframe: 3 weeks.

Regarding the percentages in the table, we have an idea of the overall importance of the general features for this iteration. A score of `82.85% is good`, even if some features are `quite simple`.

As for viability, achieving a `65.71%` score is `reasonable`, given that the first iteration is not yet open to the public, and various factors need to be considered before that happens. Therefore, it is still a satisfactory score.

With this information, we can now move on to the next stage, which is Scope.

## Scope Plane <a name="scope-plane"></a> | [#](#index)

As the strategy plane has introduced, our iteration is designed to meet the future development needs of a `financial platform or bank`. We are focused on ensuring a positive `user experience` and `user interface` for this project. This will showcase how users perceive the web3 application and how it can benefit both stakeholders and the company.

`Imporant:` All of the functionalities are located on a `single page`, so we have two pages in total, with the index.html containing the majority of the features and functionalities.

Our purpose is to use the data obtained from our research on the `strategy plane` to build the foundation for a successful `web3 financial application`.

For this MVP iteration, we have decided to include features and functionalities based on the following conditions and goals:



|               Condition               |                              Iteration                              |                      Goals                      |
| :-----------------------------------: | :-----------------------------------------------------------------: | :---------------------------------------------: |
|              Limited use              |           - Fiat Swap<br>- Crypto Swap<br>- contact.html            |               Culture acquisition               |
|             Simple design             | - Buy & Sell buttons<br>- CAPTCHA or SSL Badge <br> - Login methods |                  Tech Showcase                  |
| Low leading rates<br>& Non-functional |          - Buy & Sell buttons<br>- Fiat & Crypto Swap<br>           | Long-term Investment<br>& Future Implementation |

The table displays what we can achieve in this iteration, with our main goal being to showcase the most important features and technologies, such as `Fiat Swap and Crypto Swap` (with limited use) in a safe environment before the actual site is launched. This is why it has been tagged as `Culture Acquisition`.

There are other features and functionalities to be included, such as the `Buy & Sell button`, `CAPTCHA verification`, `SSL Badge notice`, and important `login methods`. They are all part of the great technologies we need to use to achieve our goals, and therefore, they must be simple this time.

Our aim is to benefit all stakeholders, including users, and create a powerful financial platform. In these terms, `Buy & Sell` functionalities and `Fiat & Crypto Swap` can wait for future implementation as part of our long-term investment.

This is our scope for the `MVP` - simple, straightforward, and limited due to `timeframes`, `available technologies`, and other general resources such as `legal conditions` and `human resources`.

After analyzing the important factors at each step of our research to make it useful, sellable, and buildable, taking into consideration the objective, functional, non-functional, and business rule elements, we were able to define the `lifecycle of the application` and how a subject can interact with it from beginning to end. This is evident from our User Story table:

Note: In this context, "subject" refers to a user, prospect, or stakeholder.

### User Story

| Scenario                                                          | Solution                                                                                                                                      |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Subject gets interested in the Bitplexo web3 app                  | Subject discovers the Bitplexo `MVP` release                                                                                                  |
| Subject wants to learn `how` and `where` to swap `Fiat & Crypto`  | Subject can see a clear description of the available functionalities, including the Fiat and Crypto swapping feature, upon accessing the site |
| Subject wants to know how to `identify` themselves on the site    | Subject learns that there are two ways to log in, one for `Fiat` (traditional) and another for `Crypto` (decentralized)                       |
| Subject wants to interact more with the app                       | Subject discovers the various types of `data` available once logged in, as well as the `Buy & Sell` capabilities                              |
| Subject has `questions` and wants to speak directly with an agent | Subject finds a question mark `button` on the Fiat and Crypto swapping section, as well as a `contact` page for support and assistance        |

By aligning our `scope` with the results of our research on the Strategy plane, we have established a clear intention for our MVP iteration. This will enable us to build a solid foundation for our next phase, `Structure`.

## Structure Plane <a name="structure-plane"></a> | [#](#index)

Regarding user difficulty, we believe that our project will be of `medium difficulty` in general. We have a firm mindset of keeping things simple and user-friendly for all users, regardless of their age.

To make navigation easier for users, we have integrated all essential features and functionalities into a `single page`. This means that users can easily navigate and identify where they are, what they can do, and where they can go.

Our `Gitmind` mind maps clearly show the different state changes, from the welcome page to switching from fiat to crypto swap.

As always, we have prioritized consistency, predictability, learnability, visibility, and feedback to ensure a positive user experience.

For more details on our `Interactive Experience Design IXD` for the Bitplexo Prototype/Demo Project, please refer to the attached mind map.

![IXD Mindmap Initial](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/IXDini.png)

- [IXD Live Mindmap](https://gitmind.com/app/docs/mxw5lnlr)

- [IXD Live Outline](https://gitmind.com/app/docs/mxw5lnlr?view=outline)

![IXD Mindmap](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/IXD.png)

We made sure to use the right `keywords` when navigating the site promoting assertiveness in users' decisions. We guarantee that users will get the best out of our site.

We understand that sites like ours can often have an overload of information. However, in our case, everything is `easy` to understand and `straightforward`.

It's important to consider both `IXD` (Interaction Experience Design) and `IAD` (Information Architecture Design) to have a clear mental view of the product.

For more details on our `Information Architecture Design IAD` for the Bitplexo Prototype/Demo Project, please refer to the attached mind map.

![IAD Mindmap Initial](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/IADInitial.png)

- [IAD Live Mindmap](https://gitmind.com/app/docs/m52e8l4u)

- [IAD Live Outline](https://gitmind.com/app/docs/m52e8l4u?view=outline)
  
![IAD Mindmap](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/IAD.png)

In this first iteration, we know exactly what we want, what we need, and what's good for us: The `IXD` and `IAD` provided us with the necessary pieces to work with, enabling us to achieve our goals with this incredible project. Now we can move forward to the `Skeleton plane`.

## Skeleton Plane <a name="skeleton-plane"></a> | [#](#index)

We have come a long way to reach this plane. Throughout our journey, we have collected fragments from various sources, much like ascending a mountain. We have carefully selected and refined these pieces, analyzing and `extrapolating` essential data, steps, features, and functionalities.

Our progression has followed a logical sequence: Strategy, Scope, Structure, and now we find ourselves at the `Skeleton plane`.

Until now, our ideas may have existed in abstract forms, perhaps as scattered drawings on paper without clear cohesion. However, in the Skeleton plane, we can finally grasp the `essence` of our projects. We can visualize the `instances` and achieve a higher level of abstraction that allows us to perceive the project as a cohesive whole, super useful for the `programming part` as well.

At this plane, all the features, functionalities, elements' interactions, and content layouts are `visible` and `comprehensible`. We can understand the `interconnectedness` of each component we have been diligently working on.

For this phase, we have opted to utilize `Adobe XD`, a software the author is experienced with. This tool provides a comprehensive `wireframe` that enhances our workflow and enables us to collaborate effectively.

![Skeleton Gif image](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/skeleton.gif)

The simple and straightforward navigation is visible, and everything is just a few clicks away from the user's goal. The priorities are also clear: first, the `welcome page`; second, the `login page`; and after that, users are free to `swap` immediately, or go to the `contact` page.

Notice the progression from simple to more complex functionalities and layouts. Users are able to learn as they walk through the website. We don't want to overwhelm them, so we take the `progressive disclosure` part seriously.

We invested time and resources into this process before `coding` the actual product to bring it to life.

Nothing is new or surprising; everything is done intuitively by the users following their own habits, standards, and conventions.

We paid attention to keywords, invisible information, hierarchies, and content in lists and forms. All can be seen in our desktop-based `prototype/demo`.

We strived to keep everything simple, intuitive, and repetitive. At the same time, we set the foundation for our last plane by defining `colors`, `shapes`, and certain special final data.

Our next stop is the `Surface plane`.

## Surface Plane <a name="surface-plane"></a> | [#](#index)

After conducting research (strategy), considering the project scope, brainstorming ideas for the structure, and engaging in discussions to create a project skeleton, we were ready to move forward with creating a prototype/demo using wireframes. 

All of these planning stages were essential to reach this point (Surface), and we understand that it's only when we start building or coding that we may discover any gaps or oversights. Therefore, it makes more sense to start finally bringing our ideas to life now. 

We're excited to see how our project takes shape and how we continue to refine it along the way.

**Approach:**

Our approach to the project is similar to the mindset of Isaac Newton, who said, `"My method is different. I do not rush into actual work. When I get a new idea, I start at once building it up in my imagination, and make improvements and operate the device in my mind. When I have gone so far as to embody everything in my invention, every possible improvement I can think of, and when I see no fault anywhere, I put into concrete form the final product of my brain."` Similarly, we have taken the necessary steps to plan and refine our project before moving on to the programming stage.

As part of this process, we are currently focusing on the surface plane, which involves designing the interface and considering how users will interact with and perceive the product as well. This includes creating a positive visual language and context for each step and interaction to ensure efficiency and a seamless user experience. 

These details are crucial for the success of the project, and we are dedicated to getting them right:

### Color

|                                                                  | Color Type      | Color Name      | Hex Code  |
| ---------------------------------------------------------------- | --------------- | --------------- | --------- |
| ![Color](https://via.placeholder.com/50x50/3498db/3498db?text=+) | Primary Color   | Shade of Blue   | `#3498db` |
| ![Color](https://via.placeholder.com/50x50/f5f5f5/f5f5f5?text=+) | Secondary Color | Whitesmoke      | `#f5f5f5` |
| ![Color](https://via.placeholder.com/50x50/808080/808080?text=+) | Secondary Color | Shade of gray   | `#808080` |
| ![Color](https://via.placeholder.com/50x50/3a3a3a/3a3a3a?text=+) | Secondary Color | Shade of Black  | `#3a3a3a` |
| ![Color](https://via.placeholder.com/50x50/f2f2f2/f2f2f2?text=+) | Secondary Color | Shade of White  | `#f2f2f2` |
| ![Color](https://via.placeholder.com/50x50/e46e54/e46e54?text=+) | Secondary Color | Shade of red    | `#E46E54` |
| ![Color](https://via.placeholder.com/50x50/ff6600/ff6600?text=+) | Secondary Color | Shade of orange | `#ff6600` |


#### Pallet

The following color palette was used as a reference throughout the project:

- [My Color Space](https://mycolor.space/?hex=%233498DB&sub=1)


### Layout

- The welcoming page features is a full-page banner with a `h2-sized` title and a `Swap` button to enter the system.

- For the login section, `containers` and a `form` are used to manage it. All elements are well-connected and interactive, thanks to `JavaScript`.

- The swapping sections for `Fiat & Crypto` are `containers` holding `forms` for the swapping functionality. In every section where a `submit or call-to-action` is present, the same style is used to maintain consistency.

- The `contact form` also follows the consistency of the containers and features a powerful form and a related `submit button`, as mentioned before.

- Finally, the layouts will naturally adjust to different `sizes` when media queries are set for `responsive design`.

### Fonts

- We used `Roboto` for all fonts until specified otherwise. 

- We used `Poppins` for some titles and subtitles.

### Images

- No additional images were needed, except for the `interactive logo` of a third-party service about `Metamask` on the login page.

### Order

- We prioritized the elements as already described throughout the different planes: Welcome page > Login Page > Fiat or Crypto Swap > Contact page.

- The navbar and footer are always present (sticky) after the welcome page.

- For the Contact page, a container similar to the others was applied to maintain consistency.

### Sequences

- Attention to the `progressive disclosure` allowed us to build a smooth application flow. Users see the `welcome page` first, then they can `log in` using either Fiat or Crypto methods. Once logged in, they can start `swapping` in a straightforward manner. If they have any inquiries, they can visit the `contact page` as well.

- The `swapping pages` are the core of the project and what users are looking for in most cases. They are consistent and allow users to swap from one coin to another and `confirm` the swap with a submit `button`.

For each section and interaction, economy had to be taken into account, with the most important elements easily recognized. We had already noticed many patterns throughout the product layouts and interactions. It was readable, with colors creating good contrasts, and different fonts were added when necessary.

Users cannot get lost on the site as we have ensured that value is evident everywhere.

**We had to be careful of the following concerns:**

- Repetition
- Contrast
- Proximity
- Alignment
- Accessibility
- Interaction
- Visual engagement
- Easy learning experience

We focused on keeping things as simple as possible, presenting fewer choices to the users while highlighting concrete features and content.

After considering these factors, we were able to turn our ideas from the skeleton and surface into code with ease. The coding process was less complicated and more enjoyable. This approach required less time, energy, and other resources, resulting in less human work and fewer errors, and ultimately, a nobler product.

## Technologies Used <a name="technologies"></a> | [#](#index)