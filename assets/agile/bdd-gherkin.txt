# Skill Tree feature descriptions
Gherkin language v1.1
http://docs.behat.org/en/v2.5/guides/1.gherkin.html

## Terminology
- Skill: it has an icon, with a picture, and a counter in the right corner, which measure the skill level
- Floating window: a window next to the skill picture, which contains the details about the skill; description, links, trainings, etc.
- Arrow: it shows the connection between skills
- Profile: contains a profile picture, name and statistics

## Example descriptions

  ## Feature: Some terse yet descriptive text of what is desired

    In order to realize a named business value
    As an explicit system actor
    I want to gain some beneficial outcome which furthers the goal

  **Scenario**: Some determinable business situation

    Given some precondition
    And some other precondition
    When some action by the actor
    And some other action
    And yet another action
    Then some testable outcome is achieved
    And something else we can check happens too

## Features

### Feature: information about the skills

### Scenario: the user wants to know more about a skill

Given there are skills and skill descriptions in the database
When the cursor is above the picture
Then the appearing floating window contains a description about the skill, links to trainings and badges to earn

## Feature: tracking skill levels for the user

### Scenario: the skills needs a way to keep track of the skills progress

Given there are skills in the database
When the user looks the bottom right corner of skills
Then the user sees the progress of the skills on a counter

## Feature: Adjust skill levels to show others the level of competence

### Scenario: the user clicks on the skill picture with the left mouse button

Given the user want to add a point to their skills
When the user left click in the picture
Then a point given to their skill

### Scenario: the user clicks on the skill picture with the right mouse button

Given the user want to remove a point from their skills
When the user right clicks in the picture
Then a point decreased from their skill

## Feature: skills picture glowing when they are activated

### Scenario: the active skills should be glowing

Given the user have enough point to activate the next skill
When the new skills requirement was fulfilled
Then the new skills picture frame glows in yellow

## Feature: skills picture is dark when they are non-active

### Scenario: the non-active skills should be dark and cannot be clicked

Given the user don't have enough point to activate the skill
When the new skills requirement wasn't fulfilled
Then the skills picture is dark and cannot be clicked

## Feature: User profile

### Scenario: the users want to know his level and statistics

Given the user want to know his overall statistic (which is calculated from his learned skills)
When the users look at the top/ one side of the screen
Then the users see a list of his statistics (hard skills, soft skills, other org-specific skills), his name and level

## Feature: Custom profile name

### Scenario: every user needs a custom name

Given the user wants to customize his name
When the user clicks in his name
Then the user able to customize the profile name

## Feature: Profile picture

### Scenario: every user needs a profile picture

Given the user wants to customize his picture
When the user clicks the left or right button under his picture
Then the user can choose one picture from the pre-given pictures

## Feature: Search bar

### Scenario: the user curious about the skills of colleagues

Given the user want to know the skills of colleagues
When the user clicks in the search bar and type the colleague name
Then the user can search from the colleagues the one whose skills want to know

## Feature: Explore the skill tree of colleagues

To get inspiration about looking at different learning paths

### Scenario: the user curious about the skills of colleagues

Given that the colleague has uploaded her/his skills to Skill Tree
When the user searched the colleague clicking the name
Then the user can view the colleague skill tree

## Feature: mark skills as training offered

### Scenario: users should mark a skill as training offered

Given the user feel that he/she can help others to improve their skill
When user hover over the skill and click on offer icon on the floating skill description window
Then the user can mark the skill as training offered

## Feature: mark skills as training request

### Scenario: users want to improve the skill

Given the user want to improve one specific skill, and need help to do it
When user hover over the skill and click on request icon on the floating skill description window
Then the user can mark the skill as training request

## Feature: notification about training request

To help Competence Development managers

### Scenario: users should know about who requested a training about the topic, which the user marked as training offered

Given the user mark a skill to training offered, and should know who request training about it
When the user skill level is higher than the user who request the training
Then the user got a notification

## Feature: mark skills as quarterly learning goal

To enhance self-development with goal-setting to an optimal period

### Scenario: users should mark a skill as quarterly learning goal

Given the user want to mark a skill as quarterly learning goal, to stimulate him/herself to achieve the knowledge
When user hover over a skill and click on "Quarterly learning goal" icon on the floating skill description window
Then the user can mark the skill as quarterly learning goal

## Feature: submit a learning source for skills

To help others by raising attention to great training resources

### Scenario: users should submit a learning source for a specific skill

Given the user know an useful source about the specific skill, which is not sorted in the description yet
When user hover over a skill and click on "Submit learning resource" icon on the floating skill description window
Then the user can submit the source in a pop-up window

## Feature: submit a new skill

To make the system flexible and crowdsource filling up missing skills

### Scenario: user wants submit a new skill into the system

Given the user know a useful new skill, which is not in the system yet
When user clicks on "Add new skill" icon at the edge of the skill canvas
Then the user can submit the new skill in a pop-up window

## Feature: email about the quarterly learning goal

to motivate to take small steps periodically to reach the user-specified goal

### Scenario: users should be reminded of the skills, which marked as quarterly learning goal

Given the user marked a specific skill as quarterly learning goal which he/she have not receive
When the user has not done the marked skill after 4 and 8 weeks
Then the user gets an email reminder

## Feature: LDAP authentication

so that users don't need to retype their passwords

### Scenario: users should be able to login without typing the user name and password again every time

Given the users try to login to the skill tree the second time
When after the user already login once with the LDAP
Then the user can login with one clicking

## Feature: Response time must be under 1000 ms

to provide a great user experience

### Scenario: users should not wait for minutes after they clicks something

Given the user do not have to wait a long time to load a window
When the user clicks something
Then the window loaded fast

## Feature: Easy to offer/request trainings

so that peer-to-peer training culture can be strengthened

### Scenario: users should be able to search from offered/requested trainings

Given the user want to find a training to teach/learn
When the user clicks icon in the floating window
Then the user can search from the trainings list

## Feature: Skill profile

  In order to see the most relevant skills and keep the browsing smooth (high FPS)
  Users should be able to define and select a subset of skills for display called 'skill profiles'

Example: MVP defines 200 skills but for practical reasons, a developer wants to see only the e.g. 80-100 relevant skills for him (exclude HR-related, financial skills, etc.).

  ### Scenario: Display 'Web Developer' Skill Profile

Given there is a skill profile (Web Developer) defined with skills (Javascript, GIT, GitLab, etc.) matched to that profile
When I search and click on the profile's name on the left sidebar
Then I should see the subset of skills included in the skill profile
