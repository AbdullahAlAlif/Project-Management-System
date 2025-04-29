const employee  = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          status: {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
          },
          taskTitle: "Update Client Database",
          taskDescription: "Ensure all client contact info is up to date.",
          taskDate: "2025-04-26",
          taskCategory: "Admin"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          taskTitle: "Generate Weekly Report",
          taskDescription: "Compile data for the weekly performance summary.",
          taskDate: "2025-04-20",
          taskCategory: "Reporting"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          },
          taskTitle: "Fix Login Bug",
          taskDescription: "Resolve issue with login validation on mobile.",
          taskDate: "2025-04-22",
          taskCategory: "Development"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          status: {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
          },
          taskTitle: "Design New Landing Page",
          taskDescription: "Create mockups for product launch.",
          taskDate: "2025-04-27",
          taskCategory: "Design"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          taskTitle: "Team Meeting",
          taskDescription: "Discuss project updates and next steps.",
          taskDate: "2025-04-25",
          taskCategory: "Meetings"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          },
          taskTitle: "Deploy Backend Service",
          taskDescription: "Push changes to the production server.",
          taskDate: "2025-04-23",
          taskCategory: "DevOps"
        },
        {
          status: {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
          },
          taskTitle: "Client Onboarding",
          taskDescription: "Guide new clients through the setup process.",
          taskDate: "2025-04-26",
          taskCategory: "Support"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          status: {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          taskTitle: "Security Audit",
          taskDescription: "Review code for potential security flaws.",
          taskDate: "2025-04-21",
          taskCategory: "Security"
        },
        {
          status: {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
          },
          taskTitle: "Write Blog Post",
          taskDescription: "Draft an article for the tech blog.",
          taskDate: "2025-04-26",
          taskCategory: "Content"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          },
          taskTitle: "Data Migration",
          taskDescription: "Transfer data from old system to new database.",
          taskDate: "2025-04-24",
          taskCategory: "IT"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          taskTitle: "Code Review",
          taskDescription: "Review merge requests from junior developers.",
          taskDate: "2025-04-25",
          taskCategory: "Development"
        },
        {
          status: {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
          },
          taskTitle: "Performance Tuning",
          taskDescription: "Optimize slow queries in the reporting tool.",
          taskDate: "2025-04-26",
          taskCategory: "Database"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          status: {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
          },
          taskTitle: "Customer Feedback Analysis",
          taskDescription: "Summarize recent customer reviews.",
          taskDate: "2025-04-26",
          taskCategory: "Research"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          taskTitle: "UX Testing",
          taskDescription: "Conduct usability tests with beta users.",
          taskDate: "2025-04-24",
          taskCategory: "Testing"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          },
          taskTitle: "Marketing Campaign Setup",
          taskDescription: "Configure tracking for new ad campaign.",
          taskDate: "2025-04-23",
          taskCategory: "Marketing"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          status: {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
          },
          taskTitle: "Inventory Check",
          taskDescription: "Audit stock levels in warehouse 3.",
          taskDate: "2025-04-26",
          taskCategory: "Logistics"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          taskTitle: "Staff Scheduling",
          taskDescription: "Prepare schedule for next week's shifts.",
          taskDate: "2025-04-24",
          taskCategory: "HR"
        },
        {
          status: {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          },
          taskTitle: "System Integration Test",
          taskDescription: "Test data sync between platforms.",
          taskDate: "2025-04-23",
          taskCategory: "QA"
        },
        {
          status: {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
          },
          taskTitle: "Vendor Coordination",
          taskDescription: "Confirm shipment schedule with vendors.",
          taskDate: "2025-04-26",
          taskCategory: "Operations"
        }
      ]
    }
  ];
  
const admin=[{
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    },
] 


export const setLocalStorage = () => {
    localStorage.setItem("employee", JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    if (!localStorage.getItem("employee") || !localStorage.getItem("admin")) {
        setLocalStorage(); // Ensure data is set in localStorage
    }
    const employees = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
}