### **README for Event Management System**

#### **Project Title**: Event Management System

---

### **Overview**

The **Event Management System** is a web-based application designed to automate and streamline the management of university events. The system facilitates event creation, registration, venue booking, expense tracking, and real-time updates, offering a centralized platform for **Admins**, **Organizers**, and **Students** to efficiently manage campus events.

 **Note**  :  we have taken Mahindra University into consideration for building this website.

 **links for the videos containing demo,presentation and setup** :
 [click here]( https://youtube.com/playlist?list=PLOWb0SB7frTZzj2oNy3MZeZN6lcWv2VRS&si=v-BoHpJUhfRID3sp)


 **link for the presentation** :
[click here](https://www.canva.com/design/DAGmx_2-IfY/lbbXpK6sPJvRBggiljhmBg/edit?utm_content=DAGmx_2-IfY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
 
---
## 📚 Table of Contents

1. [Backend](./Backend)  
2. [Frontend](./frontend)  
3. [Project Documentation](#project-documentation)
   - [SDD.docx](./SDD.docx) - Software Design Document  
   - [SRS.docx](./SRS%20.docx) - Software Requirements Specification  
   - [Statement of Work.pdf](./Statement%20of%20Work.pdf)  
   - [User Persona_SE.docx](./User%20Persona_SE.docx)  
   - [setup_doc.pdf](./setup_doc.pdf) - Setup Instructions  
4. [Database Schema](./Database%20Schema)  
5. [README](./README.md)
6. Test plan


---
### **Features**:

1. **Admin Features**:

   * Approve or reject events.
   * Manage users (Admins, Organizers, Students).
   * View event reports.
     

2. **Organizer Features**:

   * Create new events and manage existing events.
   * Track event registrations and manage student participation.
   * View event reports and track expenses.

3. **Student Features**:

   * Register for events and view event details.
   * Cancel event registrations.
   * Can view registered events and all the ongoing event details.

---

### **Technologies Used**

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Node.js with Express.js
* **Database**: MySQL
* **Version Control**: Git & GitHub

---


* The **User Roles** in this system are:

  * **Admin**: Manages event approvals, user management, and reporting.
  * **Organizer**: Creates events, manages registrations, and tracks expenses.
  * **Student**: Registers for events and tracks their participation.

* **Security Considerations**:

  * Passwords are stored securely in the database using **bcrypt** encryption.
  * Only authorized users can access sensitive features like event approval and financial tracking.

---

