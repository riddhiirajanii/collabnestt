const express = require("express");
const session = require("express-session");
const passport = require("passport");
const MicrosoftStrategy = require("passport-microsoft").Strategy;
const prisma = require("./prisma/prismaClient"); // Prisma ORM Client
require("dotenv").config(); // Load .env variables

const app = express();

// Middleware for JSON and Sessions
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Microsoft OAuth Strategy
passport.use(
  new MicrosoftStrategy(
    {
      clientID: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/microsoft/callback",
      scope: ["openid", "profile", "email", "User.Read"],
      tenant: "common",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("Microsoft Profile:", profile);
        const { id, displayName, emails, photos } = profile;
        const email = emails?.[0]?.value;

        if (!email) return done(new Error("Email not provided by Microsoft"), null);

        // Use upsert() for better efficiency
        const user = await prisma.user.upsert({
          where: { email: email },
          update: {
            username: "riddhiumeshrajani",
            name: "Riddhi Umesh Rajani",
            email: "riddhi_2401me75@iitp.ac.in",
            password: "",
            role: "USER",
            department: "Unknown",
            picture: null,
            roll: "123456"
          },
          create: {
            username: "riddhiumeshrajani",
            name: "Riddhi Umesh Rajani",
            email: "riddhi_2401me75@iitp.ac.in",
            password: "",
            role: "USER",
            department: "Unknown",
            picture: null,
            roll: "123456"
          },
        });

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serialize user (store user ID in session)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user (retrieve user from session)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Logging middleware for debug
app.get("/auth/microsoft", (req, res, next) => {
  console.log("🔵 Microsoft Auth Requested");
  next();
}, passport.authenticate("microsoft"));

app.get("/auth/microsoft/callback", (req, res, next) => {
  console.log("🟢 Callback Received:", req.query);
  next();
}, passport.authenticate("microsoft", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard"); // Redirect to frontend after login
  }
);

// Logout Route
app.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.redirect("/");
  });
});

// Protected Route (Get Logged-in User Data)
app.get("/api/user", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.json(req.user);
});

// Start Server - Use only ONE port consistently
const PORT = process.env.PORT || 5000; // Using 5000 as default to match frontend expectation
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});