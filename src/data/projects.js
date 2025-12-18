import homecareHero from "../assets/home-care-hub-home2.jpeg";
import homecareadmin from "../assets/home-care-hub-admin-dashboard.jpeg";
import homecareaservice from "../assets/home-care-hub-service.jpeg";
import eventmanagmenthero from "../assets/event-management-home2.jpeg";
import eventmanagmentadmin from "../assets/event-management-admin.jpeg";
import eventmanagmentuser from "../assets/event-management-user.jpeg";

export const projects = [
  {
    slug: "homecare-hub",
    badge: "Full Stack",
    dateRange: "2024",
    title: "HomeCare Hub",
    subtitle: "Services Platform",
    summary:
      "A full-stack React + Django REST project where users can browse home-care services/products, add them to a cart, place orders, and pay online. It includes JWT auth, admin dashboards for managing users/services/bookings, product images + reviews, and API docs via Swagger.",
    liveUrl: "https://home-care-hub-frontend.vercel.app/",
    repoUrl: "https://github.com/arifulislam514/HomeCareHubFrontend",

    heroImage: homecareHero,
    gallery: [
      homecareaservice,
      homecareadmin,
    ],

    overview: [
      "Frontend (React/Vite): Public pages (Home/About/Services/Contact), auth screens, service details, booking flow, checkout, and separate User/Admin dashboards.",
      "Backend (Django/DRF): REST API under /api/v1 with endpoints for users, products/services, carts, orders, nested routes for reviews/images, plus payment initiation + callbacks.",
    ],

    challenge:
      "People need a clean way to discover home-care services, book/purchase them, and manage orders—without manual phone calls, spreadsheets, or messy tracking.",

    solution:
      "A centralized web app + REST API with role-based admin tools, cart/order automation, and integrated payment flow (SSLCommerz), so booking and management stay consistent end-to-end.",

    features: [
      { icon: "ShoppingCart", title: "Cart & Checkout", desc: "Add/remove services, adjust quantities, and place orders with a smooth checkout flow." },
      { icon: "CreditCard", title: "Online Payments", desc: "SSLCommerz payment integration with success/fail/cancel callbacks updating order status." },
      { icon: "LockKey", title: "Secure Auth", desc: "JWT-based login/signup with protected user and admin routes." },
      { icon: "LayoutDashboard", title: "Admin Dashboard", desc: "Manage users, services/products, and monitor orders/bookings from one place." },
      { icon: "Star", title: "Reviews & Ratings", desc: "Users can review services/products; includes media/image support for listings." },
      { icon: "DeviceMobile", title: "Responsive UI", desc: "Tailwind-based frontend built to work well on mobile and desktop." },
    ],

    technologies: {
      frontend: ["React", "Tailwind CSS", "Vite", "Axios"],
      backend: ["Django REST", "Djoser + SimpleJWT", "Cloudinary storage"],
      database: ["PostgreSQL"],
      infra: ["Vercel", "SSLCommerz"],
    },

    info: {
      role: "Full-Stack Developer",
      duration: "—",
      teamSize: "Solo Project",
    },
  },

  {
    slug: "event-management-system",
    badge: "Backend + UI",
    dateRange: "2024",
    title: "Event Management System",
    subtitle: "Role Based",
    summary:
      "A full-stack web app built with Django that lets an organization create and manage events (with categories and locations), while allowing end users (“Participants”) to browse events, search by location/name, and RSVP/book events. It includes role-based access control (Admin/Manager/Participant), dashboards, user profiles, and password reset via email",
    liveUrl: "https://event-management-system-tau-cyan.vercel.app/",
    repoUrl: "https://github.com/arifulislam514/Event-Management-System",

    heroImage: eventmanagmenthero,
    gallery: [
      eventmanagmentuser,
      eventmanagmentadmin,
    ],

    overview: [
      "Admins manage users, roles (via Groups), and view an admin dashboard with event analytics.",
      "Managers create/update/delete Events and Categories, and monitor events through a manager dashboard (past/upcoming/today/all).",
      "Participants can browse/search events, view details, and RSVP to join an event.",
    ],

    challenge:
      "Managing events, attendees, and updates across teams without messy spreadsheets, duplicate RSVPs, or unclear ownership.",

    solution:
      "Centralized event platform with RBAC (Admin/Manager/Participant), event/category CRUD, and one-click RSVP with dashboards for visibility.",

    features: [
      { icon: "CalendarDays", title: "Event Management", desc: "Create, update, and delete events with category, location, and media support." },
      { icon: "Users", title: "RSVP & Participants", desc: "Participants can RSVP to events; attendance is tracked per event and duplicates are prevented." },
      { icon: "LockKey", title: "Role Based Access", desc: "Admin/Manager/Participant roles enforced via Django Groups and permissions." },
      { icon: "LayoutDashboard", title: "Dashboards & Insights", desc: "Admin/Manager dashboards show total events plus today/upcoming/past breakdowns." },
      { icon: "Search", title: "Search & Discovery", desc: "Find events quickly by event name and by location (city/country)." },
      { icon: "UserCircle", title: "User Accounts & Profiles", desc: "Custom user profiles with editable details, plus login/logout and password reset." }
    ],

    technologies: {
      frontend: ["Django Templates", "Tailwind CSS"],
      backend: ["Django", "Django Auth", "Django ORM"],
      database: ["PostgreSQL"],
      infra: ["Render"],
    },

    info: {
      role: "Backend Developer",
      duration: "—",
      teamSize: "Solo Project",
    },
  },
];
