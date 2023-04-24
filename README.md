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

1. [Strategy Plane - Reason, Solution and Value](#strategy-plane)
2. [Scope Plane - Feature and Capability](#scope-plane)
3. [Structure Plane - Content, Priority and Organization](#structure-plane)
4. [Skeleton Plane - Layout, Interaction and Relationship](#skeleton-plane)
5. [Surface Plane - Color, Typography, Effect and Images](#surface-plane)
6. [Technologies Used](#technologies)
7. [Actual Features Explained](#features)
8. [Future Features Explained](#f-features)
9. [Bugs & Testing Results](#bugs-testing)
10. [Development Process](#development)
11. [Deployment Process](#deployment)
12. [Credits](#credits)

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

| Goals                  | Relevancy (0-5) | Viability (0-5) | N. Items (0-~) |
| ---------------------- | --------------- | --------------- | ------------- |
| Welcome Alert          | 3               | 5               |               |
| Fiat Swap <br>- Secure Login <br>- FAQ button | 5           | 2               |               |
| Crypto Swap <br>- Metamask Login <br>- FAQ button | 5         | 2               |               |
| Contact page           | 5               | 5               |               |
| Buy/sell option <br>- Fiat Page <br>- Crypto Page | 3         | 2               |               |
| SSL Badge              | 5               | 5               |               |
| CAPTCHA Verification   | 3               | 2               |               |
| N. Items               |                 |                 | 7             |
| Max. Points            |                 |                 | 35            |
| Results                | 29              | 24              |               |
| Percentage             | 82.85%<br>(Strategy)| 65.71%<br>(Scope)   |               |

We created a list of items, elements, or features that should be included in this iteration. After conducting research, we have compiled the following results, which will assist us in developing the next point for further understading and development:

### Research Graphic

![Table Graphic](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/strategy.png)

We understand that a hard work on this plane will contribute to the success of the next one, as all planes are interconnected.

Analyzing these results, only two points (features) scored 5 out of 5 in both `importance and viability`. This is expected due to the simplicity of the features and their significance in security, as in the case of the `SSL badge`.

Another point that `scored 5` is the one in `blue color`, which has a viability of 5 because it can be achieved using CSS and JavaScript. Although its importance could be considered optional, I recommend using it to inform users of their location and the content they are about to view.

Examining the other elements at the bottom of the graphic, we see two elements that scored `5 and 2`, respectively. These scores are for the most critical parts of our project: the `crypto and fiat swapping` features. Although they are highly important, we cannot create a fully functional swapping environment for the public yet, as it is only meant to showcase our future financial application.

On the other hand, two points scored `3 and 2`, respectively: the `Buy & Sell button` and `CAPTCHA verification`. At this stage, we believe that we can include `only one` of these features in this iteration, depending on our resources and time.

Regarding the percentages in the table, we have an idea of the overall importance of the general features for this iteration. A score of `82.85% is good`, even if some features are `quite simple`.

As for viability, achieving a `65.71%` score is `reasonable`, given that the first iteration is not yet open to the public, and various factors need to be considered before that happens. Therefore, it is still a satisfactory score.

With this information, we can now move on to the next stage, which is Scope.

## Scope Plane <a name="scope-plane"></a> | [#](#index)

As the strategy plane has introduced, our iteration is designed to meet the future development needs of a `financial platform or bank`. We are focused on ensuring a positive `user experience` and `user interface` for this project. This will showcase how users perceive the web3 application and how it can benefit both stakeholders and the company.

Our purpose is to use the data obtained from our research on the `strategy plane` to build the foundation for a successful `web3 financial application`.

For this MVP iteration, we have decided to include features and functionalities based on the following conditions and goals:



|               Condition               |                             Iteration                              |                      Goals                      |
| :-----------------------------------: | :----------------------------------------------------------------: | :---------------------------------------------: |
|              Limited use              |           - Fiat Swap<br>- Crypto Swap<br>- contact.html            |               Culture acquisition               |
|             Simple design             |                 - Buy & Sell buttons<br>- CAPTCHA or SSL Badge <br> - Login methods                |                  Tech Showcase                  |
| Low leading rates<br>& Non-functional | - Buy & Sell buttons<br>- Fiat & Crypto Swap<br>| Long-term Investment<br>& Future Implementation |

The table displays what we can achieve in this iteration, with our main goal being to showcase the most important features and technologies, such as `Fiat Swap and Crypto Swap` (with limited use) in a safe environment before the actual site is launched. This is why it has been tagged as `Culture Acquisition`.

There are other features and functionalities to be included, such as the `Buy & Sell button`, `CAPTCHA verification`, `SSL Badge notice`, and important `login methods`. They are all part of the great technologies we need to use to achieve our goals, and therefore, they must be simple this time.

Our aim is to benefit all stakeholders, including users, and create a powerful financial platform. In these terms, `Buy & Sell` functionalities and `Fiat & Crypto Swap` can wait for future implementation as part of our long-term investment.

This is our scope for the `MVP` - simple, straightforward, and limited due to `timeframes`, `available technologies`, and other general resources such as `legal conditions` and `human resources`.

After analyzing the important factors at each step of our research to make it useful, sellable, and buildable, taking into consideration the objective, functional, non-functional, and business rule elements, we were able to define the `lifecycle of the application` and how a subject can interact with it from beginning to end. This is evident from our User Story table:

Note: In this context, "subject" refers to a user, prospect, or stakeholder.

### User Story

| Scenario                                                             | Solution                                                                                                                                |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Subject gets interested in the Bitplexo web3 app                      | Subject discovers the Bitplexo `MVP` release                                                                                             |
| Subject wants to learn `how` and `where` to swap `Fiat & Crypto`           | Subject can see a clear description of the available functionalities, including the Fiat and Crypto swapping feature, upon accessing the site          |
| Subject wants to know how to `identify` themselves on the site         | Subject learns that there are two ways to log in, one for `Fiat` (traditional) and another for `Crypto` (decentralized)            |
| Subject wants to interact more with the app                          | Subject discovers the various types of `data` available once logged in, as well as the `Buy & Sell` capabilities                            |
| Subject has `questions` and wants to speak directly with an agent      | Subject finds a question mark `button` on the Fiat and Crypto swapping page, as well as a `contact` page for support and assistance        |

By aligning our `scope` with the results of our research on the Strategy plane, we have established a clear intention for our MVP iteration. This will enable us to build a solid foundation for our next phase, `Structure`.

## Structure Plane <a name="structure-plane"></a> | [#](#index)

![IXD Mindmap](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/IXDInitial.png)

![IXD Mindmap](https://github.com/plexoio/bitplexo/blob/main/documentation/assets/img/IXDLong.png)