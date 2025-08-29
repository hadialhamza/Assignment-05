# 📘 Assignment 5 – Questions & Answers

---

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

- **getElementById("id")**

  - We use getElementById() when we need to find a single element by its 'Id'.
  - It returns only one element.
  - Example:
    document.getElementById("clear-history-btn");

- **getElementsByClassName("class")**

  - We use getElementsByClassName() when we need to find all element with same 'class'.
  - It returns HTMLCollections and can be updates automatically when DOM changes.
  - Example:
    document.getElementsByClassName("card-btn");

- **querySelector("selector")**

  - querySelector() finds the first element with the match selector like id, class, tag, attribute etc.
  - Example:
    document.querySelector(".btn");

- **querySelectorAll("selector")**

  - querySelectorAll() finds all the element with the match selector like id, class, tag, attribute etc and can return a NodeList.
  - Example:
    document.querySelectorAll(".copy-btn");

---

## 2. How do you create and insert a new element into the DOM?

- Steps:
  - 1st step: Create a new element with `document.createElement("tag")`
  - 2nd step: Add new content with `innerText` or `innerHTML`
  - 3rd step: Insert into DOM with `appendChild`

---

## 3. What is Event Bubbling and how does it work?

- Event Bubbling means when an event happens on an element, it first runs on that element, then bubbles up through its parent elements, until it reaches the root (document).
- Most events bubble by default.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is attaching a single event listener on a parent element to handle events of its child elements, using event bubbling.

- It is useful because of:
  Reduces number of event listeners.
  Works even if child elements are added dynamically.

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault()
  This method prevents the browser’s default action for an event.
  Example: Prevent a form from submitting or a link from navigating.

- stopPropagation()
  this method stops the event from bubbling up the DOM tree.
  Example: Prevent parent’s event handler when child is clicked.
